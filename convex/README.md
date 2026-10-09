# LearningTracker backend

The active application focuses on subject study: notes, note assets, flashcards, exercises, past papers, progress, and mistakes. Account authentication, approval, payments, admin controls, feature flags, and operational logging remain.

Live-class APIs, shared annotation sessions, invitations, polls, timers, cursors, admission controls, and teacher analytics have been removed. Session-completion handlers and the classroom cleanup cron are also removed.

Legacy collaboration table definitions remain in `schema.ts` to preserve existing database records. Historical event schemas and admin account-deletion cleanup still understand those records. There are no active classroom routes or public classroom APIs. Removing archived production records would require a separate data migration.

The backend still uses Convex. Moving the remaining content and account workflows to Netlify Functions and a database is a separate migration; this change does not deploy or migrate production data.

Run backend tests with `npm run test:integration` and check types with `npx tsc -p convex/tsconfig.json --noEmit`.
