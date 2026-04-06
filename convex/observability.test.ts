import test from "node:test";
import assert from "node:assert/strict";

import {
  finalizeEmailDeliveryAttempt,
  getReleaseHealthSummary,
  recordEmailDeliveryAttemptStart,
} from "./observability";
import { createMockConvexCtx } from "./testUtils";

const getReleaseHealthSummaryHandler = (getReleaseHealthSummary as any)._handler as (ctx: any, args: any) => Promise<any>;
const recordEmailDeliveryAttemptStartHandler = (recordEmailDeliveryAttemptStart as any)._handler as (ctx: any, args: any) => Promise<any>;
const finalizeEmailDeliveryAttemptHandler = (finalizeEmailDeliveryAttempt as any)._handler as (ctx: any, args: any) => Promise<any>;

test("getReleaseHealthSummary surfaces email and cron alerts", async () => {
  const now = Date.now();
  const { ctx } = createMockConvexCtx({
    identity: {
      subject: "admin_user",
      email: "iwaleedh@gmail.com",
    },
    tables: {
      users: [{
        _id: "users:admin",
        userId: "admin_user",
        username: "admin",
        email: "iwaleedh@gmail.com",
        role: "admin",
        createdAt: now,
      }],
      clientTelemetry: [{
        _id: "clientTelemetry:1",
        ownerUserId: "student_1",
        eventType: "route_view",
        route: "/notes",
        createdAt: now,
      }],
      logs: [{
        _id: "logs:1",
        level: "error",
        message: "Something failed",
        component: "tests",
        userId: "student_1",
        sessionId: "sess_1",
        metadata: "{}",
        timestamp: now,
      }],
      events: [{
        _id: "events:1",
        topic: "note:updated",
        payload: "{}",
        status: "pending",
        publishedAt: now,
        processedAt: now,
      }],
      loginEvents: [{
        _id: "loginEvents:1",
        userId: "student_1",
        provider: "clerk",
        username: "Student",
        eventType: "sign_in",
        occurredAt: now,
        emailDeliveryStatus: "pending",
        emailRetryCount: 1,
        createdAt: now,
      }],
      emailDeliveryAttempts: [{
        _id: "emailDeliveryAttempts:1",
        loginEventId: "loginEvents:1",
        userId: "student_1",
        provider: "sendgrid",
        traceId: "email_trace_1",
        status: "failed",
        attemptNumber: 1,
        recipientMasked: "iw***@example.com",
        errorMessage: "delivery failed",
        startedAt: now,
        completedAt: now,
        createdAt: now,
      }],
      cronRuns: [{
        _id: "cronRuns:1",
        jobName: "process pending login alert emails",
        traceId: "cron_trace_1",
        status: "failed",
        startedAt: now,
        completedAt: now,
        durationMs: 100,
        errorMessage: "cron failed",
        createdAt: now,
      }],
    },
  });

  const summary = await getReleaseHealthSummaryHandler(ctx, {});

  assert.equal(summary.emailFailures24h, 1);
  assert.equal(summary.pendingLoginAlerts, 1);
  assert.equal(summary.cronFailures24h, 1);
  assert.equal(summary.status, "degraded");
  assert.equal(summary.alerts.some((alert: any) => alert.code === "email_delivery_failures"), true);
  assert.equal(summary.alerts.some((alert: any) => alert.code === "cron_failures"), true);
});

test("email delivery attempts sanitize stored failure messages", async () => {
  const now = Date.now();
  const { ctx, tables } = createMockConvexCtx({
    identity: null,
    tables: {
      emailDeliveryAttempts: [],
      loginEvents: [{
        _id: "loginEvents:1",
        userId: "student_1",
        provider: "clerk",
        username: "Student",
        eventType: "sign_in",
        occurredAt: now,
        createdAt: now,
      }],
    },
  });

  const attemptId = await recordEmailDeliveryAttemptStartHandler(ctx, {
    loginEventId: "loginEvents:1",
    userId: "student_1",
    provider: "sendgrid",
    traceId: "trace_1",
    attemptNumber: 1,
    recipientMasked: "iw***@example.com",
  });

  await finalizeEmailDeliveryAttemptHandler(ctx, {
    attemptId,
    status: "failed",
    errorMessage: "SendGrid request failed for admin@example.com with Bearer secret-token",
  });

  assert.equal(tables.emailDeliveryAttempts[0]?.status, "failed");
  assert.match(tables.emailDeliveryAttempts[0]?.errorMessage || "", /\[redacted-email\]/);
  assert.doesNotMatch(tables.emailDeliveryAttempts[0]?.errorMessage || "", /secret-token/);
});