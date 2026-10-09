import { NavLink, useLocation } from 'react-router-dom';
import { Home, BookOpen, Target, TrendingUp, Menu } from 'lucide-react';
import { useFeatureFlags } from '../../hooks/useFeatureFlags.js';
import './Layout.css';

// Phone-only primary navigation. "Practice" groups every self-test surface.
const PRACTICE_PATHS = ['/exercises', '/flashcards', '/past-papers', '/mistakes'];

export default function MobileTabBar({ onMore, moreOpen }) {
    const location = useLocation();
    const { isEnabled } = useFeatureFlags();
    const path = location.pathname;

    const tabs = [
        { key: 'home', to: '/', label: 'Home', icon: Home, active: path === '/' },
        isEnabled('notes') ? { key: 'notes', to: '/chapters', label: 'Notes', icon: BookOpen, active: path.startsWith('/chapters') || path.startsWith('/notes') } : null,
        isEnabled('exercises') ? { key: 'practice', to: '/exercises', label: 'Practice', icon: Target, active: PRACTICE_PATHS.some((p) => path.startsWith(p)) } : null,
        isEnabled('progress') ? { key: 'progress', to: '/progress', label: 'Progress', icon: TrendingUp, active: path.startsWith('/progress') } : null,
    ].filter(Boolean);

    return (
        <nav className="mobile-tabbar" aria-label="Primary">
            {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                    <NavLink
                        key={tab.key}
                        to={tab.to}
                        className={`mobile-tab ${tab.active ? 'is-active' : ''}`}
                        aria-current={tab.active ? 'page' : undefined}
                    >
                        <Icon size={22} aria-hidden="true" strokeWidth={tab.active ? 2.4 : 2} />
                        <span>{tab.label}</span>
                    </NavLink>
                );
            })}
            <button
                type="button"
                className={`mobile-tab ${moreOpen ? 'is-active' : ''}`}
                onClick={onMore}
                aria-expanded={Boolean(moreOpen)}
                aria-controls="app-sidebar"
            >
                <Menu size={22} aria-hidden="true" />
                <span>More</span>
            </button>
        </nav>
    );
}
