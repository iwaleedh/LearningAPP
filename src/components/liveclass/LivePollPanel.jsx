import { useState, useRef, useEffect } from 'react';
import { BarChart3, Plus, X, Check, Send, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';

/**
 * LivePollPanel — Teacher-side panel for creating and managing live polls/quizzes.
 *
 * @param {Object} props
 * @param {Array}   props.polls         — current polls [{id,question,type,options,correctIndex,status,responses}]
 * @param {number}  props.studentCount  — total students in class
 * @param {Function} props.onCreatePoll — (question, type, options, correctIndex) => void
 * @param {Function} props.onClosePoll  — (pollId) => void
 * @param {Function} props.onClose      — close panel
 */
export default function LivePollPanel({
  polls = [],
  studentCount = 0,
  onCreatePoll,
  onClosePoll,
  onClose,
}) {
  const [mode, setMode] = useState('list'); // 'list' | 'create'
  const [question, setQuestion] = useState('');
  const [pollType, setPollType] = useState('mcq'); // 'mcq' | 'truefalse' | 'freetext'
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctIndex, setCorrectIndex] = useState(-1);
  const [expandedPoll, setExpandedPoll] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (mode === 'create' && inputRef.current) inputRef.current.focus();
  }, [mode]);

  function handleCreate() {
    if (!question.trim()) return;
    let finalOptions = [];
    let finalCorrect = -1;

    if (pollType === 'mcq') {
      finalOptions = options.filter(o => o.trim());
      if (finalOptions.length < 2) return;
      finalCorrect = correctIndex >= 0 && correctIndex < finalOptions.length ? correctIndex : -1;
    } else if (pollType === 'truefalse') {
      finalOptions = ['True', 'False'];
      finalCorrect = correctIndex >= 0 && correctIndex <= 1 ? correctIndex : -1;
    }

    onCreatePoll?.(question.trim(), pollType, finalOptions, finalCorrect);
    setQuestion('');
    setOptions(['', '', '', '']);
    setCorrectIndex(-1);
    setMode('list');
  }

  function updateOption(i, value) {
    setOptions(prev => { const next = [...prev]; next[i] = value; return next; });
  }

  function addOption() {
    if (options.length < 6) setOptions(prev => [...prev, '']);
  }

  function removeOption(i) {
    if (options.length <= 2) return;
    setOptions(prev => prev.filter((_, idx) => idx !== i));
    if (correctIndex === i) setCorrectIndex(-1);
    else if (correctIndex > i) setCorrectIndex(correctIndex - 1);
  }

  const activePoll = polls.find(p => p.status === 'active');
  const closedPolls = polls.filter(p => p.status === 'closed');

  return (
    <div className="lc-poll-panel card">
      <div className="lc-poll-header">
        <div className="lc-poll-header-left">
          <BarChart3 size={16} />
          <span>Live Polls</span>
        </div>
        <button className="btn btn-ghost btn-sm" onClick={onClose} title="Close"><X size={14} /></button>
      </div>

      {mode === 'list' ? (
        <div className="lc-poll-body">
          {/* Active poll */}
          {activePoll && (
            <div className="lc-poll-card lc-poll-card--active">
              <div className="lc-poll-card-header">
                <span className="badge lc-poll-badge--active">● Active</span>
                <button className="btn btn-sm btn-ghost" onClick={() => onClosePoll?.(activePoll.id)}>Close Poll</button>
              </div>
              <p className="lc-poll-question">{activePoll.question}</p>
              <PollResultsBar
                options={activePoll.options}
                responses={activePoll.responses || []}
                correctIndex={activePoll.correctIndex}
                studentCount={studentCount}
                showCorrect={false}
              />
              <div className="lc-poll-response-count">
                {(activePoll.responses || []).length} / {studentCount} responses
              </div>
            </div>
          )}

          {/* Create button */}
          {!activePoll && (
            <button className="btn btn-primary lc-poll-create-btn" onClick={() => setMode('create')}>
              <Plus size={14} /> New Poll
            </button>
          )}

          {/* Closed polls */}
          {closedPolls.length > 0 && (
            <div className="lc-poll-history">
              <div className="lc-poll-history-label">Previous Polls</div>
              {closedPolls.map(poll => (
                <div key={poll.id} className="lc-poll-card lc-poll-card--closed">
                  <button
                    className="lc-poll-card-toggle"
                    onClick={() => setExpandedPoll(expandedPoll === poll.id ? null : poll.id)}
                  >
                    <span className="lc-poll-question-sm">{poll.question}</span>
                    {expandedPoll === poll.id ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>
                  {expandedPoll === poll.id && (
                    <div className="lc-poll-card-expanded">
                      <PollResultsBar
                        options={poll.options}
                        responses={poll.responses || []}
                        correctIndex={poll.correctIndex}
                        studentCount={studentCount}
                        showCorrect={true}
                      />
                      <div className="lc-poll-response-count">
                        {(poll.responses || []).length} / {studentCount} responses
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {!activePoll && closedPolls.length === 0 && (
            <div className="lc-poll-empty">
              <BarChart3 size={32} />
              <p>No polls yet</p>
              <p className="lc-poll-empty-sub">Create a quick quiz to check student understanding</p>
            </div>
          )}
        </div>
      ) : (
        /* ── Create poll form ── */
        <div className="lc-poll-body lc-poll-form">
          <label className="lc-poll-label">Question</label>
          <textarea
            ref={inputRef}
            className="lc-poll-input"
            value={question}
            onChange={e => setQuestion(e.target.value)}
            placeholder="What is the product of…?"
            rows={2}
          />

          <label className="lc-poll-label">Type</label>
          <div className="lc-poll-type-row">
            {[
              { id: 'mcq', label: 'Multiple Choice' },
              { id: 'truefalse', label: 'True / False' },
              { id: 'freetext', label: 'Free Text' },
            ].map(t => (
              <button
                key={t.id}
                className={`btn btn-sm ${pollType === t.id ? 'btn-primary' : 'btn-ghost'}`}
                onClick={() => setPollType(t.id)}
              >{t.label}</button>
            ))}
          </div>

          {pollType === 'mcq' && (
            <>
              <label className="lc-poll-label">Options <span className="lc-poll-hint">(click ✓ to mark correct)</span></label>
              {options.map((opt, i) => (
                <div key={i} className="lc-poll-option-row">
                  <span className="lc-poll-option-letter">{String.fromCharCode(65 + i)}</span>
                  <input
                    className="lc-poll-option-input"
                    value={opt}
                    onChange={e => updateOption(i, e.target.value)}
                    placeholder={`Option ${String.fromCharCode(65 + i)}`}
                  />
                  <button
                    className={`btn btn-sm btn-icon lc-poll-correct-btn ${correctIndex === i ? 'lc-poll-correct-btn--active' : ''}`}
                    onClick={() => setCorrectIndex(correctIndex === i ? -1 : i)}
                    title="Mark correct"
                  ><Check size={12} /></button>
                  {options.length > 2 && (
                    <button className="btn btn-sm btn-icon btn-ghost" onClick={() => removeOption(i)} title="Remove">
                      <X size={12} />
                    </button>
                  )}
                </div>
              ))}
              {options.length < 6 && (
                <button className="btn btn-sm btn-ghost" onClick={addOption}><Plus size={12} /> Add Option</button>
              )}
            </>
          )}

          {pollType === 'truefalse' && (
            <>
              <label className="lc-poll-label">Correct Answer <span className="lc-poll-hint">(optional)</span></label>
              <div className="lc-poll-tf-row">
                <button
                  className={`btn btn-sm ${correctIndex === 0 ? 'btn-primary' : 'btn-ghost'}`}
                  onClick={() => setCorrectIndex(correctIndex === 0 ? -1 : 0)}
                >True</button>
                <button
                  className={`btn btn-sm ${correctIndex === 1 ? 'btn-primary' : 'btn-ghost'}`}
                  onClick={() => setCorrectIndex(correctIndex === 1 ? -1 : 1)}
                >False</button>
              </div>
            </>
          )}

          <div className="lc-poll-form-actions">
            <button className="btn btn-ghost" onClick={() => setMode('list')}>Cancel</button>
            <button className="btn btn-primary" onClick={handleCreate} disabled={!question.trim()}>
              <Send size={14} /> Push to Students
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Poll results bar chart ── */
function PollResultsBar({ options = [], responses = [], correctIndex = -1, studentCount = 0, showCorrect = false }) {
  if (!options.length) {
    // Freetext — show response count only
    return (
      <div className="lc-poll-results">
        <div className="lc-poll-freetext-count">{responses.length} text responses</div>
        {responses.slice(0, 5).map((r, i) => (
          <div key={i} className="lc-poll-freetext-item">"{r.text}"</div>
        ))}
        {responses.length > 5 && <div className="lc-poll-freetext-more">+{responses.length - 5} more</div>}
      </div>
    );
  }

  const counts = options.map((_, i) => responses.filter(r => r.selectedIndex === i).length);
  const max = Math.max(...counts, 1);

  return (
    <div className="lc-poll-results">
      {options.map((opt, i) => {
        const count = counts[i];
        const pct = studentCount > 0 ? Math.round((count / studentCount) * 100) : 0;
        const isCorrect = showCorrect && correctIndex === i;
        return (
          <div key={i} className={`lc-poll-bar-row ${isCorrect ? 'lc-poll-bar-row--correct' : ''}`}>
            <span className="lc-poll-bar-label">{String.fromCharCode(65 + i)}. {opt}</span>
            <div className="lc-poll-bar-track">
              <div
                className={`lc-poll-bar-fill ${isCorrect ? 'lc-poll-bar-fill--correct' : ''}`}
                style={{ width: `${Math.max((count / max) * 100, 4)}%` }}
              />
            </div>
            <span className="lc-poll-bar-count">{count} ({pct}%)</span>
          </div>
        );
      })}
    </div>
  );
}
