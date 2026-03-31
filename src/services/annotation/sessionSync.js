/**
 * sessionSync.js — Real-time collaboration session management
 *
 * Bridges Convex live session tables with the AnnotationCanvas fabric.js
 * instance. Handles all CRDT-like stroke synchronisation across clients.
 */

import { getClient, getCurrentUserId, api, callMutation, callQuery, subscribe } from '../../convex-client.js';

/**
 * Creates a session sync controller.
 *
 * @param {Object} callbacks
 * @param {(strokeId: string, pageNumber: number, fabricObjectJson: string) => void} callbacks.onStrokeAdded
 * @param {(strokeId: string, fabricObjectJson: string) => void} callbacks.onStrokeUpdated
 * @param {(strokeId: string) => void} callbacks.onStrokeDeleted
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
  // Bridges local fabric clientId (string UUID) ↔ Convex stroke _id (string)
  const clientIdToStrokeId = new Map(); // clientId: string → strokeId: string
  const strokeIdToClientId = new Map(); // strokeId: string → clientId: string

  // Track known strokes so we can detect adds/updates/deletes from query diffs
  let knownStrokes = new Map(); // strokeId → { fabricObjectJson }

  // Unsubscribe functions for Convex subscriptions
  let unsubStrokes = null;
  let unsubParticipants = null;
  let unsubSession = null;

  function myUserId() {
    return getCurrentUserId();
  }

  function attachListeners(sessionId) {
    const client = getClient();
    if (!client) return;

    // Subscribe to strokes for this session
        unsubStrokes = subscribe(api.strokes.getStrokesBySession, { sessionId }, (strokes) => {
            const newMap = new Map();
            for (const stroke of strokes) {
                newMap.set(stroke._id, stroke);

                if (!knownStrokes.has(stroke._id)) {
                    // New stroke
                    if (stroke.userId !== myUserId()) {
                        try {
                            const parsed = JSON.parse(stroke.fabricObjectJson);
                            const clientId = parsed?.data?.strokeClientId;
                            if (clientId) {
                                strokeIdToClientId.set(stroke._id, clientId);
                            }
                        } catch {/* ignore */}
                        onStrokeAdded?.(stroke._id, stroke.pageNumber, stroke.fabricObjectJson);
                    }
        } else {
          // Possibly updated
          const old = knownStrokes.get(stroke._id);
          if (old.fabricObjectJson !== stroke.fabricObjectJson && stroke.userId !== myUserId()) {
            onStrokeUpdated?.(stroke._id, stroke.fabricObjectJson);
          }
        }
      }
      // Check for deletions
      for (const [id] of knownStrokes) {
        if (!newMap.has(id)) {
          const clientId = strokeIdToClientId.get(id);
          onStrokeDeleted?.(id, clientId);
          if (clientId) clientIdToStrokeId.delete(clientId);
          strokeIdToClientId.delete(id);
        }
      }
      knownStrokes = newMap;
    });

    // Subscribe to participants
    unsubParticipants = subscribe(api.sessions.getParticipants, { sessionId }, (participants) => {
      onParticipantsChanged?.(participants);
    });

    // Subscribe to session status
    unsubSession = subscribe(api.sessions.getSessionByStringId, { sessionId }, (session) => {
      if (session && session.status === 'ended') {
        onSessionEnded?.();
        detachListeners();
        activeSessionId = null;
      }
    });
  }

  function detachListeners() {
    unsubStrokes?.();
    unsubParticipants?.();
    unsubSession?.();
    unsubStrokes = unsubParticipants = unsubSession = null;
    knownStrokes = new Map();
  }

  /* ── Public API ─────────────────────────────────────────── */

  async function startSession(paperId, title) {
    const userId = myUserId();
    if (!userId) throw new Error('Not connected');
    const sessionId = await callMutation(api.sessions.createLiveSession, {
      paperId,
      title,
    });
    activeSessionId = sessionId;
    attachListeners(sessionId);
    const participants = await callQuery(api.sessions.getParticipants, { sessionId });
    onParticipantsChanged?.(participants || []);
    // Return a session-like object
    const session = await callQuery(api.sessions.getSession, { sessionId });
    return session;
  }

  async function joinSession(sessionId) {
    const userId = myUserId();
    if (!userId) throw new Error('Not connected');
    await callMutation(api.sessions.joinSession, { sessionId });
    activeSessionId = sessionId;
    attachListeners(sessionId);

    // Return existing strokes for pre-population
    const existingStrokes = await callQuery(api.strokes.getStrokesBySession, { sessionId });
    return existingStrokes || [];
  }

  function leaveSession() {
    detachListeners();
    activeSessionId = null;
    clientIdToStrokeId.clear();
    strokeIdToClientId.clear();
  }

  /** Called by AnnotationCanvas when a stroke is created locally */
  async function sendStroke(sessionId, pageNumber, fabricObjectJson, clientId) {
    const userId = myUserId();
    if (!userId || !sessionId) return;
    const strokeId = await callMutation(api.strokes.addStroke, {
      sessionId,
      pageNumber,
      fabricObjectJson,
    });
    if (strokeId) {
      clientIdToStrokeId.set(clientId, strokeId);
      strokeIdToClientId.set(strokeId, clientId);
    }
  }

  /** Called by AnnotationCanvas when a stroke is modified locally */
  async function sendStrokeUpdate(clientId, fabricObjectJson) {
    const strokeId = clientIdToStrokeId.get(clientId);
    if (strokeId == null) return;
    await callMutation(api.strokes.updateStroke, { strokeId, fabricObjectJson });
  }

  /** Called by AnnotationCanvas when a stroke is erased locally */
  async function sendStrokeDelete(clientId) {
    const strokeId = clientIdToStrokeId.get(clientId);
    if (strokeId == null) return;
    await callMutation(api.strokes.deleteStroke, { strokeId });
    clientIdToStrokeId.delete(clientId);
    strokeIdToClientId.delete(strokeId);
  }

  async function sendInvite(sessionId, targetUser) {
    const userId = myUserId();
    if (!userId) return;
    await callMutation(api.invites.inviteToSession, {
      sessionId,
      toUserId: targetUser?.userId,
      toUsername: targetUser?.username || '',
    });
  }

  async function respondToInvite(inviteId, accept) {
    const userId = myUserId();
    if (!userId) return;
    await callMutation(api.invites.respondToInvite, { inviteId, accept });
    if (accept) {
      // Look up invite to get sessionId, then join
      // The server-side mutation already handles joining, but we also need to attach listeners
      // We'll rely on the invite's sessionId — but we need it from the caller
    }
  }

  async function endSession(sessionId) {
    await callMutation(api.sessions.endSession, { sessionId });
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
