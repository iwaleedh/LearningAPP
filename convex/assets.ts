import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const saveNoteAsset = mutation({
  args: {
    assetId: v.string(),
    noteId: v.string(),
    ownerUserId: v.string(),
    assetType: v.string(),
    data: v.string(),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("noteAssets")
      .withIndex("by_assetId", (q) => q.eq("assetId", args.assetId))
      .first();
    if (existing) {
      await ctx.db.patch(existing._id, {
        data: args.data,
        assetType: args.assetType,
      });
      return existing._id;
    }
    return await ctx.db.insert("noteAssets", {
      ...args,
      createdAt: Date.now(),
    });
  },
});

export const deleteNoteAsset = mutation({
  args: { assetId: v.string() },
  handler: async (ctx, { assetId }) => {
    const asset = await ctx.db
      .query("noteAssets")
      .withIndex("by_assetId", (q) => q.eq("assetId", assetId))
      .first();
    if (asset) await ctx.db.delete(asset._id);
  },
});

export const getAssetsByNote = query({
  args: { noteId: v.string() },
  handler: async (ctx, { noteId }) => {
    return await ctx.db
      .query("noteAssets")
      .withIndex("by_noteId", (q) => q.eq("noteId", noteId))
      .collect();
  },
});
