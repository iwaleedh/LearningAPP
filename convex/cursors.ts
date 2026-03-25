import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const updateCursor = mutation({
  args: {
    classId: v.id("liveClassSessions"),
    userId: v.string(),
    x: v.number(),
    y: v.number(),
    tool: v.string(),
    mode: v.string(),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("liveClassCursors")
      .withIndex("by_user_class", (q) =>
        q.eq("userId", args.userId).eq("classId", args.classId)
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
      userId: args.userId,
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
    return await ctx.db
      .query("liveClassCursors")
      .withIndex("by_class", (q) => q.eq("classId", classId))
      .collect();
  },
});
