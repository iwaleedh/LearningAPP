import { Link } from 'react-router-dom';
import {
    BookOpen, FlaskConical, FileQuestion, Brain, Trophy,
    ArrowRight, Flame, Target, Clock, TrendingUp, Sparkles
} from 'lucide-react';
import './Pages.css';

// Sample data (will be replaced with Convex queries)
const quickStats = [
    { label: 'Chapters Read', value: '0', icon: BookOpen, color: 'var(--color-primary)' },
    { label: 'Exercises Done', value: '0', icon: FlaskConical, color: 'var(--color-success)' },
    { label: 'Papers Completed', value: '0', icon: FileQuestion, color: 'var(--color-accent)' },
    { label: 'Study Streak', value: '0 days', icon: Flame, color: 'var(--color-error)' },
];

const subjects = [
    { id: 'chemistry', name: 'Chemistry', chapters: 12, color: '#6366f1', emoji: '⚗️' },
    { id: 'biology', name: 'Biology', chapters: 10, color: '#10b981', emoji: '🧬' },
    { id: 'physics', name: 'Physics', chapters: 14, color: '#f59e0b', emoji: '⚡' },
    { id: 'math', name: 'Mathematics', chapters: 16, color: '#ef4444', emoji: '📐' },
    { id: 'business', name: 'Business', chapters: 20, color: '#0ea5e9', emoji: '💼' },
    { id: 'economics', name: 'Economics', chapters: 23, color: '#14b8a6', emoji: '📊' },
    { id: 'accounting', name: 'Accounting', chapters: 15, color: '#f97316', emoji: '📒' },
];

export default function HomePage() {
    return (
        <div className="home-page animate-fade-in">
            {/* Welcome Banner */}
            <div className="welcome-banner">
                <div className="welcome-content">
                    <div className="welcome-badge">
                        <Sparkles size={14} />
                        <span>Interactive Learning Platform</span>
                    </div>
                    <h1>Welcome to Living Textbook</h1>
                    <p>Your personal, interactive study companion — notes, exercises, past papers, and flashcards, all in one place.</p>
                    <div className="welcome-actions">
                        <Link to="/chapters" className="btn btn-primary btn-lg">
                            <BookOpen size={20} />
                            Start Learning
                        </Link>
                        <Link to="/past-papers" className="btn btn-secondary btn-lg">
                            <FileQuestion size={20} />
                            Practice Papers
                        </Link>
                    </div>
                </div>
                <div className="welcome-decoration">
                    <div className="floating-icon fi-1">📚</div>
                    <div className="floating-icon fi-2">🧪</div>
                    <div className="floating-icon fi-3">🎯</div>
                    <div className="floating-icon fi-4">⭐</div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="stats-grid">
                {quickStats.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                        <div key={i} className="stat-card card animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                            <div className="stat-icon" style={{ background: `${stat.color}15`, color: stat.color }}>
                                <Icon size={22} />
                            </div>
                            <div className="stat-info">
                                <span className="stat-value">{stat.value}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Subjects */}
            <div className="section-header">
                <h2>Subjects</h2>
                <Link to="/chapters" className="btn btn-ghost">
                    View All <ArrowRight size={16} />
                </Link>
            </div>
            <div className="subjects-grid">
                {subjects.map((subject, i) => (
                    <Link
                        key={subject.id}
                        to={`/chapters?subject=${subject.id}`}
                        className="subject-card card card-hover animate-fade-in"
                        style={{ animationDelay: `${i * 0.1}s` }}
                    >
                        <div className="subject-emoji">{subject.emoji}</div>
                        <h3>{subject.name}</h3>
                        <p>{subject.chapters} Chapters</p>
                        <div className="subject-progress">
                            <div className="progress-bar">
                                <div className="progress-bar-fill" style={{ width: '0%' }} />
                            </div>
                            <span className="progress-text">0% Complete</span>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Quick Actions Grid */}
            <div className="section-header">
                <h2>Quick Actions</h2>
            </div>
            <div className="actions-grid">
                <Link to="/exercises" className="action-card card card-hover">
                    <FlaskConical size={28} className="action-icon" />
                    <h4>Practice Exercises</h4>
                    <p>Test your understanding with interactive questions</p>
                </Link>
                <Link to="/flashcards" className="action-card card card-hover">
                    <Brain size={28} className="action-icon" />
                    <h4>Flashcard Review</h4>
                    <p>Quick active recall study sessions</p>
                </Link>
                <Link to="/past-papers" className="action-card card card-hover">
                    <Target size={28} className="action-icon" />
                    <h4>Mock Exam</h4>
                    <p>Timed past paper practice under exam conditions</p>
                </Link>
                <Link to="/progress" className="action-card card card-hover">
                    <TrendingUp size={28} className="action-icon" />
                    <h4>View Progress</h4>
                    <p>Track your study streak and performance</p>
                </Link>
            </div>
        </div>
    );
}
