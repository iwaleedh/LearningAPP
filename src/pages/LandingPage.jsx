import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LogIn, BookOpen, Brain, Trophy, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../hooks/useAuth.js';
import AuthModal from '../components/auth/AuthModal.jsx';
import './LandingPage.css';

export default function LandingPage() {
  const { canSignIn } = useAuth();
  const location = useLocation();
  const [authOpen, setAuthOpen] = useState(
    location.state?.accessRequired === 'auth' || false
  );
  
  const redirectTarget = location.state?.from || '/';

  return (
    <div className="landing-page">
      <nav className="landing-nav">
        <div className="landing-logo">📚 Living Textbook</div>
        {canSignIn && (
          <button 
            className="btn btn-primary"
            onClick={() => setAuthOpen(true)}
          >
            <LogIn size={18} style={{ marginRight: 8 }} />
            Sign In
          </button>
        )}
      </nav>

      <main className="landing-main">
        <section className="hero-section">
          <h1 className="hero-title">Master A-Level & IAL Subjects</h1>
          <p className="hero-subtitle">
            An interactive study companion with structured notes, built-in active recall, endless practice papers, and automated feedback.
          </p>
          <button 
            className="btn btn-primary btn-lg hero-cta"
            onClick={() => setAuthOpen(true)}
          >
            Get Started Now
            <ArrowRight size={20} style={{ marginLeft: 8 }} />
          </button>
        </section>

        <section className="features-section">
          <h2 className="section-title">Everything you need to excel</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper blue"><BookOpen /></div>
              <h3>Smart Notes</h3>
              <p>Comprehensive syllabus coverage with interactive equations, diagrams, and check-list trackers.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper purple"><Brain /></div>
              <h3>Active Recall</h3>
              <p>Spaced repetition flashcards and inline recall cues that test your knowledge as you read.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper orange"><Trophy /></div>
              <h3>Past Papers</h3>
              <p>Vast database of timed past papers. Track your scores, analyze mistakes, and monitor your progress over time.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper green"><Shield /></div>
              <h3>Teacher Tools</h3>
              <p>Live classroom integration, student progress monitoring, and powerful administrative dashboards.</p>
            </div>
          </div>
        </section>

        <section className="benefits-section">
          <div className="benefits-content">
            <h2 className="section-title text-left">Why choose Living Textbook?</h2>
            <ul className="benefits-list">
              <li><CheckCircle2 className="benefit-icon" /> <strong>All-in-one platform</strong> — No more juggling scattered PDFs.</li>
              <li><CheckCircle2 className="benefit-icon" /> <strong>Gamified learning</strong> — Earn streaks, track confidence, and stay motivated.</li>
              <li><CheckCircle2 className="benefit-icon" /> <strong>Real-time syncing</strong> — Your progress syncs instantly across mobile and desktop.</li>
              <li><CheckCircle2 className="benefit-icon" /> <strong>Intelligent grading</strong> — AI-assisted grading to clarify your misunderstandings.</li>
            </ul>
          </div>
          <div className="benefits-image-placeholder">
            <div className="decorative-app-mock">
              <div className="mock-header"></div>
              <div className="mock-body">
                <div className="mock-sidebar"></div>
                <div className="mock-content">
                  <div className="mock-card lines"></div>
                  <div className="mock-card lines"></div>
                  <div className="mock-card area"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <p>&copy; {new Date().getFullYear()} Living Textbook. All rights reserved.</p>
      </footer>

      {authOpen && (
        <AuthModal onClose={() => setAuthOpen(false)} redirectTo={redirectTarget} />
      )}
    </div>
  );
}