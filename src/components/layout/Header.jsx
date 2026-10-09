import { useState, lazy, Suspense } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, LogIn, BookOpen } from 'lucide-react';
import UserMenu from '../auth/UserMenu.jsx';
import { useAuth } from '../../hooks/useAuth.js';
import { getLocationPath } from '../auth/accessControl.js';
import './Layout.css';

const AuthModal = lazy(() => import('../auth/AuthModal.jsx'));

export default function Header({ onMenuToggle, sidebarOpen, onSearchOpen }) {
    const { canSignIn, isSignedIn, isLoaded } = useAuth();
    const [authOpen, setAuthOpen] = useState(false);
    const [authReturnFocusEl, setAuthReturnFocusEl] = useState(null);
    const location = useLocation();
    const redirectTo = getLocationPath(location);
    const openAuth = (event) => {
        setAuthReturnFocusEl(event.currentTarget);
        setAuthOpen(true);
    };

    return (
        <>
            <header className="app-header">
                <button
                    className="btn btn-icon header-menu-btn"
                    onClick={onMenuToggle}
                    aria-label={sidebarOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={Boolean(sidebarOpen)}
                    aria-controls="app-sidebar"
                >
                    <Menu size={22} aria-hidden="true" />
                </button>

                <Link to="/" className="header-brand" aria-label="Study Smart home">
                    <span className="header-brand-mark" aria-hidden="true"><BookOpen size={18} /></span>
                    <span className="header-brand-name">Study Smart</span>
                </Link>

                <div className="header-spacer" />

                <div className="header-actions">
                    <button
                        className="header-search-btn"
                        onClick={onSearchOpen}
                        aria-label="Search (Command K)"
                        aria-keyshortcuts="Meta+k"
                    >
                        <Search size={18} aria-hidden="true" />
                        <span className="search-hint" aria-hidden="true">Search...</span>
                        <kbd className="search-kbd" aria-hidden="true">⌘K</kbd>
                    </button>


                    {/* Auth: show UserMenu when signed in, Sign In button only when available */}
                    {isLoaded && (
                        isSignedIn ? (
                            <UserMenu />
                        ) : canSignIn ? (
                            <button
                                type="button"
                                className="btn btn-secondary signin-btn"
                                onClick={openAuth}
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
                    <AuthModal
                        onClose={() => setAuthOpen(false)}
                        redirectTo={redirectTo}
                        returnFocusEl={authReturnFocusEl}
                    />
        </Suspense>
      )}
        </>
    );
}
