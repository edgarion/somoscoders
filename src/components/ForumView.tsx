import React, { useState, useMemo } from 'react';
import { 
  MessageSquare, 
  Search, 
  ThumbsUp, 
  Send, 
  Plus, 
  X, 
  Check, 
  Lock,
  Hash,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { ForumThread, ForumComment, CourseCategory } from '../types';

interface ForumViewProps {
  initialThreads: ForumThread[];
  userName: string;
  user: { name: string; email: string; picture: string } | null;
  onRequestAuth: () => void;
}

export const ForumView: React.FC<ForumViewProps> = ({ 
  initialThreads, 
  userName,
  user,
  onRequestAuth
}) => {
  const [threads, setThreads] = useState<ForumThread[]>(initialThreads);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('todos');

  // Modal / Thread detail state
  const [activeThreadId, setActiveThreadId] = useState<string | null>(null);
  const [newCommentContent, setNewCommentContent] = useState('');

  // Floating creation modal state
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostCategory, setNewPostCategory] = useState<string>('general');
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostTagsString, setNewPostTagsString] = useState('');

  const activeThread = useMemo(() => {
    return threads.find((t) => t.id === activeThreadId);
  }, [threads, activeThreadId]);

  const filteredThreads = useMemo(() => {
    return threads.filter((t) => {
      const matchesSearch = 
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        t.content.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = categoryFilter === 'todos' ? true : t.category === categoryFilter;

      return matchesSearch && matchesCategory;
    });
  }, [threads, searchQuery, categoryFilter]);

  const handleLikeThread = (threadId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    if (!user) {
      onRequestAuth();
      return;
    }
    setThreads(prev => 
      prev.map((t) => {
        if (t.id === threadId) {
          const isLiked = !t.isLikedByUser;
          return {
            ...t,
            likes: isLiked ? t.likes + 1 : t.likes - 1,
            isLikedByUser: isLiked
          };
        }
        return t;
      })
    );
  };

  const handleLikeComment = (commentId: string) => {
    if (!user) {
      onRequestAuth();
      return;
    }
    if (!activeThreadId) return;
    setThreads(prev =>
      prev.map((t) => {
        if (t.id === activeThreadId) {
          return {
            ...t,
            replies: t.replies.map((c) => {
              if (c.id === commentId) {
                const liked = !c.isLikedByUser;
                return {
                  ...c,
                  likes: liked ? c.likes + 1 : c.likes - 1,
                  isLikedByUser: liked
                };
              }
              return c;
            })
          };
        }
        return t;
      })
    );
  };

  const handleAddComment = () => {
    if (!user) {
      onRequestAuth();
      return;
    }
    if (!activeThreadId || !newCommentContent.trim()) return;

    const newComment: ForumComment = {
      id: `comment-${Date.now()}`,
      authorName: user.name || userName,
      authorAvatar: user.picture || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
      content: newCommentContent,
      createdAt: 'hace unos instantes',
      likes: 0,
      isLikedByUser: false
    };

    setThreads((prev) =>
      prev.map((t) => {
        if (t.id === activeThreadId) {
          return {
            ...t,
            replies: [...t.replies, newComment]
          };
        }
        return t;
      })
    );
    setNewCommentContent('');
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      onRequestAuth();
      return;
    }
    if (!newPostTitle.trim() || !newPostContent.trim()) return;

    const tagsArray = newPostTagsString
      ? newPostTagsString.split(',').map((tag) => tag.trim()).filter((tag) => tag.length > 0)
      : ['General'];

    const newThread: ForumThread = {
      id: `thread-${Date.now()}`,
      title: newPostTitle,
      category: newPostCategory as CourseCategory | 'general',
      authorName: user.name || userName,
      authorAvatar: user.picture || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
      content: newPostContent,
      createdAt: 'hace unos instantes',
      likes: 0,
      isLikedByUser: false,
      replies: [],
      tags: tagsArray
    };

    setThreads([newThread, ...threads]);
    setNewPostTitle('');
    setNewPostCategory('general');
    setNewPostContent('');
    setNewPostTagsString('');
    setCreateModalOpen(false);
  };

  return (
    <div className="space-y-8 font-sans text-[#0D1117]">
      
      {/* Intro Header Section 2026 */}
      <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-gray-100">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F6F1] border border-[#00A98F]/40 text-[#087A65] text-xs font-semibold">
            <span className="text-[#00A98F]">✳</span>
            <span>Espacio de Apoyo Mutuo</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-[#0D1117] tracking-tight">
            Comunidad <span className="text-[#00A98F]">SomosCoders.</span>
          </h1>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
            Debates sobre programación, UX, mentoría, resolución de dudas y ofertas de voluntariado en un entorno accesible.
          </p>
        </div>

        {/* Create post action button */}
        <button
          onClick={() => {
            if (!user) {
              onRequestAuth();
            } else {
              setCreateModalOpen(true);
            }
          }}
          className="inline-flex items-center gap-2 bg-[#00A98F] hover:bg-[#087A65] text-white font-bold py-3.5 px-6 rounded-full text-xs uppercase tracking-wider font-sans transition shadow-sm hover:shadow-md cursor-pointer shrink-0"
        >
          {user ? <Plus className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
          <span>{user ? 'Nueva Publicación' : 'Regístrate para Publicar'}</span>
        </button>
      </section>

      {/* Main Forum View Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Category filter tabs + stats bar con Overlays de Café y Libros (+50%) */}
        <aside className="lg:col-span-3 space-y-4">
          <div className="bg-[#F7F6F1] rounded-3xl border border-gray-200/80 p-5 space-y-4 relative overflow-hidden">
            {/* Overlay: Vaso de Café SomosCoders (+50% -> w-18) */}
            <img 
              src="/images/stickers/sticker_coffee_cup.png" 
              alt="Café SomosCoders" 
              className="absolute -top-3 -right-3 w-18 h-auto opacity-85 pointer-events-none drop-shadow-md z-10" 
            />

            <h3 className="text-xs font-bold font-mono tracking-wider text-gray-500 uppercase relative z-20">Filtrar por Tema</h3>
            <div className="flex flex-col gap-1.5 relative z-20">
              {[
                { key: 'todos', label: 'Todo el foro' },
                { key: 'general', label: 'General / Café ☕' },
                { key: 'ux', label: 'UX Design & A11y' },
                { key: 'vibe-coding', label: 'Vibe Coding & IA' },
                { key: 'qa', label: 'QA Testing' },
                { key: 'testing', label: 'Automatización' }
              ].map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setCategoryFilter(cat.key)}
                  className={`w-full text-left py-2 px-3.5 rounded-xl text-xs font-semibold tracking-wide transition flex items-center justify-between ${
                    categoryFilter === cat.key
                      ? 'bg-[#00A98F] text-white font-bold shadow-xs'
                      : 'hover:bg-white text-gray-700'
                  }`}
                >
                  <span>{cat.label}</span>
                  {categoryFilter === cat.key && <Check className="w-3.5 h-3.5 text-white inline" />}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[#C8FF00] p-5 rounded-3xl border-2 border-[#0D1117] text-[#0D1117] space-y-2.5 shadow-[3px_3px_0px_#0D1117] relative overflow-hidden">
            {/* Overlay: Libros y planta (+50% -> w-24) */}
            <img 
              src="/images/stickers/sticker_books_plant.png" 
              alt="Libros y planta" 
              className="absolute -bottom-3 -right-3 w-24 h-auto opacity-45 pointer-events-none z-10" 
            />

            <div className="relative z-20 space-y-2">
              <span className="font-bold text-xs flex items-center gap-1.5 font-display">
                <ShieldCheck className="w-4 h-4 text-[#087A65]" />
                <span>Espacio Inclusivo y Seguro</span>
              </span>
              <p className="text-[11px] leading-relaxed font-medium">
                Fomentamos la ayuda constructiva, la inclusión y la accesibilidad para todos los miembros.
              </p>
            </div>
          </div>
        </aside>

        {/* Right Side: Threads list */}
        <section className="lg:col-span-9 space-y-5">
          {/* Quick search filters banner */}
          <div className="flex items-center bg-[#F7F6F1] border border-gray-200/80 rounded-2xl p-1 shadow-xs focus-within:border-[#00A98F] transition-all pr-3">
            <input 
              type="text" 
              placeholder="Buscar discusiones o preguntas en la comunidad..." 
              className="w-full text-xs py-2.5 px-4 text-gray-800 bg-transparent outline-none font-sans"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="w-4 h-4 text-gray-400 shrink-0" />
          </div>

          {/* Threads collection */}
          <div className="space-y-4">
            {filteredThreads.map((thread) => {
              const isLiked = thread.isLikedByUser;
              let catLabel = 'General';
              let badgeColor = 'bg-gray-100 text-gray-800';
              if (thread.category === 'ux') { catLabel = 'UX Design'; badgeColor = 'bg-amber-100 text-amber-900 border border-amber-200'; }
              if (thread.category === 'vibe-coding') { catLabel = 'Vibe Coding'; badgeColor = 'bg-purple-100 text-purple-900 border border-purple-200'; }
              if (thread.category === 'qa') { catLabel = 'QA Testing'; badgeColor = 'bg-emerald-100 text-emerald-900 border border-emerald-200'; }
              if (thread.category === 'testing') { catLabel = 'Automation'; badgeColor = 'bg-indigo-100 text-indigo-900 border border-indigo-200'; }

              return (
                <article
                  key={thread.id}
                  onClick={() => setActiveThreadId(thread.id)}
                  className="bg-white p-6 rounded-3xl border-2 border-gray-100 hover:border-[#00A98F] transition-all duration-200 cursor-pointer space-y-4 shadow-xs hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={thread.authorAvatar} 
                        alt={thread.authorName} 
                        className="w-9 h-9 rounded-full object-cover border border-[#00A98F]"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <span className="font-bold text-xs text-[#0D1117] block">{thread.authorName}</span>
                        <div className="flex items-center gap-1.5 text-[10px] text-gray-400 mt-0.5 font-mono">
                          <span>{thread.createdAt}</span>
                          <span>•</span>
                          <span className={`text-[9px] font-bold font-mono tracking-wider uppercase px-2 py-0.5 rounded-full ${badgeColor}`}>
                            {catLabel}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-bold font-display text-base md:text-lg text-[#0D1117] hover:text-[#00A98F] transition leading-snug">
                      {thread.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed font-sans line-clamp-2">
                      {thread.content}
                    </p>
                  </div>

                  {/* Badges list */}
                  <div className="flex flex-wrap gap-1">
                    {thread.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center text-[10px] text-gray-500 font-mono">
                        <Hash className="w-3 h-3 text-[#00A98F]" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  {/* Interaction bar */}
                  <div className="flex items-center justify-between border-t border-gray-100 pt-3 text-xs text-gray-500">
                    <div className="flex items-center gap-4">
                      {/* Like Thread */}
                      <button
                        onClick={(e) => handleLikeThread(thread.id, e)}
                        className={`flex items-center gap-1.5 py-1 px-2.5 rounded-lg transition ${
                          isLiked 
                          ? 'bg-[#00A98F]/10 text-[#00A98F] font-bold' 
                          : 'hover:bg-gray-100 text-gray-600'
                        }`}
                        title="Votar"
                      >
                        <ThumbsUp className={`w-3.5 h-3.5 ${isLiked ? 'fill-[#00A98F] text-[#00A98F]' : ''}`} />
                        <span>{thread.likes} votos</span>
                      </button>

                      {/* Comment count display */}
                      <div className="flex items-center gap-1 text-gray-500">
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>{thread.replies.length} respuestas</span>
                      </div>
                    </div>

                    <span className="text-[10px] bg-[#F7F6F1] text-[#087A65] py-1 px-2.5 rounded-full font-bold font-mono uppercase tracking-wide">
                      Participar
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>

      {/* DETAILED THREAD EXPANSION MODAL */}
      {activeThread && (
        <div className="fixed inset-0 bg-[#0D1117]/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-hidden shadow-2xl flex flex-col justify-between border-2 border-gray-200">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-[#F7F6F1]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00A98F] animate-ping" />
                <span className="text-xs font-bold font-mono text-[#0D1117] uppercase tracking-wide">
                  Hilo de Discusión
                </span>
              </div>
              <button
                onClick={() => setActiveThreadId(null)}
                className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center text-gray-500 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-white">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <img 
                    src={activeThread.authorAvatar} 
                    alt={activeThread.authorName} 
                    className="w-10 h-10 rounded-full object-cover border border-[#00A98F]"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-xs text-[#0D1117]">{activeThread.authorName}</h4>
                    <span className="text-[10px] text-gray-400 font-mono">{activeThread.createdAt}</span>
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-[#0D1117] font-display leading-tight">
                  {activeThread.title}
                </h3>

                <p className="whitespace-pre-line text-xs text-gray-700 leading-relaxed font-sans bg-[#F7F6F1] p-4 rounded-2xl border border-gray-200/80">
                  {activeThread.content}
                </p>
              </div>

              {/* Replies Thread list */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <h4 className="text-xs font-bold font-mono tracking-wider text-gray-500 uppercase">
                  Respuestas ({activeThread.replies.length})
                </h4>

                {activeThread.replies.length > 0 ? (
                  <div className="space-y-3 pl-3 md:pl-6 border-l-2 border-[#00A98F]">
                    {activeThread.replies.map((reply) => {
                      const commentsLiked = reply.isLikedByUser;
                      return (
                        <div key={reply.id} className="bg-[#F7F6F1] p-4 rounded-2xl space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <img 
                                src={reply.authorAvatar} 
                                alt={reply.authorName} 
                                className="w-6 h-6 rounded-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                              <div>
                                <span className="font-bold text-xs text-[#0D1117] block">{reply.authorName}</span>
                                <span className="text-[9px] text-gray-400 block font-mono">{reply.createdAt}</span>
                              </div>
                            </div>
                            
                            <button
                              onClick={() => handleLikeComment(reply.id)}
                              className={`flex items-center gap-1 text-[10px] py-1 px-2 rounded-lg transition ${
                                commentsLiked 
                                  ? 'bg-[#00A98F] text-white font-bold' 
                                  : 'hover:bg-gray-200 text-gray-600'
                              }`}
                            >
                              <ThumbsUp className={`w-3 h-3 ${commentsLiked ? 'fill-white' : ''}`} />
                              <span>{reply.likes}</span>
                            </button>
                          </div>

                          <p className="text-xs text-gray-700 font-sans leading-relaxed">
                            {reply.content}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-xs text-gray-400 text-center py-4">Aún no hay respuestas en este tema. ¡Sé el primero en aconsejar!</p>
                )}
              </div>
            </div>

            {/* Editor textarea at bottom con Auth Gate */}
            <div className="p-4 border-t border-gray-100 bg-[#F7F6F1]">
              {user ? (
                <div className="flex gap-2">
                  <textarea
                    rows={2}
                    value={newCommentContent}
                    onChange={(e) => setNewCommentContent(e.target.value)}
                    placeholder="Escribe tu consejo o respuesta de forma inclusiva..."
                    className="w-full bg-white text-xs p-3 border border-gray-200 rounded-xl outline-none focus:border-[#00A98F] transition font-sans"
                  />
                  <button
                    onClick={handleAddComment}
                    className="bg-[#00A98F] hover:bg-[#087A65] text-white rounded-xl py-2 px-4 flex items-center justify-center transition shrink-0 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="text-center py-2 space-y-2">
                  <p className="text-xs text-gray-600 font-medium">Debes estar registrado para participar y responder en este hilo.</p>
                  <button
                    onClick={onRequestAuth}
                    className="inline-flex items-center gap-1.5 bg-[#00A98F] hover:bg-[#087A65] text-white font-bold px-4 py-2 rounded-full text-xs transition"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>Regístrate para responder</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* FLOAT POST CREATION MODAL / DIALOG */}
      {createModalOpen && (
        <div className="fixed inset-0 bg-[#0D1117]/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <form
            onSubmit={handleCreatePost}
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl flex flex-col border-2 border-gray-200"
          >
            <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-[#0D1117] text-white">
              <span className="font-bold text-sm tracking-wide font-display">Nueva conversación en el foro</span>
              <button
                type="button"
                onClick={() => setCreateModalOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-gray-800 flex items-center justify-center text-gray-300 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="space-y-1.5 flex flex-col">
                <label className="text-xs font-bold text-gray-700">Título de la publicación</label>
                <input
                  type="text"
                  required
                  value={newPostTitle}
                  onChange={(e) => setNewPostTitle(e.target.value)}
                  placeholder="Ej: ¿Cuáles son los mejores consejos de accesibilidad?"
                  className="bg-[#F7F6F1] border border-gray-200 rounded-xl p-3 text-xs outline-none focus:border-[#00A98F] transition"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5 flex flex-col">
                  <label className="text-xs font-bold text-gray-700">Categoría principal</label>
                  <select
                    value={newPostCategory}
                    onChange={(e) => setNewPostCategory(e.target.value)}
                    className="bg-[#F7F6F1] border border-gray-200 rounded-xl p-3 text-xs outline-none"
                  >
                    <option value="general">Cafetería / General</option>
                    <option value="ux">UX Design & Accesibilidad</option>
                    <option value="vibe-coding">Vibe Coding & IA</option>
                    <option value="qa">QA Testing</option>
                    <option value="testing">Automatización</option>
                  </select>
                </div>

                <div className="space-y-1.5 flex flex-col">
                  <label className="text-xs font-bold text-gray-700">Tags (Separados por coma)</label>
                  <input
                    type="text"
                    value={newPostTagsString}
                    onChange={(e) => setNewPostTagsString(e.target.value)}
                    placeholder="Ej: a11y, interfaz, principiante"
                    className="bg-[#F7F6F1] border border-gray-200 rounded-xl p-3 text-xs outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5 flex flex-col">
                <label className="text-xs font-bold text-gray-700">Contenido detallado (Cuerpo)</label>
                <textarea
                  rows={4}
                  required
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  placeholder="Escribe todas tus dudas, ideas o recursos para que la comunidad interactúe contigo..."
                  className="bg-[#F7F6F1] border border-gray-200 rounded-xl p-3 text-xs outline-none focus:border-[#00A98F] transition"
                />
              </div>
            </div>

            <div className="p-4 border-t border-gray-100 bg-[#F7F6F1] flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setCreateModalOpen(false)}
                className="py-2 px-4 rounded-xl text-gray-600 hover:text-[#0D1117] transition text-xs font-semibold"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-[#00A98F] hover:bg-[#087A65] text-white font-bold py-2.5 px-5 rounded-xl transition text-xs shadow-xs"
              >
                Publicar Hilo
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
