import { mutation, query, internalMutation } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";

export const createLiveSession = mutation({
  args: {
    hostUserId: v.string(),
    paperId: v.string(),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const sessionId = await ctx.db.insert("liveSessions", {
      hostUserId: args.hostUserId,
      paperId: args.paperId,
      title: args.title,
      status: "active",
      createdAt: Date.now(),
    });
    // Auto-add host as participant
    await ctx.db.insert("sessionParticipants", {
      sessionId,
      userId: args.hostUserId,
      role: "host",
      joinedAt: Date.now(),
    });
    return sessionId;
  },
});

export const joinSession = mutation({
  args: {
    sessionId: v.string(),
    userId: v.string(),
  },
  handler: async (ctx, { sessionId, userId }) => {
    // Avoid duplicate participant entries
    const existing = await ctx.db
      .query("sessionParticipants")
      .withIndex("by_session", (q) => q.eq("sessionId", sessionId))
      .filter((q) => q.eq(q.field("userId"), userId))
      .first();
    if (existing) return existing._id;
    return await ctx.db.insert("sessionParticipants", {
      sessionId,
      userId,
      role: "editor",
      joinedAt: Date.now(),
    });
  },
});

export const endSession = mutation({
  args: { sessionId: v.id("liveSessions") },
  handler: async (ctx, { sessionId }) => {
    const session = await ctx.db.get(sessionId);
    await ctx.db.patch(sessionId, { status: "ended" });

    // Pub/Sub: publish session:ended event for fan-out
    await ctx.scheduler.runAfter(0, internal.eventBus.internalPublish, {
      topic: "session:ended",
      payload: JSON.stringify({ sessionId: String(sessionId), hostUserId: session?.hostUserId ?? "" }),
    });
  },
});

// End session by string ID (used when sessionId comes from shared participants table)
export const endSessionByStringId = mutation({
  args: { sessionId: v.string() },
  handler: async (ctx, { sessionId }) => {
    // sessionId is the Convex _id as string
    const session = await ctx.db.get(sessionId as any);
    if (session) {
      await ctx.db.patch(session._id, { status: "ended" });
    }
  },
});

export const getActiveSessions = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("liveSessions")
      .withIndex("by_status", (q) => q.eq("status", "active"))
      .collect();
  },
});

export const getSession = query({
  args: { sessionId: v.id("liveSessions") },
  handler: async (ctx, { sessionId }) => {
    return await ctx.db.get(sessionId);
  },
});

export const getSessionByStringId = query({
  args: { sessionId: v.string() },
  handler: async (ctx, { sessionId }) => {
    return await ctx.db.get(sessionId as any);
  },
});

export const getParticipants = query({
  args: { sessionId: v.string() },
  handler: async (ctx, { sessionId }) => {
    return await ctx.db
      .query("sessionParticipants")
      .withIndex("by_session", (q) => q.eq("sessionId", sessionId))
      .collect();
  },
});

export const getMyParticipantSessions = query({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    return await ctx.db
      .query("sessionParticipants")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();
  },
});

// ── Internal: Cleanup ended sessions older than 2 hours ─────────────
export const cleanupEndedSessions = internalMutation({
  args: {},
  handler: async (ctx) => {
    const cutoff = Date.now() - 2 * 60 * 60 * 1000; // 2 hours
    const stale = await ctx.db
      .query("liveSessions")
      .withIndex("by_status", (q) => q.eq("status", "ended"))
      .filter((q) => q.lt(q.field("createdAt"), cutoff))
      .take(200);

    for (const session of stale) {
      // Remove participants first
      const participants = await ctx.db
        .query("sessionParticipants")
        .withIndex("by_session", (q) => q.eq("sessionId", String(session._id)))
        .collect();
      for (const p of participants) {
        await ctx.db.delete(p._id);
      }
      await ctx.db.delete(session._id);
    }
    return { deleted: stale.length };
  },
});
