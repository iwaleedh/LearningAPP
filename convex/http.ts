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
      return new Response(
        JSON.stringify({ error: "Unauthorized webhook request." }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    // Validate content type
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return new Response(
        JSON.stringify({ error: "Content-Type must be application/json" }),
        { status: 415, headers: { "Content-Type": "application/json" } }
      );
    }

    let body: { topic?: string; payload?: unknown };
    try {
      body = await request.json();
    } catch {
      return new Response(
        JSON.stringify({ error: "Invalid JSON body" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Validate required fields
    if (!body.topic || typeof body.topic !== "string") {
      return new Response(
        JSON.stringify({ error: "Missing or invalid 'topic' field" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // S6 fix: Topic allowlist — only accept known external webhook topics.
    // Without this, any authenticated caller can publish to internal topics
    // (e.g. "session:ended", "payment:confirmed") and trigger unintended handlers.
    const ALLOWED_WEBHOOK_TOPICS = new Set([
      "external:notification",
      "external:status_update",
      "external:data_sync",
    ]);

    if (!ALLOWED_WEBHOOK_TOPICS.has(body.topic)) {
      return new Response(
        JSON.stringify({ error: "Unknown or disallowed topic." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Publish to the event bus
    await ctx.runMutation(internal.eventBus.internalPublish, {
      topic: body.topic,
      payload: JSON.stringify(body.payload ?? {}),
    });

    return new Response(
      JSON.stringify({ ok: true, topic: body.topic }),
      { status: 202, headers: { "Content-Type": "application/json" } }
    );
  }),
});

export default http;
