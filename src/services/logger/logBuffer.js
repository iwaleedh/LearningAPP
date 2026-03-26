/**
 * logBuffer.js — Client-side Log Buffer
 *
 * Accumulates log entries locally and flushes them in batches.
 * Flushes on:
 *   1. Timer interval (every FLUSH_INTERVAL_MS)
 *   2. Buffer reaching MAX_BATCH_SIZE
 *   3. Page visibility change (hidden)
 *   4. Explicit flush() call (e.g. from page unload handler)
 */
import { shipLogs } from './logShipper.js';

const FLUSH_INTERVAL_MS = 10_000;   // 10 seconds
const MAX_BATCH_SIZE = 50;

let buffer = [];
let flushTimer = null;

/** Add a log entry to the buffer. Auto-flushes when batch limit is reached. */
export function addToBuffer(entry) {
  buffer.push(entry);
  if (buffer.length >= MAX_BATCH_SIZE) {
    flush();
  }
}

/** Flush the current buffer, sending all entries to the log shipper. */
export function flush() {
  if (buffer.length === 0) return;
  const batch = buffer;
  buffer = [];
  shipLogs(batch);
}

/** Get current buffer size (for monitoring/testing). */
export function getBufferSize() {
  return buffer.length;
}

/** Start the periodic flush timer. Call once at app init. */
export function startBufferFlush() {
  if (flushTimer) return;
  flushTimer = setInterval(flush, FLUSH_INTERVAL_MS);

  // Flush when user navigates away or tab becomes hidden
  if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        flush();
      }
    });
  }
}

/** Stop the periodic flush timer. */
export function stopBufferFlush() {
  if (flushTimer) {
    clearInterval(flushTimer);
    flushTimer = null;
  }
}
