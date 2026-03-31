import { mutation, query, type MutationCtx, type QueryCtx } from "./_generated/server";
import { v } from "convex/values";
import {
  requireAuthenticatedUserId,
  requireHostedSessionHostOrTeacher,
} from "./authHelpers";

type PublicCtx = MutationCtx | QueryCtx;

function isActiveLiveClassSession(
  value: unknown
): value is { autoAccept?: boolean; status: string } {
  return (
    typeof value === "object" &&
    value !== null &&
    "status" in value
  );
}

async function getJoinRequestAccess(ctx: PublicCtx, sessionId: string, tempId: string) {
  const currentUserId = await requireAuthenticatedUserId(ctx);
  const request = await ctx.db
    .query("classJoinRequests")
    .withIndex("by_tempId", (q) => q.eq("tempId", tempId))
    .filter((q) => q.eq(q.field("sessionId"), sessionId))
    .first();

  if (!request) {
    throw new Error("Join request not found.");
  }

  if (request.requesterUserId === currentUserId) {
    return { currentUserId, request };
  }

  await requireHostedSessionHostOrTeacher(ctx, sessionId);
  return { currentUserId, request };
}

// ── Student requests to join a live class ────────────────────────────────────
export const requestJoin = mutation({
  args: {
    sessionId: v.string(),
    studentName: v.string(),
    tempId: v.string(),
  },
  handler: async (ctx, { sessionId, studentName, tempId }) => {
    const requesterUserId = await requireAuthenticatedUserId(ctx);
    // Prevent duplicate requests from same tempId
    const existing = await ctx.db
      .query("classJoinRequests")
      .withIndex("by_tempId", (q) => q.eq("tempId", tempId))
      .first();
    if (existing) return existing._id;

    // Check if session has autoAccept enabled
    const session = await ctx.db.get(sessionId as any);
    if (!isActiveLiveClassSession(session) || session.status !== "active") {
      throw new Error("Class not found or already ended.");
    }

    const status = session.autoAccept ? "accepted" : "pending";

    return await ctx.db.insert("classJoinRequests", {
      sessionId,
      studentName,
      tempId,
      requesterUserId,
      status,
      requestedAt: Date.now(),
    });
  },
});

export const approveJoin = mutation({
  args: { requestId: v.id("classJoinRequests") },
  handler: async (ctx, { requestId }) => {
    const request = await ctx.db.get(requestId);
    if (!request) return;
    await requireHostedSessionHostOrTeacher(ctx, request.sessionId);
    await ctx.db.patch(requestId, { status: "accepted" });
  },
});

export const rejectJoin = mutation({
  args: { requestId: v.id("classJoinRequests") },
  handler: async (ctx, { requestId }) => {
    const request = await ctx.db.get(requestId);
    if (!request) return;
    await requireHostedSessionHostOrTeacher(ctx, request.sessionId);
    await ctx.db.patch(requestId, { status: "rejected" });
  },
});

// ── Teacher reads all requests for their session ─────────────────────────────
export const getJoinRequests = query({
  args: { sessionId: v.string() },
  handler: async (ctx, { sessionId }) => {
    await requireHostedSessionHostOrTeacher(ctx, sessionId);
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
    const currentUserId = await requireAuthenticatedUserId(ctx);
    const req = await ctx.db.get(requestId);
    if (!req) return null;
    if (req.requesterUserId === currentUserId) {
      return { status: req.status, studentName: req.studentName };
    }
    await requireHostedSessionHostOrTeacher(ctx, req.sessionId);
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
    await getJoinRequestAccess(ctx, sessionId, tempId);
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
    await getJoinRequestAccess(ctx, sessionId, tempId);
    return await ctx.db
      .query("studentNotes")
      .withIndex("by_session_tempId", (q) => q.eq("sessionId", sessionId).eq("tempId", tempId))
      .first();
  },
});

export const getStudentName = query({
  args: { sessionId: v.string(), tempId: v.string() },
  handler: async (ctx, { sessionId, tempId }) => {
    const { request } = await getJoinRequestAccess(ctx, sessionId, tempId);
    return request.studentName ?? null;
  },
});
