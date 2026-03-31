import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";
import { requireAuthenticatedUserId, requireMatchingUserId } from "./authHelpers";

export const upsertNote = mutation({
  args: {
    noteId: v.string(),
    ownerUserId: v.optional(v.string()),
    subject: v.string(),
    title: v.string(),
    subtopicTitle: v.string(),
    breadcrumbs: v.string(),
    contentJson: v.string(),
    confidenceScore: v.number(),
    estimatedReadMinutes: v.number(),
  },
  handler: async (ctx, args) => {
    const ownerUserId = await requireMatchingUserId(ctx, args.ownerUserId);
    const existing = await ctx.db
      .query("notes")
      .withIndex("by_noteId", (q) => q.eq("noteId", args.noteId))
      .filter((q) => q.eq(q.field("ownerUserId"), ownerUserId))
      .first();
    const now = Date.now();
    if (existing) {
      await ctx.db.patch(existing._id, {
        subject: args.subject,
        title: args.title,
        subtopicTitle: args.subtopicTitle,
        breadcrumbs: args.breadcrumbs,
        contentJson: args.contentJson,
        confidenceScore: args.confidenceScore,
        estimatedReadMinutes: args.estimatedReadMinutes,
        lastEditedAt: now,
      });
      return existing._id;
    }
    const id = await ctx.db.insert("notes", {
      noteId: args.noteId,
      ownerUserId,
      subject: args.subject,
      title: args.title,
      subtopicTitle: args.subtopicTitle,
      breadcrumbs: args.breadcrumbs,
      contentJson: args.contentJson,
      confidenceScore: args.confidenceScore,
      estimatedReadMinutes: args.estimatedReadMinutes,
      createdAt: now,
      lastEditedAt: now,
    });

    // Pub/Sub: publish note:updated event for fan-out
    await ctx.scheduler.runAfter(0, internal.eventBus.internalPublish, {
      topic: "note:updated",
      payload: JSON.stringify({ noteId: args.noteId, subject: args.subject, userId: ownerUserId }),
    });

    return id;
  },
});

export const deleteNote = mutation({
  args: { noteId: v.string() },
  handler: async (ctx, { noteId }) => {
    const ownerUserId = await requireAuthenticatedUserId(ctx);
    const note = await ctx.db
      .query("notes")
      .withIndex("by_noteId", (q) => q.eq("noteId", noteId))
      .filter((q) => q.eq(q.field("ownerUserId"), ownerUserId))
      .first();
    if (note) {
      await ctx.db.delete(note._id);

      // Pub/Sub: publish note:deleted event
      await ctx.scheduler.runAfter(0, internal.eventBus.internalPublish, {
        topic: "note:deleted",
        payload: JSON.stringify({ noteId, userId: note.ownerUserId }),
      });
    }
  },
});

export const getNote = query({
  args: { noteId: v.string() },
  handler: async (ctx, { noteId }) => {
    const ownerUserId = await requireAuthenticatedUserId(ctx);
    return await ctx.db
      .query("notes")
      .withIndex("by_noteId", (q) => q.eq("noteId", noteId))
      .filter((q) => q.eq(q.field("ownerUserId"), ownerUserId))
      .first();
  },
});

export const listNotesBySubject = query({
  args: { subject: v.string() },
  handler: async (ctx, { subject }) => {
    const ownerUserId = await requireAuthenticatedUserId(ctx);
    return await ctx.db
      .query("notes")
      .withIndex("by_subject", (q) => q.eq("subject", subject.toLowerCase()))
      .filter((q) => q.eq(q.field("ownerUserId"), ownerUserId))
      .collect();
  },
});
