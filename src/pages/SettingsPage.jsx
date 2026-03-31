import { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Moon, Download, Trash2, GraduationCap, User, Mail, Fingerprint, ShieldCheck } from 'lucide-react';
import { useAuth } from '../hooks/useAuth.js';
import { clearGuestData, getGuestDataSummary, importGuestDataToAccount } from '../services/notes/noteStore.js';
import {
    buildAccessNotice,
    getLocationPath,
    resolvePostAuthRedirect,
} from '../components/auth/accessControl.js';
import './Pages.css';

const AuthModal = lazy(() => import('../components/auth/AuthModal.jsx'));

export default function SettingsPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const {
        username,
        avatarUrl,
        canSignIn,
        role: authRole,
        userId,
        isSignedIn,
        clerkUser,
        dbUser,
    } = useAuth();
    const role = authRole ?? 'student';
    const [guestSummary, setGuestSummary] = useState(null);
    const [guestActionState, setGuestActionState] = useState('idle');
    const [guestActionMessage, setGuestActionMessage] = useState('');
    const [authOpen, setAuthOpen] = useState(false);

    const profileRef = useRef(null);
    const shouldFocusProfile =
        location.hash === '#profile' || location.state?.focusSection === 'profile';
    const email =
        clerkUser?.primaryEmailAddress?.emailAddress ||
        dbUser?.email ||
        'Not set';
    const initials = username ? username.slice(0, 2).toUpperCase() : '??';
    const accessRequired = location.state?.accessRequired;
    const accessReason = location.state?.accessReason;
    const requiredRoles = location.state?.requiredRoles;
    const deniedRole = location.state?.deniedRole;
    const fromPath = location.state?.from;
    const showAccessNotice = Boolean(accessRequired || deniedRole || requiredRoles?.length);
    const currentPath = getLocationPath(location);
    const accessNotice = buildAccessNotice({
        accessRequired,
        accessReason,
        canSignIn,
        deniedRole,
        requiredRoles,
        role,
    });
    const postAuthRedirect = resolvePostAuthRedirect({
        accessRequired,
        fromPath,
        fallback: currentPath,
    });

    useEffect(() => {
        if (!shouldFocusProfile) {
            return;
        }

        profileRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        profileRef.current?.focus({ preventScroll: true });
    }, [shouldFocusProfile]);

    useEffect(() => {
        if (!isSignedIn || !postAuthRedirect) {
            return;
        }

        setAuthOpen(false);
        navigate(postAuthRedirect, { replace: true });
    }, [isSignedIn, navigate, postAuthRedirect]);

    useEffect(() => {
        let cancelled = false;

        async function loadGuestSummary() {
            if (!isSignedIn) {
                if (!cancelled) {
                    setGuestSummary(null);
                    setGuestActionState('idle');
                    setGuestActionMessage('');
                }
                return;
            }

            try {
                const summary = await getGuestDataSummary();
                if (!cancelled) {
                    setGuestSummary(summary);
                }
            } catch (error) {
                if (!cancelled) {
                    setGuestSummary(null);
                    setGuestActionState('error');
                    setGuestActionMessage(error?.message || 'Could not check guest data.');
                }
            }
        }

        void loadGuestSummary();

        return () => {
            cancelled = true;
        };
    }, [isSignedIn]);

    async function refreshGuestSummary() {
        const summary = await getGuestDataSummary();
        setGuestSummary(summary);
        return summary;
    }

    async function handleGuestImport() {
        setGuestActionState('loading');
        setGuestActionMessage('');

        try {
            const result = await importGuestDataToAccount();
            await refreshGuestSummary();

            if (result.errors.length > 0) {
                setGuestActionState('error');
                setGuestActionMessage(
                    `Imported ${result.notesImported} notes, ${result.flashcardsImported} flashcards, and ${result.assetsImported} assets. ${result.errors.length} item(s) still need attention.`
                );
                return;
            }

            setGuestActionState('success');
            setGuestActionMessage(
                `Imported ${result.notesImported} notes, ${result.flashcardsImported} flashcards, and ${result.assetsImported} assets into this account.`
            );
        } catch (error) {
            setGuestActionState('error');
            setGuestActionMessage(error?.message || 'Import failed.');
        }
    }

    async function handleGuestClear() {
        if (!window.confirm('Discard all guest notes, flashcards, and assets stored on this device?')) {
            return;
        }

        setGuestActionState('loading');
        setGuestActionMessage('');

        try {
            await clearGuestData();
            await refreshGuestSummary();
            setGuestActionState('success');
            setGuestActionMessage('Guest data on this device has been cleared.');
        } catch (error) {
            setGuestActionState('error');
            setGuestActionMessage(error?.message || 'Could not clear guest data.');
        }
    }

    return (
        <div className="animate-fade-in" style={{ maxWidth: '600px' }}>
            <h1 style={{ marginBottom: 'var(--space-2)' }}>Settings</h1>
            <p style={{ marginBottom: 'var(--space-6)' }}>
                Customize your learning experience
            </p>

            {showAccessNotice && (
                <section className="card settings-access-card" aria-live="polite">
                    <div className="settings-access-copy">
                        <h2>{accessNotice?.title || 'Access Notice'}</h2>
                        <p>{accessNotice?.body || 'This page needs additional access.'}</p>
                        {fromPath && (
                            <p className="settings-access-meta">
                                Requested page: <strong>{fromPath}</strong>
                            </p>
                        )}
                    </div>
                    {!isSignedIn && canSignIn && (
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => setAuthOpen(true)}
                        >
                            Sign In to Continue
                        </button>
                    )}
                    {!isSignedIn && !canSignIn && (
                        <span className="badge">Guest-only environment</span>
                    )}
                </section>
            )}

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
                {isSignedIn && (((guestSummary?.totalItems) || 0) > 0 || guestActionMessage) && (
                    <div className="setting-item card settings-import-card">
                        <div className="setting-info">
                            <h4>Import Guest Data</h4>
                            <p>
                                {guestSummary?.totalItems > 0
                                    ? 'This device still has local guest work waiting to be moved into your account.'
                                    : 'Guest data migration on this device is up to date.'}
                            </p>
                            {guestSummary?.totalItems > 0 && (
                                <div className="settings-import-summary">
                                    <span className="badge">{guestSummary.notes} notes</span>
                                    <span className="badge">{guestSummary.flashcards} flashcards</span>
                                    <span className="badge">{guestSummary.assets} assets</span>
                                </div>
                            )}
                            {guestActionMessage && (
                                <p className={`settings-import-status settings-import-status--${guestActionState}`}>
                                    {guestActionMessage}
                                </p>
                            )}
                        </div>
                        {guestSummary?.totalItems > 0 && (
                            <div className="settings-import-actions">
                                <button
                                    type="button"
                                    className="btn btn-secondary btn-sm"
                                    onClick={handleGuestClear}
                                    disabled={guestActionState === 'loading'}
                                >
                                    Discard
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-sm"
                                    onClick={handleGuestImport}
                                    disabled={guestActionState === 'loading'}
                                >
                                    {guestActionState === 'loading' ? 'Importing…' : 'Import Now'}
                                </button>
                            </div>
                        )}
                    </div>
                )}

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

            {authOpen && (
                <Suspense fallback={null}>
                    <AuthModal
                        onClose={() => setAuthOpen(false)}
                        redirectTo={postAuthRedirect || currentPath}
                    />
                </Suspense>
            )}

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
