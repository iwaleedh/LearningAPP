import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createLiveClass = mutation({
  args: {
    hostUserId: v.string(),
    title: v.string(),
    backgroundType: v.string(),
  },
  handler: async (ctx, args) => {
    const classId = await ctx.db.insert("liveClassSessions", {
      hostUserId: args.hostUserId,
      title: args.title,
      backgroundType: args.backgroundType,
      status: "active",
      createdAt: Date.now(),
    });
    // Auto-add host as participant (reuse sessionParticipants table via string ID)
    // Live class participants are tracked in sessionParticipants with sessionId as string
    return classId;
  },
});

export const joinLiveClass = mutation({
  args: {
    classId: v.id("liveClassSessions"),
    userId: v.string(),
  },
  handler: async (ctx, { classId, userId }) => {
    const classIdStr = classId as string;
    const existing = await ctx.db
      .query("sessionParticipants")
      .withIndex("by_session", (q) => q.eq("sessionId", classIdStr))
      .filter((q) => q.eq(q.field("userId"), userId))
      .first();
    if (existing) return existing._id;
    return await ctx.db.insert("sessionParticipants", {
      sessionId: classIdStr,
      userId,
      role: "viewer",
      joinedAt: Date.now(),
    });
  },
});

export const endLiveClass = mutation({
  args: { classId: v.id("liveClassSessions") },
  handler: async (ctx, { classId }) => {
    await ctx.db.patch(classId, { status: "ended" });
  },
});

export const setBackground = mutation({
  args: {
    classId: v.id("liveClassSessions"),
    backgroundType: v.string(),
  },
  handler: async (ctx, { classId, backgroundType }) => {
    await ctx.db.patch(classId, { backgroundType });
  },
});

export const getActiveLiveClasses = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("liveClassSessions")
      .withIndex("by_status", (q) => q.eq("status", "active"))
      .collect();
  },
});

export const getLiveClassById = query({
  args: { classId: v.id("liveClassSessions") },
  handler: async (ctx, { classId }) => {
    return await ctx.db.get(classId);
  },
});
