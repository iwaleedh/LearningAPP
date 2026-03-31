import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell } from 'lucide-react';
import {
    onConvexReady,
    getMyPendingInvites,
    callMutation,
    callQuery,
    subscribe,
    api,
} from '../../convex-client.js';
import { useAuth } from '../../hooks/useAuth.js';

/**
 * NotificationBell — live invite notifications in the app header.
 *
 * Shows a badge count of pending session_invite rows addressed to the
 * current user. Clicking opens a dropdown where the user can join or
 * decline each invite.
 */
export default function NotificationBell() {
    const navigate = useNavigate();
    const { isSignedIn } = useAuth();
    const [pendingInvites, setPendingInvites] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Attach Convex invite listeners once connected
    useEffect(() => {
        if (!isSignedIn) {
            setPendingInvites([]);
            return;
        }

        let unsubInvites = null;
        let cancelled = false;

        async function refresh() {
            const invites = await getMyPendingInvites();

            if (cancelled) {
                return;
            }

            setPendingInvites(invites || []);
        }

        onConvexReady(() => {
            void refresh();

            // Subscribe to invites addressed to this user
            unsubInvites?.();
            unsubInvites = subscribe(api.invites.getMyPendingInvites, {}, () => {
                void refresh();
            });
        });

        // Fallback poll every 15 s in case subscription fires are missed
        const interval = setInterval(() => {
            void refresh();
        }, 15000);

        return () => {
            cancelled = true;
            clearInterval(interval);
            unsubInvites?.();
        };
    }, [isSignedIn]);

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

    async function handleAccept(invite) {
        await callMutation(api.invites.respondToInvite, { inviteId: invite._id ?? invite.inviteId, accept: true });
        setPendingInvites(prev => prev.filter(i => (i._id ?? i.inviteId) !== (invite._id ?? invite.inviteId)));
        // Navigate to the annotation page for the session
        if (invite.sessionId) {
            const session = await callQuery(api.sessions.getSessionByStringId, { sessionId: invite.sessionId }).catch(() => null);
            if (session) {
                navigate(`/annotate/${session.paperId}?session=${invite.sessionId}`);
                setIsOpen(false);
            }
        }
    }

    async function handleDecline(invite) {
        await callMutation(api.invites.respondToInvite, { inviteId: invite._id ?? invite.inviteId, accept: false });
        setPendingInvites(prev => prev.filter(i => (i._id ?? i.inviteId) !== (invite._id ?? invite.inviteId)));
    }

    const count = pendingInvites.length;

    return (
        <div className="notification-bell-container" ref={dropdownRef}>
            <button
                type="button"
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
                                const fromName = inv.fromUsername ?? 'Someone';
                                return (
                                    <li key={String(inv._id ?? inv.inviteId)} className="notification-item">
                                        <div className="notification-item-icon">📝</div>
                                        <div className="notification-item-body">
                                            <p>
                                                <strong>{fromName}</strong> invited you to annotate together
                                            </p>
                                        </div>
                                        <div className="notification-item-actions">
                                            <button
                                                type="button"
                                                className="btn btn-primary btn-sm"
                                                onClick={() => handleAccept(inv)}
                                            >
                                                Join
                                            </button>
                                            <button
                                                type="button"
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
