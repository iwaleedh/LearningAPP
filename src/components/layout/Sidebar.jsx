import { Link, useLocation } from 'react-router-dom';
import {
    BookOpen, FlaskConical, FileQuestion, GraduationCap,
    LayoutDashboard, Settings, X,
    Brain, Trophy, Shield
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth.js';
import { useFeatureFlags } from '../../hooks/useFeatureFlags.js';
import './Layout.css';

const navItems = [
    { path: '/', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/notes', label: 'Notes', icon: BookOpen, featureKey: 'notes' },
    { path: '/exercises', label: 'Practice', icon: FlaskConical, featureKey: 'exercises' },
    { path: '/past-papers', label: 'Past Papers', icon: FileQuestion, featureKey: 'pastPapers' },
    { path: '/flashcards', label: 'Flashcards', icon: Brain, featureKey: 'flashcards' },
    { path: '/progress', label: 'Progress', icon: Trophy, featureKey: 'progress' },
    { path: '/mistakes', label: 'Mistake Bank', icon: GraduationCap, featureKey: 'mistakeBank' },
];

export default function Sidebar({ isOpen, onToggle }) {
    const location = useLocation();
    const { isAdmin } = useAuth();
    const { isEnabled } = useFeatureFlags();
    const visibleNavItems = navItems.filter((item) => !item.featureKey || isEnabled(item.featureKey));
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
                            <span className="logo-title">Study Smart</span>
                            <span className="logo-subtitle">IAL &amp; IGCSE revision</span>
                        </div>
                    </Link>
                    <button className="btn btn-icon sidebar-close" onClick={onToggle} aria-label="Close sidebar">
                        <X size={20} aria-hidden="true" />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="sidebar-nav">
                    <div className="nav-section-label">Study</div>
                    {visibleNavItems.map(item => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path ||
                            (item.path !== '/' && location.pathname.startsWith(item.path));
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`nav-item ${isActive ? 'active' : ''}`}
                                title={item.label}
                                onClick={() => window.innerWidth < 1024 && onToggle()}
                            >
                                <Icon size={18} />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}

                    <div className="nav-divider" />
                    {isAdmin && (
                        <>
                            <div className="nav-section-label">Admin</div>
                            {isAdmin && (
                                <Link
                                    to="/admin"
                                    className={`nav-item ${location.pathname === '/admin' ? 'active' : ''}`}
                                    title="Admin Panel"
                                    onClick={() => window.innerWidth < 1024 && onToggle()}
                                >
                                    <Shield size={18} />
                                    <span>Admin Panel</span>
                                </Link>
                            )}
                            <div className="nav-divider" />
                        </>
                    )}

                    <div className="nav-section-label">Settings</div>
                    <Link
                        to="/settings"
                        className={`nav-item ${location.pathname === '/settings' ? 'active' : ''}`}
                        title="Settings"
                        onClick={() => window.innerWidth < 1024 && onToggle()}
                    >
                        <Settings size={18} />
                        <span>Settings</span>
                    </Link>

                </nav>

            </aside>

        </>
    );
}
