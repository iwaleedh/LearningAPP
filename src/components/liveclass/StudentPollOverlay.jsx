import { useState } from 'react';
import { Check, X, Clock } from 'lucide-react';

/**
 * StudentPollOverlay — Overlay shown to students when a poll is active.
 *
 * @param {Object} props
 * @param {Object}   props.poll        — active poll { id, question, type, options, status }
 * @param {boolean}  props.hasAnswered — whether this student already submitted
 * @param {Object}   props.result      — after poll close: { correctIndex, selectedIndex, options, responses }
 * @param {Function} props.onSubmit    — (pollId, { selectedIndex } | { text }) => void
 * @param {Function} props.onDismiss   — close overlay after viewing result
 */
export default function StudentPollOverlay({ poll, hasAnswered, result, onSubmit, onDismiss }) {
  const [selected, setSelected] = useState(-1);
  const [freeText, setFreeText] = useState('');

  if (!poll) return null;

  const isClosed = poll.status === 'closed';

  function handleSubmit() {
    if (poll.type === 'freetext') {
      if (!freeText.trim()) return;
      onSubmit?.(poll.id, { text: freeText.trim() });
    } else {
      if (selected < 0) return;
      onSubmit?.(poll.id, { selectedIndex: selected });
    }
  }

  // Result view (poll closed)
  if (isClosed && result) {
    const wasCorrect = result.correctIndex >= 0 && result.selectedIndex === result.correctIndex;
    return (
      <div className="lc-spoll-overlay animate-fade-in">
        <div className="lc-spoll-card lc-spoll-card--result">
          <div className="lc-spoll-result-header">
            {result.correctIndex >= 0 ? (
              wasCorrect
                ? <span className="lc-spoll-result-badge lc-spoll-result-badge--correct"><Check size={14} /> Correct!</span>
                : <span className="lc-spoll-result-badge lc-spoll-result-badge--wrong"><X size={14} /> Incorrect</span>
            ) : (
              <span className="lc-spoll-result-badge lc-spoll-result-badge--neutral">Poll closed</span>
            )}
          </div>
          <p className="lc-spoll-question">{poll.question}</p>
          {poll.options?.length > 0 && (
            <div className="lc-spoll-options">
              {poll.options.map((opt, i) => (
                <div
                  key={i}
                  className={`lc-spoll-option lc-spoll-option--result
                    ${result.correctIndex === i ? 'lc-spoll-option--correct' : ''}
                    ${result.selectedIndex === i && result.correctIndex !== i ? 'lc-spoll-option--wrong' : ''}
                    ${result.selectedIndex === i ? 'lc-spoll-option--mine' : ''}`}
                >
                  <span className="lc-spoll-option-letter">{String.fromCharCode(65 + i)}</span>
                  <span>{opt}</span>
                  {result.correctIndex === i && <Check size={14} className="lc-spoll-check" />}
                </div>
              ))}
            </div>
          )}
          <button className="btn btn-primary btn-sm lc-spoll-dismiss" onClick={onDismiss}>OK</button>
        </div>
      </div>
    );
  }

  // Waiting view (already answered)
  if (hasAnswered) {
    return (
      <div className="lc-spoll-overlay animate-fade-in">
        <div className="lc-spoll-card lc-spoll-card--waiting">
          <Clock size={24} />
          <p className="lc-spoll-question">{poll.question}</p>
          <p className="lc-spoll-waiting-text">Answer submitted — waiting for results…</p>
        </div>
      </div>
    );
  }

  // Answer view
  return (
    <div className="lc-spoll-overlay animate-fade-in">
      <div className="lc-spoll-card">
        <p className="lc-spoll-question">{poll.question}</p>

        {(poll.type === 'mcq' || poll.type === 'truefalse') && (
          <div className="lc-spoll-options">
            {poll.options.map((opt, i) => (
              <button
                key={i}
                className={`lc-spoll-option ${selected === i ? 'lc-spoll-option--selected' : ''}`}
                onClick={() => setSelected(i)}
              >
                <span className="lc-spoll-option-letter">{String.fromCharCode(65 + i)}</span>
                <span>{opt}</span>
              </button>
            ))}
          </div>
        )}

        {poll.type === 'freetext' && (
          <textarea
            className="lc-spoll-textarea"
            value={freeText}
            onChange={e => setFreeText(e.target.value)}
            placeholder="Type your answer…"
            rows={3}
          />
        )}

        <button
          className="btn btn-primary lc-spoll-submit"
          onClick={handleSubmit}
          disabled={poll.type === 'freetext' ? !freeText.trim() : selected < 0}
        >
          Submit Answer
        </button>
      </div>
    </div>
  );
}
