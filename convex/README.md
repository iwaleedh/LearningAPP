# Convex Backend Architecture

## Domain Boundaries

The backend is organised into four logical domains. Each domain owns specific
tables and exposes public mutations/queries. Cross-domain communication uses
the **event bus** (pub/sub) rather than direct table access.

### 1. Content Domain — Notes & Learning Material

| Module | Tables Owned | Purpose |
|--------|-------------|---------|
| `notes.ts` | `notes` | Note CRUD (upsert, get, list, delete) |
| `flashcards.ts` | `flashcards` | Spaced-repetition flashcard management |
| `assets.ts` | `noteAssets` | Binary/text assets linked to notes |

### 2. Collaboration Domain — Live Classes & Sessions

| Module | Tables Owned | Purpose |
|--------|-------------|---------|
| `sessions.ts` | `liveSessions`, `sessionParticipants` | Live session lifecycle |
| `liveclass.ts` | `liveClasses`, `liveClassParticipants` | Persistent class management |
| `strokes.ts` | `strokes` | Canvas drawing data |
| `cursors.ts` | `cursors` | Real-time cursor positions |
| `handraises.ts` | `handRaises` | Student hand-raise queue |
| `timers.ts` | `timers` | Session countdown timers |
| `invites.ts` | `invites` | Session/class invitations |
| `joinRequests.ts` | `joinRequests` | Join request approval flow |

### 3. Identity Domain — Users & Auth

| Module | Tables Owned | Purpose |
|--------|-------------|---------|
| `users.ts` | `users` | Registration, profile, role management |

### 4. Platform Domain — Infrastructure & Observability

| Module | Tables Owned | Purpose |
|--------|-------------|---------|
| `eventBus.ts` | `events` | Pub/sub message broker |
| `eventHandlers.ts` | — | Event subscriber dispatch |
| `logs.ts` | `logs` | Structured log ingestion & query |
| `crons.ts` | — | Scheduled background jobs |
| `http.ts` | — | REST API endpoints (health, webhooks) |

## Cross-Domain Communication Rules

1. **Content → Collaboration:** Never access `liveSessions` or `strokes` tables
   from `notes.ts`. Use the event bus to signal content changes.

2. **Collaboration → Content:** Never write to `notes` table from `sessions.ts`.
   Read-only queries for display purposes are allowed via the gateway.

3. **Identity → All:** `users` table can be queried (read-only) by any domain
   for userId resolution. Writes ONLY via `users.ts`.

4. **Platform → All:** `events` and `logs` tables are write-accessible from any
   domain via `eventBus.internalPublish` and `logs.ingestLogBatch`. Direct
   table writes to other domains' tables are prohibited.

## Gateway Pattern

`gateway.ts` provides cross-domain orchestration queries that join data from
multiple domains in a single read-only query. This avoids modules directly
importing and querying each other's tables.

## Event Topics

| Topic | Published By | Subscribers |
|-------|-------------|-------------|
| `note:updated` | `notes.ts` | eventHandlers (logging) |
| `note:deleted` | `notes.ts` | eventHandlers (logging, cleanup) |
| `session:ended` | `sessions.ts` | eventHandlers (logging, stats) |
| `user:registered` | `users.ts` | eventHandlers (logging, welcome) |
| `class:ended` | `liveclass.ts` | eventHandlers (logging, cleanup) |

A query function that takes two arguments looks like:

```ts
// convex/myFunctions.ts
import { query } from "./_generated/server";
import { v } from "convex/values";

export const myQueryFunction = query({
  // Validators for arguments.
  args: {
    first: v.number(),
    second: v.string(),
  },

  // Function implementation.
  handler: async (ctx, args) => {
    // Read the database as many times as you need here.
    // See https://docs.convex.dev/database/reading-data.
    const documents = await ctx.db.query("tablename").collect();

    // Arguments passed from the client are properties of the args object.
    console.log(args.first, args.second);

    // Write arbitrary JavaScript here: filter, aggregate, build derived data,
    // remove non-public properties, or create new objects.
    return documents;
  },
});
```

Using this query function in a React component looks like:

```ts
const data = useQuery(api.myFunctions.myQueryFunction, {
  first: 10,
  second: "hello",
});
```

A mutation function looks like:

```ts
// convex/myFunctions.ts
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const myMutationFunction = mutation({
  // Validators for arguments.
  args: {
    first: v.string(),
    second: v.string(),
  },

  // Function implementation.
  handler: async (ctx, args) => {
    // Insert or modify documents in the database here.
    // Mutations can also read from the database like queries.
    // See https://docs.convex.dev/database/writing-data.
    const message = { body: args.first, author: args.second };
    const id = await ctx.db.insert("messages", message);

    // Optionally, return a value from your mutation.
    return await ctx.db.get("messages", id);
  },
});
```

Using this mutation function in a React component looks like:

```ts
const mutation = useMutation(api.myFunctions.myMutationFunction);
function handleButtonPress() {
  // fire and forget, the most common way to use mutations
  mutation({ first: "Hello!", second: "me" });
  // OR
  // use the result once the mutation has completed
  mutation({ first: "Hello!", second: "me" }).then((result) =>
    console.log(result),
  );
}
```

Use the Convex CLI to push your functions to a deployment. See everything
the Convex CLI can do by running `npx convex -h` in your project root
directory. To learn more, launch the docs with `npx convex docs`.
