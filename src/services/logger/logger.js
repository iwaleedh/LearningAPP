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

/**
 * S14 fix: Field names that should never appear in shipped log metadata.
 * If any of these keys are present in the data object, their values are
 * replaced with "[REDACTED]" before serialisation.
 *
 * This prevents passwords, tokens, or PII from being shipped to the
 * Convex logs table if a caller accidentally passes a raw error/response
 * object that contains sensitive fields.
 */
const SENSITIVE_FIELDS = new Set([
  'password', 'passwd', 'secret', 'token', 'accessToken', 'access_token',
  'refreshToken', 'refresh_token', 'apiKey', 'api_key', 'authorization',
  'cookie', 'sessionToken', 'session_token', 'privateKey', 'private_key',
  'creditCard', 'credit_card', 'cvv', 'ssn', 'passphrase',
]);

/**
 * Recursively redact sensitive fields from an object before it reaches the log buffer.
 * Only processes plain objects — functions, Dates, and class instances are left as-is
 * (they will stringify to "{}" which is safe).
 */
function redactSensitiveFields(obj, depth = 0) {
  // Guard: limit recursion depth to prevent DoS on deeply nested objects
  if (depth > 5 || obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
    return obj;
  }
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (SENSITIVE_FIELDS.has(key) || SENSITIVE_FIELDS.has(key.toLowerCase())) {
      result[key] = '[REDACTED]';
    } else if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      result[key] = redactSensitiveFields(value, depth + 1);
    } else {
      result[key] = value;
    }
  }
  return result;
}

function createEntry(level, message, data, component) {
  // S14: Redact sensitive fields before serialising to the log buffer/backend
  const safeData = data && typeof data === 'object' ? redactSensitiveFields(data) : data;

  return {
    level,
    message: String(message),
    component: component || safeData?.component || '',
    userId: globalContext.userId || '',
    sessionId: globalContext.sessionId || '',
    metadata: JSON.stringify({ ...safeData, component: undefined }),
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
