/**
 * useAuth — convenience hook for AuthContext.
 * Usage: const { canSignIn, isSignedIn, userId, username, role, avatarUrl } = useAuth();
 */
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
  return ctx;
}
