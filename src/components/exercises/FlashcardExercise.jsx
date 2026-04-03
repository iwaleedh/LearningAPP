import { useState, useRef, useEffect } from 'react';

export default function FlashcardExercise({ question, onNext, onAttempt }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [startedAt] = useState(() => Date.now());
  const nextTimerRef = useRef(null);

  // M1: cancel pending onNext timer on unmount
  useEffect(() => {
    return () => {
      if (nextTimerRef.current) clearTimeout(nextTimerRef.current);
    };
  }, []);

  function handleAnswer(correct) {
    onAttempt?.({
      correct,
      scorePercent: correct ? 100 : 0,
      durationSeconds: (Date.now() - startedAt) / 1000,
      userAnswer: correct ? 'Got it' : 'Still learning',
      correctAnswer: question.back,
    });
    setIsFlipped(false);
    if (nextTimerRef.current) clearTimeout(nextTimerRef.current);
    nextTimerRef.current = setTimeout(() => {
      nextTimerRef.current = null;
      onNext();
    }, 150);
  }

  return (
    <div className="fc-ex card animate-fade-in">
      <span className="badge badge-primary fc-ex__topic">{question.topic}</span>
      <div className="fc-ex__scene" onClick={() => !isFlipped && setIsFlipped(true)}>
        <div className={`fc-ex__card${isFlipped ? ' fc-ex__card--flipped' : ''}`}>
          <div className="fc-ex__face fc-ex__face--front"><p>{question.front}</p></div>
          <div className="fc-ex__face fc-ex__face--back"><p>{question.back}</p></div>
        </div>
      </div>
      {!isFlipped && <p className="fc-ex__hint">Click card to reveal answer</p>}
      {isFlipped && (
        <div className="fc-ex__actions">
          <button className="btn btn-secondary" onClick={() => handleAnswer(false)}>Still Learning</button>
          <button className="btn btn-primary" onClick={() => handleAnswer(true)}>Got it!</button>
        </div>
      )}
    </div>
  );
}
