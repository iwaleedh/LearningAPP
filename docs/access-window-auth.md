# Access Window Auth

This feature extends the existing Clerk plus Convex auth stack with a server-enforced access window, login event auditing, and login notification emails.

## Environment Variables

- `VITE_CLERK_PUBLISHABLE_KEY`: existing frontend Clerk key.
- `VITE_CONVEX_URL`: existing Convex deployment URL.
- `SENDGRID_API_KEY`: SendGrid API key used by the Convex login alert processor.
- `SENDGRID_FROM_EMAIL`: verified sender email for login alerts.
- `LOGIN_ALERT_TO_EMAIL`: recipient for login alerts. Defaults to `iwaleedh@gmail.com`.

## Data Model

Users now track:

- `firstSignInAt`
- `lastSignInAt`
- `accessWindowStartedAt`
- `accessDurationMonths`
- `accessExpiresAt`
- `accessRevokedAt`
- `accessRevokedReason`
- `sessionVersion`
- `lastAuthProvider`
- `lastAuthSessionId`
- `lastLoginEventId`

Additional tables:

- `authSessions`: tracks sign-in sessions and revocation state.
- `loginEvents`: immutable login and access-selection records plus email delivery state.
- `emailDeliveryAttempts`: durable SendGrid delivery-attempt history with trace IDs, masked recipients, HTTP status, and sanitized error text.
- `cronRuns`: durable cron run history with trace IDs, status, duration, and sanitized result/error payloads.
- `adminActionReceipts`: idempotency receipts for admin expiry-setting operations.

## Migration / Backfill

Convex does not use SQL migrations. Existing user rows can be backfilled lazily because all new fields are optional.

Recommended rollout:

1. Deploy schema and backend helpers first.
2. Let existing approved users fall into `selection_required` on their next sign-in.
3. Optionally add a one-off internal backfill mutation later if you want to pre-populate `sessionVersion: 1` and reporting metadata on all legacy users.

## Enforcement Model

- Backend enforcement happens in `convex/authHelpers.ts` on every protected request.
- Expired users are denied even if a Clerk token is still cached.
- `authSessions` plus `sessionVersion` allow app-level revocation across devices.
- The frontend signs users out when the backend reports `expired` or `revoked`.

## Email Delivery

- Successful sign-ins create a `loginEvents` row with `emailDeliveryStatus: pending`.
- A scheduled internal action attempts SendGrid delivery immediately and via cron retries.
- Email failures do not block login.

## Operational Observability

- Email delivery attempts are recorded in `emailDeliveryAttempts` with a per-attempt `traceId`.
- Recipient addresses are masked before persistence and error strings are sanitized to strip bearer tokens and raw email addresses.
- All cron schedules now execute through observability wrappers that write `cronRuns` rows before and after the underlying job.
- The admin observability dashboard reads `api.observability.getReleaseHealthSummary()` to show:
  - route, note, fullscreen, and recall telemetry
  - email delivery attempt, failure, and pending-alert counts
  - cron run and cron failure counts
  - active operational alerts derived from pending events, failed email attempts, pending login alerts, and failed cron runs

## Admin Expiry API Contract

Mutation: `api.admin.setUserAccessExpiry`

Arguments:

- `userId: string`
- `accessExpiresAt: number` — absolute future Unix epoch in milliseconds
- `reason?: string`
- `idempotencyKey?: string`

Behavior:

- Requires admin privileges.
- Rejects missing users, non-finite timestamps, past timestamps, and timestamps more than 5 years ahead.
- Clears any prior revocation markers, sets `accessWindowStartedAt` to `Date.now()`, stores the new expiry, and bumps `sessionVersion`.
- Revokes existing auth sessions so the new window is enforced on the next sign-in.
- Writes an `auditLogs` entry with previous and new expiry values.
- If the same admin retries the same `idempotencyKey`, the stored result is returned without reapplying the mutation.

## Migration / Rollout Notes

- Convex schema deployment will create the new optional tables with no backfill requirement.
- Existing `loginEvents` rows remain valid; delivery-attempt history is only recorded for new SendGrid attempts after deployment.
- Existing cron jobs do not need schedule changes beyond deploying the new wrapper targets in `convex/crons.ts`.

## Staging Verification

1. Trigger a sign-in in staging and confirm a `loginEvents` row reaches `emailDeliveryStatus: sent` or `failed`.
2. Confirm a matching `emailDeliveryAttempts` row is written with a `traceId`, masked recipient, and sanitized error text if delivery fails.
3. Wait for or manually invoke a cron cycle and confirm a `cronRuns` row is recorded for the job.
4. Open the admin dashboard Observability tab and confirm alerts, email failures, and cron runs are visible.
5. Use the admin Users tab to set a user expiry in the future and verify the mutation succeeds, the user row shows the updated due date, an `auditLogs` entry is written, and existing auth sessions are revoked.

## Rollback Guidance

- Frontend rollback: redeploy the previous frontend bundle; the new observability tables are additive and safe to leave in place.
- Backend rollback: redeploy the prior Convex functions if the new wrappers or admin mutation misbehave.
- Cron rollback: point `convex/crons.ts` back to the original direct targets if the observability wrappers cause issues.
- Data rollback is not required for the additive tables. If necessary, ignore the new tables operationally rather than deleting rows.
