/**
 * liveClassSync.js — Real-time Live Class session management
 *
 * Manages the SpacetimeDB sync for the Live Class feature: canvas strokes,
 * teacher cursor/laser broadcast, hand raises, timer, and participant tracking.
 * Follows the same pattern as sessionSync.js.
 */

import { client, getCurrentIdentity } from '../../spacetime.js';

/**
 * Creates a live-class sync controller.
 *
 * @param {Object} callbacks
 * @param {(strokeId: bigint, fabricObjectJson: string) => void} callbacks.onStrokeAdded
 * @param {(strokeId: bigint, fabricObjectJson: string) => void} callbacks.onStrokeUpdated
 * @param {(strokeId: bigint) => void} callbacks.onStrokeDeleted
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

  let unsubs = [];

  // ── Poll state (local-only until SpacetimeDB tables exist) ──
  const localPolls = new Map(); // pollId → poll object
  const localResponses = new Map(); // pollId → response[]

  function myHex() {
    const id = getCurrentIdentity();
    return id ? id.toHexString() : null;
  }

  function collectHandRaises(classId) {
    const conn = client;
    if (!conn) return [];
    return Array.from(conn.db.hand_raise.iter()).filter(
      r => r.classId === classId && r.status === 'raised'
    );
  }

  function attachListeners(classId) {
    const conn = client;
    if (!conn) return;

    // ── Strokes ──────────────────────────────────────────────────
    unsubs.push(conn.db.annotation_stroke.onInsert((stroke) => {
      if (stroke.sessionId !== classId) return;
      if (stroke.userIdentity.toHexString() === myHex()) return;
      try {
        const parsed = JSON.parse(stroke.fabricObjectJson);
        const clientId = parsed?.data?.strokeClientId;
        if (clientId) {
          clientIdToStrokeId.set(clientId, stroke.strokeId);
          strokeIdToClientId.set(stroke.strokeId, clientId);
        }
      } catch { /* noop */ }
      onStrokeAdded?.(stroke.strokeId, stroke.fabricObjectJson);
    }));

    unsubs.push(conn.db.annotation_stroke.onUpdate((_old, stroke) => {
      if (stroke.sessionId !== classId) return;
      if (stroke.userIdentity.toHexString() === myHex()) return;
      onStrokeUpdated?.(stroke.strokeId, stroke.fabricObjectJson);
    }));

    unsubs.push(conn.db.annotation_stroke.onDelete((stroke) => {
      if (stroke.sessionId !== classId) return;
      const clientId = strokeIdToClientId.get(stroke.strokeId);
      onStrokeDeleted?.(stroke.strokeId, clientId);
      if (clientId) clientIdToStrokeId.delete(clientId);
      strokeIdToClientId.delete(stroke.strokeId);
    }));

    // ── Participants ──────────────────────────────────────────────
    const notifyParticipants = () => {
      const all = Array.from(conn.db.session_participant.iter()).filter(
        p => p.sessionId === classId
      );
      onParticipantsChanged?.(all);
    };
    unsubs.push(conn.db.session_participant.onInsert((p) => {
      if (p.sessionId !== classId) return;
      notifyParticipants();
    }));
    unsubs.push(conn.db.session_participant.onDelete((p) => {
      if (p.sessionId !== classId) return;
      notifyParticipants();
    }));

    // ── Cursor / Laser ────────────────────────────────────────────
    unsubs.push(conn.db.live_class_cursor.onInsert((cursor) => {
      if (cursor.classId !== classId) return;
      if (cursor.cursorId.toHexString() === myHex()) return;
      onCursorMoved?.({
        x: cursor.x,
        y: cursor.y,
        tool: cursor.tool,
        mode: cursor.mode ?? 'dot', // default to dot for backward compat
        identity: cursor.cursorId.toHexString()
      });
    }));
    unsubs.push(conn.db.live_class_cursor.onUpdate((_old, cursor) => {
      if (cursor.classId !== classId) return;
      if (cursor.cursorId.toHexString() === myHex()) return;
      onCursorMoved?.({
        x: cursor.x,
        y: cursor.y,
        tool: cursor.tool,
        mode: cursor.mode ?? 'dot',
        identity: cursor.cursorId.toHexString()
      });
    }));

    // ── Hand raises ───────────────────────────────────────────────
    unsubs.push(conn.db.hand_raise.onInsert((r) => {
      if (r.classId !== classId) return;
      onHandRaisesChanged?.(collectHandRaises(classId));
    }));
    unsubs.push(conn.db.hand_raise.onUpdate((_old, r) => {
      if (r.classId !== classId) return;
      onHandRaisesChanged?.(collectHandRaises(classId));
    }));

    // ── Timer ─────────────────────────────────────────────────────
    unsubs.push(conn.db.class_timer.onInsert((t) => {
      if (t.classId !== classId) return;
      onTimerUpdated?.(t);
    }));
    unsubs.push(conn.db.class_timer.onUpdate((_old, t) => {
      if (t.classId !== classId) return;
      onTimerUpdated?.(t);
    }));

    // ── Class session (background change + end) ───────────────────
    unsubs.push(conn.db.live_class_session.onUpdate((_old, session) => {
      if (session.classId !== classId) return;
      if (_old.backgroundType !== session.backgroundType) {
        onBackgroundChanged?.(session.backgroundType);
      }
      if (session.status === 'ended') {
        onSessionEnded?.();
        detachListeners();
        activeClassId = null;
      }
    }));
  }

  function detachListeners() {
    unsubs.forEach(fn => fn?.());
    unsubs = [];
  }

  /* ── Public API ────────────────────────────────────────────────── */

  /** Teacher creates a new Live Class. Returns immediately with a local session
   *  if SpacetimeDB is unavailable, or once the DB row is confirmed (1.5 s race). */
  async function createClass(title, backgroundType = 'white') {
    const localClassId = BigInt(Date.now());
    const myIdentityHex = myHex() ?? 'local';
    const localSession = {
      classId: localClassId,
      title,
      backgroundType,
      status: 'active',
      hostIdentity: { toHexString: () => myIdentityHex },
    };

    const conn = client;
    if (!conn) {
      // No SpacetimeDB connection — use local/demo session immediately
      activeClassId = localClassId;
      return localSession;
    }

    // Race: DB insert confirmation vs. 1.5 s timeout fallback
    conn.reducers.createLiveClass({ title, backgroundType });
    return Promise.race([
      new Promise((resolve) => {
        const unsub = conn.db.live_class_session.onInsert((session) => {
          if (session.hostIdentity.toHexString() === myHex() && session.status === 'active') {
            unsub();
            activeClassId = session.classId;
            attachListeners(activeClassId);
            resolve(session);
          }
        });
      }),
      new Promise(resolve => setTimeout(() => {
        activeClassId = localClassId;
        resolve(localSession);
      }, 1500)),
    ]);
  }

  /** Student joins an existing Live Class. Returns snapshot of existing strokes. */
  async function joinClass(classId) {
    const conn = client;
    if (!conn) throw new Error('SpacetimeDB not connected');
    conn.reducers.joinLiveClass({ classId });
    activeClassId = classId;
    attachListeners(classId);
    return Array.from(conn.db.annotation_stroke.iter()).filter(
      s => s.sessionId === classId
    );
  }

  function leaveClass() {
    detachListeners();
    activeClassId = null;
    clientIdToStrokeId.clear();
    strokeIdToClientId.clear();
  }

  /** Broadcast teacher's cursor/laser position (throttled to 50ms). */
  function broadcastCursor(classId, x, y, tool, mode = 'dot') {
    const now = Date.now();
    if (now - lastCursorSendTime < 50) return;
    lastCursorSendTime = now;
    // Include mode in the broadcast (some reducers may not support it yet)
    client?.reducers.updateCursor?.({ classId, x, y, tool, mode });
  }

  /** Broadcast a completed laser trail to other users. */
  function broadcastLaserTrail(classId, trailId, points) {
    // Store trail in a custom event or temporary storage for other users
    // Since we don't have a dedicated table, we'll use a simple broadcast mechanism
    // For now, we'll emit via cursor with a special marker
    if (!points || points.length < 2) return;

    // For offline/demo mode, just emit locally via callback
    // In a full implementation, this would go through SpacetimeDB
    const trailData = {
      id: trailId,
      points,
      identity: myHex(),
      createdAt: Date.now()
    };

    // Try to call reducer if it exists (future-proofing)
    client?.reducers?.addLaserTrail?.({ classId, trailId, pointsJson: JSON.stringify(points) });

    onLaserTrail?.(trailData);
    return trailData;
  }

  /** Called when a canvas object is created locally. sessionId == classId. */
  function sendStroke(classId, fabricObjectJson, clientId) {
    const conn = client;
    if (!conn || !classId) return;
    conn.reducers.addStroke({ sessionId: classId, pageNumber: 1, fabricObjectJson });
    const unsub = conn.db.annotation_stroke.onInsert((stroke) => {
      if (stroke.sessionId !== classId) return;
      if (stroke.userIdentity.toHexString() !== myHex()) return;
      try {
        const parsed = JSON.parse(stroke.fabricObjectJson);
        if (parsed?.data?.strokeClientId === clientId) {
          clientIdToStrokeId.set(clientId, stroke.strokeId);
          strokeIdToClientId.set(stroke.strokeId, clientId);
          unsub();
        }
      } catch { /* noop */ }
    });
  }

  function sendStrokeUpdate(clientId, fabricObjectJson) {
    const conn = client;
    if (!conn) return;
    const strokeId = clientIdToStrokeId.get(clientId);
    if (strokeId == null) return;
    conn.reducers.updateStroke({ strokeId, fabricObjectJson });
  }

  function sendStrokeDelete(clientId) {
    const conn = client;
    if (!conn) return;
    const strokeId = clientIdToStrokeId.get(clientId);
    if (strokeId == null) return;
    conn.reducers.deleteStroke({ strokeId });
    clientIdToStrokeId.delete(clientId);
    strokeIdToClientId.delete(strokeId);
  }

  /** Invite a student by username. */
  function sendInvite(classId, toUsername) {
    client?.reducers.inviteToSession({ sessionId: classId, toUsername });
  }

  /** Student raises hand. */
  function raiseHand(classId) {
    client?.reducers.raiseHand({ classId });
  }

  /** Teacher acknowledges a hand raise. */
  function acknowledgeRaise(raiseId) {
    client?.reducers.acknowledgeHandRaise({ raiseId });
  }

  /** Teacher updates timer state. */
  function updateTimer(classId, mode, state, elapsedMs, targetMs = BigInt(0)) {
    client?.reducers.updateClassTimer({ classId, mode, state, elapsedMs, targetMs });
  }

  /** Teacher changes the paper background. */
  function setBackground(classId, backgroundType) {
    client?.reducers.setBackground({ classId, backgroundType });
  }

  /** Teacher ends the class. */
  function endClass(classId) {
    client?.reducers.endLiveClass({ classId });
    leaveClass();
  }

  function getActiveClassId() {
    return activeClassId;
  }

  /* ── Poll methods (local-only fallback; replace with SpacetimeDB reducers later) ── */

  /** Teacher creates a poll. Returns the new poll object. */
  function createPoll(classId, question, type, options, correctIndex) {
    const pollId = 'poll_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
    const poll = {
      id: pollId,
      classId,
      question,
      type,          // 'mcq' | 'truefalse' | 'freetext'
      options,       // string[]
      correctIndex,  // number (-1 if none)
      status: 'active',
      responses: [],
      createdAt: Date.now(),
    };
    localPolls.set(pollId, poll);
    localResponses.set(pollId, []);

    // Try SpacetimeDB reducer if available
    client?.reducers?.createPoll?.({ classId, question, type, optionsJson: JSON.stringify(options), correctIndex });

    onPollCreated?.(poll);
    return poll;
  }

  /** Student submits a response. Returns the updated poll. */
  function submitPollResponse(pollId, response) {
    const poll = localPolls.get(pollId);
    if (!poll || poll.status !== 'active') return null;

    const resp = {
      id: 'resp_' + Date.now(),
      pollId,
      identity: myHex() ?? 'anonymous',
      ...response, // { selectedIndex } or { text }
      submittedAt: Date.now(),
    };

    const responses = localResponses.get(pollId) || [];
    responses.push(resp);
    localResponses.set(pollId, responses);
    poll.responses = responses;

    client?.reducers?.submitPollResponse?.({ pollId, responseJson: JSON.stringify(response) });

    onPollResponseReceived?.(poll, resp);
    return poll;
  }

  /** Teacher closes a poll. Returns the final poll object. */
  function closePoll(pollId) {
    const poll = localPolls.get(pollId);
    if (!poll) return null;
    poll.status = 'closed';

    client?.reducers?.closePoll?.({ pollId });

    onPollClosed?.(poll);
    return poll;
  }

  /** Get all polls for the active class. */
  function getPolls() {
    return Array.from(localPolls.values()).filter(p => p.classId === activeClassId);
  }

  /* ── Present mode (local-only fallback; replace with SpacetimeDB later) ── */

  let presentState = null; // { classId, presenterIdentity, presenterName, status }

  /** Teacher invites a student to present. */
  function invitePresenter(classId, presenterIdentity, presenterName) {
    presentState = {
      classId,
      presenterIdentity,
      presenterName: presenterName ?? presenterIdentity.substring(0, 6),
      status: 'active',
    };
    client?.reducers?.invitePresenter?.({ classId, presenterIdentity });
    onPresentStatusChanged?.(presentState);
    return presentState;
  }

  /** Student requests to present. */
  function requestPresent(classId) {
    presentState = {
      classId,
      presenterIdentity: myHex(),
      presenterName: null,
      status: 'requesting',
    };
    client?.reducers?.requestPresent?.({ classId });
    onPresentStatusChanged?.(presentState);
    return presentState;
  }

  /** Teacher approves a pending present request. */
  function approvePresent(classId) {
    if (!presentState || presentState.status !== 'requesting') return null;
    presentState.status = 'active';
    client?.reducers?.approvePresent?.({ classId });
    onPresentStatusChanged?.(presentState);
    return presentState;
  }

  /** Teacher or presenter ends the presentation. */
  function endPresent(classId) {
    if (!presentState) return null;
    presentState.status = 'ended';
    const ended = { ...presentState };
    presentState = null;
    client?.reducers?.endPresent?.({ classId });
    onPresentStatusChanged?.(ended);
    return ended;
  }

  /** Get current present state. */
  function getPresentState() {
    return presentState;
  }

  return {
    createClass,
    joinClass,
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
  };
}
