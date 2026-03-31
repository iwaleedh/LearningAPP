import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { getLiveClassByCode, requestJoin } from '../../convex-client.js';
import { useAuth } from '../../hooks/useAuth.js';

/**
 * JoinClassModal — students enter their name + 6-char class code to request
 * entry into a live class. Opens from the Sidebar "Join Live Class" button.
 */
export default function JoinClassModal({ onClose }) {
  const navigate = useNavigate();
  const { canSignIn, isLoaded, isSignedIn } = useAuth();
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const authBlocked = isLoaded && !isSignedIn;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const cleanCode = code.trim().toUpperCase();

    if (authBlocked) {
      setError(
        canSignIn
          ? 'Please sign in from the top-right menu before joining a live class.'
          : 'Live classes require sign-in, but authentication is not configured in this environment yet.'
      );
      return;
    }
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
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="jcm-backdrop" onClick={onClose}>
      <div className="jcm-dialog card" onClick={(e) => e.stopPropagation()}>
        <button className="jcm-close btn btn-icon btn-ghost btn-sm" onClick={onClose} title="Close">
          <X size={16} />
        </button>
        <div className="lc-join-icon">🎓</div>
        <h2 className="lc-join-title">Join Live Class</h2>
        <p className="lc-join-subtitle">
          {authBlocked
            ? canSignIn
              ? 'Sign in first, then enter the class code from your teacher'
              : 'Live classes need sign-in, but this app is currently running in guest-only mode'
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
          />
          <input
            className="lc-join-input lc-join-code-input"
            type="text"
            placeholder="Class code (e.g. AB3X7K)"
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            maxLength={6}
            disabled={loading}
            spellCheck={false}
            autoCapitalize="characters"
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
    </div>
  );
}
