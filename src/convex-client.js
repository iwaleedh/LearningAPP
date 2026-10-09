/**
 * convex-client.js — Shared Convex client for imperative app services.
 *
 * Uses a singleton ConvexReactClient so the app can share one authenticated
 * websocket connection between React providers and imperative service modules.
 */
import { ConvexReactClient } from 'convex/react';
import { api } from '../convex/_generated/api.js';
const CONVEX_URL = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_CONVEX_URL) || '';

// ── Anonymous identity (localStorage UUID) ──────────────────────────
const USER_ID_KEY = 'lt_user_id';
const USERNAME_KEY = 'lt_username';

function ensureUserId() {
  let userId = localStorage.getItem(USER_ID_KEY);
  if (!userId) {
    userId = crypto.randomUUID();
    localStorage.setItem(USER_ID_KEY, userId);
  }
  return userId;
}

function getStoredUsername() {
  return localStorage.getItem(USERNAME_KEY);
}

/**
 * S17 fix: Sanitise username before storage.
 * localStorage values are read back and may be rendered in non-React contexts
 * (e.g. via textContent or innerHTML in canvas overlays, chat systems, etc.).
 * Strip HTML tags, control characters, and limit length to prevent XSS if a
 * value is ever rendered unsafely.
 */
function sanitizeUsername(username) {
  if (typeof username !== 'string') return '';
  return username
    .replace(/<[^>]*>/g, '')        // strip HTML tags
    .split('')
    .filter((char) => {
      const code = char.charCodeAt(0);
      return code >= 0x20 && code !== 0x7f;
    })
    .join('')
    .trim()
    .slice(0, 50);                  // enforce max length
}

function storeUsername(username) {
  localStorage.setItem(USERNAME_KEY, sanitizeUsername(username));
}

// ── Singleton ConvexClient (imperative, for services + pages) ───────
let convexClient = null;
let isReady = false;
let hasErrored = false;
let lastError = null;
let connectionCallbacks = [];
let errorCallbacks = [];
let disconnectCallbacks = [];
let currentUserId = null;
let currentUsername = null;
let currentIdentityMode = 'anonymous';
let expectedIdentityMode = 'anonymous';
let anonymousUserId = null;
let anonymousUsername = null;
// D7: Promise-based singleton guard — concurrent initConvex() calls share
// one promise so registerCurrentUser() is never called twice in parallel.
let initPromise = null;

function getOrCreateClient() {
  if (!convexClient && CONVEX_URL) {
    convexClient = new ConvexReactClient(CONVEX_URL);
  }
  return convexClient;
}

function ensureAnonymousIdentity() {
  const userId = ensureUserId();
  const existingUsername = getStoredUsername();
  // Generate a stable username from the userId (no Date.now() — must be the same on every reload)
  const username = existingUsername || `user_${userId.slice(0, 6)}`;
  if (!existingUsername) storeUsername(username);

  anonymousUserId = userId;
  anonymousUsername = username;
  return { userId, username };
}

function applyIdentity(userId, username, mode = currentIdentityMode) {
  currentUserId = userId;
  currentUsername = username;
  currentIdentityMode = mode;
  expectedIdentityMode = mode;
}

export function setCurrentUsernameOverride(username) {
  if (!currentUserId || !username) return;
  applyIdentity(currentUserId, username);
}

export function setExpectedIdentityMode(mode) {
  if (mode !== 'anonymous' && mode !== 'authenticated' && mode !== 'debug') {
    return;
  }
  expectedIdentityMode = mode;
}

export function getCurrentIdentityMode() {
  return expectedIdentityMode || currentIdentityMode;
}

export function setLocalDebugIdentity({ userId, username }) {
  if (!userId || !username) return;
  getOrCreateClient()?.clearAuth();
  applyIdentity(userId, username, 'debug');
}

async function registerCurrentUser(extra = {}) {
  const client = getOrCreateClient();
  if (!client || !currentUserId || !currentUsername) return;

  await client.mutation(api.users.registerUser, {
    username: currentUsername,
    ...extra,
  });
}

// D5: Record one login-day per calendar day. The localStorage key prevents
// multiple tabs / page-reloads from firing the mutation more than once per day.
const LOGIN_DATE_KEY = 'lt_login_date';
async function recordLoginDay() {
  const client = getOrCreateClient();
  if (!client || !currentUserId) return;
  try {
    const today = new Date().toLocaleDateString('en-CA'); // YYYY-MM-DD
    if (localStorage.getItem(LOGIN_DATE_KEY) === today) return;
    await client.mutation(api.users.recordLogin, { dateKey: today });
    localStorage.setItem(LOGIN_DATE_KEY, today);
  } catch {
    // Non-fatal — badge metrics degrade gracefully to loginCount = 0.
  }
}

/**
 * Initialise the Convex client. Resolves with the client when ready,
 * or null if there's no URL configured (offline mode).
 *
 * D7: Uses a Promise singleton (initPromise) so that concurrent calls
 * (e.g. from multiple service modules loading simultaneously) share one
 * in-flight initialisation instead of racing to call registerCurrentUser()
 * multiple times with half-updated identity state.
 */
export async function initConvex() {
  if (convexClient && isReady) return convexClient;

  // Return the in-flight promise if init is already underway.
  if (initPromise) return initPromise;

  if (!CONVEX_URL) {
    console.warn('Convex URL not configured — running in offline mode');
    hasErrored = true;
    lastError = new Error('No VITE_CONVEX_URL configured');
    errorCallbacks.forEach(cb => cb(lastError));
    errorCallbacks = [];
    return null;
  }

  initPromise = (async () => {
    try {
      convexClient = getOrCreateClient();
      const anonymousIdentity = anonymousUserId && anonymousUsername
        ? { userId: anonymousUserId, username: anonymousUsername }
        : ensureAnonymousIdentity();

      if (!currentUserId || !currentUsername) {
        applyIdentity(anonymousIdentity.userId, anonymousIdentity.username, 'anonymous');
      }

      isReady = true;
      connectionCallbacks.forEach(cb => cb(convexClient, currentUserId));
      connectionCallbacks = [];
      return convexClient;
    } catch (err) {
      console.error('Convex init failed:', err);
      hasErrored = true;
      lastError = err;
      errorCallbacks.forEach(cb => cb(err));
      errorCallbacks = [];
      initPromise = null; // allow retry on next call
      return null;
    }
  })();

  return initPromise;
}

/** Register a callback for when Convex is fully ready. Returns an unsubscribe function. */
export function onConvexReady(callback) {
  if (isReady && convexClient && currentUserId) {
    callback(convexClient, currentUserId);
    return () => {}; // already fired, nothing to remove
  }
  connectionCallbacks.push(callback);
  // M4: allow caller to remove the callback before it fires (e.g. on unmount)
  return () => {
    const idx = connectionCallbacks.indexOf(callback);
    if (idx !== -1) connectionCallbacks.splice(idx, 1);
  };
}

/**
 * Returns a Promise that resolves with the Convex client once it is
 * fully initialised (identity set, ready for queries / mutations / subscriptions).
 * This gate is useful for authenticated query and subscription operations,
 * because getClient() eagerly creates a client before the identity is set or any
 * subscription can succeed.
 */
export function waitForConvexReady() {
  return new Promise((resolve, reject) => {
    if (isReady && convexClient && currentUserId) {
      resolve(convexClient);
    } else if (hasErrored) {
      reject(lastError ?? new Error('Convex init failed'));
    } else {
      connectionCallbacks.push((client) => resolve(client));
      errorCallbacks.push((err) => reject(err));
    }
  });
}

/**
 * Synchronous check — true only after initConvex() completes with identity set.
 * Use this as a fast-path guard before subscribing or mutating.
 */
export function isConvexReady() {
  return isReady && !!convexClient && !!currentUserId;
}

/** Register a callback for Convex connection errors. Returns an unsubscribe function. */
export function onConvexError(callback) {
  if (hasErrored && !isReady) {
    callback(lastError);
    return () => {};
  }
  errorCallbacks.push(callback);
  return () => {
    const idx = errorCallbacks.indexOf(callback);
    if (idx !== -1) errorCallbacks.splice(idx, 1);
  };
}

/** Register a disconnect callback (fires if client closes). Returns an unsubscribe function. */
export function onConvexDisconnect(callback) {
  disconnectCallbacks.push(callback);
  return () => {
    const idx = disconnectCallbacks.indexOf(callback);
    if (idx !== -1) disconnectCallbacks.splice(idx, 1);
  };
}

// ── Identity helpers ────────────────────────────────────────────────
export function getCurrentIdentity() {
  return currentUserId;
}

export function getCurrentUserId() {
  return currentUserId;
}

export function getCurrentUsername() {
  return currentUsername;
}

export function getClient() {
  return getOrCreateClient();
}

/**
 * Get high-level connection health info.
 * Used by healthMonitor.js and UI components to show connection status.
 */
export function getConnectionHealth() {
  return {
    connected: isReady && !!convexClient,
    hasErrored,
    lastError: lastError ? lastError.message : null,
    url: CONVEX_URL || null,
  };
}

// Expose the raw client for service files that need imperative subscriptions
export { convexClient as client };

// ── Convex API re-export for easy use in service files ──────────────
export { api };

// ── Helper: execute a Convex mutation via the imperative client ─────
export async function callMutation(mutationRef, args) {
  const client = getOrCreateClient();
  if (!client) return null;
  return client.mutation(mutationRef, args);
}

// ── Helper: execute a Convex query via the imperative client ────────
export async function callQuery(queryRef, args) {
  const client = getOrCreateClient();
  if (!client) return null;
  return client.query(queryRef, args);
}

// ── Helper: subscribe to a Convex query (imperative) ────────────────
/**
 * Subscribe to a Convex reactive query. Returns an unsubscribe function.
 *
 * M8: If the client isn't ready yet, the subscription is deferred — it will
 * automatically start once Convex is initialised. The returned unsubscribe
 * function cancels the deferred subscription if called before it starts.
 */
export function subscribe(queryRef, args, callback) {
  const client = getOrCreateClient();
  if (!client) {
    console.warn('[Convex] subscribe() — client not ready, deferring until ready. Query:', queryRef);
    let innerUnsub = null;
    let cancelled = false;
    const unsubReady = onConvexReady((readyClient) => {
      if (cancelled) return;
      const watch = readyClient.watchQuery(queryRef, args ?? {});
      const emit = () => {
        const result = watch.localQueryResult();
        if (result !== undefined) callback(result);
      };
      innerUnsub = watch.onUpdate(() => emit());
      emit();
    });
    return () => {
      cancelled = true;
      unsubReady();
      innerUnsub?.();
    };
  }

  const watch = client.watchQuery(queryRef, args ?? {});
  const emit = () => {
    const result = watch.localQueryResult();
    if (result !== undefined) {
      callback(result);
    }
  };

  const unsubscribe = watch.onUpdate(() => {
    emit();
  });

  emit();
  return unsubscribe;
}

export async function setAuthenticatedIdentity({
  userId,
  username,
  email,
  avatarUrl,
  fetchToken,
}) {
  const client = await initConvex();
  if (!client || !userId) return null;

  if (fetchToken) {
    client.setAuth(fetchToken);
  }

  const resolvedUsername = username || `user_${userId.slice(-6)}`;
  applyIdentity(userId, resolvedUsername, 'authenticated');
  await registerCurrentUser({ email, avatarUrl });
  // D5: Record the login day after registration so the user row definitely exists.
  await recordLoginDay();
  return client;
}

export async function finalizeAuthenticatedAccess({ sessionId, provider, userAgent }) {
  const client = getOrCreateClient();
  if (!client) return null;
  return await client.mutation(api.access.finalizeSignIn, {
    sessionId,
    provider,
    userAgent,
  });
}

export async function selectAccessWindow({ months, sessionId }) {
  const client = getOrCreateClient();
  if (!client) return null;
  return await client.mutation(api.access.selectAccessWindow, {
    months,
    sessionId,
  });
}

export async function restoreAnonymousIdentity() {
  const anonymousIdentity = ensureAnonymousIdentity();
  const client = getOrCreateClient();

  client?.clearAuth();
  applyIdentity(anonymousIdentity.userId, anonymousIdentity.username, 'anonymous');

  if (!client) {
    return null;
  }

  if (!isReady) {
    return initConvex();
  }

  return client;
}

// ── User helpers ────────────────────────────────────────────────────
