import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, RotateCcw, X } from 'lucide-react';
import DOMPurify from 'dompurify';
import NoteBlockRenderer from './NoteBlockRenderer.jsx';
import { readLessonProgress, writeLessonProgress } from '../../services/notes/guidedLesson.js';
import { getLessonGlossary } from '../../services/notes/lessonGlossary.js';
import './GuidedNoteReader.css';

function QuickCheck({ check }) {
    const [selected, setSelected] = useState(null);
    const [answerOpen, setAnswerOpen] = useState(false);
    if (!check) return null;
    const correct = selected === check.correctIndex;
    return <section className="lesson-check" aria-label="Try a question">
        <h3>Try a question</h3>
        <p>{check.prompt}</p>
        {check.options ? <div className="lesson-options">
            {check.options.map((option, index) => {
                const isPicked = selected === index;
                const state = isPicked ? (index === check.correctIndex ? ' is-correct' : ' is-wrong') : '';
                return <button key={index} type="button"
                    className={`lesson-option${isPicked ? ' is-selected' : ''}${state}`}
                    aria-pressed={isPicked} onClick={() => setSelected(index)}>
                    <span>{option}</span>
                    {isPicked && (index === check.correctIndex
                        ? <Check size={18} aria-hidden="true" />
                        : <X size={18} aria-hidden="true" />)}
                </button>;
            })}
            {selected !== null && <div className={`lesson-feedback ${correct ? 'is-correct' : 'is-wrong'}`} role="status">
                <strong>{correct ? 'That’s right.' : 'Let’s look at it again.'}</strong>
                <p>{check.explanation}</p>
                {!correct && <p>You can try the other answer. Take your time.</p>}
            </div>}
        </div> : <>
            <p className="lesson-help">Say your answer out loud or write it down. Then compare it with the explanation.</p>
            <button type="button" className="btn btn-secondary" aria-expanded={answerOpen} onClick={() => setAnswerOpen(value => !value)}>
                {answerOpen ? 'Hide explanation' : 'Show explanation'}
            </button>
            {answerOpen && <div className="lesson-feedback" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(check.answer) }} />}
        </>}
    </section>;
}

export default function GuidedNoteReader({ lesson, noteId, subject, currentIndex, onStepChange, onFinish, isRead, nextNote = null }) {
    const [completed, setCompleted] = useState(() => new Set(readLessonProgress(noteId, lesson.steps).completed));
    const [finished, setFinished] = useState(false);
    const [wasAlreadyRead, setWasAlreadyRead] = useState(false);
    const headingRef = useRef(null);
    const finishedRef = useRef(null);
    const previousIndex = useRef(currentIndex);
    const step = lesson.steps[currentIndex] || lesson.steps[0];
    const words = getLessonGlossary(subject, step);
    useEffect(() => {
        writeLessonProgress(noteId, step?.id, completed);
        if (previousIndex.current !== currentIndex) {
            headingRef.current?.focus({ preventScroll: true });
            previousIndex.current = currentIndex;
        }
    }, [completed, currentIndex, noteId, step?.id]);
    // The finish button sits at the bottom of a long step; bring the result into view so the click is visibly answered.
    useEffect(() => {
        if (!finished) return;
        finishedRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        finishedRef.current?.focus({ preventScroll: true });
    }, [finished]);
    if (!step) return <p className="lesson-empty">Open the complete notes to read this topic.</p>;
    const last = currentIndex === lesson.steps.length - 1;
    const advance = () => {
        const next = new Set(completed).add(step.id);
        setCompleted(next);
        if (last) { setWasAlreadyRead(Boolean(isRead)); setFinished(true); onFinish(); }
        else onStepChange(currentIndex + 1);
    };
    return <div className="guided-reader">
        <div className="lesson-intro">
            <h2>Learn at your own pace</h2>
            <p>{lesson.goal}</p>
            {currentIndex === 0 && <p className="lesson-help">{lesson.start}</p>}
        </div>
        <div className="lesson-progress">
            <span>Step {currentIndex + 1} of {lesson.steps.length}</span>
            <span>{completed.size} {completed.size === 1 ? 'step' : 'steps'} read</span>
            <progress max={lesson.steps.length} value={completed.size} aria-label="Steps read" />
        </div>
        {finished && last ? <section className="lesson-finished" aria-live="polite" ref={finishedRef} tabIndex={-1}>
            <Check size={28} aria-hidden="true" />
            <h2>{wasAlreadyRead ? 'Review complete' : 'You’ve reached the end'}</h2>
            <p>
                {wasAlreadyRead
                    ? 'Nice work going over this again. It stays marked as read.'
                    : 'This note is now marked as read. You can revisit any step or use the complete notes for exam detail.'}
            </p>
            <div className="lesson-finished-actions">
                {nextNote ? (
                    <Link to={nextNote.to} className="btn btn-primary">
                        Next: {nextNote.title} <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                ) : null}
                <button type="button" className="btn btn-secondary" onClick={() => { setFinished(false); onStepChange(0); }}><RotateCcw size={18} aria-hidden="true" /> Read the steps again</button>
            </div>
        </section> : <>
            <section className="lesson-step" aria-labelledby={`${step.id}-title`}>
                <h2 ref={headingRef} tabIndex={-1} id={`${step.id}-title`} data-block-id={step.id}>
                    {step.title}
                </h2>
                {step.instruction ? <p className="lesson-help">{step.instruction}</p>
                    : step.kind === 'example' && <p className="lesson-help">Read each line in order. You do not need to remember it all at once.</p>}
                <NoteBlockRenderer blocks={step.blocks} />
                {words.length > 0 && <details className="lesson-words" key={`${step.id}-words`}>
                    <summary>Help with words in this step</summary>
                    <dl>{words.map(word => <div key={word.term}><dt>{word.term}</dt><dd>{word.definition}</dd></div>)}</dl>
                </details>}
                <QuickCheck key={step.id} check={step.check} />
            </section>
            <div className="lesson-actions">
                <button type="button" className="btn btn-secondary" disabled={currentIndex === 0} onClick={() => onStepChange(currentIndex - 1)}>
                    <ArrowLeft size={18} aria-hidden="true" /> Go back
                </button>
                <button type="button" className="btn btn-primary" onClick={advance}>
                    {last ? (isRead ? 'Finish reviewing' : 'Finish lesson') : 'Next small step'} <ArrowRight size={18} aria-hidden="true" />
                </button>
            </div>
            <p className="lesson-pause">You can stop here and come back later. Your place is saved on this device.</p>
        </>}
    </div>;
}
