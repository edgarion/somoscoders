export type CourseCategory = 'ux' | 'vibe-coding' | 'qa' | 'testing';

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  content: string; // Markdown or rich HTML explanation
  exerciseType: 'quiz' | 'code' | 'reading';
  videoUrl?: string; // Enlace a YouTube
  pdfUrl?: string; // Enlace al PDF
  quizQuestion?: {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  };
  codeExercise?: {
    instruction: string;
    initialCode: string;
    solutionKeyword: string;
    placeholder: string;
  };
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  category: CourseCategory;
  level: 'Principiante' | 'Intermedio' | 'Avanzado';
  duration: string;
  lessonsCount: number;
  description: string;
  longDescription: string;
  instructor: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  };
  syllabus: string[];
  lessons: Lesson[];
  studentsCount: number;
  rating: number;
}

export interface EnrollmentState {
  courseId: string;
  completedLessons: string[]; // List of completed lesson IDs
  lastAccessedLessonId?: string;
  isCompleted: boolean;
  certificateClaimed: boolean;
  completionDate?: string;
}

export interface ForumComment {
  id: string;
  authorName: string;
  authorAvatar: string;
  content: string;
  createdAt: string;
  likes: number;
  isLikedByUser?: boolean;
}

export interface ForumThread {
  id: string;
  title: string;
  category: CourseCategory | 'general';
  authorName: string;
  authorAvatar: string;
  content: string;
  createdAt: string;
  likes: number;
  isLikedByUser?: boolean;
  replies: ForumComment[];
  tags: string[];
}

export interface RegisteredUser {
  id: string;
  name: string;
  lastName?: string;
  email: string;
  password?: string; // Optional for OAuth users
  picture?: string;
  provider: 'local' | 'google';
  registeredAt: string;
  role?: 'alumno' | 'mentor';
}
