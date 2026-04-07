import test from "node:test";
import assert from "node:assert/strict";

import {
  listPendingLoginAlerts,
  processPendingLoginAlerts,
  sendLoginAlert,
} from "./authNotifications";
import { createMockConvexCtx } from "./testUtils";

const listPendingLoginAlertsHandler = (listPendingLoginAlerts as any)._handler as (ctx: any, args: any) => Promise<any>;
const sendLoginAlertHandler = (sendLoginAlert as any)._handler as (ctx: any, args: any) => Promise<any>;
const processPendingLoginAlertsHandler = (processPendingLoginAlerts as any)._handler as (ctx: any, args: any) => Promise<any>;

function withMockedEnv(overrides: Record<string, string | undefined>, callback: () => Promise<void>) {
  const env = process.env;
  const previous = new Map<string, string | undefined>();

  for (const [key, value] of Object.entries(overrides)) {
    previous.set(key, env[key]);
    if (value === undefined) {
      delete env[key];
    } else {
      env[key] = value;
    }
  }

  return callback().finally(() => {
    for (const [key, value] of previous.entries()) {
      if (value === undefined) {
        delete env[key];
      } else {
        env[key] = value;
      }
    }
  });
}

function withMockedFetch(mockFetch: typeof fetch, callback: () => Promise<void>) {
  const previousFetch = globalThis.fetch;
  globalThis.fetch = mockFetch;
  return callback().finally(() => {
    globalThis.fetch = previousFetch;
  });
}

function createNotificationCtx() {
  const now = Date.now();
  return createMockConvexCtx({
    identity: null,
    tables: {
      users: [{
        _id: "users:1",
        userId: "student_1",
        username: "Student One",
        email: "student@example.com",
        role: "student",
        accountStatus: "approved",
        sessionVersion: 1,
        createdAt: now,
      }],
      loginEvents: [{
        _id: "loginEvents:1",
        userId: "student_1",
        sessionId: "sess_1",
        provider: "google",
        username: "Student One",
        email: "student@example.com",
        eventType: "sign_in",
        occurredAt: now,
        accessDurationMonths: 1,
        accessExpiresAt: now + 30_000,
        userAgent: "QA Browser",
        emailDeliveryStatus: "pending",
        emailRetryCount: 0,
        createdAt: now,
      }],
      emailDeliveryAttempts: [],
    },
  });
}

test("listPendingLoginAlerts excludes exhausted retries and respects the limit", async () => {
  const now = Date.now();
  const { ctx } = createMockConvexCtx({
    identity: null,
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
          emailRetryCount: 3,
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
          emailRetryCount: 2,
          createdAt: now - 2,
        },
      ],
    },
  });

  const pending = await listPendingLoginAlertsHandler(ctx, { limit: 5 });

  assert.deepEqual(
    pending.map((event: any) => event._id).sort(),
    ["loginEvents:1", "loginEvents:3"],
  );
});

test("sendLoginAlert records a failed attempt when SendGrid env vars are missing", async () => {
  await withMockedEnv({
    SENDGRID_API_KEY: undefined,
    SENDGRID_FROM_EMAIL: undefined,
    LOGIN_ALERT_TO_EMAIL: undefined,
  }, async () => {
    const { ctx, tables } = createNotificationCtx();

    await sendLoginAlertHandler(ctx, { loginEventId: "loginEvents:1" });

    assert.equal(tables.emailDeliveryAttempts.length, 1);
    assert.equal(tables.emailDeliveryAttempts[0]?.status, "failed");
    assert.equal(tables.emailDeliveryAttempts[0]?.recipientMasked, "iw***@gmail.com");
    assert.equal(tables.loginEvents[0]?.emailRetryCount, 1);
    assert.equal(tables.loginEvents[0]?.emailDeliveryStatus, "pending");
    assert.match(tables.loginEvents[0]?.emailLastError || "", /not configured/i);
  });
});

test("sendLoginAlert marks the login event sent when SendGrid accepts the email", async () => {
  await withMockedEnv({
    SENDGRID_API_KEY: "SG.test-key",
    SENDGRID_FROM_EMAIL: "noreply@example.com",
    LOGIN_ALERT_TO_EMAIL: "alerts@example.com",
  }, async () => {
    const { ctx, tables } = createNotificationCtx();
    let requestBody: any = null;

    await withMockedFetch((async (_url, init) => {
      requestBody = JSON.parse(String(init?.body || "{}"));
      return {
        ok: true,
        status: 202,
        headers: new Headers({ "x-message-id": "sg-msg-123" }),
        text: async () => "",
      } as Response;
    }) as typeof fetch, async () => {
      await sendLoginAlertHandler(ctx, { loginEventId: "loginEvents:1" });
    });

    assert.equal(requestBody.personalizations[0].to[0].email, "alerts@example.com");
    assert.equal(requestBody.from.email, "noreply@example.com");
    assert.match(requestBody.subject, /Study Smart login: Student One/);
    assert.equal(tables.loginEvents[0]?.emailDeliveryStatus, "sent");
    assert.equal(tables.loginEvents[0]?.emailRetryCount, 0);
    assert.equal(tables.emailDeliveryAttempts[0]?.status, "sent");
    assert.equal(tables.emailDeliveryAttempts[0]?.httpStatus, 202);
    assert.equal(tables.emailDeliveryAttempts[0]?.messageId, "sg-msg-123");
  });
});

test("sendLoginAlert sanitizes provider failures before storing them", async () => {
  await withMockedEnv({
    SENDGRID_API_KEY: "SG.test-key",
    SENDGRID_FROM_EMAIL: "noreply@example.com",
  }, async () => {
    const { ctx, tables } = createNotificationCtx();

    await withMockedFetch((async () => ({
      ok: false,
      status: 502,
      headers: new Headers(),
      text: async () => "admin@example.com Bearer secret-token",
    }) as Response) as typeof fetch, async () => {
      await sendLoginAlertHandler(ctx, { loginEventId: "loginEvents:1" });
    });

    assert.equal(tables.loginEvents[0]?.emailRetryCount, 1);
    assert.equal(tables.loginEvents[0]?.emailDeliveryStatus, "pending");
    assert.match(tables.loginEvents[0]?.emailLastError || "", /\[redacted-email\]/);
    assert.doesNotMatch(tables.loginEvents[0]?.emailLastError || "", /secret-token/);
    assert.equal(tables.emailDeliveryAttempts[0]?.status, "failed");
    assert.equal(tables.emailDeliveryAttempts[0]?.httpStatus, 502);
  });
});

test("processPendingLoginAlerts only processes pending rows below the retry cap", async () => {
  await withMockedEnv({
    SENDGRID_API_KEY: "SG.test-key",
    SENDGRID_FROM_EMAIL: "noreply@example.com",
    LOGIN_ALERT_TO_EMAIL: "alerts@example.com",
  }, async () => {
    const now = Date.now();
    const { ctx, tables } = createMockConvexCtx({
      identity: null,
      tables: {
        users: [{
          _id: "users:1",
          userId: "student_1",
          username: "Student One",
          email: "student1@example.com",
          role: "student",
          accountStatus: "approved",
          createdAt: now,
        }],
        loginEvents: [
          {
            _id: "loginEvents:1",
            userId: "student_1",
            sessionId: "sess_1",
            provider: "google",
            username: "Student One",
            email: "student1@example.com",
            eventType: "sign_in",
            occurredAt: now,
            emailDeliveryStatus: "pending",
            emailRetryCount: 0,
            createdAt: now,
          },
          {
            _id: "loginEvents:2",
            userId: "student_1",
            sessionId: "sess_2",
            provider: "google",
            username: "Student One",
            email: "student1@example.com",
            eventType: "sign_in",
            occurredAt: now - 1,
            emailDeliveryStatus: "pending",
            emailRetryCount: 2,
            createdAt: now - 1,
          },
          {
            _id: "loginEvents:3",
            userId: "student_1",
            sessionId: "sess_3",
            provider: "google",
            username: "Student One",
            email: "student1@example.com",
            eventType: "sign_in",
            occurredAt: now - 2,
            emailDeliveryStatus: "pending",
            emailRetryCount: 3,
            createdAt: now - 2,
          },
          {
            _id: "loginEvents:4",
            userId: "student_1",
            sessionId: "sess_4",
            provider: "google",
            username: "Student One",
            email: "student1@example.com",
            eventType: "sign_in",
            occurredAt: now - 3,
            emailDeliveryStatus: "failed",
            emailRetryCount: 1,
            createdAt: now - 3,
          },
        ],
        emailDeliveryAttempts: [],
      },
    });

    await withMockedFetch((async () => ({
      ok: true,
      status: 202,
      headers: new Headers({ "x-message-id": "sg-batch-123" }),
      text: async () => "",
    }) as Response) as typeof fetch, async () => {
      const result = await processPendingLoginAlertsHandler(ctx, {});
      assert.equal(result.processed, 2);
    });

    assert.equal(tables.emailDeliveryAttempts.length, 2);
    assert.equal(tables.loginEvents[0]?.emailDeliveryStatus, "sent");
    assert.equal(tables.loginEvents[1]?.emailDeliveryStatus, "sent");
    assert.equal(tables.loginEvents[2]?.emailDeliveryStatus, "pending");
    assert.equal(tables.loginEvents[3]?.emailDeliveryStatus, "failed");
  });
});