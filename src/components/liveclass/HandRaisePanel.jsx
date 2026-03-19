import { Hand } from 'lucide-react';

/**
 * HandRaisePanel — shown to the teacher.
 *
 * @param {{ raises: Array, users: Array, onAcknowledge: (raiseId:bigint) => void }} props
 */
export default function HandRaisePanel({ raises, users, onAcknowledge }) {
  function getUsername(identityHex) {
    const u = users.find(u => u.identity.toHexString() === identityHex);
    return u?.username ?? identityHex.substring(0, 6) + '…';
  }

  if (raises.length === 0) {
    return (
      <div className="lc-hand-panel lc-hand-panel--empty">
        <Hand size={18} />
        <span>No hands raised</span>
      </div>
    );
  }

  return (
    <div className="lc-hand-panel">
      <div className="lc-hand-panel-header">
        <Hand size={16} />
        <span>Hands Raised ({raises.length})</span>
      </div>
      <ul className="lc-hand-list">
        {raises.map(r => (
          <li key={String(r.raiseId)} className="lc-hand-item">
            <span className="lc-hand-avatar">✋</span>
            <span className="lc-hand-name">{getUsername(r.studentIdentity.toHexString())}</span>
            <button
              className="btn btn-sm btn-secondary"
              onClick={() => onAcknowledge(r.raiseId)}
            >
              ✓ OK
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
