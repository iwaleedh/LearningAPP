/**
 * convex-client.js — Shared Convex client for imperative app services.
 *
 * Uses a singleton ConvexReactClient so the app can share one authenticated
 * websocket connection between React providers and imperative service modules.
 */
import { ConvexReactClient } from 'convex/react';
import { api } from '../convex/_generated/api.js';
import {
  approveLocalJoin,
  getLocalLiveClassByCode,
  getLocalLiveClassById,
  getLocalStudentName,
  getLocalStudentNote,
  isLocalJoinRequestId,
  isLocalLiveClassId,
  rejectLocalJoin,
  requestLocalJoin,
  setLocalClassAutoAccept,
  subscribeLocalJoinRequests,
  subscribeLocalJoinStatus,
  subscribeLocalStudentNote,
  updateLocalStudentNote,
} from './services/liveclass/localLiveClassStore.js';

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

function storeUsername(username) {
  localStorage.setItem(USERNAME_KEY, username);
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
let anonymousUserId = null;
let anonymousUsername = null;

function getOrCreateClient() {
  if (!convexClient && CONVEX_URL) {
    convexClient = new ConvexReactClient(CONVEX_URL);
  }
  return convexClient;
}

function ensureAnonymousIdentity() {
  const userId = ensureUserId();
  const existingUsername = getStoredUsername();
  const username = existingUsername || `user_${userId.slice(0, 6)}_${Date.now()}`;
  if (!existingUsername) storeUsername(username);

  anonymousUserId = userId;
  anonymousUsername = username;
  return { userId, username };
}

function applyIdentity(userId, username) {
  currentUserId = userId;
  currentUsername = username;
}

export function setCurrentUsernameOverride(username) {
  if (!currentUserId || !username) return;
  applyIdentity(currentUserId, username);
}

export function setLocalDebugIdentity({ userId, username }) {
  if (!userId || !username) return;
  getOrCreateClient()?.clearAuth();
  applyIdentity(userId, username);
}

async function registerCurrentUser(extra = {}) {
  const client = getOrCreateClient();
  if (!client || !currentUserId || !currentUsername) return;

  await client.mutation(api.users.registerUser, {
    username: currentUsername,
    ...extra,
  });
}

/**
 * Initialise the Convex client. Resolves with the client when ready,
 * or null if there's no URL configured (offline mode).
 */
export async function initConvex() {
  if (convexClient && isReady) return convexClient;

  if (!CONVEX_URL) {
    console.warn('Convex URL not configured — running in offline mode');
    hasErrored = true;
    lastError = new Error('No VITE_CONVEX_URL configured');
    errorCallbacks.forEach(cb => cb(lastError));
    errorCallbacks = [];
    return null;
  }

  try {
    convexClient = getOrCreateClient();
    const anonymousIdentity = anonymousUserId && anonymousUsername
      ? { userId: anonymousUserId, username: anonymousUsername }
      : ensureAnonymousIdentity();

    if (!currentUserId || !currentUsername) {
      applyIdentity(anonymousIdentity.userId, anonymousIdentity.username);
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
    return null;
  }
}

// Keep backward-compatible names
export const initSpacetimeDB = initConvex;

/** Register a callback for when Convex is fully ready. */
export function onConvexReady(callback) {
  if (isReady && convexClient && currentUserId) {
    callback(convexClient, currentUserId);
  } else {
    connectionCallbacks.push(callback);
  }
}
export const onSpacetimeDBReady = onConvexReady;

/** Register a callback for Convex connection errors. */
export function onConvexError(callback) {
  if (hasErrored && !isReady) {
    callback(lastError);
  } else {
    errorCallbacks.push(callback);
  }
}
export const onSpacetimeDBError = onConvexError;

/** Register a disconnect callback (fires if client closes). */
export function onConvexDisconnect(callback) {
  disconnectCallbacks.push(callback);
}
export const onSpacetimeDBDisconnect = onConvexDisconnect;

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
export function subscribe(queryRef, args, callback) {
  const client = getOrCreateClient();
  if (!client) return () => {};

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
  applyIdentity(userId, resolvedUsername);
  await registerCurrentUser({ email, avatarUrl });
  return client;
}

export async function restoreAnonymousIdentity() {
  const anonymousIdentity = ensureAnonymousIdentity();
  const client = getOrCreateClient();

  client?.clearAuth();
  applyIdentity(anonymousIdentity.userId, anonymousIdentity.username);

  if (!client) {
    return null;
  }

  if (!isReady) {
    return initConvex();
  }

  return client;
}

// ── User helpers ────────────────────────────────────────────────────
export async function getAllUsers() {
  if (!convexClient) return [];
  try {
    return await convexClient.query(api.users.getAllUsers, {});
  } catch {
    return [];
  }
}

export async function searchUsersByUsername(search, limit = 8) {
  if (!convexClient) return [];
  const term = String(search || '').trim();
  if (term.length < 2) return [];
  try {
    return await convexClient.query(api.users.searchUsers, { search: term, limit });
  } catch {
    return [];
  }
}

export async function getMyRole() {
  if (!convexClient || !currentUserId) return 'student';
  try {
    return await convexClient.query(api.users.getMyRole, {});
  } catch {
    return 'student';
  }
}

export async function isTeacher() {
  const role = await getMyRole();
  return role === 'teacher';
}

export async function setTeacherRole(teacher) {
  void teacher;
  throw new Error('Teacher role changes are not available from the client.');
}

// ── Session helpers (annotation sessions) ───────────────────────────
export async function getActiveSessions() {
  if (!convexClient) return [];
  try {
    return await convexClient.query(api.sessions.getActiveSessions, {});
  } catch {
    return [];
  }
}

export async function getMyParticipantSessions() {
  if (!convexClient || !currentUserId) return [];
  try {
    return await convexClient.query(api.sessions.getMyParticipantSessions, {});
  } catch {
    return [];
  }
}

export async function getMyPendingInvites(usernameOverride) {
  void usernameOverride;
  if (!convexClient || !currentUsername) return [];
  try {
    return await convexClient.query(api.invites.getMyPendingInvites, {});
  } catch {
    return [];
  }
}

// ── Live Class helpers ──────────────────────────────────────────────
export async function getActiveLiveClasses() {
  if (!convexClient) return [];
  try {
    return await convexClient.query(api.liveclass.getActiveLiveClasses, {});
  } catch {
    return [];
  }
}

export async function getLiveClassById(classId) {
  if (isLocalLiveClassId(classId)) {
    return getLocalLiveClassById(classId, currentUserId);
  }
  if (!convexClient) return null;
  try {
    return await convexClient.query(api.liveclass.getLiveClassById, { classId });
  } catch {
    return null;
  }
}

export async function getMyPendingLiveClassInvites(usernameOverride) {
  void usernameOverride;
  if (!convexClient || !currentUsername) return [];
  try {
    const invites = await convexClient.query(api.invites.getMyPendingInvites, {});
    // Filter to only invites for active live classes
    const activeClasses = await getActiveLiveClasses();
    const activeClassIds = new Set(activeClasses.map(c => c._id));
    return invites.filter(inv => activeClassIds.has(inv.sessionId));
  } catch {
    return [];
  }
}

export async function getLiveClassParticipants(classId) {
  if (!convexClient) return [];
  try {
    return await convexClient.query(api.sessions.getParticipants, { sessionId: classId });
  } catch {
    return [];
  }
}

export async function getLiveClassCursors(classId) {
  if (!convexClient) return [];
  try {
    return await convexClient.query(api.cursors.getCursorsByClass, { classId });
  } catch {
    return [];
  }
}

export async function getHandRaises(classId) {
  if (!convexClient) return [];
  try {
    return await convexClient.query(api.handraises.getHandRaisesByClass, { classId });
  } catch {
    return [];
  }
}

export async function getClassTimer(classId) {
  if (!convexClient) return null;
  try {
    return await convexClient.query(api.timers.getClassTimer, { classId });
  } catch {
    return null;
  }
}

// ── Join Code helpers ───────────────────────────────────────────────
export async function getLiveClassByCode(code) {
  const localSession = getLocalLiveClassByCode(code);
  if (localSession) {
    return localSession;
  }
  if (!convexClient) return null;
  try {
    return await convexClient.query(api.liveclass.getLiveClassByCode, { code });
  } catch {
    return null;
  }
}

export async function requestJoin(sessionId, studentName, tempId) {
  if (isLocalLiveClassId(sessionId)) {
    return requestLocalJoin({
      sessionId,
      studentName,
      tempId,
      requesterUserId: currentUserId,
    });
  }
  if (!convexClient) return null;
  return convexClient.mutation(api.joinRequests.requestJoin, { sessionId, studentName, tempId });
}

export async function approveJoin(requestId) {
  if (isLocalJoinRequestId(requestId)) {
    return approveLocalJoin(requestId);
  }
  if (!convexClient) return null;
  return convexClient.mutation(api.joinRequests.approveJoin, { requestId });
}

export async function rejectJoin(requestId) {
  if (isLocalJoinRequestId(requestId)) {
    return rejectLocalJoin(requestId);
  }
  if (!convexClient) return null;
  return convexClient.mutation(api.joinRequests.rejectJoin, { requestId });
}

export async function setClassAutoAccept(classId, autoAccept) {
  if (isLocalLiveClassId(classId)) {
    return setLocalClassAutoAccept(classId, autoAccept);
  }
  if (!convexClient) return null;
  return convexClient.mutation(api.liveclass.setAutoAccept, { classId, autoAccept });
}

export async function updateStudentNote(sessionId, tempId, noteContent) {
  if (isLocalLiveClassId(sessionId)) {
    return updateLocalStudentNote(sessionId, tempId, noteContent);
  }
  if (!convexClient) return null;
  return convexClient.mutation(api.joinRequests.updateStudentNote, { sessionId, tempId, noteContent });
}

export async function getStudentNote(sessionId, tempId) {
  if (isLocalLiveClassId(sessionId)) {
    return getLocalStudentNote(sessionId, tempId);
  }
  if (!convexClient) return null;
  try {
    return await convexClient.query(api.joinRequests.getStudentNote, { sessionId, tempId });
  } catch {
    return null;
  }
}

export async function getStudentName(sessionId, tempId) {
  if (isLocalLiveClassId(sessionId)) {
    return getLocalStudentName(sessionId, tempId);
  }
  if (!convexClient) return null;
  try {
    return await convexClient.query(api.joinRequests.getStudentName, { sessionId, tempId });
  } catch {
    return null;
  }
}

// Subscribe helpers for reactive data
export function subscribeToJoinRequests(sessionId, callback) {
  if (isLocalLiveClassId(sessionId)) {
    return subscribeLocalJoinRequests(sessionId, callback);
  }
  return subscribe(api.joinRequests.getJoinRequests, { sessionId }, callback);
}

export function subscribeToJoinStatus(requestId, callback) {
  if (isLocalJoinRequestId(requestId)) {
    return subscribeLocalJoinStatus(requestId, callback);
  }
  return subscribe(api.joinRequests.getStudentJoinStatus, { requestId }, callback);
}

export function subscribeToStudentNote(sessionId, tempId, callback) {
  if (isLocalLiveClassId(sessionId)) {
    return subscribeLocalStudentNote(sessionId, tempId, callback);
  }
  return subscribe(api.joinRequests.getStudentNote, { sessionId, tempId }, callback);
}
