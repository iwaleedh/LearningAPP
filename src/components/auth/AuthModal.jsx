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

export default function AuthModal({ onClose, redirectTo = '/', returnFocusEl = null }) {
  const { canSignIn, debugAuthEnabled, signInDebug } = useAuth();
  const [tab, setTab] = useState('signin');
  const [debugName, setDebugName] = useState('');
  const safeRedirectTo = sanitizeRedirectPath(redirectTo, '/');
  const modalRef = useRef(null);
  const clerkAppearance = {
    elements: {
      rootBox: 'auth-clerk-root',
      cardBox: 'auth-clerk-card-box',
      card: 'auth-clerk-card',
      main: 'auth-clerk-main',
      header: 'auth-clerk-header',
      headerTitle: 'auth-clerk-header-title',
      headerSubtitle: 'auth-clerk-header-subtitle',
      socialButtonsRoot: 'auth-clerk-social-root',
      socialButtonsBlockButton: 'auth-clerk-social-button',
      socialButtonsBlockButtonText: 'auth-clerk-social-button-text',
      dividerLine: 'auth-clerk-divider-line',
      dividerText: 'auth-clerk-divider-text',
      formFieldLabel: 'auth-clerk-label',
      formFieldInput: 'auth-clerk-input',
      formFieldInputGroup: 'auth-clerk-input-group',
      formFieldInputShowPasswordButton: 'auth-clerk-input-toggle',
      formButtonPrimary: 'auth-clerk-primary-button',
      footer: 'auth-clerk-footer',
      footerAction: 'auth-clerk-footer-action',
      footerActionText: 'auth-clerk-footer-text',
      footerActionLink: 'auth-clerk-footer-link',
      formFieldErrorText: 'auth-clerk-field-message auth-clerk-field-message--error',
      formFieldSuccessText: 'auth-clerk-field-message',
      formFieldWarningText: 'auth-clerk-field-message',
      formResendCodeLink: 'auth-clerk-link',
      identityPreviewText: 'auth-clerk-identity-text',
      identityPreviewEditButton: 'auth-clerk-link',
      otpCodeFieldInput: 'auth-clerk-input auth-clerk-otp-input',
      alternativeMethodsBlockButton: 'auth-clerk-social-button',
      alertText: 'auth-clerk-field-message',
    },
    variables: {
      colorPrimary: 'var(--color-primary)',
      colorText: 'var(--color-text)',
      colorTextSecondary: 'var(--color-text-secondary)',
      colorBackground: 'transparent',
      colorInputBackground: 'var(--color-surface-elevated)',
      colorInputText: 'var(--color-text)',
      colorNeutral: 'var(--color-border)',
      borderRadius: '14px',
      fontFamily: 'var(--font-sans)',
    },
  };

  // A8: trap focus inside the modal while it is open
  useFocusTrap(modalRef, true, returnFocusEl);

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
          <h2 id="auth-modal-title" className="auth-modal-title">Study Smart</h2>
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
                  appearance={clerkAppearance}
                  forceRedirectUrl={safeRedirectTo}
                  fallbackRedirectUrl={safeRedirectTo}
                />
              ) : (
                <SignUp
                  appearance={clerkAppearance}
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
