import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Moon, Download, Trash2, GraduationCap, User, Mail, Fingerprint, ShieldCheck } from 'lucide-react';
import { useAuth } from '../hooks/useAuth.js';
import './Pages.css';

export default function SettingsPage() {
    const location = useLocation();
    const {
        username,
        avatarUrl,
        role: authRole,
        userId,
        isSignedIn,
        clerkUser,
        dbUser,
    } = useAuth();
    const role = authRole ?? 'student';

    const profileRef = useRef(null);
    const shouldFocusProfile =
        location.hash === '#profile' || location.state?.focusSection === 'profile';
    const email =
        clerkUser?.primaryEmailAddress?.emailAddress ||
        dbUser?.email ||
        'Not set';
    const initials = username ? username.slice(0, 2).toUpperCase() : '??';

    useEffect(() => {
        if (!shouldFocusProfile) {
            return;
        }

        profileRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        profileRef.current?.focus({ preventScroll: true });
    }, [shouldFocusProfile]);

    return (
        <div className="animate-fade-in" style={{ maxWidth: '600px' }}>
            <h1 style={{ marginBottom: 'var(--space-2)' }}>Settings</h1>
            <p style={{ marginBottom: 'var(--space-6)' }}>
                Customize your learning experience
            </p>

            <section
                id="profile"
                ref={profileRef}
                className="card settings-profile-card"
                tabIndex={-1}
            >
                <div className="settings-profile-header">
                    {avatarUrl ? (
                        <img src={avatarUrl} alt={username} className="settings-profile-avatar" />
                    ) : (
                        <div className="settings-profile-avatar settings-profile-avatar--initials">
                            {initials}
                        </div>
                    )}

                    <div className="settings-profile-intro">
                        <div className="settings-profile-meta">
                            <h2>Profile</h2>
                            <span className="badge">{isSignedIn ? 'Signed In' : 'Guest Session'}</span>
                            {role === 'teacher' && <span className="badge teacher-badge">Teacher</span>}
                        </div>
                        <p className="settings-profile-name">{username}</p>
                        <p className="settings-profile-subtitle">
                            {isSignedIn
                                ? 'Your account is connected and ready to sync across devices.'
                                : 'You are using a local guest profile. Sign-in is required for a portable account.'}
                        </p>
                    </div>
                </div>

                <div className="settings-profile-grid">
                    <div className="settings-profile-field">
                        <span className="settings-profile-label">
                            <User size={14} />
                            Display Name
                        </span>
                        <strong className="settings-profile-value">{username}</strong>
                    </div>

                    <div className="settings-profile-field">
                        <span className="settings-profile-label">
                            <Mail size={14} />
                            Email
                        </span>
                        <strong className="settings-profile-value">{email}</strong>
                    </div>

                    <div className="settings-profile-field">
                        <span className="settings-profile-label">
                            <GraduationCap size={14} />
                            Current Role
                        </span>
                        <strong className="settings-profile-value" style={{ textTransform: 'capitalize' }}>
                            {role}
                        </strong>
                    </div>

                    <div className="settings-profile-field">
                        <span className="settings-profile-label">
                            <Fingerprint size={14} />
                            User ID
                        </span>
                        <strong className="settings-profile-value">{userId || 'Unavailable'}</strong>
                    </div>
                </div>
            </section>

            <div className="settings-grid">
                {/* Theme */}
                <div className="setting-item card">
                    <div className="setting-info">
                        <h4>
                            <Moon size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />
                            Night Mode
                        </h4>
                        <p>
                            Night mode is now the only app theme, so reading, note blocks,
                            and diagrams stay consistently high-contrast across every page.
                        </p>
                    </div>
                    <span className="badge">Always on</span>
                </div>

                {/* Export */}
                <div className="setting-item card">
                    <div className="setting-info">
                        <h4>
                            <Download size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />
                            Export Notes
                        </h4>
                        <p>Download your highlights and notes as PDF</p>
                    </div>
                    <button className="btn btn-secondary btn-sm">
                        <Download size={14} /> Export
                    </button>
                </div>

                {/* Clear Data */}
                <div className="setting-item card">
                    <div className="setting-info">
                        <h4>
                            <Trash2 size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />
                            Clear Progress
                        </h4>
                        <p>Reset all progress and saved data</p>
                    </div>
                    <button className="btn btn-danger btn-sm">
                        <Trash2 size={14} /> Reset
                    </button>
                </div>

                {/* Teacher Access */}
                <div className="setting-item card">
                    <div className="setting-info">
                        <h4>
                            <ShieldCheck size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />
                            Teacher Access
                        </h4>
                        {role === 'teacher' ? (
                            <p>
                                This account can access teacher tools, including{' '}
                                <a href="/teacher" style={{ color: 'var(--color-primary)' }}>
                                    the dashboard
                                </a>{' '}
                                and{' '}
                                <a href="/teacher/monitor" style={{ color: 'var(--color-primary)' }}>
                                    live session monitoring
                                </a>.
                            </p>
                        ) : (
                            <p>
                                Teacher access is assigned outside the app. Ask an administrator to
                                provision this account in Convex before using teacher-only tools.
                            </p>
                        )}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', flexShrink: 0 }}>
                        {role === 'teacher' && (
                            <span className="badge teacher-badge" style={{ fontSize: 'var(--font-size-xs)' }}>
                                Teacher
                            </span>
                        )}
                        {role !== 'teacher' && (
                            <span className="badge">Managed</span>
                        )}
                    </div>
                </div>
            </div>

            {/* About */}
            <div className="card" style={{ marginTop: 'var(--space-6)' }}>
                <h4 style={{ marginBottom: 'var(--space-2)' }}>About Living Textbook</h4>
                <p style={{ fontSize: 'var(--font-size-sm)' }}>
                    An interactive learning platform built for students who want to go beyond passive reading.
                    Features include smart exercises, flashcards, past paper practice, and progress tracking.
                </p>
                <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)', marginTop: 'var(--space-2)' }}>
                    Version 1.0.0 · Built with React + Vite
                </p>
            </div>
        </div>
    );
}
