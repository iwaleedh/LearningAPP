/**
 * UserMenu.jsx
 * Avatar + username pill in the Header.
 * Shows a dropdown with profile info and sign-out.
 */
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth.js';
import './UserMenu.css';

export default function UserMenu() {
  const { username, avatarUrl, role, signOut } = useAuth();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();

  // Close on outside click
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const initials = username
    ? username.slice(0, 2).toUpperCase()
    : '??';

  function handleProfileClick() {
    setOpen(false);
    navigate(
      {
        pathname: '/settings',
        hash: '#profile',
      },
      {
        state: { focusSection: 'profile' },
      },
    );
  }

  return (
    <div className="user-menu-wrapper" ref={ref}>
      <button
        type="button"
        className="user-menu-btn"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        {avatarUrl ? (
          <img src={avatarUrl} alt={username} className="user-avatar" />
        ) : (
          <div className="user-avatar-initials">{initials}</div>
        )}
        <span className="user-menu-name">{username}</span>
      </button>

      {open && (
        <div className="user-menu-dropdown" role="menu">
          <div className="user-menu-info">
            <p className="user-menu-info-name">{username}</p>
            <p className="user-menu-info-role">{role}</p>
          </div>

          <button
            type="button"
            className="user-menu-item"
            onClick={handleProfileClick}
            role="menuitem"
          >
            <User size={15} />
            Profile
          </button>

          <button
            type="button"
            className="user-menu-item user-menu-item--danger"
            onClick={async () => { setOpen(false); await signOut(); }}
            role="menuitem"
          >
            <LogOut size={15} />
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
