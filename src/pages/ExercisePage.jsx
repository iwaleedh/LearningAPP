import { useState } from 'react';
import {
    FlaskConical, GripVertical, PenLine, ArrowUpDown,
    Brain, CheckCircle, XCircle, Search
} from 'lucide-react';
import MCQExercise from '../components/exercises/MCQExercise';
import DragDropExercise from '../components/exercises/DragDropExercise';
import FillBlankExercise from '../components/exercises/FillBlankExercise';
import SequenceExercise from '../components/exercises/SequenceExercise';
import KeywordCheck from '../components/exercises/KeywordCheck';
import './Pages.css';

const exerciseTypes = [
    {
        id: 'mcq',
        title: 'Multiple Choice',
        description: 'Test your knowledge with randomized MCQs and instant rationale',
        icon: CheckCircle,
        color: '#6366f1',
        count: 50,
    },
    {
        id: 'drag-drop',
        title: 'Drag & Drop',
        description: 'Sort elements, events, or concepts into the right categories',
        icon: GripVertical,
        color: '#10b981',
        count: 20,
    },
    {
        id: 'fill-blank',
        title: 'Fill in the Blanks',
        description: 'Complete sentences with fuzzy typo tolerance',
        icon: PenLine,
        color: '#f59e0b',
        count: 30,
    },
    {
        id: 'sequence',
        title: 'Sequence Ordering',
        description: 'Arrange steps, events, or processes in the correct order',
        icon: ArrowUpDown,
        color: '#ef4444',
        count: 15,
    },
    {
        id: 'keyword',
        title: 'Theory / Keyword Check',
        description: 'Write your answer and get keywords scanned automatically',
        icon: Search,
        color: '#0ea5e9',
        count: 25,
    },
    {
        id: 'flashcards',
        title: 'Flashcard Review',
        description: 'Quick flip cards for active recall practice',
        icon: Brain,
        color: '#8b5cf6',
        count: 60,
    },
];

// Sample MCQ data
const sampleMCQs = [
    {
        id: 1,
        stem: 'What is the relative charge of a proton?',
        options: ['+1', '-1', '0', '+2'],
        correctAnswer: 0,
        rationale: 'A proton has a relative charge of +1. Electrons have a charge of -1, neutrons have 0 charge, and +2 is not a valid charge for any subatomic particle.',
        topic: 'Atomic Structure',
    },
    {
        id: 2,
        stem: 'Which subatomic particle is found in the nucleus and has no charge?',
        options: ['Electron', 'Proton', 'Neutron', 'Photon'],
        correctAnswer: 2,
        rationale: 'Neutrons are found in the nucleus alongside protons and carry no electrical charge. Electrons orbit outside the nucleus, protons are positive, and photons are particles of light.',
        topic: 'Atomic Structure',
    },
    {
        id: 3,
        stem: 'The atomic number of an element represents:',
        options: [
            'The number of neutrons',
            'The number of protons',
            'The total number of protons and neutrons',
            'The number of electrons in the outer shell',
        ],
        correctAnswer: 1,
        rationale: 'The atomic number (Z) is defined as the number of protons in the nucleus of an atom. In a neutral atom, it also equals the number of electrons.',
        topic: 'Atomic Structure',
    },
];

// Sample Drag & Drop data
const sampleDragDrop = [
    {
        id: 1,
        stem: 'Sort these particles into their correct location in the atom:',
        categories: ['Nucleus', 'Electron Shells'],
        items: [
            { text: 'Proton', category: 'Nucleus' },
            { text: 'Neutron', category: 'Nucleus' },
            { text: 'Electron', category: 'Electron Shells' },
            { text: 'Positive charge', category: 'Nucleus' },
            { text: 'Negative charge', category: 'Electron Shells' },
            { text: 'No charge', category: 'Nucleus' },
        ],
    },
    {
        id: 2,
        stem: 'Classify these bonds as ionic or covalent:',
        categories: ['Ionic Bonding', 'Covalent Bonding'],
        items: [
            { text: 'NaCl', category: 'Ionic Bonding' },
            { text: 'H₂O', category: 'Covalent Bonding' },
            { text: 'MgO', category: 'Ionic Bonding' },
            { text: 'CH₄', category: 'Covalent Bonding' },
            { text: 'CaCl₂', category: 'Ionic Bonding' },
            { text: 'CO₂', category: 'Covalent Bonding' },
        ],
    },
];

// Sample Fill-in-the-Blank data
const sampleFillBlanks = [
    {
        id: 1,
        stem: 'Complete the description of an atom:',
        template: 'The nucleus of an atom contains __BLANK__ and __BLANK__. The particles that orbit the nucleus in shells are called __BLANK__.',
        blanks: [
            { answer: 'protons' },
            { answer: 'neutrons' },
            { answer: 'electrons' },
        ],
        rationale: 'The nucleus contains protons (positive) and neutrons (neutral). Electrons (negative) orbit the nucleus in energy levels/shells.',
    },
    {
        id: 2,
        stem: 'Fill in the blanks about atomic structure:',
        template: 'The atomic number tells you the number of __BLANK__ in an atom. The mass number tells you the total of __BLANK__ plus __BLANK__.',
        blanks: [
            { answer: 'protons' },
            { answer: 'protons' },
            { answer: 'neutrons' },
        ],
        rationale: 'Atomic number (Z) = number of protons. Mass number (A) = protons + neutrons.',
    },
];

// Sample Sequence data
const sampleSequences = [
    {
        id: 1,
        stem: 'Put the atomic models in chronological order:',
        steps: [
            "Dalton's solid sphere model (1803)",
            "Thomson's plum pudding model (1904)",
            "Rutherford's nuclear model (1911)",
            "Bohr's planetary model (1913)",
            'Quantum mechanical model (1926)',
        ],
    },
    {
        id: 2,
        stem: 'Order the steps of Rutherford\'s gold foil experiment:',
        steps: [
            'Alpha particles fired at thin gold foil',
            'Most particles passed straight through',
            'Some particles were deflected at small angles',
            'A few particles bounced back at large angles',
            'Rutherford concluded the atom has a small, dense, positive nucleus',
        ],
    },
];

// Sample Keyword Check data
const sampleKeywords = [
    {
        id: 1,
        stem: 'Describe the structure of an atom. [4 marks]',
        marks: 4,
        keywords: ['nucleus', 'protons', 'neutrons', 'electrons', 'shells', 'positive', 'negative'],
        modelAnswer: 'An atom consists of a central nucleus containing protons (positive charge) and neutrons (no charge). The nucleus is surrounded by electrons (negative charge) which orbit in fixed energy levels called shells. In a neutral atom, the number of protons equals the number of electrons.',
    },
    {
        id: 2,
        stem: 'Explain what isotopes are and give an example. [3 marks]',
        marks: 3,
        keywords: ['same element', 'same number of protons', 'different number of neutrons', 'different mass number', 'same atomic number'],
        modelAnswer: 'Isotopes are atoms of the same element that have the same number of protons but a different number of neutrons. They therefore have the same atomic number but different mass numbers. An example is carbon-12 and carbon-14.',
    },
];

export default function ExercisePage() {
    const [activeType, setActiveType] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    // MCQ view
    if (activeType === 'mcq') {
        return (
            <div className="exercise-hub animate-fade-in">
                <button className="btn btn-ghost" onClick={() => { setActiveType(null); setCurrentQuestion(0); }} style={{ marginBottom: 'var(--space-4)' }}>
                    ← Back to Exercises
                </button>
                <h2 style={{ marginBottom: 'var(--space-6)' }}>Multiple Choice Questions</h2>

                <div style={{ marginBottom: 'var(--space-4)' }}>
                    <span className="badge badge-primary">
                        Question {currentQuestion + 1} of {sampleMCQs.length}
                    </span>
                    <span className="badge badge-info" style={{ marginLeft: 'var(--space-2)' }}>
                        {sampleMCQs[currentQuestion].topic}
                    </span>
                </div>

                <MCQExercise
                    question={sampleMCQs[currentQuestion]}
                    onNext={() => setCurrentQuestion(prev =>
                        prev < sampleMCQs.length - 1 ? prev + 1 : 0
                    )}
                />
            </div>
        );
    }

    // Drag & Drop view
    if (activeType === 'drag-drop') {
        return (
            <div className="exercise-hub animate-fade-in">
                <button className="btn btn-ghost" onClick={() => { setActiveType(null); setCurrentQuestion(0); }} style={{ marginBottom: 'var(--space-4)' }}>
                    ← Back to Exercises
                </button>
                <h2 style={{ marginBottom: 'var(--space-6)' }}>Drag & Drop Categorization</h2>

                <div style={{ marginBottom: 'var(--space-4)' }}>
                    <span className="badge badge-primary">
                        Question {currentQuestion + 1} of {sampleDragDrop.length}
                    </span>
                </div>

                <DragDropExercise
                    key={currentQuestion}
                    question={sampleDragDrop[currentQuestion]}
                    onNext={() => setCurrentQuestion(prev =>
                        prev < sampleDragDrop.length - 1 ? prev + 1 : 0
                    )}
                />
            </div>
        );
    }

    // Fill-in-the-Blank view
    if (activeType === 'fill-blank') {
        return (
            <div className="exercise-hub animate-fade-in">
                <button className="btn btn-ghost" onClick={() => { setActiveType(null); setCurrentQuestion(0); }} style={{ marginBottom: 'var(--space-4)' }}>
                    ← Back to Exercises
                </button>
                <h2 style={{ marginBottom: 'var(--space-6)' }}>Fill in the Blanks</h2>

                <div style={{ marginBottom: 'var(--space-4)' }}>
                    <span className="badge badge-primary">
                        Question {currentQuestion + 1} of {sampleFillBlanks.length}
                    </span>
                </div>

                <FillBlankExercise
                    key={currentQuestion}
                    question={sampleFillBlanks[currentQuestion]}
                    onNext={() => setCurrentQuestion(prev =>
                        prev < sampleFillBlanks.length - 1 ? prev + 1 : 0
                    )}
                />
            </div>
        );
    }

    // Sequence Ordering view
    if (activeType === 'sequence') {
        return (
            <div className="exercise-hub animate-fade-in">
                <button className="btn btn-ghost" onClick={() => { setActiveType(null); setCurrentQuestion(0); }} style={{ marginBottom: 'var(--space-4)' }}>
                    ← Back to Exercises
                </button>
                <h2 style={{ marginBottom: 'var(--space-6)' }}>Sequence Ordering</h2>

                <div style={{ marginBottom: 'var(--space-4)' }}>
                    <span className="badge badge-primary">
                        Question {currentQuestion + 1} of {sampleSequences.length}
                    </span>
                </div>

                <SequenceExercise
                    key={currentQuestion}
                    question={sampleSequences[currentQuestion]}
                    onNext={() => setCurrentQuestion(prev =>
                        prev < sampleSequences.length - 1 ? prev + 1 : 0
                    )}
                />
            </div>
        );
    }

    // Keyword Check view
    if (activeType === 'keyword') {
        return (
            <div className="exercise-hub animate-fade-in">
                <button className="btn btn-ghost" onClick={() => { setActiveType(null); setCurrentQuestion(0); }} style={{ marginBottom: 'var(--space-4)' }}>
                    ← Back to Exercises
                </button>
                <h2 style={{ marginBottom: 'var(--space-6)' }}>Theory / Keyword Check</h2>

                <div style={{ marginBottom: 'var(--space-4)' }}>
                    <span className="badge badge-primary">
                        Question {currentQuestion + 1} of {sampleKeywords.length}
                    </span>
                </div>

                <KeywordCheck
                    key={currentQuestion}
                    question={sampleKeywords[currentQuestion]}
                    onNext={() => setCurrentQuestion(prev =>
                        prev < sampleKeywords.length - 1 ? prev + 1 : 0
                    )}
                />
            </div>
        );
    }

    return (
        <div className="exercise-hub animate-fade-in">
            <h1 style={{ marginBottom: 'var(--space-2)' }}>Exercises</h1>
            <p style={{ marginBottom: 'var(--space-6)' }}>
                Build deeper understanding with interactive exercises
            </p>

            <div className="exercise-types-grid">
                {exerciseTypes.map((type, i) => {
                    const Icon = type.icon;
                    return (
                        <div
                            key={type.id}
                            className="exercise-type-card card card-hover animate-fade-in"
                            style={{ animationDelay: `${i * 0.08}s`, cursor: 'pointer' }}
                            onClick={() => setActiveType(type.id)}
                        >
                            <div className="exercise-type-header">
                                <div
                                    className="exercise-type-icon"
                                    style={{ background: type.color }}
                                >
                                    <Icon size={22} />
                                </div>
                                <div>
                                    <h3>{type.title}</h3>
                                    <span className="badge badge-primary">{type.count} questions</span>
                                </div>
                            </div>
                            <p>{type.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
