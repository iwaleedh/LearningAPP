import { Identity } from 'spacetimedb';
import { DbConnection } from './spacetime/index.js';

const SPACETIMEDB_URI = import.meta.env.VITE_SPACETIMEDB_URI ||
    (import.meta.env.DEV ? 'http://localhost:3000' : 'https://maincloud.spacetimedb.com');
const SPACETIMEDB_MODULE = import.meta.env.VITE_SPACETIMEDB_MODULE ||
    (import.meta.env.DEV ? 'spacetime-backend-dev' : 'spacetime-backend-otpgp');

const CONNECT_TIMEOUT_MS = 8000; // fall back to offline after 8 s

export let client = null;
let currentIdentity = null;
let connectionCallbacks = [];
let errorCallbacks = [];
let hasRequestedRegistration = false;
let isReady = false;   // true only AFTER subscription applied
let hasErrored = false;
let lastError = null;

export async function initSpacetimeDB() {
    if (client && isReady) return client;

    // Safety: if URI looks wrong for this environment, skip silently
    if (!SPACETIMEDB_URI || SPACETIMEDB_URI === '') {
        console.warn('SpacetimeDB URI not configured — running in offline mode');
        hasErrored = true;
        lastError = new Error('No URI configured');
        errorCallbacks.forEach(cb => cb(lastError));
        errorCallbacks = [];
        return null;
    }

    return new Promise((resolve) => {
        const tokenKey = `spacetime-token-${SPACETIMEDB_URI}`;
        const token = localStorage.getItem(tokenKey) || undefined;

        // Timeout: if we haven't connected in CONNECT_TIMEOUT_MS, give up gracefully
        const timeoutId = setTimeout(() => {
            if (!isReady) {
                console.warn(`SpacetimeDB connection timed out after ${CONNECT_TIMEOUT_MS}ms — offline mode`);
                hasErrored = true;
                lastError = new Error('Connection timed out');
                errorCallbacks.forEach(cb => cb(lastError));
                errorCallbacks = [];
                resolve(null);
            }
        }, CONNECT_TIMEOUT_MS);

        const builder = DbConnection.builder()
            .withUri(SPACETIMEDB_URI)
            .withDatabaseName(SPACETIMEDB_MODULE);

        if (token) {
            builder.withToken(token);
        }

        builder.onConnect((conn, identity, tokenStr) => {
            if (import.meta.env.DEV) {
                console.log('SpacetimeDB Connected!', { identity: identity.toHexString() });
            }

            if (tokenStr) {
                localStorage.setItem(`spacetime-token-${SPACETIMEDB_URI}`, tokenStr);
            }

            client = conn;
            currentIdentity = identity;

            // Subscribe to public tables we care about
            conn.subscriptionBuilder()
                .onApplied(() => {
                    clearTimeout(timeoutId);

                    // Auto-register user if they don't exist
                    const user = Array.from(client.db.user.iter()).find(
                        u => u.identity.toHexString() === identity.toHexString()
                    );

                    if (!user && !hasRequestedRegistration) {
                        hasRequestedRegistration = true;
                        const randomUsername = 'user_' + identity.toHexString().substring(0, 6) + '_' + Date.now();
                        if (import.meta.env.DEV) {
                            console.log('Registering new user:', randomUsername);
                        }
                        client.reducers.registerUser({ username: randomUsername });
                    } else if (user) {
                        hasRequestedRegistration = true;
                    }

                    if (!isReady) {
                        isReady = true;
                        resolve(client);
                        connectionCallbacks.forEach(cb => cb(client, currentIdentity));
                        connectionCallbacks = [];
                    }
                })
                .subscribe([
                    "SELECT * FROM user",
                    "SELECT * FROM note",
                    "SELECT * FROM flashcard",
                    "SELECT * FROM note_asset",
                    "SELECT * FROM live_session WHERE status = 'active'",
                    "SELECT * FROM session_participant",
                    "SELECT * FROM session_invite",
                    "SELECT * FROM live_class_session WHERE status = 'active'",
                    "SELECT * FROM live_class_cursor",
                    "SELECT * FROM hand_raise WHERE status = 'raised'",
                    "SELECT * FROM class_timer",
                    "SELECT * FROM annotation_stroke"
                ]);
        });

        builder.onConnectError((err) => {
            clearTimeout(timeoutId);
            console.error('SpacetimeDB Connect Error:', err);
            hasErrored = true;
            lastError = err;
            errorCallbacks.forEach(cb => cb(err));
            errorCallbacks = [];
            resolve(null); // resolve with null so the app continues in offline mode
        });

        builder.onDisconnect(() => {
            if (import.meta.env.DEV) {
                console.log('SpacetimeDB Disconnected!');
            }
        });

        builder.build();
    });
}

/** Register a callback for when SpacetimeDB is fully ready (connected + subscription applied). */
export function onSpacetimeDBReady(callback) {
    if (isReady && client && currentIdentity) {
        callback(client, currentIdentity);
    } else {
        connectionCallbacks.push(callback);
    }
}

/** Register a callback for SpacetimeDB connection errors (fires immediately if already errored). */
export function onSpacetimeDBError(callback) {
    if (hasErrored) {
        callback(lastError);
    } else {
        errorCallbacks.push(callback);
    }
}

export function getCurrentIdentity() {
    return currentIdentity;
}

export function getClient() {
    return client;
}

export function getActiveSessions() {
    if (!client) return [];
    return Array.from(client.db.live_session.iter()).filter(s => s.status === 'active');
}

export function getMyParticipantSessions() {
    if (!client || !currentIdentity) return [];
    const myHex = currentIdentity.toHexString();
    return Array.from(client.db.session_participant.iter()).filter(
        p => p.userIdentity.toHexString() === myHex
    );
}

export function getMyPendingInvites() {
    if (!client || !currentIdentity) return [];
    const myHex = currentIdentity.toHexString();
    const users = Array.from(client.db.user.iter());
    const me = users.find(u => u.identity.toHexString() === myHex);
    if (!me) return [];
    return Array.from(client.db.session_invite.iter()).filter(
        inv => inv.toUsername === me.username && inv.status === 'pending'
    );
}

export function getAllUsers() {
    if (!client) return [];
    return Array.from(client.db.user.iter());
}

// ── Phase 3: Teacher role helpers ──────────────────────────────────────
export function getMyRole() {
    if (!client || !currentIdentity) return 'student';
    const myHex = currentIdentity.toHexString();
    const me = Array.from(client.db.user.iter()).find(u => u.identity.toHexString() === myHex);
    return me?.role ?? 'student';
}

export function isTeacher() {
    return getMyRole() === 'teacher';
}

export function setTeacherRole(teacher) {
    if (!client) return;
    client.reducers.setTeacherRole({ role: teacher ? 'teacher' : 'student' });
}

// ── Live Class helpers ─────────────────────────────────────────────────
export function getActiveLiveClasses() {
    if (!client) return [];
    return Array.from(client.db.live_class_session.iter()).filter(c => c.status === 'active');
}

export function getLiveClassById(classId) {
    if (!client) return null;
    return Array.from(client.db.live_class_session.iter()).find(c => c.classId === classId) ?? null;
}

export function getMyPendingLiveClassInvites() {
    if (!client || !currentIdentity) return [];
    const myHex = currentIdentity.toHexString();
    const users = Array.from(client.db.user.iter());
    const me = users.find(u => u.identity.toHexString() === myHex);
    if (!me) return [];
    // Only return pending invites whose sessionId corresponds to an active live class
    const activeClassIds = new Set(
        Array.from(client.db.live_class_session.iter())
            .filter(c => c.status === 'active')
            .map(c => c.classId)
    );
    return Array.from(client.db.session_invite.iter()).filter(
        inv => inv.toUsername === me.username && inv.status === 'pending' && activeClassIds.has(inv.sessionId)
    );
}

export function getLiveClassParticipants(classId) {
    if (!client) return [];
    return Array.from(client.db.session_participant.iter()).filter(p => p.sessionId === classId);
}

export function getLiveClassCursors(classId) {
    if (!client) return [];
    return Array.from(client.db.live_class_cursor.iter()).filter(c => c.classId === classId);
}

export function getHandRaises(classId) {
    if (!client) return [];
    return Array.from(client.db.hand_raise.iter()).filter(
        r => r.classId === classId && r.status === 'raised'
    );
}

export function getClassTimer(classId) {
    if (!client) return null;
    return Array.from(client.db.class_timer.iter()).find(t => t.classId === classId) ?? null;
}
