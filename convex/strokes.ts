import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import {
  requireApprovedAuthenticatedUserId,
  requireHostedSessionAccess,
  requireHostedSessionHostOrTeacher,
  requireApprovedMatchingUserId,
} from "./authHelpers";

const MAX_STROKE_JSON_BYTES = 128 * 1024;
const MAX_PAGE_NUMBER = 10000;

function validatePageNumber(pageNumber: number) {
  if (!Number.isInteger(pageNumber) || pageNumber < 1 || pageNumber > MAX_PAGE_NUMBER) {
    throw new Error(`pageNumber must be an integer between 1 and ${MAX_PAGE_NUMBER}.`);
  }
  return pageNumber;
}

function normalizeFabricObjectJson(fabricObjectJson: string) {
  const normalized = String(fabricObjectJson || "").trim();
  if (!normalized) {
    throw new Error("fabricObjectJson is required.");
  }

  const byteLength = new TextEncoder().encode(normalized).length;
  if (byteLength > MAX_STROKE_JSON_BYTES) {
    throw new Error(`fabricObjectJson exceeds ${MAX_STROKE_JSON_BYTES} bytes.`);
  }

  let parsed;
  try {
    parsed = JSON.parse(normalized);
  } catch {
    throw new Error("fabricObjectJson must be valid JSON.");
  }

  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error("fabricObjectJson must serialize an object.");
  }

  return JSON.stringify(parsed);
}

export const addStroke = mutation({
  args: {
    sessionId: v.string(),
    pageNumber: v.number(),
    userId: v.optional(v.string()),
    fabricObjectJson: v.string(),
  },
  handler: async (ctx, args) => {
    const currentUserId = await requireApprovedMatchingUserId(ctx, args.userId);
    await requireHostedSessionAccess(ctx, args.sessionId);
    const now = Date.now();
    const pageNumber = validatePageNumber(args.pageNumber);
    const normalizedFabricObjectJson = normalizeFabricObjectJson(args.fabricObjectJson);
    return await ctx.db.insert("annotationStrokes", {
      sessionId: args.sessionId,
      pageNumber,
      userId: currentUserId,
      fabricObjectJson: normalizedFabricObjectJson,
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
    const currentUserId = await requireApprovedAuthenticatedUserId(ctx);
    await requireHostedSessionAccess(ctx, stroke.sessionId);
    if (stroke.userId !== currentUserId) {
      await requireHostedSessionHostOrTeacher(ctx, stroke.sessionId);
    }
    const normalizedFabricObjectJson = normalizeFabricObjectJson(fabricObjectJson);
    await ctx.db.patch(strokeId, {
      fabricObjectJson: normalizedFabricObjectJson,
      updatedAt: Date.now(),
    });
  },
});

export const deleteStroke = mutation({
  args: { strokeId: v.id("annotationStrokes") },
  handler: async (ctx, { strokeId }) => {
    const stroke = await ctx.db.get(strokeId);
    if (!stroke) return;
    const currentUserId = await requireApprovedAuthenticatedUserId(ctx);
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
