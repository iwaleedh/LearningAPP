import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeProvider from './context/ThemeProvider';
import ErrorBoundary from './components/ErrorBoundary';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import ChapterPage from './pages/ChapterPage';
import ExercisePage from './pages/ExercisePage';
import PastPapersPage from './pages/PastPapersPage';
import FlashcardsPage from './pages/FlashcardsPage';
import ProgressPage from './pages/ProgressPage';
import MistakeBankPage from './pages/MistakeBankPage';
import SettingsPage from './pages/SettingsPage';
import TeacherDashboard from './pages/TeacherDashboard';
import CommandSearch from './components/student/CommandSearch';
import './App.css';

const AdvancedPage = lazy(() => import('./pages/AdvancedPage'));
const NotePage = lazy(() => import('./pages/NotePage'));
const AnnotatePage = lazy(() => import('./pages/AnnotatePage'));
const TeacherMonitorPage = lazy(() => import('./pages/TeacherMonitorPage'));
const LiveClassPage = lazy(() => import('./pages/LiveClassPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function AppContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Global keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="app-layout">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <div className="app-main">
        <Header
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
          onSearchOpen={() => setSearchOpen(true)}
        />
        <main className="page-content">
          <ErrorBoundary>
          <Suspense fallback={<div className="card animate-fade-in">Loading page...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/chapters" element={<ChapterPage />} />
              <Route path="/chapters/:chapterId" element={<ChapterPage />} />
              <Route path="/notes" element={<ChapterPage />} />
              <Route path="/notes/:subject/:unitId/:topicId/:subtopicIndex" element={<NotePage />} />
              <Route path="/exercises" element={<ExercisePage />} />
              <Route path="/past-papers" element={<PastPapersPage />} />
              <Route path="/flashcards" element={<FlashcardsPage />} />
              <Route path="/progress" element={<ProgressPage />} />
              <Route path="/mistakes" element={<MistakeBankPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/teacher" element={<TeacherDashboard />} />
              <Route path="/teacher/monitor" element={<TeacherMonitorPage />} />
              <Route path="/advanced" element={<AdvancedPage />} />
              <Route path="/annotate/:paperId" element={<AnnotatePage />} />
              <Route path="/live/:sessionId" element={<LiveClassPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
          </ErrorBoundary>
        </main>
      </div>

      {searchOpen && (
        <CommandSearch onClose={() => setSearchOpen(false)} />
      )}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}
