import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeProvider from './context/ThemeProvider';
import AuthProvider from './context/AuthProvider';
import ErrorBoundary from './components/ErrorBoundary';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import RequireRole from './components/auth/RequireRole';
import RequireSignIn from './components/auth/RequireSignIn';
import './App.css';


const ChapterPage = lazy(() => import('./pages/ChapterPage'));
const ExercisePage = lazy(() => import('./pages/ExercisePage'));
const PastPapersPage = lazy(() => import('./pages/PastPapersPage'));
const FlashcardsPage = lazy(() => import('./pages/FlashcardsPage'));
const ProgressPage = lazy(() => import('./pages/ProgressPage'));
const MistakeBankPage = lazy(() => import('./pages/MistakeBankPage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));
const TeacherDashboard = lazy(() => import('./pages/TeacherDashboard'));
const BackendArchitecturesPage = lazy(() => import('./pages/BackendArchitecturesPage'));
const AdvancedPage = lazy(() => import('./pages/AdvancedPage'));
const NotePage = lazy(() => import('./pages/NotePage'));
const AnnotatePage = lazy(() => import('./pages/AnnotatePage'));
const TeacherMonitorPage = lazy(() => import('./pages/TeacherMonitorPage'));
const LiveClassPage = lazy(() => import('./pages/LiveClassPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const StudentNotesViewPage = lazy(() => import('./pages/StudentNotesViewPage'));
const CommandSearch = lazy(() => import('./components/student/CommandSearch'));

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
              <Route
                path="/teacher"
                element={(
                  <RequireRole allowedRoles={['teacher']} reason="open the teacher dashboard">
                    <TeacherDashboard />
                  </RequireRole>
                )}
              />
              <Route
                path="/teacher/monitor"
                element={(
                  <RequireRole allowedRoles={['teacher']} reason="monitor live teacher sessions">
                    <TeacherMonitorPage />
                  </RequireRole>
                )}
              />
              <Route path="/advanced" element={<AdvancedPage />} />
              <Route path="/backend-architectures" element={<BackendArchitecturesPage />} />
              <Route path="/annotate/:paperId" element={<AnnotatePage />} />
              <Route
                path="/live/:sessionId"
                element={(
                  <RequireSignIn reason="join a live class">
                    <LiveClassPage />
                  </RequireSignIn>
                )}
              />
              <Route
                path="/live-notes/:sessionId/:tempId"
                element={(
                  <RequireRole allowedRoles={['teacher']} reason="view student live notes">
                    <StudentNotesViewPage />
                  </RequireRole>
                )}
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
          </ErrorBoundary>
        </main>
      </div>

      {searchOpen && (
        <Suspense fallback={null}>
          <CommandSearch onClose={() => setSearchOpen(false)} />
        </Suspense>
      )}
    </div>
  );
}

export default function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter basename={basename}>
          <AppContent />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}
