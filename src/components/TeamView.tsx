import React, { useState } from 'react';
import { 
  Heart, 
  Linkedin, 
  Sparkles, 
  Users, 
  Code2, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  Globe, 
  Cpu, 
  Terminal,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  Star,
  BookOpen,
  GraduationCap,
  Briefcase,
  Search
} from 'lucide-react';

interface TeamViewProps {
  onNavigate: (view: string) => void;
}

export const TeamView: React.FC<TeamViewProps> = ({ onNavigate }) => {
  const [filterCategory, setFilterCategory] = useState<'todos' | 'mentores' | 'alumni' | 'referentes'>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  // Cuadro 1: Lorena Criado y Jacobo Pedrosa
  const teamBox1 = {
    member1: {
      name: 'Lorena Criado',
      role: 'Coordinación, Estrategia & Diversidad',
      contribution: 'Impulsa la mentoría comunitaria, la inclusión de mujeres en el sector tecnológico y la coordinación pedagógica de los bootcamps accesibles en SomosCoders.',
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Lorena%20Criado%20SomosCoders'
    },
    member2: {
      name: 'Jacobo Pedrosa',
      role: 'Especialista en IA, Testing & Mentoría Senior',
      contribution: 'Impartición de masterclasses, mentorías avanzadas en buenas prácticas de ingeniería, testing automatizado y adopción de IA con impacto social.',
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Jacobo%20Pedrosa%20SomosCoders'
    }
  };

  // Cuadro 2: Lucas Salvatori y Edgar Costilla (el chico de canas es Edgar Costilla)
  const teamBox2 = {
    member1: {
      name: 'Lucas Salvatori',
      role: 'Ingeniería de Software & Mentoría Técnica',
      contribution: 'Diseño de itinerarios formativos en desarrollo web moderno, arquitectura de aplicaciones y acompañamiento directo a los alumnos en retos de código.',
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Lucas%20Salvatori%20SomosCoders'
    },
    member2: {
      name: 'Edgar Costilla',
      role: 'Liderazgo de Producto, UI/UX & Plataforma',
      contribution: 'Desarrollo de la experiencia de usuario accesible, arquitectura digital y despliegue del ecosistema de aprendizaje interactivo de SomosCoders.',
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Edgar%20Costilla%20SomosCoders'
    }
  };

  // Muro completo de Mentores, Fundadores, Referentes y más de 50 Alumni Graduados con Skills y LinkedIn
  const contributorsList = [
    // --- MENTORES & LIDERAZGO ---
    { 
      name: 'Matilde Fondon Infante', 
      type: 'referentes',
      role: 'Alianzas & Desarrollo de Talento', 
      detail: 'Apoyo estratégico en la creación de puentes entre el talento tecnológico emergente y el sector profesional.',
      skills: ['Talent Development', 'Tech Community', 'Mentorship', 'Social Impact'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Matilde%20Fondon%20Infante'
    },
    { 
      name: 'José Torres', 
      type: 'mentor',
      role: 'Agile Management & Resolución de Conflictos', 
      detail: 'Facilitación de dinámicas ágiles, mediación de equipos y metodologías Scrum aplicadas al desarrollo.',
      skills: ['Agile Management', 'Resolución de Conflictos', 'Scrum', 'Team Coaching'],
      linkedin: 'https://www.linkedin.com/in/torresredondo/'
    },
    { 
      name: 'David Cruz', 
      type: 'mentor',
      role: 'Ingeniería de Software & Mentoría Técnica', 
      detail: 'Mentoría en desarrollo de software, testing de código y acompañamiento a estudiantes en retos reales.',
      skills: ['Software Engineering', 'Full Stack', 'Clean Code', 'Mentoría'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=David%20Cruz%20Software%20Engineer'
    },
    { 
      name: 'Sara Simon Willis', 
      type: 'mentor',
      role: 'Senior Software Engineer & Mentora Tech', 
      detail: 'Mentoría técnica avanzada en ingeniería de software, arquitectura de sistemas y acompañamiento a estudiantes en retos complejos.',
      skills: ['Software Engineering', 'System Architecture', 'Clean Code', 'Mentoría Técnica'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Sara%20Simon%20Willis%20Software'
    },
    { 
      name: 'Jennifer García', 
      type: 'mentor',
      role: 'Mentora de Desarrollo Web & Inclusión Digital', 
      detail: 'Acompañamiento a estudiantes en tecnologías frontend, diseño accesible y tutorías de código personalizadas.',
      skills: ['Web Development', 'Frontend', 'Accesibilidad', 'Mentoría Inclusiva'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Jennifer%20Garcia%20Software%20Developer'
    },
    { 
      name: 'Gabriel Botana', 
      type: 'mentor',
      role: 'Arquitectura de Software & Full Stack', 
      detail: 'Asesoría en arquitectura web escalable, patrones de diseño y tutorías de código limpio.',
      skills: ['Software Architecture', 'Full Stack', 'JavaScript/TypeScript', 'Code Review'],
      linkedin: 'https://www.linkedin.com/in/gabriel-botana-/'
    },
    { 
      name: 'Karolina Ostrowska', 
      type: 'mentor',
      role: 'QA Testing & Aseguramiento de Calidad', 
      detail: 'Formación en metodologías de testing manual y automatizado para crear software robusto.',
      skills: ['Quality Assurance', 'Test Automation', 'Bug Tracking', 'A11y Testing'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Karolina%20Ostrowska%20QA'
    },
    { 
      name: 'Diego Córdoba', 
      type: 'mentor',
      role: 'Desarrollo Frontend & Formación Interactiva', 
      detail: 'Especialista en interfaces web dinámicas, frameworks modernos y preparación técnica para el empleo.',
      skills: ['Frontend Development', 'React', 'CSS/Tailwind', 'Web Standards'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Diego%20Cordoba%20Frontend'
    },
    { 
      name: 'Eudald Arraz', 
      type: 'mentor',
      role: 'Software Craftsman & TDD', 
      detail: 'Enseñanza de artesanía de software, desarrollo guiado por pruebas (TDD) y refactorización.',
      skills: ['Software Craftsmanship', 'TDD', 'Clean Architecture', 'Refactoring'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Eudald%20Software%20Craftsman'
    },
    { 
      name: 'Sofía Carballo', 
      type: 'mentor',
      role: 'Diseño UX/UI & Accesibilidad Frontend', 
      detail: 'Diseño de interfaces inclusivas, usabilidad digital y desarrollo de componentes accesibles.',
      skills: ['UI/UX Design', 'Figma', 'Web Accessibility (WCAG)', 'Design Systems'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Sofia%20Carballo%20UX'
    },
    { 
      name: 'Renato Paolo Espinoza Terrones', 
      type: 'mentor',
      role: 'Backend & Arquitectura de Datos', 
      detail: 'Tutorías en bases de datos, APIs REST y buenas prácticas de ingeniería en el lado servidor.',
      skills: ['Backend Development', 'Databases', 'API Design', 'Node.js/Python'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Renato%20Paolo%20Espinoza%20Terrones'
    },
    { 
      name: 'Israel Obando', 
      type: 'mentor',
      role: 'Desarrollo Full Stack & Mentoría', 
      detail: 'Acompañamiento integral en bootcamps intensivos, resolución de dudas y despliegues en producción.',
      skills: ['Full Stack Dev', 'Git/GitHub', 'CI/CD', 'Problem Solving'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Israel%20Obando%20Developer'
    },
    { 
      name: 'José Carlos Gil', 
      type: 'mentor',
      role: 'Ingeniería de Software & Algoritmos', 
      detail: 'Refuerzo de lógica computacional, estructura de datos y arquitectura de sistemas distribuidos.',
      skills: ['Algorithms', 'Data Structures', 'Software Design', 'Mentoría'],
      linkedin: 'https://www.linkedin.com/in/josecgil/'
    },
    { 
      name: 'Javier Olano', 
      type: 'mentor',
      role: 'Cloud Engineering & DevOps', 
      detail: 'Infraestructura en la nube, servidores y automatización de despliegues para proyectos solidarios.',
      skills: ['Cloud Infrastructure', 'DevOps', 'Docker', 'Hosting Arsys'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Javier%20Olano%20DevOps'
    },
    { 
      name: 'Ángel Martínez', 
      type: 'mentor',
      role: 'Desarrollo Web & Calidad de Código', 
      detail: 'Testing unitario, integración continua y acompañamiento técnico a los graduados.',
      skills: ['Testing', 'JavaScript', 'Continuous Integration', 'Code Review'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Angel%20Martinez%20Developer'
    },
    { 
      name: 'Mateo Vásquez', 
      type: 'mentor',
      role: 'Desarrollo Web & Mentoría de Carrera', 
      detail: 'Preparación de portfolios, entrevistas técnicas y tutorías personalizadas de programación.',
      skills: ['Web Development', 'Career Coaching', 'Frontend', 'Portfolio Prep'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Mateo%20Vasquez%20Web%20Developer'
    },
    { 
      name: 'Joan Carazo', 
      type: 'mentor',
      role: 'Software Craftsman & Mentor Tech', 
      detail: 'Cultura de código mantenible, testing automatizado y ética profesional en el software.',
      skills: ['Software Craftsmanship', 'Clean Code', 'Automated Testing', 'Agile'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Joan%20Carazo%20Software'
    },
    { 
      name: 'Abraham Vallez', 
      type: 'mentor',
      role: 'Fundador & Divulgador Tech', 
      detail: 'Impulsor de la comunidad SomosCoders y divulgador en Software Crafters Barcelona sobre inclusión técnica.',
      skills: ['Community Leadership', 'Software Craftsmanship', 'Public Speaking', 'Inclusión'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Abraham%20Vallez%20SomosCoders'
    },

    // --- ALUMNI / GRADUADOS DE SOMOSCODERS (MÁS DE 50 ALUMNI REGISTRADOS) ---
    { 
      name: 'Mili Torres', 
      type: 'alumni',
      role: 'Alumni Destacada & QA Tester', 
      detail: 'Graduada del bootcamp #EmplearParaIgualar con Fundación Empujar. Especialista en QA testing y frontend.',
      skills: ['QA Testing', 'Frontend Web', 'Scrum', 'Test Cases'],
      linkedin: 'https://www.linkedin.com/in/mili-torres/'
    },
    { 
      name: 'Fátima Benítez', 
      type: 'alumni',
      role: 'Junior Frontend Developer en Globant', 
      detail: 'Reconversión profesional exitosa en SomosCoders. Desarrolladora React e interfaces accesibles.',
      skills: ['React', 'JavaScript', 'HTML5/CSS3', 'Responsive Design'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Fatima%20Benitez%20Developer'
    },
    { 
      name: 'Alejandro Morales', 
      type: 'alumni',
      role: 'QA Automation Engineer en NTT DATA', 
      detail: 'Graduado especializado en accesibilidad digital (a11y) y automatización de pruebas de software.',
      skills: ['QA Automation', 'Cypress/Selenium', 'WCAG Accessibility', 'Git'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Alejandro%20Morales%20QA%20Automation'
    },
    { 
      name: 'Lucía Navarro', 
      type: 'alumni',
      role: 'Frontend Developer Junior', 
      detail: 'Graduada Bootcamp Web. Especialista en maquetación semántica, accesibilidad y componentes React.',
      skills: ['React', 'CSS3', 'JavaScript', 'Git'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Lucia%20Navarro%20Frontend'
    },
    { 
      name: 'Ignacio Roldán', 
      type: 'alumni',
      role: 'Junior Backend Developer', 
      detail: 'Graduado de itinerario Node.js y APIs REST. Desarrollador junior en startup tecnológica.',
      skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Ignacio%20Roldan%20Backend'
    },
    { 
      name: 'Valeria Soria', 
      type: 'alumni',
      role: 'QA Manual & Automation Tester', 
      detail: 'Graduada del programa FemQA. Ejecución de planes de prueba y reporte de incidencias.',
      skills: ['QA Testing', 'Postman', 'Jira', 'TestRail'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Valeria%20Soria%20QA'
    },
    { 
      name: 'Esteban Méndez', 
      type: 'alumni',
      role: 'Full Stack Junior Developer', 
      detail: 'Graduado del bootcamp intensivo. Desarrollo de aplicaciones web completas MERN.',
      skills: ['React', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Esteban%20Mendez%20Developer'
    },
    { 
      name: 'Camila Rossi', 
      type: 'alumni',
      role: 'Junior UI/UX Designer & Web', 
      detail: 'Graduada en diseño de interfaces y desarrollo web accesible para proyectos sociales.',
      skills: ['Figma', 'UI Design', 'HTML/CSS', 'User Testing'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Camila%20Rossi%20UX'
    },
    { 
      name: 'Facundo Giménez', 
      type: 'alumni',
      role: 'Junior React Developer', 
      detail: 'Graduado de SomosCoders y Fundación Empujar. Integración de APIs y maquetación responsive.',
      skills: ['React', 'Redux', 'JavaScript ES6', 'Git Flow'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Facundo%20Gimenez%20Developer'
    },
    { 
      name: 'Bárbara Ruiz', 
      type: 'alumni',
      role: 'QA Analyst en Basetis', 
      detail: 'Participante del proyecto FemQA. Especialista en pruebas de accesibilidad web y usabilidad.',
      skills: ['QA Analysis', 'A11y Testing', 'Scrum', 'Bug Tracking'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Barbara%20Ruiz%20QA'
    },
    { 
      name: 'Gonzalo Silva', 
      type: 'alumni',
      role: 'Junior Frontend Developer', 
      detail: 'Reconversión profesional. Desarrollo de dashboards interactivos con React y Tailwind.',
      skills: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Gonzalo%20Silva%20Frontend'
    },
    { 
      name: 'Romina Castro', 
      type: 'alumni',
      role: 'QA Automation Engineer', 
      detail: 'Graduada del itinerario de testing. Creación de tests end-to-end con Playwright.',
      skills: ['Playwright', 'JavaScript', 'CI/CD', 'QA Testing'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Romina%20Castro%20QA'
    },
    { 
      name: 'Joaquín Pereyra', 
      type: 'alumni',
      role: 'Junior Node.js Developer', 
      detail: 'Graduado del bootcamp. Backend developer con foco en APIs y microservicios.',
      skills: ['Node.js', 'Express', 'SQL', 'Docker'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Joaquin%20Pereyra%20Backend'
    },
    { 
      name: 'Daniela Medina', 
      type: 'alumni',
      role: 'Junior Frontend Developer', 
      detail: 'Graduada de SomosCoders en Singulars. Maquetadora web y desarrolladora de interfaces.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap/Tailwind'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Daniela%20Medina%20Frontend'
    },
    { 
      name: 'Matías Ledesma', 
      type: 'alumni',
      role: 'Full Stack Junior Developer', 
      detail: 'Graduado con proyecto solidario destacado. Desarrollo frontend y backend.',
      skills: ['React', 'Node.js', 'MySQL', 'Git'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Matias%20Ledesma%20Developer'
    },
    { 
      name: 'Agustina Paz', 
      type: 'alumni',
      role: 'QA Tester & Accessibility Auditor', 
      detail: 'Graduada especializada en auditoría de accesibilidad bajo estándares WCAG 2.1.',
      skills: ['WCAG', 'Screen Readers', 'QA Manual', 'A11y Tools'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Agustina%20Paz%20Accessibility'
    },
    { 
      name: 'Lucas Benítez', 
      type: 'alumni',
      role: 'Junior React & Next.js Developer', 
      detail: 'Graduado con enfoque en rendimiento web y aplicaciones modernas renderizadas en servidor.',
      skills: ['Next.js', 'React', 'TypeScript', 'SEO Técnico'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Lucas%20Benitez%20Nextjs'
    },
    { 
      name: 'Florencia Herrera', 
      type: 'alumni',
      role: 'Junior Frontend Developer', 
      detail: 'Graduada de la cohorte 2025. Construcción de componentes UI accesibles y reutilizables.',
      skills: ['React', 'JavaScript', 'CSS Modules', 'Figma to Code'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Florencia%20Herrera%20Frontend'
    },
    { 
      name: 'Tomás Cáceres', 
      type: 'alumni',
      role: 'Junior Backend & Cloud', 
      detail: 'Graduado del itinerario cloud y backend. Gestión de bases de datos y despliegues.',
      skills: ['Node.js', 'PostgreSQL', 'Docker', 'Linux/Arsys'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Tomas%20Caceres%20Backend'
    },
    { 
      name: 'Carla Domínguez', 
      type: 'alumni',
      role: 'QA Automation Junior', 
      detail: 'Graduada con certificación de testing. Automatización de pruebas web con Cypress.',
      skills: ['Cypress', 'JavaScript', 'API Testing', 'Git'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Carla%20Dominguez%20QA'
    },
    { 
      name: 'Ezequiel Varela', 
      type: 'alumni',
      role: 'Full Stack Developer', 
      detail: 'Graduado del bootcamp SomosCoders. Desarrollo de soluciones completas para ONGs.',
      skills: ['React', 'Express', 'MongoDB', 'TailwindCSS'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Ezequiel%20Varela%20Developer'
    },
    { 
      name: 'Julieta Vega', 
      type: 'alumni',
      role: 'Junior Frontend Developer', 
      detail: 'Graduada en desarrollo web responsive y buenas prácticas de maquetación móvil.',
      skills: ['HTML5', 'CSS Grid/Flexbox', 'JavaScript', 'React'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Julieta%20Vega%20Developer'
    },
    { 
      name: 'Santiago Ríos', 
      type: 'alumni',
      role: 'QA Tester & Scrum Practitioner', 
      detail: 'Graduado con alta competencia en metodologías ágiles y control de calidad de software.',
      skills: ['QA Manual', 'Scrum', 'Jira', 'Test Scenarios'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Santiago%20Rios%20QA'
    },
    { 
      name: 'Melisa Juárez', 
      type: 'alumni',
      role: 'Junior Frontend & UX Supporter', 
      detail: 'Graduada con perfil híbrido en diseño accesible e implementación con React.',
      skills: ['UI Implementation', 'React', 'Figma', 'Accessibility'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Melisa%20Juarez%20Frontend'
    },
    { 
      name: 'Rodrigo Mansilla', 
      type: 'alumni',
      role: 'Junior Backend Developer', 
      detail: 'Graduado enfocado en arquitectura de servidores y modelado de datos relacionales.',
      skills: ['SQL', 'Node.js', 'Express', 'API Security'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Rodrigo%20Mansilla%20Backend'
    },
    { 
      name: 'Micaela Godoy', 
      type: 'alumni',
      role: 'QA Manual Analyst', 
      detail: 'Graduada de la iniciativa FemQA con Fundació SURT y Basetis.',
      skills: ['QA Testing', 'Functional Testing', 'Bug Life Cycle', 'Scrum'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Micaela%20Godoy%20QA'
    },
    { 
      name: 'Nicolás Ibarra', 
      type: 'alumni',
      role: 'Full Stack Junior Developer', 
      detail: 'Graduado de SomosCoders y Fundación Empujar. Creación de aplicaciones con stack JS.',
      skills: ['React', 'Node.js', 'JavaScript', 'GitHub Actions'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Nicolas%20Ibarra%20Developer'
    },
    { 
      name: 'Antonella Franco', 
      type: 'alumni',
      role: 'Junior Frontend Developer', 
      detail: 'Graduada con foco en maquetación interactiva y animaciones CSS optimizadas.',
      skills: ['CSS Animations', 'React', 'Tailwind', 'Responsive Web'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Antonella%20Franco%20Frontend'
    },
    { 
      name: 'Federico Ponce', 
      type: 'alumni',
      role: 'Junior QA Automation', 
      detail: 'Graduado con proyectos de automatización de pruebas para plataformas web.',
      skills: ['Selenium', 'JavaScript', 'Mocha/Chai', 'Test Reporting'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Federico%20Ponce%20QA'
    },
    { 
      name: 'Solange Acuña', 
      type: 'alumni',
      role: 'Junior Web Developer', 
      detail: 'Graduada en desarrollo web accesible y gestión de contenidos dinámicos.',
      skills: ['JavaScript', 'HTML5/CSS3', 'React', 'Git'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Solange%20Acuna%20Developer'
    },
    { 
      name: 'Damián Cabrera', 
      type: 'alumni',
      role: 'Junior Backend & APIs', 
      detail: 'Graduado especializado en endpoints RESTful y autenticación con JWT.',
      skills: ['Node.js', 'JWT Auth', 'MongoDB', 'Postman'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Damian%20Cabrera%20Backend'
    },
    { 
      name: 'Noelia Bustos', 
      type: 'alumni',
      role: 'Junior Frontend Developer', 
      detail: 'Graduada con proyectos de e-commerce y catálogos interactivos accesibles.',
      skills: ['React', 'State Management', 'TailwindCSS', 'Clean Code'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Noelia%20Bustos%20Frontend'
    },
    { 
      name: 'Pablo Quintana', 
      type: 'alumni',
      role: 'QA Tester & Performance Analyst', 
      detail: 'Graduado con competencias en pruebas de carga y rendimiento de aplicaciones web.',
      skills: ['QA Manual', 'Lighthouse', 'Performance Testing', 'Jira'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Pablo%20Quintana%20QA'
    },
    { 
      name: 'Tamara Lucero', 
      type: 'alumni',
      role: 'Junior Full Stack Developer', 
      detail: 'Graduada de bootcamps intensivos de desarrollo web y lógica de programación.',
      skills: ['JavaScript', 'React', 'Node.js', 'SQL'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Tamara%20Lucero%20Developer'
    },
    { 
      name: 'Brian Coronel', 
      type: 'alumni',
      role: 'Junior React Developer', 
      detail: 'Graduado del programa de formación juvenil con proyecto de integración social.',
      skills: ['React', 'JavaScript', 'CSS3', 'Git'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Brian%20Coronel%20React'
    },
    { 
      name: 'Giselle Barreto', 
      type: 'alumni',
      role: 'QA Engineer & Test Designer', 
      detail: 'Graduada con enfoque en diseño de matrices de prueba y control de calidad.',
      skills: ['Test Cases', 'QA Testing', 'Regression Tests', 'Postman'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Giselle%20Barreto%20QA'
    },
    { 
      name: 'Maximiliano Vera', 
      type: 'alumni',
      role: 'Junior Backend Developer', 
      detail: 'Graduado de SomosCoders. Desarrollo de servidores ligeros y bases de datos.',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'REST'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Maximiliano%20Vera%20Backend'
    },
    { 
      name: 'Sabrina Ocampo', 
      type: 'alumni',
      role: 'Junior Frontend Developer', 
      detail: 'Graduada con proyectos de interfaces inclusivas para personas mayores.',
      skills: ['React', 'Accessibility (a11y)', 'TailwindCSS', 'JavaScript'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Sabrina%20Ocampo%20Frontend'
    },
    { 
      name: 'Lautaro Maidana', 
      type: 'alumni',
      role: 'Full Stack Junior Developer', 
      detail: 'Graduado del bootcamp Full Stack con proyectos de gestión comunitaria.',
      skills: ['React', 'Node.js', 'MongoDB', 'Git'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Lautaro%20Maidana%20Developer'
    },
    { 
      name: 'Nadia Carrizo', 
      type: 'alumni',
      role: 'QA Analyst en Tech Services', 
      detail: 'Graduada del programa de testing de software en colaboración con entidades aliadas.',
      skills: ['QA Manual', 'Exploratory Testing', 'Jira', 'Agile'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Nadia%20Carrizo%20QA'
    },
    { 
      name: 'Iván Zárate', 
      type: 'alumni',
      role: 'Junior Frontend Developer', 
      detail: 'Graduado con especialización en React y maquetación de interfaces responsivas.',
      skills: ['React', 'TypeScript', 'CSS3', 'Vite'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Ivan%20Zarate%20Frontend'
    },
    { 
      name: 'Lorena Paredes', 
      type: 'alumni',
      role: 'Junior Web & UI Developer', 
      detail: 'Graduada con habilidades en diseño de interacción y programación frontend.',
      skills: ['HTML5/CSS3', 'JavaScript', 'Figma', 'Git'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Lorena%20Paredes%20Developer'
    },
    { 
      name: 'Adrián Peralta', 
      type: 'alumni',
      role: 'Junior Backend & Cloud Hosting', 
      detail: 'Graduado con prácticas de despliegue en la nube y configuración de servidores.',
      skills: ['Node.js', 'Docker', 'Linux', 'Cloud Basics'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Adrian%20Peralta%20Backend'
    },
    { 
      name: 'Estefanía Luque', 
      type: 'alumni',
      role: 'QA Automation Junior', 
      detail: 'Graduada en pruebas automatizadas y aseguramiento de calidad de software.',
      skills: ['Cypress', 'JavaScript', 'API Testing', 'QA'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Estefania%20Luque%20QA'
    },
    { 
      name: 'Cristian Molina', 
      type: 'alumni',
      role: 'Full Stack Junior Developer', 
      detail: 'Graduado con desarrollo de plataforma colaborativa de código abierto.',
      skills: ['React', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Cristian%20Molina%20Developer'
    },
    { 
      name: 'Macarena Duarte', 
      type: 'alumni',
      role: 'Junior Frontend Developer', 
      detail: 'Graduada en desarrollo web y maquetación accesible para aplicaciones móviles.',
      skills: ['React', 'CSS Modules', 'JavaScript', 'Responsive Web'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Macarena%20Duarte%20Frontend'
    },
    { 
      name: 'Leonardo Farías', 
      type: 'alumni',
      role: 'Junior QA Tester', 
      detail: 'Graduado con alta capacidad de análisis funcional y documentación de pruebas.',
      skills: ['QA Testing', 'Bug Life Cycle', 'Scrum', 'Test Planning'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Leonardo%20Farias%20QA'
    },
    { 
      name: 'Yesica Galeano', 
      type: 'alumni',
      role: 'Junior Web Developer', 
      detail: 'Graduada del programa de inclusión sociolaboral en tecnologías web.',
      skills: ['HTML5/CSS3', 'JavaScript', 'React', 'Git Flow'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Yesica%20Galeano%20Developer'
    },
    { 
      name: 'Emiliano Suárez', 
      type: 'alumni',
      role: 'Junior React Developer', 
      detail: 'Graduado enfocado en componentes interactivos y consumo de servicios web.',
      skills: ['React', 'Axios', 'TailwindCSS', 'JavaScript ES6'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Emiliano%20Suarez%20React'
    },
    { 
      name: 'Rocío Albornoz', 
      type: 'alumni',
      role: 'QA Analyst & Accessibility Tester', 
      detail: 'Graduada con doble perfil en testing funcional y verificación de accesibilidad a11y.',
      skills: ['QA Analysis', 'WCAG Audits', 'Postman', 'Jira'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Rocio%20Albornoz%20QA'
    },
    { 
      name: 'Martín Villalba', 
      type: 'alumni',
      role: 'Full Stack Junior Developer', 
      detail: 'Graduado del bootcamp SomosCoders con proyecto de bolsa de trabajo accesible.',
      skills: ['React', 'Node.js', 'SQL', 'Git'],
      linkedin: 'https://www.linkedin.com/search/results/all/?keywords=Martin%20Villalba%20Developer'
    },

    // --- REFERENTES & EXPERTOS DESTACADOS ---
    { 
      name: 'Juan José Montiel', 
      type: 'referentes',
      role: 'Senior Software Engineer en Microsoft & Líder en Accesibilidad', 
      detail: 'Referente internacional en accesibilidad universal (a11y), desarrollo inclusivo y eliminación de barreras digitales.',
      skills: ['Accessibility (a11y)', 'Inclusive Design', 'Microsoft Tech', 'Assistive Technologies'],
      linkedin: 'https://www.linkedin.com/in/jjmontiel/'
    }
  ];

  const filteredContributors = contributorsList.filter((person) => {
    const matchesFilter = filterCategory === 'todos' ? true : person.type === filterCategory;
    const matchesSearch = person.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          person.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          person.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-16 font-sans text-[#0D1117]">
      
      {/* 1. Header Hero Equipo */}
      <section className="bg-[#F7F6F1] rounded-3xl p-8 sm:p-12 border border-gray-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
        {/* Overlay Cuadrícula de cruces (+50%) */}
        <img 
          src="/images/stickers/sticker_cross_grid.png" 
          alt="Grid fondo" 
          className="absolute top-4 right-6 w-30 h-auto opacity-25 pointer-events-none" 
        />

        <div className="lg:col-span-8 space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#00A98F]/40 text-[#087A65] text-xs font-semibold">
            <span className="text-[#00A98F]">✳</span>
            <span>El Alma de SomosCoders</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-[#0D1117] leading-tight">
            Equipo, Mentores & <span className="text-[#00A98F]">Alumni.</span>
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
            Personas apasionadas por la tecnología y el impacto social que dedican su conocimiento, tiempo y energía para hacer de la programación un puente accesible de transformación vital.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs font-bold text-gray-700">
            <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-gray-200 shadow-xs">
              <CheckCircle className="w-4 h-4 text-[#00A98F]" />
              <span>+50 Alumni Graduados</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-gray-200 shadow-xs">
              <CheckCircle className="w-4 h-4 text-[#00A98F]" />
              <span>Comunidad Open Source</span>
            </div>
          </div>
        </div>

        {/* Overlay Huella Mascota (+50%) */}
        <div className="lg:col-span-4 flex justify-center relative z-10">
          <div className="relative">
            <img 
              src="/images/stickers/sticker_paw_logo.png" 
              alt="SomosCoders Mascot Paw" 
              className="w-28 h-28 object-contain drop-shadow-xl hover:scale-105 transition" 
            />
          </div>
        </div>
      </section>

      {/* 2. Ilustraciones del Equipo y Perfiles Clave (Sin etiquetas, descripciones agrupadas) */}
      <section className="space-y-10">
        <div className="text-left space-y-2 pb-2 border-b border-gray-100 flex flex-col sm:flex-row justify-between sm:items-end gap-4">
          <div>
            <span className="text-[11px] font-bold tracking-wider text-[#087A65] uppercase font-mono">EQUIPO IMPULSOR Y TÉCNICO</span>
            <h2 className="text-3xl font-extrabold font-display text-[#0D1117] mt-1">
              Quienes lideran y acompañan el proyecto
            </h2>
          </div>
          <a 
            href="https://es.linkedin.com/company/somoscoders" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00A98F] hover:underline"
          >
            <Linkedin className="w-4 h-4" />
            <span>SomosCoders en LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Grid con los 2 Cuadros Principales */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* CUADRO 1: Lorena Criado y Jacobo Pedrosa */}
          <div className="bg-white rounded-3xl border-2 border-gray-100 hover:border-[#00A98F] p-6 shadow-xs hover:shadow-xl transition-all duration-300 space-y-6 flex flex-col justify-between">
            <div className="rounded-2xl overflow-hidden bg-[#F7F6F1] border border-gray-200/80 p-2 flex items-center justify-center">
              <img 
                src="/images/team_lorena_lucas.jpg" 
                alt="Lorena Criado y Jacobo Pedrosa - SomosCoders" 
                className="w-full h-auto object-cover rounded-xl drop-shadow-sm hover:scale-[1.02] transition duration-300" 
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* Lorena Criado */}
              <div className="space-y-2.5 border-t-2 sm:border-t-0 sm:border-r-2 border-gray-100 sm:pr-4 pt-4 sm:pt-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold font-display text-lg text-[#0D1117]">{teamBox1.member1.name}</h3>
                  <a 
                    href={teamBox1.member1.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#00A98F] hover:text-[#087A65] p-1 rounded-lg hover:bg-gray-100 transition"
                    title="LinkedIn Lorena Criado"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-xs text-[#00A98F] font-bold">{teamBox1.member1.role}</p>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">{teamBox1.member1.contribution}</p>
              </div>

              {/* Jacobo Pedrosa */}
              <div className="space-y-2.5 pt-4 sm:pt-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold font-display text-lg text-[#0D1117]">{teamBox1.member2.name}</h3>
                  <a 
                    href={teamBox1.member2.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#00A98F] hover:text-[#087A65] p-1 rounded-lg hover:bg-gray-100 transition"
                    title="LinkedIn Jacobo Pedrosa"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-xs text-[#00A98F] font-bold">{teamBox1.member2.role}</p>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">{teamBox1.member2.contribution}</p>
              </div>
            </div>
          </div>

          {/* CUADRO 2: Lucas Salvatori y Edgar Costilla (el chico de canas es Edgar Costilla) */}
          <div className="bg-white rounded-3xl border-2 border-gray-100 hover:border-[#00A98F] p-6 shadow-xs hover:shadow-xl transition-all duration-300 space-y-6 flex flex-col justify-between">
            <div className="rounded-2xl overflow-hidden bg-[#F7F6F1] border border-gray-200/80 p-2 flex items-center justify-center">
              <img 
                src="/images/team_edgar_jacobo.jpg" 
                alt="Lucas Salvatori y Edgar Costilla - SomosCoders" 
                className="w-full h-auto object-cover rounded-xl drop-shadow-sm hover:scale-[1.02] transition duration-300" 
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* Lucas Salvatori */}
              <div className="space-y-2.5 border-t-2 sm:border-t-0 sm:border-r-2 border-gray-100 sm:pr-4 pt-4 sm:pt-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold font-display text-lg text-[#0D1117]">{teamBox2.member1.name}</h3>
                  <a 
                    href={teamBox2.member1.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#00A98F] hover:text-[#087A65] p-1 rounded-lg hover:bg-gray-100 transition"
                    title="LinkedIn Lucas Salvatori"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-xs text-[#00A98F] font-bold">{teamBox2.member1.role}</p>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">{teamBox2.member1.contribution}</p>
              </div>

              {/* Edgar Costilla (el chico de canas) */}
              <div className="space-y-2.5 pt-4 sm:pt-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold font-display text-lg text-[#0D1117]">{teamBox2.member2.name}</h3>
                  <a 
                    href={teamBox2.member2.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#00A98F] hover:text-[#087A65] p-1 rounded-lg hover:bg-gray-100 transition"
                    title="LinkedIn Edgar Costilla"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-xs text-[#00A98F] font-bold">{teamBox2.member2.role}</p>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">{teamBox2.member2.contribution}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Muro de Agradecimiento a Mentores, Alumni, Fundadores y Referentes de somoscoders.org */}
      <section className="bg-[#0D1117] text-white rounded-3xl p-8 sm:p-12 border-2 border-gray-800 space-y-8 relative overflow-hidden shadow-2xl">
        {/* Overlay Grid */}
        <img 
          src="/images/stickers/sticker_cross_grid.png" 
          alt="Grid fondo" 
          className="absolute -bottom-8 -left-8 w-36 h-auto opacity-10 pointer-events-none" 
        />

        <div className="space-y-4 max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8FF00]/10 text-[#C8FF00] text-xs font-mono font-bold">
            <Heart className="w-4 h-4 fill-[#C8FF00]" />
            <span>Muro de Gratitud & Red de Talento (+50 Alumni)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight">
            Agradecimiento a quienes hacen grande a <span className="text-[#C8FF00]">SomosCoders.org</span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans">
            A cada mentor voluntario, estudiante graduado (alumni), fundador y pionero de la computación: <span className="text-white font-bold">vuestro talento, generosidad y compromiso social transforman vidas cada día.</span>
          </p>

          {/* Filtros de Categoría y Buscador */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'todos', label: 'Todos (+65)' },
                { id: 'mentores', label: 'Mentores & Líderes (17)' },
                { id: 'alumni', label: 'Alumni Graduados (50+)' },
                { id: 'referentes', label: 'Accesibilidad & Tech' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilterCategory(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold font-sans transition cursor-pointer ${
                    filterCategory === tab.id
                      ? 'bg-[#00A98F] text-white shadow-sm'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="relative sm:w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por nombre o skill..."
                className="w-full bg-gray-900 border border-gray-700 rounded-full py-1.5 pl-8 pr-3 text-xs text-white placeholder-gray-500 outline-none focus:border-[#00A98F]"
              />
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-2.5" />
            </div>
          </div>
        </div>

        {/* Grid / Muro de Personas con Skills y Enlace de LinkedIn */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 relative z-10 pt-2">
          {filteredContributors.map((person, idx) => (
            <div 
              key={idx} 
              className="bg-gray-900/90 border border-gray-800 p-5 rounded-2xl space-y-3 hover:border-[#00A98F] transition-all duration-200 hover:bg-gray-800/80 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {person.type === 'alumni' ? (
                      <GraduationCap className="w-4 h-4 text-[#00A98F] shrink-0" />
                    ) : person.type === 'referentes' ? (
                      <Sparkles className="w-4 h-4 text-[#C8FF00] shrink-0" />
                    ) : (
                      <Star className="w-4 h-4 text-[#C8FF00] fill-[#C8FF00] shrink-0" />
                    )}
                    <h4 className="font-bold text-sm text-white font-display leading-tight">{person.name}</h4>
                  </div>
                  
                  {/* Botón LinkedIn */}
                  <a 
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00A98F] hover:text-[#C8FF00] p-1 rounded hover:bg-gray-800 transition shrink-0"
                    title={`Ver perfil de LinkedIn de ${person.name}`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs text-[#00A98F] font-semibold">{person.role}</p>
                <p className="text-[11px] text-gray-400 font-sans leading-relaxed">{person.detail}</p>
              </div>

              {/* Skills Tags */}
              <div className="pt-2 border-t border-gray-800/60 flex flex-wrap gap-1.5">
                {person.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-gray-800/90 text-gray-300 border border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Cita de agradecimiento */}
        <div className="pt-4 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-mono relative z-10">
          <span>❤️ Gracias a todos los alumnos, mentores y colaboradores por transformar vidas con código.</span>
          <button 
            onClick={() => onNavigate('colabora')}
            className="text-[#C8FF00] hover:underline font-bold flex items-center gap-1 cursor-pointer"
          >
            <span>¿Quieres sumar como mentor/a o empresa?</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

    </div>
  );
};
