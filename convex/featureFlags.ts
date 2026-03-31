import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { requireAdmin } from "./authHelpers";

const DEFAULT_FLAGS = [
  { key: "flashcards",   label: "Flashcards",        description: "Spaced-repetition flashcard study mode" },
  { key: "pastPapers",   label: "Past Papers",        description: "Timed past-paper practice and review" },
  { key: "exercises",    label: "Exercises",          description: "MCQ, fill-in-blank, drag & drop exercises" },
  { key: "liveClass",    label: "Live Class",         description: "Real-time teacher-hosted live sessions" },
  { key: "mistakeBank",  label: "Mistake Bank",       description: "Review and retry incorrectly answered questions" },
  { key: "progress",     label: "Progress Tracker",   description: "Study analytics and performance charts" },
  { key: "notes",        label: "Notes",              description: "Structured subject notes and reading view" },
  { key: "requireApproval", label: "Require Approval", description: "New sign-ups must be approved by admin before access" },
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
      await ctx.db.patch(existing._id, { enabled, updatedAt: Date.now(), updatedBy: adminId });
    } else {
      await ctx.db.insert("featureFlags", {
        key,
        enabled,
        label: meta?.label ?? key,
        description: meta?.description ?? "",
        updatedAt: Date.now(),
        updatedBy: adminId,
      });
    }
  },
});
