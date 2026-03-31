import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.js';
import { buildProtectedRouteState } from './accessControl.js';

export default function RequireSignIn({
  children,
  reason = 'continue to this page',
  allowAnonymousAccess,
}) {
  const { canSignIn, isLoaded, isSignedIn } = useAuth();
  const location = useLocation();

  if (!isLoaded) {
    return <div className="card animate-fade-in">Checking access...</div>;
  }

  if (
    isSignedIn ||
    (typeof allowAnonymousAccess === 'function' &&
      allowAnonymousAccess({ canSignIn, isLoaded, isSignedIn, location }))
  ) {
    return children;
  }

  return (
    <Navigate
      to={{
        pathname: '/settings',
        hash: '#profile',
      }}
      replace
      state={buildProtectedRouteState(location, {
        reason,
        accessRequired: 'auth',
      })}
    />
  );
}
