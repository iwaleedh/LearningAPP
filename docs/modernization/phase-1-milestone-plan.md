# Phase 1 Milestone Plan

## Scope

This milestone operationalizes the first seven P0 items from `backlog.json` as a single release-hardening tranche.

## Status

This milestone is complete on the current branch as of 2026-04-05.

## Milestone M1: Runtime and Platform Baseline

Target items:

1. `MOD-001` Convex declared as canonical backend
2. `MOD-002` Dead SpacetimeDB subtree removed
3. `MOD-003` `useSyllabus` regression fixed
4. `MOD-004` Runtime lint separated from pipeline lint
5. `MOD-005` Frontend deployment standardized to root-path hosting
6. `MOD-006` Runtime feature flags enforced for routes and entry points
7. `MOD-007` Frontend quality gate added to CI

## Exit Criteria

1. `npm run lint` passes against the app runtime target.
2. `npm test` passes without weakening the `useSyllabus` assertions.
3. `npm run build` succeeds with a root-path production build.
4. Deploy workflow blocks Convex production deploy on failing lint, tests, or build.
5. Product routes and navigation respect backend-managed feature flags.

## Delivery Notes

1. Frontend hosting is treated as root-path hosting behind `vercel.json`.
2. Convex remains the only supported backend deployment target.
3. Payment uploads and live class now have backend-managed kill switches.
4. Historical pipeline lint remains available through `npm run lint:pipeline` but no longer blocks app delivery.
5. The legacy SpacetimeDB subtree and its active support references were removed during this milestone.
