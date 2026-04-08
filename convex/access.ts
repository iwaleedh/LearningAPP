import { internalMutation, mutation } from "./_generated/server";
import { internal } from "./_generated/api";
import { v } from "convex/values";
import {
  effectiveAccountStatus,
  getAuthenticatedIdentity,
  getIdentitySessionId,
  getUserRecordById,
  hasUnlimitedAccessWindow,
  resolveAccessGrant,
  resolveAccessStatus,
  requireAuthenticatedIdentity,
} from "./authHelpers";

const anyInternal = internal as any;
const TRIAL_DURATION_MS = 7 * 24 * 60 * 60 * 1000;

function addMonthsUtc(baseMs: number, months: 1 | 12) {
  const source = new Date(baseMs);
  const targetMonthIndex = source.getUTCMonth() + months;
  const daysInTargetMonth = new Date(Date.UTC(
    source.getUTCFullYear(),
    targetMonthIndex + 1,
    0,
  )).getUTCDate();
  const clampedDay = Math.min(source.getUTCDate(), daysInTargetMonth);

  return Date.UTC(
    source.getUTCFullYear(),
    targetMonthIndex,
    clampedDay,
    source.getUTCHours(),
    source.getUTCMinutes(),
    source.getUTCSeconds(),
    source.getUTCMilliseconds(),
  );
}

function normalizeProvider(value: string | undefined | null) {
  return String(value || "clerk").trim().slice(0, 80) || "clerk";
}

function normalizeUserAgent(value: string | undefined | null) {
  const normalized = String(value || "").trim();
  return normalized ? normalized.slice(0, 400) : undefined;
}

function buildAccessSummary(user: any, extra: Record<string, unknown> = {}) {
  const now = Date.now();
  const hasUnlimitedAccess = hasUnlimitedAccessWindow(user);
  const accessGrant = resolveAccessGrant(user, now);
  const accessExpiresAt = hasUnlimitedAccess ? null : accessGrant.expiresAt ?? null;
  return {
    accountStatus: user ? effectiveAccountStatus(user) : "pending",
    accessStatus: resolveAccessStatus(user, now),
    accessGrantKind: accessGrant.kind,
    accessExpiresAt,
    paidAccessExpiresAt: hasUnlimitedAccess ? null : user?.accessExpiresAt ?? null,
    accessDurationMonths: hasUnlimitedAccess || accessGrant.kind !== "paid" ? null : user?.accessDurationMonths ?? null,
    accessWindowStartedAt: hasUnlimitedAccess || accessGrant.kind !== "paid" ? null : user?.accessWindowStartedAt ?? null,
    trialStartedAt: user?.trialStartedAt ?? null,
    trialExpiresAt: user?.trialExpiresAt ?? null,
    hasUsedTrial: typeof user?.trialStartedAt === "number",
    firstSignInAt: user?.firstSignInAt ?? null,
    lastSignInAt: user?.lastSignInAt ?? null,
    remainingMs: !hasUnlimitedAccess && typeof accessExpiresAt === "number" && accessExpiresAt > now ? accessExpiresAt - now : 0,
    ...extra,
  };
}

export const finalizeSignIn = mutation({
  args: {
    sessionId: v.optional(v.string()),
    provider: v.optional(v.string()),
    userAgent: v.optional(v.string()),
  },
  handler: async (ctx, { sessionId, provider, userAgent }) => {
    const identity = await requireAuthenticatedIdentity(ctx);
    const user = await getUserRecordById(ctx, identity.subject);
    if (!user) {
      throw new Error("Account registration is completing. Please wait a moment and try again.");
    }

    const now = Date.now();
    const providerName = normalizeProvider(provider);
    const identitySessionId = getIdentitySessionId(identity);
    const resolvedSessionId = String(sessionId || identitySessionId || "").trim() || undefined;
    const currentSessionVersion = user.sessionVersion ?? 1;
    const normalizedUserAgent = normalizeUserAgent(userAgent);
    const shouldStartTrial = !hasUnlimitedAccessWindow(user)
      && effectiveAccountStatus(user) === "approved"
      && typeof user.trialStartedAt !== "number"
      && typeof user.accessExpiresAt !== "number";
    const trialExpiresAt = shouldStartTrial ? now + TRIAL_DURATION_MS : user.trialExpiresAt;

    let existingSession = null;
    if (resolvedSessionId) {
      existingSession = await ctx.db
        .query("authSessions")
        .withIndex("by_user_session", (q) => q.eq("userId", identity.subject).eq("sessionId", resolvedSessionId))
        .first();
    }

    const userPatch: Record<string, any> = {
      firstSignInAt: user.firstSignInAt ?? now,
      lastSignInAt: now,
      lastAuthProvider: providerName,
      lastAuthSessionId: resolvedSessionId,
      sessionVersion: currentSessionVersion,
    };
    if (shouldStartTrial) {
      userPatch.trialStartedAt = now;
      userPatch.trialExpiresAt = trialExpiresAt;
      userPatch.accessRevokedAt = undefined;
      userPatch.accessRevokedReason = undefined;
    }

    const nextUserState = {
      ...user,
      ...userPatch,
    };
    const currentAccessGrant = resolveAccessGrant(nextUserState, now);

    let loginEventId = null;
    let createdSession = false;

    if (resolvedSessionId && existingSession) {
      await ctx.db.patch(existingSession._id, {
        provider: providerName,
        sessionVersion: currentSessionVersion,
        userAgent: normalizedUserAgent,
        lastSeenAt: now,
      });
    } else if (resolvedSessionId) {
      createdSession = true;
      await ctx.db.insert("authSessions", {
        userId: identity.subject,
        sessionId: resolvedSessionId,
        provider: providerName,
        sessionVersion: currentSessionVersion,
        userAgent: normalizedUserAgent,
        createdAt: now,
        lastSeenAt: now,
      });
      loginEventId = await ctx.db.insert("loginEvents", {
        userId: identity.subject,
        sessionId: resolvedSessionId,
        provider: providerName,
        username: user.username,
        email: user.email,
        eventType: "sign_in",
        occurredAt: now,
        accessDurationMonths: currentAccessGrant.kind === "paid" ? nextUserState.accessDurationMonths : undefined,
        accessExpiresAt: currentAccessGrant.expiresAt ?? undefined,
        userAgent: normalizedUserAgent,
        emailDeliveryStatus: "pending",
        emailRetryCount: 0,
        createdAt: now,
      });
      userPatch.lastLoginEventId = loginEventId;
    }

    await ctx.db.patch(user._id, userPatch);

    const updatedUser = nextUserState;

    if (loginEventId) {
      await ctx.scheduler.runAfter(0, anyInternal.authNotifications.sendLoginAlert, {
        loginEventId,
      });
    }

    return buildAccessSummary(updatedUser, {
      loginEventId,
      createdSession,
    });
  },
});

export const selectAccessWindow = mutation({
  args: {
    months: v.union(v.literal(1), v.literal(12)),
    sessionId: v.optional(v.string()),
  },
  handler: async (ctx, { months, sessionId }) => {
    const identity = await requireAuthenticatedIdentity(ctx);
    const user = await getUserRecordById(ctx, identity.subject);
    if (!user) {
      throw new Error("User not found.");
    }

    if (hasUnlimitedAccessWindow(user)) {
      throw new Error("Admin accounts have unlimited access and do not use access windows.");
    }

    const status = effectiveAccountStatus(user);
    if (status === "pending") {
      throw new Error("Account pending approval.");
    }
    if (status === "blocked") {
      throw new Error("Account blocked by administrator.");
    }

    const now = Date.now();
    const activeStatus = resolveAccessStatus(user, now);
    if (activeStatus === "active") {
      throw new Error("An active access window already exists.");
    }

    const identitySessionId = getIdentitySessionId(identity);
    const resolvedSessionId = String(sessionId || identitySessionId || "").trim() || undefined;
    const nextSessionVersion = (user.sessionVersion ?? 1) + 1;
    const accessExpiresAt = addMonthsUtc(now, months);
    const sessions = await ctx.db
      .query("authSessions")
      .withIndex("by_user", (q) => q.eq("userId", identity.subject))
      .collect();

    for (const session of sessions) {
      if (resolvedSessionId && session.sessionId === resolvedSessionId) {
        await ctx.db.patch(session._id, {
          sessionVersion: nextSessionVersion,
          revokedAt: undefined,
          revokeReason: undefined,
          lastSeenAt: now,
        });
        continue;
      }
      if (!session.revokedAt) {
        await ctx.db.patch(session._id, {
          revokedAt: now,
          revokeReason: "Access window renewed on another session.",
        });
      }
    }

    const patch: Record<string, any> = {
      accessWindowStartedAt: now,
      accessDurationMonths: months,
      accessExpiresAt,
      accessRevokedAt: undefined,
      accessRevokedReason: undefined,
      sessionVersion: nextSessionVersion,
    };
    await ctx.db.patch(user._id, patch);

    const latestLoginEvent = resolvedSessionId
      ? await ctx.db
        .query("loginEvents")
        .withIndex("by_session", (q) => q.eq("sessionId", resolvedSessionId))
        .order("desc")
        .first()
      : null;

    if (latestLoginEvent) {
      await ctx.db.patch(latestLoginEvent._id, {
        accessDurationMonths: months,
        accessExpiresAt,
      });
    }

    await ctx.db.insert("loginEvents", {
      userId: identity.subject,
      sessionId: resolvedSessionId,
      provider: user.lastAuthProvider || "clerk",
      username: user.username,
      email: user.email,
      eventType: "access_selected",
      occurredAt: now,
      accessDurationMonths: months,
      accessExpiresAt,
      createdAt: now,
    });

    return buildAccessSummary({
      ...user,
      ...patch,
    });
  },
});

export const revokeExpiredAccessSessions = internalMutation({
  args: {},
  handler: async (ctx) => {
    const now = Date.now();
    const expiredUsers = await ctx.db
      .query("users")
      .withIndex("by_accessExpiresAt", (q) => q.lt("accessExpiresAt", now))
      .collect();

    let revokedUsers = 0;
    let revokedSessions = 0;
    for (const user of expiredUsers) {
      if (effectiveAccountStatus(user) !== "approved") {
        continue;
      }
      if (hasUnlimitedAccessWindow(user)) {
        continue;
      }
      if (typeof user.accessExpiresAt !== "number" || user.accessExpiresAt <= 0) {
        continue;
      }
      if (user.accessExpiresAt > now) {
        continue;
      }

      if (!user.accessRevokedAt) {
        revokedUsers += 1;
        await ctx.db.patch(user._id, {
          accessRevokedAt: now,
          accessRevokedReason: "Access window expired.",
          sessionVersion: (user.sessionVersion ?? 1) + 1,
        });
      }

      const sessions = await ctx.db
        .query("authSessions")
        .withIndex("by_user", (q) => q.eq("userId", user.userId))
        .collect();

      for (const session of sessions) {
        if (session.revokedAt) continue;
        revokedSessions += 1;
        await ctx.db.patch(session._id, {
          revokedAt: now,
          revokeReason: "Access window expired.",
        });
      }
    }

    return { revokedUsers, revokedSessions };
  },
});
