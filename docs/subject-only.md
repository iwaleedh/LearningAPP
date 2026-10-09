# Subject-only application

Removed live-class routes, teacher dashboards and monitoring, shared classroom notes, class invitations and notifications, collaborative annotation APIs, cursors, hand raises, polls, timers, templates and stencils. Removed the Advanced and Backend Architectures demonstration pages.

Subject notes, exercises, past papers, private PDF annotation, flashcards, progress and mistakes remain. Account authentication, settings and admin controls remain.

Legacy collaboration tables are archived in the Convex schema to preserve existing records. No classroom API is exposed by the updated backend source. No production deployment or data deletion was performed. The remaining backend still uses Convex and awaits a separate Netlify migration.

Validation: 142 unit tests, 91 backend tests, deterministic fixture verification, 39 memory-stability checks, frontend lint, backend type checking, and production build passed. The three new Playwright regressions are discoverable, but execution is blocked by the workspace denying local server ports (`listen EPERM` at 127.0.0.1:4173).
