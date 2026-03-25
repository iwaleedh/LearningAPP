import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { subscribeToStudentNote, getStudentName } from '../convex-client.js';

/**
 * StudentNotesViewPage — teachers open this in a new tab to read a student's
 * personal notes in real-time. Route: /live-notes/:sessionId/:tempId
 */
export default function StudentNotesViewPage() {
  const { sessionId, tempId } = useParams();
  const [studentName, setStudentName] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [loading, setLoading] = useState(true);

  // Load student name
  useEffect(() => {
    if (!sessionId || !tempId) return;
    getStudentName(sessionId, tempId).then(name => {
      if (name) setStudentName(name);
    });
  }, [sessionId, tempId]);

  // Subscribe to live note updates
  useEffect(() => {
    if (!sessionId || !tempId) return;
    setLoading(true);
    const unsub = subscribeToStudentNote(sessionId, tempId, (data) => {
      setNoteContent(data?.noteContent ?? '');
      setLoading(false);
    });
    return () => unsub?.();
  }, [sessionId, tempId]);

  return (
    <div className="snv-page animate-fade-in">
      <div className="snv-header card">
        <div className="snv-title">
          <span className="badge">👁️ Read-only</span>
          <h2>{studentName ? `${studentName}'s Notes` : 'Student Notes'}</h2>
          <span className="snv-session-id">Session {sessionId?.slice(-6)}</span>
        </div>
      </div>
      <div className="snv-body card">
        {loading ? (
          <p className="snv-loading">Loading…</p>
        ) : noteContent ? (
          <pre className="snv-content">{noteContent}</pre>
        ) : (
          <p className="snv-empty">This student hasn't written any notes yet.</p>
        )}
      </div>
    </div>
  );
}
