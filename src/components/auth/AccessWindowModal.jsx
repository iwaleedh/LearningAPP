import { useEffect, useMemo, useRef, useState } from 'react';
import { Clock3, CalendarDays, ShieldCheck, LogOut } from 'lucide-react';
import useFocusTrap from '../../hooks/useFocusTrap.js';
import { formatAccessDueDate, formatAccessDueDateExact, formatRemainingTime } from '../../services/auth/accessWindow.js';
import './AccessWindowModal.css';

function SummaryMetric({ icon, label, value, detail = null }) {
  return (
    <div className="access-window-metric">
      <div className="access-window-metric-icon">{icon}</div>
      <div>
        <div className="access-window-metric-label">{label}</div>
        <div className="access-window-metric-value">{value}</div>
        {detail ? <div className="access-window-metric-detail">{detail}</div> : null}
      </div>
    </div>
  );
}

export default function AccessWindowModal({
  mode,
  username,
  accessExpiresAt,
  accessDurationMonths,
  busy = false,
  onClose,
  onSelectDuration,
  onSignOut,
}) {
  const modalRef = useRef(null);
  const [remainingMs, setRemainingMs] = useState(() => Math.max(0, (accessExpiresAt || 0) - Date.now()));
  useFocusTrap(modalRef, true, null);

  useEffect(() => {
    if (!accessExpiresAt) return undefined;
    const tick = () => setRemainingMs(Math.max(0, accessExpiresAt - Date.now()));
    tick();
    const intervalId = window.setInterval(tick, 1000);
    return () => window.clearInterval(intervalId);
  }, [accessExpiresAt]);

  const durationLabel = useMemo(() => {
    if (accessDurationMonths === 12) return '1 year';
    if (accessDurationMonths === 1) return '1 month';
    return 'Not selected';
  }, [accessDurationMonths]);

  const isSelectionMode = mode === 'select';

  return (
    <div className="access-window-overlay">
      <div className="access-window-modal" ref={modalRef} role="dialog" aria-modal="true" aria-labelledby="access-window-title">
        <div className="access-window-header">
          <div className="access-window-badge">Access Window</div>
          <h2 id="access-window-title" className="access-window-title">
            {isSelectionMode ? 'Choose Your Access Duration' : `Welcome back${username ? `, ${username}` : ''}`}
          </h2>
          <p className="access-window-subtitle">
            {isSelectionMode
              ? 'Your first successful sign-in starts the access window. Pick one option to continue.'
              : 'Your session is active. Review the due date and remaining time before continuing.'}
          </p>
        </div>

        {isSelectionMode ? (
          <div className="access-window-options">
            <button type="button" className="access-window-choice" disabled={busy} onClick={() => onSelectDuration?.({ months: 1 })}>
              <span className="access-window-choice-tag">Monthly</span>
              <strong>MVR 100</strong>
              <span>1 month of access</span>
            </button>
            <button type="button" className="access-window-choice access-window-choice--featured" disabled={busy} onClick={() => onSelectDuration?.({ months: 12 })}>
              <span className="access-window-choice-tag">Best Value</span>
              <strong>MVR 1,000</strong>
              <span>1 year of access</span>
            </button>
          </div>
        ) : (
          <div className="access-window-summary">
            <SummaryMetric
              icon={<CalendarDays size={18} />}
              label="Due date"
              value={formatAccessDueDate(accessExpiresAt)}
              detail={`Exact UTC: ${formatAccessDueDateExact(accessExpiresAt)}`}
            />
            <SummaryMetric icon={<Clock3 size={18} />} label="Remaining" value={formatRemainingTime(remainingMs)} />
            <SummaryMetric icon={<ShieldCheck size={18} />} label="Duration" value={durationLabel} />
          </div>
        )}

        <div className="access-window-footer">
          {isSelectionMode ? (
            <button type="button" className="btn btn-ghost access-window-signout" disabled={busy} onClick={onSignOut}>
              <LogOut size={16} /> Sign Out
            </button>
          ) : (
            <>
              <button type="button" className="btn btn-secondary" onClick={onClose}>Continue</button>
              <button type="button" className="btn btn-ghost access-window-signout" onClick={onSignOut}>
                <LogOut size={16} /> Sign Out
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
