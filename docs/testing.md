# Testing Guide

This repository uses three default test layers:

- Unit: `src/**/*.test.js`
- Integration: `convex/**/*.test.ts`
- End-to-end: `tests/e2e/**/*.spec.js`

`npm run test` runs all three layers by default.

## Environment Prerequisites

- Node.js 20.x
- npm 10+
- `npm ci`
- `npx playwright install --with-deps chromium`

Local e2e runs use the debug-auth path when `VITE_CLERK_PUBLISHABLE_KEY=""` is unset or empty for the Playwright web server. That keeps the suite deterministic and avoids dependency on live Clerk state.

## Deterministic Seeds

Seed data for automated tests is code-defined and versioned in [../tests/support/testSeeds.js](../tests/support/testSeeds.js).

- Fixed clock anchor: `2026-04-06T12:00:00.000Z`
- Shared debug-auth sessions are created via `createDebugSession(...)`
- Shared browser fixtures cover access-expired notices, mistakes, and guest flashcards
- Shared browser seed helpers live in [../tests/e2e/support/browserSeeds.js](../tests/e2e/support/browserSeeds.js)

Verify the seed catalog with:

```bash
npm run test:seed
```

## Local Reproduction

Run the full repository suite:

```bash
npm ci
npx playwright install --with-deps chromium
npm run test
```

Run layers individually:

```bash
npm run test:unit
npm run test:integration
npm run test:e2e
```

Run a single Playwright spec:

```bash
npx playwright test tests/e2e/access-window.spec.js
```

## CI Reproduction

CI uses the same default sequence as local development:

```bash
npm run test:seed
npm run test:unit
npm run test:integration
npm run test:e2e
```

The deployment workflow also installs Playwright browsers and reruns the full suite before build and deploy.

## Failure Artifacts

- Playwright traces: `test-results/`
- Playwright HTML report: `playwright-report/`
- Failed workflow uploads: artifact bundle from the corresponding GitHub Actions job

## Suite Ownership

- Unit failures: fix in the touched component or service before merge
- Integration failures: treat as backend contract failures and block merge
- E2E failures: reproduce locally with the same seeded fixtures before quarantining

## Flaky Tests

Follow [flaky-test-triage.md](flaky-test-triage.md). Do not silently skip or delete unstable tests.
