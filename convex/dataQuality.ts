/**
 * dataQuality.ts — Nightly Detective Controls
 *
 * These internal actions run on a 24-hour schedule and detect data anomalies
 * that preventive controls cannot catch retroactively:
 *
 *  D2:  detectNaNProjections            — alert on badgeMetricProjections rows with NaN fields
 *  D10: detectOrphanedApprovals         — alert on paymentRequests approved but missing entitlementId
 *  D11: repairDuplicateFlashcardProgress — find & delete stale duplicate flashcardProgress rows
 */
import { internalAction, internalMutation, internalQuery } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";

// ── D2: NaN projection detector ─────────────────────────────────────────────

/**
 * Scans all badgeMetricProjection rows for NaN/Infinity values.
 * Logs a warning for each corrupt row and auto-heals by resetting to 0.
 *
 * safeAdd() in studyAttempts.ts prevents new NaN propagation, but rows
 * created before that fix (or via direct DB tooling) could still be NaN.
 */
export const detectNaNProjections = internalAction({
  args: {},
  handler: async (ctx): Promise<void> => {
    const rows: Array<{
      _id: string;
      ownerUserId: string;
      exercisesCompleted: number;
      papersCompleted: number;
      perfectScores: number;
      fastCompletions: number;
    }> = await ctx.runQuery(internal.dataQuality.getAllProjections, {});

    const FIELDS = ["exercisesCompleted", "papersCompleted", "perfectScores", "fastCompletions"] as const;
    let corruptCount = 0;

    for (const row of rows) {
      const badFields = FIELDS.filter(f => !Number.isFinite(row[f]));
      if (badFields.length === 0) continue;

      corruptCount++;
      console.warn(
        `[dataQuality:D2] NaN projection row — userId=${row.ownerUserId} id=${row._id} fields=${badFields.join(",")}`,
      );
      await ctx.runMutation(internal.dataQuality.healProjectionRow, {
        rowId: row._id,
        exercisesCompleted: Number.isFinite(row.exercisesCompleted) ? row.exercisesCompleted : 0,
        papersCompleted:    Number.isFinite(row.papersCompleted)    ? row.papersCompleted    : 0,
        perfectScores:      Number.isFinite(row.perfectScores)      ? row.perfectScores      : 0,
        fastCompletions:    Number.isFinite(row.fastCompletions)    ? row.fastCompletions    : 0,
      });
    }

    if (corruptCount > 0) {
      console.error(
        `[dataQuality:D2] ALERT: ${corruptCount} corrupt badgeMetricProjection row(s) healed. ` +
        `Consider rebuilding projections from badgeMetricEvents.`,
      );
    } else {
      console.info(`[dataQuality:D2] OK — ${rows.length} badgeMetricProjection rows checked, none corrupt.`);
    }
  },
});

// internalQuery so it can be called via ctx.runQuery inside the action above.
export const getAllProjections = internalQuery({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("badgeMetricProjections").collect();
  },
});

export const healProjectionRow = internalMutation({
  args: {
    rowId: v.string(),
    exercisesCompleted: v.number(),
    papersCompleted:    v.number(),
    perfectScores:      v.number(),
    fastCompletions:    v.number(),
  },
  handler: async (ctx, { rowId, exercisesCompleted, papersCompleted, perfectScores, fastCompletions }) => {
    await ctx.db.patch(rowId as any, {
      exercisesCompleted,
      papersCompleted,
      perfectScores,
      fastCompletions,
      updatedAt: Date.now(),
    });
  },
});

// ── D10: Orphaned payment approval detector ──────────────────────────────────

/**
 * Finds paymentRequests rows that are approved but have no entitlementId.
 * This can exist for approvals made before the D10 fix was deployed.
 *
 * An orphaned approval means the user may be approved with no matching
 * paymentEntitlement record, breaking billing/access consistency checks.
 */
export const detectOrphanedApprovals = internalAction({
  args: {},
  handler: async (ctx): Promise<void> => {
    const approvedRequests: Array<{
      _id: string;
      userId: string;
      plan: string;
      amount: number;
      submittedAt: number;
      entitlementId?: string;
    }> = await ctx.runQuery(internal.dataQuality.getApprovedRequests, {});

    const orphaned = approvedRequests.filter(r => !r.entitlementId);

    if (orphaned.length > 0) {
      console.error(
        `[dataQuality:D10] ALERT: ${orphaned.length} approved paymentRequest(s) have no entitlementId. ` +
        `IDs: ${orphaned.map(r => r._id).join(", ")}`,
      );
      for (const req of orphaned) {
        console.warn(
          `[dataQuality:D10]  orphan — requestId=${req._id} userId=${req.userId} ` +
          `plan=${req.plan} submittedAt=${new Date(req.submittedAt).toISOString()}`,
        );
      }
    } else {
      console.info(`[dataQuality:D10] OK — ${approvedRequests.length} approved requests all have entitlementId.`);
    }
  },
});

// internalQuery so it can be called via ctx.runQuery.
export const getApprovedRequests = internalQuery({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("paymentRequests")
      .withIndex("by_status", (q) => q.eq("status", "approved"))
      .collect();
  },
});

// ── D11: Duplicate flashcardProgress detector / repairer ─────────────────────

/**
 * Finds (ownerUserId, cardId) pairs with more than one flashcardProgress row.
 * Deletes all but the most recently updated row — same logic as the real-time
 * self-healing upsert in flashcards.ts.
 *
 * The upsert fix prevents new duplicates. This cron catches any that existed
 * before the fix or were created via direct tooling.
 */
export const repairDuplicateFlashcardProgress = internalAction({
  args: {},
  handler: async (ctx): Promise<void> => {
    const allRows: Array<{
      _id: string;
      ownerUserId: string;
      cardId: string;
      updatedAt: number;
    }> = await ctx.runQuery(internal.dataQuality.getAllFlashcardProgressRows, {});

    // Group by (ownerUserId, cardId)
    const grouped = new Map<string, typeof allRows>();
    for (const row of allRows) {
      const key = `${row.ownerUserId}::${row.cardId}`;
      const group = grouped.get(key) ?? [];
      group.push(row);
      grouped.set(key, group);
    }

    const staleIds: string[] = [];
    for (const [, group] of grouped) {
      if (group.length <= 1) continue;
      // Keep the row with the highest updatedAt; schedule the rest for deletion.
      group.sort((a, b) => (Number(b.updatedAt) || 0) - (Number(a.updatedAt) || 0));
      for (const stale of group.slice(1)) {
        staleIds.push(stale._id);
      }
    }

    if (staleIds.length > 0) {
      await ctx.runMutation(internal.dataQuality.deleteFlashcardProgressRows, { ids: staleIds });
      console.warn(`[dataQuality:D11] Repaired ${staleIds.length} duplicate flashcardProgress row(s).`);
    } else {
      console.info(`[dataQuality:D11] OK — ${allRows.length} flashcardProgress rows checked, no duplicates found.`);
    }
  },
});

// internalQuery so it can be called via ctx.runQuery.
export const getAllFlashcardProgressRows = internalQuery({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("flashcardProgress").collect();
  },
});

export const deleteFlashcardProgressRows = internalMutation({
  args: { ids: v.array(v.string()) },
  handler: async (ctx, { ids }) => {
    for (const id of ids) {
      await ctx.db.delete(id as any);
    }
  },
});
