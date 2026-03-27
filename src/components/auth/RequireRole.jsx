import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.js';

export default function RequireRole({ allowedRoles, children }) {
  const { isLoaded, role } = useAuth();
  const location = useLocation();

  if (!isLoaded) {
    return <div className="card animate-fade-in">Checking access...</div>;
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
      state={{
        focusSection: 'profile',
        from: location.pathname,
        deniedRole: role,
        requiredRoles: allowedRoles,
      }}
    />
  );
}
