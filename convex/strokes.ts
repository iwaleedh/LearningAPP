import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import {
  requireAuthenticatedUserId,
  requireHostedSessionAccess,
  requireHostedSessionHostOrTeacher,
  requireMatchingUserId,
} from "./authHelpers";

export const addStroke = mutation({
  args: {
    sessionId: v.string(),
    pageNumber: v.number(),
    userId: v.optional(v.string()),
    fabricObjectJson: v.string(),
  },
  handler: async (ctx, args) => {
    const currentUserId = await requireMatchingUserId(ctx, args.userId);
    await requireHostedSessionAccess(ctx, args.sessionId);
    const now = Date.now();
    return await ctx.db.insert("annotationStrokes", {
      sessionId: args.sessionId,
      pageNumber: args.pageNumber,
      userId: currentUserId,
      fabricObjectJson: args.fabricObjectJson,
      createdAt: now,
      updatedAt: now,
    });
  },
});

export const updateStroke = mutation({
  args: {
    strokeId: v.id("annotationStrokes"),
    fabricObjectJson: v.string(),
  },
  handler: async (ctx, { strokeId, fabricObjectJson }) => {
    const stroke = await ctx.db.get(strokeId);
    if (!stroke) return;
    const currentUserId = await requireAuthenticatedUserId(ctx);
    await requireHostedSessionAccess(ctx, stroke.sessionId);
    if (stroke.userId !== currentUserId) {
      await requireHostedSessionHostOrTeacher(ctx, stroke.sessionId);
    }
    await ctx.db.patch(strokeId, {
      fabricObjectJson,
      updatedAt: Date.now(),
    });
  },
});

export const deleteStroke = mutation({
  args: { strokeId: v.id("annotationStrokes") },
  handler: async (ctx, { strokeId }) => {
    const stroke = await ctx.db.get(strokeId);
    if (!stroke) return;
    const currentUserId = await requireAuthenticatedUserId(ctx);
    await requireHostedSessionAccess(ctx, stroke.sessionId);
    if (stroke.userId !== currentUserId) {
      await requireHostedSessionHostOrTeacher(ctx, stroke.sessionId);
    }
    await ctx.db.delete(strokeId);
  },
});

export const getStrokesBySession = query({
  args: { sessionId: v.string() },
  handler: async (ctx, { sessionId }) => {
    await requireHostedSessionAccess(ctx, sessionId);
    return await ctx.db
      .query("annotationStrokes")
      .withIndex("by_session", (q) => q.eq("sessionId", sessionId))
      .collect();
  },
});
