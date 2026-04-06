/**
 * logShipper.js — Ships buffered log entries to Convex
 *
 * Receives batches from logBuffer and sends them to the Convex logs table
 * via the ingestLogBatch mutation. Uses fire-and-forget pattern so logging
 * never blocks UI. Falls back silently on transport failure.
 */
import { callMutation } from '../../convex-client.js';
import { api } from '../../../convex/_generated/api.js';

let shipState = {
  lastSuccessAt: null,
  lastFailureAt: null,
  lastError: null,
};

export function getLogShippingState() {
  return { ...shipState };
}

/**
 * Ship a batch of log entries to the Convex backend.
 * @param {Array} entries — Array of log entry objects from logBuffer
 */
export function shipLogs(entries) {
  if (!entries || entries.length === 0) return;

  // Fire-and-forget — don't await, don't block UI
  callMutation(api.logs.ingestLogBatch, { entries })
    .then(() => {
      shipState = {
        lastSuccessAt: Date.now(),
        lastFailureAt: shipState.lastFailureAt,
        lastError: null,
      };
    })
    .catch((error) => {
      shipState = {
        lastSuccessAt: shipState.lastSuccessAt,
        lastFailureAt: Date.now(),
        lastError: error?.message || 'Unknown transport error',
      };
    });
}
