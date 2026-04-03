import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import ThemeProvider from './context/ThemeProvider';
import AuthProvider from './context/AuthProvider';
import { useAuth } from './hooks/useAuth.js';
import ErrorBoundary from './components/ErrorBoundary';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import RequireRole from './components/auth/RequireRole';
import RequireSignIn from './components/auth/RequireSignIn';
import RequireApproved from './components/auth/RequireApproved';
import { canAccessLocalLiveClassAsGuest } from './components/auth/accessControl.js';
import { ToastProvider } from './components/common/Toast';
import './components/common/Skeleton.css';
import './components/common/StateScreens.css';

const LandingPage = lazy(() => import('./pages/LandingPage'));
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
const PendingApprovalPage = lazy(() => import('./pages/PendingApprovalPage'));
const AdminPage = lazy(() => import('./pages/AdminPage'));
const CommandSearch = lazy(() => import('./components/student/CommandSearch'));

// Loading fallback using skeletons
const PageLoader = () => (
  <div className="page-loader animate-fade-in">
    <div className="page-loader-inner">
      <div className="skeleton page-loader-title"></div>
      <div className="page-loader-grid">
        <div className="skeleton page-loader-card"></div>
        <div className="skeleton page-loader-card"></div>
        <div className="skeleton page-loader-card"></div>
      </div>
    </div>
  </div>
);

const RouteWrapper = () => {
  const location = useLocation();
  return (
    <ErrorBoundary key={`eb-${location.pathname}`}>
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </ErrorBoundary>
  );
};

function AppContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const { isLoaded, isSignedIn } = useAuth();

  // Global keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e) => {
      const activeElement = document.activeElement;
      const tag = activeElement?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || activeElement?.isContentEditable) {
        return;
      }
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

  if (isLoaded && !isSignedIn && location.pathname === '/') {
    return (
      <div className="app-root">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Suspense>
      </div>
    );
  }

  return (
    <ToastProvider>
      <div className="app-layout">
        <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
        <div className="app-main">
          <Header
            onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
            sidebarOpen={sidebarOpen}
            onSearchOpen={() => setSearchOpen(true)}
          />
          <main className="page-content">
              <Routes>
                <Route element={<RouteWrapper />}>
                  {/* Ungated routes — accessible before approval */}
                  <Route path="/pending" element={<PendingApprovalPage />} />

              {/* Admin route — requires admin flag */}
              <Route
                path="/admin"
                element={(
                  <RequireApproved>
                    <AdminPage />
                  </RequireApproved>
                )}
              />

              {/* All other routes require approved account */}
              <Route path="/" element={<RequireApproved><HomePage /></RequireApproved>} />
              <Route path="/chapters" element={<RequireApproved><ChapterPage /></RequireApproved>} />
              <Route path="/chapters/:chapterId" element={<RequireApproved><ChapterPage /></RequireApproved>} />
              <Route path="/notes" element={<RequireApproved><ChapterPage /></RequireApproved>} />
              <Route path="/notes/:subject/:unitId/:topicId/:subtopicIndex" element={<RequireApproved><NotePage /></RequireApproved>} />
              <Route path="/exercises" element={<RequireApproved><ExercisePage /></RequireApproved>} />
              <Route path="/past-papers" element={
                <RequireApproved>
                  <PastPapersPage />
                </RequireApproved>
              } />
              <Route path="/flashcards" element={<RequireApproved><FlashcardsPage /></RequireApproved>} />
              <Route path="/progress" element={<RequireApproved><ProgressPage /></RequireApproved>} />
              <Route path="/mistakes" element={<RequireApproved><MistakeBankPage /></RequireApproved>} />
              <Route path="/settings" element={<RequireApproved><SettingsPage /></RequireApproved>} />
              <Route
                path="/teacher"
                element={(
                  <RequireApproved>
                    <RequireRole allowedRoles={['teacher']} reason="open the teacher dashboard">
                      <TeacherDashboard />
                    </RequireRole>
                  </RequireApproved>
                )}
              />
              <Route
                path="/teacher/monitor"
                element={(
                  <RequireApproved>
                    <RequireRole allowedRoles={['teacher']} reason="monitor live teacher sessions">
                      <TeacherMonitorPage />
                    </RequireRole>
                  </RequireApproved>
                )}
              />
              <Route path="/advanced" element={<RequireApproved><AdvancedPage /></RequireApproved>} />
              <Route path="/backend-architectures" element={<RequireApproved><BackendArchitecturesPage /></RequireApproved>} />
              <Route path="/annotate/:paperId" element={<RequireApproved><AnnotatePage /></RequireApproved>} />
              <Route
                path="/live/:sessionId"
                element={(
                  <RequireSignIn
                    reason="join a live class"
                    allowAnonymousAccess={({ canSignIn, location }) =>
                      canAccessLocalLiveClassAsGuest(location?.pathname, { canSignIn })
                    }
                  >
                    <LiveClassPage />
                  </RequireSignIn>
                )}
              />
              <Route
                path="/live-notes/:sessionId/:tempId"
                element={(
                  <RequireApproved>
                    <RequireRole allowedRoles={['teacher']} reason="view student live notes">
                      <StudentNotesViewPage />
                    </RequireRole>
                  </RequireApproved>
                )}
              />
              <Route path="*" element={<NotFoundPage />} />
                </Route>
              </Routes>
        </main>
      </div>

      {searchOpen && (
        <Suspense fallback={null}>
          <CommandSearch onClose={() => setSearchOpen(false)} />
        </Suspense>
      )}
      </div>
    </ToastProvider>
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
