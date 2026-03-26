import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";

export const registerUser = mutation({
  args: { userId: v.string(), username: v.string() },
  handler: async (ctx, { userId, username }) => {
    const existing = await ctx.db
      .query("users")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .first();
    if (existing) return existing._id;

    const id = await ctx.db.insert("users", {
      userId,
      username,
      role: "student",
      createdAt: Date.now(),
    });

    // Pub/Sub: publish user:registered event for fan-out
    await ctx.scheduler.runAfter(0, internal.eventBus.internalPublish, {
      topic: "user:registered",
      payload: JSON.stringify({ userId, username }),
    });

    return id;
  },
});

export const getUser = query({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    return await ctx.db
      .query("users")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .first();
  },
});

export const getAllUsers = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("users").collect();
  },
});

export const setTeacherRole = mutation({
  args: { userId: v.string(), role: v.string() },
  handler: async (ctx, { userId, role }) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .first();
    if (!user) return;
    await ctx.db.patch(user._id, { role });
  },
});

export const getMyRole = query({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .first();
    return user?.role ?? "student";
  },
});
