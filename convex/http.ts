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
