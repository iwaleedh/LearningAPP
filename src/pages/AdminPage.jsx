import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api.js';
import { useAuth } from '../hooks/useAuth.js';
import { formatAccessDueDate, formatAccessDueDateExact } from '../services/auth/accessWindow.js';
import { readAdminDevFixture } from './adminDevFixture.js';
import {
  Shield, UserCheck, UserX, Users, Clock,
  LayoutDashboard, ToggleLeft, ToggleRight,
  GraduationCap, Search, ChevronDown, Trash2, AlertTriangle,
  Receipt, ExternalLink, CheckCircle, XCircle,
  Activity, Mail, Workflow,
} from 'lucide-react';
import './AdminPage.css';

// ── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(ts) {
  if (!ts) return '—';
  return new Date(ts).toLocaleDateString(undefined, {
    year: 'numeric', month: 'short', day: 'numeric',
  });
}

function toDatetimeLocalValue(timestamp) {
  if (!timestamp) return '';
  const date = new Date(timestamp);
  const localDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
  return localDate.toISOString().slice(0, 16);
}

function fromDatetimeLocalValue(value) {
  if (!value) return null;
  const parsed = Date.parse(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function ExpiryTimestampCell({ timestamp, isUnlimited = false, detail = null }) {
  if (isUnlimited) {
    return <span className="admin-date">No limit</span>;
  }

  if (!timestamp) {
    return <span className="admin-date">—</span>;
  }

  return (
    <div className="admin-date-stack">
      <div className="admin-date">{formatAccessDueDate(timestamp)}</div>
      {detail ? <div className="admin-date-exact">{detail}</div> : null}
      <div className="admin-date-exact">{formatAccessDueDateExact(timestamp)}</div>
    </div>
  );
}

function StatusBadge({ status }) {
  const cls = status === 'approved' ? 'ab--approved'
    : status === 'blocked' ? 'ab--blocked'
    : 'ab--pending';
  return <span className={`admin-badge ${cls}`}>{status}</span>;
}

function AccessBadge({ status, isUnlimited = false, accessGrantKind = null }) {
  if (isUnlimited) {
    return <span className="admin-badge ab--approved">unlimited</span>;
  }

  const cls = status === 'active' ? 'ab--approved'
    : status === 'expired' || status === 'revoked' ? 'ab--blocked'
    : 'ab--pending';
  const label = status === 'active' && accessGrantKind === 'trial'
    ? 'trial'
    : status || 'selection_required';
  return <span className={`admin-badge ${cls}`}>{label}</span>;
}

// ── Overview Tab ─────────────────────────────────────────────────────────────

function OverviewTab({ allUsers, pendingUsers, recentLogins }) {
  const approved = allUsers.filter(u => u.accountStatus === 'approved');
  const blocked  = allUsers.filter(u => u.accountStatus === 'blocked');
  const expired  = allUsers.filter(u => u.accessStatus === 'expired' || u.accessStatus === 'revoked');
  const teachers = allUsers.filter(u => u.role === 'teacher');
  const students = allUsers.filter(u => u.role === 'student');

  const stats = [
    { icon: Users, label: 'Total Users', value: allUsers.length, tone: 'primary' },
    { icon: Clock, label: 'Pending', value: pendingUsers.length, tone: 'accent' },
    { icon: UserCheck, label: 'Approved', value: approved.length, tone: 'success' },
    { icon: UserX, label: 'Blocked', value: blocked.length, tone: 'error' },
    { icon: AlertTriangle, label: 'Expired', value: expired.length, tone: 'error' },
    { icon: GraduationCap, label: 'Teachers', value: teachers.length, tone: 'violet' },
    { icon: Users, label: 'Students', value: students.length, tone: 'info' },
  ];

  return (
    <div className="admin-overview">
      <div className="admin-stat-grid">
        {stats.map(s => {
          const Icon = s.icon;
          return (
            <div key={s.label} className={`admin-stat-card admin-stat-card--${s.tone} card`}>
              <div className="admin-stat-icon">
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

      <div className="admin-table-wrap card">
        <div className="admin-section-heading">Recent Login Events</div>
        {recentLogins.length === 0 ? (
          <div className="admin-empty">No login events recorded yet.</div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Provider</th>
                <th>Event</th>
                <th>Due</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {recentLogins.map((event) => (
                <tr key={event._id} className="admin-user-row">
                  <td>{event.username}</td>
                  <td>{event.provider}</td>
                  <td>{event.eventType}</td>
                  <td><ExpiryTimestampCell timestamp={event.accessExpiresAt} /></td>
                  <td><AccessBadge status={event.emailDeliveryStatus || 'pending'} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
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
          <AlertTriangle size={32} />
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

function AccessExpiryModal({ user, onConfirm, onCancel, busy, error }) {
  const [expiryValue, setExpiryValue] = useState(() => {
    if (user?.accessExpiresAt) {
      return toDatetimeLocalValue(user.accessExpiresAt);
    }
    return toDatetimeLocalValue(Date.now() + (30 * 24 * 60 * 60 * 1000));
  });
  const [reason, setReason] = useState('');
  const [idempotencyKey] = useState(() => `set-expiry-${user?.userId || 'user'}-${crypto.randomUUID()}`);

  const parsedExpiry = fromDatetimeLocalValue(expiryValue);

  const applyPreset = (days) => {
    setExpiryValue(toDatetimeLocalValue(Date.now() + (days * 24 * 60 * 60 * 1000)));
  };

  return (
    <div className="admin-modal-overlay" onClick={busy ? undefined : onCancel}>
      <div className="admin-modal card admin-modal--wide" onClick={(event) => event.stopPropagation()}>
        <div className="admin-modal-icon admin-modal-icon--primary">
          <Clock size={32} />
        </div>
        <h3 className="admin-modal-title">Set Access Expiry</h3>
        <p className="admin-modal-body">
          Update the access expiry for <strong>{user.username || user.email || 'this user'}</strong> directly.
        </p>

        <div className="admin-modal-form">
          <label className="admin-modal-label" htmlFor="admin-access-expiry-input">Access expires at</label>
          <input
            id="admin-access-expiry-input"
            type="datetime-local"
            className="admin-search"
            value={expiryValue}
            onChange={(event) => setExpiryValue(event.target.value)}
            disabled={busy}
          />

          <div className="admin-preset-row">
            <button type="button" className="btn btn-secondary btn-sm" disabled={busy} onClick={() => applyPreset(30)}>+30 days</button>
            <button type="button" className="btn btn-secondary btn-sm" disabled={busy} onClick={() => applyPreset(90)}>+90 days</button>
            <button type="button" className="btn btn-secondary btn-sm" disabled={busy} onClick={() => applyPreset(365)}>+1 year</button>
          </div>

          {parsedExpiry && (
            <div className="admin-modal-hint">
              Effective UTC timestamp: {formatAccessDueDateExact(parsedExpiry)}
            </div>
          )}

          <label className="admin-modal-label" htmlFor="admin-access-expiry-reason">Reason</label>
          <input
            id="admin-access-expiry-reason"
            className="admin-search"
            placeholder="Optional admin note for the audit log…"
            value={reason}
            onChange={(event) => setReason(event.target.value)}
            disabled={busy}
          />

          {error && <div className="admin-inline-error admin-inline-error--banner">{error}</div>}
        </div>

        <div className="admin-modal-actions">
          <button className="btn btn-secondary" onClick={onCancel} disabled={busy}>Cancel</button>
          <button
            className="btn btn-primary"
            onClick={() => onConfirm({
              userId: user.userId,
              accessExpiresAt: parsedExpiry,
              reason,
              idempotencyKey,
            })}
            disabled={busy || !parsedExpiry}
          >
            {busy ? 'Saving…' : 'Apply Expiry'}
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
    catch { /* role change failed — Convex will retry */ }
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

function formatRoleLabel(role) {
  const normalizedRole = role === 'teacher' ? 'teacher' : 'student';
  return normalizedRole.charAt(0).toUpperCase() + normalizedRole.slice(1);
}

function UserRow({ user, onApprove, onBlock, onUnblock, onDelete, onRevokeAccess, onClearAccessWindow, onSetExpiry, busy }) {
  const isPending  = user.accountStatus === 'pending';
  const isBlocked  = user.accountStatus === 'blocked';
  const isApproved = user.accountStatus === 'approved';
  const isAdminUser = user.isAdmin === true;

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
      <td>
        <div>
          <AccessBadge status={user.accessStatus} isUnlimited={isAdminUser} accessGrantKind={user.accessGrantKind} />
          {user.hasUsedTrial && !isAdminUser ? (
            <div className="admin-date-exact">
              {user.accessGrantKind === 'trial'
                ? '7-day trial active'
                : user.trialExpiresAt
                  ? `trial used · ended ${formatDate(user.trialExpiresAt)}`
                  : 'trial used'}
            </div>
          ) : null}
        </div>
      </td>
      <td><ExpiryTimestampCell timestamp={user.accessExpiresAt} isUnlimited={isAdminUser} detail={user.accessGrantKind === 'trial' ? 'Trial access' : null} /></td>
      <td>
        {isAdminUser ? (
          <div className="admin-role-static-wrap">
            <span className="admin-role-static">{formatRoleLabel(user.role || 'student')}</span>
            <span className="admin-role-override-note">admin override</span>
          </div>
        ) : (
          <RoleSelect userId={user.userId} currentRole={user.role || 'student'} />
        )}
      </td>
      <td className="admin-date">{formatDate(user.createdAt)}</td>
      <td>
        <div className="admin-action-btns">
          {isPending && <>
            <button className="btn btn-sm btn-primary" disabled={busy} onClick={() => onApprove(user.userId)}>
              <UserCheck size={13} /> Approve + Trial
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
          {isApproved && !isAdminUser && (
            <button className="btn btn-sm admin-btn-block" disabled={busy} onClick={() => onRevokeAccess(user.userId)}>
              <Clock size={13} /> Revoke Access
            </button>
          )}
          {!isPending && !isAdminUser && (
            <button className="btn btn-sm btn-secondary" disabled={busy} onClick={() => onSetExpiry(user)}>
              <Clock size={13} /> Set Expiry
            </button>
          )}
          <button className="btn btn-sm btn-secondary" disabled={busy || isAdminUser} onClick={() => onClearAccessWindow(user.userId)}>
            <Shield size={13} /> Reset Window
          </button>
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
  const [expiryTarget, setExpiryTarget] = useState(null);
  const [actionError, setActionError] = useState('');

  const approve     = useMutation(api.admin.approveUser);
  const block       = useMutation(api.admin.blockUser);
  const unblock     = useMutation(api.admin.unblockUser);
  const revokeAccess = useMutation(api.admin.revokeUserAccess);
  const setUserAccessExpiry = useMutation(api.admin.setUserAccessExpiry);
  const clearAccessWindow = useMutation(api.admin.clearUserAccessWindow);
  const deleteUser  = useMutation(api.admin.deleteUser);

  const handleApprove = async (userId) => { setBusy(true); setActionError(''); try { await approve({ userId }); } catch (e) { setActionError(e?.message || 'Failed to approve user.'); } finally { setBusy(false); } };
  const handleBlock   = async (userId) => { setBusy(true); setActionError(''); try { await block({ userId }); } catch (e) { setActionError(e?.message || 'Failed to block user.'); } finally { setBusy(false); } };
  const handleUnblock = async (userId) => { setBusy(true); setActionError(''); try { await unblock({ userId }); } catch (e) { setActionError(e?.message || 'Failed to unblock user.'); } finally { setBusy(false); } };
  const handleRevokeAccess = async (userId) => { setBusy(true); setActionError(''); try { await revokeAccess({ userId }); } catch (e) { setActionError(e?.message || 'Failed to revoke access.'); } finally { setBusy(false); } };
  const handleSetExpiry = async ({ userId, accessExpiresAt, reason, idempotencyKey }) => {
    if (!accessExpiresAt) {
      setActionError('Choose a valid future expiry time.');
      return;
    }
    setBusy(true);
    setActionError('');
    try {
      await setUserAccessExpiry({ userId, accessExpiresAt, reason: reason || undefined, idempotencyKey });
      setExpiryTarget(null);
    } catch (e) {
      setActionError(e?.message || 'Failed to set access expiry.');
    } finally {
      setBusy(false);
    }
  };
  const handleClearAccessWindow = async (userId) => { setBusy(true); setActionError(''); try { await clearAccessWindow({ userId }); } catch (e) { setActionError(e?.message || 'Failed to reset access window.'); } finally { setBusy(false); } };
  const handleDeleteConfirm = async () => {
    if (!deleteTarget) return;
    setBusy(true);
    setActionError('');
    try { await deleteUser({ userId: deleteTarget.userId }); }
    catch (e) { setActionError(e?.message || 'Failed to delete user.'); }
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
      {expiryTarget && (
        <AccessExpiryModal
          user={expiryTarget}
          onConfirm={handleSetExpiry}
          onCancel={() => setExpiryTarget(null)}
          busy={busy}
          error={actionError}
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

      {actionError && (
        <div className="admin-inline-error admin-inline-error--banner">
          {actionError}
        </div>
      )}
      <div className="admin-table-wrap card">
        {displayed.length === 0 ? (
          <div className="admin-empty">No users match this filter.</div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Status</th>
                <th>Access</th>
                <th>Due</th>
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
                  onRevokeAccess={handleRevokeAccess}
                  onClearAccessWindow={handleClearAccessWindow}
                  onSetExpiry={setExpiryTarget}
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

function FlagRow({ flag, readOnly = false }) {
  const setFlag = useMutation(api.featureFlags.setFlag);
  const [busy, setBusy] = useState(false);

  const toggle = async () => {
    setBusy(true);
    try { await setFlag({ key: flag.key, enabled: !flag.enabled }); }
    catch { /* toggle failed — Convex will retry */ }
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
        disabled={busy || readOnly}
        title={readOnly ? 'Unavailable in fixture mode' : flag.enabled ? 'Click to disable' : 'Click to enable'}
      >
        {flag.enabled
          ? <><ToggleRight size={28} /> <span>Enabled</span></>
          : <><ToggleLeft size={28} /> <span>Disabled</span></>
        }
      </button>
    </div>
  );
}

function FeaturesTab({ flags, readOnly = false }) {
  if (flags.length === 0) {
    return <div className="admin-empty">Loading feature flags…</div>;
  }

  return (
    <div className="admin-flags">
      <p className="admin-flags-hint">
        Toggle features on or off for all users. Changes take effect immediately.
      </p>
      <div className="flag-list">
        {flags.map(flag => <FlagRow key={flag.key} flag={flag} readOnly={readOnly} />)}
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

// Maps internal status value → human-readable label
const PAYMENT_STATUS_LABEL = {
  pending:  'Received',
  approved: 'Accepted',
  rejected: 'Rejected',
};

function PaymentStatusBadge({ status }) {
  const cls = status === 'approved' ? 'ab--approved'
    : status === 'rejected' ? 'ab--blocked'
    : 'ab--pending';
  return <span className={`admin-badge ${cls}`}>{PAYMENT_STATUS_LABEL[status] ?? status}</span>;
}

function PaymentRow({ req, readOnly = false }) {
  const review = useMutation(api.paymentRequests.reviewPaymentRequest);
  const [busy, setBusy] = useState(false);
  const [showReject, setShowReject] = useState(false);
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');

  const handleApprove = async () => {
    setBusy(true);
    setError('');
    try { await review({ requestId: req._id, decision: 'approved' }); }
    catch (e) {
      console.error(e);
      setError(e?.message || 'Unable to approve this payment request.');
    }
    finally { setBusy(false); }
  };

  const handleReject = async () => {
    setBusy(true);
    setError('');
    try { await review({ requestId: req._id, decision: 'rejected', adminNotes: notes || undefined }); }
    catch (e) {
      console.error(e);
      setError(e?.message || 'Unable to reject this payment request.');
    }
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
      <td className="admin-cell-caps">{req.plan}</td>
      <td>MVR {req.amount.toLocaleString()}</td>
      <td className="admin-date">{formatDate(req.submittedAt)}</td>
      <td><PaymentStatusBadge status={req.status} /></td>
      <td><PaymentSlip slipUrl={req.slipUrl} mimeType={req.mimeType} fileName={req.fileName} /></td>
      <td>
        {req.status === 'pending' ? (
          <div className="admin-review-stack">
            <div className="admin-action-btns">
              <button className="btn btn-sm btn-primary" disabled={busy || readOnly} onClick={handleApprove}>
                <CheckCircle size={13} /> Approve
              </button>
              <button className="btn btn-sm admin-btn-block" disabled={busy || readOnly} onClick={() => setShowReject(v => !v)}>
                <XCircle size={13} /> Reject
              </button>
            </div>
            {showReject && (
              <div className="admin-reject-form">
                <input
                  className="admin-search admin-search--compact"
                  placeholder="Reason (optional)…"
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  disabled={busy || readOnly}
                />
                <button className="btn btn-sm admin-btn-block" disabled={busy || readOnly} onClick={handleReject}>
                  Confirm Reject
                </button>
              </div>
            )}
            {error && <div className="admin-inline-error">{error}</div>}
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

// Filter options with their human-readable pill labels
const PAYMENT_FILTERS = [
  { value: 'all',      label: 'All' },
  { value: 'pending',  label: 'Received' },
  { value: 'approved', label: 'Accepted' },
  { value: 'rejected', label: 'Rejected' },
];

function buildPaymentCounts(requests) {
  const summary = { pending: 0, approved: 0, rejected: 0, total: requests.length };
  for (const request of requests) {
    if (request.status === 'pending' || request.status === 'approved' || request.status === 'rejected') {
      summary[request.status] += 1;
    }
  }
  return summary;
}

function PaymentsTab({ requests = [], counts: initialCounts = {}, readOnly = false }) {
  const [filter, setFilter] = useState('all');

  const queryArgs = filter === 'all' ? {} : { status: filter };
  const liveDisplayed = useQuery(api.paymentRequests.listPaymentRequests, readOnly ? 'skip' : queryArgs) ?? [];
  const liveCounts = useQuery(api.paymentRequests.getPaymentCounts, readOnly ? 'skip' : {}) ?? {};
  const counts = readOnly ? { ...buildPaymentCounts(requests), ...initialCounts } : liveCounts;
  const displayed = readOnly
    ? requests.filter((request) => filter === 'all' || request.status === filter)
    : liveDisplayed;

  return (
    <div className="admin-payments-tab">
      <div className="admin-users-toolbar">
        <div className="admin-filter-pills">
          {PAYMENT_FILTERS.map(f => (
            <button
              key={f.value}
              className={`admin-pill ${filter === f.value ? 'active' : ''}`}
              onClick={() => setFilter(f.value)}
            >
              {f.label}
              {f.value === 'pending' && counts.pending > 0 && (
                <span className="admin-pill-count">{counts.pending}</span>
              )}
              {f.value === 'approved' && counts.approved > 0 && (
                <span className="admin-pill-count">{counts.approved}</span>
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
                <PaymentRow key={req._id} req={req} readOnly={readOnly} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

function ObservabilityTab({ summary, readOnly = false }) {
  const retryPendingLoginAlerts = useMutation(api.admin.retryPendingLoginAlerts);
  const [retryBusy, setRetryBusy] = useState(false);
  const [retryMessage, setRetryMessage] = useState('');

  if (!summary) {
    return <div className="admin-empty">Loading observability metrics…</div>;
  }

  const handleRetryPendingLoginAlerts = async () => {
    setRetryBusy(true);
    setRetryMessage('');
    try {
      const result = await retryPendingLoginAlerts({});
      const queued = result?.queued ?? 0;
      setRetryMessage(
        queued > 0
          ? `Queued ${queued} pending login alert email${queued === 1 ? '' : 's'} for retry.`
          : 'No pending login alert emails were eligible for retry.',
      );
    } catch (error) {
      setRetryMessage(error?.message || 'Unable to queue login alert retries.');
    } finally {
      setRetryBusy(false);
    }
  };

  const stats = [
    { icon: Activity, label: 'Route Views (24h)', value: summary.routeViews24h, tone: 'primary' },
    { icon: LayoutDashboard, label: 'Note Views (24h)', value: summary.noteViews24h, tone: 'info' },
    { icon: CheckCircle, label: 'Fullscreen Enters', value: summary.fullscreenEntries24h, tone: 'success' },
    { icon: Clock, label: 'Recall Opens', value: summary.recallOpens24h, tone: 'accent' },
    { icon: Mail, label: 'Email Attempts', value: summary.emailAttempts24h, tone: 'info' },
    { icon: Mail, label: 'Email Failures', value: summary.emailFailures24h, tone: 'error' },
    { icon: Clock, label: 'Pending Email Alerts', value: summary.pendingLoginAlerts, tone: 'accent' },
    { icon: Workflow, label: 'Cron Runs', value: summary.cronRuns24h, tone: 'primary' },
    { icon: Workflow, label: 'Cron Failures', value: summary.cronFailures24h, tone: 'error' },
    { icon: AlertTriangle, label: 'Warnings', value: summary.warnings24h, tone: 'accent' },
    { icon: XCircle, label: 'Errors', value: summary.errors24h, tone: 'error' },
  ];

  return (
    <div className="admin-observability-stack">
      <div className="admin-stat-grid">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className={`admin-stat-card admin-stat-card--${s.tone} card`}>
              <div className="admin-stat-icon">
                <Icon size={24} />
              </div>
              <div className="admin-stat-value">{s.value}</div>
              <div className="admin-stat-label">{s.label}</div>
            </div>
          );
        })}
      </div>

      <div className={`admin-pending-notice card ${summary.status === 'degraded' ? 'admin-pending-notice--degraded' : 'admin-pending-notice--healthy'}`}>
        <AlertTriangle size={18} />
        <span>
          Release health is <strong>{summary.status}</strong>. Pending background events: <strong>{summary.pendingEvents}</strong>. Last successful cron: <strong>{summary.lastSuccessfulCronAt ? formatDate(summary.lastSuccessfulCronAt) : '—'}</strong>.
        </span>
      </div>

      <div className="admin-table-wrap card">
        <div className="admin-section-heading">Operator Actions</div>
        <div className="admin-action-btns">
          <button
            className="btn btn-primary btn-sm"
            disabled={readOnly || retryBusy || summary.pendingLoginAlerts === 0}
            onClick={handleRetryPendingLoginAlerts}
          >
            {retryBusy ? 'Queueing…' : 'Retry Pending Login Alert Emails'}
          </button>
        </div>
        <div className="admin-date" role="status">
          {readOnly
            ? 'Manual retries are disabled while the admin fixture is active.'
            : retryMessage || 'Queue a manual retry for pending login alert emails that are still below the retry cap.'}
        </div>
      </div>

      <div className="admin-table-wrap card">
        <div className="admin-section-heading">Active Alerts</div>
        {summary.alerts.length === 0 ? (
          <div className="admin-empty">No active delivery or cron alerts.</div>
        ) : (
          <div className="admin-alert-list">
            {summary.alerts.map((alert) => (
              <div key={`${alert.code}-${alert.traceId || alert.jobName || 'summary'}`} className={`admin-alert-item admin-alert-item--${alert.severity}`}>
                <div className="admin-alert-heading">
                  <span className={`admin-badge ${alert.severity === 'error' ? 'ab--blocked' : 'ab--pending'}`}>{alert.severity}</span>
                  <span className="admin-alert-code">{alert.code}</span>
                </div>
                <div className="admin-log-message">{alert.message}</div>
                {(alert.traceId || alert.jobName) && (
                  <div className="admin-alert-meta">
                    {alert.jobName && <span>{alert.jobName}</span>}
                    {alert.traceId && <span className="admin-mono">Trace: {alert.traceId}</span>}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="admin-observability-layout">
        <div className="admin-table-wrap card">
          <div className="admin-section-heading">Top Routes</div>
          {summary.topRoutes.length === 0 ? (
            <div className="admin-empty">No recent route telemetry yet.</div>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Route</th>
                  <th>Views (24h)</th>
                </tr>
              </thead>
              <tbody>
                {summary.topRoutes.map((route) => (
                  <tr key={route.route} className="admin-user-row">
                    <td className="admin-log-message">{route.route}</td>
                    <td>{route.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="admin-table-wrap card">
          <div className="admin-section-heading">Recent Warnings And Errors</div>
          {summary.recentErrors.length === 0 ? (
            <div className="admin-empty">No recent warning or error logs.</div>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Level</th>
                  <th>Component</th>
                  <th>Message</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {summary.recentErrors.map((entry, index) => (
                  <tr key={`${entry.timestamp}-${index}`} className="admin-user-row">
                    <td><span className={`admin-badge ${entry.level === 'error' ? 'ab--blocked' : 'ab--pending'}`}>{entry.level}</span></td>
                    <td>{entry.component || 'app'}</td>
                    <td className="admin-log-message">{entry.message}</td>
                    <td className="admin-date">{formatDate(entry.timestamp)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <div className="admin-observability-layout">
        <div className="admin-table-wrap card">
          <div className="admin-section-heading">Recent Email Delivery Failures</div>
          {summary.recentEmailFailures.length === 0 ? (
            <div className="admin-empty">No recent email delivery failures.</div>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Trace</th>
                  <th>Attempt</th>
                  <th>Recipient</th>
                  <th>Error</th>
                </tr>
              </thead>
              <tbody>
                {summary.recentEmailFailures.map((entry) => (
                  <tr key={entry.traceId} className="admin-user-row">
                    <td className="admin-mono">{entry.traceId}</td>
                    <td>{entry.attemptNumber}</td>
                    <td>{entry.recipientMasked || '—'}</td>
                    <td className="admin-log-message">{entry.errorMessage || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="admin-table-wrap card">
          <div className="admin-section-heading">Recent Cron Runs</div>
          {summary.recentCronRuns.length === 0 ? (
            <div className="admin-empty">No recent cron runs recorded yet.</div>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Job</th>
                  <th>Status</th>
                  <th>Duration</th>
                  <th>Trace</th>
                </tr>
              </thead>
              <tbody>
                {summary.recentCronRuns.map((entry) => (
                  <tr key={entry.traceId} className="admin-user-row">
                    <td className="admin-log-message">{entry.jobName}</td>
                    <td><span className={`admin-badge ${entry.status === 'failed' ? 'ab--blocked' : entry.status === 'succeeded' ? 'ab--approved' : 'ab--pending'}`}>{entry.status}</span></td>
                    <td>{typeof entry.durationMs === 'number' ? `${entry.durationMs} ms` : '—'}</td>
                    <td className="admin-mono">{entry.traceId}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
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
  { id: 'observability', label: 'Observability', icon: Activity },
];

export default function AdminPage() {
  const navigate = useNavigate();
  // isLoaded: Clerk has finished resolving the session (true once auth state is known)
  // isAdmin:  undefined while loading, true for admins, false for everyone else
  const { isLoaded, isAdmin } = useAuth();
  const [tab, setTab] = useState('overview');
  const [devFixture] = useState(() => readAdminDevFixture());
  const useDevFixture = Boolean(devFixture);

  const pendingUsersQuery = useQuery(api.admin.listPendingUsers, useDevFixture ? 'skip' : {});
  const allUsersQuery = useQuery(api.admin.listAllUsersAdmin, useDevFixture ? 'skip' : {});
  const recentLoginsQuery = useQuery(api.admin.listRecentLoginEvents, useDevFixture ? 'skip' : { limit: 8 });
  const flagsQuery = useQuery(api.featureFlags.getAllFlags, useDevFixture ? 'skip' : {});
  const observabilitySummaryQuery = useQuery(api.observability.getReleaseHealthSummary, useDevFixture ? 'skip' : {});
  const paymentCountsQuery = useQuery(api.paymentRequests.getPaymentCounts, useDevFixture ? 'skip' : {});

  const pendingUsers = pendingUsersQuery ?? devFixture?.pendingUsers ?? [];
  const allUsers = allUsersQuery ?? devFixture?.allUsers ?? [];
  const recentLogins = recentLoginsQuery ?? devFixture?.recentLogins ?? [];
  const flags = flagsQuery ?? devFixture?.flags ?? [];
  const observabilitySummary = observabilitySummaryQuery ?? devFixture?.observabilitySummary ?? null;
  const paymentCounts = paymentCountsQuery ?? devFixture?.paymentCounts ?? {};
  const paymentRequests = devFixture?.paymentRequests ?? [];
  const pendingPaymentCount = paymentCounts.pending ?? 0;

  // Show a neutral loading state while auth is resolving to prevent the
  // ~100ms flash-of-admin-content race window (S5).
  // Previously: `if (isAdmin === false)` — when isAdmin is undefined (loading),
  // this condition is falsy so the full dashboard rendered momentarily.
  if (!isLoaded) {
    return <div className="card animate-fade-in" style={{ margin: '2rem auto', maxWidth: 400, textAlign: 'center', padding: '2rem' }}>Checking access…</div>;
  }

  if (isAdmin !== true) {
    navigate('/', { replace: true });
    return null;
  }

  const totalPending = pendingUsers.length + pendingPaymentCount;

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
            : t.id === 'payments' ? pendingPaymentCount
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
        {tab === 'overview' && <OverviewTab allUsers={allUsers} pendingUsers={pendingUsers} recentLogins={recentLogins} />}
        {tab === 'users'    && <UsersTab allUsers={allUsers} pendingUsers={pendingUsers} />}
        {tab === 'features' && <FeaturesTab flags={flags} readOnly={useDevFixture} />}
        {tab === 'payments' && <PaymentsTab requests={paymentRequests} counts={paymentCounts} readOnly={useDevFixture} />}
        {tab === 'observability' && <ObservabilityTab summary={observabilitySummary} readOnly={useDevFixture} />}
      </div>
    </div>
  );
}
