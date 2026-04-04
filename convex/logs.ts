/**
 * logs.ts — Server-side Log Ingestion & Querying
 *
 * Receives batched log entries from the client-side logShipper and inserts
 * them into the logs table. Also provides query endpoints for the teacher
 * dashboard / monitoring.
 */
import { mutation, query, internalMutation } from "./_generated/server";
import { v } from "convex/values";
import { requireAuthenticatedUserId, requireTeacher } from "./authHelpers";

const ALLOWED_LOG_LEVELS = new Set(["debug", "info", "warn", "error"]);
const MAX_LOG_BATCH_SIZE = 50;
const MAX_LOG_MESSAGE_LENGTH = 1000;
const MAX_LOG_COMPONENT_LENGTH = 160;
const MAX_LOG_SESSION_ID_LENGTH = 160;
const MAX_LOG_METADATA_BYTES = 4096;

const logEntryValidator = v.object({
  level: v.string(),
  message: v.string(),
  component: v.string(),
  userId: v.string(),
  sessionId: v.string(),
  metadata: v.string(),
  timestamp: v.number(),
});

function requireTrimmedString(value: string, fieldName: string, maxLength: number, { allowEmpty = false } = {}) {
  const normalized = String(value || "").trim();
  if (!allowEmpty && !normalized) {
    throw new Error(`${fieldName} is required.`);
  }
  if (normalized.length > maxLength) {
    throw new Error(`${fieldName} exceeds ${maxLength} characters.`);
  }
  return normalized;
}

function normalizeLogMetadata(rawMetadata: string) {
  const normalized = String(rawMetadata || "{}").trim() || "{}";
  if (normalized.length > MAX_LOG_METADATA_BYTES) {
    throw new Error(`metadata exceeds ${MAX_LOG_METADATA_BYTES} bytes.`);
  }

  let parsed;
  try {
    parsed = JSON.parse(normalized);
  } catch {
    throw new Error("metadata must be valid JSON.");
  }

  const reserialized = JSON.stringify(parsed);
  if (reserialized.length > MAX_LOG_METADATA_BYTES) {
    throw new Error(`metadata exceeds ${MAX_LOG_METADATA_BYTES} bytes.`);
  }

  return reserialized;
}

function normalizeLogEntry(entry: {
  level: string;
  message: string;
  component: string;
  sessionId: string;
  metadata: string;
}) {
  const level = String(entry.level || "").trim().toLowerCase();
  if (!ALLOWED_LOG_LEVELS.has(level)) {
    throw new Error(`level '${entry.level}' is not allowed.`);
  }

  return {
    level,
    message: requireTrimmedString(entry.message, "message", MAX_LOG_MESSAGE_LENGTH),
    component: requireTrimmedString(entry.component, "component", MAX_LOG_COMPONENT_LENGTH, { allowEmpty: true }),
    sessionId: requireTrimmedString(entry.sessionId, "sessionId", MAX_LOG_SESSION_ID_LENGTH, { allowEmpty: true }),
    metadata: normalizeLogMetadata(entry.metadata),
  };
}

// ── Ingest a batch of log entries from the client ───────────────────
export const ingestLogBatch = mutation({
  args: {
    entries: v.array(logEntryValidator),
  },
  handler: async (ctx, { entries }) => {
    const currentUserId = await requireAuthenticatedUserId(ctx);
    if (entries.length === 0) {
      return { inserted: 0 };
    }
    if (entries.length > MAX_LOG_BATCH_SIZE) {
      throw new Error(`Log batch exceeds ${MAX_LOG_BATCH_SIZE} entries.`);
    }

    // Validate the whole batch before writing anything so malformed entries
    // cannot cause partial inserts.
    const sanitizedEntries = entries.map((entry) => normalizeLogEntry(entry));
    const serverTimestamp = Date.now();

    for (const entry of sanitizedEntries) {
      await ctx.db.insert("logs", {
        level: entry.level,
        message: entry.message,
        component: entry.component,
        userId: currentUserId,
        sessionId: entry.sessionId,
        metadata: entry.metadata,
        timestamp: serverTimestamp,
      });
    }

    return { inserted: sanitizedEntries.length };
  },
});

// ── Query logs with optional filters ────────────────────────────────
export const queryLogs = query({
  args: {
    level: v.optional(v.string()),
    component: v.optional(v.string()),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, { level, component, limit }) => {
    await requireTeacher(ctx);
    const maxResults = Math.min(limit || 100, 500);

    let q;
    if (level) {
      q = ctx.db.query("logs").withIndex("by_level", (q) => q.eq("level", level));
    } else if (component) {
      q = ctx.db.query("logs").withIndex("by_component", (q) => q.eq("component", component));
    } else {
      q = ctx.db.query("logs").withIndex("by_timestamp");
    }

    return q.order("desc").take(maxResults);
  },
});

// ── Internal: Cleanup old log entries ───────────────────────────────
export const cleanupOldLogs = internalMutation({
  args: {
    maxAgeMs: v.number(), // e.g. 7 * 24 * 60 * 60 * 1000 for 7 days
  },
  handler: async (ctx, { maxAgeMs }) => {
    const cutoff = Date.now() - maxAgeMs;
    const old = await ctx.db
      .query("logs")
      .withIndex("by_timestamp")
      .filter((q) => q.lt(q.field("timestamp"), cutoff))
      .take(500);

    for (const entry of old) {
      await ctx.db.delete(entry._id);
    }
    return { deleted: old.length };
  },
});
