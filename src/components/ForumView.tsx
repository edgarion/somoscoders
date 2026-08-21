import React, { useState, useMemo } from 'react';
import { 
  MessageSquare, 
  Search, 
  ThumbsUp, 
  Send, 
  Plus, 
  X, 
  Filter, 
  User, 
  Check, 
  HelpCircle,
  Hash,
  Sparkles
} from 'lucide-react';
import { ForumThread, ForumComment, CourseCategory } from '../types';

interface ForumViewProps {
  initialThreads: ForumThread[];
  userName: string;
}

export const ForumView: React.FC<ForumViewProps> = ({ initialThreads, userName }) => {
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

  // Expand active thread details
  const activeThread = useMemo(() => {
    return threads.find((t) => t.id === activeThreadId);
  }, [threads, activeThreadId]);

  // Filtering thread database
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
    event.stopPropagation(); // Avoid triggering details modal opening on click
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
    if (!activeThreadId || !newCommentContent.trim()) return;

    const newComment: ForumComment = {
      id: `comment-${Date.now()}`,
      authorName: userName,
      authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
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
    if (!newPostTitle.trim() || !newPostContent.trim()) return;

    const tagsArray = newPostTagsString
      ? newPostTagsString.split(',').map((tag) => tag.trim()).filter((tag) => tag.length > 0)
      : ['General'];

    const newThread: ForumThread = {
      id: `thread-${Date.now()}`,
      title: newPostTitle,
      category: newPostCategory as CourseCategory | 'general',
      authorName: userName,
      authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
      content: newPostContent,
      createdAt: 'hace unos instantes',
      likes: 0,
      isLikedByUser: false,
      replies: [],
      tags: tagsArray
    };

    setThreads([newThread, ...threads]);
    
    // Reset and close dialog
    setNewPostTitle('');
    setNewPostCategory('general');
    setNewPostContent('');
    setNewPostTagsString('');
    setCreateModalOpen(false);
  };

  return (
    <div className="space-y-8 select-none">
      
      {/* Intro Header Section */}
      <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-gray-100">
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2.5">
            <MessageSquare className="w-8 h-8 text-amber-500" />
            <span>Comunidad SomosCoders</span>
          </h1>
          <p className="text-gray-500 text-sm max-w-xl leading-relaxed">
            Un espacio de apoyo mutuo para debatir sobre UX, Vibe Coding, pruebas, compartir recursos, dudas y coordinar voluntariados.
          </p>
        </div>

        {/* Create post action button */}
        <button
          onClick={() => setCreateModalOpen(true)}
          className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-5 rounded-xl text-xs transition shadow-sm hover:shadow-md cursor-pointer shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Nueva Publicación</span>
        </button>
      </section>

      {/* Main Forum View Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Category filter tabs + stats bar */}
        <aside className="lg:col-span-3 space-y-4">
          <div className="bg-white rounded-2xl border border-gray-100 p-5 space-y-4">
            <h3 className="text-xs font-bold font-mono tracking-wider text-gray-400 uppercase">Filtrar por Tema</h3>
            <div className="flex flex-col gap-1.5">
              {[
                { key: 'todos', label: 'Todo el foro' },
                { key: 'general', label: 'General / Café' },
                { key: 'ux', label: 'UX Design & A11y' },
                { key: 'vibe-coding', label: 'Vibe Coding' },
                { key: 'qa', label: 'QA Testing' },
                { key: 'testing', label: 'Automatización' }
              ].map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setCategoryFilter(cat.key)}
                  className={`w-full text-left py-2 px-3.5 rounded-lg text-xs font-semibold tracking-wide transition flex items-center justify-between ${
                    categoryFilter === cat.key
                      ? 'bg-amber-100 text-amber-900 font-bold'
                      : 'hover:bg-gray-50 text-gray-500 hover:text-gray-950'
                  }`}
                >
                  <span>{cat.label}</span>
                  {categoryFilter === cat.key && <Check className="w-3.5 h-3.5 text-amber-800 inline" />}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-400/10 to-transparent p-5 rounded-2xl border border-amber-200/30 text-xs text-amber-950 space-y-3">
            <span className="font-bold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 fill-amber-400 stroke-amber-800" />
              <span>Código de conducta</span>
            </span>
            <p className="leading-relaxed font-sans text-gray-650">
              Somos un espacio solidario y accesible. Ayuda a tus compañeros con respeto y fomenta la inclusión tecnológica en cada comentario.
            </p>
          </div>
        </aside>

        {/* Right Side: Threads list */}
        <section className="lg:col-span-9 space-y-5">
          
          {/* Quick search filters banner */}
          <div className="flex items-center bg-white border border-gray-200 rounded-xl p-1 shadow-sm focus-within:border-amber-400 transition-all flex items-center pr-3">
            <input 
              type="text" 
              placeholder="Buscar discusiones o palabras claves..." 
              className="w-full text-sm py-2 px-3 text-gray-700 bg-transparent outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="w-5 h-5 text-gray-400 shrink-0" />
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
                  className="bg-white p-5 rounded-2xl border border-gray-100 hover:border-gray-200 hover:scale-[1.002] transition-all duration-200 cursor-pointer space-y-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={thread.authorAvatar} 
                        alt={thread.authorName} 
                        className="w-9 h-9 rounded-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <span className="font-bold text-xs text-gray-850 block">{thread.authorName}</span>
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
                    <h3 className="font-extrabold text-base md:text-lg text-gray-900 hover:text-amber-600 transition leading-snug">
                      {thread.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-sans line-clamp-2">
                      {thread.content}
                    </p>
                  </div>

                  {/* Badges list */}
                  <div className="flex flex-wrap gap-1">
                    {thread.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center text-[10px] text-gray-400 font-mono">
                        <Hash className="w-3 h-3 text-amber-500" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  {/* Interaction bar */}
                  <div className="flex items-center justify-between border-t border-gray-50 pt-3 text-xs text-gray-400">
                    <div className="flex items-center gap-4">
                      {/* Like Thread */}
                      <button
                        onClick={(e) => handleLikeThread(thread.id, e)}
                        className={`flex items-center gap-1.5 py-1 px-2.5 rounded-lg transition ${
                          isLiked 
                          ? 'bg-amber-100 text-amber-900 font-bold' 
                          : 'hover:bg-gray-150 text-gray-500'
                        }`}
                        title="Votar a favor de esta discusión"
                      >
                        <ThumbsUp className={`w-3.5 h-3.5 ${isLiked ? 'fill-amber-500 text-amber-600' : ''}`} />
                        <span>{thread.likes} votos</span>
                      </button>

                      {/* Comment count display */}
                      <div className="flex items-center gap-1">
                        <MessageSquare className="w-3.5 h-3.5 text-gray-400" />
                        <span>{thread.replies.length} respuestas</span>
                      </div>
                    </div>

                    <span className="text-[10px] bg-slate-50 border border-slate-100 text-slate-500 py-1 px-2.5 rounded-lg font-semibold font-mono uppercase tracking-wide">
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
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-hidden shadow-2xl flex flex-col justify-between border-2 border-amber-400 animate-in fade-in zoom-in-95 duration-150">
            {/* Header of Modal dialog */}
            <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                <span className="text-xs font-bold font-mono text-slate-600 uppercase tracking-wide">
                  Hilo de Discusión en Detalle
                </span>
              </div>
              <button
                onClick={() => setActiveThreadId(null)}
                className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center text-gray-500 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable details of comments */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-white">
              {/* Main original content */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <img 
                    src={activeThread.authorAvatar} 
                    alt={activeThread.authorName} 
                    className="w-10 h-10 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-sm text-gray-800">{activeThread.authorName}</h4>
                    <span className="text-[10px] text-gray-400">{activeThread.createdAt}</span>
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-extrabold text-gray-950 font-display leading-tight">
                  {activeThread.title}
                </h3>

                <p className="whitespace-pre-line text-sm text-gray-650 leading-relaxed font-sans bg-slate-50 p-4 rounded-xl border border-slate-100">
                  {activeThread.content}
                </p>
              </div>

              {/* Replies Thread list */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <h4 className="text-xs font-bold font-mono tracking-wider text-gray-400 uppercase">
                  Respuestas ({activeThread.replies.length})
                </h4>

                {activeThread.replies.length > 0 ? (
                  <div className="space-y-3 pl-3 md:pl-6 border-l-2 border-amber-300">
                    {activeThread.replies.map((reply) => {
                      const commentsLiked = reply.isLikedByUser;
                      return (
                        <div key={reply.id} className="bg-gray-50 p-4 rounded-xl space-y-2.5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <img 
                                src={reply.authorAvatar} 
                                alt={reply.authorName} 
                                className="w-6.5 h-6.5 rounded-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                              <div>
                                <span className="font-bold text-xs text-gray-800 block">{reply.authorName}</span>
                                <span className="text-[9px] text-gray-400 block">{reply.createdAt}</span>
                              </div>
                            </div>
                            
                            {/* Like reply button */}
                            <button
                              onClick={() => handleLikeComment(reply.id)}
                              className={`flex items-center gap-1 text-[10px] py-1 px-2 rounded-lg transition ${
                                commentsLiked 
                                  ? 'bg-amber-100 text-amber-900 font-bold' 
                                  : 'hover:bg-gray-200 text-gray-500'
                              }`}
                            >
                              <ThumbsUp className={`w-3 h-3 ${commentsLiked ? 'fill-amber-500 text-amber-600' : ''}`} />
                              <span>{reply.likes}</span>
                            </button>
                          </div>

                          <p className="text-xs text-gray-600 font-sans leading-relaxed">
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

            {/* Editor textarea at bottom */}
            <div className="p-4 border-t border-gray-100 bg-slate-50 flex gap-2">
              <textarea
                rows={2}
                value={newCommentContent}
                onChange={(e) => setNewCommentContent(e.target.value)}
                placeholder="Escribe tu consejo o respuesta de forma inclusiva..."
                className="w-full bg-white text-xs p-3 border border-gray-200 rounded-xl outline-none focus:border-amber-400 transition font-sans"
              />
              <button
                onClick={handleAddComment}
                className="bg-gray-900 hover:bg-gray-800 text-white rounded-xl py-2 px-4 flex items-center justify-center transition shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FLOAT POST REATION MODAL / DIALOG */}
      {createModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <form
            onSubmit={handleCreatePost}
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl flex flex-col border-2 border-amber-400 animate-in fade-in zoom-in-95 duration-100"
          >
            <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-slate-900 text-white">
              <span className="font-bold text-sm tracking-wide font-display">Nueva conversación en el foro</span>
              <button
                type="button"
                onClick={() => setCreateModalOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-slate-800 flex items-center justify-center text-gray-300 transition"
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
                  placeholder="Ej: ¿Cuáles son los mejores tamaños de letra en accesibilidad?"
                  className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs outline-none focus:border-amber-400 transition"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5 flex flex-col">
                  <label className="text-xs font-bold text-gray-700">Categoría principal</label>
                  <select
                    value={newPostCategory}
                    onChange={(e) => setNewPostCategory(e.target.value)}
                    className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs outline-none"
                  >
                    <option value="general">Cafetería / General</option>
                    <option value="ux">UX Design & Accesibilidad</option>
                    <option value="vibe-coding">Vibe Coding</option>
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
                    className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs outline-none"
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
                  placeholder="Escribe todas tus dudas, ideas, recursos o links útiles para que la comunidad interactúe contigo..."
                  className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs outline-none focus:border-amber-400 transition"
                />
              </div>
            </div>

            <div className="p-4 border-t border-gray-100 bg-slate-50 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setCreateModalOpen(false)}
                className="py-2.5 px-4 rounded-xl text-gray-500 hover:text-gray-900 transition text-xs font-semibold"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-amber-400 hover:bg-amber-500 text-gray-950 font-bold py-2.5 px-5 rounded-xl transition text-xs shadow-sm"
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
