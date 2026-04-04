import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import {
  requireHostedSessionAccess,
  requireHostedSessionHostOrTeacher,
  requireApprovedMatchingUserId,
} from "./authHelpers";

export const raiseHand = mutation({
  args: {
    classId: v.id("liveClassSessions"),
    studentUserId: v.optional(v.string()),
  },
  handler: async (ctx, { classId, studentUserId }) => {
    const currentUserId = await requireApprovedMatchingUserId(ctx, studentUserId);
    await requireHostedSessionAccess(ctx, String(classId));
    // Check if already raised
    const existing = await ctx.db
      .query("handRaises")
      .withIndex("by_status_class", (q) =>
        q.eq("status", "raised").eq("classId", classId)
      )
      .filter((q) => q.eq(q.field("studentUserId"), currentUserId))
      .first();
    if (existing) return existing._id;
    return await ctx.db.insert("handRaises", {
      classId,
      studentUserId: currentUserId,
      status: "raised",
      raisedAt: Date.now(),
    });
  },
});

export const acknowledgeHandRaise = mutation({
  args: { raiseId: v.id("handRaises") },
  handler: async (ctx, { raiseId }) => {
    const raise = await ctx.db.get(raiseId);
    if (!raise) return;
    await requireHostedSessionHostOrTeacher(ctx, String(raise.classId));
    await ctx.db.patch(raiseId, { status: "acknowledged" });
  },
});

export const getHandRaisesByClass = query({
  args: { classId: v.id("liveClassSessions") },
  handler: async (ctx, { classId }) => {
    await requireHostedSessionHostOrTeacher(ctx, String(classId));
    return await ctx.db
      .query("handRaises")
      .withIndex("by_status_class", (q) =>
        q.eq("status", "raised").eq("classId", classId)
      )
      .collect();
  },
});
