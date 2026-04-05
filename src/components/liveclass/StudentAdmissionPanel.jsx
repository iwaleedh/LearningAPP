import { useState, useEffect, useRef } from 'react';
import { Check, X, UserCheck, Clock, Eye, ToggleLeft, ToggleRight } from 'lucide-react';
import { approveJoin, rejectJoin, setClassAutoAccept, subscribeToJoinRequests } from '../../convex-client.js';

/**
 * StudentAdmissionPanel — teacher-side panel showing join requests.
 * Renders as a portal-anchored dropdown from the Students button.
 */
export default function StudentAdmissionPanel({
  anchor,
  sessionId,
  autoAccept,
  onClose,
  onAutoAcceptChange,
  presentation = 'anchored',
}) {
  const [tab, setTab] = useState('waiting'); // 'waiting' | 'inclass'
  const [requests, setRequests] = useState([]);
  const [loadingIds, setLoadingIds] = useState(new Set()); // M-9: per-request loading
  const panelRef = useRef(null);

  // Subscribe to join requests in real-time
  useEffect(() => {
    if (!sessionId) return;
    const unsub = subscribeToJoinRequests(sessionId, (data) => {
      if (Array.isArray(data)) setRequests(data);
    });
    return () => unsub?.();
  }, [sessionId]);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) onClose();
    };
    document.addEventListener('pointerdown', handler);
    return () => document.removeEventListener('pointerdown', handler);
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (presentation !== 'sheet' && !anchor) return null;

  const isCompactViewport = typeof window !== 'undefined' && window.innerWidth <= 480;

  const style = presentation === 'sheet'
    ? {
        position: 'relative',
        top: 'auto',
        right: 'auto',
        left: 'auto',
        width: '100%',
        maxWidth: 'none',
        zIndex: 'auto',
      }
    : isCompactViewport
      ? {
          position: 'fixed',
          top: Math.max(12, anchor.bottom + 8),
          left: 12,
          right: 12,
          width: 'auto',
          zIndex: 9999,
        }
      : {
          position: 'fixed',
          top: anchor.bottom + 8,
          right: Math.max(12, window.innerWidth - anchor.right),
          width: 320,
          zIndex: 9999,
        };

  const pending = requests.filter(r => r.status === 'pending');
  const accepted = requests.filter(r => r.status === 'accepted');

  const handleApprove = async (id) => {
    setLoadingIds(prev => new Set(prev).add(id));
    try {
      await approveJoin(id);
    } finally {
      setLoadingIds(prev => { const next = new Set(prev); next.delete(id); return next; });
    }
  };

  const handleReject = async (id) => {
    setLoadingIds(prev => new Set(prev).add(id));
    try {
      await rejectJoin(id);
    } finally {
      setLoadingIds(prev => { const next = new Set(prev); next.delete(id); return next; });
    }
  };

  const handleToggleAutoAccept = async () => {
    const next = !autoAccept;
    await setClassAutoAccept(sessionId, next);
    onAutoAcceptChange?.(next);
  };

  return (
    <div
      ref={panelRef}
      style={style}
      className={`sap-panel lc-dropdown-panel card animate-fade-in ${presentation === 'sheet' ? 'sap-panel--sheet' : ''}`}
      role="dialog"
      aria-modal={presentation === 'sheet'}
      aria-label="Student admission panel"
    >
      {/* Header */}
      <div className="sap-header">
        <span className="sap-title">Students</span>
        <button
          className="sap-auto-toggle"
          onClick={handleToggleAutoAccept}
          title="Auto-admit students"
          type="button"
          aria-label={autoAccept ? 'Disable auto-admit students' : 'Enable auto-admit students'}
          aria-pressed={autoAccept}
        >
          {autoAccept
            ? <ToggleRight size={20} className="sap-toggle-icon sap-toggle-icon--on" />
            : <ToggleLeft size={20} className="sap-toggle-icon" />}
          <span className="sap-toggle-label">Auto-admit</span>
        </button>
        <button
          className="btn btn-icon btn-ghost btn-sm"
          type="button"
          onClick={onClose}
          aria-label="Close student admission panel"
        ><X size={14} /></button>
      </div>

      {/* Tabs */}
      <div className="sap-tabs" role="tablist" aria-label="Student admission tabs">
        <button
          className={`sap-tab ${tab === 'waiting' ? 'sap-tab--active' : ''}`}
          type="button"
          role="tab"
          aria-selected={tab === 'waiting'}
          onClick={() => setTab('waiting')}
        >
          <Clock size={13} />
          Waiting {pending.length > 0 && <span className="sap-badge">{pending.length}</span>}
        </button>
        <button
          className={`sap-tab ${tab === 'inclass' ? 'sap-tab--active' : ''}`}
          type="button"
          role="tab"
          aria-selected={tab === 'inclass'}
          onClick={() => setTab('inclass')}
        >
          <UserCheck size={13} />
          In Class {accepted.length > 0 && <span className="sap-badge sap-badge--green">{accepted.length}</span>}
        </button>
      </div>

      {/* Body */}
      <div className="sap-body">
        {tab === 'waiting' && (
          pending.length === 0
            ? <p className="sap-empty">No students waiting.</p>
            : pending.map(req => (
                <div key={req._id} className="sap-row">
                  <span className="sap-name">{req.studentName}</span>
                  <div className="sap-actions">
                    <button
                      className="btn btn-sm btn-primary sap-admit-btn"
                      type="button"
                      onClick={() => handleApprove(req._id)}
                      disabled={loadingIds.has(req._id)}
                      title="Admit"
                      aria-label={`Admit ${req.studentName}`}
                    ><Check size={12} /> Admit</button>
                    <button
                      className="btn btn-sm btn-ghost sap-reject-btn"
                      type="button"
                      onClick={() => handleReject(req._id)}
                      disabled={loadingIds.has(req._id)}
                      title="Decline"
                      aria-label={`Decline ${req.studentName}`}
                    ><X size={12} /></button>
                  </div>
                </div>
              ))
        )}
        {tab === 'inclass' && (
          accepted.length === 0
            ? <p className="sap-empty">No students admitted yet.</p>
            : accepted.map(req => (
                <div key={req._id} className="sap-row">
                  <span className="sap-name">{req.studentName}</span>
                  <button
                    className="btn btn-sm btn-ghost"
                    type="button"
                    onClick={() => window.open(`/live-notes/${sessionId}/${req.tempId}`, '_blank')}
                    title="View student notes"
                    aria-label={`Open notes for ${req.studentName}`}
                  ><Eye size={12} /> Notes</button>
                </div>
              ))
        )}
      </div>
    </div>
  );
}
