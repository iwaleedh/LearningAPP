# ADR Plan

Create these Architecture Decision Records before or during Phase 1.

## ADR-001 Canonical Backend

- Decision: Convex is the only active application backend
- Status: accepted and implemented in phase 1
- Deadline: before Phase 1 kickoff

## ADR-002 Canonical Hosting Model

- Decision: standardize frontend hosting and environment promotion path
- Status: accepted and implemented in phase 1
- Deadline: before first deployment pipeline changes

## ADR-003 Feature Flag Policy

- Decision: all risky rollouts require enforced runtime flags with owners and sunset dates
- Status: accepted and implemented in phase 1
- Deadline: before release-gating work

## ADR-004 Offline Policy

- Decision: local persistence is cache/draft resilience only, not canonical product state for authenticated users
- Status: proposed
- Deadline: before storage consolidation work

## ADR-005 Content Delivery Model

- Decision: notes and exercises move from bundled JS modules to fetched manifests/assets
- Status: proposed
- Deadline: before Phase 3 implementation

## ADR-006 Internal Tools Boundary

- Decision: internal QA and educational architecture pages must not live in the end-user product runtime unless explicitly approved
- Status: proposed
- Deadline: before route cleanup

## ADR-007 Observability Standard

- Decision: release dashboards, error monitoring, alert thresholds, and rollback telemetry are mandatory for production changes
- Status: proposed
- Deadline: before observability baseline rollout

## ADR-008 Frontend Typing Strategy

- Decision: incremental TypeScript adoption begins with services, hooks, contracts, and platform modules
- Status: proposed
- Deadline: before TypeScript migration work starts
