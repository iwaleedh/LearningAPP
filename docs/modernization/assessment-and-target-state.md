# Living Textbook Modernization Assessment And Target State

## Scope

This assessment covers:

- Frontend framework, routing, module boundaries, styling, content delivery, and client state
- Backend services, data model ownership, authentication, authorization, and runtime boundaries
- Build tooling, CI/CD, environment configuration, deployment architecture, and asset delivery
- API surface, future API versioning, migration, deprecation, observability, and rollback strategy
- Security, privacy, accessibility, performance, maintainability, and technical debt

## Inputs And Constraints

Status update on 2026-04-05:

- `MOD-001` through `MOD-007` were completed in the current branch after this baseline assessment was written
- Legacy-backend findings below were updated where they would otherwise misstate the current repo state
- The broader target-state and later-phase recommendations remain intentionally forward-looking

### Inputs Used

- Current codebase in this repository
- Existing route and architecture documentation in `AGENTS.md` and `CLAUDE.md`
- Current CI workflows in `.github/workflows/`
- Current package and build configuration in `package.json`, `vite.config.js`, and `vercel.json`
- Existing tests, Playwright coverage, and editor diagnostics

### Explicit Findings From The Repo

- Active app stack is React 19 + Vite + Convex + Clerk, not SpacetimeDB
- Total implementation and support file count sampled from `src`, `convex`, `tests`, `public`, and `.github`: 8,783 files
- Seed note source files: 2,020
- Exercise source files: 354
- Built assets after production build: 2,463
- Static past-paper files: 4,462
- Build succeeds in 19.43 seconds
- Original baseline found failing `useSyllabus` tests and mixed runtime/pipeline lint errors; those runtime issues were addressed in the completed phase-1 tranche

### Missing Business Inputs That Must Be Confirmed

- Revenue-critical user journeys and north-star product metrics
- Target regions and hosting/data residency requirements
- Regulatory obligations beyond general privacy hygiene
- Required localization scope beyond current English-first UI with Dhivehi font support
- SLA expectations for admin, teacher, and live-class workflows
- Long-term SEO expectations for public landing and content discoverability

### Working Assumptions

- This is a mobile-first authenticated learning product, not a content marketing site
- Teacher/live-class capabilities are differentiating features, but note reading and revision flows remain the product core
- Pragmatic modernization is preferred over full-stack replacement
- The current PR for fullscreen note reading should not be disrupted by broad refactors

## Current-State Assessment

### Frontend

Strengths:

- Route-level lazy loading is already in place
- Existing accessibility test coverage is materially better than average
- Mobile Playwright coverage exists for note reading and teacher auth flows
- The design system already uses CSS custom properties rather than framework lock-in

Issues:

- Product and internal/demo surfaces are mixed into the same runtime app shell
- Content is bundled as code at very high volume, producing thousands of build assets
- Persistence strategy is fragmented between Convex, IndexedDB, localStorage, and BroadcastChannel
- Feature flags are exposed but not used for real runtime gating
- Frontend remains JavaScript-heavy with limited type safety across services and state boundaries

### Backend

Strengths:

- Convex backend is already structured around functional domains
- Authentication and role checks are present and well represented in tests
- Logging ingestion, payment workflows, approval gating, and live class support exist

Issues:

- Backend ownership is not cleanly represented in repository documentation
- Historical SpacetimeDB assets previously created false architectural signals, but the legacy backend subtree has now been removed from the product repo
- Some domain boundaries are logical rather than enforced
- The app still relies on client-side fallbacks for data that should be canonical server state
- External HTTP surface is minimal and not versioned

### Operations And Delivery

Strengths:

- Convex deploy workflow exists
- Mobile regression workflow exists
- Vercel headers are defined

Issues:

- No single authoritative deployment path
- Frontend release flow is not formalized in CI/CD
- No progressive delivery discipline despite existing flags
- Logging exists, but alerting and dashboarding are incomplete
- Health monitor comments imply server health checks, but the client implementation only checks local client presence

## Concrete Issues To Fix

### P0

- Remove dead architectural ambiguity by declaring Convex as canonical backend everywhere
- Fix failing `useSyllabus` tests and the underlying implementation drift
- Split runtime linting from historical script linting, then drive runtime lint to zero
- Enforce feature flags in the UI and route guards instead of leaving them admin-only metadata
- Standardize production deployment path and environment promotion model

### P1

- Collapse duplicate storage for read progress and activity metrics into Convex-backed canonical flows
- Refactor live-class sync to reduce dual local and Convex transport logic
- Move non-product or internal QA pages behind internal-only access or into docs/tools
- Add production error tracking, alerting, and release dashboards
- Introduce typed contracts for services, hooks, and cross-module DTOs

### P2

- Replace content-as-bundled-JS with fetched manifests and data assets for notes and exercises
- Move large PDF delivery to object storage/CDN with signed or controlled access where needed
- Rationalize repo structure so generation scripts and extracted artifacts do not live beside app sources
- Add formal API versioning for external HTTP endpoints

## Components And Paths To Remove Or Sunset

### Immediate Removal Candidates

- `spacetime-backend/`
  - Status: completed in phase 1
  - Reason: this dead runtime path was removed because it created documentation drift and a false parallel-backend narrative
- Spacetime compatibility exports and naming in `src/convex-client.js`
  - Status: completed in phase 1
  - Reason: unnecessary compatibility surface kept the legacy mental model alive
- Root-level data-generation artifacts and extracted content directories from the application root
  - Reason: repo pollution, onboarding noise, lint contamination, accidental production coupling

### Defer Then Remove

- Legacy localStorage migration helpers in note/student asset services
  - Reason: keep until migration success thresholds are met, then remove after sunset window
- `AdvancedPage` runtime Convex test utilities
  - Reason: belongs in internal QA tooling, not production app surface
- `BackendArchitecturesPage`
  - Reason: informational/educational content is not core product behavior; move to internal docs or marketing if retained at all

### Preserve But Refactor

- `TeacherMonitorPage`
  - Keep if operationally useful, but treat as internal teacher tooling with tighter auth, telemetry, and route isolation

## Target Architecture Delta

### Frontend Target State

Keep:

- React + Vite
- CSS custom property design system
- React Router

Change:

- Adopt incremental TypeScript for `src/services`, `src/hooks`, `src/context`, and high-risk pages first
- Split the app into explicit layers:
  - `app-shell`
  - `domains/content`
  - `domains/study`
  - `domains/live-class`
  - `domains/admin`
  - `platform/auth`, `platform/observability`, `platform/offline`
- Replace code-bundled subject content with fetched manifests and data payloads
- Keep offline only for read-through cache and transient drafts, not as a second canonical domain model
- Introduce a typed feature gate layer used by routes, navigation, and page entry points
- Move internal QA utilities into a protected internal tools surface or local-only dev tooling

### Backend Target State

Keep:

- Convex as the application backend
- Clerk if current cost and operational profile remain acceptable

Change:

- Formalize Convex as a modular monolith, not a proto-microservice system
- Define domain ownership and cross-domain communication rules as ADRs
- Move externally consumed endpoints behind a versioned edge API surface
- Standardize canonical storage for:
  - user identity and approval
  - read progress
  - activity metrics
  - flashcard progress
  - live-class state
- Restrict offline/local fallback state to temporary resilience only
- Add data retention policies and archiving rules for logs and analytics events

### Data Flow Delta

Current:

- Anonymous and authenticated flows can diverge into different stores
- Live-class sync is dual-path
- Some analytics rely on local state and some on server state

Target:

- Convex is canonical for any user-affecting state that must survive devices or sessions
- Local persistence is only for draft resilience, offline queueing, and cache
- Background sync or explicit reconciliation jobs move queued client writes to Convex when connectivity returns
- Analytics and read progress flow through one event model with durable IDs

### Deployment Architecture Delta

Recommended target:

- Frontend: Vercel
- Backend/application data: Convex
- Asset delivery for PDFs and large content binaries: object storage + CDN
- Error tracking: Sentry or equivalent
- Product analytics: Vercel Analytics/PostHog or equivalent
- Uptime/alerting: managed synthetic checks + dashboarding

This is preferred over continuing mixed GitHub Pages, Vercel, and ad hoc static delivery conventions.

## Recommended Tech Stack Changes

### Adopt

- TypeScript incrementally in the frontend
- Zod or equivalent for runtime schema validation of edge/API payloads
- Sentry or equivalent for frontend error monitoring
- Object storage/CDN for past papers and heavyweight content assets
- ADRs in-repo for architectural governance

### Keep For Now

- React 19
- Vite 7
- Clerk
- Convex
- Vanilla CSS with design tokens

### Avoid

- Replacing Convex with microservices prematurely
- Rewriting styling into Tailwind or a component framework without product need
- Full SSR migration unless SEO becomes a first-class business requirement

## API Versioning And Deprecation Strategy

### Internal App APIs

- Use typed client contracts and semantic module boundaries rather than URL versioning
- Mark deprecated functions with explicit replacement references and sunset dates

### External/HTTP APIs

- Introduce `/api/v1/...` immediately for any public or webhook-oriented routes
- Add `/api/v2/...` only when breaking contract changes are unavoidable
- Maintain at least one supported prior version during migration windows
- Require contract tests, changelog entries, and deprecation headers for versioned endpoints

### Deprecation Policy

- Announce: T0
- Disable for new consumers: T0 + 30 days
- Remove from default docs and UI references: T0 + 60 days
- Hard removal: T0 + 90 to 180 days depending on external dependency footprint

## Migration And Transition Plan

### Data

- Migrate read progress to canonical Convex-backed storage
- Migrate legacy activity counters into server-backed analytics projections
- Continue one-time migration of local note assets, then remove migration code after success threshold
- Add rollback-safe migration checkpoints and verification reports for each data move

### APIs

- Wrap current HTTP endpoints behind versioned routing
- Add contract tests before changing payload structure
- Provide compatibility adapters for one deprecation window where required

### Infrastructure

- Separate dev, preview, and production environments with explicit promotion
- Align environment variables and secrets across frontend host and Convex
- Move large static assets off the app bundle path

## Risk And Dependency Analysis

### Primary Risks

- Live-class regressions during sync consolidation
- Data mismatch during local-to-server migration
- Longer-than-expected content migration because note content currently lives as code
- Team slowdown if TypeScript adoption is attempted too broadly at once
- Release risk if feature flags remain unenforced while architecture work is in flight

### Key Dependencies

- Stakeholder decision on canonical hosting
- Product decision on internal-only pages versus product features
- Access to production observability and current usage data
- Agreement on privacy and retention requirements

## Security And Privacy Assessment

### Strengths

- Strong evidence of auth and authorization test coverage
- Log metadata redaction exists in the client logger
- Payment request workflow has meaningful validation tests

### Gaps

- Silent log shipping failure drops telemetry without escalation
- Health monitoring is not true end-to-end health monitoring
- Production CSP and header policy are not centrally governed across all runtime surfaces
- Privacy classification, retention periods, and deletion workflows are not described as governance artifacts
- Development auth fallback exists and must stay impossible to enable in production

### Security Hardening Plan

- Add threat model for auth, live class, uploads, and admin tooling
- Add secret scanning and dependency auditing to CI
- Add environment policy checks preventing dev auth in production
- Define data classification and retention controls for logs, payments, notes, and student activity
- Add regular access review for admin and teacher capabilities

## Performance Audit And Targets

### Current Performance Risks

- 2,463 build assets indicates severe bundle fragmentation and content-as-code inflation
- 2,020 note modules and 354 exercise modules create build and cache complexity
- Large static past-paper inventory should not compete with interactive app assets for delivery strategy

### Target Performance Budgets

- Public landing LCP: <= 2.5s at p75 mobile
- Authenticated home route JS: <= 250 KB gzip initial critical path
- Note page route JS excluding fetched note content: <= 350 KB gzip
- Interaction response for core note controls: <= 100 ms at p75
- Error-free mobile regression build time in CI: <= 15 minutes total pipeline target

### Performance Plan

- Move note/exercise payloads out of bundled JS and into fetched manifests/assets
- Add route prefetching only for likely next steps
- Define and enforce bundle budgets in CI
- Introduce CDN strategy for PDFs and immutable content assets

## Accessibility Conformance Plan

Target WCAG 2.2 AA.

Plan:

- Keep and expand existing accessibility tests
- Add automated axe checks in Playwright for critical flows
- Audit focus management across dialogs, sheets, and fullscreen note mode
- Standardize touch target minimums and error-state announcements
- Audit color contrast across all themes and special content blocks
- Add accessibility acceptance criteria to every UI backlog item

## Maintainability Review

### Problems

- Documentation drift between actual runtime architecture and repo docs
- Repo root contains application code, generated data artifacts, experiments, and pipelines together
- Compatibility shims preserve outdated mental models
- Too much behavior is hidden in large service modules instead of explicit boundaries

### Maintainability Plan

- Restructure repo around product runtime, content pipeline, and docs/tooling boundaries
- Introduce ADRs for backend ownership, deployment, offline policy, and content delivery
- Create naming and module conventions for routes, services, hooks, stores, and DTOs
- Use lightweight architecture linting through directory boundaries and import rules

## Technical Debt And Dead Code Plan

Top debt areas:

- Historical SpacetimeDB legacy tree (completed in phase 1)
- runtime-plus-pipeline lint overlap
- localStorage/IndexedDB/Convex duplication
- content stored as code modules
- non-product pages in main runtime

Plan:

- Track debt explicitly in backlog with owner, sunset target, and acceptance criteria
- Remove dead code in early phases before starting deeper architectural refactors
- Make “no new duplication across storage layers” a standing architecture rule

## Phased Rollout And Rollback Strategy

### Rollout

- Phase 0: assessment validation and stabilization
- Phase 1: deployment, flags, lint/test baseline, removal of dead systems
- Phase 2: storage and sync consolidation
- Phase 3: content delivery re-platforming and performance optimization
- Phase 4: hardening, cleanup, and documentation closeout

### Rollback

- Every high-risk change must keep one rollback lever:
  - feature flag
  - route-level fallback
  - compatibility adapter
  - dual-write/dual-read transitional window
  - deployment rollback in host platform

### Feature Flag Strategy

Current state is insufficient because flags are admin-managed but not runtime-enforced.

Target strategy:

- Release flags for incomplete or risky features
- Operational kill switches for live class, uploads, and expensive services
- Migration flags for dual-write and cutover phases
- Experiment flags only after operational flags exist
- Flag ownership, expiry date, and removal criteria required for every new flag

## Testing And QA Strategy

### Unit

- Keep native/tsx unit tests for utility and service logic
- Add contract tests for schemas and adapters

### Integration

- Add service-to-Convex integration tests for critical mutations and query flows
- Add migration verification tests for dual-read/dual-write windows

### End-To-End

- Keep mobile Playwright coverage
- Add desktop smoke coverage for admin, payment approval, and live-class entry
- Add feature-flag aware E2E paths for rollout controls

### Performance

- Add bundle budget checks
- Add Lighthouse or equivalent synthetic checks for public and authenticated entry routes

### Security

- Add dependency audit, secret scan, and header/CSP policy checks in CI
- Add regression tests for auth bypass, upload abuse, and role escalation edge cases

### QA Process

- Every phase gets entry/exit criteria
- Release candidate checklist includes migration verification, rollback drill, and alert/dashboard validation
- No production cutover without signoff from engineering, product, and QA

## Monitoring, Logging, And Observability Requirements

### Required Signals

- frontend JS errors
- route performance and web vitals
- Convex mutation/query failure rates
- live-class session health and sync degradation
- upload success/failure rates
- payment approval funnel
- note page engagement and completion

### Required Dashboards

- release health dashboard
- note reading and revision funnel dashboard
- live-class operations dashboard
- payments and approvals dashboard
- security and auth anomalies dashboard

### SLEs / Service Level Expectations

- Core read flows available 99.9% monthly
- Admin and teacher tooling available 99.5% monthly
- Time to detect critical release regression: <= 10 minutes
- Time to rollback feature-flagged incident: <= 15 minutes

## Success Metrics

- Reduce build asset count by at least 60% on app runtime bundles
- Reduce production-severity incidents tied to sync/state mismatches by at least 70%
- Reach zero failing runtime lint errors and zero failing tests before phase cutover
- Achieve p75 mobile note-route LCP <= 2.5s after content delivery refactor
- Reduce median recovery time for release regressions through flags/rollback to <= 15 minutes

## Resources And Cost Ranges

Recommended delivery team:

- 1 tech lead / architect
- 2 frontend engineers
- 1 backend/platform engineer
- 1 QA automation engineer shared 50 to 100%
- 1 product/design partner shared 20 to 40%

Indicative effort:

- Phase 0: 2 engineer-weeks
- Phase 1: 8 to 14 engineer-weeks
- Phase 2: 10 to 16 engineer-weeks
- Phase 3: 12 to 20 engineer-weeks
- Phase 4: 4 to 6 engineer-weeks

Indicative cost ranges:

- MVP modernization: USD 60k to 120k equivalent
- Full program: USD 180k to 420k equivalent
- Additional infra cost uplift after observability/CDN adoption: USD 300 to 2,000 per month depending on traffic and retention

## Modernization Roadmap Summary

Phase 1 MVP definition:

- Canonical backend documented and legacy backend removed
- CI/CD standardized for frontend and backend
- Runtime feature flags enforced
- Failing tests fixed and runtime lint isolated
- Read progress and activity metrics start moving to canonical server-backed flows
- Production observability baseline in place

This is the minimum acceptable first phase because it materially reduces change risk without forcing a big-bang rewrite.

## Documentation, Standards, And Governance

Required artifacts:

- ADRs for backend canonical choice, deployment standard, content delivery model, offline policy, and feature-flag policy
- coding standards doc covering TypeScript migration rules, error handling, and API contracts
- UI/UX guidelines covering accessibility, responsive behavior, touch targets, typography scale, and motion principles
- naming conventions for hooks, services, queries, mutations, DTOs, feature flags, and migration steps
- operational runbooks for release, rollback, incident response, and migration cutovers

## Stakeholder Review And Signoff Process

### Required Stakeholders

- engineering lead
- product owner
- design lead for UI/UX changes
- QA lead
- operations/platform owner
- privacy/compliance reviewer if regulated scope is confirmed

### Review Sequence

1. Architecture review and scope confirmation
2. Phase 1 backlog approval
3. Deployment and observability signoff before rollout
4. Migration readiness review before data cutovers
5. Go-live review after rollback rehearsal

### Acceptance Criteria For This Plan

- one canonical backend and hosting strategy approved
- phase plan, backlog, and sunset decisions accepted
- MVP scope defined and funded
- observability, rollback, and migration criteria accepted before implementation begins

## Preferred Formats And Delivery Deadlines

Provided formats in this directory:

- Markdown for narrative assessment and executive summary
- JSON for prioritized backlog and risk register
- YAML for architecture delta, roadmap, migration, deprecation, and dashboard definitions
- Mermaid for editable architecture diagrams

Recommended planning deadlines:

- Stakeholder review of this package: within 5 business days
- Phase 1 implementation kickoff: within 10 business days of approval
- Phase 1 MVP completion target: within 6 weeks of kickoff
