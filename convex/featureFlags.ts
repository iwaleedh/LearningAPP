import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { requireAdmin } from "./authHelpers";

const DEFAULT_FLAGS = [
  { key: "flashcards", label: "Flashcards", description: "Spaced-repetition flashcard study mode", owner: "student-experience", purpose: "Controls the flashcard study workflow", sunsetDate: "2026-09-30" },
  { key: "pastPapers", label: "Past Papers", description: "Timed past-paper practice and review", owner: "student-experience", purpose: "Controls access to past-paper practice flows", sunsetDate: "2026-09-30" },
  { key: "exercises", label: "Exercises", description: "MCQ, fill-in-blank, drag & drop exercises", owner: "student-experience", purpose: "Controls access to interactive exercises", sunsetDate: "2026-09-30" },
  { key: "liveClass", label: "Live Class", description: "Real-time teacher-hosted live sessions", owner: "classroom-platform", purpose: "Emergency kill switch for live classroom features", sunsetDate: "2026-09-30" },
  { key: "mistakeBank", label: "Mistake Bank", description: "Review and retry incorrectly answered questions", owner: "student-experience", purpose: "Controls the mistake review workflow", sunsetDate: "2026-09-30" },
  { key: "progress", label: "Progress Tracker", description: "Study analytics and performance charts", owner: "student-experience", purpose: "Controls analytics and progress views", sunsetDate: "2026-09-30" },
  { key: "notes", label: "Notes", description: "Structured subject notes and reading view", owner: "content-platform", purpose: "Controls note browsing and note reading routes", sunsetDate: "2026-09-30" },
  { key: "requireApproval", label: "Require Approval", description: "New sign-ups must be approved by admin before access", owner: "identity-access", purpose: "Controls whether newly registered users require admin approval", sunsetDate: "2026-12-31" },
  { key: "payments", label: "Payments", description: "Payment slip upload and payment-review workflow", owner: "revenue-ops", purpose: "Emergency kill switch for payment uploads and review intake", sunsetDate: "2026-09-30" },
];

/**
 * Returns all feature flags, seeding defaults for any that don't exist yet.
 * Public — readable by any authenticated user so the app can gate features.
 */
export const getAllFlags = query({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db.query("featureFlags").collect();
    const existingKeys = new Set(existing.map((f) => f.key));

    // Return existing flags merged with defaults for any missing keys
    const defaults = DEFAULT_FLAGS
      .filter((d) => !existingKeys.has(d.key))
      .map((d) => ({
        _id: null as unknown as any,
        key: d.key,
        label: d.label,
        description: d.description,
        owner: d.owner,
        purpose: d.purpose,
        sunsetDate: d.sunsetDate,
        enabled: true, // all features on by default
        updatedAt: 0,
        updatedBy: "system",
      }));

    return [...existing, ...defaults].sort((a, b) => a.key.localeCompare(b.key));
  },
});

/**
 * Returns a single flag value (true = enabled). Defaults to true if not set.
 */
export const getFlag = query({
  args: { key: v.string() },
  handler: async (ctx, { key }) => {
    const flag = await ctx.db
      .query("featureFlags")
      .withIndex("by_key", (q) => q.eq("key", key))
      .first();
    return flag?.enabled ?? true;
  },
});

/**
 * Set a feature flag. Admin only.
 */
export const setFlag = mutation({
  args: { key: v.string(), enabled: v.boolean() },
  handler: async (ctx, { key, enabled }) => {
    const adminId = await requireAdmin(ctx);
    const existing = await ctx.db
      .query("featureFlags")
      .withIndex("by_key", (q) => q.eq("key", key))
      .first();

    const meta = DEFAULT_FLAGS.find((d) => d.key === key);

    if (existing) {
      await ctx.db.patch(existing._id, {
        enabled,
        label: meta?.label ?? existing.label,
        description: meta?.description ?? existing.description,
        owner: meta?.owner ?? existing.owner,
        purpose: meta?.purpose ?? existing.purpose,
        sunsetDate: meta?.sunsetDate ?? existing.sunsetDate,
        updatedAt: Date.now(),
        updatedBy: adminId,
      });
    } else {
      await ctx.db.insert("featureFlags", {
        key,
        enabled,
        label: meta?.label ?? key,
        description: meta?.description ?? "",
        owner: meta?.owner ?? "platform",
        purpose: meta?.purpose ?? `Controls ${key}`,
        sunsetDate: meta?.sunsetDate,
        updatedAt: Date.now(),
        updatedBy: adminId,
      });
    }
  },
});
