import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { getLiveClassByCode, requestJoin } from '../../convex-client.js';
import { useAuth } from '../../hooks/useAuth.js';
import { isLocalLiveClassId } from '../../services/liveclass/localLiveClassStore.js';
import MobileSheetPortal from './MobileSheetPortal.jsx';

/**
 * JoinClassModal — students enter their name + 6-char class code to request
 * entry into a live class. Opens from the Sidebar "Join Live Class" button.
 */
export default function JoinClassModal({ onClose }) {
  const navigate = useNavigate();
  const { canSignIn, isLoaded, isSignedIn } = useAuth();
  const dialogRef = useRef(null);
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const authBlocked = isLoaded && canSignIn && !isSignedIn;

  // L-4 + M-2: Escape key handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key !== 'Tab' || !dialogRef.current) return;

      const focusableElements = dialogRef.current.querySelectorAll(
        'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
      );

      if (!focusableElements.length) return;

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedName = name.replace(/\s+/g, ' ').trim();
    const cleanCode = code.replace(/[^A-Z0-9]/gi, '').trim().toUpperCase();

    if (!trimmedName) { setError('Please enter your name.'); return; }
    if (cleanCode.length !== 6) { setError('Class code must be 6 characters.'); return; }

    setLoading(true);
    setError('');

    try {
      const session = await getLiveClassByCode(cleanCode);
      if (!session) {
        setError('Class not found. Check the code and try again.');
        setLoading(false);
        return;
      }

      const sessionId = session._id;
      const isLocalSession = isLocalLiveClassId(sessionId);

      if (authBlocked) {
        setError('Please sign in from the top-right menu before joining a live class.');
        setLoading(false);
        return;
      }

      if (!canSignIn && !isLocalSession) {
        setError('This live class requires sign-in, but authentication is not configured in this environment yet.');
        setLoading(false);
        return;
      }

      // Stable tempId per student per browser session
      let tempId = sessionStorage.getItem(`lt_tempId_${sessionId}`);
      if (!tempId) {
        tempId = crypto.randomUUID();
        sessionStorage.setItem(`lt_tempId_${sessionId}`, tempId);
      }

      const requestId = await requestJoin(sessionId, trimmedName, tempId);
      if (!requestId) {
        setError('Could not send join request. Please try again.');
        setLoading(false);
        return;
      }

      // Store join info so LiveClassPage can read it
      sessionStorage.setItem(`lt_joinRequest_${sessionId}`, JSON.stringify({
        requestId: String(requestId),
        tempId,
        studentName: trimmedName,
      }));

      onClose();
      navigate(`/live/${sessionId}`, {
        state: { joinRequestId: String(requestId), tempId, studentName: trimmedName },
      });
    } catch (err) {
      console.error('[JoinClassModal] error:', err);
      setError(err?.message || 'Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <MobileSheetPortal
      backdropClassName="jcm-backdrop"
      sheetClassName="jcm-dialog card"
      ariaLabel="Join live class"
      onClose={onClose}
    >
      <div
        ref={dialogRef}
        aria-labelledby="jcm-title"
        aria-describedby="jcm-help"
      >
        <button className="jcm-close btn btn-icon btn-ghost btn-sm" onClick={onClose} title="Close" aria-label="Close join live class dialog">
          <X size={16} />
        </button>
        <div className="lc-join-icon">🎓</div>
        <h2 id="jcm-title" className="lc-join-title">Join Live Class</h2>
        <p id="jcm-help" className="lc-join-subtitle">
          {authBlocked
            ? canSignIn
              ? 'Sign in first, then enter the class code from your teacher'
              : 'Live classes need sign-in, but this app is currently running in guest-only mode'
            : !canSignIn
              ? 'Enter your name and class code. Local guest classes will still work in this environment.'
              : 'Enter your name and the class code from your teacher'}
        </p>
        <form onSubmit={handleSubmit}>
          <input
            className="lc-join-input"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={50}
            autoFocus
            disabled={loading}
            autoComplete="name"
            enterKeyHint="next"
            aria-label="Your name"
          />
          <input
            className="lc-join-input lc-join-code-input"
            type="text"
            placeholder="Class code (e.g. AB3X7K)"
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ''))}
            maxLength={6}
            disabled={loading}
            spellCheck={false}
            autoCapitalize="characters"
            autoCorrect="off"
            enterKeyHint="go"
            inputMode="text"
            aria-label="Class code"
          />
          {error && <p className="jcm-error">{error}</p>}
          <button
            className="btn btn-primary lc-join-btn"
            type="submit"
            disabled={loading || !isLoaded || authBlocked || !name.trim() || code.trim().length < 6}
          >
            {loading ? 'Joining…' : 'Request to Join'}
          </button>
        </form>
      </div>
    </MobileSheetPortal>
  );
}
