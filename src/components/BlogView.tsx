import React, { useState } from 'react';
import { 
  Search, 
  Calendar, 
  Clock, 
  Tag, 
  ArrowRight, 
  Sparkles, 
  Bookmark,
  Share2,
  CheckCircle2,
  Hash,
  ExternalLink,
  MessageCircle,
  Twitter,
  Linkedin,
  Facebook
} from 'lucide-react';

interface BlogViewProps {
  onNavigate: (view: string) => void;
}

export const BlogView: React.FC<BlogViewProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const articles = [
    {
      id: 'femqa-surt-basetis-somoscoders',
      title: 'FemQA: Capacitación y Empleo en Software QA para Mujeres con Fundació SURT y Basetis',
      excerpt: 'Conoce la iniciativa FemQA, el bootcamp de Quality Assurance impulsado por Basetis y SomosCoders en alianza con la Fundació SURT para empoderar y facilitar la inserción laboral de mujeres en situación de vulnerabilidad en el sector tecnológico.',
      category: 'Inclusión & Género',
      date: '18 Agosto 2026',
      readTime: '6 min de lectura',
      author: 'Fundació SURT & Basetis',
      authorAvatar: '/images/avatars/avatar_girl_headphones.png',
      image: '/images/char_girl_pointing_idea.png',
      tag: 'FemQA',
      link: 'https://femqa.basetis.com/es'
    },
    {
      id: 'empowerhack-fem-basetis',
      title: 'EmpowerHack Fem: Hackathon Solidario por la Inclusión de Mujeres en Tecnología',
      excerpt: 'Crónica del evento organizado junto a Basetis y SomosCoders para reducir la brecha de género y desarrollar herramientas tecnológicas para entidades del tercer sector.',
      category: 'Inclusión & Género',
      date: '14 Agosto 2026',
      readTime: '5 min de lectura',
      author: 'Basetis & SomosCoders',
      authorAvatar: '/images/avatars/avatar_girl_ponytail.png',
      image: '/images/char_girl_pointing_idea.png',
      tag: 'EmpowerHack',
      link: 'https://blog.basetis.com/article_basic/empowerhack-fem/'
    },
    {
      id: 'bootcamp-programa-empujar-cenit',
      title: 'Bootcamp Gratuito de Desarrollo Full Stack con Programa Empujar y SomosCoders',
      excerpt: 'Consultora Cénit destaca el bootcamp intensivo y gratuito de desarrollo web impulsado por Programa Empujar y SomosCoders para formar a jóvenes con alta motivación y conectarlos con empresas del ecosistema digital.',
      category: 'Alianzas & Empleo',
      date: '10 Agosto 2026',
      readTime: '4 min de lectura',
      author: 'Consultora Cénit',
      authorAvatar: '/images/avatars/avatar_boy_curly.png',
      image: '/images/char_boy_backpack_peace.png',
      tag: 'ConsultoraCenit',
      link: 'https://consultoracenit.com.ar/bootcamp-de-programa-empujar/'
    },
    {
      id: 'emplear-para-igualar-empujar',
      title: 'Emplear para Igualar: El Puente entre Jóvenes Vulnerables y Empresas IT',
      excerpt: 'Alianza entre la Fundación Empujar y SomosCoders para capacitar y conectar talento joven con su primer empleo formal en la industria del software.',
      category: 'Alianzas & Empleo',
      date: '08 Agosto 2026',
      readTime: '5 min de lectura',
      author: 'Fundación Empujar',
      authorAvatar: '/images/avatars/avatar_boy_beanie.png',
      image: '/images/char_boy_celebrating_win.png',
      tag: 'EmplearParaIgualar',
      link: 'https://fundacionempujar.org/tag/emplear-para-igualar/'
    },
    {
      id: 'programa-singulars-intermedia',
      title: 'Fundació Intermèdia y SomosCoders despliegan una nueva edición del programa Singulars',
      excerpt: 'Itinerario de formación y acompañamiento ocupacional juvenil para mejorar la empleabilidad en perfiles de desarrollo web y competencias digitales clave.',
      category: 'Ocupación Juvenil',
      date: '01 Agosto 2026',
      readTime: '5 min de lectura',
      author: 'Fundació Intermèdia',
      authorAvatar: '/images/avatars/avatar_girl_ponytail.png',
      image: '/images/char_boy_coder_braces.png',
      tag: 'Singulars',
      link: 'https://intermediaocupacio.org/fundacio-intermedia-desplega-una-nova-edicio-del-programa-singulars/'
    },
    {
      id: 'charla-software-crafters-bcn',
      title: 'Charla de Abraham en Software Crafters Barcelona: De la Inclusión a la Excelencia Técnica',
      excerpt: 'Resumen y aprendizajes de la ponencia de Abraham Vallez sobre cómo construir comunidades técnicas inclusivas y fomentar la artesanía de software accesible.',
      category: 'Comunidad & Craft',
      date: '28 Julio 2026',
      readTime: '7 min de lectura',
      author: 'Software Crafters BCN',
      authorAvatar: '/images/avatars/avatar_boy_curly.png',
      image: '/images/char_boy_magnifier_qa.png',
      tag: 'SoftwareCrafters',
      link: 'https://x.com/bcnswcraft/status/1980702393756184621'
    }
  ];

  const socialMentions = [
    {
      platform: 'X (Twitter)',
      author: '@bcnswcraft',
      handle: 'Software Crafters Barcelona',
      date: 'Reciente',
      content: '¡Qué gran energía en la charla sobre formación comunitaria con @AbrahamVallez y @SomosCoders! Gracias por compartir vuestra visión de impacto social y código.',
      link: 'https://x.com/bcnswcraft/status/1981411895262199841',
      icon: Twitter
    },
    {
      platform: 'LinkedIn',
      author: 'Inserción Laboral IT & Impacto',
      handle: 'SomosCoders x Fundación Empujar',
      date: 'Reciente',
      content: 'Orgullosos de presentar a una nueva cohorte de jóvenes capacitados en desarrollo frontend y testing listos para incorporarse al mercado IT.',
      link: 'https://www.linkedin.com/posts/insercionlaboralit-somoscoders-fundacionempujar-share-7115064366001008641-5oYc/',
      icon: Linkedin
    },
    {
      platform: 'Facebook',
      author: 'Singulars Joves Ocupació',
      handle: 'Garantía Juvenil',
      date: 'Reciente',
      content: 'Nueva edición del programa Singulars en marcha junto a entidades aliadas impulsando la formación tecnológica sin barreras.',
      link: 'https://www.facebook.com/singulars.joves/posts/1758885487650250/',
      icon: Facebook
    }
  ];

  const filteredArticles = articles.filter((art) => {
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === 'todos' ? true : art.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-16 font-sans text-[#0D1117]">
      
      {/* 1. Header Hero Blog con Personaje */}
      <section className="bg-[#F7F6F1] rounded-3xl p-8 sm:p-12 border border-gray-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
        <img 
          src="/images/stickers/sticker_cross_grid.png" 
          alt="Grid fondo" 
          className="absolute top-4 right-6 w-30 h-auto opacity-25 pointer-events-none" 
        />

        <div className="lg:col-span-8 space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#00A98F]/40 text-[#087A65] text-xs font-semibold">
            <span className="text-[#00A98F]">✳</span>
            <span>Noticias, Redes y Artículos Reales</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-[#0D1117] leading-tight">
            Noticias, Alianzas y <span className="text-[#00A98F]">Actualidad.</span>
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
            Sigue de cerca los proyectos solidarios, hackathons de inclusión, programas ocupacionales y participaciones comunitarias en las que colabora SomosCoders.
          </p>

          {/* Buscador de artículos */}
          <div className="flex items-center bg-white border border-gray-300 rounded-2xl p-1.5 max-w-md shadow-xs focus-within:border-[#00A98F] transition">
            <input 
              type="text" 
              placeholder="Buscar artículos, hackathons o iniciativas..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs px-3 py-2 outline-none text-gray-800"
            />
            <button className="bg-[#00A98F] text-white p-2 rounded-xl">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Personaje con Tablet festivo */}
        <div className="lg:col-span-4 flex justify-center relative z-10">
          <img 
            src="/images/char_boy_celebrating_win.png" 
            alt="Blog SomosCoders" 
            className="w-36 h-auto object-contain drop-shadow-xl hover:scale-105 transition duration-300" 
          />
        </div>
      </section>

      {/* 2. Categorías / Filtros */}
      <div className="flex flex-wrap gap-2 pt-2 border-b border-gray-100 pb-4">
        {[
          { key: 'todos', label: 'Todos los Artículos' },
          { key: 'inclusión', label: 'EmpowerHack & Género' },
          { key: 'alianzas', label: 'Fundación Empujar' },
          { key: 'ocupación', label: 'Programa Singulars' },
          { key: 'comunidad', label: 'Software Crafters' }
        ].map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition ${
              selectedCategory === cat.key
                ? 'bg-[#00A98F] text-white shadow-xs font-bold'
                : 'bg-[#F7F6F1] text-gray-700 hover:bg-gray-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 3. Grid de Artículos del Blog con Enlaces a Fuentes Reales */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredArticles.map((art) => (
          <article 
            key={art.id} 
            className="bg-white rounded-3xl border-2 border-gray-100 hover:border-[#00A98F] p-7 transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="bg-[#F7F6F1] text-[#087A65] text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full border border-[#00A98F]/30">
                  {art.category}
                </span>
                <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{art.readTime}</span>
                </div>
              </div>

              <h2 className="text-xl font-extrabold font-display text-[#0D1117] group-hover:text-[#00A98F] transition leading-snug">
                {art.title}
              </h2>

              <p className="text-xs text-gray-600 leading-relaxed font-sans">
                {art.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <img 
                  src={art.authorAvatar} 
                  alt={art.author} 
                  className="w-8 h-8 rounded-full border border-[#00A98F] object-cover"
                />
                <div>
                  <span className="text-xs font-bold text-[#0D1117] block">{art.author}</span>
                  <span className="text-[10px] text-gray-400 font-mono">{art.date}</span>
                </div>
              </div>

              <a 
                href={art.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00A98F] hover:underline"
              >
                <span>Leer fuente</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </article>
        ))}
      </section>

      {/* 4. SECCIÓN DE MENCIONES SOCIALES & REDES (X, LinkedIn, Facebook) */}
      <section className="bg-[#0D1117] text-white rounded-3xl p-8 sm:p-12 border-2 border-gray-800 space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A98F]/20 text-[#C8FF00] text-xs font-mono font-bold">
              <MessageCircle className="w-4 h-4" />
              <span>Muro Social & Menciones en Redes</span>
            </div>
            <h2 className="text-3xl font-extrabold font-display leading-tight">
              Lo que dice la comunidad sobre SomosCoders
            </h2>
          </div>
          <a 
            href="https://es.linkedin.com/company/somoscoders" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#00A98F] hover:bg-[#087A65] text-white font-bold py-3 px-6 rounded-full text-xs font-sans uppercase tracking-wider transition shadow-sm"
          >
            <Linkedin className="w-4 h-4" />
            <span>Seguir en LinkedIn</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialMentions.map((mention, idx) => {
            const IconComp = mention.icon;
            return (
              <div key={idx} className="bg-gray-900 p-6 rounded-3xl border border-gray-800 space-y-4 flex flex-col justify-between hover:border-[#00A98F] transition">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-gray-300">
                      {mention.platform}
                    </span>
                    <IconComp className="w-4 h-4 text-[#C8FF00]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white">{mention.author}</h3>
                    <span className="text-[10px] text-gray-400 font-mono">{mention.handle}</span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans italic">
                    "{mention.content}"
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-800">
                  <a 
                    href={mention.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#C8FF00] hover:underline"
                  >
                    <span>Ver publicación original</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. GALERÍA DE EVENTOS */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-gray-100 space-y-8">
        <div className="space-y-2 text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A98F]/10 text-[#00A98F] text-xs font-mono font-bold">
            <Sparkles className="w-4 h-4" />
            <span>En Acción</span>
          </div>
          <h2 className="text-3xl font-extrabold font-display leading-tight text-[#0D1117]">
            Galería de Eventos
          </h2>
          <p className="text-gray-600 text-sm">
            Algunos de los momentos más destacados en nuestros hackathons, mesas redondas y eventos comunitarios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 row-span-2 relative group overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-auto">
            <img 
              src="/images/events/event1.jpg" 
              alt="Evento SomosCoders Mesa Redonda" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl aspect-[4/3]">
            <img 
              src="/images/events/event2.jpg" 
              alt="Charla Tranquilidad" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl aspect-[4/3]">
            <img 
              src="/images/events/event3.jpg" 
              alt="Tech needs women in Society" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl aspect-[4/3]">
            <img 
              src="/images/events/event4.jpg" 
              alt="Reunión Fundación Empujar" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>
          <div className="lg:col-span-2 relative group overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-[8/3]">
            <img 
              src="/images/events/event5.jpg" 
              alt="Panel Sin Juniors No Hay Seniors" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>
        </div>
      </section>

    </div>
  );
};
