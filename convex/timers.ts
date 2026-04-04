import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { requireHostedSessionAccess, requireHostedSessionHostOrTeacher } from "./authHelpers";

const VALID_TIMER_MODES = new Set(["stopwatch", "countdown"]);
const VALID_TIMER_STATES = new Set(["stopped", "running", "paused"]);

function normalizeTimerRecord(timer: any, now = Date.now()) {
  if (!timer) return null;

  const mode = VALID_TIMER_MODES.has(timer.mode) ? timer.mode : "stopwatch";
  const state = VALID_TIMER_STATES.has(timer.state) ? timer.state : "stopped";
  const targetMs = Math.max(0, Number(timer.targetMs || 0));
  const accumulatedElapsedMs = Math.max(0, Number(timer.accumulatedElapsedMs ?? timer.elapsedMs ?? 0));
  const rawAnchorStartedAt = Number(timer.anchorStartedAt ?? timer.startedAt ?? 0);
  const anchorStartedAt = state === "running" && Number.isFinite(rawAnchorStartedAt) && rawAnchorStartedAt > 0
    ? rawAnchorStartedAt
    : null;
  const elapsedMs = anchorStartedAt
    ? accumulatedElapsedMs + Math.max(0, now - anchorStartedAt)
    : accumulatedElapsedMs;
  const version = Math.max(0, Number(timer.version ?? 0));
  const updatedAt = Math.max(0, Number(timer.updatedAt ?? timer.startedAt ?? now));

  return {
    ...timer,
    mode,
    state,
    targetMs,
    elapsedMs,
    accumulatedElapsedMs,
    anchorStartedAt,
    version,
    updatedAt,
    updatedBy: timer.updatedBy ?? null,
  };
}

export const updateClassTimer = mutation({
  args: {
    classId: v.id("liveClassSessions"),
    mode: v.string(),
    state: v.string(),
    elapsedMs: v.number(),
    targetMs: v.number(),
    expectedVersion: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { currentUserId } = await requireHostedSessionHostOrTeacher(ctx, String(args.classId));
    const normalizedMode = VALID_TIMER_MODES.has(args.mode) ? args.mode : null;
    if (!normalizedMode) {
      throw new Error("Timer mode must be 'stopwatch' or 'countdown'.");
    }

    const normalizedState = VALID_TIMER_STATES.has(args.state) ? args.state : null;
    if (!normalizedState) {
      throw new Error("Timer state must be 'stopped', 'running', or 'paused'.");
    }

    if (!Number.isFinite(args.elapsedMs) || args.elapsedMs < 0) {
      throw new Error("elapsedMs must be a finite non-negative number.");
    }

    if (!Number.isFinite(args.targetMs) || args.targetMs < 0) {
      throw new Error("targetMs must be a finite non-negative number.");
    }

    if (args.expectedVersion !== undefined && (!Number.isFinite(args.expectedVersion) || args.expectedVersion < 0)) {
      throw new Error("expectedVersion must be a finite non-negative number when provided.");
    }

    const now = Date.now();
    const nextTargetMs = Math.max(0, Math.round(args.targetMs));
    const existing = await ctx.db
      .query("classTimers")
      .withIndex("by_class", (q) => q.eq("classId", args.classId))
      .first();

    const existingTimer = normalizeTimerRecord(existing, now);
    const currentVersion = existingTimer?.version ?? 0;
    if (args.expectedVersion !== undefined && args.expectedVersion !== currentVersion) {
      throw new Error(`Timer state is stale. Expected version ${args.expectedVersion}, current version is ${currentVersion}.`);
    }

    // D3: When transitioning away from "running" (pause or stop), recompute
    // accumulatedElapsedMs from the server's own anchorStartedAt rather than
    // trusting the client-provided elapsedMs. This closes the clock-skew attack
    // surface where a client with a fast clock could inflate elapsed time for all
    // participants. Client elapsedMs is still used as a fallback for new timers
    // that have no server anchor yet.
    let nextElapsedMs: number;
    if (
      normalizedState !== "running" &&
      existingTimer?.state === "running" &&
      existingTimer.anchorStartedAt
    ) {
      const serverAccumulated = Number.isFinite(existingTimer.accumulatedElapsedMs)
        ? existingTimer.accumulatedElapsedMs
        : 0;
      nextElapsedMs = Math.max(0, Math.round(serverAccumulated + Math.max(0, now - existingTimer.anchorStartedAt)));

      // Log skew for observability when the difference exceeds 5 seconds.
      const clientElapsedMs = Math.max(0, Math.round(args.elapsedMs));
      const skewMs = Math.abs(clientElapsedMs - nextElapsedMs);
      if (skewMs > 5000) {
        console.warn(
          `[ClassTimer] Clock skew detected: client=${clientElapsedMs}ms server=${nextElapsedMs}ms delta=${skewMs}ms classId=${String(args.classId)} updatedBy=${currentUserId}`
        );
      }
    } else {
      // Running state or no existing anchor: trust client elapsed as the baseline.
      nextElapsedMs = Math.max(0, Math.round(args.elapsedMs));
    }

    const nextRecord = {
      classId: args.classId,
      mode: normalizedMode,
      state: normalizedState,
      elapsedMs: nextElapsedMs,
      targetMs: nextTargetMs,
      startedAt: now,
      accumulatedElapsedMs: nextElapsedMs,
      version: currentVersion + 1,
      updatedAt: now,
      updatedBy: currentUserId,
      ...(normalizedState === "running" ? { anchorStartedAt: now } : {}),
    };

    if (existing) {
      await ctx.db.patch(existing._id, nextRecord);
      return normalizeTimerRecord({ ...existing, ...nextRecord, _id: existing._id }, now);
    }

    const timerId = await ctx.db.insert("classTimers", nextRecord);
    return normalizeTimerRecord({ _id: timerId, ...nextRecord }, now);
  },
});

export const getClassTimer = query({
  args: { classId: v.id("liveClassSessions") },
  handler: async (ctx, { classId }) => {
    await requireHostedSessionAccess(ctx, String(classId));
    const timer = await ctx.db
      .query("classTimers")
      .withIndex("by_class", (q) => q.eq("classId", classId))
      .first();
    return normalizeTimerRecord(timer, Date.now());
  },
});
