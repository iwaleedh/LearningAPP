import { useParams } from 'react-router-dom';
import StudentNotePanel from '../components/liveclass/StudentNotePanel.jsx';
import './StudentMyNotesPage.css';

/**
 * StudentMyNotesPage — opens in a separate tab when the student clicks "My Notes"
 * during a live class. Renders the StudentNotePanel as a full-page editor with
 * no sidebar/header, so the student can work on notes alongside the Teacher's Board.
 */
export default function StudentMyNotesPage() {
  const { sessionId, tempId } = useParams();

  if (!sessionId || !tempId) {
    return (
      <div className="smn-error">
        <p>Invalid notes session. Please close this tab and click <strong>My Notes</strong> again.</p>
      </div>
    );
  }

  return (
    <div className="smn-root">
      <StudentNotePanel
        sessionId={sessionId}
        tempId={tempId}
        onClose={() => window.close()}
        fullPage
      />
    </div>
  );
}
