import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { CoursesView } from './components/CoursesView';
import { CourseLanding } from './components/CourseLanding';
import { CoursePlayer } from './components/CoursePlayer';
import { ForumView } from './components/ForumView';
import { DashboardView } from './components/DashboardView';
import { AboutView } from './components/AboutView';
import { ColaboraView } from './components/ColaboraView';
import { HistoriasView } from './components/HistoriasView';
import { BlogView } from './components/BlogView';
import { TeamView } from './components/TeamView';
import { CookieConsent } from './components/CookieConsent';
import { LegalView } from './components/LegalView';
import { LoginModal } from './components/LoginModal';
import { authService } from './services/authService';

import { Course, CourseCategory, EnrollmentState } from './types';
import { coursesData } from './data/coursesData';
import { initialForumThreads } from './data/forumData';

export default function App() {
  // Navigation states
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedCourseSlug, setSelectedCourseSlug] = useState<string>('fundamentos-ux');
  const [categoryFilter, setCategoryFilter] = useState<CourseCategory | undefined>(undefined);

  // Accessible UI Customization states
  const [fontSizeMultiplier, setFontSizeMultiplier] = useState<number>(1.0);
  const [highContrast, setHighContrast] = useState<boolean>(false);

  // Auth & Student profile states
  const [user, setUser] = useState<{ name: string; email: string; picture: string } | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'register'>('register');
  const [userName, setUserName] = useState<string>('Estudiante');

  // Cargar sesión guardada de la base de datos local al iniciar la app
  useEffect(() => {
    const savedUser = authService.getCurrentSession();
    if (savedUser) {
      setUser({
        name: savedUser.name,
        email: savedUser.email,
        picture: savedUser.picture
      });
      setUserName(savedUser.name);
    }
  }, []);

  // Academic Enrollment progress database states (with initial active progress to feel premium on opening)
  const [enrollments, setEnrollments] = useState<EnrollmentState[]>([
    {
      courseId: 'fundamentos-ux',
      completedLessons: ['ux-1', 'ux-2'], // Completed 2 of 3 modules
      lastAccessedLessonId: 'ux-2',
      isCompleted: false,
      certificateClaimed: false
    },
    {
      courseId: 'intro-vibe-coding',
      completedLessons: ['vibe-1'], // Completed 1 of 3
      lastAccessedLessonId: 'vibe-1',
      isCompleted: false,
      certificateClaimed: false
    }
  ]);

  // Adjust font multipliers (+10% / -10%)
  const handleAdjustFontSize = (increment: boolean) => {
    setFontSizeMultiplier((prev) => {
      if (increment) {
        return Math.min(prev + 0.1, 1.5); // max 150% size scaling
      } else {
        return Math.max(prev - 0.1, 0.85); // min 85% size scaling
      }
    });
  };

  const handleToggleHighContrast = () => {
    setHighContrast((prev) => !prev);
  };

  const handleEnrollInCourse = (courseId: string) => {
    setEnrollments((prev) => {
      const exists = prev.some((e) => e.courseId === courseId);
      if (exists) return prev;
      return [
        ...prev,
        {
          courseId,
          completedLessons: [],
          isCompleted: false,
          certificateClaimed: false
        }
      ];
    });
  };

  const handleUpdateCompletedLessons = (courseId: string, completedLessonIds: string[]) => {
    setEnrollments((prev) =>
      prev.map((e) => {
        if (e.courseId === courseId) {
          const course = coursesData.find((c) => c.id === courseId);
          const totalLessons = course ? course.lessons.length : 0;
          const isDoneNow = completedLessonIds.length === totalLessons;

          return {
            ...e,
            completedLessons: completedLessonIds,
            isCompleted: isDoneNow,
            completionDate: isDoneNow ? new Date().toISOString().split('T')[0] : e.completionDate
          };
        }
        return e;
      })
    );
  };

  // Safe navigation view switcher
  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Find targeted course details based on active slug
  const activeCourse = coursesData.find((c) => c.slug === selectedCourseSlug) || coursesData[0];
  const activeEnrollment = enrollments.find((e) => e.courseId === activeCourse.id);

  return (
    <div 
      id="app-root-wrapper"
      className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
        highContrast 
          ? 'bg-slate-950 text-white selection:bg-amber-400 selection:text-slate-950' 
          : 'bg-slate-50/50 text-gray-800'
      }`}
      style={{ fontSize: `${fontSizeMultiplier}em` }}
    >
      {/* Platform Header */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        fontSizeMultiplier={fontSizeMultiplier}
        onAdjustFontSize={handleAdjustFontSize}
        highContrast={highContrast}
        onToggleHighContrast={handleToggleHighContrast}
        userName={user ? user.name : userName}
        userEmail={user?.email}
        userPicture={user?.picture}
        onOpenLogin={(mode?: 'login' | 'register') => {
          setAuthModalMode(mode || 'register');
          setIsLoginModalOpen(true);
        }}
      />

      {/* Main Dynamic Workspace Router */}
      <main id="app-workspace" className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 pb-24 md:pb-10 w-full">
        {currentView === 'home' && (
          <HomeView
            courses={coursesData}
            onNavigate={handleNavigate}
            onSetSelectedCourseSlug={setSelectedCourseSlug}
            onSetCategoryFilter={setCategoryFilter}
          />
        )}

        {currentView === 'cursos' && (
          <CoursesView
            courses={coursesData}
            onNavigate={handleNavigate}
            onSetSelectedCourseSlug={setSelectedCourseSlug}
            categoryFilter={categoryFilter}
            onSetCategoryFilter={setCategoryFilter}
          />
        )}

        {currentView.startsWith('curso-') && (
          <CourseLanding
            course={activeCourse}
            enrollment={activeEnrollment}
            user={user}
            onRequestAuth={() => {
              setAuthModalMode('register');
              setIsLoginModalOpen(true);
            }}
            onNavigate={handleNavigate}
            onEnroll={handleEnrollInCourse}
            fontSizeMultiplier={fontSizeMultiplier}
          />
        )}

        {currentView.startsWith('player-') && (
          <CoursePlayer
            course={activeCourse}
            enrollment={activeEnrollment}
            onNavigate={handleNavigate}
            onUpdateCompletedLessons={handleUpdateCompletedLessons}
          />
        )}

        {currentView === 'foro' && (
          <ForumView
            initialThreads={initialForumThreads}
            userName={user ? user.name : userName}
            user={user}
            onRequestAuth={() => {
              setAuthModalMode('register');
              setIsLoginModalOpen(true);
            }}
          />
        )}

        {currentView === 'dashboard' && (
          <DashboardView
            courses={coursesData}
            enrollments={enrollments}
            userName={user ? user.name : userName}
            onSetUserName={setUserName}
            onNavigate={handleNavigate}
            onSetCategoryFilter={setCategoryFilter}
          />
        )}

        {currentView === 'sobre-nosotros' && (
          <AboutView />
        )}

        {currentView === 'colabora' && (
          <ColaboraView onNavigate={handleNavigate} />
        )}

        {currentView === 'historias' && (
          <HistoriasView onNavigate={handleNavigate} />
        )}

        {currentView === 'blog' && (
          <BlogView onNavigate={handleNavigate} />
        )}

        {currentView === 'equipo' && (
          <TeamView onNavigate={handleNavigate} />
        )}

        {currentView.startsWith('legal') && (
          <LegalView 
            initialTab={
              currentView === 'legal-privacidad' ? 'privacidad' :
              currentView === 'legal-cookies' ? 'cookies' :
              currentView === 'legal-accesibilidad' ? 'accesibilidad' : 'legal'
            } 
          />
        )}
      </main>

      {/* Platform Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onSetCategoryFilter={setCategoryFilter}
      />

      {/* GDPR Cookie Consent Panel */}
      <CookieConsent />

      {/* Auth / Register / Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        initialMode={authModalMode}
        onClose={() => setIsLoginModalOpen(false)}
        user={user}
        onLoginSuccess={(loggedInUser) => {
          setUser(loggedInUser);
          setUserName(loggedInUser.name);
        }}
        onLogout={() => {
          setUser(null);
        }}
      />
    </div>
  );
}
