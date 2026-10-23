import React, { useState } from 'react';
import { 
  Star, Heart, Bookmark, BookmarkCheck, MessageSquare, Quote, 
  Sparkles, AlertCircle, Headphones, CheckCircle2, ChevronDown, 
  ChevronUp, Send, ThumbsUp 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Book, BookComment } from '../types';

interface BookCardProps {
  book: Book;
  isSavedInTBR: boolean;
  onToggleTBR: (bookId: string) => void;
  onAddComment: (bookId: string, comment: Omit<BookComment, 'id' | 'bookId' | 'timestamp' | 'likes'>) => void;
  onLikeComment: (bookId: string, commentId: string) => void;
  onIncrementHasRead: (bookId: string) => void;
}

export const BookCard: React.FC<BookCardProps> = ({
  book,
  isSavedInTBR,
  onToggleTBR,
  onAddComment,
  onLikeComment,
  onIncrementHasRead,
}) => {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [isDeepDiveExpanded, setIsDeepDiveExpanded] = useState(false);
  const [hasMarkedRead, setHasMarkedRead] = useState(false);

  // Comment Form state
  const [commentAuthor, setCommentAuthor] = useState('');
  const [commentBadge, setCommentBadge] = useState('Friend');
  const [commentRating, setCommentRating] = useState(5);
  const [commentText, setCommentText] = useState('');

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentAuthor.trim() || !commentText.trim()) return;

    onAddComment(book.id, {
      author: commentAuthor.trim(),
      badge: commentBadge,
      rating: commentRating,
      content: commentText.trim(),
      tagColor: (['rose', 'sage', 'sky'] as const)[Math.floor(Math.random() * 3)],
    });

    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#AABA99', '#FDD5DF', '#AEC6CF'],
    });

    setCommentText('');
    setIsCommentsOpen(true);
  };

  const handleMarkRead = () => {
    if (!hasMarkedRead) {
      setHasMarkedRead(true);
      onIncrementHasRead(book.id);
      confetti({
        particleCount: 30,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#AABA99', '#FDD5DF'],
      });
    }
  };

  return (
    <article className="relative bg-white/90 rounded-3xl border-2 border-[#E5DEBD] paper-shadow paper-shadow-hover overflow-hidden transition-all duration-300">
      {/* Decorative Washi corner accent */}
      <div className="washi-tape washi-tape-pink -top-2.5 right-6"></div>

      <div className="p-6 sm:p-8">
        {/* Top Badges & Genre */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#AABA99]/25 text-[#2C3B24] border border-[#9EAF8C]">
              {book.genre}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#AEC6CF]/35 text-[#193F50] border border-[#96B9C6]">
              {book.vibeBadge}
            </span>
          </div>

          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FFFCE0] border border-[#E7DFBA] text-xs font-bold text-[#3B4734]">
            <Star className="w-3.5 h-3.5 fill-[#D99A26] text-[#D99A26]" />
            <span>{book.rating.toFixed(1)} / 5.0</span>
          </div>
        </div>

        {/* Main Content Layout: Cover on Left, Content on Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Cover Image & Quick Book Meta */}
          <div className="md:col-span-4 flex flex-col items-center">
            <div className="relative w-full max-w-[220px] aspect-[2/3] rounded-2xl overflow-hidden shadow-md border-2 border-[#DFD8B4] group">
              <img
                src={book.coverImage}
                alt={`${book.title} cover`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
              
              {/* Quick Pages badge */}
              <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium">
                {book.myOpinion.pageCount} pages
              </div>
            </div>

            {/* Friend Readership Metrics */}
            <div className="w-full max-w-[220px] mt-3 pt-2 border-t border-[#ECE5C6] flex items-center justify-between text-xs text-[#5D6B55]">
              <span className="font-semibold">{book.wantToReadCount} want to read</span>
              <span>•</span>
              <span className="font-semibold">{book.hasReadCount} have read</span>
            </div>
          </div>

          {/* Book Info & Opinions */}
          <div className="md:col-span-8 space-y-4">
            <div>
              <h3 className="font-serif-book text-2xl sm:text-3xl font-bold text-[#232B1E] tracking-tight leading-snug">
                {book.title}
              </h3>
              <p className="text-sm font-semibold text-[#5F6E56]">
                by <span className="text-[#2B3524]">{book.author}</span>
              </p>
            </div>

            {/* Punchy friend tagline */}
            <div className="p-3.5 rounded-2xl bg-[#FFFCE0] border border-[#E9E1BD]">
              <p className="text-sm font-semibold text-[#323D2B] italic">
                "{book.tagline}"
              </p>
            </div>

            {/* Summary */}
            <p className="text-sm text-[#485640] leading-relaxed">
              {book.myOpinion.summary}
            </p>

            {/* My Unfiltered Opinion (The Core Feature!) */}
            <div className="p-4 rounded-2xl bg-[#AABA99]/15 border border-[#AABA99]/50 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-[#35452C] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#35452C]" />
                  My Unfiltered Opinion
                </span>
                <button
                  onClick={() => setIsDeepDiveExpanded(!isDeepDiveExpanded)}
                  className="text-xs font-bold text-[#4B5E3F] hover:text-[#212E1A] flex items-center gap-1"
                >
                  {isDeepDiveExpanded ? 'Show less' : 'Read full take'}
                  {isDeepDiveExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>

              <p className={`text-sm text-[#2F3C28] leading-relaxed ${isDeepDiveExpanded ? '' : 'line-clamp-3'}`}>
                {book.myOpinion.deepDive}
              </p>

              {/* Expanded details */}
              {isDeepDiveExpanded && (
                <div className="pt-2 space-y-3 border-t border-[#AABA99]/30 mt-3 animate-fadeIn">
                  <div>
                    <h5 className="text-xs font-bold text-[#35452C] uppercase tracking-wide mb-1.5">
                      Why I Loved It:
                    </h5>
                    <ul className="space-y-1">
                      {book.myOpinion.whyILovedIt.map((reason, idx) => (
                        <li key={idx} className="text-xs sm:text-sm text-[#3E4D35] flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#4E673D] mt-0.5 shrink-0" />
                          <span>{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {book.myOpinion.audiobookRating && (
                    <div className="flex items-start gap-2 text-xs text-[#3E4E36] bg-white/60 p-2.5 rounded-xl border border-[#AABA99]/30">
                      <Headphones className="w-4 h-4 text-[#475E37] shrink-0 mt-0.5" />
                      <span><strong>Audiobook Note:</strong> {book.myOpinion.audiobookRating}</span>
                    </div>
                  )}

                  {book.myOpinion.tearFactor && (
                    <div className="text-xs text-[#632230] font-semibold bg-[#FDD5DF]/40 p-2 rounded-xl border border-[#F8B3C3]">
                      💧 <strong>Tear Factor:</strong> {book.myOpinion.tearFactor}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Friend Warning Alert Box */}
            {book.myOpinion.friendWarning && (
              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#FDD5DF]/50 border border-[#F8B6C7] text-[#5C1626]">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm font-semibold">
                  <span className="font-bold">Friend Warning:</span> {book.myOpinion.friendWarning}
                </p>
              </div>
            )}

            {/* Favorite Quote Sticky Card */}
            <div className="relative p-4 rounded-2xl bg-[#FFFDF2] border-2 border-dashed border-[#DFD6AD] shadow-2xs">
              <div className="flex items-start gap-2 text-[#495741]">
                <Quote className="w-5 h-5 text-[#AABA99] shrink-0 mt-0.5 rotate-180" />
                <div>
                  <p className="font-serif-book italic text-xs sm:text-sm text-[#273222] leading-snug">
                    {book.myOpinion.favoriteQuote}
                  </p>
                  {book.myOpinion.quoteAttribution && (
                    <p className="font-handwriting text-base font-bold text-[#7E8E75] mt-1">
                      — {book.myOpinion.quoteAttribution}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Best Read When & Recommended For Tags */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-[#AEC6CF]/25 border border-[#A2C4D0]">
                <span className="font-bold text-[#1D4657] block mb-0.5">🌧️ Best read when:</span>
                <span className="text-[#2A566A]">{book.myOpinion.bestReadWhen}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#AABA99]/20 border border-[#A7BA95]">
                <span className="font-bold text-[#35482A] block mb-0.5">💌 Recommended for:</span>
                <span className="text-[#435B35]">{book.myOpinion.recommendedFor}</span>
              </div>
            </div>

          </div>
        </div>

        {/* Action Bar (TBR, Mark Read, Toggle Comments) */}
        <div className="mt-6 pt-5 border-t border-[#E8E1C2] flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {/* TBR Toggle */}
            <button
              onClick={() => {
                onToggleTBR(book.id);
                confetti({
                  particleCount: 20,
                  spread: 45,
                  origin: { y: 0.8 },
                  colors: ['#AEC6CF', '#FDD5DF'],
                });
              }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                isSavedInTBR
                  ? 'bg-[#AEC6CF] text-[#143949] border-[#7EA8B8] shadow-xs'
                  : 'bg-white hover:bg-[#AEC6CF]/20 text-[#254F62] border-[#ADCBD6]'
              }`}
            >
              {isSavedInTBR ? (
                <>
                  <BookmarkCheck className="w-4 h-4 fill-[#143949]" />
                  <span>On Your TBR List!</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-4 h-4" />
                  <span>Add to TBR (+1)</span>
                </>
              )}
            </button>

            {/* I Read This Too */}
            <button
              onClick={handleMarkRead}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                hasMarkedRead
                  ? 'bg-[#AABA99] text-[#1E2B19] border-[#8BA079]'
                  : 'bg-white hover:bg-[#AABA99]/20 text-[#3F5234] border-[#BDCBB0]'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{hasMarkedRead ? 'You Read It!' : 'I Read This Too'}</span>
            </button>
          </div>

          {/* Toggle Comments Button */}
          <button
            onClick={() => setIsCommentsOpen(!isCommentsOpen)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FDD5DF]/60 hover:bg-[#FDD5DF] text-[#631A2B] border border-[#F7ADC0] text-xs sm:text-sm font-bold transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Friend Comments &amp; Hot Takes ({book.comments.length})</span>
            {isCommentsOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Expandable Book Comments Section */}
        {isCommentsOpen && (
          <div className="mt-6 pt-5 border-t border-[#E8E1C2] space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between">
              <h4 className="font-serif-book font-bold text-base text-[#2A3324] flex items-center gap-2">
                <span>Friend Discussion on</span>
                <em className="text-[#3F4F37]">"{book.title}"</em>
              </h4>
              <span className="text-xs text-[#6F7E66]">
                {book.comments.length} friend {book.comments.length === 1 ? 'thought' : 'thoughts'}
              </span>
            </div>

            {/* List of comments */}
            <div className="space-y-3">
              {book.comments.map((comment) => (
                <div
                  key={comment.id}
                  className="p-3.5 sm:p-4 rounded-2xl bg-[#FFFDF2] border border-[#E8E1C3] space-y-1.5"
                >
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#2A3423] text-sm">
                        {comment.author}
                      </span>
                      {comment.badge && (
                        <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#AABA99]/25 text-[#2C3E21]">
                          {comment.badge}
                        </span>
                      )}
                      {comment.rating && (
                        <span className="flex items-center text-[#B57C12]">
                          {'★'.repeat(Math.round(comment.rating))}
                        </span>
                      )}
                    </div>
                    <span className="text-[#7A8A70] text-[11px]">{comment.timestamp}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#43523C] leading-relaxed">
                    {comment.content}
                  </p>

                  <div className="flex items-center justify-end pt-1">
                    <button
                      onClick={() => onLikeComment(book.id, comment.id)}
                      className="flex items-center gap-1 text-[11px] font-semibold text-[#66775C] hover:text-[#25321E] px-2 py-0.5 rounded-md hover:bg-black/5 transition-colors"
                    >
                      <ThumbsUp className="w-3 h-3" />
                      <span>{comment.likes} {comment.likes === 1 ? 'like' : 'likes'}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Form to add a new comment */}
            <form onSubmit={handleCommentSubmit} className="p-4 rounded-2xl bg-white border border-[#E3DCBA] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wide text-[#3C4A34] block">
                Leave your thoughts / hot take on this book:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <input
                  type="text"
                  placeholder="Your Name / Nickname *"
                  value={commentAuthor}
                  onChange={(e) => setCommentAuthor(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-[#FFFCE0]/60 border border-[#DDD5AF] text-xs font-medium text-[#293322] focus:outline-none focus:ring-2 focus:ring-[#AABA99]"
                  required
                />
                
                <select
                  value={commentBadge}
                  onChange={(e) => setCommentBadge(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-[#FFFCE0]/60 border border-[#DDD5AF] text-xs font-medium text-[#293322] focus:outline-none focus:ring-2 focus:ring-[#AABA99]"
                >
                  <option value="Friend">Friend</option>
                  <option value="Bestie">Bestie</option>
                  <option value="Book Club">Book Club</option>
                  <option value="Audiobook Listener">Audiobook Fan</option>
                  <option value="First-time Reader">First-time Reader</option>
                </select>

                <select
                  value={commentRating}
                  onChange={(e) => setCommentRating(Number(e.target.value))}
                  className="px-3 py-2 rounded-xl bg-[#FFFCE0]/60 border border-[#DDD5AF] text-xs font-medium text-[#293322] focus:outline-none focus:ring-2 focus:ring-[#AABA99]"
                >
                  <option value={5}>5 Stars (Loved it!)</option>
                  <option value={4}>4 Stars (Really good)</option>
                  <option value={3}>3 Stars (Decent read)</option>
                  <option value={2}>2 Stars (Not for me)</option>
                  <option value={1}>1 Star (Hot debate!)</option>
                </select>
              </div>

              <textarea
                placeholder="What did you think of the characters, the ending, or my review? (No big spoilers!)..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                rows={2}
                className="w-full px-3 py-2 rounded-xl bg-[#FFFCE0]/60 border border-[#DDD5AF] text-xs sm:text-sm text-[#293322] focus:outline-none focus:ring-2 focus:ring-[#AABA99] resize-none"
                required
              />

              <div className="flex items-center justify-between">
                <span className="font-handwriting text-sm text-[#7D8F74]">
                  Be as honest as you want!
                </span>
                <button
                  type="submit"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#AABA99] hover:bg-[#97A984] text-[#1E2B19] font-bold text-xs sm:text-sm shadow-2xs hover:shadow-xs transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Post Comment</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </article>
  );
};
