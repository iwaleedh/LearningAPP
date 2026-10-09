/**
 * gateway.ts — Cross-Domain Orchestration Layer
 *
 * Provides read-only queries that join data across domain boundaries.
 * This prevents individual domain modules from directly querying each
 * other's tables, keeping domain boundaries clean.
 *
 * Domains:
 *   Content      — notes, flashcards, noteAssets
 *   Identity     — users
 *   Platform     — events, logs
 */
import { query } from "./_generated/server";
import { v } from "convex/values";
import {
  isTeacherUserId,
  requireApprovedAuthenticatedUserId,
  requireTeacher,
} from "./authHelpers";

// ── User + Notes: enriched note list with author username ───────────
export const getNotesWithAuthors = query({
  args: { subject: v.string() },
  handler: async (ctx, { subject }) => {
    const currentUserId = await requireApprovedAuthenticatedUserId(ctx);
    const isTeacher = await isTeacherUserId(ctx, currentUserId);
    const notes = await ctx.db
      .query("notes")
      .withIndex(isTeacher ? "by_subject" : "by_owner", (q) =>
        isTeacher ? q.eq("subject", subject) : q.eq("ownerUserId", currentUserId)
      )
      .filter((q) => q.eq(q.field("subject"), subject))
      .collect();

    // Batch-fetch unique user IDs
    const userIds = [...new Set(notes.map((n) => n.ownerUserId).filter(Boolean))];
    const users = await Promise.all(
      userIds.map((uid) =>
        ctx.db
          .query("users")
          .withIndex("by_userId", (q) => q.eq("userId", uid))
          .first()
      )
    );
    const userMap = new Map(users.filter(Boolean).map((u) => [u!.userId, u!.username]));

    return notes.map((note) => ({
      noteId: note.noteId,
      subject: note.subject,
      title: note.title,
      lastEditedAt: note.lastEditedAt,
      authorUsername: userMap.get(note.ownerUserId) || "Unknown",
    }));
  },
});

// ── Platform overview: event queue depth + recent errors ────────────
export const getPlatformOverview = query({
  args: {},
  handler: async (ctx) => {
    await requireTeacher(ctx);
    const pendingEvents = await ctx.db
      .query("events")
      .withIndex("by_status", (q) => q.eq("status", "pending"))
      .take(100);

    const recentErrors = await ctx.db
      .query("logs")
      .withIndex("by_level", (q) => q.eq("level", "error"))
      .order("desc")
      .take(10);

    return {
      eventQueueDepth: pendingEvents.length,
      recentErrors: recentErrors.map((e) => ({
        message: e.message,
        component: e.component,
        timestamp: e.timestamp,
      })),
    };
  },
});
