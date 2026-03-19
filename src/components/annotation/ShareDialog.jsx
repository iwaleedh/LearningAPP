import { useState, useEffect, useRef } from 'react';
import { getAllUsers } from '../../spacetime.js';

/**
 * ShareDialog — modal for managing a live collaborative annotation session.
 *
 * Props:
 *   paper            — current paper object { id, title }
 *   activeSession    — live_session row or null
 *   participants     — session_participant rows[]
 *   pendingInvites   — session_invite rows[] (incoming, status='pending')
 *   myIdentityHex    — string hex of the current user's identity
 *   onCreateSession  — () => void
 *   onInviteUser     — (username: string) => void
 *   onRespondInvite  — (inviteId: bigint, accept: boolean) => void
 *   onEndSession     — () => void
 *   onClose          — () => void
 */
export default function ShareDialog({
    paper,
    activeSession,
    participants,
    pendingInvites,
    myIdentityHex,
    onCreateSession,
    onInviteUser,
    onRespondInvite,
    onEndSession,
    onClose,
}) {
    const [tab, setTab] = useState('people');   // 'people' | 'invite'
    const [inviteSearch, setInviteSearch] = useState('');
    const [allUsers, setAllUsers] = useState([]);
    const [copied, setCopied] = useState(false);
    const inputRef = useRef(null);

    // Load all users once
    useEffect(() => {
        setAllUsers(getAllUsers());
    }, [activeSession]);

    const isHost = activeSession?.hostIdentity?.toHexString() === myIdentityHex;
    const amParticipant = participants.some(p => p.userIdentity?.toHexString() === myIdentityHex);

    const filteredUsers = allUsers.filter(u =>
        u.identity?.toHexString() !== myIdentityHex &&
        u.username?.toLowerCase().includes(inviteSearch.toLowerCase()) &&
        !participants.some(p => p.userIdentity?.toHexString() === u.identity?.toHexString())
    );

    function copyLink() {
        const url = new URL(window.location.href);
        url.searchParams.set('session', String(activeSession.sessionId));
        navigator.clipboard.writeText(url.toString()).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    }

    function handleInvite(username) {
        onInviteUser(username);
        setInviteSearch('');
        inputRef.current?.focus();
    }

    return (
        <div className="share-dialog-overlay" onClick={onClose}>
            <div className="share-dialog card" onClick={e => e.stopPropagation()}>
                {/* ── Header ── */}
                <div className="share-dialog-header">
                    <div>
                        <h3>Live Collaboration</h3>
                        <p className="share-dialog-sub">
                            {paper?.title ?? 'Annotate together in real time'}
                        </p>
                    </div>
                    <button className="btn btn-ghost btn-icon" onClick={onClose} aria-label="Close">✕</button>
                </div>

                {/* ── Pending invites banner ── */}
                {pendingInvites.length > 0 && (
                    <div className="share-invites-banner">
                        {pendingInvites.map(inv => {
                            const fromUser = allUsers.find(
                                u => u.identity?.toHexString() === inv.fromIdentity?.toHexString()
                            );
                            const fromName = fromUser?.username ?? 'Someone';
                            const session = null; // session title comes from activeSession or we can display the ID
                            return (
                                <div key={String(inv.inviteId)} className="share-invite-row">
                                    <span>
                                        <strong>{fromName}</strong> invited you to a live session
                                    </span>
                                    <div className="share-invite-actions">
                                        <button
                                            className="btn btn-primary btn-sm"
                                            onClick={() => onRespondInvite(inv.inviteId, true)}
                                        >
                                            Accept
                                        </button>
                                        <button
                                            className="btn btn-ghost btn-sm"
                                            onClick={() => onRespondInvite(inv.inviteId, false)}
                                        >
                                            Decline
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* ── No active session ── */}
                {!activeSession && (
                    <div className="share-dialog-body share-dialog-start">
                        <div className="share-start-icon">🔴</div>
                        <p>Start a live session to annotate together in real time with classmates.</p>
                        <button className="btn btn-primary" onClick={onCreateSession}>
                            Start Live Session
                        </button>
                    </div>
                )}

                {/* ── Active session ── */}
                {activeSession && (
                    <>
                        {/* Session status bar */}
                        <div className="share-session-bar">
                            <span className="share-live-dot" />
                            <span className="share-session-title">{activeSession.title}</span>
                            <span className="share-participant-count">
                                {participants.length} participant{participants.length !== 1 ? 's' : ''}
                            </span>
                        </div>

                        {/* Tabs */}
                        <div className="share-dialog-tabs">
                            <button
                                className={`share-tab${tab === 'people' ? ' active' : ''}`}
                                onClick={() => setTab('people')}
                            >
                                People ({participants.length})
                            </button>
                            <button
                                className={`share-tab${tab === 'invite' ? ' active' : ''}`}
                                onClick={() => setTab('invite')}
                            >
                                Invite
                            </button>
                        </div>

                        {/* Tab: People */}
                        {tab === 'people' && (
                            <div className="share-dialog-body">
                                <ul className="share-participant-list">
                                    {participants.map(p => {
                                        const user = allUsers.find(
                                            u => u.identity?.toHexString() === p.userIdentity?.toHexString()
                                        );
                                        const isMe = p.userIdentity?.toHexString() === myIdentityHex;
                                        return (
                                            <li key={String(p.participantId)} className="share-participant-row">
                                                <div className="share-participant-avatar">
                                                    {(user?.username?.[0] ?? '?').toUpperCase()}
                                                </div>
                                                <div className="share-participant-info">
                                                    <span className="share-participant-name">
                                                        {user?.username ?? 'Unknown'}
                                                        {isMe ? ' (you)' : ''}
                                                    </span>
                                                    <span className="share-participant-role badge">
                                                        {p.role}
                                                    </span>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>

                                {/* Copy link */}
                                <div className="share-copy-row">
                                    <input
                                        className="share-link-input"
                                        readOnly
                                        value={(() => {
                                            const url = new URL(window.location.href);
                                            url.searchParams.set('session', String(activeSession.sessionId));
                                            return url.toString();
                                        })()}
                                    />
                                    <button className="btn btn-secondary btn-sm" onClick={copyLink}>
                                        {copied ? '✓ Copied' : 'Copy Link'}
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Tab: Invite */}
                        {tab === 'invite' && (
                            <div className="share-dialog-body">
                                <div className="share-search-row">
                                    <input
                                        ref={inputRef}
                                        className="share-search-input"
                                        placeholder="Search by username…"
                                        value={inviteSearch}
                                        onChange={e => setInviteSearch(e.target.value)}
                                        autoFocus
                                    />
                                </div>
                                <ul className="share-search-results">
                                    {filteredUsers.length === 0 && (
                                        <li className="share-search-empty">
                                            {inviteSearch ? 'No matching users found.' : 'Start typing to search users.'}
                                        </li>
                                    )}
                                    {filteredUsers.map(u => (
                                        <li key={u.identity?.toHexString()} className="share-search-result-row">
                                            <div className="share-participant-avatar">
                                                {u.username?.[0]?.toUpperCase() ?? '?'}
                                            </div>
                                            <span className="share-participant-name">{u.username}</span>
                                            <button
                                                className="btn btn-primary btn-sm"
                                                onClick={() => handleInvite(u.username)}
                                            >
                                                Invite
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Footer actions */}
                        {isHost && (
                            <div className="share-dialog-footer">
                                <button className="btn btn-ghost btn-sm share-end-btn" onClick={onEndSession}>
                                    End Session for Everyone
                                </button>
                            </div>
                        )}
                        {!isHost && amParticipant && (
                            <div className="share-dialog-footer">
                                <button className="btn btn-ghost btn-sm" onClick={onClose}>
                                    Leave Session
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
