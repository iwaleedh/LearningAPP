type MockIdentity = {
  subject: string;
  role?: string;
  appRole?: string;
  app_role?: string;
  publicMetadata?: { role?: string };
  public_metadata?: { role?: string };
  preferredUsername?: string;
  nickname?: string;
  name?: string;
  email?: string;
} | null;

type MockTables = Record<string, Array<Record<string, any>>>;

type SchedulerCall = {
  delayMs: number;
  args: any;
};

function cloneTables(tables: MockTables = {}) {
  return Object.fromEntries(
    Object.entries(tables).map(([table, rows]) => [table, structuredClone(rows)])
  );
}

function buildFilterTools() {
  const resolveField = (value: any) =>
    typeof value === "object" && value !== null && "__field" in value ? value.__field : value;

  return {
    field(name: string) {
      return { __field: name };
    },
    eq(left: any, right: any) {
      const fieldName = resolveField(left);
      return (doc: Record<string, any>) => doc[fieldName] === right;
    },
    lt(left: any, right: any) {
      const fieldName = resolveField(left);
      return (doc: Record<string, any>) => doc[fieldName] < right;
    },
    and(...predicates: Array<(doc: Record<string, any>) => boolean>) {
      return (doc: Record<string, any>) => predicates.every((predicate) => predicate(doc));
    },
    or(...predicates: Array<(doc: Record<string, any>) => boolean>) {
      return (doc: Record<string, any>) => predicates.some((predicate) => predicate(doc));
    },
  };
}

class MockQuery {
  private readonly rows: Array<Record<string, any>>;
  private readonly indexPredicates: Array<(doc: Record<string, any>) => boolean> = [];
  private readonly filterPredicates: Array<(doc: Record<string, any>) => boolean> = [];
  private orderDirection: "asc" | "desc" | null = null;

  constructor(rows: Array<Record<string, any>>) {
    this.rows = rows;
  }

  withIndex(_name: string, callback?: (query: { eq: (field: string, value: any) => any }) => any) {
    if (callback) {
      const conditions: Array<{ field: string; value: any }> = [];
      const chain = {
        eq: (field: string, value: any) => {
          conditions.push({ field, value });
          return chain;
        },
      };
      callback(chain);
      this.indexPredicates.push(
        ...conditions.map(({ field, value }) => (doc: Record<string, any>) => doc[field] === value)
      );
    }
    return this;
  }

  filter(callback: (query: ReturnType<typeof buildFilterTools>) => (doc: Record<string, any>) => boolean) {
    const predicate = callback(buildFilterTools());
    if (predicate) {
      this.filterPredicates.push(predicate);
    }
    return this;
  }

  order(direction: "asc" | "desc") {
    this.orderDirection = direction;
    return this;
  }

  async collect() {
    return this.getRows();
  }

  async first() {
    return this.getRows()[0] ?? null;
  }

  async take(count: number) {
    return this.getRows().slice(0, count);
  }

  private getRows() {
    const rows = this.rows
      .filter((row) => this.indexPredicates.every((predicate) => predicate(row)))
      .filter((row) => this.filterPredicates.every((predicate) => predicate(row)));

    if (this.orderDirection === "desc") {
      rows.reverse();
    }
    return rows;
  }
}

export function createMockConvexCtx({
  identity,
  tables = {},
}: {
  identity: MockIdentity;
  tables?: MockTables;
}) {
  const data = cloneTables(tables);
  const schedulerCalls: SchedulerCall[] = [];
  let nextId = 1;

  function ensureTable(table: string) {
    if (!data[table]) {
      data[table] = [];
    }
    return data[table];
  }

  function findRowById(id: string) {
    for (const [table, rows] of Object.entries(data)) {
      const row = rows.find((candidate) => String(candidate._id) === String(id));
      if (row) {
        return { table, row };
      }
    }
    return null;
  }

  const ctx = {
    auth: {
      async getUserIdentity() {
        return identity;
      },
    },
    db: {
      query(table: string) {
        return new MockQuery(ensureTable(table));
      },
      async get(id: string) {
        return findRowById(id)?.row ?? null;
      },
      async insert(table: string, value: Record<string, any>) {
        const row = {
          ...structuredClone(value),
          _id: value._id ?? `${table}:${nextId++}`,
        };
        ensureTable(table).push(row);
        return row._id;
      },
      async patch(id: string, patch: Record<string, any>) {
        const match = findRowById(id);
        if (!match) {
          throw new Error(`Row not found: ${id}`);
        }
        Object.assign(match.row, structuredClone(patch));
      },
      async delete(id: string) {
        const match = findRowById(id);
        if (!match) return;
        data[match.table] = data[match.table].filter((row) => String(row._id) !== String(id));
      },
    },
    scheduler: {
      async runAfter(delayMs: number, _reference: unknown, args: any) {
        schedulerCalls.push({ delayMs, args });
      },
    },
  };

  return {
    ctx,
    tables: data,
    schedulerCalls,
  };
}
