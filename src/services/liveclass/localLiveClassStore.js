const STORAGE_KEY = 'lt_local_live_store_v1';
const CHANNEL_NAME = 'lt_local_live_store_events_v1';

function createEmptyStore() {
  return {
    sessions: {},
    joinRequests: {},
    studentNotes: {},
  };
}

let memoryStore = createEmptyStore();

const joinRequestListeners = new Map();
const joinStatusListeners = new Map();
const studentNoteListeners = new Map();
let syncChannel = null;

function hasWindow() {
  return typeof window !== 'undefined';
}

function getSyncChannel() {
  if (!hasWindow() || typeof window.BroadcastChannel === 'undefined') {
    return null;
  }

  if (!syncChannel) {
    syncChannel = new window.BroadcastChannel(CHANNEL_NAME);
    syncChannel.addEventListener('message', (event) => {
      const payload = event.data;
      if (!payload || typeof payload !== 'object') return;

      if (payload.type === 'join-request' || payload.type === 'join-status') {
        if (payload.sessionId) {
          emitJoinRequests(payload.sessionId);
        }
        if (payload.requestId) {
          emitJoinStatus(payload.requestId);
        }
        return;
      }

      if (payload.type === 'student-note' && payload.sessionId && payload.tempId) {
        emitStudentNote(payload.sessionId, payload.tempId);
      }
    });
  }

  return syncChannel;
}

function broadcast(payload) {
  try {
    getSyncChannel()?.postMessage(payload);
  } catch {
    // Ignore broadcast failures and rely on storage events as a fallback.
  }
}

function normalizeStore(value) {
  return {
    sessions: value && typeof value.sessions === 'object' ? value.sessions : {},
    joinRequests: value && typeof value.joinRequests === 'object' ? value.joinRequests : {},
    studentNotes: value && typeof value.studentNotes === 'object' ? value.studentNotes : {},
  };
}

function readStore() {
  if (!hasWindow()) {
    return memoryStore;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return memoryStore;
    }

    const parsed = normalizeStore(JSON.parse(raw));
    memoryStore = parsed;
    return parsed;
  } catch {
    return memoryStore;
  }
}

function writeStore(store) {
  memoryStore = store;
  if (!hasWindow()) {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

function createId(prefix) {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function createJoinCode(store) {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const activeCodes = new Set(
    Object.values(store.sessions)
      .filter((session) => session?.status === 'active')
      .map((session) => session.joinCode)
      .filter(Boolean)
  );

  let joinCode = '';
  do {
    joinCode = Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  } while (activeCodes.has(joinCode));

  return joinCode;
}

function isTeacherIdentity(userId) {
  return typeof userId === 'string' && userId.startsWith('debug_teacher_');
}

function assertTeacherCanCreateLiveClass(hostUserId, actorRole) {
  if (actorRole === 'teacher' || isTeacherIdentity(hostUserId)) {
    return;
  }

  throw new Error('Only teacher accounts can create a live class.');
}

function buildPreview(session) {
  if (!session) return null;
  return {
    _id: session._id,
    title: session.title ?? 'Live Class',
    status: session.status ?? 'active',
  };
}

function noteKey(sessionId, tempId) {
  return `${sessionId}:${tempId}`;
}

function emitJoinRequests(sessionId) {
  const listeners = joinRequestListeners.get(sessionId);
  if (!listeners?.size) return;
  const requests = listLocalJoinRequests(sessionId);
  listeners.forEach((callback) => callback(requests));
}

function emitJoinStatus(requestId) {
  const listeners = joinStatusListeners.get(requestId);
  if (!listeners?.size) return;
  const request = readStore().joinRequests[requestId] ?? null;
  const payload = request
    ? { status: request.status, studentName: request.studentName }
    : null;
  listeners.forEach((callback) => callback(payload));
}

function emitStudentNote(sessionId, tempId) {
  const key = noteKey(sessionId, tempId);
  const listeners = studentNoteListeners.get(key);
  if (!listeners?.size) return;
  const note = readStore().studentNotes[key] ?? null;
  listeners.forEach((callback) => callback(note));
}

function emitAllSubscriptions() {
  joinRequestListeners.forEach((_callbacks, sessionId) => emitJoinRequests(sessionId));
  joinStatusListeners.forEach((_callbacks, requestId) => emitJoinStatus(requestId));
  studentNoteListeners.forEach((_callbacks, key) => {
    const [sessionId, tempId] = key.split(':');
    if (sessionId && tempId) {
      emitStudentNote(sessionId, tempId);
    }
  });
}

if (hasWindow()) {
  window.addEventListener('storage', (event) => {
    if (event.key !== STORAGE_KEY) return;
    try {
      memoryStore = event.newValue ? normalizeStore(JSON.parse(event.newValue)) : createEmptyStore();
    } catch {
      memoryStore = createEmptyStore();
    }
    emitAllSubscriptions();
  });
}

export function isLocalLiveClassId(classId) {
  return typeof classId === 'string' && classId.startsWith('local_');
}

export function isLocalJoinRequestId(requestId) {
  return typeof requestId === 'string' && requestId.startsWith('local_join_');
}

export function createLocalLiveClass({ hostUserId, title, backgroundType = 'white', actorRole }) {
  assertTeacherCanCreateLiveClass(hostUserId, actorRole);
  const store = readStore();
  const sessionId = createId('local');
  const session = {
    _id: sessionId,
    hostUserId: hostUserId || 'local',
    title: title || 'Live Class',
    backgroundType,
    status: 'active',
    joinCode: createJoinCode(store),
    autoAccept: false,
    createdAt: Date.now(),
  };

  store.sessions[sessionId] = session;
  writeStore(store);
  return session;
}

export function __resetLocalLiveStoreForTests() {
  memoryStore = createEmptyStore();
  if (hasWindow()) {
    window.localStorage.removeItem(STORAGE_KEY);
  }
}

export function getLocalLiveClassById(classId, viewerUserId) {
  const session = readStore().sessions[classId];
  if (!session) return null;

  if (!viewerUserId) {
    return buildPreview(session);
  }

  const hasAcceptedRequest = Object.values(readStore().joinRequests).some(
    (request) =>
      request?.sessionId === classId &&
      request?.requesterUserId === viewerUserId &&
      request?.status === 'accepted'
  );

  if (session.hostUserId === viewerUserId || isTeacherIdentity(viewerUserId) || hasAcceptedRequest) {
    return { ...session };
  }

  return buildPreview(session);
}

export function getLocalLiveClassByCode(code) {
  const upperCode = String(code || '').trim().toUpperCase();
  if (!upperCode) return null;

  const session = Object.values(readStore().sessions).find(
    (candidate) => candidate?.status === 'active' && candidate?.joinCode === upperCode
  );

  return session ? buildPreview(session) : null;
}

export function listLocalJoinRequests(sessionId) {
  return Object.values(readStore().joinRequests)
    .filter((request) => request?.sessionId === sessionId)
    .sort((left, right) => (left?.requestedAt ?? 0) - (right?.requestedAt ?? 0));
}

export function requestLocalJoin({ sessionId, studentName, tempId, requesterUserId }) {
  const store = readStore();
  const session = store.sessions[sessionId];
  if (!session || session.status !== 'active') {
    throw new Error('Class not found or already ended.');
  }

  const existing = Object.values(store.joinRequests).find(
    (request) => request?.sessionId === sessionId && request?.tempId === tempId
  );
  if (existing) {
    return existing._id;
  }

  const requestId = createId('local_join');
  const request = {
    _id: requestId,
    sessionId,
    studentName,
    tempId,
    requesterUserId,
    status: session.autoAccept ? 'accepted' : 'pending',
    requestedAt: Date.now(),
  };

  store.joinRequests[requestId] = request;
  writeStore(store);
  emitJoinRequests(sessionId);
  emitJoinStatus(requestId);
  broadcast({ type: 'join-request', sessionId, requestId });
  return requestId;
}

function updateLocalJoinRequestStatus(requestId, status) {
  const store = readStore();
  const request = store.joinRequests[requestId];
  if (!request) return null;

  store.joinRequests[requestId] = {
    ...request,
    status,
  };
  writeStore(store);
  emitJoinRequests(request.sessionId);
  emitJoinStatus(requestId);
  broadcast({ type: 'join-status', sessionId: request.sessionId, requestId });
  return store.joinRequests[requestId];
}

export function approveLocalJoin(requestId) {
  return updateLocalJoinRequestStatus(requestId, 'accepted');
}

export function rejectLocalJoin(requestId) {
  return updateLocalJoinRequestStatus(requestId, 'rejected');
}

export function setLocalClassAutoAccept(classId, autoAccept) {
  const store = readStore();
  const session = store.sessions[classId];
  if (!session) return null;

  store.sessions[classId] = {
    ...session,
    autoAccept,
  };
  writeStore(store);
  return store.sessions[classId];
}

export function setLocalClassBackground(classId, backgroundType) {
  const store = readStore();
  const session = store.sessions[classId];
  if (!session) return null;

  store.sessions[classId] = {
    ...session,
    backgroundType,
  };
  writeStore(store);
  return store.sessions[classId];
}

export function endLocalLiveClass(classId) {
  const store = readStore();
  const session = store.sessions[classId];
  if (!session) return null;

  store.sessions[classId] = {
    ...session,
    status: 'ended',
  };
  writeStore(store);
  return store.sessions[classId];
}

export function getLocalStudentNote(sessionId, tempId) {
  return readStore().studentNotes[noteKey(sessionId, tempId)] ?? null;
}

export function updateLocalStudentNote(sessionId, tempId, noteContent) {
  const store = readStore();
  const key = noteKey(sessionId, tempId);
  const existing = store.studentNotes[key];
  store.studentNotes[key] = {
    ...(existing ?? { sessionId, tempId }),
    noteContent,
    updatedAt: Date.now(),
  };
  writeStore(store);
  emitStudentNote(sessionId, tempId);
  broadcast({ type: 'student-note', sessionId, tempId });
  return store.studentNotes[key];
}

export function getLocalStudentName(sessionId, tempId) {
  const request = Object.values(readStore().joinRequests).find(
    (candidate) => candidate?.sessionId === sessionId && candidate?.tempId === tempId
  );
  return request?.studentName ?? null;
}

export function subscribeLocalJoinRequests(sessionId, callback) {
  const listeners = joinRequestListeners.get(sessionId) ?? new Set();
  listeners.add(callback);
  joinRequestListeners.set(sessionId, listeners);
  callback(listLocalJoinRequests(sessionId));

  return () => {
    const current = joinRequestListeners.get(sessionId);
    current?.delete(callback);
    if (current && current.size === 0) {
      joinRequestListeners.delete(sessionId);
    }
  };
}

export function subscribeLocalJoinStatus(requestId, callback) {
  const listeners = joinStatusListeners.get(requestId) ?? new Set();
  listeners.add(callback);
  joinStatusListeners.set(requestId, listeners);
  emitJoinStatus(requestId);

  return () => {
    const current = joinStatusListeners.get(requestId);
    current?.delete(callback);
    if (current && current.size === 0) {
      joinStatusListeners.delete(requestId);
    }
  };
}

export function subscribeLocalStudentNote(sessionId, tempId, callback) {
  const key = noteKey(sessionId, tempId);
  const listeners = studentNoteListeners.get(key) ?? new Set();
  listeners.add(callback);
  studentNoteListeners.set(key, listeners);
  callback(getLocalStudentNote(sessionId, tempId));

  return () => {
    const current = studentNoteListeners.get(key);
    current?.delete(callback);
    if (current && current.size === 0) {
      studentNoteListeners.delete(key);
    }
  };
}
