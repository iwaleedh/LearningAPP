import { useState } from 'react';
import { Menu, Search, LogIn } from 'lucide-react';
import NotificationBell from './NotificationBell.jsx';
import UserMenu from '../auth/UserMenu.jsx';
import AuthModal from '../auth/AuthModal.jsx';
import { useAuth } from '../../hooks/useAuth.js';
import './Layout.css';

export default function Header({ onMenuToggle, onSearchOpen }) {
    const { isSignedIn, isLoaded } = useAuth();
    const [authOpen, setAuthOpen] = useState(false);

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

                    <NotificationBell />

                    {/* Auth: show UserMenu when signed in, Sign In button otherwise */}
                    {isLoaded && (
                        isSignedIn ? (
                            <UserMenu />
                        ) : (
                            <button
                                className="signin-btn"
                                onClick={() => setAuthOpen(true)}
                            >
                                <LogIn size={15} />
                                Sign In
                            </button>
                        )
                    )}
                </div>
            </header>

            {authOpen && <AuthModal onClose={() => setAuthOpen(false)} />}
        </>
    );
}
