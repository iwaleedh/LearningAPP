import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.js';

/**
 * Route guard that redirects signed-in users with pending/blocked accounts
 * to the /pending page. Anonymous (guest) users are NOT blocked.
 */
export default function RequireApproved({ children }) {
  const { isLoaded, isSignedIn, accountStatus } = useAuth();

  if (!isLoaded) {
    return <div className="card animate-fade-in">Checking access...</div>;
  }

  // Guest / anonymous — no account row, let through
  if (!isSignedIn) {
    return children;
  }

  // Signed in but account not approved
  if (accountStatus === 'pending' || accountStatus === 'blocked') {
    return <Navigate to="/pending" replace />;
  }

  return children;
}
