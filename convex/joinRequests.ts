import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// ── Student requests to join a live class ────────────────────────────────────
export const requestJoin = mutation({
  args: {
    sessionId: v.string(),
    studentName: v.string(),
    tempId: v.string(),
  },
  handler: async (ctx, { sessionId, studentName, tempId }) => {
    // Prevent duplicate requests from same tempId
    const existing = await ctx.db
      .query("classJoinRequests")
      .withIndex("by_tempId", (q) => q.eq("tempId", tempId))
      .first();
    if (existing) return existing._id;

    // Check if session has autoAccept enabled
    const session = await ctx.db
      .query("liveClassSessions")
      .filter((q) => q.eq(q.field("_id"), sessionId))
      .first();

    const status = session?.autoAccept ? "accepted" : "pending";

    return await ctx.db.insert("classJoinRequests", {
      sessionId,
      studentName,
      tempId,
      status,
      requestedAt: Date.now(),
    });
  },
});

export const approveJoin = mutation({
  args: { requestId: v.id("classJoinRequests") },
  handler: async (ctx, { requestId }) => {
    await ctx.db.patch(requestId, { status: "accepted" });
  },
});

export const rejectJoin = mutation({
  args: { requestId: v.id("classJoinRequests") },
  handler: async (ctx, { requestId }) => {
    await ctx.db.patch(requestId, { status: "rejected" });
  },
});

// ── Teacher reads all requests for their session ─────────────────────────────
export const getJoinRequests = query({
  args: { sessionId: v.string() },
  handler: async (ctx, { sessionId }) => {
    return await ctx.db
      .query("classJoinRequests")
      .withIndex("by_session", (q) => q.eq("sessionId", sessionId))
      .order("asc")
      .collect();
  },
});

// ── Student polls their own request status ───────────────────────────────────
export const getStudentJoinStatus = query({
  args: { requestId: v.id("classJoinRequests") },
  handler: async (ctx, { requestId }) => {
    const req = await ctx.db.get(requestId);
    if (!req) return null;
    return { status: req.status, studentName: req.studentName };
  },
});

// ── Student personal notes ───────────────────────────────────────────────────
export const updateStudentNote = mutation({
  args: {
    sessionId: v.string(),
    tempId: v.string(),
    noteContent: v.string(),
  },
  handler: async (ctx, { sessionId, tempId, noteContent }) => {
    const existing = await ctx.db
      .query("studentNotes")
      .withIndex("by_session_tempId", (q) => q.eq("sessionId", sessionId).eq("tempId", tempId))
      .first();
    if (existing) {
      await ctx.db.patch(existing._id, { noteContent, updatedAt: Date.now() });
    } else {
      await ctx.db.insert("studentNotes", { sessionId, tempId, noteContent, updatedAt: Date.now() });
    }
  },
});

export const getStudentNote = query({
  args: { sessionId: v.string(), tempId: v.string() },
  handler: async (ctx, { sessionId, tempId }) => {
    return await ctx.db
      .query("studentNotes")
      .withIndex("by_session_tempId", (q) => q.eq("sessionId", sessionId).eq("tempId", tempId))
      .first();
  },
});

export const getStudentName = query({
  args: { sessionId: v.string(), tempId: v.string() },
  handler: async (ctx, { sessionId, tempId }) => {
    const req = await ctx.db
      .query("classJoinRequests")
      .withIndex("by_tempId", (q) => q.eq("tempId", tempId))
      .first();
    return req?.studentName ?? null;
  },
});
