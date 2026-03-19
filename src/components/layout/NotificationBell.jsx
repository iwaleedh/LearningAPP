import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell } from 'lucide-react';
import { onSpacetimeDBReady, getMyPendingInvites, getClient } from '../../spacetime.js';

/**
 * NotificationBell — live invite notifications in the app header.
 *
 * Shows a badge count of pending session_invite rows addressed to the
 * current user. Clicking opens a dropdown where the user can join or
 * decline each invite.
 */
export default function NotificationBell() {
    const navigate = useNavigate();
    const [pendingInvites, setPendingInvites] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Attach SpacetimeDB invite listeners once connected
    useEffect(() => {
        function refresh() {
            setPendingInvites(getMyPendingInvites());
            const conn = getClient();
            if (conn) setAllUsers(Array.from(conn.db.user.iter()));
        }

        onSpacetimeDBReady(() => {
            refresh();
            const conn = getClient();
            if (!conn) return;
            // Reactively update on any invite change
            conn.db.session_invite.onInsert(refresh);
            conn.db.session_invite.onUpdate(refresh);
            conn.db.session_invite.onDelete(refresh);
        });

        // Fallback poll every 15 s in case subscription fires are missed
        const interval = setInterval(refresh, 15000);
        return () => clearInterval(interval);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        if (!isOpen) return;
        function onOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', onOutside);
        return () => document.removeEventListener('mousedown', onOutside);
    }, [isOpen]);

    function handleAccept(invite) {
        const conn = getClient();
        if (!conn) return;
        conn.reducers.respondToInvite({ inviteId: invite.inviteId, accept: true });
        setPendingInvites(prev => prev.filter(i => i.inviteId !== invite.inviteId));
        // Navigate to the annotation page for the session
        const session = Array.from(conn.db.live_session.iter()).find(
            s => s.sessionId === invite.sessionId
        );
        if (session) {
            navigate(`/annotate/${session.paperId}?session=${String(session.sessionId)}`);
            setIsOpen(false);
        }
    }

    function handleDecline(invite) {
        const conn = getClient();
        if (!conn) return;
        conn.reducers.respondToInvite({ inviteId: invite.inviteId, accept: false });
        setPendingInvites(prev => prev.filter(i => i.inviteId !== invite.inviteId));
    }

    const count = pendingInvites.length;

    return (
        <div className="notification-bell-container" ref={dropdownRef}>
            <button
                className="btn btn-icon notification-btn"
                title={count > 0 ? `${count} pending invite${count > 1 ? 's' : ''}` : 'Notifications'}
                onClick={() => setIsOpen(prev => !prev)}
                aria-label="Notifications"
                aria-expanded={isOpen}
            >
                <Bell size={20} />
                {count > 0 && (
                    <span className="notification-badge" aria-hidden="true">
                        {count > 9 ? '9+' : count}
                    </span>
                )}
            </button>

            {isOpen && (
                <div className="notification-dropdown card" role="dialog" aria-label="Notifications">
                    <div className="notification-dropdown-header">
                        <h4>Notifications</h4>
                        {count > 0 && <span className="badge">{count} new</span>}
                    </div>

                    {count === 0 ? (
                        <div className="notification-empty">
                            <span>🔔</span>
                            <p>No new notifications</p>
                        </div>
                    ) : (
                        <ul className="notification-list">
                            {pendingInvites.map(inv => {
                                const fromUser = allUsers.find(
                                    u => u.identity?.toHexString() === inv.fromIdentity?.toHexString()
                                );
                                const fromName = fromUser?.username ?? 'Someone';
                                return (
                                    <li key={String(inv.inviteId)} className="notification-item">
                                        <div className="notification-item-icon">📝</div>
                                        <div className="notification-item-body">
                                            <p>
                                                <strong>{fromName}</strong> invited you to annotate together
                                            </p>
                                        </div>
                                        <div className="notification-item-actions">
                                            <button
                                                className="btn btn-primary btn-sm"
                                                onClick={() => handleAccept(inv)}
                                            >
                                                Join
                                            </button>
                                            <button
                                                className="btn btn-ghost btn-sm"
                                                onClick={() => handleDecline(inv)}
                                            >
                                                Decline
                                            </button>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
}
