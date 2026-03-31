import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { requireHostedSessionAccess, requireMatchingUserId } from "./authHelpers";

export const updateCursor = mutation({
  args: {
    classId: v.id("liveClassSessions"),
    userId: v.optional(v.string()),
    x: v.number(),
    y: v.number(),
    tool: v.string(),
    mode: v.string(),
  },
  handler: async (ctx, args) => {
    const currentUserId = await requireMatchingUserId(ctx, args.userId);
    await requireHostedSessionAccess(ctx, String(args.classId));
    const existing = await ctx.db
      .query("liveClassCursors")
      .withIndex("by_user_class", (q) =>
        q.eq("userId", currentUserId).eq("classId", args.classId)
      )
      .first();
    if (existing) {
      await ctx.db.patch(existing._id, {
        x: args.x,
        y: args.y,
        tool: args.tool,
        mode: args.mode,
        updatedAt: Date.now(),
      });
      return existing._id;
    }
    return await ctx.db.insert("liveClassCursors", {
      classId: args.classId,
      userId: currentUserId,
      x: args.x,
      y: args.y,
      tool: args.tool,
      mode: args.mode,
      updatedAt: Date.now(),
    });
  },
});

export const getCursorsByClass = query({
  args: { classId: v.id("liveClassSessions") },
  handler: async (ctx, { classId }) => {
    await requireHostedSessionAccess(ctx, String(classId));
    return await ctx.db
      .query("liveClassCursors")
      .withIndex("by_class", (q) => q.eq("classId", classId))
      .collect();
  },
});
