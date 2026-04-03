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
const MAX_BUFFER_SIZE = 500; // M5: hard cap — drop oldest entries if shipLogs() stalls

let buffer = [];
let flushTimer = null;
let droppedCount = 0;           // M5: cumulative entries silently dropped due to overflow
let visibilityHandler = null;    // M5: stored so stopBufferFlush() can remove it

/** Add a log entry to the buffer. Auto-flushes when batch limit is reached. */
export function addToBuffer(entry) {
  buffer.push(entry);
  // M5: if buffer exceeds hard cap (e.g. shipping keeps failing), drop oldest entries
  if (buffer.length > MAX_BUFFER_SIZE) {
    const excess = buffer.length - MAX_BUFFER_SIZE;
    buffer = buffer.slice(excess);
    droppedCount += excess;
    console.warn(
      `[logBuffer] Buffer overflow — dropped ${excess} oldest entr${excess === 1 ? 'y' : 'ies'}. ` +
      `Total dropped this session: ${droppedCount}. ` +
      `Possible cause: log shipper is stalled.`
    );
  }
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

/** M5: Total entries dropped due to buffer overflow since module load. */
export function getDroppedCount() {
  return droppedCount;
}

/** M5: Reset dropped counter — for tests only, do not call in production. */
export function __resetDroppedCount() {
  droppedCount = 0;
}

/** Start the periodic flush timer. Call once at app init. */
export function startBufferFlush() {
  if (flushTimer) return;
  flushTimer = setInterval(flush, FLUSH_INTERVAL_MS);

  // Flush when user navigates away or tab becomes hidden.
  // M5: store handler ref so stopBufferFlush() can remove it.
  if (typeof document !== 'undefined') {
    visibilityHandler = () => {
      if (document.visibilityState === 'hidden') flush();
    };
    document.addEventListener('visibilitychange', visibilityHandler);
  }
}

/** Stop the periodic flush timer and remove the visibility listener. */
export function stopBufferFlush() {
  if (flushTimer) {
    clearInterval(flushTimer);
    flushTimer = null;
  }
  // M5: remove the stored visibility listener
  if (visibilityHandler && typeof document !== 'undefined') {
    document.removeEventListener('visibilitychange', visibilityHandler);
    visibilityHandler = null;
  }
}
