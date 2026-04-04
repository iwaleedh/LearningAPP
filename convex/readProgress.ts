import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { requireApprovedAuthenticatedUserId } from "./authHelpers";

const DATE_KEY_RE = /^\d{4}-\d{2}-\d{2}$/;
const MAX_BULK_SYNC_ITEMS = 1000;

function validateLocalDateKey(value: string, fieldName = "localDateKey") {
  const normalized = String(value || "").trim();
  if (!DATE_KEY_RE.test(normalized)) {
    throw new Error(`${fieldName} must match YYYY-MM-DD.`);
  }
  return normalized;
}

function validateReadTimestamp(value: string) {
  const normalized = String(value || "").trim();
  if (!normalized || Number.isNaN(new Date(normalized).getTime())) {
    throw new Error("readAt must be a valid ISO timestamp.");
  }
  return normalized;
}

async function upsertReadProgress(ctx: any, ownerUserId: string, noteId: string, readAt: string, localDateKey: string) {
  const existing = await ctx.db
    .query("noteReadProgress")
    .withIndex("by_owner_note", (q: any) => q.eq("ownerUserId", ownerUserId).eq("noteId", noteId))
    .first();
  const updatedAt = Date.now();

  if (existing) {
    await ctx.db.patch(existing._id, {
      readAt,
      localDateKey,
      updatedAt,
    });
    return existing._id;
  }

  return await ctx.db.insert("noteReadProgress", {
    ownerUserId,
    noteId,
    readAt,
    localDateKey,
    updatedAt,
  });
}

function getAttemptDateKey(attempt: { activityDateKey?: string; createdAt: number }) {
  if (attempt.activityDateKey && DATE_KEY_RE.test(attempt.activityDateKey)) {
    return attempt.activityDateKey;
  }
  return new Date(attempt.createdAt).toISOString().slice(0, 10);
}

export const getMyReadProgressSummary = query({
  args: {},
  handler: async (ctx) => {
    const ownerUserId = await requireApprovedAuthenticatedUserId(ctx);
    const [readRows, attempts] = await Promise.all([
      ctx.db
        .query("noteReadProgress")
        .withIndex("by_owner", (q) => q.eq("ownerUserId", ownerUserId))
        .collect(),
      ctx.db
        .query("studyAttempts")
        .withIndex("by_owner", (q) => q.eq("ownerUserId", ownerUserId))
        .collect(),
    ]);

    const readAtByNoteId = Object.fromEntries(
      readRows
        .sort((left: any, right: any) => String(left.noteId).localeCompare(String(right.noteId)))
        .map((row: any) => [row.noteId, row.readAt]),
    );

    const activityByDate: Record<string, number> = {};
    for (const row of readRows) {
      activityByDate[row.localDateKey] = (activityByDate[row.localDateKey] || 0) + 1;
    }
    for (const attempt of attempts) {
      const dateKey = getAttemptDateKey(attempt);
      activityByDate[dateKey] = (activityByDate[dateKey] || 0) + 1;
    }

    return {
      readNoteIds: Object.keys(readAtByNoteId),
      readAtByNoteId,
      totalRead: readRows.length,
      activityByDate,
      updatedAt: readRows.reduce((latest: number, row: any) => Math.max(latest, Number(row.updatedAt || 0)), 0),
    };
  },
});

export const markNoteRead = mutation({
  args: {
    noteId: v.string(),
    readAt: v.string(),
    localDateKey: v.string(),
  },
  handler: async (ctx, { noteId, readAt, localDateKey }) => {
    const ownerUserId = await requireApprovedAuthenticatedUserId(ctx);
    return await upsertReadProgress(
      ctx,
      ownerUserId,
      String(noteId).trim(),
      validateReadTimestamp(readAt),
      validateLocalDateKey(localDateKey),
    );
  },
});

export const markNoteUnread = mutation({
  args: {
    noteId: v.string(),
  },
  handler: async (ctx, { noteId }) => {
    const ownerUserId = await requireApprovedAuthenticatedUserId(ctx);
    const existing = await ctx.db
      .query("noteReadProgress")
      .withIndex("by_owner_note", (q) => q.eq("ownerUserId", ownerUserId).eq("noteId", String(noteId).trim()))
      .first();

    if (existing) {
      await ctx.db.delete(existing._id);
    }

    return { removed: Boolean(existing) };
  },
});

export const bulkSyncReadProgress = mutation({
  args: {
    readStatesJson: v.string(),
  },
  handler: async (ctx, { readStatesJson }) => {
    const ownerUserId = await requireApprovedAuthenticatedUserId(ctx);

    let parsed: unknown;
    try {
      parsed = JSON.parse(readStatesJson);
    } catch {
      throw new Error("readStatesJson must be valid JSON.");
    }

    if (!Array.isArray(parsed)) {
      throw new Error("readStatesJson must be an array.");
    }
    if (parsed.length > MAX_BULK_SYNC_ITEMS) {
      throw new Error(`readStatesJson exceeds ${MAX_BULK_SYNC_ITEMS} items.`);
    }

    const syncedIds = [];
    for (const entry of parsed) {
      if (!entry || typeof entry !== "object" || Array.isArray(entry)) {
        throw new Error("Each read progress entry must be an object.");
      }
      const record = entry as Record<string, unknown>;
      const noteId = String(record.noteId || "").trim();
      if (!noteId) {
        throw new Error("Each read progress entry must include noteId.");
      }

      syncedIds.push(await upsertReadProgress(
        ctx,
        ownerUserId,
        noteId,
        validateReadTimestamp(String(record.readAt || "")),
        validateLocalDateKey(String(record.localDateKey || "")),
      ));
    }

    return syncedIds;
  },
});

export const resetMyReadProgress = mutation({
  args: {},
  handler: async (ctx) => {
    const ownerUserId = await requireApprovedAuthenticatedUserId(ctx);
    const rows = await ctx.db
      .query("noteReadProgress")
      .withIndex("by_owner", (q) => q.eq("ownerUserId", ownerUserId))
      .collect();

    for (const row of rows) {
      await ctx.db.delete(row._id);
    }

    return { deleted: rows.length };
  },
});