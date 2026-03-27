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
import { ClerkProvider, useUser, useClerk } from '@clerk/clerk-react';
import AuthContext from './AuthContext';
import { api } from '../../convex/_generated/api.js';
import { getClient, getCurrentUserId, getCurrentUsername, onConvexReady } from '../convex-client.js';

const CLERK_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const HAS_CLERK = Boolean(CLERK_KEY);

/* ── Inner provider: runs inside ClerkProvider so it can call useUser ── */
function AuthContextProvider({ children }) {
  const { user: clerkUser, isLoaded, isSignedIn } = useUser();
  const { signOut: clerkSignOut } = useClerk();
  const [dbUser, setDbUser] = useState(null);
  const [role, setRole] = useState('student');

  // When Clerk loads a signed-in user, upsert into Convex and pull role
  useEffect(() => {
    if (!isLoaded) return;

    const client = getClient();
    if (!client) return;

    if (isSignedIn && clerkUser) {
      const clerkId = clerkUser.id;
      const username =
        clerkUser.username ||
        clerkUser.firstName ||
        clerkUser.emailAddresses?.[0]?.emailAddress?.split('@')[0] ||
        `user_${clerkId.slice(-6)}`;
      const email = clerkUser.primaryEmailAddress?.emailAddress || undefined;
      const avatarUrl = clerkUser.imageUrl || undefined;

      // Upsert user record in Convex
      client
        .mutation(api.users.registerUser, { userId: clerkId, username, email, avatarUrl })
        .then(() => client.query(api.users.getUser, { userId: clerkId }))
        .then((u) => {
          setDbUser(u);
          setRole(u?.role ?? 'student');
        })
        .catch(console.error);
    } else {
      // Anonymous — read existing anon record if available
      const anonId = getCurrentUserId();
      if (anonId) {
        client
          .query(api.users.getUser, { userId: anonId })
          .then((u) => {
            setDbUser(u ?? null);
            setRole(u?.role ?? 'student');
          })
          .catch(() => {});
      }
    }
  }, [isLoaded, isSignedIn, clerkUser]);

  const signOut = useCallback(async () => {
    await clerkSignOut();
    setDbUser(null);
    setRole('student');
  }, [clerkSignOut]);

  const value = useMemo(() => {
    const userId = isSignedIn && clerkUser ? clerkUser.id : getCurrentUserId();
    const username =
      (isSignedIn && clerkUser
        ? clerkUser.username ||
          clerkUser.firstName ||
          clerkUser.emailAddresses?.[0]?.emailAddress?.split('@')[0]
        : getCurrentUsername()) || 'Anonymous';
    const avatarUrl = isSignedIn && clerkUser ? clerkUser.imageUrl : null;

    return {
      clerkUser: clerkUser ?? null,
      dbUser,
      canSignIn: HAS_CLERK,
      isLoaded,
      isSignedIn: !!isSignedIn,
      role,
      userId,
      username,
      avatarUrl,
      signOut,
    };
  }, [clerkUser, dbUser, isLoaded, isSignedIn, role, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function AnonymousAuthContextProvider({ children }) {
  const [dbUser, setDbUser] = useState(null);
  const [role, setRole] = useState('student');

  useEffect(() => {
    let cancelled = false;

    const syncAnonymousUser = async (
      client = getClient(),
      userId = getCurrentUserId(),
    ) => {
      if (!client || !userId) return;

      try {
        const user = await client.query(api.users.getUser, { userId });
        if (cancelled) return;
        setDbUser(user ?? null);
        setRole(user?.role ?? 'student');
      } catch {
        if (cancelled) return;
        setDbUser(null);
        setRole('student');
      }
    };

    void syncAnonymousUser();
    onConvexReady((client, userId) => {
      void syncAnonymousUser(client, userId);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo(() => ({
    clerkUser: null,
    dbUser,
    canSignIn: false,
    isLoaded: true,
    isSignedIn: false,
    role,
    userId: getCurrentUserId(),
    username: getCurrentUsername() || 'Anonymous',
    avatarUrl: null,
    signOut: async () => {},
  }), [dbUser, role]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/* ── Outer: wraps with ClerkProvider if key is present ── */
export default function AuthProvider({ children }) {
  // If no Clerk key configured, provide an anonymous context that still
  // syncs the current DB user record and role from Convex when available.
  if (!CLERK_KEY) {
    return <AnonymousAuthContextProvider>{children}</AnonymousAuthContextProvider>;
  }

  return (
    <ClerkProvider publishableKey={CLERK_KEY} afterSignOutUrl="/">
      <AuthContextProvider>{children}</AuthContextProvider>
    </ClerkProvider>
  );
}
