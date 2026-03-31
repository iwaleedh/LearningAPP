import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.js';
import { buildProtectedRouteState } from './accessControl.js';

export default function RequireRole({ allowedRoles, children, reason = 'open this page' }) {
  const { isLoaded, isAccessReady, isSignedIn, role } = useAuth();
  const location = useLocation();

  if (!isLoaded || !isAccessReady) {
    return <div className="card animate-fade-in">Checking access...</div>;
  }

  if (!isSignedIn) {
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
          requiredRoles: allowedRoles,
        })}
      />
    );
  }

  if (allowedRoles.includes(role)) {
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
        accessRequired: 'role',
        deniedRole: role,
        requiredRoles: allowedRoles,
      })}
    />
  );
}
