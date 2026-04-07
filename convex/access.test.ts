import test from "node:test";
import assert from "node:assert/strict";

import { finalizeSignIn, revokeExpiredAccessSessions, selectAccessWindow } from "./access";
import { approveUser, retryPendingLoginAlerts, revokeUserAccess, setUserAccessExpiry } from "./admin";
import { requireApprovedAccount } from "./authHelpers";
import { createMockConvexCtx } from "./testUtils";

const finalizeSignInHandler = (finalizeSignIn as any)._handler as (ctx: any, args: any) => Promise<any>;
const selectAccessWindowHandler = (selectAccessWindow as any)._handler as (ctx: any, args: any) => Promise<any>;
const revokeExpiredAccessSessionsHandler = (revokeExpiredAccessSessions as any)._handler as (ctx: any, args: any) => Promise<any>;
const approveUserHandler = (approveUser as any)._handler as (ctx: any, args: any) => Promise<any>;
const retryPendingLoginAlertsHandler = (retryPendingLoginAlerts as any)._handler as (ctx: any, args: any) => Promise<any>;
const revokeUserAccessHandler = (revokeUserAccess as any)._handler as (ctx: any, args: any) => Promise<any>;
const setUserAccessExpiryHandler = (setUserAccessExpiry as any)._handler as (ctx: any, args: any) => Promise<any>;

function createSelectAccessWindowCtx({
  now,
  sessionId,
  userId = "student_date_test",
}: {
  now: number;
  sessionId: string;
  userId?: string;
}) {
  return createMockConvexCtx({
    identity: {
      subject: userId,
      email: `${userId}@example.com`,
      sid: sessionId,
    },
    tables: {
      users: [{
        _id: "users:date-test",
        userId,
        username: "Date Test Student",
        email: `${userId}@example.com`,
        role: "student",
        accountStatus: "approved",
        sessionVersion: 1,
        createdAt: now,
      }],
      authSessions: [{
        _id: "authSessions:date-test",
        userId,
        sessionId,
        provider: "clerk",
        sessionVersion: 1,
        createdAt: now,
        lastSeenAt: now,
      }],
      loginEvents: [{
        _id: "loginEvents:date-test",
        userId,
        sessionId,
        provider: "clerk",
        username: "Date Test Student",
        email: `${userId}@example.com`,
        eventType: "sign_in",
        occurredAt: now,
        emailDeliveryStatus: "pending",
        emailRetryCount: 0,
        createdAt: now,
      }],
    },
  });
}

test("finalizeSignIn creates a tracked auth session and login event", async () => {
  const { ctx, tables, schedulerCalls } = createMockConvexCtx({
    identity: {
      subject: "student_1",
      email: "student@example.com",
      sid: "sess_1",
    },
    tables: {
      users: [{
        _id: "users:1",
        userId: "student_1",
        username: "Student One",
        email: "student@example.com",
        role: "student",
        accountStatus: "approved",
        sessionVersion: 1,
        createdAt: 1,
      }],
    },
  });

  const result = await finalizeSignInHandler(ctx, {
    sessionId: "sess_1",
    provider: "google",
    userAgent: "QA Browser",
  });

  assert.equal(result.accessStatus, "selection_required");
  assert.equal(tables.authSessions.length, 1);
  assert.equal(tables.loginEvents.length, 1);
  assert.equal(tables.loginEvents[0]?.emailDeliveryStatus, "pending");
  assert.equal(schedulerCalls.length, 1);
});

test("finalizeSignIn returns the active trial summary for approved trial users", async () => {
  const now = Date.now();
  const trialExpiresAt = now + (7 * 24 * 60 * 60 * 1000);
  const { ctx } = createMockConvexCtx({
    identity: {
      subject: "student_trial_active",
      email: "trial@example.com",
      sid: "sess_trial",
    },
    tables: {
      users: [{
        _id: "users:trial",
        userId: "student_trial_active",
        username: "Trial Student",
        email: "trial@example.com",
        role: "student",
        accountStatus: "approved",
        trialStartedAt: now - 5_000,
        trialExpiresAt,
        sessionVersion: 1,
        createdAt: 1,
      }],
    },
  });

  const result = await finalizeSignInHandler(ctx, {
    sessionId: "sess_trial",
    provider: "clerk",
    userAgent: "QA Browser",
  });

  assert.equal(result.accessStatus, "active");
  assert.equal(result.accessGrantKind, "trial");
  assert.equal(result.accessExpiresAt, trialExpiresAt);
  assert.equal(result.hasUsedTrial, true);
  assert.equal(result.accessDurationMonths, null);
});

test("approveUser grants a one-time 7-day trial to first-time pending users", async () => {
  const realNow = Date.now;
  const approvedAt = Date.parse("2026-04-07T12:00:00.000Z");
  Date.now = () => approvedAt;

  try {
    const { ctx, tables } = createMockConvexCtx({
      identity: {
        subject: "admin_user",
        email: "iwaleedh@gmail.com",
      },
      tables: {
        users: [{
          _id: "users:pending",
          userId: "student_pending",
          username: "Pending Student",
          email: "pending@example.com",
          role: "student",
          accountStatus: "pending",
          createdAt: 1,
        }],
      },
    });

    await approveUserHandler(ctx, { userId: "student_pending" });

    assert.equal(tables.users[0]?.accountStatus, "approved");
    assert.equal(tables.users[0]?.trialStartedAt, approvedAt);
    assert.equal(tables.users[0]?.trialExpiresAt, approvedAt + (7 * 24 * 60 * 60 * 1000));
  } finally {
    Date.now = realNow;
  }
});

test("approveUser does not reissue a consumed trial", async () => {
  const realNow = Date.now;
  const approvedAt = Date.parse("2026-04-07T12:00:00.000Z");
  const originalTrialStart = approvedAt - (30 * 24 * 60 * 60 * 1000);
  const originalTrialExpiry = originalTrialStart + (7 * 24 * 60 * 60 * 1000);
  Date.now = () => approvedAt;

  try {
    const { ctx, tables } = createMockConvexCtx({
      identity: {
        subject: "admin_user",
        email: "iwaleedh@gmail.com",
      },
      tables: {
        users: [{
          _id: "users:returning",
          userId: "student_returning",
          username: "Returning Student",
          email: "returning@example.com",
          role: "student",
          accountStatus: "pending",
          trialStartedAt: originalTrialStart,
          trialExpiresAt: originalTrialExpiry,
          createdAt: 1,
        }],
      },
    });

    await approveUserHandler(ctx, { userId: "student_returning" });

    assert.equal(tables.users[0]?.accountStatus, "approved");
    assert.equal(tables.users[0]?.trialStartedAt, originalTrialStart);
    assert.equal(tables.users[0]?.trialExpiresAt, originalTrialExpiry);
  } finally {
    Date.now = realNow;
  }
});

test("selectAccessWindow sets a due date and revokes sibling sessions", async () => {
  const now = Date.now();
  const { ctx, tables } = createMockConvexCtx({
    identity: {
      subject: "student_2",
      email: "student2@example.com",
      sid: "sess_current",
    },
    tables: {
      users: [{
        _id: "users:2",
        userId: "student_2",
        username: "Student Two",
        email: "student2@example.com",
        role: "student",
        accountStatus: "approved",
        sessionVersion: 1,
        createdAt: now,
      }],
      authSessions: [
        {
          _id: "authSessions:1",
          userId: "student_2",
          sessionId: "sess_current",
          provider: "clerk",
          sessionVersion: 1,
          createdAt: now,
          lastSeenAt: now,
        },
        {
          _id: "authSessions:2",
          userId: "student_2",
          sessionId: "sess_other",
          provider: "clerk",
          sessionVersion: 1,
          createdAt: now,
          lastSeenAt: now,
        },
      ],
      loginEvents: [{
        _id: "loginEvents:1",
        userId: "student_2",
        sessionId: "sess_current",
        provider: "clerk",
        username: "Student Two",
        email: "student2@example.com",
        eventType: "sign_in",
        occurredAt: now,
        emailDeliveryStatus: "pending",
        emailRetryCount: 0,
        createdAt: now,
      }],
    },
  });

  const result = await selectAccessWindowHandler(ctx, { months: 1, sessionId: "sess_current" });
  const user = tables.users[0];
  const currentSession = tables.authSessions.find((row) => row._id === "authSessions:1");
  const siblingSession = tables.authSessions.find((row) => row._id === "authSessions:2");

  assert.equal(result.accessStatus, "active");
  assert.equal(user.accessDurationMonths, 1);
  assert.ok(user.accessExpiresAt > user.accessWindowStartedAt);
  assert.equal(user.sessionVersion, 2);
  assert.equal(currentSession?.sessionVersion, 2);
  assert.equal(siblingSession?.revokeReason, "Access window renewed on another session.");
  assert.equal(tables.loginEvents[0]?.accessDurationMonths, 1);
});

test("selectAccessWindow clamps one-month renewals to the last day of shorter months", async () => {
  const realNow = Date.now;
  Date.now = () => Date.parse("2026-01-31T10:00:00.000Z");

  try {
    const now = Date.now();
    const { ctx, tables } = createSelectAccessWindowCtx({
      now,
      sessionId: "sess_month_end",
    });

    const result = await selectAccessWindowHandler(ctx, { months: 1, sessionId: "sess_month_end" });

    assert.equal(result.accessStatus, "active");
    assert.equal(
      new Date(tables.users[0]?.accessExpiresAt ?? 0).toISOString(),
      "2026-02-28T10:00:00.000Z",
    );
  } finally {
    Date.now = realNow;
  }
});

test("selectAccessWindow preserves leap-day month-end behavior for one-month renewals", async () => {
  const realNow = Date.now;
  Date.now = () => Date.parse("2024-01-31T10:00:00.000Z");

  try {
    const now = Date.now();
    const { ctx, tables } = createSelectAccessWindowCtx({
      now,
      sessionId: "sess_leap_month",
    });

    await selectAccessWindowHandler(ctx, { months: 1, sessionId: "sess_leap_month" });

    assert.equal(
      new Date(tables.users[0]?.accessExpiresAt ?? 0).toISOString(),
      "2024-02-29T10:00:00.000Z",
    );
  } finally {
    Date.now = realNow;
  }
});

test("selectAccessWindow clamps year renewals from leap day to the last valid day", async () => {
  const realNow = Date.now;
  Date.now = () => Date.parse("2024-02-29T10:00:00.000Z");

  try {
    const now = Date.now();
    const { ctx, tables } = createSelectAccessWindowCtx({
      now,
      sessionId: "sess_leap_year",
    });

    await selectAccessWindowHandler(ctx, { months: 12, sessionId: "sess_leap_year" });

    assert.equal(
      new Date(tables.users[0]?.accessExpiresAt ?? 0).toISOString(),
      "2025-02-28T10:00:00.000Z",
    );
  } finally {
    Date.now = realNow;
  }
});

test("requireApprovedAccount rejects expired users", async () => {
  const { ctx } = createMockConvexCtx({
    identity: {
      subject: "student_expired",
      email: "expired@example.com",
      sid: "sess_expired",
    },
    tables: {
      users: [{
        _id: "users:expired",
        userId: "student_expired",
        username: "Expired Student",
        email: "expired@example.com",
        role: "student",
        accountStatus: "approved",
        sessionVersion: 1,
        accessExpiresAt: Date.now() - 1_000,
        createdAt: 1,
      }],
    },
  });

  await assert.rejects(() => requireApprovedAccount(ctx as any), /Access window expired\./);
});

test("requireApprovedAccount allows the configured admin email without an access window", async () => {
  const { ctx } = createMockConvexCtx({
    identity: {
      subject: "admin_user",
      email: "iwaleedh@gmail.com",
      sid: "sess_admin",
    },
    tables: {
      users: [{
        _id: "users:admin",
        userId: "admin_user",
        username: "Admin User",
        email: "iwaleedh@gmail.com",
        role: "student",
        accountStatus: "approved",
        sessionVersion: 1,
        createdAt: 1,
      }],
    },
  });

  await assert.doesNotReject(() => requireApprovedAccount(ctx as any));
});

test("revokeExpiredAccessSessions revokes active sessions for expired users", async () => {
  const now = Date.now();
  const { ctx, tables } = createMockConvexCtx({
    identity: null,
    tables: {
      users: [{
        _id: "users:expired",
        userId: "student_expired",
        username: "Expired Student",
        role: "student",
        accountStatus: "approved",
        sessionVersion: 1,
        accessExpiresAt: now - 5_000,
        createdAt: now,
      }],
      authSessions: [{
        _id: "authSessions:expired",
        userId: "student_expired",
        sessionId: "sess_expired",
        provider: "clerk",
        sessionVersion: 1,
        createdAt: now,
        lastSeenAt: now,
      }],
    },
  });

  const result = await revokeExpiredAccessSessionsHandler(ctx, {});
  assert.equal(result.revokedUsers, 1);
  assert.equal(tables.authSessions[0]?.revokeReason, "Access window expired.");
});

test("revokeExpiredAccessSessions ignores admin accounts", async () => {
  const now = Date.now();
  const { ctx, tables } = createMockConvexCtx({
    identity: null,
    tables: {
      users: [{
        _id: "users:admin",
        userId: "admin_user",
        username: "Admin User",
        email: "iwaleedh@gmail.com",
        role: "student",
        accountStatus: "approved",
        sessionVersion: 2,
        accessExpiresAt: now - 5_000,
        createdAt: now,
      }],
      authSessions: [{
        _id: "authSessions:admin",
        userId: "admin_user",
        sessionId: "sess_admin",
        provider: "clerk",
        sessionVersion: 2,
        createdAt: now,
        lastSeenAt: now,
      }],
    },
  });

  const result = await revokeExpiredAccessSessionsHandler(ctx, {});

  assert.equal(result.revokedUsers, 0);
  assert.equal(result.revokedSessions, 0);
  assert.equal(tables.authSessions[0]?.revokeReason, undefined);
});

test("admin revokeUserAccess expires the account and revokes sessions", async () => {
  const now = Date.now();
  const { ctx, tables } = createMockConvexCtx({
    identity: {
      subject: "admin_user",
      email: "iwaleedh@gmail.com",
    },
    tables: {
      users: [{
        _id: "users:target",
        userId: "student_target",
        username: "Target Student",
        role: "student",
        email: "target@example.com",
        accountStatus: "approved",
        sessionVersion: 3,
        accessExpiresAt: now + 60_000,
        createdAt: now,
      }],
      authSessions: [{
        _id: "authSessions:target",
        userId: "student_target",
        sessionId: "sess_target",
        provider: "clerk",
        sessionVersion: 3,
        createdAt: now,
        lastSeenAt: now,
      }],
    },
  });

  await revokeUserAccessHandler(ctx, { userId: "student_target", reason: "Manual review" });

  assert.ok(tables.users[0]?.accessExpiresAt <= Date.now());
  assert.equal(tables.users[0]?.sessionVersion, 4);
  assert.equal(tables.authSessions[0]?.revokeReason, "Manual review");
});

test("admin setUserAccessExpiry sets a future expiry and revokes active sessions", async () => {
  const now = Date.now();
  const futureExpiry = now + (30 * 24 * 60 * 60 * 1000);
  const { ctx, tables } = createMockConvexCtx({
    identity: {
      subject: "admin_user",
      email: "iwaleedh@gmail.com",
    },
    tables: {
      users: [{
        _id: "users:target",
        userId: "student_target",
        username: "Target Student",
        role: "student",
        email: "target@example.com",
        accountStatus: "approved",
        sessionVersion: 2,
        createdAt: now,
      }],
      authSessions: [{
        _id: "authSessions:target",
        userId: "student_target",
        sessionId: "sess_target",
        provider: "clerk",
        sessionVersion: 2,
        createdAt: now,
        lastSeenAt: now,
      }],
      auditLogs: [],
      adminActionReceipts: [],
    },
  });

  const result = await setUserAccessExpiryHandler(ctx, {
    userId: "student_target",
    accessExpiresAt: futureExpiry,
    reason: "Manual extension",
  });

  assert.equal(result.accessExpiresAt, futureExpiry);
  assert.equal(tables.users[0]?.accessExpiresAt, futureExpiry);
  assert.equal(tables.users[0]?.sessionVersion, 3);
  assert.equal(tables.authSessions[0]?.revokeReason, "Manual extension");
  assert.equal(tables.auditLogs[0]?.action, "SET_ACCESS_EXPIRY");
});

test("admin setUserAccessExpiry rejects the configured admin account", async () => {
  const now = Date.now();
  const { ctx } = createMockConvexCtx({
    identity: {
      subject: "admin_actor",
      email: "iwaleedh@gmail.com",
    },
    tables: {
      users: [{
        _id: "users:admin-target",
        userId: "admin_target",
        username: "Admin Target",
        role: "student",
        email: "iwaleedh@gmail.com",
        accountStatus: "approved",
        sessionVersion: 2,
        createdAt: now,
      }],
      authSessions: [],
      auditLogs: [],
      adminActionReceipts: [],
    },
  });

  await assert.rejects(
    () => setUserAccessExpiryHandler(ctx, {
      userId: "admin_target",
      accessExpiresAt: now + (30 * 24 * 60 * 60 * 1000),
    }),
    /Admin accounts have unlimited access and cannot be given an expiry\./,
  );
});

test("admin setUserAccessExpiry is idempotent when the same key is retried", async () => {
  const now = Date.now();
  const futureExpiry = now + (45 * 24 * 60 * 60 * 1000);
  const { ctx, tables } = createMockConvexCtx({
    identity: {
      subject: "admin_user",
      email: "iwaleedh@gmail.com",
    },
    tables: {
      users: [{
        _id: "users:target",
        userId: "student_target",
        username: "Target Student",
        role: "student",
        email: "target@example.com",
        accountStatus: "approved",
        sessionVersion: 4,
        createdAt: now,
      }],
      authSessions: [{
        _id: "authSessions:target",
        userId: "student_target",
        sessionId: "sess_target",
        provider: "clerk",
        sessionVersion: 4,
        createdAt: now,
        lastSeenAt: now,
      }],
      auditLogs: [],
      adminActionReceipts: [],
    },
  });

  const first = await setUserAccessExpiryHandler(ctx, {
    userId: "student_target",
    accessExpiresAt: futureExpiry,
    idempotencyKey: "expiry:set:student_target:1",
  });
  const second = await setUserAccessExpiryHandler(ctx, {
    userId: "student_target",
    accessExpiresAt: futureExpiry + 1000,
    idempotencyKey: "expiry:set:student_target:1",
  });

  assert.deepEqual(second, first);
  assert.equal(tables.auditLogs.length, 1);
  assert.equal(tables.adminActionReceipts.length, 1);
  assert.equal(tables.users[0]?.sessionVersion, 5);
});

test("admin retryPendingLoginAlerts only queues pending rows below the retry cap", async () => {
  const now = Date.now();
  const { ctx, tables, schedulerCalls } = createMockConvexCtx({
    identity: {
      subject: "admin_user",
      email: "iwaleedh@gmail.com",
    },
    tables: {
      loginEvents: [
        {
          _id: "loginEvents:1",
          userId: "student_1",
          provider: "google",
          username: "Student One",
          eventType: "sign_in",
          occurredAt: now,
          emailDeliveryStatus: "pending",
          emailRetryCount: 0,
          createdAt: now,
        },
        {
          _id: "loginEvents:2",
          userId: "student_2",
          provider: "google",
          username: "Student Two",
          eventType: "sign_in",
          occurredAt: now - 1,
          emailDeliveryStatus: "pending",
          emailRetryCount: 2,
          createdAt: now - 1,
        },
        {
          _id: "loginEvents:3",
          userId: "student_3",
          provider: "google",
          username: "Student Three",
          eventType: "sign_in",
          occurredAt: now - 2,
          emailDeliveryStatus: "pending",
          emailRetryCount: 3,
          createdAt: now - 2,
        },
        {
          _id: "loginEvents:4",
          userId: "student_4",
          provider: "google",
          username: "Student Four",
          eventType: "sign_in",
          occurredAt: now - 3,
          emailDeliveryStatus: "failed",
          emailRetryCount: 0,
          createdAt: now - 3,
        },
      ],
      auditLogs: [],
    },
  });

  const result = await retryPendingLoginAlertsHandler(ctx, {});

  assert.equal(result.queued, 2);
  assert.deepEqual([...result.queuedLoginEventIds].sort(), ["loginEvents:1", "loginEvents:2"]);
  assert.equal(schedulerCalls.length, 2);
  assert.deepEqual(schedulerCalls.map((call) => call.args.loginEventId).sort(), ["loginEvents:1", "loginEvents:2"]);
  assert.equal(tables.auditLogs[0]?.action, "RETRY_PENDING_LOGIN_ALERTS");
});
