import { useState, lazy, Suspense } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
    BookOpen, FlaskConical, FileQuestion, GraduationCap,
    LayoutDashboard, Settings, X,
    Brain, Trophy, Zap, UserPlus, Radio, Shield
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth.js';
import { createLiveClassSync } from '../../services/liveclass/liveClassSync.js';
import './Layout.css';

const JoinClassModal = lazy(() => import('../liveclass/JoinClassModal.jsx'));
const SessionStartModal = lazy(() => import('../liveclass/SessionStartModal.jsx'));

const navItems = [
    { path: '/', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/notes', label: 'Notes', icon: BookOpen },
    { path: '/exercises', label: 'Exercises', icon: FlaskConical },
    { path: '/past-papers', label: 'Past Papers', icon: FileQuestion },
    { path: '/flashcards', label: 'Flashcards', icon: Brain },
    { path: '/progress', label: 'Progress', icon: Trophy },
    { path: '/mistakes', label: 'Mistake Bank', icon: GraduationCap },
];

export default function Sidebar({ isOpen, onToggle }) {
    const location = useLocation();
    const navigate = useNavigate();
    const { isAccessReady, role, isAdmin } = useAuth();
    const [showJoinModal, setShowJoinModal] = useState(false);
    const [showStartModal, setShowStartModal] = useState(false);
    const [startError, setStartError] = useState('');
    const isTeacher = role === 'teacher';
    const startBlockedReason = !isAccessReady
        ? 'Checking your account access. Try again in a moment.'
        : 'Only teacher accounts can create live classes.';

    const handleStartClass = async (title, backgroundType) => {
        if (!isTeacher) {
            const error = new Error(startBlockedReason);
            setStartError(error.message);
            throw error;
        }

        const sync = createLiveClassSync({ onSessionEnded: () => {} });
        try {
            setStartError('');
            const session = await sync.createClass(title, backgroundType, { actorRole: role });
            if (!session) {
                throw new Error('Could not create a live class right now. Please try again.');
            }

            const navState = {
                session: {
                    classId: session._id.toString(),
                    title: session.title,
                    backgroundType: session.backgroundType,
                    status: session.status,
                    hostIdentity: session.hostUserId ?? 'local',
                    joinCode: session.joinCode,
                },
            };
            navigate(`/live/${session._id}`, { state: navState });
            setShowStartModal(false);
            return session;
        } catch (err) {
            setStartError(err?.message || 'Failed to create a live class.');
            if (import.meta.env.DEV) console.error('[LiveClass] Failed to create session:', err);
            throw err;
        }
    };

    return (
        <>
            {/* Mobile overlay */}
            {isOpen && (
                <div className="sidebar-overlay" onClick={onToggle} />
            )}

            <aside id="app-sidebar" className={`app-sidebar ${isOpen ? 'open' : ''}`} aria-label="Main navigation">
                {/* Logo */}
                <div className="sidebar-header">
                    <Link to="/" className="sidebar-logo">
                        <div className="logo-icon">
                            <BookOpen size={24} />
                        </div>
                        <div className="logo-text">
                            <span className="logo-title">Living Textbook</span>
                            <span className="logo-subtitle">Interactive Learning</span>
                        </div>
                    </Link>
                    <button className="btn btn-icon sidebar-close" onClick={onToggle} aria-label="Close sidebar">
                        <X size={20} aria-hidden="true" />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="sidebar-nav">
                    <div className="nav-section-label">Study</div>
                    {navItems.map(item => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path ||
                            (item.path !== '/' && location.pathname.startsWith(item.path));
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`nav-item ${isActive ? 'active' : ''}`}
                                onClick={() => window.innerWidth < 1024 && onToggle()}
                            >
                                <Icon size={18} />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}

                    <div className="nav-divider" />
                    {(isTeacher || isAdmin) && (
                        <>
                            <div className="nav-section-label">Admin</div>
                            {isTeacher && (
                                <Link
                                    to="/teacher"
                                    className={`nav-item ${location.pathname.startsWith('/teacher') ? 'active' : ''}`}
                                    onClick={() => window.innerWidth < 1024 && onToggle()}
                                >
                                    <LayoutDashboard size={18} />
                                    <span>Teacher Dashboard</span>
                                </Link>
                            )}
                            {isAdmin && (
                                <Link
                                    to="/admin"
                                    className={`nav-item ${location.pathname === '/admin' ? 'active' : ''}`}
                                    onClick={() => window.innerWidth < 1024 && onToggle()}
                                >
                                    <Shield size={18} />
                                    <span>Admin Panel</span>
                                </Link>
                            )}
                            <div className="nav-divider" />
                        </>
                    )}

                    <div className="nav-section-label">Live Class</div>
                    <button
                        className={`nav-item ${showStartModal ? 'active' : ''}`}
                        onClick={() => {
                            if (!isTeacher || !isAccessReady) {
                                setStartError(startBlockedReason);
                                return;
                            }
                            setStartError('');
                            setShowStartModal(true);
                            if (window.innerWidth < 1024) onToggle();
                        }}
                        title={isTeacher ? 'Create and start a new live class' : startBlockedReason}
                        disabled={!isTeacher || !isAccessReady}
                    >
                        <Radio size={18} />
                        <span>Create Live Class</span>
                    </button>
                    <button
                        className={`nav-item ${location.pathname.startsWith('/live') ? 'active' : ''}`}
                        onClick={() => { setShowJoinModal(true); if (window.innerWidth < 1024) onToggle(); }}
                        title="Join a live class with a code"
                    >
                        <UserPlus size={18} />
                        <span>Join Live Class</span>
                    </button>

                    <div className="nav-divider" />
                    <div className="nav-section-label">Settings</div>
                    <Link
                        to="/settings"
                        className={`nav-item ${location.pathname === '/settings' ? 'active' : ''}`}
                        onClick={() => window.innerWidth < 1024 && onToggle()}
                    >
                        <Settings size={18} />
                        <span>Settings</span>
                    </Link>
                    <Link
                        to="/advanced"
                        className={`nav-item ${location.pathname === '/advanced' ? 'active' : ''}`}
                        onClick={() => window.innerWidth < 1024 && onToggle()}
                    >
                        <Zap size={18} />
                        <span>Advanced</span>
                    </Link>
                </nav>

            </aside>

            {showJoinModal && (
                <Suspense fallback={null}>
                    <JoinClassModal onClose={() => setShowJoinModal(false)} />
                </Suspense>
            )}
            {showStartModal && (
                <Suspense fallback={null}>
                    <SessionStartModal
                        onStart={handleStartClass}
                        onClose={() => {
                            setShowStartModal(false);
                            setStartError('');
                        }}
                        canStart={isTeacher && isAccessReady}
                        errorMessage={startError}
                        blockedReason={isTeacher ? '' : startBlockedReason}
                    />
                </Suspense>
            )}
        </>
    );
}
