# Bug audit — 2026-10-08

> Subsequent scope change: live classes and the Advanced demonstration page were removed. Findings about those deleted components are historical.

The audit combined project-wide linting, backend type checking, production builds,
unit and backend tests, import validation of all 2,017 seed notes, and targeted
manual review of study flows, persistence, offline caching, and canvas APIs.
Existing user edits to Biology, Business, Chemistry, and `useSyllabus.js` were
preserved. This is not a guarantee that every application path or every line of
educational content is correct.

Verified defects corrected:

- The graph parser evaluated `-x^2` as `(-x)^2`, rejected exponent chains, accepted
  incomplete syntax, mishandled whitespace and scientific notation, and lost the
  sign of division by zero. It now follows mathematical precedence, consumes the
  complete expression, and rejects invalid plot step counts.
- Pending draft text was discarded when navigating away before the debounce
  expired. Drafts now flush on cleanup, and their current value is updated before
  React renders. Access to unavailable browser storage is handled safely.
- React StrictMode cleanup permanently disabled the mock grading component's
  mounted guard. Effect setup now restores it.
- Live-class page switching and student canvas reconciliation treated Fabric 7's
  object reviver as a load-completion callback. They now wait for its Promise,
  including empty snapshots. Failed asynchronous restores release the history
  guard; live-class effect setup also restores its mounted guard.
- Annotation and live-class snapshots used `toJSON(['data'])`, but Fabric 7 ignores
  that argument. `toObject(['data'])` preserves the stroke IDs and other metadata
  required for synchronization and undo.
- Guest imports could stay permanently locked after initial local reads failed.
  Those reads now happen inside the lock's `try/finally`.
- A failed seed-note download remained in the Promise cache forever. Failed
  entries are now removed so subsequent loads can retry.
- Eight Business Topic 16 notes contained 84 blocks without IDs. Stable IDs now
  allow their table-of-contents entries to target the rendered headings.
- Service-worker code-cache writes were detached from the event lifetime and
  could reject without handling. Writes now use `waitUntil`, handle storage
  failures, and cache successful same-origin GET responses. Missing offline
  entries produce valid error responses.
- The test runner unnecessarily started the tsx CLI socket. It now starts Node
  with the tsx import hook, preserving TypeScript/JSX support without that socket.

Local content-generation scripts under `scripts/pipeline/` also had seven syntax
errors and two lint violations. These were corrected, a misplaced output path
was corrected, and CommonJS execution was configured for the legacy `.js`
scripts. The single ESM script was renamed to `test_syntax.mjs`. This directory
is excluded by the existing `.gitignore`; these fixes are local workspace
changes and will not be included in a normal Git commit.

Validation completed:

- `npm run lint:all` — passed.
- `npm run build` — passed.
- `npm run test:unit` — 149 passed, including all seed-note block IDs.
- `npm run test:integration` — 123 passed.
- `npm run test:seed` — passed.
- `tsc -p convex/tsconfig.json --noEmit` — passed.
- Component-level checks using the installed DOM tooling verified draft
  persistence on unmount and mock grading completion under StrictMode.
- A Fabric object serialization/deserialization check preserved stroke metadata.
- Playwright discovered 37 browser tests, including two new advanced-feature
  regressions. Execution was blocked by the sandbox's `listen EPERM` restriction
  on `127.0.0.1:4173`. These tests still need to run in an environment that permits
  the local web server.

Live remote services, deployment behavior, browser layouts, and the scientific
accuracy of every note were not exhaustively validated.
