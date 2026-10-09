import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LogIn, BookOpen, Brain, Trophy, FlaskConical, ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Laptop, Smartphone } from 'lucide-react';
import { useAuth } from '../hooks/useAuth.js';
import AuthModal from '../components/auth/AuthModal.jsx';
import { clearAccessExpiredNotice, formatAccessDueDate, readAccessExpiredNotice } from '../services/auth/accessWindow.js';
import './LandingPage.css';
import BrandMark from '../components/common/BrandMark.jsx';

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
  const [accessNotice, setAccessNotice] = useState(() => readAccessExpiredNotice());
  const [authOpen, setAuthOpen] = useState(
    location.state?.accessRequired === 'auth' || false
  );
  const [authReturnFocusEl, setAuthReturnFocusEl] = useState(null);
  
  const redirectTarget = location.state?.from || '/';
  const openAuth = (event) => {
    setAuthReturnFocusEl(event.currentTarget);
    setAuthOpen(true);
  };

  return (
    <div className="landing-page">
      <nav className="landing-nav">
        <div className="landing-logo"><BrandMark size={32} /> Study Smart</div>
        {canSignIn && (
          <button 
            className="btn btn-primary"
            onClick={openAuth}
          >
            <LogIn size={18} aria-hidden="true" />
            Sign in
          </button>
        )}
      </nav>

      <main className="landing-main">
        {accessNotice && (
          <section className="landing-access-notice card" aria-live="polite">
            <div>
              <div className="landing-access-notice-eyebrow">Access expired</div>
              <h2>Sign in again to renew your access window</h2>
              <p>
                Your previous access window ended on {formatAccessDueDate(accessNotice.accessExpiresAt)}.
                Sign in to choose a new one-month or one-year duration.
              </p>
            </div>
            <div className="landing-access-notice-actions">
              {canSignIn && (
                <button className="btn btn-primary" onClick={openAuth} type="button">Renew access</button>
              )}
              <button
                className="btn btn-ghost"
                onClick={() => {
                  clearAccessExpiredNotice();
                  setAccessNotice(null);
                }}
                type="button"
              >
                Dismiss
              </button>
            </div>
          </section>
        )}

        <section className="hero-section">
          <h1 className="hero-title">Revise for Edexcel IAL and IGCSE, one topic at a time</h1>
          <p className="hero-subtitle">
            Syllabus-ordered notes, step-by-step lessons, practice questions and past papers in one calm place built for evening study on your phone or laptop.
          </p>
          <button
            className="btn btn-primary btn-lg hero-cta"
            onClick={openAuth}
          >
            Get started
            <ArrowRight size={20} aria-hidden="true" />
          </button>
        </section>

        <section className="features-section">
          <h2 className="section-title">Everything for revision in one place</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper"><BookOpen aria-hidden="true" /></div>
              <h3>Notes by syllabus</h3>
              <p>Every unit, topic and subtopic in exam-board order, with worked examples, diagrams and summaries.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper"><Brain aria-hidden="true" /></div>
              <h3>Lessons and recall</h3>
              <p>Short step-by-step lessons with quick checks, plus recall questions to test yourself as you read.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper"><FlaskConical aria-hidden="true" /></div>
              <h3>Practice questions</h3>
              <p>Multiple choice, flashcards, fill-in-the-blanks and more for each topic, with a bank of your mistakes.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper"><Trophy aria-hidden="true" /></div>
              <h3>Past papers</h3>
              <p>Real exam papers with mark schemes, filtered by year, session and unit, with a timer for exam practice.</p>
            </div>
          </div>
        </section>

        <section className="benefits-section">
          <div className="benefits-content">
            <h2 className="section-title text-left">Built around how you study</h2>
            <ul className="benefits-list">
              <li><CheckCircle2 className="benefit-icon" aria-hidden="true" /> <span><strong>Pick up where you left off.</strong> Home opens on the exact note you were reading.</span></li>
              <li><CheckCircle2 className="benefit-icon" aria-hidden="true" /> <span><strong>See your progress.</strong> Read ticks, topic progress and a daily goal keep you moving.</span></li>
              <li><CheckCircle2 className="benefit-icon" aria-hidden="true" /> <span><strong>Easy on the eyes at night.</strong> A dark theme by default, with a light theme when you want it.</span></li>
              <li><CheckCircle2 className="benefit-icon" aria-hidden="true" /> <span><strong>Phone or laptop.</strong> Your progress follows your account across devices.</span></li>
            </ul>
          </div>
          <div className="landing-preview" aria-label="Preview of the Study Smart home screen">
            <div className="landing-preview-card">
              <span className="landing-preview-title">Atomic and formula terms</span>
              <span className="landing-preview-meta">AL Chemistry · Formulae &amp; Amount</span>
              <span className="landing-preview-track"><span style={{ transform: 'scaleX(0.36)' }} /></span>
              <span className="landing-preview-action">Resume</span>
            </div>
            <ul className="landing-preview-subjects">
              {[['Chemistry', 36], ['Biology', 18], ['Mathematics', 52]].map(([name, pct]) => (
                <li key={name}>
                  <span className="landing-preview-ring" style={{ '--pct': pct }} aria-hidden="true" />
                  <span>{name}</span>
                  <span className="landing-preview-pct">{pct}%</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="subjects-section">
          <h2 className="section-title">Subjects</h2>
          <p className="section-subtitle">Pearson Edexcel International A Level, Cambridge IGCSE, and Cambridge English C1 and C2</p>
          <div className="subjects-grid">
            {['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Business', 'Economics', 'Accounting', 'English (C1 / C2)'].map((name) => (
              <div key={name} className="subject-pill">{name}</div>
            ))}
          </div>
        </section>

        <section className="how-it-works-section">
          <h2 className="section-title">How it works</h2>
          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Learn the topic</h3>
              <p>Work through a short lesson or read the full notes for your subtopic.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Check yourself</h3>
              <p>Answer recall questions and practice sets to find what still needs work.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Practise like the exam</h3>
              <p>Attempt past papers under time and compare with the mark scheme.</p>
            </div>
          </div>
        </section>

        <section className="cross-platform-section">
          <div className="cross-platform-image">
            <Laptop size={80} className="device-icon" aria-hidden="true" />
            <Smartphone size={60} className="device-icon mobile" aria-hidden="true" />
          </div>
          <div className="cross-platform-content">
            <h2 className="section-title text-left">Study on any device</h2>
            <p className="section-description">
              Study Smart runs in your browser and can be installed to your home screen like an app on phones, tablets and computers.
            </p>
            <ul className="benefits-list">
              <li><CheckCircle2 className="benefit-icon" aria-hidden="true" /> <span>Works on iOS, Android, macOS and Windows.</span></li>
              <li><CheckCircle2 className="benefit-icon" aria-hidden="true" /> <span>Pick up right where you left off.</span></li>
            </ul>
          </div>
        </section>

        <section className="faq-section">
          <h2 className="section-title">Questions</h2>
          <div className="faq-container">
            <FAQItem
              question="Which exam boards are covered?"
              answer="Pearson Edexcel International A Level, Cambridge IGCSE, and Cambridge English C1 Advanced and C2 Proficiency."
            />
            <FAQItem
              question="Can I use Study Smart on my phone?"
              answer="Yes. It is designed for phones first, and you can add it to your home screen for an app-like experience."
            />
            <FAQItem
              question="How do past papers work?"
              answer="Choose a subject, filter by year, session or unit, and open the paper with its mark scheme. You can time yourself for exam practice."
            />
            <FAQItem
              question="Is my progress saved?"
              answer="Yes. Notes you have read, flashcard progress and saved notes are linked to your account."
            />
          </div>
        </section>

        <section className="cta-section">
          <h2>Start tonight's revision</h2>
          <p>Create your account and open your first note in under a minute.</p>
          <button
            className="btn btn-primary btn-lg hero-cta"
            onClick={openAuth}
          >
            Create your account
          </button>
        </section>

      </main>

      <footer className="landing-footer">
        <p>&copy; {new Date().getFullYear()} Study Smart. All rights reserved.</p>
      </footer>

      {authOpen && (
        <AuthModal
          onClose={() => setAuthOpen(false)}
          redirectTo={redirectTarget}
          returnFocusEl={authReturnFocusEl}
        />
      )}
    </div>
  );
}