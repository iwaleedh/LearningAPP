/**
 * crons.ts — Scheduled Serverless Jobs
 *
 * Convex crons run on a fixed schedule. Each entry triggers an internal
 * mutation or action that performs background maintenance.
 *
 * Jobs:
 *   1. processEventQueue            — every 30s: drain pending pub/sub events
 *   2. cleanupEndedSessions         — every hour: delete stale ended sessions
 *   3. cleanupOldEvents             — daily: purge processed events older than 7 days
 *   4. cleanupOldLogs               — daily: purge log entries older than 14 days
 *   5. detectNaNProjections         — nightly: D2 alert on corrupt badge projections
 *   6. detectOrphanedApprovals      — nightly: D10 alert on approved requests missing entitlementId
 *   7. repairDuplicateFlashcardProgress — nightly: D11 delete stale duplicate flashcardProgress rows
 *   8. cleanupStalePaymentUploadIntents — hourly: purge expired and old consumed payment upload intents
 */
import { cronJobs } from "convex/server";
import { internal } from "./_generated/api";

const crons = cronJobs();

// ── Process pending pub/sub events every 30 seconds ─────────────────
crons.interval(
  "process event queue",
  { seconds: 30 },
  internal.eventHandlers.processEventQueue,
);

// ── Cleanup ended sessions every hour ───────────────────────────────
crons.interval(
  "cleanup ended sessions",
  { hours: 1 },
  internal.sessions.cleanupEndedSessions,
);

// ── Purge old processed events daily ────────────────────────────────
crons.interval(
  "cleanup old events",
  { hours: 24 },
  internal.eventBus.cleanupOldEvents,
  { olderThanMs: 7 * 24 * 60 * 60 * 1000 }, // 7 days
);

// ── Purge old log entries daily ─────────────────────────────────────
crons.interval(
  "cleanup old logs",
  { hours: 24 },
  internal.logs.cleanupOldLogs,
  { maxAgeMs: 14 * 24 * 60 * 60 * 1000 }, // 14 days
);

// ── Purge stale payment upload intents hourly ──────────────────────
crons.interval(
  "cleanup stale payment upload intents",
  { hours: 1 },
  internal.paymentRequests.cleanupStalePaymentUploadIntents,
);

// ── D2: Detect NaN badge metric projections nightly at 03:00 UTC ────
crons.daily(
  "D2 detect NaN badge projections",
  { hourUTC: 3, minuteUTC: 0 },
  internal.dataQuality.detectNaNProjections,
);

// ── D10: Detect orphaned payment approvals nightly at 03:10 UTC ─────
crons.daily(
  "D10 detect orphaned payment approvals",
  { hourUTC: 3, minuteUTC: 10 },
  internal.dataQuality.detectOrphanedApprovals,
);

// ── D11: Repair duplicate flashcard progress rows nightly at 03:20 UTC
crons.daily(
  "D11 repair duplicate flashcard progress",
  { hourUTC: 3, minuteUTC: 20 },
  internal.dataQuality.repairDuplicateFlashcardProgress,
);

export default crons;
