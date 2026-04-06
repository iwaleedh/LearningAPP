/**
 * healthMonitor.js — Client-side Health Monitor
 *
 * Periodically polls the Convex connection state and the /api/health HTTP
 * endpoint. Surfaces connection quality to the UI (e.g. Header badge) and
 * logs transitions for diagnostics.
 *
 * Usage:
 *   import { healthMonitor } from './healthMonitor.js';
 *   healthMonitor.start();
 *   healthMonitor.subscribe(state => console.log(state));
 *   healthMonitor.stop();
 */
import { getClient, getConnectionHealth } from '../../convex-client.js';
import { logger } from '../logger/logger.js';
import { getDroppedCount } from '../logger/logBuffer.js';
import { getLogShippingState } from '../logger/logShipper.js';

const log = logger.child({ component: 'healthMonitor' });

const POLL_INTERVAL_MS = 30_000; // 30 seconds
const MAX_PENDING_EVENTS = 0;

/** Hard cap on simultaneous subscribers — fires a warn log if exceeded to surface leaks. */
const MAX_LISTENERS = 20;

/** @type {'healthy'|'degraded'|'disconnected'} */
let currentStatus = 'healthy';
let pollTimer = null;
let listeners = [];
let lastSnapshot = {
  status: currentStatus,
  convexConnected: !!getClient(),
  endpointHealthy: null,
  pendingEvents: null,
  logDrops: 0,
  lastLogShipSuccessAt: null,
  lastLogShipFailureAt: null,
  endpointError: null,
  timestamp: Date.now(),
};

function notify() {
  const snapshot = getSnapshot();
  listeners.forEach((fn) => fn(snapshot));
}

function isLogShippingDegraded(shipping) {
  if (!shipping) return false;
  if (getDroppedCount() > 0) return true;
  if (!shipping.lastFailureAt) return false;
  if (!shipping.lastSuccessAt) return true;
  return shipping.lastFailureAt > shipping.lastSuccessAt;
}

function computeStatus({ client, connection, endpointHealth, shipping }) {
  if (!client) return 'disconnected';
  if (connection.hasErrored) return 'degraded';
  if (endpointHealth.endpointHealthy === false) return 'degraded';
  if ((endpointHealth.pendingEvents ?? 0) > MAX_PENDING_EVENTS) return 'degraded';
  if (isLogShippingDegraded(shipping)) return 'degraded';
  return 'healthy';
}

function hasSnapshotChanged(previousSnapshot, nextSnapshot) {
  return previousSnapshot.status !== nextSnapshot.status
    || previousSnapshot.convexConnected !== nextSnapshot.convexConnected
    || previousSnapshot.endpointHealthy !== nextSnapshot.endpointHealthy
    || previousSnapshot.pendingEvents !== nextSnapshot.pendingEvents
    || previousSnapshot.logDrops !== nextSnapshot.logDrops
    || previousSnapshot.lastLogShipSuccessAt !== nextSnapshot.lastLogShipSuccessAt
    || previousSnapshot.lastLogShipFailureAt !== nextSnapshot.lastLogShipFailureAt
    || previousSnapshot.endpointError !== nextSnapshot.endpointError;
}

function getSnapshot() {
  return {
    ...lastSnapshot,
    status: currentStatus,
    convexConnected: !!getClient(),
    timestamp: Date.now(),
  };
}

function updateSnapshot(nextSnapshot) {
  lastSnapshot = nextSnapshot;
}

async function fetchEndpointHealth(connectionUrl) {
  if (!connectionUrl || typeof window === 'undefined' || typeof fetch !== 'function') {
    return { endpointHealthy: null, pendingEvents: null, endpointError: null };
  }

  try {
    const response = await fetch(new URL('/api/health', connectionUrl), {
      headers: { accept: 'application/json' },
    });
    if (!response.ok) {
      return {
        endpointHealthy: false,
        pendingEvents: null,
        endpointError: `Health endpoint returned ${response.status}`,
      };
    }

    const payload = await response.json();
    return {
      endpointHealthy: payload?.ok !== false,
      pendingEvents: Number.isFinite(payload?.pendingEvents) ? payload.pendingEvents : null,
      endpointError: null,
    };
  } catch (error) {
    return {
      endpointHealthy: false,
      pendingEvents: null,
      endpointError: error?.message || 'Health endpoint unavailable',
    };
  }
}

async function poll() {
  const previousStatus = currentStatus;
  const previousSnapshot = lastSnapshot;
  const client = getClient();
  const connection = getConnectionHealth();
  const shipping = getLogShippingState();
  const baseSnapshot = {
    convexConnected: !!client,
    logDrops: getDroppedCount(),
    lastLogShipSuccessAt: shipping.lastSuccessAt,
    lastLogShipFailureAt: shipping.lastFailureAt,
    endpointHealthy: null,
    pendingEvents: null,
    endpointError: null,
    timestamp: Date.now(),
  };

  if (!client) {
    currentStatus = computeStatus({ client, connection, endpointHealth: {}, shipping });
    const nextSnapshot = { ...baseSnapshot, status: currentStatus };
    updateSnapshot(nextSnapshot);
    if (previousStatus !== currentStatus) {
      log.warn('Health status changed', { from: previousStatus, to: currentStatus });
    }
    if (hasSnapshotChanged(previousSnapshot, nextSnapshot)) notify();
    return;
  }

  const endpointHealth = await fetchEndpointHealth(connection.url);
  currentStatus = computeStatus({ client, connection, endpointHealth, shipping });

  const nextSnapshot = {
    ...baseSnapshot,
    ...endpointHealth,
    status: currentStatus,
  };
  updateSnapshot(nextSnapshot);

  if (previousStatus !== currentStatus) {
    log.info('Health status changed', { from: previousStatus, to: currentStatus });
  }
  if (hasSnapshotChanged(previousSnapshot, nextSnapshot)) notify();
}

export const healthMonitor = {
  start() {
    if (pollTimer) return;
    poll(); // immediate first check
    pollTimer = setInterval(poll, POLL_INTERVAL_MS);
  },

  stop() {
    if (pollTimer) {
      clearInterval(pollTimer);
      pollTimer = null;
    }
  },

  /** Subscribe to status changes. Returns unsubscribe function. */
  subscribe(callback) {
    if (listeners.length >= MAX_LISTENERS) {
      log.warn('healthMonitor.subscribe — listener cap reached; possible subscription leak', {
        listenerCount: listeners.length,
        cap: MAX_LISTENERS,
      });
    }
    listeners.push(callback);
    // Immediately emit current state
    callback(getSnapshot());
    return () => {
      listeners = listeners.filter((fn) => fn !== callback);
    };
  },

  /** Get current health snapshot without subscribing. */
  getSnapshot,

  /** Get current status string. */
  getStatus() {
    return currentStatus;
  },

  /** Current subscriber count — for monitoring and tests. */
  listenerCount() {
    return listeners.length;
  },
};
