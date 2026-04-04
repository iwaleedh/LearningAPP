/**
 * liveClassSync.js — Real-time Live Class session management
 *
 * Manages the Convex sync for the Live Class feature: canvas strokes,
 * teacher cursor/laser broadcast, hand raises, timer, and participant tracking.
 * Follows the same pattern as sessionSync.js.
 */

import { getClient, getCurrentUserId, api, callMutation, callQuery, subscribe, waitForConvexReady, isConvexReady } from '../../convex-client.js';
import { logger } from '../logger/logger.js';
import {
  createLocalLiveClass,
  endLocalLiveClass,
  isLocalLiveClassId,
  setLocalClassBackground,
} from './localLiveClassStore.js';

const log = logger.child({ component: 'liveClassSync' });

function isDebugTeacherIdentity(userId) {
  return typeof userId === 'string' && userId.startsWith('debug_teacher_');
}

/**
 * Creates a live-class sync controller.
 *
 * @param {Object} callbacks
 * @param {(strokeId: string, fabricObjectJson: string) => void} callbacks.onStrokeAdded
 * @param {(strokeId: string, fabricObjectJson: string) => void} callbacks.onStrokeUpdated
 * @param {(strokeId: string) => void} callbacks.onStrokeDeleted
 * @param {(participants: any[]) => void} callbacks.onParticipantsChanged
 * @param {(cursor: {x:number,y:number,tool:string,mode:string,identity:string}) => void} callbacks.onCursorMoved
 * @param {(trail: {id:string,points:Array,identity:string,createdAt:number}) => void} callbacks.onLaserTrail
 * @param {(raises: any[]) => void} callbacks.onHandRaisesChanged
 * @param {(timer: any) => void} callbacks.onTimerUpdated
 * @param {(backgroundType: string) => void} callbacks.onBackgroundChanged
 * @param {() => void} callbacks.onSessionEnded
 */
export function createLiveClassSync({
  onStrokeAdded,
  onStrokeUpdated,
  onStrokeDeleted,
  onParticipantsChanged,
  onCursorMoved,
  onLaserTrail,
  onHandRaisesChanged,
  onTimerUpdated,
  onBackgroundChanged,
  onSessionEnded,
  onPollCreated,
  onPollClosed,
  onPollResponseReceived,
  onPresentStatusChanged,
}) {
  let activeClassId = null;
  const clientIdToStrokeId = new Map();
  const strokeIdToClientId = new Map();

  // Throttle for cursor broadcast (50ms)
  let lastCursorSendTime = 0;

  // Track known state for diff detection
  let knownStrokes = new Map();
  let lastCursors = new Map(); // userId → cursor
  let lastBackground = null;
  let lastSessionStatus = null;

  let unsubs = [];

  // ── Poll state — backed by Convex subscription (H-11) ──
  // Local cache is kept in sync via the subscription in attachListeners.
  // Falls back to local-only for offline/local class IDs.
  const localPolls = new Map();
  const localResponses = new Map();
  let pollCache = []; // populated by Convex subscription

  function myUserId() {
    return getCurrentUserId();
  }

  function attachListeners(classId) {
    const client = getClient();
    if (!client) {
      log.warn('attachListeners — Convex client not ready, skipping subscriptions', { classId });
      return;
    }
    log.info('attachListeners — subscribing to Convex', { classId });

    let strokeSubFiredOnce = false;

    // ── Strokes subscription ─────────────────────────────────────
        unsubs.push(subscribe(api.strokes.getStrokesBySession, { sessionId: classId }, (strokes) => {
          if (!strokeSubFiredOnce) {
            strokeSubFiredOnce = true;
            log.info('Stroke subscription first callback', { classId, count: strokes.length });
          }
          const newMap = new Map();
          for (const stroke of strokes) {
            newMap.set(stroke._id, stroke);

            if (!knownStrokes.has(stroke._id)) {
              if (stroke.userId !== myUserId()) {
                try {
                  const parsed = JSON.parse(stroke.fabricObjectJson);
                  const clientId = parsed?.data?.strokeClientId;
                  if (clientId) {
                    strokeIdToClientId.set(stroke._id, clientId);
                  }
                } catch { /* noop */ }
                onStrokeAdded?.(stroke._id, stroke.fabricObjectJson);
              }
        } else {
          const old = knownStrokes.get(stroke._id);
          if (old.fabricObjectJson !== stroke.fabricObjectJson && stroke.userId !== myUserId()) {
            onStrokeUpdated?.(stroke._id, stroke.fabricObjectJson);
          }
        }
      }
      for (const [id] of knownStrokes) {
        if (!newMap.has(id)) {
          const clientId = strokeIdToClientId.get(id);
          onStrokeDeleted?.(id, clientId);
          if (clientId) clientIdToStrokeId.delete(clientId);
          strokeIdToClientId.delete(id);
        }
      }
      knownStrokes = newMap;
    }));

    // ── Participants subscription ─────────────────────────────────
    unsubs.push(subscribe(api.sessions.getParticipants, { sessionId: classId }, (participants) => {
      onParticipantsChanged?.(participants);
    }));

    // ── Cursor / Laser subscription ───────────────────────────────
    unsubs.push(subscribe(api.cursors.getCursorsByClass, { classId }, (cursors) => {
      for (const cursor of cursors) {
        if (cursor.userId === myUserId()) continue;
        const prev = lastCursors.get(cursor.userId);
        if (!prev || prev.x !== cursor.x || prev.y !== cursor.y || prev.tool !== cursor.tool || prev.mode !== cursor.mode) {
          onCursorMoved?.({
            x: cursor.x,
            y: cursor.y,
            tool: cursor.tool,
            mode: cursor.mode ?? 'dot',
            identity: cursor.userId,
          });
        }
        lastCursors.set(cursor.userId, cursor);
      }
    }));

    // ── Hand raises subscription ──────────────────────────────────
    unsubs.push(subscribe(api.handraises.getHandRaisesByClass, { classId }, (raises) => {
      onHandRaisesChanged?.(raises);
    }));

    // ── Timer subscription ────────────────────────────────────────
    unsubs.push(subscribe(api.timers.getClassTimer, { classId }, (timer) => {
      if (timer) onTimerUpdated?.(timer);
    }));

    // ── H-11: Poll subscription ────────────────────────────────────
    unsubs.push(subscribe(api.polls.getPollsByClass, { classId }, (polls) => {
      if (!Array.isArray(polls)) return;
      const prevIds = new Set(pollCache.map(p => p.id));
      const prevStatuses = new Map(pollCache.map(p => [p.id, p.status]));
      pollCache = polls;

      for (const poll of polls) {
        if (!prevIds.has(poll.id)) {
          onPollCreated?.(poll);
        } else if (prevStatuses.get(poll.id) === 'active' && poll.status === 'closed') {
          onPollClosed?.(poll);
        } else {
          // Response count or other fields changed
          onPollResponseReceived?.(poll, null);
        }
      }
    }));

    // ── Class session subscription (background + end) ─────────────
    unsubs.push(subscribe(api.liveclass.getLiveClassById, { classId }, (session) => {
      if (!session) return;
      if (lastBackground !== null && lastBackground !== session.backgroundType) {
        onBackgroundChanged?.(session.backgroundType);
      }
      lastBackground = session.backgroundType;

      if (session.status === 'ended' && lastSessionStatus !== 'ended') {
        onSessionEnded?.();
        detachListeners();
        activeClassId = null;
      }
      lastSessionStatus = session.status;
    }));
  }

  function detachListeners() {
    unsubs.forEach(fn => fn?.());
    unsubs = [];
    knownStrokes = new Map();
    lastCursors = new Map();
    lastBackground = null;
    lastSessionStatus = null;
  }

  /* ── Public API ────────────────────────────────────────────────── */

  /** Teacher creates a new Live Class. */
  async function createClass(title, backgroundType = 'white', options = {}) {
    const userId = myUserId();
    const actorRole = options.actorRole;

    if (actorRole !== 'teacher' && !isDebugTeacherIdentity(userId)) {
      throw new Error('Only teacher accounts can create a live class.');
    }

    if (!userId || !getClient() || isDebugTeacherIdentity(userId)) {
      const localSession = createLocalLiveClass({
        hostUserId: userId ?? 'local',
        title,
        backgroundType,
        actorRole,
      });
      activeClassId = localSession._id;
      return localSession;
    }

    try {
      const classId = await callMutation(api.liveclass.createLiveClass, {
        title,
        backgroundType,
      });
      activeClassId = classId;
      attachListeners(classId);
      const session = await callQuery(api.liveclass.getLiveClassById, { classId });
      return session || { _id: classId, title, backgroundType, status: 'active', hostUserId: userId };
    } catch (err) {
      log.warn('createClass failed, using local fallback', { error: err.message });
      const localSession = createLocalLiveClass({
        hostUserId: userId ?? 'local',
        title,
        backgroundType,
        actorRole,
      });
      activeClassId = localSession._id;
      return localSession;
    }
  }

  /** Student joins an existing Live Class. Returns snapshot of existing strokes. */
  async function joinClass(classId) {
    if (isLocalLiveClassId(classId)) {
      activeClassId = classId;
      return [];
    }
    activeClassId = classId;
    // Gate on genuine Convex readiness (identity set + client connected),
    // not just getClient() existence — the client is created eagerly before
    // the identity is available, so checking getClient() is not sufficient.
    let client;
    try {
      client = await waitForConvexReady();
    } catch {
      log.warn('joinClass — Convex unavailable, falling back to local/BC sync', { classId });
      return [];
    }
    if (!client || activeClassId !== classId) return [];
    const userId = myUserId();
    if (!userId) return [];
    await callMutation(api.liveclass.joinLiveClass, { classId });
    attachListeners(classId);
    const strokes = await callQuery(api.strokes.getStrokesBySession, { sessionId: classId });
    return strokes || [];
  }

  /**
   * Teacher attaches listeners to an existing class (e.g. after navigation).
   * Returns snapshot of existing strokes.
   */
  function watchClass(classId) {
    if (isLocalLiveClassId(classId)) {
      activeClassId = classId;
      return Promise.resolve([]);
    }
    activeClassId = classId;
    // Use isConvexReady() (identity set) instead of plain getClient() existence
    // so we don't attach subscriptions before the identity is established.
    if (isConvexReady() && myUserId()) {
      attachListeners(classId);
    } else {
      log.info('watchClass — Convex not ready, queuing attach', { classId });
      waitForConvexReady().then(() => {
        if (activeClassId === classId) attachListeners(classId);
      }).catch(() => {
        log.warn('watchClass — Convex unavailable, BroadcastChannel fallback active', { classId });
      });
    }
    // Return strokes asynchronously; caller should await if needed
    return callQuery(api.strokes.getStrokesBySession, { sessionId: classId }).catch(() => []);
  }

  function leaveClass() {
    detachListeners();
    activeClassId = null;
    clientIdToStrokeId.clear();
    strokeIdToClientId.clear();
  }

  /** Broadcast teacher's cursor/laser position (throttled to 50ms). */
  async function broadcastCursor(classId, x, y, tool, mode = 'dot') {
    if (isLocalLiveClassId(classId)) return;
    const now = Date.now();
    if (now - lastCursorSendTime < 50) return;
    lastCursorSendTime = now;
    const userId = myUserId();
    if (!userId) return;
    callMutation(api.cursors.updateCursor, { classId, x, y, tool, mode }).catch(() => {});
  }

  /** Broadcast a completed laser trail to other users. */
  function broadcastLaserTrail(classId, trailId, points) {
    if (!points || points.length < 2) return;
    const trailData = {
      id: trailId,
      points,
      identity: myUserId(),
      createdAt: Date.now()
    };
    onLaserTrail?.(trailData);
    return trailData;
  }

  /** Called when a canvas object is created locally. sessionId == classId. */
  async function sendStroke(classId, fabricObjectJson, clientId) {
    if (isLocalLiveClassId(classId)) return;
    const userId = myUserId();
    if (!userId || !classId) return;
    const strokeId = await callMutation(api.strokes.addStroke, {
      sessionId: classId,
      pageNumber: 1,
      fabricObjectJson,
    });
    if (strokeId) {
      clientIdToStrokeId.set(clientId, strokeId);
      strokeIdToClientId.set(strokeId, clientId);
    }
  }

  async function sendStrokeUpdate(clientId, fabricObjectJson) {
    if (isLocalLiveClassId(activeClassId)) return;
    const strokeId = clientIdToStrokeId.get(clientId);
    if (strokeId == null) return;
    await callMutation(api.strokes.updateStroke, { strokeId, fabricObjectJson });
  }

  /**
   * Upsert a stroke in Convex: updates if a Convex row already exists for this
   * clientId, otherwise inserts a new row. Use this for in-place mutations
   * (snap-replace, live text edits, flowchart relabels) so the same clientId
   * never accumulates multiple backend rows.
   */
  async function sendStrokeUpsert(classId, fabricObjectJson, clientId) {
    if (clientIdToStrokeId.has(clientId)) {
      return sendStrokeUpdate(clientId, fabricObjectJson);
    }
    return sendStroke(classId, fabricObjectJson, clientId);
  }

  async function sendStrokeDelete(clientId) {
    if (isLocalLiveClassId(activeClassId)) return;
    const strokeId = clientIdToStrokeId.get(clientId);
    if (strokeId == null) return;
    await callMutation(api.strokes.deleteStroke, { strokeId });
    clientIdToStrokeId.delete(clientId);
    strokeIdToClientId.delete(strokeId);
  }

  /** Invite a student by username. */
  async function sendInvite(classId, toUsername) {
    if (isLocalLiveClassId(classId)) return;
    const userId = myUserId();
    if (!userId) return;
    await callMutation(api.invites.inviteToSession, {
      sessionId: classId,
      toUsername,
    });
  }

  /** Student raises hand. */
  async function raiseHand(classId) {
    if (isLocalLiveClassId(classId)) return;
    const userId = myUserId();
    if (!userId) return;
    await callMutation(api.handraises.raiseHand, { classId });
  }

  /** Teacher acknowledges a hand raise. */
  async function acknowledgeRaise(raiseId) {
    if (isLocalLiveClassId(activeClassId)) return;
    await callMutation(api.handraises.acknowledgeHandRaise, { raiseId });
  }

  /** Teacher updates timer state. */
  async function updateTimer(classId, update) {
    if (isLocalLiveClassId(classId)) return;
    try {
      await callMutation(api.timers.updateClassTimer, {
        classId,
        mode: update.mode,
        state: update.state,
        elapsedMs: Number(update.elapsedMs),
        targetMs: Number(update.targetMs ?? 0),
        expectedVersion: Number.isFinite(update.expectedVersion) ? Number(update.expectedVersion) : undefined,
      });
    } catch (error) {
      log.warn('updateTimer failed', { classId, error: error.message });
    }
  }

  /** Teacher changes the paper background. */
  async function setBackground(classId, backgroundType) {
    if (isLocalLiveClassId(classId)) {
      setLocalClassBackground(classId, backgroundType);
      return;
    }
    await callMutation(api.liveclass.setBackground, { classId, backgroundType });
  }

  /** Teacher ends the class. */
  async function endClass(classId) {
    if (isLocalLiveClassId(classId)) {
      endLocalLiveClass(classId);
      leaveClass();
      return;
    }
    await callMutation(api.liveclass.endLiveClass, { classId });
    leaveClass();
  }

  function getActiveClassId() {
    return activeClassId;
  }

  /* ── Poll methods — Convex-backed when online, local fallback for offline ── */

  async function createPoll(classId, question, type, options, correctIndex) {
    if (isLocalLiveClassId(classId)) {
      // Offline fallback: local-only poll
      const pollId = 'poll_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
      const poll = {
        id: pollId,
        classId,
        question,
        type,
        options,
        correctIndex,
        status: 'active',
        responses: [],
        createdAt: Date.now(),
      };
      localPolls.set(pollId, poll);
      localResponses.set(pollId, []);
      onPollCreated?.(poll);
      return poll;
    }

    try {
      const pollId = await callMutation(api.polls.createPoll, {
        classId,
        question,
        type,
        options,
        correctIndex: correctIndex ?? -1,
      });
      // Subscription will fire onPollCreated
      return { id: String(pollId), classId, question, type, options, correctIndex, status: 'active', responses: [], createdAt: Date.now() };
    } catch (err) {
      log.warn('createPoll mutation failed, falling back to local', { classId, error: err.message });
      // Fallback: create locally
      const pollId = 'poll_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
      const poll = { id: pollId, classId, question, type, options, correctIndex, status: 'active', responses: [], createdAt: Date.now() };
      localPolls.set(pollId, poll);
      localResponses.set(pollId, []);
      onPollCreated?.(poll);
      return poll;
    }
  }

  async function submitPollResponse(pollId, response) {
    // Check if this is a local poll
    const localPoll = localPolls.get(pollId);
    if (localPoll) {
      if (localPoll.status !== 'active') return null;
      const resp = {
        id: 'resp_' + Date.now(),
        pollId,
        identity: myUserId() ?? 'anonymous',
        ...response,
        submittedAt: Date.now(),
      };
      const responses = localResponses.get(pollId) || [];
      responses.push(resp);
      localResponses.set(pollId, responses);
      localPoll.responses = responses;
      onPollResponseReceived?.(localPoll, resp);
      return localPoll;
    }

    // Convex poll
    if (!activeClassId) return null;
    try {
      await callMutation(api.polls.submitResponse, {
        classId: activeClassId,
        pollId,
        selectedIndex: response.selectedIndex,
        text: response.text,
      });
      // Subscription will update poll cache
      return pollCache.find(p => p.id === String(pollId) || String(p._id) === String(pollId)) ?? null;
    } catch (err) {
      log.warn('submitPollResponse mutation failed', { pollId, error: err.message });
      return null;
    }
  }

  async function closePoll(pollId) {
    // Check if this is a local poll
    const localPoll = localPolls.get(pollId);
    if (localPoll) {
      localPoll.status = 'closed';
      onPollClosed?.(localPoll);
      return localPoll;
    }

    // Convex poll
    if (!activeClassId) return null;
    try {
      await callMutation(api.polls.closePoll, {
        classId: activeClassId,
        pollId,
      });
      // Subscription will fire onPollClosed
      const poll = pollCache.find(p => p.id === String(pollId) || String(p._id) === String(pollId));
      return poll ? { ...poll, status: 'closed' } : null;
    } catch (err) {
      log.warn('closePoll mutation failed', { pollId, error: err.message });
      return null;
    }
  }

  function getPolls() {
    // Merge Convex polls and local polls
    const convexPolls = pollCache.filter(p => String(p.classId) === String(activeClassId));
    const localOnly = Array.from(localPolls.values()).filter(p => p.classId === activeClassId);
    return [...convexPolls, ...localOnly];
  }

  /* ── Present mode (local-only — no dedicated Convex table yet) ── */

  let presentState = null;

  function invitePresenter(classId, presenterIdentity, presenterName) {
    presentState = {
      classId,
      presenterIdentity,
      presenterName: presenterName ?? presenterIdentity.substring(0, 6),
      status: 'active',
    };
    onPresentStatusChanged?.(presentState);
    return presentState;
  }

  function requestPresent(classId) {
    presentState = {
      classId,
      presenterIdentity: myUserId(),
      presenterName: null,
      status: 'requesting',
    };
    onPresentStatusChanged?.(presentState);
    return presentState;
  }

  function approvePresent() {
    if (!presentState || presentState.status !== 'requesting') return null;
    presentState.status = 'active';
    onPresentStatusChanged?.(presentState);
    return presentState;
  }

  function endPresent() {
    if (!presentState) return null;
    presentState.status = 'ended';
    const ended = { ...presentState };
    presentState = null;
    onPresentStatusChanged?.(ended);
    return ended;
  }

  function getPresentState() {
    return presentState;
  }

  /**
   * Reconcile Convex strokes with the current canvas state.
   * Call after undo/redo (which use loadFromJSON and bypass individual stroke events).
   */
  async function syncFullCanvasState(classId, fabricObjects) {
    if (isLocalLiveClassId(classId)) return;
    if (!getClient() || !classId) return;

    const currentIds = new Set();
    fabricObjects.forEach(obj => {
      const cid = obj?.data?.strokeClientId;
      if (cid) currentIds.add(cid);
    });

    // Delete strokes in DB that are no longer on canvas
    const deletePromises = [];
    for (const [cid, strokeId] of clientIdToStrokeId) {
      if (!currentIds.has(cid)) {
        deletePromises.push(callMutation(api.strokes.deleteStroke, { strokeId }));
        clientIdToStrokeId.delete(cid);
        strokeIdToClientId.delete(strokeId);
      }
    }

    // Add canvas objects not yet tracked in DB
    const addPromises = [];
    const userId = myUserId();
    fabricObjects.forEach(obj => {
      const cid = obj?.data?.strokeClientId;
      if (cid && !clientIdToStrokeId.has(cid)) {
        const p = callMutation(api.strokes.addStroke, {
          sessionId: classId,
          pageNumber: 1,
          userId,
          fabricObjectJson: JSON.stringify(obj),
        }).then(strokeId => {
          if (strokeId) {
            clientIdToStrokeId.set(cid, strokeId);
            strokeIdToClientId.set(strokeId, cid);
          }
        });
        addPromises.push(p);
      }
    });

    await Promise.all([...deletePromises, ...addPromises]);
  }

  return {
    createClass,
    joinClass,
    watchClass,
    leaveClass,
    broadcastCursor,
    broadcastLaserTrail,
    sendStroke,
    sendStrokeUpdate,
    sendStrokeUpsert,
    sendStrokeDelete,
    sendInvite,
    raiseHand,
    acknowledgeRaise,
    updateTimer,
    setBackground,
    endClass,
    getActiveClassId,
    createPoll,
    submitPollResponse,
    closePoll,
    getPolls,
    invitePresenter,
    requestPresent,
    approvePresent,
    endPresent,
    getPresentState,
    syncFullCanvasState,
  };
}
