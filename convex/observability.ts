import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { requireAdmin, requireApprovedAuthenticatedUserId } from "./authHelpers";

const ALLOWED_EVENT_TYPES = new Set(["route_view", "note_view", "fullscreen_enter", "recall_open"]);
const MAX_ROUTE_LENGTH = 200;
const MAX_NOTE_ID_LENGTH = 200;
const MAX_SUBJECT_LENGTH = 80;
const MAX_METADATA_BYTES = 2048;
const DEFAULT_WINDOW_MS = 24 * 60 * 60 * 1000;

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

    const routeViews = telemetryWindow.filter((entry) => entry.eventType === "route_view");
    const noteViews = telemetryWindow.filter((entry) => entry.eventType === "note_view");
    const fullscreenEntries = telemetryWindow.filter((entry) => entry.eventType === "fullscreen_enter");
    const recallOpens = telemetryWindow.filter((entry) => entry.eventType === "recall_open");
    const errorLogs = logsWindow.filter((entry) => entry.level === "error");
    const warnLogs = logsWindow.filter((entry) => entry.level === "warn");

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
      status: errorLogs.length > 0 || pendingEvents.length > 0 ? "degraded" : "healthy",
      topRoutes: summarizeRoutes(routeViews),
      recentErrors,
    };
  },
});