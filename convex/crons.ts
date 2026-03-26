/**
 * crons.ts — Scheduled Serverless Jobs
 *
 * Convex crons run on a fixed schedule. Each entry triggers an internal
 * mutation or action that performs background maintenance.
 *
 * Jobs:
 *   1. processEventQueue  — every 30s: drain pending pub/sub events
 *   2. cleanupEndedSessions — every hour: delete stale ended sessions
 *   3. cleanupOldEvents   — daily: purge processed events older than 7 days
 *   4. cleanupOldLogs     — daily: purge log entries older than 14 days
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

export default crons;
