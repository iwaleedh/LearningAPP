import { createContext } from 'react';

/**
 * AuthContext — shape:
 * {
 *   clerkUser: Clerk User object | null,
 *   dbUser:    Convex users row  | null,
 *   canSignIn: boolean,
 *   isLoaded:  boolean,
 *   isAccessReady: boolean,
 *   isSignedIn: boolean,
 *   role: 'student' | 'teacher',
 *   userId: string,           // Clerk ID or anon UUID
 *   username: string,
 *   avatarUrl: string | null,
 * }
 */
const AuthContext = createContext(null);
export default AuthContext;
