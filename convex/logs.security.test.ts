import test from "node:test";
import assert from "node:assert/strict";

import { ingestLogBatch } from "./logs";
import { createMockConvexCtx } from "./testUtils";

const ingestLogBatchHandler = (ingestLogBatch as any)._handler as (ctx: any, args: any) => Promise<any>;

function buildApprovedCtx() {
  return createMockConvexCtx({
    identity: { subject: "student_logger", role: "student" },
    tables: {
      users: [{
        _id: "users:student_logger",
        userId: "student_logger",
        username: "Logger",
        role: "student",
        accountStatus: "approved",
        createdAt: 1,
      }],
    },
  });
}

test("ingestLogBatch rejects oversized batches before inserting logs", async () => {
  const { ctx, tables } = buildApprovedCtx();

  const entries = Array.from({ length: 51 }, (_, index) => ({
    level: "info",
    message: `Entry ${index}`,
    component: "test",
    userId: "spoofed",
    sessionId: "",
    metadata: "{}",
    timestamp: 1,
  }));

  await assert.rejects(
    () => ingestLogBatchHandler(ctx, { entries }),
    /Log batch exceeds 50 entries\./
  );

  assert.equal(tables.logs?.length ?? 0, 0);
});

test("ingestLogBatch rejects invalid levels without partial writes", async () => {
  const { ctx, tables } = buildApprovedCtx();

  await assert.rejects(
    () => ingestLogBatchHandler(ctx, {
      entries: [
        {
          level: "trace",
          message: "bad level",
          component: "test",
          userId: "student_logger",
          sessionId: "",
          metadata: "{",
          timestamp: 1,
        },
      ],
    }),
    /level 'trace' is not allowed\./
  );

  assert.equal(tables.logs?.length ?? 0, 0);
});

test("ingestLogBatch rejects malformed metadata without partial writes", async () => {
  const { ctx, tables } = buildApprovedCtx();

  await assert.rejects(
    () => ingestLogBatchHandler(ctx, {
      entries: [
        {
          level: "info",
          message: "bad metadata",
          component: "test",
          userId: "student_logger",
          sessionId: "",
          metadata: "{",
          timestamp: 1,
        },
      ],
    }),
    /metadata must be valid JSON\./
  );

  assert.equal(tables.logs?.length ?? 0, 0);
});

test("ingestLogBatch uses the authenticated user id and server timestamp", async () => {
  const { ctx, tables } = buildApprovedCtx();
  const before = Date.now();

  const result = await ingestLogBatchHandler(ctx, {
    entries: [
      {
        level: "warn",
        message: "Something happened",
        component: "noteStore",
        userId: "spoofed_user",
        sessionId: " session:1 ",
        metadata: JSON.stringify({ ok: true }),
        timestamp: 123,
      },
    ],
  });

  const after = Date.now();
  assert.deepEqual(result, { inserted: 1 });
  assert.equal(tables.logs.length, 1);
  assert.equal(tables.logs[0]?.userId, "student_logger");
  assert.equal(tables.logs[0]?.level, "warn");
  assert.equal(tables.logs[0]?.sessionId, "session:1");
  assert.equal(tables.logs[0]?.metadata, JSON.stringify({ ok: true }));
  assert.ok(Number(tables.logs[0]?.timestamp) >= before);
  assert.ok(Number(tables.logs[0]?.timestamp) <= after);
});

test("ingestLogBatch rejects oversized message and metadata payloads", async () => {
  const { ctx, tables } = buildApprovedCtx();
  const largeMetadata = JSON.stringify({ blob: "x".repeat(5000) });

  await assert.rejects(
    () => ingestLogBatchHandler(ctx, {
      entries: [
        {
          level: "error",
          message: "x".repeat(1001),
          component: "test",
          userId: "student_logger",
          sessionId: "",
          metadata: largeMetadata,
          timestamp: 1,
        },
      ],
    }),
    /message exceeds 1000 characters\./
  );

  assert.equal(tables.logs?.length ?? 0, 0);
});