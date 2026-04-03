/**
 * AuthModal.jsx
 * Sign-in / Sign-up modal using Clerk's pre-built components.
 * Opens when the user clicks "Sign In" in the Header.
 */
import { useState, useRef } from 'react';
import { SignIn, SignUp } from '@clerk/clerk-react';
import { useAuth } from '../../hooks/useAuth.js';
import { sanitizeRedirectPath } from './accessControl.js';
import useFocusTrap from '../../hooks/useFocusTrap.js';
import './AuthModal.css';

export default function AuthModal({ onClose, redirectTo = '/' }) {
  const { canSignIn, debugAuthEnabled, signInDebug } = useAuth();
  const [tab, setTab] = useState('signin');
  const [debugName, setDebugName] = useState('');
  const safeRedirectTo = sanitizeRedirectPath(redirectTo, '/');
  const modalRef = useRef(null);

  // A8: trap focus inside the modal while it is open
  useFocusTrap(modalRef);

  async function handleDebugSignIn(role) {
    await signInDebug?.({ role, username: debugName });
    onClose();
  }

  // Also close on Escape key
  const handleOverlayKeyDown = (e) => {
    if (e.key === 'Escape') onClose();
  };

  return (
    <div
      className="auth-modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onKeyDown={handleOverlayKeyDown}
    >
      <div
        className="auth-modal"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
      >
        <button type="button" className="auth-modal-close" onClick={onClose} aria-label="Close sign-in dialog">✕</button>

        <div className="auth-modal-header">
          <div className="auth-modal-logo">📚</div>
          <h2 id="auth-modal-title" className="auth-modal-title">Living Textbook</h2>
          <p className="auth-modal-subtitle">
            {canSignIn
              ? 'Sign in to sync your progress across devices'
              : 'This environment is running in guest mode'}
          </p>
        </div>

        {!canSignIn ? (
          <div className="auth-modal-fallback">
            <p className="auth-modal-fallback-text">
              Account sign-in is not enabled here because `VITE_CLERK_PUBLISHABLE_KEY` is missing.
              You can keep using the app locally in guest mode.
            </p>
            <button type="button" className="btn btn-primary auth-modal-action" onClick={onClose}>
              Continue in Guest Mode
            </button>
          </div>
        ) : debugAuthEnabled ? (
          <div className="auth-modal-fallback">
            <p className="auth-modal-fallback-text">
              Local dev auth is enabled for this environment. Choose a role to test protected flows without Clerk.
            </p>
            <input
              className="lc-modal-input"
              type="text"
              placeholder="Display name (optional)"
              value={debugName}
              onChange={(event) => setDebugName(event.target.value)}
              autoFocus
            />
            <button
              type="button"
              className="btn btn-primary auth-modal-action"
              onClick={() => handleDebugSignIn('student')}
            >
              Continue as Student
            </button>
            <button
              type="button"
              className="btn btn-secondary auth-modal-action"
              onClick={() => handleDebugSignIn('teacher')}
            >
              Continue as Teacher
            </button>
            <button type="button" className="btn btn-ghost auth-modal-action" onClick={onClose}>
              Continue in Guest Mode
            </button>
          </div>
        ) : (
          <>
            <div className="auth-tabs">
              <button
                type="button"
                className={`auth-tab ${tab === 'signin' ? 'active' : ''}`}
                onClick={() => setTab('signin')}
              >
                Sign In
              </button>
              <button
                type="button"
                className={`auth-tab ${tab === 'signup' ? 'active' : ''}`}
                onClick={() => setTab('signup')}
              >
                Create Account
              </button>
            </div>

            <div className="auth-clerk-container">
              {tab === 'signin' ? (
                <SignIn
                  appearance={{ elements: { card: 'auth-clerk-card', rootBox: 'auth-clerk-root' } }}
                  forceRedirectUrl={safeRedirectTo}
                  fallbackRedirectUrl={safeRedirectTo}
                />
              ) : (
                <SignUp
                  appearance={{ elements: { card: 'auth-clerk-card', rootBox: 'auth-clerk-root' } }}
                  forceRedirectUrl={safeRedirectTo}
                  fallbackRedirectUrl={safeRedirectTo}
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
