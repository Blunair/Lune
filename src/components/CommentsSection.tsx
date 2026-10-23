import React, { useState } from 'react';
import { MessageSquare, Heart, Send, Sparkles, BookOpen, Smile } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GuestbookComment } from '../types';

interface CommentsSectionProps {
  comments: GuestbookComment[];
  onAddComment: (comment: Omit<GuestbookComment, 'id' | 'timestamp' | 'likes'>) => void;
  onLikeComment: (commentId: string) => void;
}

export const CommentsSection: React.FC<CommentsSectionProps> = ({
  comments,
  onAddComment,
  onLikeComment,
}) => {
  const [name, setName] = useState('');
  const [mood, setMood] = useState('Happy Bookworm');
  const [currentBook, setCurrentBook] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const colors: ('rose' | 'sage' | 'sky')[] = ['rose', 'sage', 'sky'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    onAddComment({
      name: name.trim(),
      mood: mood.trim() || 'Cozy Reader',
      currentBook: currentBook.trim() || undefined,
      message: message.trim(),
      tagColor: randomColor,
    });

    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#AABA99', '#FDD5DF', '#AEC6CF'],
    });

    setName('');
    setCurrentBook('');
    setMessage('');
  };

  return (
    <section id="comments" className="py-12 sm:py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#AEC6CF]/35 text-[#183F51] border border-[#96B9C6] text-xs font-extrabold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Friend Guestbook &amp; Banter</span>
          </div>
          <h2 className="font-serif-book text-3xl sm:text-4xl font-bold text-[#232B1E] tracking-tight">
            The Reading Lounge &amp; Comments
          </h2>
          <p className="text-sm sm:text-base text-[#4E5C47]">
            Leave a note in our friend guestbook! Tell me which review made you laugh, what you’re currently reading, or request my next review.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Sign the Guestbook Form */}
          <div className="lg:col-span-5">
            <div className="relative bg-white/90 rounded-3xl p-6 sm:p-7 border-2 border-[#E3DCBD] paper-shadow">
              {/* Washi tape */}
              <div className="washi-tape washi-tape-pink -top-3 left-6"></div>

              <div className="flex items-center gap-2.5 pb-4 border-b border-[#EBE4C7]">
                <div className="p-2 rounded-xl bg-[#FDD5DF] text-[#6E1C2E]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif-book font-bold text-lg text-[#252D20]">
                    Sign the Guestbook
                  </h3>
                  <p className="text-xs text-[#6A7863]">
                    Say hi to the group and share your reading mood
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 pt-4 text-xs sm:text-sm">
                <div>
                  <label className="block font-bold text-[#34412D] mb-1">Your Name / Nickname *</label>
                  <input
                    type="text"
                    placeholder="e.g. Maya or Sam"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-3 py-2 rounded-xl bg-[#FFFCE0]/70 border border-[#DDD4B0] text-[#222B1D] focus:outline-none focus:ring-2 focus:ring-[#AABA99]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-[#34412D] mb-1">Your Current Mood</label>
                    <select
                      value={mood}
                      onChange={(e) => setMood(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[#FFFCE0]/70 border border-[#DDD4B0] text-[#222B1D] focus:outline-none focus:ring-2 focus:ring-[#AABA99]"
                    >
                      <option value="Happy Bookworm">Happy Bookworm 🐛</option>
                      <option value="Crying over fictional people">Crying over fictional people 😭</option>
                      <option value="Over-caffeinated">Over-caffeinated ☕</option>
                      <option value="In a reading slump">In a reading slump 💤</option>
                      <option value="Peaceful tea trance">Peaceful tea trance 🍵</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-[#34412D] mb-1">What you're reading now</label>
                    <input
                      type="text"
                      placeholder="e.g. Yellowface"
                      value={currentBook}
                      onChange={(e) => setCurrentBook(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[#FFFCE0]/70 border border-[#DDD4B0] text-[#222B1D] focus:outline-none focus:ring-2 focus:ring-[#AABA99]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#34412D] mb-1">Your Message / Banter *</label>
                  <textarea
                    rows={3}
                    placeholder="Drop your thoughts, request a book review, or say hello..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full px-3 py-2 rounded-xl bg-[#FFFCE0]/70 border border-[#DDD4B0] text-[#222B1D] focus:outline-none focus:ring-2 focus:ring-[#AABA99] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#AABA99] hover:bg-[#97A984] text-[#1E2B19] font-bold shadow-xs hover:shadow transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Post to Guestbook</span>
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: List of Guestbook Messages */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between px-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5A6852]">
                Recent Friend Messages ({comments.length})
              </span>
              <span className="font-handwriting text-base text-[#7B8B73]">
                all friend notes stay saved!
              </span>
            </div>

            <div className="space-y-3.5">
              {comments.map((entry) => {
                const isRose = entry.tagColor === 'rose';
                const isSage = entry.tagColor === 'sage';
                const pillBg = isRose ? 'bg-[#FDD5DF]' : isSage ? 'bg-[#AABA99]/30' : 'bg-[#AEC6CF]/35';
                const pillBorder = isRose ? 'border-[#F8B3C3]' : isSage ? 'border-[#ADC09C]' : 'border-[#9FC1CE]';
                const pillText = isRose ? 'text-[#6D1B2D]' : isSage ? 'text-[#2D3F23]' : 'text-[#194254]';

                return (
                  <div
                    key={entry.id}
                    className="bg-white/85 rounded-2xl p-5 border border-[#E4DCBA] paper-shadow space-y-2.5 transition-all hover:bg-white"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#242D1E] text-sm sm:text-base">
                          {entry.name}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${pillBg} ${pillBorder} ${pillText}`}>
                          {entry.mood}
                        </span>
                      </div>
                      <span className="text-[11px] text-[#7C8D75]">{entry.timestamp}</span>
                    </div>

                    {entry.currentBook && (
                      <div className="flex items-center gap-1.5 text-xs text-[#52624B]">
                        <BookOpen className="w-3.5 h-3.5 text-[#AABA99]" />
                        <span>Currently reading: <strong className="text-[#2B3524]">{entry.currentBook}</strong></span>
                      </div>
                    )}

                    <p className="text-xs sm:text-sm text-[#3E4D38] leading-relaxed">
                      "{entry.message}"
                    </p>

                    <div className="flex items-center justify-end pt-1">
                      <button
                        onClick={() => onLikeComment(entry.id)}
                        className="flex items-center gap-1.5 text-xs font-bold text-[#637459] hover:text-[#212C1A] px-2.5 py-1 rounded-lg hover:bg-[#AABA99]/15 transition-colors"
                      >
                        <Heart className="w-3.5 h-3.5 fill-[#FDD5DF] text-[#C65D74]" />
                        <span>{entry.likes} {entry.likes === 1 ? 'love' : 'loves'}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
