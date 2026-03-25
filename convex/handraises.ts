import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const raiseHand = mutation({
  args: {
    classId: v.id("liveClassSessions"),
    studentUserId: v.string(),
  },
  handler: async (ctx, { classId, studentUserId }) => {
    // Check if already raised
    const existing = await ctx.db
      .query("handRaises")
      .withIndex("by_status_class", (q) =>
        q.eq("status", "raised").eq("classId", classId)
      )
      .filter((q) => q.eq(q.field("studentUserId"), studentUserId))
      .first();
    if (existing) return existing._id;
    return await ctx.db.insert("handRaises", {
      classId,
      studentUserId,
      status: "raised",
      raisedAt: Date.now(),
    });
  },
});

export const acknowledgeHandRaise = mutation({
  args: { raiseId: v.id("handRaises") },
  handler: async (ctx, { raiseId }) => {
    await ctx.db.patch(raiseId, { status: "acknowledged" });
  },
});

export const getHandRaisesByClass = query({
  args: { classId: v.id("liveClassSessions") },
  handler: async (ctx, { classId }) => {
    return await ctx.db
      .query("handRaises")
      .withIndex("by_status_class", (q) =>
        q.eq("status", "raised").eq("classId", classId)
      )
      .collect();
  },
});
