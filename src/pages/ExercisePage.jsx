import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { GripVertical, PenLine, ArrowUpDown, Brain, CheckCircle, FileText, ArrowLeft, ChevronRight, RotateCcw, ListChecks } from "lucide-react";
import MCQExercise from "../components/exercises/MCQExercise";
import DragDropExercise from "../components/exercises/DragDropExercise";
import FillBlankExercise from "../components/exercises/FillBlankExercise";
import SequenceExercise from "../components/exercises/SequenceExercise";
import KeywordCheck from "../components/exercises/KeywordCheck";
import FlashcardExercise from "../components/exercises/FlashcardExercise";
import { getExerciseSet, getAvailableTopics } from "../data/exercises/index";
import { SUBJECT_GROUPS, findSubjectGroupId } from "../data/subjectGroups.js";
import { useSyllabus } from "../hooks/useSyllabus.js";
import { incrementExercisesDone } from "../services/activityStore.js";
import { saveMistake } from "../services/mistakeStore.js";
import { recordExerciseAttempt } from "../services/studyAttemptService.js";
import { readRecentNote } from "../services/notes/recentNote.js";
import PageHeader from "../components/common/PageHeader.jsx";
import SubjectPicker from "../components/common/SubjectPicker.jsx";
import ErrorBoundary from "../components/ErrorBoundary.jsx";
import "./Pages.css";

const ET = [
  { id: "mcq", title: "Multiple choice", desc: "Quick questions with instant explanations", icon: CheckCircle, key: "mcq" },
  { id: "flashcards", title: "Flashcards", desc: "Flip cards for active recall", icon: Brain, key: "flashcards" },
  { id: "fill-blank", title: "Fill in the blanks", desc: "Complete key sentences (small typos are fine)", icon: PenLine, key: "fillblank" },
  { id: "drag-drop", title: "Sort into groups", desc: "Drag ideas into the right categories", icon: GripVertical, key: "dragdrop" },
  { id: "sequence", title: "Put in order", desc: "Arrange steps and processes correctly", icon: ArrowUpDown, key: "sequence" },
  { id: "keyword", title: "Written answers", desc: "Write an answer; key terms are checked", icon: FileText, key: "keyword" },
];

const COMPS = { "mcq": MCQExercise, "drag-drop": DragDropExercise, "fill-blank": FillBlankExercise, "sequence": SequenceExercise, "keyword": KeywordCheck, "flashcards": FlashcardExercise };
const TITLES = Object.fromEntries(ET.map((type) => [type.id, type.title]));
const KEY_MAP = Object.fromEntries(ET.map((type) => [type.id, type.key]));
const DEFAULT_SUBJECT = "chemistry";

export default function ExercisePage() {
  const [activeSubject, setActiveSubject] = useState(() => readRecentNote()?.subject || DEFAULT_SUBJECT);
  const [groupId, setGroupId] = useState(() => findSubjectGroupId(readRecentNote()?.subject || DEFAULT_SUBJECT));
  const [selectedUnitId, setSelectedUnitId] = useState(null);
  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const [activeType, setActiveType] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // One entry per answered question in the current set; null while the set is still running
  const [sessionResults, setSessionResults] = useState([]);
  const [sessionDone, setSessionDone] = useState(false);
  const [exerciseSet, setExerciseSet] = useState(null);
  const [exerciseSetStatus, setExerciseSetStatus] = useState("idle");
  const { syllabus, isLoading: isLoadingSyllabus } = useSyllabus(activeSubject);

  const availableTopicKeys = useMemo(
    () => new Set(getAvailableTopics(activeSubject).map((topic) => `${topic.unitId}:${topic.topicId}`)),
    [activeSubject],
  );
  const group = SUBJECT_GROUPS.find((item) => item.id === groupId) || SUBJECT_GROUPS[0];

  useEffect(() => {
    let cancelled = false;

    async function loadExerciseSet() {
      if (!selectedUnitId || !selectedTopicId) {
        setExerciseSet(null);
        setExerciseSetStatus("idle");
        return;
      }

      setExerciseSetStatus("loading");
      const nextExerciseSet = await getExerciseSet(activeSubject, selectedUnitId, selectedTopicId);
      if (cancelled) return;

      setExerciseSet(nextExerciseSet);
      setExerciseSetStatus("ready");
    }

    void loadExerciseSet();

    return () => {
      cancelled = true;
    };
  }, [activeSubject, selectedUnitId, selectedTopicId]);

  function startSession(typeId) {
    setActiveType(typeId);
    setCurrentQuestion(0);
    setSessionResults([]);
    setSessionDone(false);
  }

  function resetToHub() { startSession(null); }

  const activateSubject = (subjectId) => {
    setActiveSubject(subjectId);
    setSelectedUnitId(null);
    setSelectedTopicId(null);
    startSession(null);
  };

  const selectedUnit = syllabus?.units?.find((unit) => String(unit.id) === String(selectedUnitId));
  const selectedTopic = selectedUnit?.topics?.find((topic) => String(topic.id) === String(selectedTopicId));

  // ── In a practice session ──
  if (activeType) {
    const backToModes = (
      <button className="outline-back exercise-back-link" type="button" onClick={resetToHub}>
        <ArrowLeft size={16} aria-hidden="true" /> {selectedTopic?.title || "Back to practice"}
      </button>
    );

    if (exerciseSetStatus === "loading") {
      return (
        <div className="exercise-hub">
          {backToModes}
          <p className="exercise-status">Loading questions…</p>
        </div>
      );
    }

    const questions = exerciseSet ? (exerciseSet[KEY_MAP[activeType]] || []) : [];
    if (!questions.length) return (
      <div className="exercise-hub">
        {backToModes}
        <p className="exercise-status">No questions of this type for this topic yet.</p>
      </div>
    );
    const ExComp = COMPS[activeType];
    const currentItem = questions[currentQuestion];
    const questionPrompt = currentItem?.stem || currentItem?.front || currentItem?.template || TITLES[activeType];
    const questionKey = `${activeSubject}:${selectedUnitId}:${selectedTopicId}:${activeType}:${currentItem?.id || currentQuestion}`;

    if (sessionDone) {
      const correctCount = sessionResults.filter((result) => result.correct).length;
      const answered = sessionResults.length || questions.length;
      const ratio = answered ? correctCount / answered : 0;
      const verdict = ratio >= 0.8 ? "Great work." : ratio >= 0.5 ? "Good progress." : "Worth another go.";
      const otherModes = ET.filter((type) => type.id !== activeType && exerciseSet?.[type.key]?.length);
      return (
        <div className="exercise-hub exercise-hub--mode">
          {backToModes}
          <section className="card exercise-summary" aria-labelledby="exercise-summary-title">
            <span className="exercise-summary-icon" aria-hidden="true"><ListChecks size={26} /></span>
            <h1 className="exercise-summary-title" id="exercise-summary-title">Set complete</h1>
            <p className="exercise-summary-score">
              <strong>{correctCount}</strong> of {answered} right
            </p>
            <div className="exercise-summary-track" aria-hidden="true">
              <span className="exercise-summary-fill" style={{ "--score": ratio }} />
            </div>
            <p className="exercise-summary-verdict">
              {verdict} {correctCount < answered ? "Questions you missed are saved in your mistake bank." : "You answered every question correctly."}
            </p>
            <div className="exercise-summary-actions">
              <button type="button" className="btn btn-primary btn-lg" onClick={() => startSession(activeType)}>
                <RotateCcw size={18} aria-hidden="true" /> Practise again
              </button>
              {correctCount < answered && (
                <Link to="/mistakes" className="btn btn-outline btn-lg">Review mistakes</Link>
              )}
            </div>
          </section>
          {otherModes.length > 0 && (
            <>
              <h2 className="section-heading">Try another way</h2>
              <div className="list-card">
                {otherModes.slice(0, 3).map((type) => {
                  const Icon = type.icon;
                  return (
                    <button key={type.id} type="button" className="list-row exercise-type-card interactive" onClick={() => startSession(type.id)}>
                      <span className="list-row-icon"><Icon size={20} aria-hidden="true" /></span>
                      <span className="list-row-main">
                        <span className="list-row-title">{type.title}</span>
                        <span className="list-row-meta">{type.desc}</span>
                      </span>
                      <ChevronRight size={18} className="list-row-end" aria-hidden="true" />
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
      );
    }

    const handleAttempt = (attempt) => {
      setSessionResults((prev) => [...prev, { correct: Boolean(attempt?.correct) }]);
      void recordExerciseAttempt({
        subject: activeSubject,
        unitId: Number(selectedUnitId),
        topicId: Number(selectedTopicId),
        activityType: activeType,
        questionKey,
        prompt: questionPrompt,
        topic: currentItem?.topic || '',
        correct: attempt?.correct,
        scorePercent: attempt?.scorePercent,
        durationSeconds: attempt?.durationSeconds,
        confidence: attempt?.confidence,
        metadata: {
          userAnswer: attempt?.userAnswer,
          correctAnswer: attempt?.correctAnswer,
          exerciseType: activeType,
          ...(attempt?.metadata || {}),
        },
      });
    };

    return (
      <div className="exercise-hub exercise-hub--mode">
        {backToModes}
        <div className="exercise-session-head">
          <h1 className="exercise-mode-title">{TITLES[activeType]}</h1>
          <span className="exercise-session-count">{currentQuestion + 1} of {questions.length}</span>
        </div>
        <div className="exercise-session-track" aria-hidden="true">
          <div className="exercise-session-fill" style={{ transform: `scaleX(${(currentQuestion + 1) / questions.length})` }} />
        </div>
        <ErrorBoundary key={questionKey} name={`exercise:${activeType}`} inline resetKeys={[questionKey]}>
          <ExComp
            question={currentItem}
            onNext={() => {
              incrementExercisesDone();
              if (currentQuestion < questions.length - 1) setCurrentQuestion(currentQuestion + 1);
              else setSessionDone(true);
            }}
            onMistake={(m) => void saveMistake({ ...m, subject: activeSubject, questionKey })}
            onAttempt={handleAttempt}
          />
        </ErrorBoundary>
      </div>
    );
  }

  // ── Topic chosen: pick a practice mode ──
  if (selectedTopic) {
    const isLoadingTopic = exerciseSetStatus === "loading";
    // One clear first step: the first mode (in ET order) that has questions for this topic
    const recommendedModeId = ET.find((type) => exerciseSet?.[type.key]?.length)?.id;
    return (
      <div className="exercise-hub">
        <button
          className="outline-back"
          type="button"
          onClick={() => { setSelectedUnitId(null); setSelectedTopicId(null); startSession(null); }}
        >
          <ArrowLeft size={16} aria-hidden="true" /> All topics
        </button>
        <PageHeader
          title={selectedTopic.title}
          description={`${group.subjects.find((item) => item.id === activeSubject)?.name || ''} · Unit ${selectedUnit.id}: ${selectedUnit.title}`}
        />

        <h2 className="section-heading">Choose how to practise</h2>
        <p className="exercise-mode-hint">New to this topic? Start with multiple choice, then try the others.</p>
        <ErrorBoundary name="ExerciseTypesGrid" inline>
          <div className="list-card exercise-mode-list">
            {ET.map((type) => {
              const Icon = type.icon;
              const count = exerciseSet ? (exerciseSet[type.key]?.length || 0) : null;
              const hasContent = Boolean(count);
              return (
                <button
                  key={type.id}
                  type="button"
                  className={`list-row exercise-type-card ${hasContent ? 'interactive' : 'empty'}`}
                  onClick={() => hasContent && !isLoadingTopic && startSession(type.id)}
                  disabled={!hasContent || isLoadingTopic}
                  aria-label={`${type.title}. ${isLoadingTopic ? 'Loading' : hasContent ? `${count} questions` : 'No questions yet'}`}
                >
                  <span className="list-row-icon"><Icon size={20} aria-hidden="true" /></span>
                  <span className="list-row-main">
                    <span className="list-row-title">
                      {type.title}
                      {hasContent && type.id === recommendedModeId && <span className="mode-recommended">Start here</span>}
                    </span>
                    <span className="list-row-meta">{type.desc}</span>
                  </span>
                  <span className="list-row-end">
                    {isLoadingTopic ? '…' : hasContent ? `${count} questions` : 'None yet'}
                    {hasContent && <ChevronRight size={18} aria-hidden="true" />}
                  </span>
                </button>
              );
            })}
          </div>
        </ErrorBoundary>
      </div>
    );
  }

  // ── Pick a subject and topic ──
  return (
    <div className="exercise-hub">
      <PageHeader title="Practice" description="Pick a topic, then choose how you want to practise it." />

      <ErrorBoundary name="ExerciseControls" inline resetKeys={[activeSubject]}>
        <SubjectPicker
          groups={SUBJECT_GROUPS}
          groupId={group.id}
          subjectId={activeSubject}
          onGroupChange={(item) => {
            setGroupId(item.id);
            if (!item.subjects.some((subject) => subject.id === activeSubject)) activateSubject(item.subjects[0].id);
          }}
          onSubjectChange={activateSubject}
        />
      </ErrorBoundary>

      {isLoadingSyllabus && <p className="exercise-status">Loading topics…</p>}

      <div className="exercise-units">
        {(syllabus?.units || []).map((unit) => (
          <section key={unit.id} className="outline-unit" aria-labelledby={`ex-unit-${unit.id}`}>
            <div className="outline-unit-head">
              <h2 className="outline-unit-title" id={`ex-unit-${unit.id}`}>
                <span className="outline-unit-number">Unit {unit.id}</span>
                {unit.title}
              </h2>
            </div>
            <div className="list-card">
              {unit.topics.map((topic) => {
                const available = availableTopicKeys.has(`${unit.id}:${topic.id}`);
                return (
                  <button
                    key={topic.id}
                    type="button"
                    className="list-row exercise-topic-row"
                    disabled={!available}
                    onClick={() => {
                      setSelectedUnitId(Number(unit.id) || unit.id);
                      setSelectedTopicId(Number(topic.id) || topic.id);
                      startSession(null);
                    }}
                  >
                    <span className="outline-topic-number" aria-hidden="true">{topic.id}</span>
                    <span className="list-row-main">
                      <span className="list-row-title">{topic.title}</span>
                      <span className="list-row-meta">{available ? `${topic.subtopics.length} subtopics` : 'Questions coming soon'}</span>
                    </span>
                    {available && <ChevronRight size={18} className="list-row-end" aria-hidden="true" />}
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
