import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api.js';
import { useAuth } from '../hooks/useAuth.js';

/**
 * Landing page for users whose account is pending admin approval or blocked.
 * Subscribes to getMyAccountStatus reactively — auto-redirects when approved.
 */
export default function PendingApprovalPage() {
  const { isSignedIn, signOut, username } = useAuth();
  const navigate = useNavigate();

  // Reactive Convex subscription — updates automatically when admin changes status
  const statusResult = useQuery(api.admin.getMyAccountStatus);
  const accountStatus = statusResult?.accountStatus ?? 'pending';
  const email = statusResult?.email ?? '';

  // Auto-redirect to home when approved
  useEffect(() => {
    if (accountStatus === 'approved') {
      navigate('/', { replace: true });
    }
  }, [accountStatus, navigate]);

  // If not signed in, redirect to home
  useEffect(() => {
    if (isSignedIn === false) {
      navigate('/', { replace: true });
    }
  }, [isSignedIn, navigate]);

  const isBlocked = accountStatus === 'blocked';

  return (
    <div className="pending-page">
      <div className="pending-card card">
        <div className="pending-icon">{isBlocked ? '🚫' : '🔒'}</div>

        <h1 className="pending-title">
          {isBlocked ? 'Account Suspended' : 'Account Pending Approval'}
        </h1>

        <p className="pending-greeting">
          Hi{username ? `, ${username}` : ''}!
        </p>

        {isBlocked ? (
          <p className="pending-message">
            Your account has been suspended by the administrator.
            If you believe this is a mistake, please contact your administrator.
          </p>
        ) : (
          <p className="pending-message">
            Your account is awaiting administrator approval.
            Once approved, you'll have full access to Living Textbook.
          </p>
        )}

        {email && (
          <div className="pending-email">
            <span className="pending-email-label">Signed in as:</span>
            <span className="pending-email-value">{email}</span>
          </div>
        )}

        <div className="pending-status">
          <span className={`pending-status-dot ${isBlocked ? 'blocked' : 'waiting'}`} />
          <span className="pending-status-text">
            {isBlocked ? 'Blocked' : 'Waiting for approval'}
          </span>
        </div>

        <button className="btn btn-secondary pending-signout" onClick={signOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
}
