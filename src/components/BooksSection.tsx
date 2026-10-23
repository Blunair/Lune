import React, { useState, useMemo } from 'react';
import { Search, Filter, Sparkles, BookOpen, SlidersHorizontal, RotateCcw } from 'lucide-react';
import { Book, BookComment } from '../types';
import { BookCard } from './BookCard';

interface BooksSectionProps {
  books: Book[];
  savedBookIds: string[];
  onToggleTBR: (bookId: string) => void;
  onAddComment: (bookId: string, comment: Omit<BookComment, 'id' | 'bookId' | 'timestamp' | 'likes'>) => void;
  onLikeComment: (bookId: string, commentId: string) => void;
  onIncrementHasRead: (bookId: string) => void;
}

export const BooksSection: React.FC<BooksSectionProps> = ({
  books,
  savedBookIds,
  onToggleTBR,
  onAddComment,
  onLikeComment,
  onIncrementHasRead,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortBy, setSortBy] = useState<'featured' | 'rating' | 'pages' | 'comments'>('featured');

  const genres = useMemo(() => {
    const list = ['All'];
    books.forEach((b) => {
      if (!list.includes(b.genre)) {
        list.push(b.genre);
      }
    });
    return list;
  }, [books]);

  const filteredBooks = useMemo(() => {
    let result = books.filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.myOpinion.deepDive.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesGenre = selectedGenre === 'All' || book.genre === selectedGenre;

      return matchesSearch && matchesGenre;
    });

    if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'pages') {
      result.sort((a, b) => a.myOpinion.pageCount - b.myOpinion.pageCount);
    } else if (sortBy === 'comments') {
      result.sort((a, b) => b.comments.length - a.comments.length);
    }

    return result;
  }, [books, searchQuery, selectedGenre, sortBy]);

  return (
    <section id="books" className="py-12 sm:py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#AABA99]/25 text-[#2E3C27] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>The Main Bookshelf</span>
          </div>
          <h2 className="font-serif-book text-3xl sm:text-4xl font-bold text-[#22291D] tracking-tight">
            My Curated Book Picks &amp; Opinions
          </h2>
          <p className="text-sm sm:text-base text-[#4E5C47] leading-relaxed">
            Scroll down to read my deep dives, trigger warnings, favorite quotes, and ratings. 
            Don't forget to expand the comment drawer on any book to share your own thoughts!
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-3xl border border-[#E6DEBC] paper-shadow mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-8 relative">
              <Search className="w-4 h-4 text-[#75846E] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by title, author, keyword, or vibe..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#FFFCE0]/70 border border-[#DFD6AF] text-sm text-[#273221] placeholder-[#798873] focus:outline-none focus:ring-2 focus:ring-[#AABA99]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#75846E] hover:text-[#273221]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort Selector */}
            <div className="md:col-span-4 flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-[#75846E] shrink-0" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full py-2.5 px-3 rounded-2xl bg-[#FFFCE0]/70 border border-[#DFD6AF] text-xs sm:text-sm font-semibold text-[#273221] focus:outline-none focus:ring-2 focus:ring-[#AABA99]"
              >
                <option value="featured">Sort: Featured Picks</option>
                <option value="rating">Sort: Highest Rating</option>
                <option value="pages">Sort: Shortest (Quick Reads)</option>
                <option value="comments">Sort: Most Discussed</option>
              </select>
            </div>
          </div>

          {/* Genre Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 scrollbar-none">
            <span className="text-xs font-bold text-[#6F7F68] shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Genre:
            </span>
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedGenre === genre
                    ? 'bg-[#293623] text-[#FFFCE0] shadow-xs'
                    : 'bg-[#FFFCE0]/80 hover:bg-[#AABA99]/30 text-[#495741] border border-[#DDD3AC]'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        {/* Books List */}
        {filteredBooks.length > 0 ? (
          <div className="space-y-8">
            {filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                isSavedInTBR={savedBookIds.includes(book.id)}
                onToggleTBR={onToggleTBR}
                onAddComment={onAddComment}
                onLikeComment={onLikeComment}
                onIncrementHasRead={onIncrementHasRead}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 px-4 rounded-3xl bg-white/70 border border-[#E8E1C2] space-y-4">
            <BookOpen className="w-12 h-12 text-[#AABA99] mx-auto opacity-70" />
            <h3 className="font-serif-book text-xl font-bold text-[#2A3423]">
              No books found matching "{searchQuery}"
            </h3>
            <p className="text-sm text-[#5B6A53] max-w-md mx-auto">
              Try searching for a different keyword or reset your genre filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedGenre('All');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#AABA99] text-[#1E2B19] text-xs font-bold shadow-xs hover:bg-[#97A984]"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
