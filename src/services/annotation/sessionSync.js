/**
 * sessionSync.js — Real-time collaboration session management
 *
 * Bridges SpacetimeDB live session tables with the AnnotationCanvas fabric.js
 * instance. Handles all CRDT-like stroke synchronisation across clients.
 */

import { client, getCurrentIdentity } from '../../spacetime.js';

/**
 * Creates a session sync controller.
 *
 * @param {Object} callbacks
 * @param {(strokeId: bigint, pageNumber: number, fabricObjectJson: string) => void} callbacks.onStrokeAdded
 * @param {(strokeId: bigint, fabricObjectJson: string) => void} callbacks.onStrokeUpdated
 * @param {(strokeId: bigint) => void} callbacks.onStrokeDeleted
 * @param {(participants: any[]) => void} callbacks.onParticipantsChanged
 * @param {() => void} callbacks.onSessionEnded
 * @returns {{ startSession, joinSession, leaveSession, sendStroke, sendStrokeUpdate, sendStrokeDelete, sendInvite, respondToInvite, endSession, getActiveSessionId }}
 */
export function createSessionSync({
  onStrokeAdded,
  onStrokeUpdated,
  onStrokeDeleted,
  onParticipantsChanged,
  onSessionEnded,
}) {
  let activeSessionId = null;
  // Bridges local fabric clientId (string UUID) ↔ SpacetimeDB strokeId (bigint)
  const clientIdToStrokeId = new Map(); // clientId: string → strokeId: bigint
  const strokeIdToClientId = new Map(); // strokeId: bigint → clientId: string

  let strokeInsertUnsub = null;
  let strokeUpdateUnsub = null;
  let strokeDeleteUnsub = null;
  let participantInsertUnsub = null;
  let participantDeleteUnsub = null;
  let sessionUpdateUnsub = null;

  function myHex() {
    const id = getCurrentIdentity();
    return id ? id.toHexString() : null;
  }

  function attachListeners(sessionId) {
    const conn = client;
    if (!conn) return;

    strokeInsertUnsub = conn.db.annotation_stroke.onInsert((stroke) => {
      if (stroke.sessionId !== sessionId) return;
      if (stroke.userIdentity.toHexString() === myHex()) return; // our own stroke

      // Extract the clientId from the fabricObjectJson so we can track later updates
      try {
        const parsed = JSON.parse(stroke.fabricObjectJson);
        const clientId = parsed?.data?.strokeClientId;
        if (clientId) {
          clientIdToStrokeId.set(clientId, stroke.strokeId);
          strokeIdToClientId.set(stroke.strokeId, clientId);
        }
      } catch (_) {/* ignore parse error */}

      onStrokeAdded?.(stroke.strokeId, stroke.pageNumber, stroke.fabricObjectJson);
    });

    strokeUpdateUnsub = conn.db.annotation_stroke.onUpdate((_old, stroke) => {
      if (stroke.sessionId !== sessionId) return;
      if (stroke.userIdentity.toHexString() === myHex()) return;
      onStrokeUpdated?.(stroke.strokeId, stroke.fabricObjectJson);
    });

    strokeDeleteUnsub = conn.db.annotation_stroke.onDelete((stroke) => {
      if (stroke.sessionId !== sessionId) return;
      const clientId = strokeIdToClientId.get(stroke.strokeId);
      onStrokeDeleted?.(stroke.strokeId, clientId);
      if (clientId) clientIdToStrokeId.delete(clientId);
      strokeIdToClientId.delete(stroke.strokeId);
    });

    participantInsertUnsub = conn.db.session_participant.onInsert((p) => {
      if (p.sessionId !== sessionId) return;
      const all = Array.from(conn.db.session_participant.iter()).filter(
        x => x.sessionId === sessionId
      );
      onParticipantsChanged?.(all);
    });

    participantDeleteUnsub = conn.db.session_participant.onDelete((p) => {
      if (p.sessionId !== sessionId) return;
      const all = Array.from(conn.db.session_participant.iter()).filter(
        x => x.sessionId === sessionId
      );
      onParticipantsChanged?.(all);
    });

    sessionUpdateUnsub = conn.db.live_session.onUpdate((_old, session) => {
      if (session.sessionId !== sessionId) return;
      if (session.status === 'ended') {
        onSessionEnded?.();
        detachListeners();
        activeSessionId = null;
      }
    });
  }

  function detachListeners() {
    strokeInsertUnsub?.();
    strokeUpdateUnsub?.();
    strokeDeleteUnsub?.();
    participantInsertUnsub?.();
    participantDeleteUnsub?.();
    sessionUpdateUnsub?.();
    strokeInsertUnsub = strokeUpdateUnsub = strokeDeleteUnsub = null;
    participantInsertUnsub = participantDeleteUnsub = sessionUpdateUnsub = null;
  }

  /* ── Public API ─────────────────────────────────────────── */

  async function startSession(paperId, title) {
    const conn = client;
    if (!conn) throw new Error('SpacetimeDB not connected');
    conn.reducers.createLiveSession({ paperId, title });
    // The session ID will be available once the insert comes back via onInsert.
    // We watch for our own identity as host and pick up the first matching session.
    return new Promise((resolve) => {
      const unsub = conn.db.live_session.onInsert((session) => {
        if (session.hostIdentity.toHexString() === myHex() && session.status === 'active') {
          unsub();
          activeSessionId = session.sessionId;
          attachListeners(activeSessionId);
          // Seed existing participants
          const participants = Array.from(conn.db.session_participant.iter()).filter(
            p => p.sessionId === activeSessionId
          );
          onParticipantsChanged?.(participants);
          resolve(session);
        }
      });
    });
  }

  async function joinSession(sessionId) {
    const conn = client;
    if (!conn) throw new Error('SpacetimeDB not connected');
    conn.reducers.joinSession({ sessionId });
    activeSessionId = sessionId;
    attachListeners(sessionId);

    // Return existing strokes for this session so the canvas can pre-populate
    const existingStrokes = Array.from(conn.db.annotation_stroke.iter()).filter(
      s => s.sessionId === sessionId
    );
    return existingStrokes;
  }

  function leaveSession() {
    detachListeners();
    activeSessionId = null;
    clientIdToStrokeId.clear();
    strokeIdToClientId.clear();
  }

  /** Called by AnnotationCanvas when a stroke is created locally */
  function sendStroke(sessionId, pageNumber, fabricObjectJson, clientId) {
    const conn = client;
    if (!conn || !sessionId) return;
    conn.reducers.addStroke({ sessionId, pageNumber, fabricObjectJson });

    // We'll correlate the returned strokeId via the insert callback (our own strokes
    // are filtered out in the onInsert handler above, so we handle them separately here).
    const unsub = conn.db.annotation_stroke.onInsert((stroke) => {
      if (stroke.sessionId !== sessionId) return;
      if (stroke.userIdentity.toHexString() !== myHex()) return;
      try {
        const parsed = JSON.parse(stroke.fabricObjectJson);
        if (parsed?.data?.strokeClientId === clientId) {
          clientIdToStrokeId.set(clientId, stroke.strokeId);
          strokeIdToClientId.set(stroke.strokeId, clientId);
          unsub();
        }
      } catch (_) {/* ignore */}
    });
  }

  /** Called by AnnotationCanvas when a stroke is modified locally */
  function sendStrokeUpdate(clientId, fabricObjectJson) {
    const conn = client;
    if (!conn) return;
    const strokeId = clientIdToStrokeId.get(clientId);
    if (strokeId == null) return;
    conn.reducers.updateStroke({ strokeId, fabricObjectJson });
  }

  /** Called by AnnotationCanvas when a stroke is erased locally */
  function sendStrokeDelete(clientId) {
    const conn = client;
    if (!conn) return;
    const strokeId = clientIdToStrokeId.get(clientId);
    if (strokeId == null) return;
    conn.reducers.deleteStroke({ strokeId });
    clientIdToStrokeId.delete(clientId);
    strokeIdToClientId.delete(strokeId);
  }

  function sendInvite(sessionId, targetUsername) {
    const conn = client;
    if (!conn) return;
    conn.reducers.inviteToSession({ sessionId, targetUsername });
  }

  function respondToInvite(inviteId, accept) {
    const conn = client;
    if (!conn) return;
    conn.reducers.respondToInvite({ inviteId, accept });
    if (accept) {
      // session join is triggered server-side; we just need to pick up the sessionId
      const invite = Array.from(conn.db.session_invite.iter()).find(i => i.inviteId === inviteId);
      if (invite) {
        joinSession(invite.sessionId);
      }
    }
  }

  function endSession(sessionId) {
    const conn = client;
    if (!conn) return;
    conn.reducers.endSession({ sessionId });
    leaveSession();
  }

  function getActiveSessionId() {
    return activeSessionId;
  }

  return {
    startSession,
    joinSession,
    leaveSession,
    sendStroke,
    sendStrokeUpdate,
    sendStrokeDelete,
    sendInvite,
    respondToInvite,
    endSession,
    getActiveSessionId,
  };
}
