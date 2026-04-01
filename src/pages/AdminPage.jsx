import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api.js';
import { useAuth } from '../hooks/useAuth.js';
import {
  Shield, UserCheck, UserX, Users, Clock,
  LayoutDashboard, ToggleLeft, ToggleRight,
  GraduationCap, Search, ChevronDown, Trash2, AlertTriangle,
  Receipt, ExternalLink, CheckCircle, XCircle,
} from 'lucide-react';
import './AdminPage.css';

// ── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(ts) {
  if (!ts) return '—';
  return new Date(ts).toLocaleDateString(undefined, {
    year: 'numeric', month: 'short', day: 'numeric',
  });
}

function StatusBadge({ status }) {
  const cls = status === 'approved' ? 'ab--approved'
    : status === 'blocked' ? 'ab--blocked'
    : 'ab--pending';
  return <span className={`admin-badge ${cls}`}>{status}</span>;
}

// ── Overview Tab ─────────────────────────────────────────────────────────────

function OverviewTab({ allUsers, pendingUsers }) {
  const approved = allUsers.filter(u => u.accountStatus === 'approved');
  const blocked  = allUsers.filter(u => u.accountStatus === 'blocked');
  const teachers = allUsers.filter(u => u.role === 'teacher');
  const students = allUsers.filter(u => u.role === 'student');

  const stats = [
    { icon: Users,       label: 'Total Users',  value: allUsers.length,    color: 'var(--color-primary)' },
    { icon: Clock,       label: 'Pending',       value: pendingUsers.length, color: 'var(--color-accent)' },
    { icon: UserCheck,   label: 'Approved',      value: approved.length,    color: 'var(--color-success)' },
    { icon: UserX,       label: 'Blocked',       value: blocked.length,     color: 'var(--color-error)' },
    { icon: GraduationCap, label: 'Teachers',    value: teachers.length,    color: '#8b5cf6' },
    { icon: Users,       label: 'Students',      value: students.length,    color: '#06b6d4' },
  ];

  return (
    <div className="admin-overview">
      <div className="admin-stat-grid">
        {stats.map(s => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="admin-stat-card card">
              <div className="admin-stat-icon" style={{ color: s.color }}>
                <Icon size={24} />
              </div>
              <div className="admin-stat-value">{s.value}</div>
              <div className="admin-stat-label">{s.label}</div>
            </div>
          );
        })}
      </div>

      {pendingUsers.length > 0 && (
        <div className="admin-pending-notice card">
          <Clock size={18} />
          <span>
            <strong>{pendingUsers.length}</strong> user{pendingUsers.length > 1 ? 's' : ''} waiting for approval.
          </span>
        </div>
      )}
    </div>
  );
}

// ── Users Tab ─────────────────────────────────────────────────────────────────

// ── Delete Confirm Modal ─────────────────────────────────────────────────────

function DeleteConfirmModal({ user, onConfirm, onCancel, busy }) {
  return (
    <div className="admin-modal-overlay" onClick={onCancel}>
      <div className="admin-modal card" onClick={e => e.stopPropagation()}>
        <div className="admin-modal-icon">
          <AlertTriangle size={32} color="var(--color-error)" />
        </div>
        <h3 className="admin-modal-title">Delete User</h3>
        <p className="admin-modal-body">
          Permanently delete <strong>{user.username || user.email || 'this user'}</strong>?
          This cannot be undone.
        </p>
        <div className="admin-modal-actions">
          <button className="btn btn-secondary" onClick={onCancel} disabled={busy}>Cancel</button>
          <button className="btn admin-btn-delete" onClick={onConfirm} disabled={busy}>
            {busy ? 'Deleting…' : <><Trash2 size={14} /> Delete</>}
          </button>
        </div>
      </div>
    </div>
  );
}

function RoleSelect({ userId, currentRole }) {
  const setRole = useMutation(api.admin.setUserRole);
  const [busy, setBusy] = useState(false);

  const handle = async (e) => {
    const newRole = e.target.value;
    if (newRole === currentRole) return;
    setBusy(true);
    try { await setRole({ userId, role: newRole }); }
    catch (err) { console.error(err); }
    finally { setBusy(false); }
  };

  return (
    <div className="admin-role-wrap">
      <select className="admin-role-select" value={currentRole} onChange={handle} disabled={busy}>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>
      <ChevronDown size={14} className="admin-role-chevron" />
    </div>
  );
}

function UserRow({ user, onApprove, onBlock, onUnblock, onDelete, busy }) {
  const isPending  = user.accountStatus === 'pending';
  const isBlocked  = user.accountStatus === 'blocked';
  const isApproved = user.accountStatus === 'approved';

  return (
    <tr className="admin-user-row">
      <td>
        <div className="admin-user-info">
          {user.avatarUrl
            ? <img src={user.avatarUrl} alt="" className="admin-avatar" />
            : <div className="admin-avatar-placeholder">{(user.username || '?')[0].toUpperCase()}</div>
          }
          <div>
            <div className="admin-user-name">{user.username || 'Unknown'}</div>
            <div className="admin-user-email">{user.email || '—'}</div>
          </div>
        </div>
      </td>
      <td><StatusBadge status={user.accountStatus} /></td>
      <td><RoleSelect userId={user.userId} currentRole={user.role || 'student'} /></td>
      <td className="admin-date">{formatDate(user.createdAt)}</td>
      <td>
        <div className="admin-action-btns">
          {isPending && <>
            <button className="btn btn-sm btn-primary" disabled={busy} onClick={() => onApprove(user.userId)}>
              <UserCheck size={13} /> Approve
            </button>
            <button className="btn btn-sm admin-btn-block" disabled={busy} onClick={() => onBlock(user.userId)}>
              <UserX size={13} /> Block
            </button>
          </>}
          {isApproved && (
            <button className="btn btn-sm admin-btn-block" disabled={busy} onClick={() => onBlock(user.userId)}>
              <UserX size={13} /> Block
            </button>
          )}
          {isBlocked && (
            <button className="btn btn-sm btn-secondary" disabled={busy} onClick={() => onUnblock(user.userId)}>
              <UserCheck size={13} /> Unblock
            </button>
          )}
          <button className="btn btn-sm admin-btn-delete" disabled={busy} onClick={() => onDelete(user)} title="Delete user">
            <Trash2 size={13} />
          </button>
        </div>
      </td>
    </tr>
  );
}

function UsersTab({ allUsers, pendingUsers }) {
  const [filter, setFilter] = useState('all'); // 'all' | 'pending' | 'approved' | 'blocked'
  const [search, setSearch] = useState('');
  const [busy, setBusy] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null); // user object to confirm deletion

  const approve     = useMutation(api.admin.approveUser);
  const block       = useMutation(api.admin.blockUser);
  const unblock     = useMutation(api.admin.unblockUser);
  const deleteUser  = useMutation(api.admin.deleteUser);

  const handleApprove = async (userId) => { setBusy(true); try { await approve({ userId }); } catch (e) { console.error(e); } finally { setBusy(false); } };
  const handleBlock   = async (userId) => { setBusy(true); try { await block({ userId }); } catch (e) { console.error(e); } finally { setBusy(false); } };
  const handleUnblock = async (userId) => { setBusy(true); try { await unblock({ userId }); } catch (e) { console.error(e); } finally { setBusy(false); } };
  const handleDeleteConfirm = async () => {
    if (!deleteTarget) return;
    setBusy(true);
    try { await deleteUser({ userId: deleteTarget.userId }); }
    catch (e) { console.error(e); }
    finally { setBusy(false); setDeleteTarget(null); }
  };

  const source = filter === 'pending' ? pendingUsers : allUsers;
  const displayed = source.filter(u => {
    if (filter !== 'all' && filter !== 'pending' && u.accountStatus !== filter) return false;
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (u.username || '').toLowerCase().includes(q) || (u.email || '').toLowerCase().includes(q);
  });

  return (
    <div className="admin-users-tab">
      {deleteTarget && (
        <DeleteConfirmModal
          user={deleteTarget}
          onConfirm={handleDeleteConfirm}
          onCancel={() => setDeleteTarget(null)}
          busy={busy}
        />
      )}
      <div className="admin-users-toolbar">
        <div className="admin-search-wrap">
          <Search size={15} className="admin-search-icon" />
          <input
            className="admin-search"
            placeholder="Search by name or email…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="admin-filter-pills">
          {['all', 'pending', 'approved', 'blocked'].map(f => (
            <button
              key={f}
              className={`admin-pill ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
              {f === 'pending' && pendingUsers.length > 0 && (
                <span className="admin-pill-count">{pendingUsers.length}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="admin-table-wrap card">
        {displayed.length === 0 ? (
          <div className="admin-empty">No users match this filter.</div>
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
              {displayed.map(user => (
                <UserRow
                  key={user._id}
                  user={user}
                  onApprove={handleApprove}
                  onBlock={handleBlock}
                  onUnblock={handleUnblock}
                  onDelete={setDeleteTarget}
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

// ── Feature Flags Tab ─────────────────────────────────────────────────────────

function FlagRow({ flag }) {
  const setFlag = useMutation(api.featureFlags.setFlag);
  const [busy, setBusy] = useState(false);

  const toggle = async () => {
    setBusy(true);
    try { await setFlag({ key: flag.key, enabled: !flag.enabled }); }
    catch (err) { console.error(err); }
    finally { setBusy(false); }
  };

  return (
    <div className="flag-row card">
      <div className="flag-info">
        <div className="flag-label">{flag.label}</div>
        <div className="flag-desc">{flag.description}</div>
      </div>
      <button
        className={`flag-toggle ${flag.enabled ? 'flag-toggle--on' : 'flag-toggle--off'}`}
        onClick={toggle}
        disabled={busy}
        title={flag.enabled ? 'Click to disable' : 'Click to enable'}
      >
        {flag.enabled
          ? <><ToggleRight size={28} /> <span>Enabled</span></>
          : <><ToggleLeft size={28} /> <span>Disabled</span></>
        }
      </button>
    </div>
  );
}

function FeaturesTab() {
  const flags = useQuery(api.featureFlags.getAllFlags) ?? [];

  if (flags.length === 0) {
    return <div className="admin-empty">Loading feature flags…</div>;
  }

  return (
    <div className="admin-flags">
      <p className="admin-flags-hint">
        Toggle features on or off for all users. Changes take effect immediately.
      </p>
      <div className="flag-list">
        {flags.map(flag => <FlagRow key={flag.key} flag={flag} />)}
      </div>
    </div>
  );
}

// ── Payments Tab ──────────────────────────────────────────────────────────────

function PaymentSlip({ slipUrl, mimeType, fileName }) {
  if (!slipUrl) return <span className="admin-date">—</span>;
  if (mimeType && mimeType.startsWith('image/')) {
    return (
      <a href={slipUrl} target="_blank" rel="noopener noreferrer" title="View full size">
        <img src={slipUrl} alt={fileName} className="payment-slip-thumb" />
      </a>
    );
  }
  return (
    <a href={slipUrl} target="_blank" rel="noopener noreferrer" className="payment-slip-link">
      <ExternalLink size={13} /> View PDF
    </a>
  );
}

function PaymentStatusBadge({ status }) {
  const cls = status === 'approved' ? 'ab--approved'
    : status === 'rejected' ? 'ab--blocked'
    : 'ab--pending';
  return <span className={`admin-badge ${cls}`}>{status}</span>;
}

function PaymentRow({ req }) {
  const review = useMutation(api.paymentRequests.reviewPaymentRequest);
  const [busy, setBusy] = useState(false);
  const [showReject, setShowReject] = useState(false);
  const [notes, setNotes] = useState('');

  const handleApprove = async () => {
    setBusy(true);
    try { await review({ requestId: req._id, decision: 'approved' }); }
    catch (e) { console.error(e); }
    finally { setBusy(false); }
  };

  const handleReject = async () => {
    setBusy(true);
    try { await review({ requestId: req._id, decision: 'rejected', adminNotes: notes || undefined }); }
    catch (e) { console.error(e); }
    finally { setBusy(false); setShowReject(false); setNotes(''); }
  };

  return (
    <tr className="admin-user-row">
      <td>
        <div className="admin-user-info">
          {req.avatarUrl
            ? <img src={req.avatarUrl} alt="" className="admin-avatar" />
            : <div className="admin-avatar-placeholder">{(req.username || '?')[0].toUpperCase()}</div>
          }
          <div>
            <div className="admin-user-name">{req.username || 'Unknown'}</div>
            <div className="admin-user-email">{req.email || '—'}</div>
          </div>
        </div>
      </td>
      <td style={{ textTransform: 'capitalize' }}>{req.plan}</td>
      <td>MVR {req.amount.toLocaleString()}</td>
      <td className="admin-date">{formatDate(req.submittedAt)}</td>
      <td><PaymentStatusBadge status={req.status} /></td>
      <td><PaymentSlip slipUrl={req.slipUrl} mimeType={req.mimeType} fileName={req.fileName} /></td>
      <td>
        {req.status === 'pending' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <div className="admin-action-btns">
              <button className="btn btn-sm btn-primary" disabled={busy} onClick={handleApprove}>
                <CheckCircle size={13} /> Approve
              </button>
              <button className="btn btn-sm admin-btn-block" disabled={busy} onClick={() => setShowReject(v => !v)}>
                <XCircle size={13} /> Reject
              </button>
            </div>
            {showReject && (
              <div className="admin-reject-form">
                <input
                  className="admin-search"
                  placeholder="Reason (optional)…"
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  style={{ marginBottom: 'var(--space-1)' }}
                />
                <button className="btn btn-sm admin-btn-block" disabled={busy} onClick={handleReject}>
                  Confirm Reject
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            <div className="admin-date">{formatDate(req.reviewedAt)}</div>
            {req.adminNotes && <div className="admin-notes-text">{req.adminNotes}</div>}
          </div>
        )}
      </td>
    </tr>
  );
}

function PaymentsTab() {
  const [filter, setFilter] = useState('all');
  const requests = useQuery(api.paymentRequests.listAllPaymentRequests) ?? [];

  const pending = requests.filter(r => r.status === 'pending');

  const displayed = filter === 'all' ? requests
    : requests.filter(r => r.status === filter);

  return (
    <div className="admin-payments-tab">
      <div className="admin-users-toolbar">
        <div className="admin-filter-pills">
          {['all', 'pending', 'approved', 'rejected'].map(f => (
            <button
              key={f}
              className={`admin-pill ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
              {f === 'pending' && pending.length > 0 && (
                <span className="admin-pill-count">{pending.length}</span>
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="admin-table-wrap card">
        {displayed.length === 0 ? (
          <div className="admin-empty">No payment requests match this filter.</div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Plan</th>
                <th>Amount</th>
                <th>Submitted</th>
                <th>Status</th>
                <th>Slip</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {displayed.map(req => (
                <PaymentRow key={req._id} req={req} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

const TABS = [
  { id: 'overview', label: 'Overview',      icon: LayoutDashboard },
  { id: 'users',    label: 'Users',         icon: Users },
  { id: 'features', label: 'Feature Flags', icon: ToggleRight },
  { id: 'payments', label: 'Payments',      icon: Receipt },
];

export default function AdminPage() {
  const navigate = useNavigate();
  const { isAdmin } = useAuth();
  const [tab, setTab] = useState('overview');

  const pendingUsers    = useQuery(api.admin.listPendingUsers) ?? [];
  const allUsers        = useQuery(api.admin.listAllUsersAdmin) ?? [];
  const allPayments     = useQuery(api.paymentRequests.listAllPaymentRequests) ?? [];
  const pendingPayments = allPayments.filter(r => r.status === 'pending');

  if (isAdmin === false) {
    navigate('/', { replace: true });
    return null;
  }

  const totalPending = pendingUsers.length + pendingPayments.length;

  return (
    <div className="admin-page animate-fade-in">
      {/* Header */}
      <div className="admin-header">
        <div className="admin-header-left">
          <Shield size={28} className="admin-header-icon" />
          <div>
            <h1 className="admin-title">Admin Dashboard</h1>
            <p className="admin-subtitle">Control users, roles, and platform features</p>
          </div>
        </div>
        {totalPending > 0 && (
          <div className="admin-header-badge">
            <Clock size={14} /> {totalPending} pending
          </div>
        )}
      </div>

      {/* Tab bar */}
      <div className="admin-tabs">
        {TABS.map(t => {
          const Icon = t.icon;
          const badge = t.id === 'users' ? pendingUsers.length
            : t.id === 'payments' ? pendingPayments.length
            : 0;
          return (
            <button
              key={t.id}
              className={`admin-tab ${tab === t.id ? 'active' : ''}`}
              onClick={() => setTab(t.id)}
            >
              <Icon size={16} />
              {t.label}
              {badge > 0 && <span className="admin-tab-count">{badge}</span>}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <div className="admin-content">
        {tab === 'overview' && <OverviewTab allUsers={allUsers} pendingUsers={pendingUsers} />}
        {tab === 'users'    && <UsersTab allUsers={allUsers} pendingUsers={pendingUsers} />}
        {tab === 'features' && <FeaturesTab />}
        {tab === 'payments' && <PaymentsTab />}
      </div>
    </div>
  );
}
