import { Monitor, MonitorOff } from 'lucide-react';

/**
 * TeacherStudentGrid — mini-thumbnails of each student's canvas.
 *
 * Renders initials placeholders (real canvas streaming would require WebRTC;
 * this component provides the UI shell and participant list).
 *
 * @param {{ classId: string, participants: Array, users: Array, onExpand: (userId:string) => void, presentState: object|null, onInvitePresent: (userId:string, name:string) => void, onEndPresent: () => void }} props
 */
export default function TeacherStudentGrid({
  participants, users, onExpand,
  presentState, onInvitePresent, onEndPresent,
}) {
  function getUser(identityHex) {
    return users.find(u => u.userId === identityHex);
  }

  function initials(username) {
    return username
      ? username.split('_').map(w => w[0]).join('').toUpperCase().substring(0, 2)
      : '??';
  }

  const activePresenter = presentState?.status === 'active' ? presentState.presenterIdentity : null;
  const requestingPresenter = presentState?.status === 'requesting' ? presentState.presenterIdentity : null;

  if (participants.length === 0) {
    return (
      <div className="lc-student-grid lc-student-grid--empty">
        <span>Waiting for students…</span>
      </div>
    );
  }

  return (
    <div className="lc-student-grid">
      {participants.map(p => {
        const identityHex = p.userId;
        const user = getUser(identityHex);
        const name = user?.username ?? identityHex.substring(0, 6);
        const isPresenting = activePresenter === identityHex;
        const isRequesting = requestingPresenter === identityHex;

        return (
          <div key={identityHex} className={`lc-student-thumb${isPresenting ? ' lc-student-thumb--presenting' : ''}`}>
            <button
              className="lc-student-thumb-inner"
              title={`View ${name}'s canvas`}
              onClick={() => onExpand?.(identityHex)}
            >
              <div className="lc-student-initials">{initials(name)}</div>
              <div className="lc-student-name" title={name}>{name}</div>
              <div className="lc-student-live-dot" />
            </button>
            {isPresenting ? (
              <button
                className="lc-present-action-btn lc-present-action-btn--end"
                title="End presentation"
                onClick={() => onEndPresent?.()}
              >
                <MonitorOff size={14} /> End
              </button>
            ) : (
              <button
                className={`lc-present-action-btn${isRequesting ? ' lc-present-action-btn--approve' : ''}`}
                title={isRequesting ? `Approve ${name}'s request` : `Invite ${name} to present`}
                onClick={() => onInvitePresent?.(identityHex, name)}
              >
                <Monitor size={14} /> {isRequesting ? 'Approve' : 'Present'}
              </button>
            )}
            {isPresenting && <div className="lc-present-badge">Presenting</div>}
          </div>
        );
      })}
    </div>
  );
}
