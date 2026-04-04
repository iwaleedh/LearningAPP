import { mutation, query, type MutationCtx, type QueryCtx } from "./_generated/server";
import { v } from "convex/values";
import {
  getHostedSessionByStringId,
  requireApprovedAuthenticatedUserId,
  requireHostedSessionHostOrTeacher,
  getSessionParticipant,
  isTeacherUserId,
  requireApprovedMatchingUserId,
  requireTeacher,
} from "./authHelpers";

type LiveClassCtx = MutationCtx | QueryCtx;

function isLiveClassSessionRecord(
  value: unknown
): value is {
  _id: unknown;
  hostUserId: string;
  title?: string;
  status?: string;
} {
  return (
    typeof value === "object" &&
    value !== null &&
    "hostUserId" in value
  );
}

function toLiveClassPreview(session: {
  _id: unknown;
  title?: string;
  status?: string;
}) {
  return {
    _id: session._id,
    title: session.title ?? "Live Class",
    status: session.status ?? "active",
  };
}

async function hasAcceptedJoinRequest(
  ctx: LiveClassCtx,
  sessionId: string,
  userId: string,
) {
  return await ctx.db
    .query("classJoinRequests")
    .withIndex("by_session", (q) => q.eq("sessionId", sessionId))
    .filter((q) =>
      q.and(
        q.eq(q.field("requesterUserId"), userId),
        q.eq(q.field("status"), "accepted"),
      )
    )
    .first();
}

async function canReadLiveClassDetails(
  ctx: LiveClassCtx,
  sessionId: string,
  hostUserId: string,
  currentUserId: string,
) {
  if (hostUserId === currentUserId) return true;
  if (await isTeacherUserId(ctx, currentUserId)) return true;
  if (await getSessionParticipant(ctx, sessionId, currentUserId)) return true;
  return !!(await hasAcceptedJoinRequest(ctx, sessionId, currentUserId));
}

export const createLiveClass = mutation({
  args: {
    hostUserId: v.optional(v.string()),
    title: v.string(),
    backgroundType: v.string(),
  },
  handler: async (ctx, args) => {
    const teacherUserId = await requireTeacher(ctx);
    if (args.hostUserId && args.hostUserId !== teacherUserId) {
      throw new Error("Not authorized to create a class for another host.");
    }
    // Generate a unique 6-char alphanumeric join code (no ambiguous chars)
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let joinCode = '';
    for (;;) {
      joinCode = Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
      const existing = await ctx.db
        .query("liveClassSessions")
        .withIndex("by_status", (q) => q.eq("status", "active"))
        .filter((q) => q.eq(q.field("joinCode"), joinCode))
        .first();
      if (!existing) break;
    }

    const VALID_BG = ['white', 'lined', 'grid', 'dotted', 'yellow'] as const;
    type BgType = typeof VALID_BG[number];
    const bg = args.backgroundType as BgType;
    if (!VALID_BG.includes(bg)) {
      throw new Error(`Invalid backgroundType '${args.backgroundType}'. Must be one of: ${VALID_BG.join(', ')}.`);
    }

    const classId = await ctx.db.insert("liveClassSessions", {
      hostUserId: teacherUserId,
      title: args.title,
      backgroundType: bg,
      status: "active",
      joinCode,
      autoAccept: false,
      createdAt: Date.now(),
    });
    return classId;
  },
});

export const joinLiveClass = mutation({
  args: {
    classId: v.id("liveClassSessions"),
    userId: v.optional(v.string()),
  },
  handler: async (ctx, { classId, userId }) => {
    const currentUserId = await requireApprovedMatchingUserId(ctx, userId);
    const classIdStr = String(classId);
    const session = await ctx.db.get(classId);
    if (!session || session.status !== "active") {
      throw new Error("Class not found or already ended.");
    }

    const existingParticipant = await getSessionParticipant(ctx, classIdStr, currentUserId);
    const isTeacher = await isTeacherUserId(ctx, currentUserId);
    const hasAcceptedRequest = await hasAcceptedJoinRequest(ctx, classIdStr, currentUserId);

    if (
      !existingParticipant &&
      session.hostUserId !== currentUserId &&
      !isTeacher &&
      !hasAcceptedRequest
    ) {
      throw new Error("You have not been admitted to this class.");
    }

    if (existingParticipant) return existingParticipant._id;
    return await ctx.db.insert("sessionParticipants", {
      sessionId: classIdStr,
      userId: currentUserId,
      role: "viewer",
      joinedAt: Date.now(),
    });
  },
});

export const endLiveClass = mutation({
  args: { classId: v.id("liveClassSessions") },
  handler: async (ctx, { classId }) => {
    await requireHostedSessionHostOrTeacher(ctx, String(classId));
    await ctx.db.patch(classId, { status: "ended" });
  },
});

export const setBackground = mutation({
  args: {
    classId: v.id("liveClassSessions"),
    backgroundType: v.string(),
  },
  handler: async (ctx, { classId, backgroundType }) => {
    await requireHostedSessionHostOrTeacher(ctx, String(classId));
    const VALID_BG = ['white', 'lined', 'grid', 'dotted', 'yellow'] as const;
    type BgType = typeof VALID_BG[number];
    const bg = backgroundType as BgType;
    if (!VALID_BG.includes(bg)) {
      throw new Error(`Invalid backgroundType '${backgroundType}'.`);
    }
    await ctx.db.patch(classId, { backgroundType: bg });
  },
});

export const getActiveLiveClasses = query({
  args: {},
  handler: async (ctx) => {
    await requireApprovedAuthenticatedUserId(ctx);
    const sessions = await ctx.db
      .query("liveClassSessions")
      .withIndex("by_status", (q) => q.eq("status", "active"))
      .collect();
    return sessions.map((session) => ({ _id: session._id }));
  },
});

export const getLiveClassById = query({
  args: { classId: v.id("liveClassSessions") },
  handler: async (ctx, { classId }) => {
    const classIdStr = String(classId);
    const session = await getHostedSessionByStringId(ctx, classIdStr);
    if (!session || !isLiveClassSessionRecord(session)) return null;
    const currentUserId = await requireApprovedAuthenticatedUserId(ctx);
    if (!(await canReadLiveClassDetails(ctx, classIdStr, session.hostUserId, currentUserId))) {
      return toLiveClassPreview(session);
    }
    return session;
  },
});

export const getLiveClassByCode = query({
  args: { code: v.string() },
  handler: async (ctx, { code }) => {
    await requireApprovedAuthenticatedUserId(ctx);
    const upper = code.toUpperCase();
    const session = await ctx.db
      .query("liveClassSessions")
      .withIndex("by_status", (q) => q.eq("status", "active"))
      .filter((q) => q.eq(q.field("joinCode"), upper))
      .first();
    return session ? toLiveClassPreview(session) : null;
  },
});

export const setAutoAccept = mutation({
  args: {
    classId: v.id("liveClassSessions"),
    autoAccept: v.boolean(),
  },
  handler: async (ctx, { classId, autoAccept }) => {
    await requireHostedSessionHostOrTeacher(ctx, String(classId));
    await ctx.db.patch(classId, { autoAccept });
  },
});
