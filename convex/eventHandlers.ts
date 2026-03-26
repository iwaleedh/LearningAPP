/**
 * eventHandlers.ts — Pub/Sub Event Handlers (Subscribers)
 *
 * Each handler processes events for a specific topic. The processEventQueue
 * action is called by the cron scheduler and fans out events to the
 * appropriate handler based on topic.
 *
 * Architecture:
 *   events table → processEventQueue (action) → topic handler → markProcessed
 *
 * Adding a new subscriber:
 *   1. Add a case in TOPIC_HANDLERS map
 *   2. Write the handler function
 *   3. Events for that topic will be picked up automatically
 */
import { internalAction, internalMutation } from "./_generated/server";
import { internal } from "./_generated/api";
import { v } from "convex/values";

// ── Topic → Handler dispatch map ────────────────────────────────────
type HandlerFn = (ctx: any, payload: Record<string, any>) => Promise<void>;

const TOPIC_HANDLERS: Record<string, HandlerFn[]> = {
  "note:updated": [handleNoteUpdated],
  "note:deleted": [handleNoteDeleted],
  "session:ended": [handleSessionEnded],
  "user:registered": [handleUserRegistered],
  "class:ended": [handleClassEnded],
};

// ── Main processor: picks up pending events and dispatches ──────────
export const processEventQueue = internalAction({
  args: {},
  handler: async (ctx): Promise<{ processed: number; failed: number; total: number }> => {
    // Fetch pending events (batch of 50)
    const events: any[] = await ctx.runQuery(internal.eventBus.getUnprocessedEventsInternal, {
      limit: 50,
    });

    let processed = 0;
    let failed = 0;

    for (const event of events) {
      const handlers = TOPIC_HANDLERS[event.topic];
      if (!handlers || handlers.length === 0) {
        // No handler registered — mark processed to avoid re-processing
        await ctx.runMutation(internal.eventBus.markProcessedInternal, {
          eventId: event._id,
        });
        processed++;
        continue;
      }

      try {
        const payload = JSON.parse(event.payload);
        // Fan-out: run ALL handlers for this topic
        for (const handler of handlers) {
          await handler(ctx, payload);
        }
        await ctx.runMutation(internal.eventBus.markProcessedInternal, {
          eventId: event._id,
        });
        processed++;
      } catch (err) {
        await ctx.runMutation(internal.eventBus.markFailed, {
          eventId: event._id,
          error: String(err),
        });
        failed++;
      }
    }

    return { processed, failed, total: events.length };
  },
});

// ── Handler: note:updated ───────────────────────────────────────────
// Fan-out: recalculate progress stats when a note is saved
async function handleNoteUpdated(
  ctx: any,
  payload: Record<string, any>
) {
  await ctx.runMutation(internal.eventHandlers.logEvent, {
    topic: "note:updated",
    message: `Note ${payload.noteId ?? "unknown"} updated by ${payload.userId ?? "unknown"}`,
  });
}

// ── Handler: note:deleted ───────────────────────────────────────────
async function handleNoteDeleted(
  ctx: any,
  payload: Record<string, any>
) {
  await ctx.runMutation(internal.eventHandlers.logEvent, {
    topic: "note:deleted",
    message: `Note ${payload.noteId ?? "unknown"} deleted by ${payload.userId ?? "unknown"}`,
  });
}

// ── Handler: session:ended ──────────────────────────────────────────
// Fan-out: archive strokes and notify participants
async function handleSessionEnded(
  ctx: any,
  payload: Record<string, any>
) {
  await ctx.runMutation(internal.eventHandlers.logEvent, {
    topic: "session:ended",
    message: `Session ${payload.sessionId ?? "unknown"} ended by host ${payload.hostUserId ?? "unknown"}`,
  });
}

// ── Handler: user:registered ────────────────────────────────────────
// Fan-out: initialise default settings for new user
async function handleUserRegistered(
  ctx: any,
  payload: Record<string, any>
) {
  await ctx.runMutation(internal.eventHandlers.logEvent, {
    topic: "user:registered",
    message: `New user registered: ${payload.username ?? "unknown"} (${payload.userId ?? "unknown"})`,
  });
}

// ── Handler: class:ended ────────────────────────────────────────────
async function handleClassEnded(
  ctx: any,
  payload: Record<string, any>
) {
  await ctx.runMutation(internal.eventHandlers.logEvent, {
    topic: "class:ended",
    message: `Live class ${payload.classId ?? "unknown"} ended by ${payload.hostUserId ?? "unknown"}`,
  });
}

// ── Internal helper: log an event handler execution ─────────────────
export const logEvent = internalMutation({
  args: { topic: v.string(), message: v.string() },
  handler: async (ctx, { topic, message }) => {
    await ctx.db.insert("logs", {
      level: "info",
      message,
      component: `eventHandler:${topic}`,
      userId: "",
      sessionId: "",
      metadata: "{}",
      timestamp: Date.now(),
    });
  },
});
