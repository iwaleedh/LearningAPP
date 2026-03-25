import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

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
    await ctx.db.patch(sessionId, { status: "ended" });
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
