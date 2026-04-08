/**
 * AuthProvider.jsx
 *
 * Wraps the app with ClerkProvider (handles sessions/JWTs) and provides
 * AuthContext so every component can access user identity and role.
 *
 * Sign-in is OPTIONAL — anonymous users get a random UUID identity and
 * the app works exactly as before. Signed-in users get their Clerk ID
 * used as the userId throughout the Convex backend.
 */
import { useState, useEffect, useMemo, useCallback } from 'react';
import { ClerkProvider, useUser, useClerk, useAuth as useClerkAuth } from '@clerk/clerk-react';
import { ConvexProvider } from 'convex/react';
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import AuthContext from './AuthContext';
import { api } from '../../convex/_generated/api.js';
import AccessWindowModal from '../components/auth/AccessWindowModal.jsx';
import {
  finalizeAuthenticatedAccess,
  getClient,
  getCurrentUserId,
  getCurrentUsername,
  restoreAnonymousIdentity,
  selectAccessWindow as persistAccessWindow,
  setExpectedIdentityMode,
  setLocalDebugIdentity,
  setCurrentUsernameOverride,
  setAuthenticatedIdentity,
} from '../convex-client.js';
import { setLogContext } from '../services/logger/logger.js';
import {
  clearAccessExpiredNotice,
  getAccessSummaryStorageKey,
  writeAccessExpiredNotice,
} from '../services/auth/accessWindow.js';

const CLERK_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const HAS_CLERK = Boolean(CLERK_KEY);
const DEV_AUTH_ENABLED = import.meta.env.DEV && !HAS_CLERK;
const DEV_AUTH_STORAGE_KEY = 'lt_dev_auth_session';

function normalizeDebugRole(role) {
  if (role === 'teacher' || role === 'admin') {
    return role;
  }
  return 'student';
}

function resolveClerkProvider(clerkUser) {
  const externalProvider = clerkUser?.externalAccounts?.[0]?.provider;
  if (typeof externalProvider === 'string' && externalProvider.trim()) {
    return externalProvider.trim();
  }
  return 'clerk';
}

function readStoredDevAuthSession() {
  if (!DEV_AUTH_ENABLED || typeof window === 'undefined') {
    return null;
  }

  try {
    const raw = window.sessionStorage.getItem(DEV_AUTH_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed?.userId || !parsed?.username) {
      return null;
    }

    const role = normalizeDebugRole(parsed.role);
    return {
      role,
      userId: String(parsed.userId),
      username: String(parsed.username),
    };
  } catch {
    return null;
  }
}

function persistDevAuthSession(session) {
  if (!DEV_AUTH_ENABLED || typeof window === 'undefined') {
    return;
  }

  window.sessionStorage.setItem(DEV_AUTH_STORAGE_KEY, JSON.stringify(session));
}

function clearStoredDevAuthSession() {
  if (!DEV_AUTH_ENABLED || typeof window === 'undefined') {
    return;
  }

  window.sessionStorage.removeItem(DEV_AUTH_STORAGE_KEY);
}

function resolveClerkProfile(clerkUser) {
  const username =
    clerkUser.username ||
    clerkUser.firstName ||
    clerkUser.emailAddresses?.[0]?.emailAddress?.split('@')[0] ||
    `user_${clerkUser.id.slice(-6)}`;

  return {
    username,
    email: clerkUser.primaryEmailAddress?.emailAddress || undefined,
    avatarUrl: clerkUser.imageUrl || undefined,
  };
}

/* ── Inner provider: runs inside ClerkProvider so it can call useUser ── */
function AuthContextProvider({ children }) {
  const { user: clerkUser, isLoaded, isSignedIn } = useUser();
  const { signOut: clerkSignOut } = useClerk();
  const { getToken, sessionId } = useClerkAuth();
  const [dbUser, setDbUser] = useState(null);
  const [role, setRole] = useState('student');
  const [accountStatus, setAccountStatus] = useState(null);
  const [accessStatus, setAccessStatus] = useState(null);
  const [accessGrantKind, setAccessGrantKind] = useState(null);
  const [accessExpiresAt, setAccessExpiresAt] = useState(null);
  const [accessDurationMonths, setAccessDurationMonths] = useState(null);
  const [accessWindowStartedAt, setAccessWindowStartedAt] = useState(null);
  const [trialStartedAt, setTrialStartedAt] = useState(null);
  const [trialExpiresAt, setTrialExpiresAt] = useState(null);
  const [hasUsedTrial, setHasUsedTrial] = useState(false);
  const [firstSignInAt, setFirstSignInAt] = useState(null);
  const [lastSignInAt, setLastSignInAt] = useState(null);
  const [isAdminUser, setIsAdminUser] = useState(false);
  const [syncedAccessKey, setSyncedAccessKey] = useState(null);
  const [accessModalState, setAccessModalState] = useState(null);
  const [isSelectingAccessWindow, setIsSelectingAccessWindow] = useState(false);
  // D7: Tracks when the auth sync is retrying after a "registration completing"
  // error so the UI can show a graceful spinner instead of a hard failure.
  const [isRegistrationPending, setIsRegistrationPending] = useState(false);
  // Stabilised via useMemo — clerkUser is an object that changes reference on
  // every render, so computing this inline would cause the sync effect to see
  // a new string dep on every render → spurious re-runs and auth race conditions.
  const expectedAccessKey = useMemo(
    () => isLoaded
      ? (isSignedIn && clerkUser ? `signed-in:${clerkUser.id}` : 'signed-out')
      : null,
    [isLoaded, isSignedIn, clerkUser?.id], // eslint-disable-line react-hooks/exhaustive-deps
  );

  const applyAccessSummary = useCallback((statusResult) => {
    setAccountStatus(statusResult?.accountStatus ?? null);
    setAccessStatus(statusResult?.accessStatus ?? null);
    setAccessGrantKind(statusResult?.accessGrantKind ?? null);
    setAccessExpiresAt(statusResult?.accessExpiresAt ?? null);
    setAccessDurationMonths(statusResult?.accessDurationMonths ?? null);
    setAccessWindowStartedAt(statusResult?.accessWindowStartedAt ?? null);
    setTrialStartedAt(statusResult?.trialStartedAt ?? null);
    setTrialExpiresAt(statusResult?.trialExpiresAt ?? null);
    setHasUsedTrial(statusResult?.hasUsedTrial ?? false);
    setFirstSignInAt(statusResult?.firstSignInAt ?? null);
    setLastSignInAt(statusResult?.lastSignInAt ?? null);
  }, []);

  const resetSignedInState = useCallback(() => {
    setDbUser(null);
    setRole('student');
    setAccountStatus(null);
    setAccessStatus(null);
    setAccessGrantKind(null);
    setAccessExpiresAt(null);
    setAccessDurationMonths(null);
    setAccessWindowStartedAt(null);
    setTrialStartedAt(null);
    setTrialExpiresAt(null);
    setHasUsedTrial(false);
    setFirstSignInAt(null);
    setLastSignInAt(null);
    setIsAdminUser(false);
    setAccessModalState(null);
    setIsSelectingAccessWindow(false);
  }, []);

  const forceExpirySignOut = useCallback(async (statusResult) => {
    writeAccessExpiredNotice({
      type: 'expired',
      accessExpiresAt: statusResult?.accessExpiresAt ?? null,
      accessDurationMonths: statusResult?.accessDurationMonths ?? null,
      occurredAt: Date.now(),
    });
    await clerkSignOut();
    resetSignedInState();
  }, [clerkSignOut, resetSignedInState]);

  const maybeOpenAccessSummary = useCallback(({ statusResult, finalizeResult }) => {
    if (!sessionId) return;
    if (statusResult?.accessStatus !== 'active' || !finalizeResult?.createdSession) {
      return;
    }
    const storageKey = getAccessSummaryStorageKey(sessionId, statusResult?.accessExpiresAt);
    if (!storageKey || window.sessionStorage.getItem(storageKey) === '1') {
      return;
    }
    window.sessionStorage.setItem(storageKey, '1');
    setAccessModalState({ mode: 'summary' });
  }, [sessionId]);

  useEffect(() => {
    let cancelled = false;

    if (isLoaded) {
      setExpectedIdentityMode(isSignedIn && clerkUser ? 'authenticated' : 'anonymous');
    }

    if (!isLoaded) {
      return () => {
        cancelled = true;
      };
    }

    // D7: Retry up to MAX_REGISTRATION_RETRIES times when the user JWT exists but
    // the DB row is not yet created (post-signup race window). Each retry waits
    // progressively longer: 800ms, 1600ms, 2400ms.
    const MAX_REGISTRATION_RETRIES = 3;

    async function syncUser(retryCount = 0) {
      // Local flag — set to true when we schedule a retry so that
      // setSyncedAccessKey is not committed during the waiting window.
      let pendingRetry = false;
      try {
        if (isSignedIn && clerkUser) {
          const profile = resolveClerkProfile(clerkUser);
          const client = await setAuthenticatedIdentity({
            userId: clerkUser.id,
            username: profile.username,
            email: profile.email,
            avatarUrl: profile.avatarUrl,
            fetchToken: async ({ forceRefreshToken }) =>
              await getToken({
                template: 'convex',
                skipCache: forceRefreshToken,
              }),
          });

          if (cancelled) return;

          setLogContext({ userId: clerkUser.id });
          if (!client) {
            resetSignedInState();
            setIsRegistrationPending(false);
            return;
          }
          const finalizeResult = await finalizeAuthenticatedAccess({
            sessionId,
            provider: resolveClerkProvider(clerkUser),
            userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
          });
          const [user, serverRole, statusResult] = await Promise.all([
            client.query(api.users.getUser, { userId: clerkUser.id }),
            client.query(api.users.getMyRole, {}),
            client.query(api.admin.getMyAccountStatus, {}),
          ]);
          if (cancelled) return;

          setIsRegistrationPending(false);
          applyAccessSummary(statusResult);
          setIsAdminUser(statusResult?.isAdmin ?? false);
          if (statusResult?.accessStatus === 'expired' || statusResult?.accessStatus === 'revoked') {
            await forceExpirySignOut(statusResult);
            return;
          }
          const resolvedRole = statusResult?.isAdmin ? 'admin' : (serverRole || user?.role || 'student');
          if (user?.username) {
            setCurrentUsernameOverride(user.username);
          }
          setDbUser(user ? { ...user, role: resolvedRole } : null);
          setRole(resolvedRole);
          clearAccessExpiredNotice();
          maybeOpenAccessSummary({ statusResult, finalizeResult });
          return;
        }

        await restoreAnonymousIdentity();
        if (cancelled) return;

        const anonId = getCurrentUserId();
        setLogContext({ userId: anonId || '' });
        resetSignedInState();
        setIsRegistrationPending(false);
      } catch (error) {
        if (cancelled) return;

        // D7: The server throws "Account registration is completing" during the
        // brief post-signup window before the registerUser mutation has committed
        // the users DB row. Retry with back-off so the app self-heals.
        const isRegistrationError = typeof error?.message === 'string' &&
          error.message.includes('Account registration is completing');

        if (isRegistrationError && retryCount < MAX_REGISTRATION_RETRIES) {
          pendingRetry = true;
          setIsRegistrationPending(true);
          const delay = 800 * (retryCount + 1);
          setTimeout(() => {
            if (!cancelled) void syncUser(retryCount + 1);
          }, delay);
          return;
        }

        setIsRegistrationPending(false);
        console.error('Auth sync failed:', error);
        resetSignedInState();
      } finally {
        // Don't commit the access key while we're waiting to retry —
        // isAccessReady would flip to true before auth is actually settled.
        if (!cancelled && !pendingRetry) {
          setSyncedAccessKey(expectedAccessKey);
        }
      }
    }

    void syncUser();

    return () => {
      cancelled = true;
    };
  }, [applyAccessSummary, clerkSignOut, expectedAccessKey, forceExpirySignOut, getToken, isLoaded, isSignedIn, clerkUser, maybeOpenAccessSummary, resetSignedInState, sessionId]);

  useEffect(() => {
    if (!isLoaded || !isSignedIn || (accountStatus !== 'pending' && accessStatus !== 'active')) {
      return undefined;
    }
    const client = getClient();
    if (!client) {
      return undefined;
    }

    let cancelled = false;
    const refreshAccessState = async () => {
      try {
        const statusResult = await client.query(api.admin.getMyAccountStatus, {});
        if (cancelled) return;
        applyAccessSummary(statusResult);
        const wasPendingApproval = accountStatus === 'pending' && statusResult?.accountStatus === 'approved';
        if (statusResult?.accessStatus === 'expired' || statusResult?.accessStatus === 'revoked') {
          await forceExpirySignOut(statusResult);
          return;
        }
        if (wasPendingApproval && statusResult?.accessStatus === 'active') {
          setAccessModalState({ mode: 'summary' });
        }
      } catch {
        // Non-fatal; backend request guards still enforce expiry.
      }
    };

    const intervalId = window.setInterval(() => {
      void refreshAccessState();
    }, 60_000);
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        void refreshAccessState();
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      cancelled = true;
      window.clearInterval(intervalId);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [accessStatus, accountStatus, applyAccessSummary, forceExpirySignOut, isLoaded, isSignedIn]);

  const signOut = useCallback(async () => {
    await clerkSignOut();
    if (!isLoaded) return;
    resetSignedInState();
  }, [clerkSignOut, isLoaded, resetSignedInState]);

  const selectAccessWindow = useCallback(async ({ months }) => {
    if (!sessionId) return;
    setIsSelectingAccessWindow(true);
    try {
      const statusResult = await persistAccessWindow({ months, sessionId });
      applyAccessSummary(statusResult);
      setAccessModalState({ mode: 'summary' });
      clearAccessExpiredNotice();
    } finally {
      setIsSelectingAccessWindow(false);
    }
  }, [applyAccessSummary, sessionId]);

  const value = useMemo(() => {
    const profile = isSignedIn && clerkUser ? resolveClerkProfile(clerkUser) : null;
    const resolvedRole = isAdminUser ? 'admin' : role;
    const userId = isSignedIn && clerkUser ? clerkUser.id : getCurrentUserId();
    const username = dbUser?.username || profile?.username || getCurrentUsername() || 'Anonymous';
    const avatarUrl = isSignedIn && clerkUser ? clerkUser.imageUrl : null;
    const isAccessReady = !isLoaded
      ? false
      : !isSignedIn
        ? syncedAccessKey === 'signed-out'
        : syncedAccessKey === expectedAccessKey;

    return {
      clerkUser: clerkUser ?? null,
      dbUser,
      canSignIn: HAS_CLERK,
      isAccessReady,
      // D7: True while the auth sync is retrying after a post-signup race.
      // UI components can use this to show a "Completing sign-in…" spinner.
      isRegistrationPending,
      isLoaded,
      isSignedIn: !!isSignedIn,
      role: resolvedRole,
      accountStatus,
      accessStatus,
      accessGrantKind,
      accessExpiresAt,
      accessDurationMonths,
      accessWindowStartedAt,
      trialStartedAt,
      trialExpiresAt,
      hasUsedTrial,
      firstSignInAt,
      lastSignInAt,
      isAdmin: isAdminUser,
      userId,
      username,
      avatarUrl,
      selectAccessWindow,
      signOut,
    };
  }, [accessDurationMonths, accessExpiresAt, accessGrantKind, accessStatus, accessWindowStartedAt, accountStatus, clerkUser, dbUser, expectedAccessKey, firstSignInAt, hasUsedTrial, isAdminUser, isLoaded, isRegistrationPending, isSignedIn, lastSignInAt, role, selectAccessWindow, signOut, syncedAccessKey, trialExpiresAt, trialStartedAt]);

  return (
    <AuthContext.Provider value={value}>
      {children}
      {isSignedIn && accessModalState && accessStatus === 'active' && (
        <AccessWindowModal
          mode={accessModalState.mode}
          username={value.username}
          accessGrantKind={accessGrantKind}
          accessExpiresAt={accessExpiresAt}
          accessDurationMonths={accessDurationMonths}
          hasUsedTrial={hasUsedTrial}
          busy={isSelectingAccessWindow}
          onClose={() => setAccessModalState(null)}
          onSelectDuration={selectAccessWindow}
          onSignOut={signOut}
        />
      )}
    </AuthContext.Provider>
  );
}

function AnonymousAuthContextProvider({ children }) {
  const [devSession, setDevSession] = useState(() => readStoredDevAuthSession());

  useEffect(() => {
    if (!DEV_AUTH_ENABLED) {
      return undefined;
    }

    setExpectedIdentityMode(devSession ? 'debug' : 'anonymous');

    if (devSession) {
      setLocalDebugIdentity(devSession);
      setLogContext({ userId: devSession.userId });
      return undefined;
    }

    void restoreAnonymousIdentity().then(() => {
      setLogContext({ userId: getCurrentUserId() || '' });
    });
    return undefined;
  }, [devSession]);

  const signInDebug = useCallback(async ({ role = 'student', username }) => {
    if (!DEV_AUTH_ENABLED) {
      return;
    }

    const normalizedRole = normalizeDebugRole(role);
    const baseUsername = String(username || '').trim() || `Debug ${normalizedRole.charAt(0).toUpperCase()}${normalizedRole.slice(1)}`;
    const slug = baseUsername
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '')
      .slice(0, 24) || normalizedRole;

    const session = {
      role: normalizedRole,
      userId: `debug_${normalizedRole}_${crypto.randomUUID().slice(0, 8)}`,
      username: baseUsername,
      slug,
    };

    persistDevAuthSession(session);
    setExpectedIdentityMode('debug');
    setLocalDebugIdentity(session);
    setLogContext({ userId: session.userId });
    setDevSession(session);
  }, []);

  const signOut = useCallback(async () => {
    clearStoredDevAuthSession();
    setDevSession(null);
    setExpectedIdentityMode('anonymous');
    await restoreAnonymousIdentity();
    setLogContext({ userId: getCurrentUserId() || '' });
  }, []);

  const value = useMemo(() => ({
    clerkUser: null,
    dbUser: devSession ? {
      userId: devSession.userId,
      username: devSession.username,
      role: devSession.role,
    } : null,
    canSignIn: DEV_AUTH_ENABLED,
    debugAuthEnabled: DEV_AUTH_ENABLED,
    isAccessReady: true,
    isLoaded: true,
    isSignedIn: Boolean(devSession),
    role: devSession?.role || 'student',
    accountStatus: devSession ? 'approved' : null,
    accessStatus: devSession ? 'active' : null,
    accessGrantKind: devSession ? 'unlimited' : null,
    accessExpiresAt: null,
    accessDurationMonths: null,
    accessWindowStartedAt: null,
    trialStartedAt: null,
    trialExpiresAt: null,
    hasUsedTrial: false,
    firstSignInAt: null,
    lastSignInAt: null,
    isAdmin: devSession?.role === 'admin',
    userId: devSession?.userId || getCurrentUserId(),
    username: devSession?.username || getCurrentUsername() || 'Anonymous',
    avatarUrl: null,
    selectAccessWindow: async () => {},
    signInDebug,
    signOut,
  }), [devSession, signInDebug, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function MaybeConvexProvider({ children }) {
  const client = getClient();
  if (!client) return children;
  return <ConvexProvider client={client}>{children}</ConvexProvider>;
}

function MaybeClerkConvexProvider({ children }) {
  const client = getClient();
  if (!client) return children;
  return (
    <ConvexProviderWithClerk client={client} useAuth={useClerkAuth}>
      {children}
    </ConvexProviderWithClerk>
  );
}

/* ── Outer: wraps with ClerkProvider if key is present ── */
export default function AuthProvider({ children }) {
  // If no Clerk key configured, provide an anonymous context that still
  // syncs the current DB user record and role from Convex when available.
  if (!CLERK_KEY) {
    return (
      <MaybeConvexProvider>
        <AnonymousAuthContextProvider>{children}</AnonymousAuthContextProvider>
      </MaybeConvexProvider>
    );
  }

  return (
    <ClerkProvider publishableKey={CLERK_KEY} afterSignOutUrl="/">
      <MaybeClerkConvexProvider>
        <AuthContextProvider>{children}</AuthContextProvider>
      </MaybeClerkConvexProvider>
    </ClerkProvider>
  );
}
