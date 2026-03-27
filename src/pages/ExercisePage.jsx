import { useState, useEffect } from "react";
import { GripVertical, PenLine, ArrowUpDown, Brain, CheckCircle, Search } from "lucide-react";
import MCQExercise from "../components/exercises/MCQExercise";
import DragDropExercise from "../components/exercises/DragDropExercise";
import FillBlankExercise from "../components/exercises/FillBlankExercise";
import SequenceExercise from "../components/exercises/SequenceExercise";
import KeywordCheck from "../components/exercises/KeywordCheck";
import FlashcardExercise from "../components/exercises/FlashcardExercise";
import { getExerciseSet } from "../data/exercises/index";
import { useSyllabus } from "../hooks/useSyllabus.js";
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
  { id: "mcq", title: "Multiple Choice", desc: "Test your knowledge with randomized MCQs and instant rationale", icon: CheckCircle, color: "#6366f1", key: "mcq" },
  { id: "drag-drop", title: "Drag and Drop", desc: "Sort elements, events, or concepts into the right categories", icon: GripVertical, color: "#10b981", key: "dragdrop" },
  { id: "fill-blank", title: "Fill in the Blanks", desc: "Complete sentences with fuzzy typo tolerance", icon: PenLine, color: "#f59e0b", key: "fillblank" },
  { id: "sequence", title: "Sequence Ordering", desc: "Arrange steps, events, or processes in the correct order", icon: ArrowUpDown, color: "#ef4444", key: "sequence" },
  { id: "keyword", title: "Theory / Keyword Check", desc: "Write your answer and get keywords scanned automatically", icon: Search, color: "#0ea5e9", key: "keyword" },
  { id: "flashcards", title: "Flashcard Review", desc: "Quick flip cards for active recall practice", icon: Brain, color: "#8b5cf6", key: "flashcards" },
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
          <button className="btn btn-ghost" onClick={resetToHub} style={{ marginBottom: "var(--space-4)" }}>Back to Exercises</button>
          <p>Loading exercises...</p>
        </div>
      );
    }

    const questions = exerciseSet ? (exerciseSet[KEY_MAP[activeType]] || []) : [];
    if (!questions.length) return (
      <div className="exercise-hub animate-fade-in">
        <button className="btn btn-ghost" onClick={resetToHub} style={{ marginBottom: "var(--space-4)" }}>Back to Exercises</button>
        <p>No exercises available for this topic yet. Please select a topic with content.</p>
      </div>
    );
    const ExComp = COMPS[activeType];
    return (
      <div className="exercise-hub animate-fade-in">
        <button className="btn btn-ghost" onClick={resetToHub} style={{ marginBottom: "var(--space-4)" }}>Back to Exercises</button>
        <h2 style={{ marginBottom: "var(--space-6)" }}>{TITLES[activeType]}</h2>
        <div style={{ marginBottom: "var(--space-4)" }}>
          <span className="badge badge-primary">{activeType === "flashcards" ? "Card" : "Question"} {currentQuestion + 1} of {questions.length}</span>
          {questions[currentQuestion].topic && <span className="badge badge-info" style={{ marginLeft: "var(--space-2)" }}>{questions[currentQuestion].topic}</span>}
        </div>
        <ExComp key={currentQuestion} question={questions[currentQuestion]} onNext={() => setCurrentQuestion(p => p < questions.length - 1 ? p + 1 : 0)} />
      </div>
    );
  }

  return (
    <div className="exercise-hub animate-fade-in">
      <h1 style={{ marginBottom: "var(--space-2)" }}>Exercises</h1>
      <p style={{ marginBottom: "var(--space-4)" }}>Build deeper understanding with interactive exercises</p>
      <div className="exercise-subject-tabs">
        {SUBJECTS.map(s => (
          <button key={s.id}
            className={"exercise-subject-tab" + (activeSubject === s.id ? " exercise-subject-tab--active" : "") + (!s.available ? " exercise-subject-tab--disabled" : "")}
            onClick={() => { if (!s.available) return; setActiveSubject(s.id); setSelectedUnitId(null); setSelectedTopicId(null); setActiveType(null); setCurrentQuestion(0); }}
            disabled={!s.available}
          >
            {s.label}{!s.available && <span style={{ marginLeft: "6px", fontSize: "0.7em", opacity: 0.7 }}>Coming soon</span>}
          </button>
        ))}
      </div>
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
      <div className="exercise-types-grid">
        {ET.map((type, i) => {
          const Icon = type.icon;
          const count = exerciseSet ? (exerciseSet[type.key] ? exerciseSet[type.key].length : 0) : null;
          const isLoadingTopic = exerciseSetStatus === "loading";
          const hasContent = count !== null && count > 0;
          return (
            <div key={type.id} className="exercise-type-card card card-hover animate-fade-in"
              style={{ animationDelay: i * 0.08 + "s", cursor: hasContent ? "pointer" : "default", opacity: exerciseSet && !hasContent ? 0.5 : 1 }}
              onClick={() => hasContent && !isLoadingTopic && setActiveType(type.id)}
            >
              <div className="exercise-type-header">
                <div className="exercise-type-icon" style={{ background: type.color }}><Icon size={22} /></div>
                <div>
                  <h3>{type.title}</h3>
                  <span className="badge badge-primary">
                    {isLoadingTopic ? "Loading..." : count !== null ? count + " questions" : "Select a topic"}
                  </span>
                </div>
              </div>
              <p>{type.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
