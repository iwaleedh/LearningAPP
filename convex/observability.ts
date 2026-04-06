import { internalAction, internalMutation, mutation, query } from "./_generated/server";
import { internal } from "./_generated/api";
import { v } from "convex/values";
import { requireAdmin, requireApprovedAuthenticatedUserId } from "./authHelpers";

const ALLOWED_EVENT_TYPES = new Set(["route_view", "note_view", "fullscreen_enter", "recall_open"]);
const MAX_ROUTE_LENGTH = 200;
const MAX_NOTE_ID_LENGTH = 200;
const MAX_SUBJECT_LENGTH = 80;
const MAX_METADATA_BYTES = 2048;
const DEFAULT_WINDOW_MS = 24 * 60 * 60 * 1000;
const MAX_RESULT_JSON_BYTES = 2048;
const MAX_ERROR_MESSAGE_LENGTH = 500;
const MAX_PROVIDER_LENGTH = 40;
const MAX_RECIPIENT_MASKED_LENGTH = 160;
const MAX_MESSAGE_ID_LENGTH = 160;
const MAX_TRACE_ID_LENGTH = 120;
const MAX_JOB_NAME_LENGTH = 120;

const anyInternal = internal as any;

function normalizeOptionalString(value: string | undefined, maxLength: number) {
  if (value === undefined) return undefined;
  const normalized = String(value || "").trim();
  if (!normalized) return undefined;
  if (normalized.length > maxLength) {
    throw new Error(`Value exceeds ${maxLength} characters.`);
  }
  return normalized;
}

function normalizeMetadataJson(value: string | undefined) {
  if (value === undefined) return undefined;
  const normalized = String(value || "").trim();
  if (!normalized) return undefined;
  if (normalized.length > MAX_METADATA_BYTES) {
    throw new Error(`metadataJson exceeds ${MAX_METADATA_BYTES} bytes.`);
  }

  let parsed;
  try {
    parsed = JSON.parse(normalized);
  } catch {
    throw new Error("metadataJson must be valid JSON.");
  }

  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error("metadataJson must be a JSON object.");
  }

  const reserialized = JSON.stringify(parsed);
  if (reserialized.length > MAX_METADATA_BYTES) {
    throw new Error(`metadataJson exceeds ${MAX_METADATA_BYTES} bytes.`);
  }
  return reserialized;
}

function summarizeRoutes(rows: Array<{ route: string }>) {
  const counts = new Map<string, number>();
  for (const row of rows) {
    counts.set(row.route, (counts.get(row.route) || 0) + 1);
  }

  return [...counts.entries()]
    .sort((left, right) => right[1] - left[1])
    .slice(0, 5)
    .map(([route, count]) => ({ route, count }));
}

function normalizeTrimmedString(value: string | undefined, maxLength: number) {
  const normalized = String(value || "").trim();
  if (!normalized) return undefined;
  return normalized.slice(0, maxLength);
}

function normalizeErrorMessage(value: string | undefined) {
  const normalized = String(value || "")
    .replace(/Bearer\s+[A-Za-z0-9\-_.]+/gi, "Bearer [redacted]")
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, "[redacted-email]")
    .replace(/[\r\n\t]+/g, " ")
    .trim();
  if (!normalized) return undefined;
  return normalized.slice(0, MAX_ERROR_MESSAGE_LENGTH);
}

function normalizeResultJson(value: string | undefined) {
  if (!value) return undefined;
  try {
    const parsed = JSON.parse(value);
    const normalized = JSON.stringify(parsed);
    return normalized.slice(0, MAX_RESULT_JSON_BYTES);
  } catch {
    return JSON.stringify({ value: String(value).slice(0, MAX_RESULT_JSON_BYTES) });
  }
}

function buildAlert(severity: "warn" | "error", code: string, message: string, extra: Record<string, unknown> = {}) {
  return {
    severity,
    code,
    message,
    ...extra,
  };
}

export const recordEmailDeliveryAttemptStart = internalMutation({
  args: {
    loginEventId: v.id("loginEvents"),
    userId: v.string(),
    provider: v.string(),
    traceId: v.string(),
    attemptNumber: v.number(),
    recipientMasked: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    return await ctx.db.insert("emailDeliveryAttempts", {
      loginEventId: args.loginEventId,
      userId: args.userId,
      provider: normalizeTrimmedString(args.provider, MAX_PROVIDER_LENGTH) || "sendgrid",
      traceId: normalizeTrimmedString(args.traceId, MAX_TRACE_ID_LENGTH) || `email_${now}`,
      status: "started",
      attemptNumber: Math.max(1, args.attemptNumber || 1),
      recipientMasked: normalizeTrimmedString(args.recipientMasked, MAX_RECIPIENT_MASKED_LENGTH),
      startedAt: now,
      createdAt: now,
    });
  },
});

export const finalizeEmailDeliveryAttempt = internalMutation({
  args: {
    attemptId: v.id("emailDeliveryAttempts"),
    status: v.union(v.literal("sent"), v.literal("failed"), v.literal("skipped")),
    httpStatus: v.optional(v.number()),
    messageId: v.optional(v.string()),
    errorMessage: v.optional(v.string()),
    durationMs: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.attemptId, {
      status: args.status,
      httpStatus: args.httpStatus,
      messageId: normalizeTrimmedString(args.messageId, MAX_MESSAGE_ID_LENGTH),
      errorMessage: normalizeErrorMessage(args.errorMessage),
      durationMs: typeof args.durationMs === "number" ? Math.max(0, Math.round(args.durationMs)) : undefined,
      completedAt: Date.now(),
    });
  },
});

export const recordCronRunStart = internalMutation({
  args: {
    jobName: v.string(),
    traceId: v.string(),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    return await ctx.db.insert("cronRuns", {
      jobName: normalizeTrimmedString(args.jobName, MAX_JOB_NAME_LENGTH) || "cron",
      traceId: normalizeTrimmedString(args.traceId, MAX_TRACE_ID_LENGTH) || `cron_${now}`,
      status: "started",
      startedAt: now,
      createdAt: now,
    });
  },
});

export const finalizeCronRun = internalMutation({
  args: {
    runId: v.id("cronRuns"),
    status: v.union(v.literal("succeeded"), v.literal("failed")),
    resultJson: v.optional(v.string()),
    errorMessage: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const row = await ctx.db.get(args.runId);
    const completedAt = Date.now();
    const startedAt = row?.startedAt ?? completedAt;
    await ctx.db.patch(args.runId, {
      status: args.status,
      completedAt,
      durationMs: Math.max(0, completedAt - startedAt),
      resultJson: normalizeResultJson(args.resultJson),
      errorMessage: normalizeErrorMessage(args.errorMessage),
    });
  },
});

async function runObservedCronJob(ctx: any, jobName: string, handler: () => Promise<unknown>) {
  const startedAt = Date.now();
  const traceId = `cron_${jobName.replace(/[^a-z0-9]+/gi, "_").toLowerCase()}_${startedAt}`.slice(0, MAX_TRACE_ID_LENGTH);
  const runId = await ctx.runMutation(anyInternal.observability.recordCronRunStart, {
    jobName,
    traceId,
  });

  try {
    const result = await handler();
    await ctx.runMutation(anyInternal.observability.finalizeCronRun, {
      runId,
      status: "succeeded",
      resultJson: JSON.stringify(result ?? { ok: true }),
    });
    return result;
  } catch (error) {
    await ctx.runMutation(anyInternal.observability.finalizeCronRun, {
      runId,
      status: "failed",
      errorMessage: error instanceof Error ? error.message : String(error),
    });
    throw error;
  }
}

export const runProcessEventQueueCron = internalAction({
  args: {},
  handler: async (ctx) => runObservedCronJob(ctx, "process event queue", () => ctx.runAction(anyInternal.eventHandlers.processEventQueue, {})),
});

export const runCleanupEndedSessionsCron = internalAction({
  args: {},
  handler: async (ctx) => runObservedCronJob(ctx, "cleanup ended sessions", () => ctx.runMutation(anyInternal.sessions.cleanupEndedSessions, {})),
});

export const runCleanupOldEventsCron = internalAction({
  args: {},
  handler: async (ctx) => runObservedCronJob(ctx, "cleanup old events", () => ctx.runMutation(anyInternal.eventBus.cleanupOldEvents, {
    olderThanMs: 7 * 24 * 60 * 60 * 1000,
  })),
});

export const runCleanupOldLogsCron = internalAction({
  args: {},
  handler: async (ctx) => runObservedCronJob(ctx, "cleanup old logs", () => ctx.runMutation(anyInternal.logs.cleanupOldLogs, {
    maxAgeMs: 14 * 24 * 60 * 60 * 1000,
  })),
});

export const runCleanupStalePaymentUploadIntentsCron = internalAction({
  args: {},
  handler: async (ctx) => runObservedCronJob(ctx, "cleanup stale payment upload intents", () => ctx.runMutation(anyInternal.paymentRequests.cleanupStalePaymentUploadIntents, {})),
});

export const runProcessPendingLoginAlertsCron = internalAction({
  args: {},
  handler: async (ctx) => runObservedCronJob(ctx, "process pending login alert emails", () => ctx.runAction(anyInternal.authNotifications.processPendingLoginAlerts, {})),
});

export const runRevokeExpiredAccessSessionsCron = internalAction({
  args: {},
  handler: async (ctx) => runObservedCronJob(ctx, "revoke expired access sessions", () => ctx.runMutation(anyInternal.access.revokeExpiredAccessSessions, {})),
});

export const runDetectNaNProjectionsCron = internalAction({
  args: {},
  handler: async (ctx) => runObservedCronJob(ctx, "D2 detect NaN badge projections", () => ctx.runAction(anyInternal.dataQuality.detectNaNProjections, {})),
});

export const runDetectOrphanedApprovalsCron = internalAction({
  args: {},
  handler: async (ctx) => runObservedCronJob(ctx, "D10 detect orphaned payment approvals", () => ctx.runAction(anyInternal.dataQuality.detectOrphanedApprovals, {})),
});

export const runRepairDuplicateFlashcardProgressCron = internalAction({
  args: {},
  handler: async (ctx) => runObservedCronJob(ctx, "D11 repair duplicate flashcard progress", () => ctx.runAction(anyInternal.dataQuality.repairDuplicateFlashcardProgress, {})),
});

export const recordClientEvent = mutation({
  args: {
    eventType: v.string(),
    route: v.string(),
    noteId: v.optional(v.string()),
    subject: v.optional(v.string()),
    metadataJson: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const ownerUserId = await requireApprovedAuthenticatedUserId(ctx);
    const eventType = String(args.eventType || "").trim();
    if (!ALLOWED_EVENT_TYPES.has(eventType)) {
      throw new Error(`Unsupported eventType '${args.eventType}'.`);
    }

    const route = normalizeOptionalString(args.route, MAX_ROUTE_LENGTH);
    if (!route) {
      throw new Error("route is required.");
    }

    await ctx.db.insert("clientTelemetry", {
      ownerUserId,
      eventType: eventType as "route_view" | "note_view" | "fullscreen_enter" | "recall_open",
      route,
      noteId: normalizeOptionalString(args.noteId, MAX_NOTE_ID_LENGTH),
      subject: normalizeOptionalString(args.subject, MAX_SUBJECT_LENGTH),
      metadataJson: normalizeMetadataJson(args.metadataJson),
      createdAt: Date.now(),
    });

    return { ok: true };
  },
});

export const getReleaseHealthSummary = query({
  args: {},
  handler: async (ctx) => {
    await requireAdmin(ctx);

    const now = Date.now();
    const cutoff = now - DEFAULT_WINDOW_MS;
    const recentTelemetry = await ctx.db
      .query("clientTelemetry")
      .withIndex("by_createdAt")
      .order("desc")
      .take(1000);
    const telemetryWindow = recentTelemetry.filter((entry) => entry.createdAt >= cutoff);

    const recentLogs = await ctx.db
      .query("logs")
      .withIndex("by_timestamp")
      .order("desc")
      .take(500);
    const logsWindow = recentLogs.filter((entry) => entry.timestamp >= cutoff);
    const recentErrors = recentLogs
      .filter((entry) => entry.level === "error" || entry.level === "warn")
      .slice(0, 8)
      .map((entry) => ({
        level: entry.level,
        message: entry.message,
        component: entry.component,
        timestamp: entry.timestamp,
      }));

    const pendingEvents = await ctx.db
      .query("events")
      .withIndex("by_status", (q) => q.eq("status", "pending"))
      .collect();

    const recentEmailAttempts = await ctx.db
      .query("emailDeliveryAttempts")
      .withIndex("by_createdAt")
      .order("desc")
      .take(200);
    const emailWindow = recentEmailAttempts.filter((entry) => entry.createdAt >= cutoff);

    const recentCronRuns = await ctx.db
      .query("cronRuns")
      .withIndex("by_startedAt")
      .order("desc")
      .take(200);
    const cronWindow = recentCronRuns.filter((entry) => entry.startedAt >= cutoff);

    const pendingLoginAlerts = await ctx.db
      .query("loginEvents")
      .withIndex("by_emailDeliveryStatus", (q) => q.eq("emailDeliveryStatus", "pending"))
      .collect();

    const routeViews = telemetryWindow.filter((entry) => entry.eventType === "route_view");
    const noteViews = telemetryWindow.filter((entry) => entry.eventType === "note_view");
    const fullscreenEntries = telemetryWindow.filter((entry) => entry.eventType === "fullscreen_enter");
    const recallOpens = telemetryWindow.filter((entry) => entry.eventType === "recall_open");
    const errorLogs = logsWindow.filter((entry) => entry.level === "error");
    const warnLogs = logsWindow.filter((entry) => entry.level === "warn");
    const emailSent = emailWindow.filter((entry) => entry.status === "sent");
    const emailFailed = emailWindow.filter((entry) => entry.status === "failed");
    const cronFailed = cronWindow.filter((entry) => entry.status === "failed");

    const alerts = [];
    if (pendingEvents.length > 0) {
      alerts.push(buildAlert("warn", "pending_events", `${pendingEvents.length} background event(s) are still pending.`));
    }
    if (pendingLoginAlerts.length > 0) {
      alerts.push(buildAlert("warn", "pending_login_alerts", `${pendingLoginAlerts.length} login alert email(s) are pending delivery.`));
    }
    if (emailFailed.length > 0) {
      const latestFailure = emailFailed[0];
      alerts.push(buildAlert(
        "error",
        "email_delivery_failures",
        `${emailFailed.length} email delivery attempt(s) failed in the last 24 hours.`,
        { traceId: latestFailure?.traceId },
      ));
    }
    if (cronFailed.length > 0) {
      const latestFailure = cronFailed[0];
      alerts.push(buildAlert(
        "error",
        "cron_failures",
        `${cronFailed.length} cron run(s) failed in the last 24 hours.`,
        { traceId: latestFailure?.traceId, jobName: latestFailure?.jobName },
      ));
    }

    const recentEmailFailures = emailFailed.slice(0, 5).map((entry) => ({
      traceId: entry.traceId,
      attemptNumber: entry.attemptNumber,
      recipientMasked: entry.recipientMasked,
      errorMessage: entry.errorMessage,
      httpStatus: entry.httpStatus,
      createdAt: entry.createdAt,
    }));

    const recentCronFailures = cronFailed.slice(0, 5).map((entry) => ({
      traceId: entry.traceId,
      jobName: entry.jobName,
      errorMessage: entry.errorMessage,
      startedAt: entry.startedAt,
      completedAt: entry.completedAt,
    }));

    const latestCronSuccess = cronWindow.find((entry) => entry.status === "succeeded") ?? null;

    return {
      generatedAt: now,
      windowHours: 24,
      routeViews24h: routeViews.length,
      noteViews24h: noteViews.length,
      fullscreenEntries24h: fullscreenEntries.length,
      recallOpens24h: recallOpens.length,
      errors24h: errorLogs.length,
      warnings24h: warnLogs.length,
      pendingEvents: pendingEvents.length,
      emailAttempts24h: emailWindow.length,
      emailDelivered24h: emailSent.length,
      emailFailures24h: emailFailed.length,
      pendingLoginAlerts: pendingLoginAlerts.length,
      cronRuns24h: cronWindow.length,
      cronFailures24h: cronFailed.length,
      status: errorLogs.length > 0 || pendingEvents.length > 0 || emailFailed.length > 0 || cronFailed.length > 0 ? "degraded" : "healthy",
      topRoutes: summarizeRoutes(routeViews),
      recentErrors,
      alerts,
      recentEmailFailures,
      recentCronFailures,
      recentCronRuns: cronWindow.slice(0, 8).map((entry) => ({
        jobName: entry.jobName,
        traceId: entry.traceId,
        status: entry.status,
        startedAt: entry.startedAt,
        completedAt: entry.completedAt,
        durationMs: entry.durationMs,
      })),
      lastSuccessfulCronAt: latestCronSuccess?.completedAt ?? null,
    };
  },
});