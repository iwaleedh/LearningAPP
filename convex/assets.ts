import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { requireApprovedAuthenticatedUserId, requireApprovedMatchingUserId } from "./authHelpers";

export const saveNoteAsset = mutation({
  args: {
    assetId: v.string(),
    noteId: v.string(),
    ownerUserId: v.optional(v.string()),
    assetType: v.string(),
    data: v.string(),
  },
  handler: async (ctx, args) => {
    const ownerUserId = await requireApprovedMatchingUserId(ctx, args.ownerUserId);
    const existing = await ctx.db
      .query("noteAssets")
      .withIndex("by_assetId", (q) => q.eq("assetId", args.assetId))
      .filter((q) => q.eq(q.field("ownerUserId"), ownerUserId))
      .first();
    if (existing) {
      await ctx.db.patch(existing._id, {
        data: args.data,
        assetType: args.assetType,
      });
      return existing._id;
    }
    return await ctx.db.insert("noteAssets", {
      assetId: args.assetId,
      noteId: args.noteId,
      ownerUserId,
      assetType: args.assetType,
      data: args.data,
      createdAt: Date.now(),
    });
  },
});

export const deleteNoteAsset = mutation({
  args: { assetId: v.string() },
  handler: async (ctx, { assetId }) => {
    const ownerUserId = await requireApprovedAuthenticatedUserId(ctx);
    const asset = await ctx.db
      .query("noteAssets")
      .withIndex("by_assetId", (q) => q.eq("assetId", assetId))
      .filter((q) => q.eq(q.field("ownerUserId"), ownerUserId))
      .first();
    if (asset) await ctx.db.delete(asset._id);
  },
});

export const getAssetsByNote = query({
  args: { noteId: v.string() },
  handler: async (ctx, { noteId }) => {
    const ownerUserId = await requireApprovedAuthenticatedUserId(ctx);
    return await ctx.db
      .query("noteAssets")
      .withIndex("by_noteId", (q) => q.eq("noteId", noteId))
      .filter((q) => q.eq(q.field("ownerUserId"), ownerUserId))
      .collect();
  },
});
