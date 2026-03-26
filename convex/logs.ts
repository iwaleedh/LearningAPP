/**
 * logs.ts — Server-side Log Ingestion & Querying
 *
 * Receives batched log entries from the client-side logShipper and inserts
 * them into the logs table. Also provides query endpoints for the teacher
 * dashboard / monitoring.
 */
import { mutation, query, internalMutation } from "./_generated/server";
import { v } from "convex/values";

const logEntryValidator = v.object({
  level: v.string(),
  message: v.string(),
  component: v.string(),
  userId: v.string(),
  sessionId: v.string(),
  metadata: v.string(),
  timestamp: v.number(),
});

// ── Ingest a batch of log entries from the client ───────────────────
export const ingestLogBatch = mutation({
  args: {
    entries: v.array(logEntryValidator),
  },
  handler: async (ctx, { entries }) => {
    for (const entry of entries) {
      await ctx.db.insert("logs", {
        level: entry.level,
        message: entry.message,
        component: entry.component,
        userId: entry.userId,
        sessionId: entry.sessionId,
        metadata: entry.metadata,
        timestamp: entry.timestamp,
      });
    }
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
