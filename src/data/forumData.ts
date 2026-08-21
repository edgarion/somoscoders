import { ForumThread } from '../types';

export const initialForumThreads: ForumThread[] = [
  {
    id: 'thread-1',
    title: '¿Cómo empezar con Vibe Coding si no tengo experiencia programando?',
    category: 'vibe-coding',
    authorName: 'Marcos López',
    authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150',
    content: 'Hola a todos. Soy super nuevo en esto y me llama mucho la atención el concepto de "Vibe Coding". ¿Creen que deba estudiar JavaScript desde cero a fondo primero, o puedo empezar a guiar a la IA con lenguajes conversacionales de inmediato mientras aprendo? ¡Gracias por la ayuda!',
    createdAt: 'hace 2 horas',
    likes: 12,
    isLikedByUser: false,
    tags: ['Principiante', 'Vibe-coding', 'IA'],
    replies: [
      {
        id: 'reply-1-1',
        authorName: 'Carlos Ruiz',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
        content: '¡Hola Marcos! Qué gran pregunta. La belleza del Vibe Coding es que puedes empezar DE INMEDIATO. Guía al modelo de IA con intenciones claras y lenguaje sencillo. No obstante, te sugiero que a la par tomes cursos básicos de HTML y JavaScript. Conocer la base te ayudará a ser un mejor "director de orquesta" de tu código, sabiendo identificar de inmediato cuando el modelo comete algún desliz.',
        createdAt: 'hace 1 hora',
        likes: 5
      },
      {
        id: 'reply-1-2',
        authorName: 'Ana Belén',
        authorAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150',
        content: 'Totalmente de acuerdo con Carlos. Yo empecé sin saber nada y ahora he creado 3 pequeñas apps en un mes. Mi sugerencia es: ¡no tengas miedo de romper el código! El aprendizaje interactivo es el mejor del mundo.',
        createdAt: 'hace 45 min',
        likes: 3
      }
    ]
  },
  {
    id: 'thread-2',
    title: 'Guía práctica para pasar el test WCAG 2.1 AA en proyectos web',
    category: 'ux',
    authorName: 'Elena Gómez',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    content: 'Comunidad, les comparto mi lista de verificación rápida obligatoria para asegurar que los diseños de interfaces cumplan con el estándar WCAG AA:\n\n1. **Contraste de color:** Mínimo 4.5:1 para texto normal y 3:1 para texto grande.\n2. **Estados en foco:** Nunca oculten el outline azul o de alta visibilidad cuando se navega con el teclado.\n3. **Etiquetas de inputs:** Todo input de formulario debe tener una etiqueta descriptiva visible (el placeholder NO sustituye a la etiqueta).\n4. **Navegación secuencial:** Asegurarse de que el orden visual del contenido coincida con el orden de tabulación del teclado.\n\nEspero que les sirva en sus proyectos interactivos de SomosCoders.',
    createdAt: 'hace 1 día',
    likes: 24,
    isLikedByUser: false,
    tags: ['A11y', 'Accesibilidad', 'Diseño Inclusivo'],
    replies: [
      {
        id: 'reply-2-1',
        authorName: 'Mateo S.',
        authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
        content: '¡Esta lista es oro puro, Elena! Con frecuencia paso por alto el contraste de los textos secundarios. ¿Qué herramienta gratuita nos recomiendas para medir los ratios de contraste automáticamente?',
        createdAt: 'hace 18 horas',
        likes: 4
      },
      {
        id: 'reply-2-2',
        authorName: 'Elena Gómez',
        authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
        content: '¡Hola Mateo! Te sugiero "Contrast Checker" de WebAIM (online) o bien la extensión "axe DevTools" para el navegador. Ambos son maravillosos y sumamente precisos.',
        createdAt: 'hace 12 horas',
        likes: 8
      }
    ]
  },
  {
    id: 'thread-3',
    title: '¿Por qué Cypress es mejor que Selenium para pruebas E2E modernas?',
    category: 'testing',
    authorName: 'Laura Castro',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    content: 'He estado usando Selenium durante un par de años y acabo de probar Cypress en el bootcamp de QA testing. Me parece increíblemente más rápido porque no utiliza webdrivers intermedios, sino que corre directamente dentro de la máquina de renderizado de Chrome. ¿Cuáles han sido sus experiencias con tiempos de espera asíncronos y estabilidad?',
    createdAt: 'hace 3 días',
    likes: 18,
    isLikedByUser: false,
    tags: ['QA', 'Cypress', 'Selenium', 'Automation'],
    replies: [
      {
        id: 'reply-3-1',
        authorName: 'Manuel Soria',
        authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
        content: 'Hola Laura. El gran fuerte de Cypress es su característica de "aserciones inteligentes" con reintentos automáticos. Elimina casi todo el código molesto de Thread.sleep() o esperas implícitas que hacían que las pruebas de Selenium fueran tan frágiles. ¡Es un antes y un después!',
        createdAt: 'hace 2 días',
        likes: 6
      }
    ]
  }
];
