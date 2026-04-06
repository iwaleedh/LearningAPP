# Living Textbook Modernization Executive Summary

## Recommendation

Do not rewrite the product from scratch. Modernize it as a controlled consolidation program.

The repo already contains a viable product core:

- React 19 + Vite frontend
- Convex as the active backend
- Clerk-based authentication
- Meaningful automated coverage with 215 tests
- Existing mobile regression coverage for critical note and teacher flows

The highest-value work is to remove obsolete systems and reduce operational ambiguity, not replace the entire stack.

## Status Update

As of 2026-04-06, the release-hardening and state-canonicalization tranche for this program is complete on the current branch:

- Convex is now documented and enforced as the only active backend path
- The legacy SpacetimeDB subtree and active support references have been removed from the product repo
- The `useSyllabus` regression was fixed and the runtime quality gate was added to CI
- Frontend hosting and build configuration were standardized for root-path deployment
- Runtime feature flags now gate routes, navigation, and payment/live-class kill switches
- Release-health telemetry, note telemetry, and an admin observability surface are now in place
- Read progress is canonical in Convex for authenticated users, with local migration and summary hooks wired through the server path
- Activity metrics are now backed by server-side projections instead of authenticated local-only counters

## What Is Driving The Overhaul

The current platform has grown into a hybrid architecture with avoidable complexity:

- The repo recently carried a full SpacetimeDB backend as dead legacy, which created architectural ambiguity before the phase-1 cleanup removed it
- The app mixes Convex, IndexedDB, localStorage, and BroadcastChannel for overlapping responsibilities
- Feature flags existed in the backend and admin UI before phase 1, but are now enforced as runtime release controls
- Deployment ambiguity across GitHub Pages conventions, Vercel config, and Convex deployment was reduced by standardizing the active frontend build to root-path hosting
- Content is shipped as bundled JavaScript at very large scale: 2,020 note files, 354 exercise files, 2,463 built assets, and 4,462 past-paper files
- The original baseline mixed runtime lint failures with historical pipeline-script lint noise; runtime lint is now separated and CI-enforced
- The original baseline included failing `useSyllabus` tests; that regression is now resolved in the phase-1 tranche

## Strategic Direction

Target a Convex-first modular monolith with one production deployment path:

- Frontend: React + Vite + incremental TypeScript, design tokens, stricter route/module boundaries
- Backend: keep Convex, formalize domain ownership, reduce local fallback logic, add versioned edge APIs where external integration is required
- Content delivery: move from content-as-bundled-JS toward content-as-fetched assets/manifests for notes, exercises, and large PDFs
- Hosting: standardize on Vercel for frontend + Convex for application backend + object storage/CDN for PDFs and heavy static assets
- Observability: keep app-level structured logs, add proper error tracking and dashboarding

## Phase 1 MVP

Phase 1 should not attempt every architectural improvement. The MVP modernization slice is:

1. Standardize deployment and environments
2. Remove dead backend and non-product repo clutter
3. Fix failing tests and separate pipeline-script linting from runtime linting
4. Enforce actual feature-flag gates for risky features
5. Consolidate read progress and activity tracking around Convex
6. Add production-grade monitoring, alerting, and rollback controls

The current branch now delivers all six MVP items, including the observability baseline and the Convex-backed read/activity consolidation work.

## Expected Outcome

If executed in phases, the program should deliver:

- Lower change risk and clearer ownership boundaries
- Better mobile performance and smaller critical-route bundles
- Cleaner CI/CD with safer releases
- Stronger privacy, security, and operational visibility
- Fewer sync and persistence edge cases
- A maintainable foundation for future teacher, live class, and content features

## Indicative Timeline And Cost

- Phase 0 discovery and stabilization: 2 weeks
- Phase 1 MVP modernization: 4 to 6 weeks
- Phase 2 architecture consolidation: 6 to 8 weeks
- Phase 3 content and performance re-platforming: 6 to 10 weeks
- Total program: 4 to 6 months

Indicative team:

- 1 tech lead / architect
- 2 frontend engineers
- 1 backend / platform engineer
- 1 QA / automation engineer shared across phases
- 1 product/design counterpart part-time

Indicative cost range:

- MVP phase: USD 60k to 120k internal-equivalent effort
- Full program: USD 180k to 420k internal-equivalent effort

## Immediate Decisions Needed

1. Confirm canonical hosting path: Vercel + Convex is the recommended default
2. Confirm whether `BackendArchitecturesPage` and `AdvancedPage` belong in the product or should move to internal docs/tools
3. Confirm compliance target: baseline privacy hardening only, or formal GDPR/UK GDPR/education-sector controls
4. Confirm whether localization is English-only plus Dhivehi support, or whether true multilingual UI is in roadmap scope
5. Confirm the remaining sunset path for legacy localStorage migration code and other post-phase-1 cleanup items
