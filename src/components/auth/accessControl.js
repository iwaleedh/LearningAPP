export function getLocationPath(location, fallback = '/') {
  const pathname = String(location?.pathname || fallback || '/');
  const search = String(location?.search || '');
  const hash = String(location?.hash || '');
  return `${pathname}${search}${hash}`;
}

export function sanitizeRedirectPath(path, fallback = '/') {
  const safeFallback =
    typeof fallback === 'string' && fallback.startsWith('/') && !fallback.startsWith('//')
      ? fallback
      : '/';

  if (typeof path !== 'string') {
    return safeFallback;
  }

  const trimmed = path.trim();
  if (!trimmed.startsWith('/') || trimmed.startsWith('//')) {
    return safeFallback;
  }

  return trimmed;
}

export function buildProtectedRouteState(
  location,
  { reason = 'continue', accessRequired = 'auth', requiredRoles = undefined, deniedRole = undefined } = {}
) {
  const state = {
    focusSection: 'profile',
    from: sanitizeRedirectPath(getLocationPath(location), '/'),
    accessRequired,
    accessReason: reason,
  };

  if (Array.isArray(requiredRoles) && requiredRoles.length > 0) {
    state.requiredRoles = requiredRoles;
  }

  if (deniedRole) {
    state.deniedRole = deniedRole;
  }

  return state;
}

export function buildAccessNotice({
  accessRequired,
  accessReason,
  canSignIn,
  deniedRole,
  requiredRoles,
  role,
}) {
  if (!accessRequired && !deniedRole && !(requiredRoles?.length > 0)) {
    return null;
  }

  if (accessRequired === 'auth') {
    return {
      title: 'Sign-In Required',
      body: canSignIn
        ? `You need to sign in to ${accessReason || 'continue'}.`
        : `You need to sign in to ${accessReason || 'continue'}, but sign-in is not configured in this environment yet.`,
    };
  }

  const requiredLabel =
    Array.isArray(requiredRoles) && requiredRoles.length > 0
      ? requiredRoles.join(' or ')
      : 'additional access';

  return {
    title: 'Access Limited',
    body: `This account is currently ${deniedRole || role || 'student'}. ${requiredLabel} access is required to ${accessReason || 'open that page'}.`,
  };
}

export function resolvePostAuthRedirect({ accessRequired, fromPath, fallback = '/' }) {
  if (accessRequired !== 'auth') {
    return null;
  }

  return sanitizeRedirectPath(fromPath, fallback);
}
