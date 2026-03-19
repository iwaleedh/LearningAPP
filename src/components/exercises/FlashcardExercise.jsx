import { useState } from 'react';

export default function FlashcardExercise({ question, onNext }) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleAnswer() {
    setIsFlipped(false);
    setTimeout(onNext, 150);
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
          <button className="btn btn-secondary" onClick={handleAnswer}>Still Learning</button>
          <button className="btn btn-primary" onClick={handleAnswer}>Got it!</button>
        </div>
      )}
    </div>
  );
}
