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
import {
  getClient,
  getCurrentUserId,
  getCurrentUsername,
  restoreAnonymousIdentity,
  setExpectedIdentityMode,
  setLocalDebugIdentity,
  setCurrentUsernameOverride,
  setAuthenticatedIdentity,
} from '../convex-client.js';
import { setLogContext } from '../services/logger/logger.js';

const CLERK_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const HAS_CLERK = Boolean(CLERK_KEY);
const DEV_AUTH_ENABLED = import.meta.env.DEV && !HAS_CLERK;
const DEV_AUTH_STORAGE_KEY = 'lt_dev_auth_session';

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

    const role = parsed.role === 'teacher' ? 'teacher' : 'student';
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
  const { getToken } = useClerkAuth();
  const [dbUser, setDbUser] = useState(null);
  const [role, setRole] = useState('student');
  const [accountStatus, setAccountStatus] = useState(null);
  const [isAdminUser, setIsAdminUser] = useState(false);
  const [syncedAccessKey, setSyncedAccessKey] = useState(null);
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
            setDbUser(null);
            setRole('student');
            setIsRegistrationPending(false);
            return;
          }
          const [user, serverRole, statusResult] = await Promise.all([
            client.query(api.users.getUser, { userId: clerkUser.id }),
            client.query(api.users.getMyRole, {}),
            client.query(api.admin.getMyAccountStatus, {}),
          ]);
          if (cancelled) return;

          setIsRegistrationPending(false);
          setAccountStatus(statusResult?.accountStatus ?? null);
          setIsAdminUser(statusResult?.isAdmin ?? false);
          const resolvedRole = statusResult?.isAdmin ? 'admin' : (serverRole || user?.role || 'student');
          if (user?.username) {
            setCurrentUsernameOverride(user.username);
          }
          setDbUser(user ? { ...user, role: resolvedRole } : null);
          setRole(resolvedRole);
          return;
        }

        await restoreAnonymousIdentity();
        if (cancelled) return;

        const anonId = getCurrentUserId();
        setLogContext({ userId: anonId || '' });
        setDbUser(null);
        setRole('student');
        setAccountStatus(null);
        setIsAdminUser(false);
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
        setDbUser(null);
        setRole('student');
        setAccountStatus(null);
        setIsAdminUser(false);
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
  }, [expectedAccessKey, getToken, isLoaded, isSignedIn, clerkUser]);

  const signOut = useCallback(async () => {
    await clerkSignOut();
    if (!isLoaded) return;
    setDbUser(null);
    setRole('student');
    setAccountStatus(null);
    setIsAdminUser(false);
  }, [clerkSignOut, isLoaded]);

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
      isAdmin: isAdminUser,
      userId,
      username,
      avatarUrl,
      signOut,
    };
  }, [accountStatus, clerkUser, dbUser, expectedAccessKey, isAdminUser, isLoaded, isRegistrationPending, isSignedIn, role, signOut, syncedAccessKey]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
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

    const normalizedRole = role === 'teacher' ? 'teacher' : 'student';
    const baseUsername = String(username || '').trim() || `Debug ${normalizedRole === 'teacher' ? 'Teacher' : 'Student'}`;
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
    isAdmin: false,
    userId: devSession?.userId || getCurrentUserId(),
    username: devSession?.username || getCurrentUsername() || 'Anonymous',
    avatarUrl: null,
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
