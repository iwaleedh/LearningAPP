/**
 * AuthModal.jsx
 * Sign-in / Sign-up modal using Clerk's pre-built components.
 * Opens when the user clicks "Sign In" in the Header.
 */
import { useState } from 'react';
import { SignIn, SignUp } from '@clerk/clerk-react';
import './AuthModal.css';

export default function AuthModal({ onClose }) {
  const [tab, setTab] = useState('signin');

  return (
    <div className="auth-modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="auth-modal">
        <button className="auth-modal-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="auth-modal-header">
          <div className="auth-modal-logo">📚</div>
          <h2 className="auth-modal-title">Living Textbook</h2>
          <p className="auth-modal-subtitle">Sign in to sync your progress across devices</p>
        </div>

        <div className="auth-tabs">
          <button
            className={`auth-tab ${tab === 'signin' ? 'active' : ''}`}
            onClick={() => setTab('signin')}
          >
            Sign In
          </button>
          <button
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
      </div>
    </div>
  );
}
