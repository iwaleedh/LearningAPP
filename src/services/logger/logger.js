/**
 * logger.js — Structured Logger
 *
 * Provides levelled, structured logging with automatic context enrichment.
 * Logs are buffered locally and shipped in batches to the Convex logs table
 * via logShipper.js.
 *
 * Architecture:
 *   Source → logger.info/warn/error → logBuffer (batched) → logShipper → Convex logs table
 *
 * Usage:
 *   import { logger } from './logger.js';
 *   const log = logger.child({ component: 'noteStore' });
 *   log.info('Note saved', { noteId: '...' });
 *   log.error('Save failed', { error: err.message });
 */
import { addToBuffer } from './logBuffer.js';

const LEVELS = { debug: 0, info: 1, warn: 2, error: 3 };

let globalContext = {};

/** Set persistent context fields (userId, sessionId) attached to every log. */
export function setLogContext(ctx) {
  globalContext = { ...globalContext, ...ctx };
}

/** Get current global log context. */
export function getLogContext() {
  return { ...globalContext };
}

function createEntry(level, message, data, component) {
  return {
    level,
    message: String(message),
    component: component || data?.component || '',
    userId: globalContext.userId || '',
    sessionId: globalContext.sessionId || '',
    metadata: JSON.stringify({ ...data, component: undefined }),
    timestamp: Date.now(),
  };
}

function makeLogger(defaultComponent) {
  const log = (level, message, data) => {
    const entry = createEntry(level, message, data, defaultComponent);

    // Always output to console for local dev visibility
    const consoleFn = level === 'error' ? console.error
      : level === 'warn' ? console.warn
      : level === 'debug' ? console.debug
      : console.log;
    consoleFn(`[${level.toUpperCase()}] [${entry.component || 'app'}]`, message, data || '');

    // Buffer for batch shipping to Convex
    addToBuffer(entry);
  };

  return {
    debug: (msg, data) => log('debug', msg, data),
    info: (msg, data) => log('info', msg, data),
    warn: (msg, data) => log('warn', msg, data),
    error: (msg, data) => log('error', msg, data),

    /** Create a child logger with a fixed component name. */
    child: ({ component }) => makeLogger(component),
  };
}

/** Root logger instance. Use logger.child({ component: 'xyz' }) for scoped logging. */
export const logger = makeLogger('');
