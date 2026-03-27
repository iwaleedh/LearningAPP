import { useState, lazy, Suspense } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    BookOpen, FlaskConical, FileQuestion, GraduationCap,
    LayoutDashboard, Settings, X,
    Brain, Trophy, Zap, UserPlus
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth.js';
import './Layout.css';

const JoinClassModal = lazy(() => import('../liveclass/JoinClassModal.jsx'));

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
    const { role } = useAuth();
    const [showJoinModal, setShowJoinModal] = useState(false);
    const isTeacher = role === 'teacher';

    return (
        <>
            {/* Mobile overlay */}
            {isOpen && (
                <div className="sidebar-overlay" onClick={onToggle} />
            )}

            <aside className={`app-sidebar ${isOpen ? 'open' : ''}`}>
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
                    <button className="btn btn-icon sidebar-close" onClick={onToggle}>
                        <X size={20} />
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
                    <div className="nav-section-label">{isTeacher ? 'Admin' : 'Live Class'}</div>
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
        </>
    );
}
