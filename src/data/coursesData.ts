import { Course } from '../types';

export const coursesData: Course[] = [
  {
    id: 'fundamentos-ux',
    title: 'Fundamentos de UX Design',
    slug: 'fundamentos-ux',
    category: 'ux',
    level: 'Principiante',
    duration: '12 horas',
    lessonsCount: 3,
    description: 'Aprende los principios básicos del diseño de experiencia de usuario y crea interfaces centradas en el usuario.',
    longDescription: 'Este curso es la puerta de entrada al fascinante mundo del diseño UX. Aprenderás las metodologías que utilizan los profesionales para entender a los usuarios, definir problemas complejos y modelar soluciones intuitivas, accesibles e inclusivas. No se requiere experiencia previa en diseño.',
    instructor: {
      name: 'Elena Gómez',
      role: 'Principal UX Designer & Accesibilidad Lead',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      bio: 'Elena tiene más de 10 años de experiencia diseñando productos digitales inclusivos. Es activista por la accesibilidad web y mentora en SomosCoders.'
    },
    syllabus: [
      'Introducción a la Experiencia de Usuario (UX) y Usabilidad',
      'El proceso de pensamiento de diseño (Design Thinking)',
      'Fundamentos de diseño inclusivo y accesibilidad (WCAG 2.1)'
    ],
    studentsCount: 342,
    rating: 4.8,
    lessons: [
      {
        id: 'ux-1',
        title: '¿Qué es realmente el UX?',
        duration: '15 min',
        exerciseType: 'quiz',
        content: `La Experiencia de Usuario (UX) representa el conjunto de factores y elementos relativos a la interacción del usuario con un entorno o dispositivo concretos, cuyo resultado es una percepción positiva o negativa de dicho servicio, producto o dispositivo.

El término fue acuñado por **Don Norman** en los años 90 mientras trabajaba en Apple. Según Norman, "el UX abarca todos los aspectos de la interacción del usuario final con la empresa, sus servicios y sus productos".

### Los tres pilares de un buen diseño UX:
1. **Utilidad:** ¿Resuelve un problema real para el usuario?
2. **Usabilidad:** ¿Es fácil, claro e intuitivo de utilizar?
3. **Deseabilidad:** ¿Es estéticamente agradable y evoca emociones positivas?

### Diferencia clave: UX vs UI:
- **UX (User Experience):** Se enfoca en resolver el problema del usuario, la arquitectura de información, las pruebas de usabilidad y los flujos lógicos.
- **UI (User Interface):** Es el aspecto visual del producto: la tipografía, los colores, los botones, los espaciados y las transiciones de pantalla.`,
        quizQuestion: {
          question: '¿Quién acuñó originalmente el término "User Experience" (UX)?',
          options: [
            'Steve Jobs',
            'Don Norman',
            'Jakob Nielsen',
            'Alan Cooper'
          ],
          correctAnswer: 1,
          explanation: 'Don Norman acuñó el término en los años 90 en Apple para referirse a la experiencia integral del usuario, que va mucho más allá de una simple pantalla.'
        }
      },
      {
        id: 'ux-2',
        title: 'El proceso de Design Thinking',
        duration: '25 min',
        exerciseType: 'quiz',
        content: `El **Design Thinking** (Pensamiento de Diseño) es un enfoque centrado en el ser humano que sirve para resolver problemas complejos de manera innovadora.

Consta tradicionalmente de 5 fases iterativas:
1. **Empatizar:** Investigar y comprender las necesidades reales de los usuarios.
2. **Definir:** Sintetizar la información para identificar el problema central y crear un "Problem Statement".
3. **Idear:** Proponer la mayor cantidad de ideas y soluciones posibles sin juzgarlas de antemano.
4. **Prototipar:** Construir versiones maquetadas rápidas y de bajo costo de las mejores soluciones.
5. **Testear/Probar:** Evaluar los prototipos con usuarios reales para recibir feedback y refinar el producto.

Recuerda que no es un proceso lineal. Por ejemplo, los resultados de la fase de testeo pueden hacerte regresar a la fase de empatía o definición.`,
        quizQuestion: {
          question: '¿Cuál es el orden secuencial de las 5 fases del Design Thinking?',
          options: [
            'Idear, Empatizar, Definir, Prototipar, Testear',
            'Empatizar, Definir, Idear, Prototipar, Testear',
            'Definir, Idear, Prototipar, Testear, Empatizar',
            'Empatizar, Idear, Definir, Testear, Prototipar'
          ],
          correctAnswer: 1,
          explanation: 'La secuencia estándar es: Empatizar (conocer), Definir (el problema), Idear (soluciones), Prototipar (crear mockups) y Testear (evaluar con usuarios).'
        }
      },
      {
        id: 'ux-3',
        title: 'Diseño Inclusivo y Accesibilidad (A11y)',
        duration: '20 min',
        exerciseType: 'quiz',
        content: `El **Diseño Inclusivo** busca crear productos que puedan ser utilizados por la mayor diversidad de personas posible, sin importar su condición física, cognitiva o socioeconómica.

La accesibilidad web (abreviada usualmente como **A11y**) se rige por las directrices **WCAG** (Web Content Accessibility Guidelines) que se basan en 4 principios fundamentales conocidos como **POUR**:

- **Perceptible:** La información debe presentarse en formas que los usuarios puedan percibir (por ejemplo, textos alternativos para imágenes para personas ciegas).
- **Operable:** Los componentes de la interfaz deben ser operables por teclado, sin requerir obligatoriamente de un mouse.
- **Comprensible:** El contenido y el funcionamiento deben ser claros, lógicos y fáciles de entender.
- **Robusto:** El código debe ser compatible con diversas tecnologías de asistencia, como lectores de pantalla.

¡Recordemos siempre que en SomosCoders la accesibilidad no es un extra, es el núcleo de lo que hacemos!`,
        quizQuestion: {
          question: '¿Qué significa el acrónimo POUR en las pautas de accesibilidad WCAG?',
          options: [
            'Principle, Option, User, Reaction',
            'Perceptible, Operable, Comprensible (Understandable), Robusto',
            'Practical, Organized, Usable, Real',
            'Portal, Outline, UX-centric, Responsive'
          ],
          correctAnswer: 1,
          explanation: 'POUR representa: Perceptible, Operando (Operable), Comprensible (Understandable) y Robusto. Son los 4 pilares de la accesibilidad digital.'
        }
      }
    ]
  },
  {
    id: 'investigacion-ux',
    title: 'Investigación UX y User Research',
    slug: 'investigacion-ux',
    category: 'ux',
    level: 'Intermedio',
    duration: '10 horas',
    lessonsCount: 2,
    description: 'Domina las técnicas de investigación con usuarios: entrevistas, tests de usabilidad y encuestas.',
    longDescription: 'Para diseñar un gran producto, necesitas entender quién lo va a usar. En este curso aprenderás enfoques metodológicos cuantitativos y cualitativos para realizar investigación de usuarios rigurosa, formular hipótesis robustas y crear mapas de empatía y Personas realistas.',
    instructor: {
      name: 'Sofía Martínez',
      role: 'User Researcher Lead',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150',
      bio: 'Sofía es experta en antropología digital. Ha dirigido investigaciones de usuarios internacionales y tiene una pasión por visibilizar a comunidades subrepresentadas.'
    },
    syllabus: [
      'Métodos cualitativos vs cuantitativos',
      'Entrevistas de usuario guiadas y mapas de empatía'
    ],
    studentsCount: 210,
    rating: 4.7,
    lessons: [
      {
        id: 'research-1',
        title: 'Métodos Cualitativos y Cuantitativos',
        duration: '20 min',
        exerciseType: 'quiz',
        content: `En la investigación de usuarios (User Research), dividimos los métodos de recolección de datos principalmente en cualitativos y cuantitativos.

### Cuantitativos (¿Cuánto? ¿Con qué frecuencia?)
- Se centran en datos analíticos, números y métricas. 
- Te ayudan a saber **qué** está ocurriendo a gran escala.
- Ejemplos: Encuestas masivas, analíticas de clics web, tests de rendimiento, pruebas A/B.

### Cualitativos (¿Por qué? ¿Cómo?)
- Se centran en entender de primera mano los pensamientos, motivaciones, frustraciones y comportamientos humanos.
- Te ayudan a saber el **porqué** detrás de los números.
- Ejemplos: Entrevistas individuales en profundidad, tests de usabilidad moderados, estudios de diario, Focus Groups.

Un buen User Researcher sabe combinar ambos mundos (Metodología mixta o Triangulación) para obtener el panorama más completo y fiable posible.`,
        quizQuestion: {
          question: 'Si queremos comprender POR QUÉ un usuario abandona el carrito de compras a mitad del proceso, ¿qué tipo de método de investigación es el más adecuado?',
          options: [
            'Un análisis cuantitativo con Google Analytics',
            'Un método cualitativo, como una entrevista o prueba de usabilidad moderada',
            'Una encuesta cuantitativa con 1000 respuestas de opción múltiple',
            'Un test A/B probando dos colores de botón'
          ],
          correctAnswer: 1,
          explanation: 'Para entender motivaciones y barreras profundas (el POR QUÉ), los métodos cualitativos como las entrevistas o pruebas de usabilidad guiadas son ideales, ya que te permiten repreguntar y observar de primera mano.'
        }
      },
      {
        id: 'research-2',
        title: 'Mapas de Empatía y User Personas',
        duration: '25 min',
        exerciseType: 'quiz',
        content: `Una vez recopilada la información, es hora de sintetizarla para que todo el equipo de desarrollo comparta la misma visión. Dos herramientas fundamentales son:

### 1. El Mapa de Empatía
Es un lienzo dividido en cuadrantes que analiza lo que el usuario:
- **Dice:** Frases o citas literales expresadas en las entrevistas.
- **Hace:** Comportamientos, acciones u hábitos de uso observados.
- **Piensa:** Creencias, valores y prejuicios que guían su opinión.
- **Siente:** Las emociones (miedo, ilusión, frustración) que experimenta.

### 2. User Persona (Arquetipo)
Es un personaje ficticio pero altamente representativo, construido a partir de datos reales de tu investigación. Debe incluir:
- Foto ficticia, nombre, ocupación y breve biografía.
- Canales de tecnología favoritos.
- **Objetivos y Metas:** Lo que busca lograr con tu producto.
- **Frustraciones y Dolores:** Los obstáculos que actualmente le impiden avanzar.`,
        quizQuestion: {
          question: '¿Qué caracteriza a un User Persona válido en el diseño UX?',
          options: [
            'Que es una persona real inventada 100% por el equipo creativo para inspirarse',
            'Que es un arquetipo basado en datos de investigación reales representativo de un segmento de usuarios',
            'Que es una lista de todos los usuarios registrados en tu base de datos',
            'Que es una celebridad que patrocina la marca'
          ],
          correctAnswer: 1,
          explanation: 'Un User Persona NO es una invención caprichosa; es un arquetipo sintético basado rigurosamente en datos reales obtenidos durante la investigación previa.'
        }
      }
    ]
  },
  {
    id: 'intro-vibe-coding',
    title: 'Introducción al Vibe Coding',
    slug: 'intro-vibe-coding',
    category: 'vibe-coding',
    level: 'Principiante',
    duration: '8 horas',
    lessonsCount: 3,
    description: 'Descubre una nueva forma de programar: código colaborativo, creativo y asistido por IA.',
    longDescription: 'El "Vibe Coding" es una tendencia transformadora en el desarrollo de software. Implica programar a nivel conceptual y declarativo usando Inteligencia Artificial generativa. Este curso te enseñará a dirigir modelos de lenguaje como asistentes creativos en tiempo real, manteniendo al mismo tiempo el foco en tu bienestar y eliminando la frustración mecánica del desarrollo.',
    instructor: {
      name: 'Carlos Ruiz',
      role: 'Software Craftsman & Vibe Coder',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      bio: 'Carlos es ingeniero de software y promotor de la salud mental en tecnología. Es conocido por programar soluciones completas en minutos a través de flujos conversacionales interactivos.'
    },
    syllabus: [
      'Filosofía del Vibe Coding y Programación Declarativa',
      'Ingeniería de Prompts aplicados al Código',
      'Práctica Interactiva: Dirigir un Mini Compilador'
    ],
    studentsCount: 456,
    rating: 4.9,
    lessons: [
      {
        id: 'vibe-1',
        title: '¿Qué es el Vibe Coding?',
        duration: '15 min',
        exerciseType: 'quiz',
        content: `El **Vibe Coding** es una filosofía y metodología moderna de desarrollo donde el desarrollador pasa de escribir líneas de código mecánicamente a **orquestar y guiar** las intenciones del software en colaboración activa con modelos de Inteligencia Artificial.

### Beneficios del Vibe Coding:
- **Reducción del estrés cognitivo:** Te enfocas en la lógica de negocio, arquitectura y experiencia de usuario, dejando el código de soporte repetitivo a los modelos.
- **Creatividad fluida ("Vibe"):** Programas a la velocidad del pensamiento. Expresas tus ideas en lenguaje natural y observas los prototipos tomar vida al instante.
- **Inclusión radical:** Permite que personas con capacidades motrices diversas o sin formación técnica profunda en sintaxis de lenguajes creen agentes de software potentes y funcionales.

El Vibe Coding no reemplaza la ingeniería; la eleva. Requiere criterio técnico para validar, auditar y modularizar las soluciones propuestas por el modelo.`,
        quizQuestion: {
          question: '¿Cuál es el rol principal del humano en el paradigma del "Vibe Coding"?',
          options: [
            'Escribir toda la sintaxis de código de forma manual línea por línea',
            'Dirigir conceptualmente, auditar la seguridad, asegurar el diseño y definir el flujo y lógica del sistema',
            'Permitir que la IA tome todas las decisiones sin ninguna supervisión humana',
            'Documentar el código impreso en papel'
          ],
          correctAnswer: 1,
          explanation: 'En el Vibe Coding, el humano actúa como un arquitecto y director creativo, definiendo las intenciones del negocio, la experiencia visual y auditando que el código sugerido cumpla con los requisitos.'
        }
      },
      {
        id: 'vibe-2',
        title: 'Ingeniería de Prompts para Programar',
        duration: '20 min',
        exerciseType: 'quiz',
        content: `Para ser un programador eficiente en la era de los LLMs, debes aprender a comunicarte de forma asertiva. El modelo de prompt de código óptimo incluye:

1. **Contexto:** Definir el rol de la IA (ej. *"Actúa como un experto en React y TypeScript"*).
2. **Entorno y Restricciones:** Indicar herramientas (ej. *"Usa Tailwind CSS, no uses animaciones pesadas, queremos un diseño responsive"*).
3. **Especificación Concisa:** Pedir lo que necesitas con límites claros.
4. **Ejemplo de Entrada/Salida (Few-Shot):** Si es un algoritmo complejo, dale un caso de prueba.
5. **Instrucciones de Retorno:** Ej. *"Devuelve únicamente el código JSX limpio sin explicaciones extensas"*.

Evita prompts vagos como *"hazme una página de login"*. Prefiere: *"Crea un componente de login con React, usando Tailwind. Debe verificar que el email sea válido y tener estados animados para carga, éxito y error."*`,
        quizQuestion: {
          question: '¿Por qué es importante incluir restricciones claras al pedirle código a un modelo de IA?',
          options: [
            'Porque la IA no sabe interpretar código de otra forma',
            'Para acotar el alcance y evitar que implemente librerías innecesarias, código excesivo o patrones que no se adaptan al proyecto',
            'Para que el costo del consumo de tokens sea cero',
            'No es importante, la IA siempre produce el código exacto que necesitamos'
          ],
          correctAnswer: 1,
          explanation: 'Especificar restricciones claras (como evitar librerías no deseadas, definir variables de entorno, etc.) evita que la IA genere soluciones sobrecargadas o incompatibles con tu infraestructura.'
        }
      },
      {
        id: 'vibe-3',
        title: 'Práctica Interactiva: Intenciones de Código',
        duration: '20 min',
        exerciseType: 'code',
        content: `¡Es hora de programar con vibras! Vamos a realizar una simulación real de asistencia.

Imagina que estás construyendo una aplicación de notas y tienes una función auxiliar para contar palabras clave. Actualmente está vacía. Debes escribir una expresión en JavaScript/TypeScript que retorne la cantidad de palabras de un texto.

Completa la función escribiendo la palabra reservada de javascript para retornar un valor: **return**. El modelo validará tu sintaxis.`,
        codeExercise: {
          instruction: 'Completa la función escribiendo la palabra clave "return" para devolver el número de palabras en el texto proporcionado.',
          initialCode: `function contarPalabras(texto) {
  const palabras = texto.trim().split(/\\s+/);
  // Completa aquí abajo con la palabra 'return'
  palabras.length;
}`,
          solutionKeyword: 'return palabras.length',
          placeholder: 'escribe aquí...'
        }
      }
    ]
  },
  {
    id: 'intro-qa-manual',
    title: 'Introducción al QA Manual',
    slug: 'intro-qa-manual',
    category: 'qa',
    level: 'Principiante',
    duration: '10 horas',
    lessonsCount: 2,
    description: 'Aprende a analizar requisitos, diseñar casos de prueba y reportar bugs como un profesional.',
    longDescription: 'El Aseguramiento de la Calidad (QA) es uno de los roles clave en el desarrollo de software moderno. Este curso te guiará y enseñará los fundamentos teóricos del análisis de requerimientos, diseño de suites de pruebas lógicas, clasificación de severidades de errores y cómo comunicarte de forma asertiva con el equipo de desarrollo.',
    instructor: {
      name: 'Manuel Soria',
      role: 'QA Engineer Lead',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      bio: 'Manuel lleva 8 años liderando equipos de control de calidad. Su enfoque destaca por la empatía en el desarrollo de producto y la inclusión de perfiles becados en la industria.'
    },
    syllabus: [
      '¿Qué es QA y por qué es vital?',
      'Estructura de un Bug Report perfecto'
    ],
    studentsCount: 290,
    rating: 4.6,
    lessons: [
      {
        id: 'qa-1',
        title: 'Fundamentos de calidad de software',
        duration: '15 min',
        exerciseType: 'quiz',
        content: `El control de calidad (**QA - Quality Assurance**) no se limita a "buscar fallos" al final del proceso. Es una disciplina transversal que garantiza que los requisitos del negocio se cumplan y que la experiencia del usuario final sea óptima y segura.

### Siete principios del Testing:
1. **Las pruebas demuestran la presencia de defectos, no su ausencia:** Probar un sistema puede evidenciar que hay fallos, pero no puede demostrar de forma absoluta que el software está 100% libre de errores.
2. **Las pruebas exhaustivas son imposibles:** No se pueden probar todas las combinaciones de datos e interacciones del mundo. Nos enfocamos en el análisis de riesgos.
3. **Pruebas tempranas:** Empezar a auditar requisitos antes de escribir código ahorra tiempo y dinero.
4. **Agrupación de defectos:** Los errores suelen concentrarse en módulos específicos del sistema.
5. **Paradoja del pesticida:** Si repites las mismas pruebas, llegará un momento en que no descubrirán nuevos fallos. Es vital actualizar los casos de prueba.
6. **Las pruebas dependen del contexto:** No se prueba igual una app bancaria que un videojuego de celular.
7. **Falacia de la ausencia de errores:** De nada sirve un software sin errores si la interfaz es inutilizable o no resuelve la necesidad del cliente.`,
        quizQuestion: {
          question: '¿Qué nos enseña el principio de las "Pruebas Tempranas" en el QA?',
          options: [
            'Que debemos empezar a probar el software a las 6:00 AM todos los días',
            'Que el proceso de QA debe iniciarse lo antes posible en el ciclo de desarrollo, auditando incluso los requisitos y especificaciones antes de codificar',
            'Que el primer programador en terminar su código es quien debe probarlo todo',
            'Que las pruebas se automatizan en segundos'
          ],
          correctAnswer: 1,
          explanation: 'Las pruebas tempranas reducen drásticamente los costos. Detectar un problema de lógica en la etapa de diseño de requisitos cuesta hasta 100 veces menos que corregirlo en producción.'
        }
      },
      {
        id: 'qa-2',
        title: 'El Reporte de Bugs Perfecto',
        duration: '20 min',
        exerciseType: 'quiz',
        content: `Un buen QA se define por la calidad y claridad de sus reportes. Si un desarrollador no puede entender tu reporte, no podrá corregir el error.

### Secciones claves de un reporte de Bug:
- **ID y Título descriptivo:** Debe resumir el error, la sección y la circunstancia. Ej: *"[Login] Botón "Acceder" no responde al presionar Shift+Enter en Firefox"*.
- **Severidad (Impacto técnico):** Bloqueante, Crítica, Mayor, Menor.
- **Prioridad (Urgencia de negocio):** Alta, Media, Baja.
- **Pasos para reproducir:** Lista numerada exacta desde el punto de inicio.
- **Resultado Esperado:** Qué debería hacer la aplicación según los requisitos.
- **Resultado Obtenido:** Qué hace la aplicación en realidad.
- **Entorno:** Sistema operativo, navegador, versión de la app, resolución de pantalla.
- **Evidencias:** Capturas de pantalla, grabaciones de video, capturas de logs de consola.`,
        quizQuestion: {
          question: 'Si una aplicación móvil se cierra de inmediato (Crash) de forma constante al abrir la pantalla de ajustes, ¿qué severidad técnica le corresponde?',
          options: [
            'Menor (Trivial)',
            'Bloqueante (Blocker / Critical)',
            'Mayor',
            'Estética'
          ],
          correctAnswer: 1,
          explanation: 'Un error que provoca el cierre inmediato e impide usar una sección completa se categoriza como Bloqueante o Crítico, ya que interrumpe totalmente el flujo del usuario.'
        }
      }
    ]
  },
  {
    id: 'automatizacion-cypress',
    title: 'Automatización de Pruebas con Cypress',
    slug: 'automatizacion-cypress',
    category: 'testing',
    level: 'Intermedio',
    duration: '16 horas',
    lessonsCount: 2,
    description: 'Automatiza pruebas de extremo a extremo (E2E) de manera rápida y confiable sobre interfaces web.',
    longDescription: 'Cypress es el framework moderno estándar en la industria para realizar pruebas automatizadas sobre aplicaciones web. En este curso aprenderás a instalar Cypress, seleccionar elementos del DOM, simular interacciones de usuarios reales y escribir aserciones robustas para verificar la integridad del front-end.',
    instructor: {
      name: 'Manuel Soria',
      role: 'QA Engineer Lead',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      bio: 'Manuel lleva 8 años liderando equipos de control de calidad. Su enfoque destaca por la empatía en el desarrollo de producto y la inclusión de perfiles becados en la industria.'
    },
    syllabus: [
      'Introducción a las pruebas E2E e interacción DOM con Cypress',
      'Escritura de pruebas de formulario y aserciones'
    ],
    studentsCount: 187,
    rating: 4.8,
    lessons: [
      {
        id: 'cy-1',
        title: 'Introducción a Cypress y Selectores',
        duration: '20 min',
        exerciseType: 'quiz',
        content: `Cypress ejecuta sus comandos directamente en un navegador web real, lo que acelera de forma masiva los tiempos de respuesta de las pruebas y facilita la depuración en tiempo real.

### Comandos esenciales de Cypress:
- \`cy.visit(url)\`: Navega a la página especificada.
- \`cy.get(selector)\`: Obtiene uno o varios elementos del DOM mediante selectores CSS.
- \`cy.click()\`: Simula un clic sobre el elemento seleccionado.
- \`cy.type(text)\`: Escribe texto dentro de un campo de formulario.

### Buenas prácticas de selectores:
Evita seleccionar por clases que puedan cambiar con el diseño visual (ej. \`.bg-blue-500\`). Es recomendable utilizar atributos de prueba personalizados creados específicamente para testing, como \`data-testid\` o \`data-cy\`:

\`\`\`javascript
// Recomendado y robusto
cy.get('[data-cy="submit-btn"]').click()

// Frágil (puede romperse si cambia el estilo)
cy.get('.btn-submit-active').click()
\`\`\``,
        quizQuestion: {
          question: '¿Cuál es el comando correcto en Cypress para buscar un botón con el atributo personalizado data-testid="login-button"?',
          options: [
            'cy.find(".login-button")',
            'cy.get(\'[data-testid="login-button"]\')',
            'cy.visit("[login-button]")',
            'cy.select("login-button")'
          ],
          correctAnswer: 1,
          explanation: 'cy.get() utiliza selectores de atributos CSS estándar. Para buscar un atributo personalizado, usamos la sintaxis: [atributo="valor"].'
        }
      },
      {
        id: 'cy-2',
        title: 'Escribiendo tu Primera Aserción',
        duration: '25 min',
        exerciseType: 'code',
        content: `Las aserciones validan que el sistema se encuentra en el estado esperado. En Cypress, la herramienta de aserciones integrada es **Chai**.

La sintaxis más utilizada es la combinación del comando \`.should()\`.

### Ejemplos comunes:
- \`cy.get('.mensaje-exito').should('be.visible')\`: Verifica que el elemento se pinte en pantalla.
- \`cy.get('.badge').should('have.text', 'Completado')\`: Valida que el texto interno coincida.
- \`cy.get('input').should('have.value', 'edgar@gmail.com')\`: Valida el valor de un campo.

Escribamos una prueba sencilla. Suponiendo que seleccionamos un elemento con id \`#title\`, queremos verificar que tenga el texto "Hola".

Escribe la palabra clave de cypress para realizar la aserción: **should** en el campo interactivo.`,
        codeExercise: {
          instruction: 'Completa la línea del test ingresando la palabra clave "should" para encadenar la comprobación de texto en Cypress.',
          initialCode: `cy.get('#title')
  // Completa aquí abajo con la palabra 'should'
  ('have.text', 'Hola');`,
          solutionKeyword: "should('have.text', 'Hola')",
          placeholder: 'escribe aquí...'
        }
      }
    ]
  }
];
