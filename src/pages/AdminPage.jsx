import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api.js';
import { useAuth } from '../hooks/useAuth.js';
import { Shield, UserCheck, UserX, Users, Clock } from 'lucide-react';

function formatDate(ts) {
  if (!ts) return '—';
  return new Date(ts).toLocaleDateString(undefined, {
    year: 'numeric', month: 'short', day: 'numeric',
  });
}

function StatusBadge({ status }) {
  const cls = status === 'approved' ? 'admin-badge--approved'
    : status === 'blocked' ? 'admin-badge--blocked'
    : 'admin-badge--pending';
  return <span className={`admin-badge ${cls}`}>{status}</span>;
}

function RoleSelect({ userId, currentRole }) {
  const setRole = useMutation(api.admin.setUserRole);
  const [busy, setBusy] = useState(false);

  const handleChange = async (e) => {
    const newRole = e.target.value;
    if (newRole === currentRole) return;
    setBusy(true);
    try {
      await setRole({ userId, role: newRole });
    } catch (err) {
      console.error('Failed to set role:', err);
    } finally {
      setBusy(false);
    }
  };

  return (
    <select
      className="admin-role-select"
      value={currentRole}
      onChange={handleChange}
      disabled={busy}
    >
      <option value="student">Student</option>
      <option value="teacher">Teacher</option>
    </select>
  );
}

function UserRow({ user, onApprove, onBlock, onUnblock, busy }) {
  const isPending = user.accountStatus === 'pending';
  const isBlocked = user.accountStatus === 'blocked';
  const isApproved = user.accountStatus === 'approved';

  return (
    <tr className="admin-user-row">
      <td className="admin-user-cell">
        <div className="admin-user-info">
          {user.avatarUrl && <img src={user.avatarUrl} alt="" className="admin-avatar" />}
          <div>
            <div className="admin-user-name">{user.username || 'Unknown'}</div>
            <div className="admin-user-email">{user.email || '—'}</div>
          </div>
        </div>
      </td>
      <td><StatusBadge status={user.accountStatus} /></td>
      <td><RoleSelect userId={user.userId} currentRole={user.role || 'student'} /></td>
      <td className="admin-date">{formatDate(user.createdAt)}</td>
      <td className="admin-actions-cell">
        {isPending && (
          <>
            <button className="btn btn-sm btn-primary" disabled={busy} onClick={() => onApprove(user.userId)}>
              <UserCheck size={14} /> Approve
            </button>
            <button className="btn btn-sm admin-btn-block" disabled={busy} onClick={() => onBlock(user.userId)}>
              <UserX size={14} /> Block
            </button>
          </>
        )}
        {isApproved && (
          <button className="btn btn-sm admin-btn-block" disabled={busy} onClick={() => onBlock(user.userId)}>
            <UserX size={14} /> Block
          </button>
        )}
        {isBlocked && (
          <button className="btn btn-sm btn-secondary" disabled={busy} onClick={() => onUnblock(user.userId)}>
            <UserCheck size={14} /> Unblock
          </button>
        )}
      </td>
    </tr>
  );
}

export default function AdminPage() {
  const navigate = useNavigate();
  const { isAdmin } = useAuth();
  const [tab, setTab] = useState('pending');
  const [busy, setBusy] = useState(false);

  const pendingUsers = useQuery(api.admin.listPendingUsers) ?? [];
  const allUsers = useQuery(api.admin.listAllUsersAdmin) ?? [];

  const approve = useMutation(api.admin.approveUser);
  const block = useMutation(api.admin.blockUser);
  const unblock = useMutation(api.admin.unblockUser);

  // Guard — redirect non-admins (belt-and-suspenders; route guard also handles this)
  if (isAdmin === false) {
    navigate('/', { replace: true });
    return null;
  }

  const handleApprove = async (userId) => {
    setBusy(true);
    try { await approve({ userId }); } catch (e) { console.error(e); }
    finally { setBusy(false); }
  };
  const handleBlock = async (userId) => {
    setBusy(true);
    try { await block({ userId }); } catch (e) { console.error(e); }
    finally { setBusy(false); }
  };
  const handleUnblock = async (userId) => {
    setBusy(true);
    try { await unblock({ userId }); } catch (e) { console.error(e); }
    finally { setBusy(false); }
  };

  const displayUsers = tab === 'pending' ? pendingUsers : allUsers;

  return (
    <div className="admin-page animate-fade-in">
      <div className="admin-header">
        <div className="admin-header-left">
          <Shield size={28} className="admin-header-icon" />
          <div>
            <h1 className="admin-title">Admin Panel</h1>
            <p className="admin-subtitle">Manage user accounts and permissions</p>
          </div>
        </div>
      </div>

      {/* Stat cards */}
      <div className="admin-stats">
        <div className="stat-card">
          <Clock size={20} />
          <div>
            <div className="stat-card-value">{pendingUsers.length}</div>
            <div className="stat-card-label">Pending</div>
          </div>
        </div>
        <div className="stat-card">
          <UserCheck size={20} />
          <div>
            <div className="stat-card-value">{allUsers.filter(u => u.accountStatus === 'approved').length}</div>
            <div className="stat-card-label">Approved</div>
          </div>
        </div>
        <div className="stat-card">
          <UserX size={20} />
          <div>
            <div className="stat-card-value">{allUsers.filter(u => u.accountStatus === 'blocked').length}</div>
            <div className="stat-card-label">Blocked</div>
          </div>
        </div>
        <div className="stat-card">
          <Users size={20} />
          <div>
            <div className="stat-card-value">{allUsers.length}</div>
            <div className="stat-card-label">Total</div>
          </div>
        </div>
      </div>

      {/* Tab bar */}
      <div className="admin-tabs">
        <button
          className={`admin-tab ${tab === 'pending' ? 'active' : ''}`}
          onClick={() => setTab('pending')}
        >
          Pending Approvals
          {pendingUsers.length > 0 && (
            <span className="admin-tab-count">{pendingUsers.length}</span>
          )}
        </button>
        <button
          className={`admin-tab ${tab === 'all' ? 'active' : ''}`}
          onClick={() => setTab('all')}
        >
          All Users
        </button>
      </div>

      {/* User table */}
      <div className="admin-table-wrap card">
        {displayUsers.length === 0 ? (
          <div className="admin-empty">
            {tab === 'pending'
              ? 'No pending accounts. All clear!'
              : 'No users found.'}
          </div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Status</th>
                <th>Role</th>
                <th>Joined</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {displayUsers.map(user => (
                <UserRow
                  key={user._id}
                  user={user}
                  onApprove={handleApprove}
                  onBlock={handleBlock}
                  onUnblock={handleUnblock}
                  busy={busy}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
