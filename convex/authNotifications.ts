import { internalAction, internalMutation, internalQuery } from "./_generated/server";
import { internal } from "./_generated/api";
import { v } from "convex/values";

const anyInternal = internal as any;

const MAX_EMAIL_RETRIES = 3;

function getProcessEnv() {
  return (globalThis as typeof globalThis & {
    process?: { env?: Record<string, string | undefined> };
  }).process?.env;
}

function getAuthNotificationConfig() {
  const processEnv = getProcessEnv();
  return {
    sendgridApiKey: processEnv?.SENDGRID_API_KEY,
    sendgridFromEmail: processEnv?.SENDGRID_FROM_EMAIL,
    loginAlertToEmail: processEnv?.LOGIN_ALERT_TO_EMAIL || "iwaleedh@gmail.com",
  };
}

function maskEmailAddress(value: string | undefined) {
  const normalized = String(value || "").trim().toLowerCase();
  if (!normalized.includes("@")) {
    return undefined;
  }
  const [localPart, domain] = normalized.split("@");
  const localPreview = localPart.length <= 2
    ? `${localPart.charAt(0) || "*"}*`
    : `${localPart.slice(0, 2)}***`;
  return `${localPreview}@${domain}`.slice(0, 160);
}

function sanitizeDeliveryError(value: string | undefined) {
  const normalized = String(value || "")
    .replace(/Bearer\s+[A-Za-z0-9\-_.]+/gi, "Bearer [redacted]")
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, "[redacted-email]")
    .replace(/[\r\n\t]+/g, " ")
    .trim();
  return normalized.slice(0, 500);
}

export const getLoginEventPayload = internalQuery({
  args: { loginEventId: v.id("loginEvents") },
  handler: async (ctx, { loginEventId }) => {
    const loginEvent = await ctx.db.get(loginEventId);
    if (!loginEvent) {
      return null;
    }
    const user = await ctx.db
      .query("users")
      .withIndex("by_userId", (q) => q.eq("userId", loginEvent.userId))
      .first();

    return {
      loginEvent,
      user,
    };
  },
});

export const listPendingLoginAlerts = internalQuery({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, { limit }) => {
    const maxResults = Math.min(Math.max(limit || 20, 1), 50);
    const pending = await ctx.db
      .query("loginEvents")
      .withIndex("by_emailDeliveryStatus", (q) => q.eq("emailDeliveryStatus", "pending"))
      .order("desc")
      .take(maxResults);

    return pending.filter((event) => (event.emailRetryCount ?? 0) < MAX_EMAIL_RETRIES);
  },
});

export const markLoginAlertSent = internalMutation({
  args: { loginEventId: v.id("loginEvents") },
  handler: async (ctx, { loginEventId }) => {
    await ctx.db.patch(loginEventId, {
      emailDeliveryStatus: "sent",
      emailLastAttemptAt: Date.now(),
      emailLastError: undefined,
    });
  },
});

export const markLoginAlertAttempt = internalMutation({
  args: {
    loginEventId: v.id("loginEvents"),
    error: v.string(),
  },
  handler: async (ctx, { loginEventId, error }) => {
    const row = await ctx.db.get(loginEventId);
    if (!row) return;

    const nextRetryCount = (row.emailRetryCount ?? 0) + 1;
    await ctx.db.patch(loginEventId, {
      emailRetryCount: nextRetryCount,
      emailDeliveryStatus: nextRetryCount >= MAX_EMAIL_RETRIES ? "failed" : "pending",
      emailLastAttemptAt: Date.now(),
      emailLastError: error.slice(0, 500),
    });
  },
});

const getLoginEventPayloadHandler = (getLoginEventPayload as any)._handler as (ctx: any, args: any) => Promise<any>;
const listPendingLoginAlertsHandler = (listPendingLoginAlerts as any)._handler as (ctx: any, args: any) => Promise<any>;
const markLoginAlertSentHandler = (markLoginAlertSent as any)._handler as (ctx: any, args: any) => Promise<any>;
const markLoginAlertAttemptHandler = (markLoginAlertAttempt as any)._handler as (ctx: any, args: any) => Promise<any>;

async function runInternalQuery(ctx: any, reference: unknown, fallbackHandler: (ctx: any, args: any) => Promise<any>, args: any) {
  if (typeof ctx.runQuery === "function") {
    return await ctx.runQuery(reference, args);
  }
  return await fallbackHandler(ctx, args);
}

async function runInternalMutation(ctx: any, reference: unknown, fallbackHandler: (ctx: any, args: any) => Promise<any>, args: any) {
  if (typeof ctx.runMutation === "function") {
    return await ctx.runMutation(reference, args);
  }
  return await fallbackHandler(ctx, args);
}

async function runObservabilityMutation(ctx: any, methodName: "recordEmailDeliveryAttemptStart" | "finalizeEmailDeliveryAttempt", args: any) {
  if (typeof ctx.runMutation === "function") {
    return await ctx.runMutation((anyInternal.observability as any)[methodName], args);
  }

  const observabilityModule = await import("./observability");
  const mutation = (observabilityModule as any)[methodName];
  return await mutation._handler(ctx, args);
}

function buildEmailBody({ loginEvent, user }: any) {
  const dueDate = typeof loginEvent.accessExpiresAt === "number"
    ? new Date(loginEvent.accessExpiresAt).toISOString()
    : "not selected yet";
  const duration = loginEvent.accessDurationMonths === 12 ? "1 year" : loginEvent.accessDurationMonths === 1 ? "1 month" : "not selected yet";
  const userLabel = user?.username || loginEvent.username || loginEvent.userId;

  return {
    subject: `Living Textbook login: ${userLabel}`,
    text: [
      `User: ${userLabel}`,
      `User ID: ${loginEvent.userId}`,
      `Email: ${loginEvent.email || user?.email || "unknown"}`,
      `Provider: ${loginEvent.provider}`,
      `Session: ${loginEvent.sessionId || "unknown"}`,
      `Event: ${loginEvent.eventType}`,
      `Occurred at (UTC): ${new Date(loginEvent.occurredAt).toISOString()}`,
      `Duration: ${duration}`,
      `Due date (UTC): ${dueDate}`,
      `User-Agent: ${loginEvent.userAgent || "unknown"}`,
    ].join("\n"),
  };
}

async function sendLoginAlertImpl(ctx: any, loginEventId: string) {
  const config = getAuthNotificationConfig();
  const payload = await runInternalQuery(ctx, anyInternal.authNotifications.getLoginEventPayload, getLoginEventPayloadHandler, { loginEventId });
  if (!payload?.loginEvent) {
    return;
  }
  const { loginEvent, user } = payload;
  if (loginEvent.emailDeliveryStatus === "sent") {
    return;
  }
  if ((loginEvent.emailRetryCount ?? 0) >= MAX_EMAIL_RETRIES) {
    return;
  }

  const startedAt = Date.now();
  const traceId = `email_${String(loginEventId).replace(/[^a-zA-Z0-9]+/g, "_")}_${startedAt}`.slice(0, 120);
  const attemptNumber = (loginEvent.emailRetryCount ?? 0) + 1;
  const recipientMasked = maskEmailAddress(config.loginAlertToEmail);
  const attemptId = await runObservabilityMutation(ctx, "recordEmailDeliveryAttemptStart", {
    loginEventId,
    userId: loginEvent.userId,
    provider: "sendgrid",
    traceId,
    attemptNumber,
    recipientMasked,
  });

  if (!config.sendgridApiKey || !config.sendgridFromEmail) {
    const errorMessage = "SendGrid environment variables are not configured.";
    await runInternalMutation(ctx, anyInternal.authNotifications.markLoginAlertAttempt, markLoginAlertAttemptHandler, {
      loginEventId,
      error: errorMessage,
    });
    await runObservabilityMutation(ctx, "finalizeEmailDeliveryAttempt", {
      attemptId,
      status: "failed",
      errorMessage,
      durationMs: Date.now() - startedAt,
    });
    return;
  }

  const email = buildEmailBody({ loginEvent, user });
  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.sendgridApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: config.loginAlertToEmail }] }],
      from: { email: config.sendgridFromEmail },
      subject: email.subject,
      content: [{ type: "text/plain", value: email.text }],
    }),
  });

  if (!response.ok) {
    const responseText = await response.text();
    const errorMessage = sanitizeDeliveryError(`SendGrid request failed: ${response.status} ${responseText}`);
    await runInternalMutation(ctx, anyInternal.authNotifications.markLoginAlertAttempt, markLoginAlertAttemptHandler, {
      loginEventId,
      error: errorMessage,
    });
    await runObservabilityMutation(ctx, "finalizeEmailDeliveryAttempt", {
      attemptId,
      status: "failed",
      httpStatus: response.status,
      errorMessage,
      durationMs: Date.now() - startedAt,
    });
    return;
  }

  await runInternalMutation(ctx, anyInternal.authNotifications.markLoginAlertSent, markLoginAlertSentHandler, { loginEventId });
  await runObservabilityMutation(ctx, "finalizeEmailDeliveryAttempt", {
    attemptId,
    status: "sent",
    httpStatus: response.status,
    messageId: response.headers.get("x-message-id") || response.headers.get("x-message-id".toUpperCase()) || undefined,
    durationMs: Date.now() - startedAt,
  });
}

export const sendLoginAlert = internalAction({
  args: { loginEventId: v.id("loginEvents") },
  handler: async (ctx, { loginEventId }) => {
    await sendLoginAlertImpl(ctx, loginEventId);
  },
});

export const processPendingLoginAlerts = internalAction({
  args: {},
  handler: async (ctx) => {
    const pending = await runInternalQuery(ctx, anyInternal.authNotifications.listPendingLoginAlerts, listPendingLoginAlertsHandler, { limit: 20 });
    for (const event of pending) {
      await sendLoginAlertImpl(ctx, event._id);
    }
    return { processed: pending.length };
  },
});