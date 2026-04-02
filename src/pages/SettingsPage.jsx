import { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Moon, Sun, Download, Trash2, GraduationCap, User, Mail, Fingerprint, ShieldCheck, Settings } from 'lucide-react';
import { useAuth } from '../hooks/useAuth.js';
import { useTheme } from '../hooks/useTheme.js';
import { clearGuestData, getGuestDataSummary, importGuestDataToAccount } from '../services/notes/noteStore.js';
import { exportNotesAsPdf } from '../services/notes/noteExport.js';
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
    const { theme, toggleTheme } = useTheme();
    const role = authRole ?? 'student';
    const [guestSummary, setGuestSummary] = useState(null);
    const [guestActionState, setGuestActionState] = useState('idle');
    const [guestActionMessage, setGuestActionMessage] = useState('');
    const [exportState, setExportState] = useState('idle');
    const [exportMessage, setExportMessage] = useState('');
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

    function handleClearProgress() {
        if (!window.confirm('This will erase all your local progress — read status, exercise stats, streak data, flashcard state, and saved mistakes. This cannot be undone. Continue?')) {
            return;
        }

        try {
            // Clear lt_read:* keys
            const keysToRemove = [];
            for (let i = 0; i < localStorage.length; i++) {
                const k = localStorage.key(i);
                if (k && k.startsWith('lt_read:')) keysToRemove.push(k);
            }
            keysToRemove.forEach((k) => localStorage.removeItem(k));

            // Clear known activity/progress keys
            localStorage.removeItem('lt_mistakes');
            localStorage.removeItem('lt_exercises_done');
            localStorage.removeItem('lt_papers_viewed');
            localStorage.removeItem('lt_activity_days');
            localStorage.removeItem('lt_flashcard_known');
            localStorage.removeItem('lt_flashcard_learning');
            localStorage.removeItem('lt_badge_earned');

            window.dispatchEvent(new CustomEvent('lt:activity-updated'));
        } catch {
            // storage access failed — ignore
        }
    }

    async function handleExportNotes() {
        setExportState('loading');
        setExportMessage('');

        try {
            const result = await exportNotesAsPdf();
            setExportState('success');
            setExportMessage(`Exported ${result.notesExported} saved note${result.notesExported === 1 ? '' : 's'} to PDF.`);
        } catch (error) {
            setExportState('error');
            setExportMessage(error?.message || 'Could not export notes.');
        }
    }

    return (
        <div className="settings-hub animate-fade-in">
            {/* Bento Header */}
            <div className="settings-page-header">
                <div className="settings-title-group">
                    <div className="settings-subject-icon">
                        <Settings size={28} />
                    </div>
                    <div>
                        <h1 className="settings-page-title">Settings</h1>
                        <p className="settings-page-qual">Customize your learning experience</p>
                    </div>
                </div>
            </div>

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
                        <strong className="settings-profile-value settings-profile-value--caps">
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
                            {theme === 'dark' ? (
                                <Moon size={16} className="settings-inline-icon" />
                            ) : (
                                <Sun size={16} className="settings-inline-icon" />
                            )}
                            Theme
                        </h4>
                        <p>
                            Switch between dark and light themes. The design tokens are already wired app-wide, so this changes the full interface.
                        </p>
                    </div>
                    <button
                        type="button"
                        className={`toggle-switch ${theme === 'light' ? 'active' : ''}`}
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                        aria-pressed={theme === 'light'}
                        title={`Currently ${theme} mode`}
                    />
                </div>

                {/* Export */}
                <div className="setting-item card">
                    <div className="setting-info">
                        <h4>
                            <Download size={16} className="settings-inline-icon" />
                            Export Notes
                        </h4>
                        <p>Download your highlights and notes as PDF</p>
                        {exportMessage && (
                            <p className={`settings-import-status settings-import-status--${exportState}`}>
                                {exportMessage}
                            </p>
                        )}
                    </div>
                    <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                        onClick={handleExportNotes}
                        disabled={exportState === 'loading'}
                    >
                        <Download size={14} /> {exportState === 'loading' ? 'Exporting…' : 'Export'}
                    </button>
                </div>

                {/* Clear Data */}
                <div className="setting-item card">
                    <div className="setting-info">
                        <h4>
                            <Trash2 size={16} className="settings-inline-icon" />
                            Clear Progress
                        </h4>
                        <p>Reset all progress and saved data</p>
                    </div>
                    <button className="btn btn-danger btn-sm" onClick={handleClearProgress}>
                        <Trash2 size={14} /> Reset
                    </button>
                </div>

                {/* Teacher Access */}
                <div className="setting-item card">
                    <div className="setting-info">
                        <h4>
                            <ShieldCheck size={16} className="settings-inline-icon" />
                            Teacher Access
                        </h4>
                        {role === 'teacher' ? (
                            <p>
                                This account can access teacher tools, including{' '}
                                <Link to="/teacher" className="settings-inline-link">
                                    the dashboard
                                </Link>{' '}
                                and{' '}
                                <Link to="/teacher/monitor" className="settings-inline-link">
                                    live session monitoring
                                </Link>.
                            </p>
                        ) : (
                            <p>
                                Teacher access is assigned outside the app. Ask an administrator to
                                provision this account in Convex before using teacher-only tools.
                            </p>
                        )}
                    </div>
                    <div className="settings-access-actions">
                        {role === 'teacher' && (
                            <span className="badge teacher-badge teacher-badge--compact">
                                Teacher
                            </span>
                        )}
                        {role !== 'teacher' && (
                            <span className="badge">Managed</span>
                        )}
                    </div>
                </div>
            </div>

            {!isSignedIn && authOpen && (
                <Suspense fallback={null}>
                    <AuthModal
                        onClose={() => setAuthOpen(false)}
                        redirectTo={postAuthRedirect || currentPath}
                    />
                </Suspense>
            )}

            {/* About */}
            <div className="card settings-about-card">
                <h4>About Living Textbook</h4>
                <p className="settings-about-desc">
                    An interactive learning platform built for students who want to go beyond passive reading.
                    Features include smart exercises, flashcards, past paper practice, and progress tracking.
                </p>
                <p className="settings-about-version">
                    Version 1.0.0 · Built with React + Vite
                </p>
            </div>
        </div>
    );
}
