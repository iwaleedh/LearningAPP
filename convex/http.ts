/**
 * http.ts — HTTP Action Endpoints (Serverless API Layer)
 *
 * Exposes public REST endpoints for external integrations, health checks,
 * and webhooks. These run as Convex HTTP actions (not mutations/queries).
 *
 * Endpoints:
 *   GET  /api/health     — System health check (DB connectivity, event queue depth)
 *   POST /api/webhook     — Generic webhook receiver (validates + publishes to event bus)
 */
import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { internal } from "./_generated/api";
import { validateEventPayload } from "./eventSchemas";
import { WEBHOOK_EVENT_TOPICS } from "./eventTopics";

const http = httpRouter();
const processEnv = (globalThis as typeof globalThis & {
  process?: { env?: Record<string, string | undefined> };
}).process?.env;
const WEBHOOK_SECRET = processEnv?.WEBHOOK_SHARED_SECRET;

// ── GET /api/health ─────────────────────────────────────────────────
http.route({
  path: "/api/health",
  method: "GET",
  handler: httpAction(async (ctx) => {
    const now = Date.now();

    // Check DB connectivity by reading a small query
    let dbOk = false;
    let pendingEvents = 0;
    try {
      const events = await ctx.runQuery(internal.eventBus.getUnprocessedEventsInternal, {});
      pendingEvents = events.length;
      dbOk = true;
    } catch {
      dbOk = false;
    }

    const status = dbOk ? "healthy" : "degraded";

    return new Response(
      JSON.stringify({
        status,
        timestamp: new Date(now).toISOString(),
        checks: {
          database: dbOk ? "ok" : "error",
          eventQueue: { pending: pendingEvents },
        },
      }),
      {
        status: dbOk ? 200 : 503,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      }
    );
  }),
});

// ── POST /api/webhook ───────────────────────────────────────────────
http.route({
  path: "/api/webhook",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    if (!WEBHOOK_SECRET) {
      return new Response(
        JSON.stringify({ error: "Webhook integration is not configured." }),
        { status: 503, headers: { "Content-Type": "application/json" } }
      );
    }

    const authorization = request.headers.get("authorization") || "";
    const bearerSecret = authorization.startsWith("Bearer ")
      ? authorization.slice("Bearer ".length).trim()
      : "";
    const headerSecret = request.headers.get("x-webhook-secret")?.trim() || "";
    const providedSecret = bearerSecret || headerSecret;

    if (!providedSecret || providedSecret !== WEBHOOK_SECRET) {
      await ctx.runMutation(internal.eventBus.logSecurityEvent, {
        level: "warn",
        component: "http:webhook",
        message: "Rejected webhook request with invalid secret.",
        metadata: JSON.stringify({ reason: "invalid_secret" }),
      });
      return new Response(
        JSON.stringify({ error: "Unauthorized webhook request." }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    // Validate content type
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      await ctx.runMutation(internal.eventBus.logSecurityEvent, {
        level: "warn",
        component: "http:webhook",
        message: "Rejected webhook request with invalid content type.",
        metadata: JSON.stringify({ reason: "invalid_content_type", contentType }),
      });
      return new Response(
        JSON.stringify({ error: "Content-Type must be application/json" }),
        { status: 415, headers: { "Content-Type": "application/json" } }
      );
    }

    let body: { topic?: string; payload?: unknown };
    try {
      body = await request.json();
    } catch {
      await ctx.runMutation(internal.eventBus.logSecurityEvent, {
        level: "warn",
        component: "http:webhook",
        message: "Rejected webhook request with invalid JSON body.",
        metadata: JSON.stringify({ reason: "invalid_json" }),
      });
      return new Response(
        JSON.stringify({ error: "Invalid JSON body" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Validate required fields
    if (!body.topic || typeof body.topic !== "string") {
      await ctx.runMutation(internal.eventBus.logSecurityEvent, {
        level: "warn",
        component: "http:webhook",
        message: "Rejected webhook request with missing topic.",
        metadata: JSON.stringify({ reason: "missing_topic" }),
      });
      return new Response(
        JSON.stringify({ error: "Missing or invalid 'topic' field" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!WEBHOOK_EVENT_TOPICS.has(body.topic)) {
      await ctx.runMutation(internal.eventBus.logSecurityEvent, {
        level: "warn",
        component: "http:webhook",
        message: "Rejected webhook request with disallowed topic.",
        metadata: JSON.stringify({ reason: "disallowed_topic", topic: body.topic }),
      });
      return new Response(
        JSON.stringify({ error: "Unknown or disallowed topic." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // S10 fix: Limit payload size to prevent abuse via oversized webhook bodies.
    const payloadStr = JSON.stringify(body.payload ?? {});
    if (payloadStr.length > 8192) {
      await ctx.runMutation(internal.eventBus.logSecurityEvent, {
        level: "warn",
        component: "http:webhook",
        message: "Rejected webhook request with oversized payload.",
        metadata: JSON.stringify({ reason: "payload_too_large", topic: body.topic, payloadBytes: payloadStr.length }),
      });
      return new Response(
        JSON.stringify({ error: "Payload too large (max 8 KB)." }),
        { status: 413, headers: { "Content-Type": "application/json" } }
      );
    }

    let validatedPayload;
    try {
      validatedPayload = validateEventPayload(body.topic, body.payload ?? {});
    } catch (error) {
      await ctx.runMutation(internal.eventBus.logSecurityEvent, {
        level: "warn",
        component: "http:webhook",
        message: "Rejected webhook request with invalid payload schema.",
        metadata: JSON.stringify({
          reason: "invalid_payload",
          topic: body.topic,
          error: String(error),
        }),
      });
      return new Response(
        JSON.stringify({ error: String(error) }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Publish to the event bus
    await ctx.runMutation(internal.eventBus.internalPublish, {
      topic: body.topic,
      payload: JSON.stringify(validatedPayload),
    });

    return new Response(
      JSON.stringify({ ok: true, topic: body.topic }),
      { status: 202, headers: { "Content-Type": "application/json" } }
    );
  }),
});

export default http;
