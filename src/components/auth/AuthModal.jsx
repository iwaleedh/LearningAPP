/**
 * AuthModal.jsx
 * Sign-in / Sign-up modal using Clerk's pre-built components.
 * Opens when the user clicks "Sign In" in the Header.
 */
import { useState } from 'react';
import { SignIn, SignUp } from '@clerk/clerk-react';
import { useAuth } from '../../hooks/useAuth.js';
import './AuthModal.css';

export default function AuthModal({ onClose }) {
  const { canSignIn } = useAuth();
  const [tab, setTab] = useState('signin');

  return (
    <div className="auth-modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="auth-modal">
        <button type="button" className="auth-modal-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="auth-modal-header">
          <div className="auth-modal-logo">📚</div>
          <h2 className="auth-modal-title">Living Textbook</h2>
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
                  afterSignInUrl="/"
                />
              ) : (
                <SignUp
                  appearance={{ elements: { card: 'auth-clerk-card', rootBox: 'auth-clerk-root' } }}
                  afterSignUpUrl="/"
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
