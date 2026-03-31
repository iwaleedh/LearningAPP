import { useState, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, Search, LogIn } from 'lucide-react';
import NotificationBell from './NotificationBell.jsx';
import UserMenu from '../auth/UserMenu.jsx';
import { useAuth } from '../../hooks/useAuth.js';
import { getLocationPath } from '../auth/accessControl.js';
import './Layout.css';

const AuthModal = lazy(() => import('../auth/AuthModal.jsx'));

export default function Header({ onMenuToggle, onSearchOpen }) {
    const { canSignIn, debugAuthEnabled, isSignedIn, isLoaded } = useAuth();
    const [authOpen, setAuthOpen] = useState(false);
    const location = useLocation();
    const redirectTo = getLocationPath(location);

    return (
        <>
            <header className="app-header">
                <button className="btn btn-icon header-menu-btn" onClick={onMenuToggle}>
                    <Menu size={22} />
                </button>

                <div className="header-spacer" />

                <div className="header-actions">
                    <button
                        className="header-search-btn"
                        onClick={onSearchOpen}
                        title="Search (⌘K)"
                    >
                        <Search size={18} />
                        <span className="search-hint">Search...</span>
                        <kbd className="search-kbd">⌘K</kbd>
                    </button>

                    {isLoaded && isSignedIn && !debugAuthEnabled && <NotificationBell />}

                    {/* Auth: show UserMenu when signed in, Sign In button only when available */}
                    {isLoaded && (
                        isSignedIn ? (
                            <UserMenu />
                        ) : canSignIn ? (
                            <button
                                type="button"
                                className="signin-btn"
                                onClick={() => setAuthOpen(true)}
                            >
                                <LogIn size={15} />
                                Sign In
                            </button>
                        ) : null
                    )}
                </div>
            </header>

            {authOpen && (
        <Suspense fallback={null}>
          <AuthModal onClose={() => setAuthOpen(false)} redirectTo={redirectTo} />
        </Suspense>
      )}
        </>
    );
}
