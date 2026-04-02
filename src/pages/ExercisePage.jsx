import { useState, useEffect } from "react";
import { GripVertical, PenLine, ArrowUpDown, Brain, CheckCircle, Search, Target, BookOpen, Activity } from "lucide-react";
import MCQExercise from "../components/exercises/MCQExercise";
import DragDropExercise from "../components/exercises/DragDropExercise";
import FillBlankExercise from "../components/exercises/FillBlankExercise";
import SequenceExercise from "../components/exercises/SequenceExercise";
import KeywordCheck from "../components/exercises/KeywordCheck";
import FlashcardExercise from "../components/exercises/FlashcardExercise";
import { getExerciseSet } from "../data/exercises/index";
import { useSyllabus } from "../hooks/useSyllabus.js";
import { incrementExercisesDone } from "../services/activityStore.js";
import { saveMistake } from "../services/mistakeStore.js";
import { recordExerciseAttempt } from "../services/studyAttemptService.js";
import "./Pages.css";

const SUBJECTS = [
  { id: "chemistry", label: "AL Chemistry", available: true },
  { id: "biology", label: "AL Biology", available: true },
  { id: "physics", label: "AL Physics", available: true },
  { id: "mathematics", label: "AL Mathematics", available: true },
  { id: "business", label: "AL Business", available: true },
  { id: "economics", label: "AL Economics", available: true },
  { id: "accounting", label: "AL Accounting", available: true },
  { id: "cae", label: "CAE (C1 Advanced)", available: true },
  { id: "cpe", label: "CPE (C2 Proficiency)", available: true },
  { id: "olevel_chemistry", label: "IGCSE Chemistry", available: true },
  { id: "olevel_biology", label: "IGCSE Biology", available: true },
  { id: "olevel_physics", label: "IGCSE Physics", available: true },
  { id: "olevel_business", label: "IGCSE Business", available: true },
  { id: "olevel_maths_core", label: "IGCSE Maths Core", available: false },
  { id: "olevel_maths_extended", label: "IGCSE Maths Extended", available: true },
];

const ET = [
  { id: "mcq", title: "Multiple Choice", desc: "Test your knowledge with randomized MCQs and instant rationale", icon: CheckCircle, toneClass: "exercise-type-icon--primary", key: "mcq" },
  { id: "drag-drop", title: "Drag and Drop", desc: "Sort elements, events, or concepts into the right categories", icon: GripVertical, toneClass: "exercise-type-icon--success", key: "dragdrop" },
  { id: "fill-blank", title: "Fill in the Blanks", desc: "Complete sentences with fuzzy typo tolerance", icon: PenLine, toneClass: "exercise-type-icon--warning", key: "fillblank" },
  { id: "sequence", title: "Sequence Ordering", desc: "Arrange steps, events, or processes in the correct order", icon: ArrowUpDown, toneClass: "exercise-type-icon--danger", key: "sequence" },
  { id: "keyword", title: "Theory / Keyword Check", desc: "Write your answer and get keywords scanned automatically", icon: Search, toneClass: "exercise-type-icon--info", key: "keyword" },
  { id: "flashcards", title: "Flashcard Review", desc: "Quick flip cards for active recall practice", icon: Brain, toneClass: "exercise-type-icon--accent", key: "flashcards" },
];

const COMPS = { "mcq": MCQExercise, "drag-drop": DragDropExercise, "fill-blank": FillBlankExercise, "sequence": SequenceExercise, "keyword": KeywordCheck, "flashcards": FlashcardExercise };
const TITLES = { "mcq": "Multiple Choice Questions", "drag-drop": "Drag and Drop", "fill-blank": "Fill in the Blanks", "sequence": "Sequence Ordering", "keyword": "Theory / Keyword Check", "flashcards": "Flashcard Review" };
const KEY_MAP = { "mcq": "mcq", "drag-drop": "dragdrop", "fill-blank": "fillblank", "sequence": "sequence", "keyword": "keyword", "flashcards": "flashcards" };

export default function ExercisePage() {
  const [activeSubject, setActiveSubject] = useState("chemistry");
  const [selectedUnitId, setSelectedUnitId] = useState(null);
  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const [activeType, setActiveType] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [exerciseSet, setExerciseSet] = useState(null);
  const [exerciseSetStatus, setExerciseSetStatus] = useState("idle");
  const { syllabus, isLoading: isLoadingSyllabus } = useSyllabus(activeSubject);

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

  function resetToHub() { setActiveType(null); setCurrentQuestion(0); }

  if (activeType) {
    if (exerciseSetStatus === "loading") {
      return (
        <div className="exercise-hub animate-fade-in">
          <button className="btn btn-ghost exercise-back-btn" onClick={resetToHub}>Back to Exercises</button>
          <p>Loading exercises...</p>
        </div>
      );
    }

    const questions = exerciseSet ? (exerciseSet[KEY_MAP[activeType]] || []) : [];
    if (!questions.length) return (
      <div className="exercise-hub animate-fade-in">
        <button className="btn btn-ghost exercise-back-btn" onClick={resetToHub}>Back to Exercises</button>
        <p>No exercises available for this topic yet. Please select a topic with content.</p>
      </div>
    );
    const ExComp = COMPS[activeType];
    const currentItem = questions[currentQuestion];
    const questionPrompt = currentItem?.stem || currentItem?.front || currentItem?.template || TITLES[activeType];
    const questionKey = `${activeSubject}:${selectedUnitId}:${selectedTopicId}:${activeType}:${currentItem?.id || currentQuestion}`;

    const handleAttempt = (attempt) => {
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
        },
      });
    };

    return (
      <div className="exercise-hub animate-fade-in">
        <button className="btn btn-ghost exercise-back-btn" onClick={resetToHub}>Back to Exercises</button>
        <h2 className="exercise-mode-title">{TITLES[activeType]}</h2>
        <div className="exercise-mode-meta">
          <span className="badge badge-primary">{activeType === "flashcards" ? "Card" : "Question"} {currentQuestion + 1} of {questions.length}</span>
          {currentItem?.topic && <span className="badge badge-info exercise-mode-topic-badge">{currentItem.topic}</span>}
        </div>
        <ExComp
          key={currentQuestion}
          question={currentItem}
          onNext={() => { incrementExercisesDone(); setCurrentQuestion(p => p < questions.length - 1 ? p + 1 : 0); }}
          onMistake={(m) => saveMistake({ ...m, subject: activeSubject })}
          onAttempt={handleAttempt}
        />
      </div>
    );
  }

  // Count available questions across all types if a topic is selected
  let totalAvailable = 0;
  if (exerciseSet) {
    totalAvailable = ET.reduce((sum, type) => sum + (exerciseSet[type.key] ? exerciseSet[type.key].length : 0), 0);
  }

  return (
    <div className="exercise-hub animate-fade-in">
      {/* Bento Header */}
      <div className="exercise-page-header">
        <div className="exercise-title-group">
          <div className="exercise-subject-icon"><span><Target size={28} /></span></div>
          <div>
            <h1 className="exercise-page-title">Exercises</h1>
            <p className="exercise-page-qual">Build deeper understanding with interactive practice</p>
          </div>
        </div>
          <div className="exercise-meta-boxes">
            <div className="meta-box">
            <div className="meta-icon meta-icon--info">
              <BookOpen size={18} />
            </div>
            <div className="meta-text">
              <strong>{SUBJECTS.filter(s => s.available).length} Subjects</strong>
              <span>Complete coverage</span>
            </div>
          </div>
          <div className="meta-box">
            <div className="meta-icon meta-icon--success">
              <Activity size={18} />
            </div>
            <div className="meta-text">
              <strong>{ET.length} Modes</strong>
              <span>Varied practice</span>
            </div>
          </div>
        </div>
      </div>

      {/* Controls Card */}
      <div className="exercise-controls-card">
        <h3 className="section-label">1. Choose your subject</h3>
        <div className="exercise-subject-tabs">
          {SUBJECTS.map(s => (
            <button key={s.id}
              className={"exercise-subject-tab" + (activeSubject === s.id ? " exercise-subject-tab--active" : "") + (!s.available ? " exercise-subject-tab--disabled" : "")}
              onClick={() => { if (!s.available) return; setActiveSubject(s.id); setSelectedUnitId(null); setSelectedTopicId(null); setActiveType(null); setCurrentQuestion(0); }}
              disabled={!s.available}
            >
              {s.label}{!s.available && <span className="tab-coming-soon">Coming soon</span>}
            </button>
          ))}
        </div>
        
        <h3 className="section-label exercise-section-label">2. Select a topic</h3>
        <div className="exercise-topic-select-wrapper">
          <select className="exercise-topic-select"
            disabled={isLoadingSyllabus}
            value={selectedUnitId && selectedTopicId ? selectedUnitId + ":" + selectedTopicId : ""}
            onChange={e => {
              const v = e.target.value;
              if (!v) { setSelectedUnitId(null); setSelectedTopicId(null); return; }
              const [u, t] = v.split(":");
              setSelectedUnitId(Number(u)); setSelectedTopicId(Number(t)); setActiveType(null); setCurrentQuestion(0);
            }}
          >
            <option value="">{isLoadingSyllabus ? "Loading topics..." : "Select a topic to practise"}</option>
            {syllabus && syllabus.units && syllabus.units.map(unit => (
              <optgroup key={unit.id} label={unit.code + ": " + unit.title}>
                {unit.topics && unit.topics.map(topic => (
                  <option key={topic.id} value={unit.id + ":" + topic.id}>
                    {unit.code + " Topic " + topic.id + ": " + topic.title}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
      </div>

      {/* Types Grid */}
      <div className="exercise-types-section animate-fade-in exercise-types-section--delayed">
        <div className="exercise-types-header">
          <h3 className="section-label">3. Pick a practice mode</h3>
          {selectedUnitId && selectedTopicId && (
            exerciseSetStatus === "loading" ? (
               <span className="badge badge-primary">Loading content...</span>
            ) : (
               <span className="badge exercise-availability-badge">
                 {totalAvailable} total questions available
               </span>
            )
          )}
        </div>

        <div className="exercise-types-grid">
          {ET.map((type, i) => {
            const Icon = type.icon;
            const count = exerciseSet ? (exerciseSet[type.key] ? exerciseSet[type.key].length : 0) : null;
            const isLoadingTopic = exerciseSetStatus === "loading";
            const hasContent = count !== null && count > 0;
            return (
              <div key={type.id} className={`exercise-type-card ${hasContent ? 'interactive' : 'empty'}`}
                style={{ animationDelay: i * 0.05 + "s", animationFillMode: 'both' }}
                onClick={() => hasContent && !isLoadingTopic && setActiveType(type.id)}
              >
                <div className="exercise-type-header">
                  <div className={`exercise-type-icon ${type.toneClass}`}><Icon size={22} /></div>
                  <div className="exercise-type-title-group">
                    <h3>{type.title}</h3>
                    <span className={`type-badge ${isLoadingTopic ? 'loading' : hasContent ? 'ready' : 'empty'}`}>
                      {isLoadingTopic ? "..." : count !== null ? `${count} items` : "None"}
                    </span>
                  </div>
                </div>
                <p>{type.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
