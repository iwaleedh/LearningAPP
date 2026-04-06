import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { requireApprovedAuthenticatedUserId } from "./authHelpers";

const MAX_METADATA_JSON_BYTES = 16384;

// D2: Clamp-safe addition — treats NaN/non-finite operands as 0 and floors
// the result at 0. Prevents a single corrupted projection row from poisoning
// every subsequent increment (NaN + 1 === NaN indefinitely).
function safeAdd(a: number, b: number): number {
  return Math.max(0, (Number.isFinite(a) ? a : 0) + (Number.isFinite(b) ? b : 0));
}

// D1: Validate activityDateKey format (YYYY-MM-DD). Copied locally to avoid
// an import cycle with readProgress.ts.
const DATE_KEY_RE = /^\d{4}-\d{2}-\d{2}$/;
function validateLocalDateKey(value: string, fieldName = "localDateKey") {
  const normalized = String(value || "").trim();
  if (!DATE_KEY_RE.test(normalized)) {
    throw new Error(`${fieldName} must match YYYY-MM-DD.`);
  }
  return normalized;
}

function parseJsonObject(value: string, messagePrefix: string) {
  let parsed;
  try {
    parsed = JSON.parse(value);
  } catch {
    throw new Error(`${messagePrefix} must be valid JSON.`);
  }

  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error(`${messagePrefix} must be a JSON object.`);
  }

  return parsed as Record<string, unknown>;
}

function requireStringField(record: Record<string, unknown>, key: string, context: string) {
  const value = record[key];
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`${context} must include a non-empty string '${key}'.`);
  }
  return value.trim();
}

function requireBooleanField(record: Record<string, unknown>, key: string, context: string) {
  const value = record[key];
  if (typeof value !== "boolean") {
    throw new Error(`${context} must include a boolean '${key}'.`);
  }
  return value;
}

function optionalFiniteNumber(record: Record<string, unknown>, key: string, context: string) {
  const value = record[key];
  if (value === undefined) return undefined;
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new Error(`${context} field '${key}' must be a finite number when provided.`);
  }
  return value;
}

function sanitizeDragDropMetadata(record: Record<string, unknown>) {
  const placements = record.placements;
  if (!Array.isArray(placements) || placements.length === 0) {
    throw new Error("Drag-drop metadata must include a non-empty placements array.");
  }

  const sanitizedPlacements = placements.map((entry, index) => {
    if (!entry || typeof entry !== "object" || Array.isArray(entry)) {
      throw new Error(`Drag-drop placement ${index + 1} must be an object.`);
    }

    const placement = entry as Record<string, unknown>;
    return {
      itemId: requireStringField(placement, "itemId", `Drag-drop placement ${index + 1}`),
      text: requireStringField(placement, "text", `Drag-drop placement ${index + 1}`),
      expectedCategory: requireStringField(placement, "expectedCategory", `Drag-drop placement ${index + 1}`),
      placedCategory: requireStringField(placement, "placedCategory", `Drag-drop placement ${index + 1}`),
      correct: requireBooleanField(placement, "correct", `Drag-drop placement ${index + 1}`),
    };
  });

  // D1: Reject placements that contain duplicate itemId values — a client bug
  // or a crafted payload could otherwise record the same item in multiple
  // categories, inflating the score.
  const itemIds = sanitizedPlacements.map(p => p.itemId);
  if (new Set(itemIds).size < itemIds.length) {
    throw new Error("Drag-drop placements contain duplicate itemId values.");
  }

  return JSON.stringify({
    placements: sanitizedPlacements,
    totalItems: optionalFiniteNumber(record, "totalItems", "Drag-drop metadata") ?? sanitizedPlacements.length,
    correctItems: optionalFiniteNumber(record, "correctItems", "Drag-drop metadata")
      ?? sanitizedPlacements.filter((placement) => placement.correct).length,
  });
}

function sanitizePastPaperMetadata(record: Record<string, unknown>) {
  const month = requireStringField(record, "month", "Past paper metadata");
  const year = requireStringField(record, "year", "Past paper metadata");
  const type = requireStringField(record, "type", "Past paper metadata");
  const duration = requireStringField(record, "duration", "Past paper metadata");
  const totalMarks = optionalFiniteNumber(record, "totalMarks", "Past paper metadata");

  return JSON.stringify({ month, year, type, duration, totalMarks });
}

function sanitizeMetadata(activityType: string, metadataJson?: string) {
  if (metadataJson === undefined) return undefined;
  if (metadataJson.length > MAX_METADATA_JSON_BYTES) {
    throw new Error(`metadataJson exceeds ${MAX_METADATA_JSON_BYTES} bytes.`);
  }

  const parsed = parseJsonObject(metadataJson, "metadataJson");
  if (activityType === "drag-drop") {
    return sanitizeDragDropMetadata(parsed);
  }
  if (activityType === "completed_session") {
    return sanitizePastPaperMetadata(parsed);
  }

  return JSON.stringify(parsed);
}

function parseAllocatedDurationSeconds(metadataJson?: string) {
  if (!metadataJson) return null;

  const metadata = parseJsonObject(metadataJson, "metadataJson");
  const duration = typeof metadata.duration === "string" ? metadata.duration.toLowerCase() : "";
  if (!duration) return null;

  const hoursMatch = duration.match(/(\d+)\s*(?:h|hour|hours)\b/);
  const minutesMatch = duration.match(/(\d+)\s*(?:m|min|mins|minute|minutes)\b/);
  const hours = hoursMatch ? Number(hoursMatch[1]) : 0;
  const minutes = minutesMatch ? Number(minutesMatch[1]) : 0;
  const totalSeconds = (hours * 60 + minutes) * 60;
  return totalSeconds > 0 ? totalSeconds : null;
}

function buildBadgeMetricDelta(args: {
  sourceType: "exercise" | "pastpaper";
  activityType: string;
  scorePercent?: number;
  durationSeconds?: number;
  metadataJson?: string;
}) {
  const isExerciseAttempt = args.sourceType === "exercise";
  const isCompletedPastPaper = args.sourceType === "pastpaper" && args.activityType === "completed_session";
  const allocatedDurationSeconds = isCompletedPastPaper ? parseAllocatedDurationSeconds(args.metadataJson) : null;
  const isFastCompletion = Boolean(
    isCompletedPastPaper
      && allocatedDurationSeconds
      && args.durationSeconds !== undefined
      && args.durationSeconds <= allocatedDurationSeconds / 2,
  );

  return {
    exercisesCompleted: isExerciseAttempt ? 1 : 0,
    papersCompleted: isCompletedPastPaper ? 1 : 0,
    perfectScores: isCompletedPastPaper && args.scorePercent === 100 ? 1 : 0,
    fastCompletions: isFastCompletion ? 1 : 0,
  };
}

function buildActivityMetricDelta(args: {
  sourceType: "exercise" | "pastpaper";
  activityType: string;
}) {
  return {
    exercisesDone: args.sourceType === "exercise" ? 1 : 0,
    papersViewed: args.sourceType === "pastpaper" && args.activityType !== "completed_session" ? 1 : 0,
  };
}

async function projectBadgeMetrics(
  ctx: any,
  ownerUserId: string,
  studyAttemptId: any,
  args: {
    sourceType: "exercise" | "pastpaper";
    activityType: string;
    questionKey: string;
    subject: string;
    metadataJson?: string;
    scorePercent?: number;
    durationSeconds?: number;
  },
  now: number,
) {
  const delta = buildBadgeMetricDelta(args);

  await ctx.db.insert("badgeMetricEvents", {
    ownerUserId,
    studyAttemptId,
    sourceType: args.sourceType,
    activityType: args.activityType,
    questionKey: args.questionKey,
    subject: args.subject,
    deltaJson: JSON.stringify(delta),
    metadataJson: args.metadataJson,
    createdAt: now,
  });

  const existingProjection = await ctx.db
    .query("badgeMetricProjections")
    .withIndex("by_owner", (q: any) => q.eq("ownerUserId", ownerUserId))
    .first();

  if (existingProjection) {
    // D2: safeAdd guards against NaN propagation if the projection row is ever
    // corrupted — the projection can be rebuilt from badgeMetricEvents if needed.
    await ctx.db.patch(existingProjection._id, {
      exercisesCompleted: safeAdd(existingProjection.exercisesCompleted, delta.exercisesCompleted),
      papersCompleted: safeAdd(existingProjection.papersCompleted, delta.papersCompleted),
      perfectScores: safeAdd(existingProjection.perfectScores, delta.perfectScores),
      fastCompletions: safeAdd(existingProjection.fastCompletions, delta.fastCompletions),
      updatedAt: now,
    });
    return;
  }

  await ctx.db.insert("badgeMetricProjections", {
    ownerUserId,
    exercisesCompleted: delta.exercisesCompleted,
    papersCompleted: delta.papersCompleted,
    perfectScores: delta.perfectScores,
    fastCompletions: delta.fastCompletions,
    updatedAt: now,
  });
}

async function projectActivityMetrics(
  ctx: any,
  ownerUserId: string,
  args: {
    sourceType: "exercise" | "pastpaper";
    activityType: string;
  },
  now: number,
) {
  const delta = buildActivityMetricDelta(args);

  const existingProjection = await ctx.db
    .query("activityMetricProjections")
    .withIndex("by_owner", (q: any) => q.eq("ownerUserId", ownerUserId))
    .first();

  if (existingProjection) {
    await ctx.db.patch(existingProjection._id, {
      exercisesDone: safeAdd(existingProjection.exercisesDone, delta.exercisesDone),
      papersViewed: safeAdd(existingProjection.papersViewed, delta.papersViewed),
      updatedAt: now,
    });
    return;
  }

  await ctx.db.insert("activityMetricProjections", {
    ownerUserId,
    exercisesDone: delta.exercisesDone,
    papersViewed: delta.papersViewed,
    updatedAt: now,
  });
}

export const recordAttempt = mutation({
  args: {
    sourceType: v.string(),
    activityType: v.string(),
    subject: v.string(),
    unitId: v.optional(v.number()),
    topicId: v.optional(v.number()),
    questionKey: v.string(),
    prompt: v.string(),
    topic: v.optional(v.string()),
    paperId: v.optional(v.string()),
    paperTitle: v.optional(v.string()),
    correct: v.optional(v.boolean()),
    scorePercent: v.optional(v.number()),
    confidence: v.optional(v.string()),
    durationSeconds: v.optional(v.number()),
    activityDateKey: v.optional(v.string()),
    metadataJson: v.optional(v.string()),
    // D1: Client-generated idempotency key — UUID produced once per button press.
    clientAttemptId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const ownerUserId = await requireApprovedAuthenticatedUserId(ctx);
    const now = Date.now();

    // D1: Idempotency — if the client retries with the same clientAttemptId,
    // return the existing studyAttempt _id without inserting a duplicate row
    // or double-incrementing badge metric projections.
    if (args.clientAttemptId) {
      const normalizedKey = args.clientAttemptId.trim().slice(0, 128);
      if (normalizedKey) {
        const existing = await ctx.db
          .query("studyAttempts")
          .withIndex("by_owner_client_attempt", (q) =>
            q.eq("ownerUserId", ownerUserId).eq("clientAttemptId", normalizedKey)
          )
          .first();
        if (existing) return existing._id;
      }
    }

    // S2: Reject non-finite numbers (NaN, Infinity) then clamp to sane bounds.
    // scorePercent must be 0–100; durationSeconds must be non-negative.
    // Full server-side answer verification is not feasible for frontend-graded
    // exercises, but this prevents leaderboard inflation via manipulated payloads.
    if (args.scorePercent !== undefined && !Number.isFinite(args.scorePercent)) {
      throw new Error("scorePercent must be a finite number.");
    }
    if (args.durationSeconds !== undefined && !Number.isFinite(args.durationSeconds)) {
      throw new Error("durationSeconds must be a finite number.");
    }
    const scorePercent = args.scorePercent !== undefined
      ? Math.max(0, Math.min(100, args.scorePercent))
      : undefined;
    const durationSeconds = args.durationSeconds !== undefined
      ? Math.max(0, args.durationSeconds)
      : undefined;
    const activityDateKey = args.activityDateKey !== undefined
      ? validateLocalDateKey(args.activityDateKey, "activityDateKey")
      : undefined;
    const metadataJson = sanitizeMetadata(args.activityType, args.metadataJson);

    // Validate sourceType at runtime then cast to the schema union.
    const VALID_SOURCE = ['exercise', 'pastpaper'] as const;
    type SourceType = typeof VALID_SOURCE[number];
    if (!VALID_SOURCE.includes(args.sourceType as SourceType)) {
      throw new Error(`Invalid sourceType '${args.sourceType}'. Must be 'exercise' or 'pastpaper'.`);
    }

    // S2: Validate activityType against known enum to prevent junk data.
    const VALID_ACTIVITY = [
      'mcq', 'drag-drop', 'fill-blank', 'sequence', 'keyword', 'flashcards',
      'completed_session', 'view_question', 'view_marking',
      'download_question', 'download_marking',
    ] as const;
    if (!VALID_ACTIVITY.includes(args.activityType as typeof VALID_ACTIVITY[number])) {
      throw new Error(`Invalid activityType '${args.activityType}'.`);
    }

    const normalizedClientAttemptId = args.clientAttemptId
      ? args.clientAttemptId.trim().slice(0, 128) || undefined
      : undefined;

    const studyAttemptId = await ctx.db.insert("studyAttempts", {
      ownerUserId,
      sourceType: args.sourceType as SourceType,
      activityType: args.activityType,
      subject: args.subject,
      unitId: args.unitId,
      topicId: args.topicId,
      questionKey: args.questionKey,
      prompt: args.prompt,
      topic: args.topic,
      paperId: args.paperId,
      paperTitle: args.paperTitle,
      correct: args.correct,
      scorePercent,
      confidence: args.confidence,
      durationSeconds,
      activityDateKey,
      metadataJson,
      clientAttemptId: normalizedClientAttemptId,
      createdAt: now,
    });

    await projectBadgeMetrics(ctx, ownerUserId, studyAttemptId, {
      sourceType: args.sourceType as SourceType,
      activityType: args.activityType,
      questionKey: args.questionKey,
      subject: args.subject,
      metadataJson,
      scorePercent,
      durationSeconds,
    }, now);

    await projectActivityMetrics(ctx, ownerUserId, {
      sourceType: args.sourceType as SourceType,
      activityType: args.activityType,
    }, now);

    return studyAttemptId;
  },
});

export const listMyPastPaperSessions = query({
  args: {
    subject: v.optional(v.string()),
  },
  handler: async (ctx, { subject }) => {
    const ownerUserId = await requireApprovedAuthenticatedUserId(ctx);
    const rows = await ctx.db
      .query("studyAttempts")
      .withIndex("by_owner", (q) => q.eq("ownerUserId", ownerUserId))
      .collect();

    return rows
      .filter((row) => row.sourceType === "pastpaper")
      .filter((row) => row.activityType === "completed_session")
      .filter((row) => !subject || row.subject === subject)
      .sort((a, b) => a.createdAt - b.createdAt)
      .map((row, index) => ({
        id: String(row._id),
        label: row.paperTitle || `Attempt ${index + 1}`,
        percentage: row.scorePercent || 0,
        durationSeconds: row.durationSeconds || 0,
        confidence: row.confidence || "",
        paperId: row.paperId || "",
        unit: row.topic || "",
        topicScores: row.topic ? { [row.topic]: row.scorePercent || 0 } : undefined,
        createdAt: row.createdAt,
      }));
  },
});
