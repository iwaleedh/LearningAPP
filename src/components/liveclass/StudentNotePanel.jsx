import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { updateStudentNote, getStudentNote } from '../../convex-client.js';

/**
 * StudentNotePanel — slide-in right panel for students to jot personal notes
 * during a live class. Auto-saves to Convex with 500 ms debounce.
 */
export default function StudentNotePanel({ sessionId, tempId, onClose }) {
  const [content, setContent] = useState('');
  const [saving, setSaving] = useState(false);
  const debounceRef = useRef(null);
  const loadedRef = useRef(false);

  // Load existing note on mount
  useEffect(() => {
    if (!sessionId || !tempId || loadedRef.current) return;
    loadedRef.current = true;
    getStudentNote(sessionId, tempId).then(note => {
      if (note?.noteContent) setContent(note.noteContent);
    });
  }, [sessionId, tempId]);

  const handleChange = (e) => {
    const val = e.target.value;
    setContent(val);
    setSaving(true);
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      await updateStudentNote(sessionId, tempId, val);
      setSaving(false);
    }, 500);
  };

  return (
    <div className="snp-panel card animate-fade-in">
      <div className="snp-header">
        <span className="snp-title">My Notes</span>
        <span className="snp-save-status">{saving ? 'Saving…' : 'Saved'}</span>
        <button className="btn btn-icon btn-ghost btn-sm" onClick={onClose} title="Close notes">
          <X size={14} />
        </button>
      </div>
      <textarea
        className="snp-textarea"
        placeholder="Type your notes here… they are saved automatically."
        value={content}
        onChange={handleChange}
        spellCheck={true}
      />
    </div>
  );
}
