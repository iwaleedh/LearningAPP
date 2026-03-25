import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const addStroke = mutation({
  args: {
    sessionId: v.string(),
    pageNumber: v.number(),
    userId: v.string(),
    fabricObjectJson: v.string(),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    return await ctx.db.insert("annotationStrokes", {
      sessionId: args.sessionId,
      pageNumber: args.pageNumber,
      userId: args.userId,
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
    await ctx.db.patch(strokeId, {
      fabricObjectJson,
      updatedAt: Date.now(),
    });
  },
});

export const deleteStroke = mutation({
  args: { strokeId: v.id("annotationStrokes") },
  handler: async (ctx, { strokeId }) => {
    await ctx.db.delete(strokeId);
  },
});

export const getStrokesBySession = query({
  args: { sessionId: v.string() },
  handler: async (ctx, { sessionId }) => {
    return await ctx.db
      .query("annotationStrokes")
      .withIndex("by_session", (q) => q.eq("sessionId", sessionId))
      .collect();
  },
});
