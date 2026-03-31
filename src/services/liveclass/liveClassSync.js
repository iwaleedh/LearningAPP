/**
 * liveClassSync.js — Real-time Live Class session management
 *
 * Manages the Convex sync for the Live Class feature: canvas strokes,
 * teacher cursor/laser broadcast, hand raises, timer, and participant tracking.
 * Follows the same pattern as sessionSync.js.
 */

import { getClient, getCurrentUserId, api, callMutation, callQuery, subscribe } from '../../convex-client.js';
import { logger } from '../logger/logger.js';

const log = logger.child({ component: 'liveClassSync' });

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

  // ── Poll state (local-only until Convex tables exist) ──
  const localPolls = new Map();
  const localResponses = new Map();

  function myUserId() {
    return getCurrentUserId();
  }

  function attachListeners(classId) {
    const client = getClient();
    if (!client) return;

    // ── Strokes subscription ─────────────────────────────────────
        unsubs.push(subscribe(api.strokes.getStrokesBySession, { sessionId: classId }, (strokes) => {
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
  async function createClass(title, backgroundType = 'white') {
    const userId = myUserId();
    const localClassId = `local_${Date.now()}`;

    if (!userId || !getClient()) {
      // No Convex connection — use local/demo session immediately
      activeClassId = localClassId;
      return {
        _id: localClassId,
        title,
        backgroundType,
        status: 'active',
        hostUserId: userId ?? 'local',
      };
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
      activeClassId = localClassId;
      return {
        _id: localClassId,
        title,
        backgroundType,
        status: 'active',
        hostUserId: userId,
      };
    }
  }

  /** Student joins an existing Live Class. Returns snapshot of existing strokes. */
  async function joinClass(classId) {
    const userId = myUserId();
    if (!userId || !getClient()) return [];
    activeClassId = classId;
    attachListeners(classId);
    await callMutation(api.liveclass.joinLiveClass, { classId });
    const strokes = await callQuery(api.strokes.getStrokesBySession, { sessionId: classId });
    return strokes || [];
  }

  /**
   * Teacher attaches listeners to an existing class (e.g. after navigation).
   * Returns snapshot of existing strokes.
   */
  function watchClass(classId) {
    activeClassId = classId;
    attachListeners(classId);
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
    const strokeId = clientIdToStrokeId.get(clientId);
    if (strokeId == null) return;
    await callMutation(api.strokes.updateStroke, { strokeId, fabricObjectJson });
  }

  async function sendStrokeDelete(clientId) {
    const strokeId = clientIdToStrokeId.get(clientId);
    if (strokeId == null) return;
    await callMutation(api.strokes.deleteStroke, { strokeId });
    clientIdToStrokeId.delete(clientId);
    strokeIdToClientId.delete(strokeId);
  }

  /** Invite a student by username. */
  async function sendInvite(classId, toUsername) {
    const userId = myUserId();
    if (!userId) return;
    await callMutation(api.invites.inviteToSession, {
      sessionId: classId,
      toUsername,
    });
  }

  /** Student raises hand. */
  async function raiseHand(classId) {
    const userId = myUserId();
    if (!userId) return;
    await callMutation(api.handraises.raiseHand, { classId });
  }

  /** Teacher acknowledges a hand raise. */
  async function acknowledgeRaise(raiseId) {
    await callMutation(api.handraises.acknowledgeHandRaise, { raiseId });
  }

  /** Teacher updates timer state. */
  async function updateTimer(classId, mode, state, elapsedMs, targetMs = 0) {
    await callMutation(api.timers.updateClassTimer, {
      classId,
      mode,
      state,
      elapsedMs: Number(elapsedMs),
      targetMs: Number(targetMs),
    });
  }

  /** Teacher changes the paper background. */
  async function setBackground(classId, backgroundType) {
    await callMutation(api.liveclass.setBackground, { classId, backgroundType });
  }

  /** Teacher ends the class. */
  async function endClass(classId) {
    await callMutation(api.liveclass.endLiveClass, { classId });
    leaveClass();
  }

  function getActiveClassId() {
    return activeClassId;
  }

  /* ── Poll methods (local-only — no dedicated Convex table yet) ── */

  function createPoll(classId, question, type, options, correctIndex) {
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

  function submitPollResponse(pollId, response) {
    const poll = localPolls.get(pollId);
    if (!poll || poll.status !== 'active') return null;
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
    poll.responses = responses;
    onPollResponseReceived?.(poll, resp);
    return poll;
  }

  function closePoll(pollId) {
    const poll = localPolls.get(pollId);
    if (!poll) return null;
    poll.status = 'closed';
    onPollClosed?.(poll);
    return poll;
  }

  function getPolls() {
    return Array.from(localPolls.values()).filter(p => p.classId === activeClassId);
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
