import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LogIn, BookOpen, Brain, Trophy, Shield, ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Star, Laptop, Smartphone } from 'lucide-react';
import { useAuth } from '../hooks/useAuth.js';
import AuthModal from '../components/auth/AuthModal.jsx';
import './LandingPage.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question">
        <h4>{question}</h4>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      {isOpen && <div className="faq-answer"><p>{answer}</p></div>}
    </div>
  );
};

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

        <section className="subjects-section">
          <h2 className="section-title">Comprehensive Subject Coverage</h2>
          <p className="section-subtitle">Tailored for Pearson Edexcel International A-Level & O-Level</p>
          <div className="subjects-grid">
            <div className="subject-pill">📐 Mathematics</div>
            <div className="subject-pill">⚛️ Physics</div>
            <div className="subject-pill">🧪 Chemistry</div>
            <div className="subject-pill">🧬 Biology</div>
            <div className="subject-pill">💼 Business</div>
            <div className="subject-pill">📈 Economics</div>
            <div className="subject-pill">📊 Accounting</div>
            <div className="subject-pill">🗣️ English (CAE/CPE)</div>
          </div>
        </section>

        <section className="how-it-works-section">
          <h2 className="section-title">How Living Textbook Works</h2>
          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Learn with Smart Notes</h3>
              <p>Read beautifully formatted notes with embedded core practicals, svg diagrams, and quick summaries.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Test via Active Recall</h3>
              <p>Reinforce what you just learned directly inline using hidden flashcards and cue prompts.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Master Past Papers</h3>
              <p>Take timed exams, automatically compare with marking schemes, and review your mistakes.</p>
            </div>
          </div>
        </section>

        <section className="cross-platform-section">
          <div className="cross-platform-image">
            <Laptop size={80} className="device-icon" />
            <Smartphone size={60} className="device-icon mobile" />
          </div>
          <div className="cross-platform-content">
            <h2 className="section-title text-left">Study Anywhere, Anytime</h2>
            <p className="section-description">
              Living Textbook is built as a Progressive Web App (PWA). Install it on your phone, tablet, or desktop to enjoy seamless syncing and offline capabilities.
            </p>
            <ul className="benefits-list">
              <li><CheckCircle2 className="benefit-icon" /> Works on iOS, Android, macOS, and Windows.</li>
              <li><CheckCircle2 className="benefit-icon" /> Lightning fast loading speeds.</li>
              <li><CheckCircle2 className="benefit-icon" /> Pick up right where you left off.</li>
            </ul>
          </div>
        </section>

        <section className="faq-section">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-container">
            <FAQItem 
              question="What exam boards are supported?" 
              answer="Currently, our content is heavily tailored to Pearson Edexcel International A-Levels (IAL) and O-Levels." 
            />
            <FAQItem 
              question="Can I use Living Textbook on my phone?" 
              answer="Yes! Living Textbook is fully responsive. You can even install it on your home screen for an app-like experience." 
            />
            <FAQItem 
              question="How do the past papers work?" 
              answer="We have integrated a massive bank of past papers. You can set a native timer, attempt the paper, and check your answers instantly against the official marking scheme." 
            />
            <FAQItem 
              question="Is my progress saved?" 
              answer="Yes, all your read times, confidence scores, flashcard repetitions, and saved notes are synced to your account securely." 
            />
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to transform your grades?</h2>
          <p>Join thousands of students achieving top marks with interactive learning.</p>
          <button 
            className="btn btn-primary btn-lg hero-cta shadow-pulse"
            onClick={() => setAuthOpen(true)}
          >
            Create Your Free Account
          </button>
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