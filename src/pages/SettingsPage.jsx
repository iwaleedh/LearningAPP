import { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Moon, Sun, Download, Trash2, GraduationCap, User, Mail, Fingerprint } from 'lucide-react';
import PageHeader from '../components/common/PageHeader.jsx';
import { friendlyDisplayName } from '../utils/displayName.js';
import { useAuth } from '../hooks/useAuth.js';
import { useTheme } from '../hooks/useTheme.js';
import { clearGuestData, getGuestDataSummary, importGuestDataToAccount } from '../services/notes/noteStore.js';
import { exportNotesAsPdf } from '../services/notes/noteExport.js';
import { clearMistakes } from '../services/mistakeStore.js';
import { api, callMutation, getClient } from '../convex-client.js';
import { clearLocalReadProgress } from '../hooks/useNoteReadStatus.js';
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

    async function handleClearProgress() {
        if (!window.confirm('This will erase all your local progress — read status, exercise stats, streak data, flashcard state, and saved mistakes. This cannot be undone. Continue?')) {
            return;
        }

        try {
            clearLocalReadProgress();
            await clearMistakes();
            if (isSignedIn && getClient()) {
                await Promise.allSettled([
                    callMutation(api.readProgress.resetMyReadProgress, {}),
                    callMutation(api.flashcards.resetFlashcardProgress, {}),
                ]);
            }

            // Clear known activity/progress keys
            localStorage.removeItem('lt_exercises_done');
            localStorage.removeItem('lt_papers_viewed');
            localStorage.removeItem('lt_activity_days');
            localStorage.removeItem('lt_flashcard_status');
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

    const displayName = friendlyDisplayName(username) || 'Student';

    return (
        <div className="settings-hub">
            <PageHeader title="Settings" description="Your account, how the app looks, and your study data." />

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

            {/* ── Account ── */}
            <section className="settings-section" aria-labelledby="settings-account-title">
                <h2 className="settings-section-title" id="settings-account-title">Account</h2>
                <div id="profile" ref={profileRef} className="list-card settings-profile-card" tabIndex={-1}>
                    <div className="list-row settings-profile-row">
                        {avatarUrl ? (
                            <img src={avatarUrl} alt="" className="settings-profile-avatar" />
                        ) : (
                            <div className="settings-profile-avatar settings-profile-avatar--initials" aria-hidden="true">
                                {friendlyDisplayName(username) ? initials : <User size={22} />}
                            </div>
                        )}
                        <span className="list-row-main">
                            <span className="list-row-title settings-profile-name">{displayName}</span>
                            <span className="list-row-meta">
                                {isSignedIn ? 'Signed in · progress syncs across your devices' : 'Guest on this device · sign in to keep your progress'}
                            </span>
                        </span>
                    </div>
                    <div className="list-row">
                        <span className="list-row-icon"><Mail size={18} aria-hidden="true" /></span>
                        <span className="list-row-main"><span className="list-row-title">Email</span></span>
                        <span className="list-row-end settings-value">{email}</span>
                    </div>
                    <div className="list-row">
                        <span className="list-row-icon"><GraduationCap size={18} aria-hidden="true" /></span>
                        <span className="list-row-main"><span className="list-row-title">Role</span></span>
                        <span className="list-row-end settings-value settings-value--caps">{role}</span>
                    </div>
                    <details className="settings-details">
                        <summary className="list-row">
                            <span className="list-row-icon"><Fingerprint size={18} aria-hidden="true" /></span>
                            <span className="list-row-main"><span className="list-row-title">Technical details</span></span>
                        </summary>
                        <dl className="settings-details-body">
                            <dt>Account ID</dt>
                            <dd>{userId || 'Unavailable'}</dd>
                            <dt>Username</dt>
                            <dd>{username || 'Unavailable'}</dd>
                        </dl>
                    </details>
                </div>
            </section>

            {/* ── Appearance ── */}
            <section className="settings-section" aria-labelledby="settings-appearance-title">
                <h2 className="settings-section-title" id="settings-appearance-title">Appearance</h2>
                <div className="list-card">
                    <div className="list-row">
                        <span className="list-row-icon">
                            {theme === 'dark' ? <Moon size={18} aria-hidden="true" /> : <Sun size={18} aria-hidden="true" />}
                        </span>
                        <span className="list-row-main">
                            <span className="list-row-title">Theme</span>
                            <span className="list-row-meta">Dark is easier on the eyes for evening study.</span>
                        </span>
                        <div className="segmented settings-theme-toggle" role="group" aria-label="Theme">
                            <button type="button" className="segmented-option" aria-pressed={theme === 'dark'} onClick={() => theme !== 'dark' && toggleTheme()}>Dark</button>
                            <button type="button" className="segmented-option" aria-pressed={theme === 'light'} onClick={() => theme !== 'light' && toggleTheme()}>Light</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Data ── */}
            <section className="settings-section" aria-labelledby="settings-data-title">
                <h2 className="settings-section-title" id="settings-data-title">Your data</h2>
                <div className="list-card">
                    {isSignedIn && (((guestSummary?.totalItems) || 0) > 0 || guestActionMessage) && (
                        <div className="list-row settings-row--stack">
                            <span className="list-row-main">
                                <span className="list-row-title">Import guest data</span>
                                <span className="list-row-meta">
                                    {guestSummary?.totalItems > 0
                                        ? `${guestSummary.notes} notes · ${guestSummary.flashcards} flashcards · ${guestSummary.assets} files are waiting on this device.`
                                        : 'Guest data on this device is up to date.'}
                                </span>
                                {guestActionMessage && (
                                    <span className={`settings-import-status settings-import-status--${guestActionState}`}>{guestActionMessage}</span>
                                )}
                            </span>
                            {guestSummary?.totalItems > 0 && (
                                <span className="settings-row-actions">
                                    <button type="button" className="btn btn-outline" onClick={handleGuestClear} disabled={guestActionState === 'loading'}>Discard</button>
                                    <button type="button" className="btn btn-primary" onClick={handleGuestImport} disabled={guestActionState === 'loading'}>
                                        {guestActionState === 'loading' ? 'Importing…' : 'Import'}
                                    </button>
                                </span>
                            )}
                        </div>
                    )}

                    <div className="list-row settings-row--stack">
                        <span className="list-row-icon"><Download size={18} aria-hidden="true" /></span>
                        <span className="list-row-main">
                            <span className="list-row-title">Export notes</span>
                            <span className="list-row-meta">Download your highlights and saved notes as a PDF.</span>
                            {exportMessage && (
                                <span className={`settings-import-status settings-import-status--${exportState}`}>{exportMessage}</span>
                            )}
                        </span>
                        <button type="button" className="btn btn-outline" onClick={handleExportNotes} disabled={exportState === 'loading'}>
                            {exportState === 'loading' ? 'Exporting…' : 'Export'}
                        </button>
                    </div>

                    <div className="list-row settings-row--stack">
                        <span className="list-row-icon settings-danger-icon"><Trash2 size={18} aria-hidden="true" /></span>
                        <span className="list-row-main">
                            <span className="list-row-title">Reset progress</span>
                            <span className="list-row-meta">Clears read notes, flashcard progress and mistakes. This can't be undone.</span>
                        </span>
                        <button type="button" className="btn btn-outline settings-danger-btn" onClick={handleClearProgress}>
                            Reset
                        </button>
                    </div>
                </div>
            </section>

            {!isSignedIn && authOpen && (
                <Suspense fallback={null}>
                    <AuthModal
                        onClose={() => setAuthOpen(false)}
                        redirectTo={postAuthRedirect || currentPath}
                    />
                </Suspense>
            )}

            <p className="settings-about">Study Smart · Version 1.0.0</p>
        </div>
    );
}
