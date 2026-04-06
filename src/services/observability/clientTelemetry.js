import { api, callMutation, getClient, getCurrentIdentityMode } from '../../convex-client.js';
import { logger } from '../logger/logger.js';

const log = logger.child({ component: 'clientTelemetry' });
const DEDUPE_WINDOW_MS = 1500;
const recentEvents = new Map();

function buildFingerprint(eventType, payload) {
  return JSON.stringify([
    eventType,
    payload.route || '',
    payload.noteId || '',
    payload.subject || '',
  ]);
}

function shouldTrack() {
  const identityMode = getCurrentIdentityMode();
  return (identityMode === 'authenticated' || identityMode === 'debug') && !!getClient();
}

function normalizeMetadata(payload) {
  const metadata = { ...payload };
  delete metadata.route;
  delete metadata.noteId;
  delete metadata.subject;

  if (!Object.keys(metadata).length) return undefined;

  try {
    return JSON.stringify(metadata);
  } catch {
    return undefined;
  }
}

export async function trackClientEvent(eventType, payload = {}) {
  if (!shouldTrack()) return false;

  const route = typeof payload.route === 'string'
    ? payload.route
    : (typeof window !== 'undefined' ? window.location.pathname : '/');
  const fingerprint = buildFingerprint(eventType, { ...payload, route });
  const now = Date.now();
  const previousTimestamp = recentEvents.get(fingerprint);
  if (previousTimestamp && now - previousTimestamp < DEDUPE_WINDOW_MS) {
    return false;
  }
  recentEvents.set(fingerprint, now);

  try {
    await callMutation(api.observability.recordClientEvent, {
      eventType,
      route,
      noteId: typeof payload.noteId === 'string' ? payload.noteId : undefined,
      subject: typeof payload.subject === 'string' ? payload.subject : undefined,
      metadataJson: normalizeMetadata({ ...payload, route }),
    });
    return true;
  } catch (error) {
    log.debug('Client telemetry dropped', {
      eventType,
      reason: error?.message || 'unknown',
    });
    return false;
  }
}

export function trackRouteView(route) {
  void trackClientEvent('route_view', { route });
}

export function trackNoteEvent(eventType, payload) {
  void trackClientEvent(eventType, payload);
}