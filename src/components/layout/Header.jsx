import { Menu, Search } from 'lucide-react';
import NotificationBell from './NotificationBell.jsx';
import './Layout.css';

export default function Header({ onMenuToggle, onSearchOpen }) {
    return (
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
            </div>
        </header>
    );
}
