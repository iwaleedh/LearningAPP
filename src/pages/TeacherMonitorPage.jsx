import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { initSpacetimeDB, getClient, isTeacher, getAllUsers } from '../spacetime.js';
import './Pages.css';

function formatDuration(createdAtMicros) {
    // SpacetimeDB timestamps are microseconds since epoch
    const startMs = Number(createdAtMicros) / 1000;
    const seconds = Math.floor((Date.now() - startMs) / 1000);
    if (seconds < 60) return `${seconds}s`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m`;
    return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
}

export default function TeacherMonitorPage() {
    const navigate = useNavigate();
    const [sessions, setSessions] = useState([]);
    const [participants, setParticipants] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const [spaceReady, setSpaceReady] = useState(false);
    const [, setTick] = useState(0); // force re-render every 5s for duration updates

    // Init SpacetimeDB + attach live listeners
    useEffect(() => {
        initSpacetimeDB()
            .then(() => setSpaceReady(true))
            .catch(() => { /* offline — show empty state */ });
    }, []);

    useEffect(() => {
        if (!spaceReady) return;
        const conn = getClient();
        if (!conn) return;

        function refresh() {
            setSessions(Array.from(conn.db.live_session.iter()).filter(x => x.status === 'active'));
            setParticipants(Array.from(conn.db.session_participant.iter()));
            setAllUsers(getAllUsers());
        }

        refresh();

        const unsubSessionInsert = conn.db.live_session.onInsert(refresh);
        const unsubSessionUpdate = conn.db.live_session.onUpdate(refresh);
        const unsubSessionDelete = conn.db.live_session.onDelete(refresh);
        const unsubPartInsert   = conn.db.session_participant.onInsert(refresh);
        const unsubPartDelete   = conn.db.session_participant.onDelete(refresh);
        const unsubUserUpdate   = conn.db.user.onUpdate(refresh);

        return () => {
            unsubSessionInsert?.();
            unsubSessionUpdate?.();
            unsubSessionDelete?.();
            unsubPartInsert?.();
            unsubPartDelete?.();
            unsubUserUpdate?.();
        };
    }, [spaceReady]);

    // Tick every 5 s so duration labels stay fresh
    useEffect(() => {
        const t = setInterval(() => setTick(n => n + 1), 5000);
        return () => clearInterval(t);
    }, []);

    function dropIn(session) {
        navigate(`/annotate/${session.paperId}?session=${String(session.sessionId)}`);
    }

    return (
        <div className="animate-fade-in">
            <div className="teacher-monitor-header">
                <div>
                    <h1>Teacher Monitor</h1>
                    <p className="teacher-monitor-subtitle">
                        Watch students annotate past papers live in real time.
                    </p>
                </div>
                <span className="badge teacher-badge">👩‍🏫 Teacher Mode</span>
            </div>

            {/* ── Connecting ── */}
            {!spaceReady && (
                <div className="card teacher-monitor-loading">
                    <div className="annotate-spinner" />
                    <p>Connecting to live server…</p>
                </div>
            )}

            {/* ── Empty state ── */}
            {spaceReady && sessions.length === 0 && (
                <div className="teacher-monitor-empty card">
                    <div className="teacher-monitor-empty-icon">📚</div>
                    <h3>No active sessions right now</h3>
                    <p>
                        When students start a "Do it Live" session on a past paper,
                        their session will appear here. You can drop in to observe or annotate.
                    </p>
                </div>
            )}

            {/* ── Session grid ── */}
            {spaceReady && sessions.length > 0 && (
                <div className="teacher-session-grid">
                    {sessions.map(session => {
                        const sessionParticipants = participants.filter(
                            p => p.sessionId === session.sessionId
                        );
                        const host = allUsers.find(
                            u => u.identity?.toHexString() === session.hostIdentity?.toHexString()
                        );

                        return (
                            <div key={String(session.sessionId)} className="teacher-session-card card">
                                {/* Live indicator row */}
                                <div className="teacher-session-card-header">
                                    <span className="teacher-live-dot" />
                                    <span className="teacher-live-label">LIVE</span>
                                    <span className="teacher-session-duration">
                                        {formatDuration(session.createdAt)}
                                    </span>
                                </div>

                                {/* Session info */}
                                <div className="teacher-session-info">
                                    <h4 className="teacher-session-title">{session.title}</h4>
                                    <p className="teacher-session-host">
                                        Started by <strong>{host?.username ?? 'Unknown'}</strong>
                                    </p>
                                </div>

                                {/* Participant avatars */}
                                <div className="teacher-session-participants">
                                    {sessionParticipants.slice(0, 5).map(p => {
                                        const user = allUsers.find(
                                            u => u.identity?.toHexString() === p.userIdentity?.toHexString()
                                        );
                                        const initial = (user?.username?.[0] ?? '?').toUpperCase();
                                        return (
                                            <div
                                                key={String(p.participantId)}
                                                className="teacher-participant-avatar"
                                                title={user?.username ?? 'Unknown'}
                                            >
                                                {initial}
                                            </div>
                                        );
                                    })}
                                    {sessionParticipants.length > 5 && (
                                        <div className="teacher-participant-avatar teacher-participant-overflow">
                                            +{sessionParticipants.length - 5}
                                        </div>
                                    )}
                                    <span className="teacher-participant-count">
                                        {sessionParticipants.length}{' '}
                                        participant{sessionParticipants.length !== 1 ? 's' : ''}
                                    </span>
                                </div>

                                {/* Drop in button */}
                                <button
                                    className="btn btn-primary btn-sm teacher-dropin-btn"
                                    onClick={() => dropIn(session)}
                                >
                                    👁 Drop In
                                </button>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
