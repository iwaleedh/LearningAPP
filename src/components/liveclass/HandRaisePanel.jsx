import { Hand, X } from 'lucide-react';

/**
 * HandRaisePanel — shown to the teacher.
 *
 * @param {{ raises: Array, participants: Array, onAcknowledge: (raiseId:string) => void }} props
 */
export default function HandRaisePanel({ raises, participants, onAcknowledge, onClose }) {
  function getUsername(identityHex) {
    const participant = participants.find((item) => item.userId === identityHex);
    return participant?.username ?? identityHex.substring(0, 6) + '…';
  }

  return (
    <div className="lc-hand-panel">
      <div className="lc-hand-panel-header">
        <div className="lc-hand-panel-title">
          <Hand size={16} />
          <span>Hands Raised ({raises.length})</span>
        </div>
        {onClose && (
          <button
            type="button"
            className="btn btn-ghost btn-sm"
            onClick={onClose}
            aria-label="Close hand raise panel"
            title="Close"
          >
            <X size={14} />
          </button>
        )}
      </div>
      {raises.length === 0 ? (
        <div className="lc-hand-panel-empty-state lc-hand-panel--empty">
          <Hand size={18} />
          <span>No hands raised</span>
        </div>
      ) : (
        <ul className="lc-hand-list" aria-live="polite">
          {raises.map(r => (
            <li key={String(r.raiseId)} className="lc-hand-item">
              <span className="lc-hand-avatar">✋</span>
              <span className="lc-hand-name">{getUsername(r.studentUserId)}</span>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => onAcknowledge(r.raiseId)}
              >
                ✓ OK
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
