import React, { useState } from 'react';
import { Sparkles, PlusCircle, ThumbsUp, Star, Quote, Heart, BookMarked, User } from 'lucide-react';
import confetti from 'canvas-confetti';
import { VisitorRecommendation } from '../types';

interface FriendRecommendationsProps {
  recommendations: VisitorRecommendation[];
  onAddRecommendation: (rec: Omit<VisitorRecommendation, 'id' | 'timestamp' | 'upvotes'>) => void;
  onUpvoteRecommendation: (id: string) => void;
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}

export const FriendRecommendations: React.FC<FriendRecommendationsProps> = ({
  recommendations,
  onAddRecommendation,
  onUpvoteRecommendation,
  isModalOpen,
  setIsModalOpen,
}) => {
  // Form states
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [recommendedBy, setRecommendedBy] = useState('');
  const [relationship, setRelationship] = useState('Friend');
  const [genre, setGenre] = useState('');
  const [vibe, setVibe] = useState('');
  const [rating, setRating] = useState(5);
  const [opinion, setOpinion] = useState('');
  const [favoriteLine, setFavoriteLine] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !author.trim() || !recommendedBy.trim() || !opinion.trim()) {
      return;
    }

    const tagColors: ('rose' | 'sage' | 'sky')[] = ['rose', 'sage', 'sky'];
    const randomColor = tagColors[Math.floor(Math.random() * tagColors.length)];

    onAddRecommendation({
      title: title.trim(),
      author: author.trim(),
      recommendedBy: recommendedBy.trim(),
      relationship: relationship.trim() || 'Bookworm Friend',
      genre: genre.trim() || 'General Fiction',
      vibe: vibe.trim() || 'Must-Read Energy',
      rating,
      opinion: opinion.trim(),
      favoriteLine: favoriteLine.trim() || undefined,
      tagColor: randomColor,
    });

    confetti({
      particleCount: 50,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#AABA99', '#FDD5DF', '#AEC6CF'],
    });

    // Reset form
    setTitle('');
    setAuthor('');
    setRecommendedBy('');
    setRelationship('Friend');
    setGenre('');
    setVibe('');
    setRating(5);
    setOpinion('');
    setFavoriteLine('');
    setIsModalOpen(false);
  };

  return (
    <section id="community-recs" className="py-12 sm:py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDD5DF] text-[#69182C] border border-[#F8B3C3] text-xs font-extrabold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Friend Exchange</span>
            </div>
            <h2 className="font-serif-book text-3xl sm:text-4xl font-bold text-[#232B1E] tracking-tight">
              Books You Recommend to Me &amp; Everyone
            </h2>
            <p className="text-sm sm:text-base text-[#4E5B48]">
              This isn't a one-way street! If you have a book that kept you up all night, drop it here so other friends and I can add it to our TBR lists.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="self-start md:self-auto flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#FDD5DF] hover:bg-[#F9BFCD] text-[#561423] font-bold text-sm sm:text-base border border-[#F3A5B8] shadow-xs hover:shadow-sm transition-all transform active:scale-95"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Add Your Recommendation</span>
          </button>
        </div>

        {/* Grid of Community Recommendations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendations.map((rec) => {
            const isRose = rec.tagColor === 'rose';
            const isSage = rec.tagColor === 'sage';
            const borderCol = isRose ? 'border-[#F8B3C3]' : isSage ? 'border-[#BDCEAD]' : 'border-[#ABC7D1]';
            const bgHeader = isRose ? 'bg-[#FDD5DF]/40' : isSage ? 'bg-[#AABA99]/25' : 'bg-[#AEC6CF]/30';

            return (
              <div
                key={rec.id}
                className={`relative bg-white/90 rounded-3xl border-2 ${borderCol} paper-shadow paper-shadow-hover p-6 flex flex-col justify-between transition-all`}
              >
                <div className="space-y-3.5">
                  {/* Top Bar: Genre & Rating */}
                  <div className="flex items-center justify-between gap-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-extrabold uppercase tracking-wide ${bgHeader} text-[#2A3623]`}>
                      {rec.genre}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-bold text-[#D99A26]">
                      <Star className="w-3.5 h-3.5 fill-[#D99A26]" />
                      <span>{rec.rating} / 5</span>
                    </div>
                  </div>

                  {/* Book Title & Author */}
                  <div>
                    <h3 className="font-serif-book font-bold text-xl text-[#222B1E] leading-tight">
                      {rec.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#5B6B53]">
                      by <span className="text-[#2C3725]">{rec.author}</span>
                    </p>
                  </div>

                  {/* Recommended by badge */}
                  <div className="flex items-center gap-2 text-xs text-[#44523C] bg-[#FFFCE0]/70 p-2.5 rounded-xl border border-[#ECE4C3]">
                    <User className="w-3.5 h-3.5 text-[#AABA99]" />
                    <span>
                      Recommended by <strong className="text-[#202919]">{rec.recommendedBy}</strong>
                      {rec.relationship && <span className="text-[#67775F]"> ({rec.relationship})</span>}
                    </span>
                  </div>

                  {/* Friend review / opinion */}
                  <p className="text-xs sm:text-sm text-[#3E4C37] leading-relaxed">
                    "{rec.opinion}"
                  </p>

                  {/* Favorite line / quote if present */}
                  {rec.favoriteLine && (
                    <div className="flex items-start gap-2 p-3 rounded-xl bg-[#FFFDF4] border border-[#EBE2BD] text-xs italic text-[#4A5742]">
                      <Quote className="w-3.5 h-3.5 text-[#AABA99] shrink-0 mt-0.5 rotate-180" />
                      <span>{rec.favoriteLine}</span>
                    </div>
                  )}

                  {rec.vibe && (
                    <div className="text-[11px] font-bold text-[#4B5E41]">
                      🌿 Vibe: <span className="font-medium text-[#5E7154]">{rec.vibe}</span>
                    </div>
                  )}
                </div>

                {/* Bottom Upvote & Timestamp */}
                <div className="mt-5 pt-3 border-t border-[#ECE5C6] flex items-center justify-between">
                  <span className="text-[11px] text-[#7A8A71]">{rec.timestamp}</span>

                  <button
                    onClick={() => {
                      onUpvoteRecommendation(rec.id);
                      confetti({
                        particleCount: 15,
                        spread: 40,
                        origin: { y: 0.75 },
                        colors: ['#AABA99', '#AEC6CF'],
                      });
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FFFCE0] hover:bg-[#AABA99]/20 border border-[#DBD2AA] text-xs font-bold text-[#32402A] transition-colors"
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>Adding to my TBR ({rec.upvotes})</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Adding a Recommendation */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fadeIn">
            <div className="relative w-full max-w-lg bg-[#FFFCE0] rounded-3xl p-6 sm:p-8 border-2 border-[#D7CCA0] shadow-2xl max-h-[90vh] overflow-y-auto">
              
              {/* Corner washi tape */}
              <div className="washi-tape washi-tape-sage -top-3 left-8"></div>

              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E6DEBC]">
                <div>
                  <h3 className="font-serif-book font-bold text-2xl text-[#242C1E]">
                    Recommend a Book
                  </h3>
                  <p className="text-xs text-[#5E6D56]">
                    Share your favorite read with our friends!
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/70 hover:bg-white text-[#4A5741] font-bold flex items-center justify-center"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-[#323E2A] mb-1">Book Title *</label>
                    <input
                      type="text"
                      placeholder="e.g. Piranesi"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#DDD3AA] text-[#242D1D] focus:outline-none focus:ring-2 focus:ring-[#AABA99]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#323E2A] mb-1">Author *</label>
                    <input
                      type="text"
                      placeholder="e.g. Susanna Clarke"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      required
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#DDD3AA] text-[#242D1D] focus:outline-none focus:ring-2 focus:ring-[#AABA99]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-[#323E2A] mb-1">Your Name / Nickname *</label>
                    <input
                      type="text"
                      placeholder="e.g. Maya K."
                      value={recommendedBy}
                      onChange={(e) => setRecommendedBy(e.target.value)}
                      required
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#DDD3AA] text-[#242D1D] focus:outline-none focus:ring-2 focus:ring-[#AABA99]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#323E2A] mb-1">Who are you to me?</label>
                    <input
                      type="text"
                      placeholder="e.g. College roommate, Book club pal"
                      value={relationship}
                      onChange={(e) => setRelationship(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#DDD3AA] text-[#242D1D] focus:outline-none focus:ring-2 focus:ring-[#AABA99]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-[#323E2A] mb-1">Genre</label>
                    <input
                      type="text"
                      placeholder="e.g. Cozy Mystery, Dark Academia"
                      value={genre}
                      onChange={(e) => setGenre(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#DDD3AA] text-[#242D1D] focus:outline-none focus:ring-2 focus:ring-[#AABA99]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#323E2A] mb-1">Your Rating</label>
                    <select
                      value={rating}
                      onChange={(e) => setRating(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#DDD3AA] text-[#242D1D] focus:outline-none focus:ring-2 focus:ring-[#AABA99]"
                    >
                      <option value={5}>5 Stars (Must read right now)</option>
                      <option value={4.5}>4.5 Stars (So wonderful)</option>
                      <option value={4}>4 Stars (Really enjoyed it)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#323E2A] mb-1">Reading Vibe / Mood</label>
                  <input
                    type="text"
                    placeholder="e.g. Sunday morning with cinnamon toast & rain"
                    value={vibe}
                    onChange={(e) => setVibe(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#DDD3AA] text-[#242D1D] focus:outline-none focus:ring-2 focus:ring-[#AABA99]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#323E2A] mb-1">
                    Why should we read it? Your take: *
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what made you love this book, who should read it, and how it made you feel..."
                    value={opinion}
                    onChange={(e) => setOpinion(e.target.value)}
                    required
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#DDD3AA] text-[#242D1D] focus:outline-none focus:ring-2 focus:ring-[#AABA99] resize-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#323E2A] mb-1">Favorite Quote / Line (Optional)</label>
                  <input
                    type="text"
                    placeholder='"The beauty of the house is immeasurable..."'
                    value={favoriteLine}
                    onChange={(e) => setFavoriteLine(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#DDD3AA] text-[#242D1D] focus:outline-none focus:ring-2 focus:ring-[#AABA99]"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 rounded-xl bg-transparent hover:bg-black/5 text-[#54624D] font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-[#AABA99] hover:bg-[#97A984] text-[#1E2B19] font-bold shadow-xs hover:shadow transition-all"
                  >
                    Publish to Shelf ✨
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
