import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { requireHostedSessionAccess, requireHostedSessionHostOrTeacher } from "./authHelpers";

export const updateClassTimer = mutation({
  args: {
    classId: v.id("liveClassSessions"),
    mode: v.string(),
    state: v.string(),
    elapsedMs: v.number(),
    targetMs: v.number(),
  },
  handler: async (ctx, args) => {
    await requireHostedSessionHostOrTeacher(ctx, String(args.classId));
    const existing = await ctx.db
      .query("classTimers")
      .withIndex("by_class", (q) => q.eq("classId", args.classId))
      .first();
    if (existing) {
      await ctx.db.patch(existing._id, {
        mode: args.mode,
        state: args.state,
        elapsedMs: args.elapsedMs,
        targetMs: args.targetMs,
        startedAt: Date.now(),
      });
      return existing._id;
    }
    return await ctx.db.insert("classTimers", {
      classId: args.classId,
      mode: args.mode,
      state: args.state,
      elapsedMs: args.elapsedMs,
      targetMs: args.targetMs,
      startedAt: Date.now(),
    });
  },
});

export const getClassTimer = query({
  args: { classId: v.id("liveClassSessions") },
  handler: async (ctx, { classId }) => {
    await requireHostedSessionAccess(ctx, String(classId));
    return await ctx.db
      .query("classTimers")
      .withIndex("by_class", (q) => q.eq("classId", classId))
      .first();
  },
});
