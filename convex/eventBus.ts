/**
 * eventBus.ts — Pub/Sub Event Bus
 *
 * Topic-based event system enabling fan-out: one mutation publishes an event,
 * and one or more independent handlers pick it up asynchronously.
 *
 * Architecture:
 *   Publishers  →  events table (Message Broker)  →  Subscribers (eventHandlers.ts)
 *
 * Topics are plain strings (e.g. "note:updated", "session:ended", "user:registered").
 * Handlers are dispatched via a scheduled cron (see crons.ts) or can be invoked
 * directly via processEventQueue.
 */
import { mutation, query, internalMutation, internalQuery } from "./_generated/server";
import { v } from "convex/values";
import { requireTeacher } from "./authHelpers";

// Topics that authenticated teachers/admins are allowed to publish via the client-callable mutation.
// Internal server-side topics (e.g. "session:ended", "user:registered") must NEVER appear here —
// use internalPublish (not callable from the client) for those.
const ALLOWED_PUBLIC_TOPICS = new Set([
  "admin:broadcast",
  "admin:announcement",
  "debug:ping",
]);

// ── Teacher/admin: Publish an event ─────────────────────────────────
export const publish = mutation({
  args: {
    topic: v.string(),
    payload: v.string(), // JSON-serialised payload
  },
  handler: async (ctx, { topic, payload }) => {
    await requireTeacher(ctx);

    // S11 fix: Validate topic against allowlist so teachers cannot inject
    // events into internal topics (e.g. "payment:confirmed", "session:ended").
    if (!ALLOWED_PUBLIC_TOPICS.has(topic)) {
      throw new Error(`Topic "${topic}" is not allowed for client publishing.`);
    }

    return await ctx.db.insert("events", {
      topic,
      payload,
      status: "pending",
      publishedAt: Date.now(),
      processedAt: 0,
    });
  },
});

// ── Internal: Publish from other server-side mutations ──────────────
export const internalPublish = internalMutation({
  args: {
    topic: v.string(),
    payload: v.string(),
  },
  handler: async (ctx, { topic, payload }) => {
    return await ctx.db.insert("events", {
      topic,
      payload,
      status: "pending",
      publishedAt: Date.now(),
      processedAt: 0,
    });
  },
});

// ── Query: Get unprocessed events (optionally filtered by topic) ────
export const getUnprocessedEvents = query({
  args: { topic: v.optional(v.string()), limit: v.optional(v.number()) },
  handler: async (ctx, { topic, limit }) => {
    await requireTeacher(ctx);
    let q = ctx.db
      .query("events")
      .withIndex("by_status", (q) => q.eq("status", "pending"));

    const events = await q.collect();

    let filtered = topic ? events.filter((e) => e.topic === topic) : events;
    const maxResults = Math.min(Math.max(limit || 50, 1), 200);
    filtered = filtered.slice(0, maxResults);
    return filtered;
  },
});

// ── Internal query variant for cron/action use ──────────────────────
export const getUnprocessedEventsInternal = internalQuery({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, { limit }) => {
    const events = await ctx.db
      .query("events")
      .withIndex("by_status", (q) => q.eq("status", "pending"))
      .collect();
    return limit && limit > 0 ? events.slice(0, limit) : events;
  },
});

// ── Teacher/admin: Mark an event as processed ───────────────────────
export const markProcessed = mutation({
  args: { eventId: v.id("events") },
  handler: async (ctx, { eventId }) => {
    await requireTeacher(ctx);
    await ctx.db.patch(eventId, {
      status: "processed",
      processedAt: Date.now(),
    });
  },
});

// ── Internal: Mark processed from server-side actions ───────────────
export const markProcessedInternal = internalMutation({
  args: { eventId: v.id("events") },
  handler: async (ctx, { eventId }) => {
    await ctx.db.patch(eventId, {
      status: "processed",
      processedAt: Date.now(),
    });
  },
});

// ── Mutation: Mark an event as failed (dead-letter) ─────────────────
export const markFailed = internalMutation({
  args: { eventId: v.id("events"), error: v.string() },
  handler: async (ctx, { eventId, error }) => {
    await ctx.db.patch(eventId, {
      status: "failed",
      processedAt: Date.now(),
    });
  },
});

// ── Query: List events by topic (for monitoring / debugging) ────────
export const listByTopic = query({
  args: { topic: v.string(), limit: v.optional(v.number()) },
  handler: async (ctx, { topic, limit }) => {
    await requireTeacher(ctx);
    const events = await ctx.db
      .query("events")
      .withIndex("by_topic", (q) => q.eq("topic", topic))
      .order("desc")
      .collect();
    const maxResults = Math.min(Math.max(limit || 50, 1), 200);
    return events.slice(0, maxResults);
  },
});

// ── Cleanup: Delete old processed events (called by cron) ───────────
export const cleanupOldEvents = internalMutation({
  args: { olderThanMs: v.number() },
  handler: async (ctx, { olderThanMs }) => {
    const cutoff = Date.now() - olderThanMs;
    const old = await ctx.db
      .query("events")
      .withIndex("by_status", (q) => q.eq("status", "processed"))
      .collect();

    let deleted = 0;
    for (const event of old) {
      if (event.processedAt > 0 && event.processedAt < cutoff) {
        await ctx.db.delete(event._id);
        deleted++;
      }
    }
    return { deleted };
  },
});
