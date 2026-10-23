import React from 'react';
import { Sparkles, Coffee, BookOpen, Heart, ArrowDown, BookmarkCheck } from 'lucide-react';

interface HeroProps {
  onOpenRecommendModal: () => void;
  totalRecsCount: number;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRecommendModal, totalRecsCount }) => {
  const scrollToBooks = () => {
    const el = document.querySelector('#books');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToComments = () => {
    const el = document.querySelector('#comments');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-8 pb-14 sm:py-16 overflow-hidden">
      {/* Decorative Washi Tapes */}
      <div className="washi-tape washi-tape-pink top-3 left-6 hidden md:block"></div>
      <div className="washi-tape washi-tape-sage top-8 right-12 hidden md:block"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Welcome Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Friendly Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#AABA99]/25 border border-[#AABA99] text-[#293822] text-xs sm:text-sm font-bold">
              <span className="text-base">☕</span>
              <span>A Personal Little Reading Nook</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#AABA99]"></span>
              <span className="text-[#55664E] font-medium">Made for my friends</span>
            </div>

            <h1 className="font-serif-book text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#242C20] leading-[1.18] tracking-tight">
              Books that wrecked me, healed me, and kept me awake until{' '}
              <span className="relative inline-block text-[#3B4C33]">
                <span className="relative z-10 underline decoration-[#FDD5DF] decoration-wavy decoration-3 underline-offset-4">
                  3 AM.
                </span>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#475240] leading-relaxed">
              Whenever one of you texts me asking <em className="text-[#20271B] font-semibold">"What should I read next?"</em>, I end up sending a breathless, unhinged 10-minute voice memo. So I built this little website instead!
            </p>

            <p className="text-sm sm:text-base text-[#57644F] leading-relaxed">
              Scroll through to explore my honest, unfiltered opinions on each book, drop your own thoughts and debates in the book comments, and please recommend books back to me and everyone else!
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={scrollToBooks}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#AABA99] hover:bg-[#97A884] text-[#1E2919] font-bold text-sm sm:text-base shadow-sm hover:shadow transition-all transform active:scale-95"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore Books &amp; Opinions</span>
                <ArrowDown className="w-4 h-4 ml-0.5 animate-bounce" />
              </button>

              <button
                onClick={onOpenRecommendModal}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#FDD5DF] hover:bg-[#FBBCCE] text-[#551825] font-bold text-sm sm:text-base border border-[#F8A8BD] shadow-xs hover:shadow-sm transition-all transform active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                <span>Recommend a Book to Friends</span>
              </button>

              <button
                onClick={scrollToComments}
                className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-[#AEC6CF]/30 hover:bg-[#AEC6CF]/55 text-[#1A4253] font-bold text-sm sm:text-base border border-[#9BBECB] transition-all"
              >
                <Heart className="w-4 h-4" />
                <span>Sign Guestbook</span>
              </button>
            </div>

            {/* Friend Value Badges */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-[#54624D]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#AABA99]"></span>
                <span>Honest Friend Takes</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FDD5DF]"></span>
                <span>Zero Spoilers (Pinky Promise)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#AEC6CF]"></span>
                <span>Shared Community Shelf</span>
              </div>
            </div>
          </div>

          {/* Right Column: "My Current Reading Nook" Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-7 border-2 border-[#E5DEBC] paper-shadow">
              {/* Corner washi tape */}
              <div className="washi-tape washi-tape-sky -top-3 -right-3"></div>

              <div className="flex items-center justify-between pb-4 border-b border-[#EAE3C6]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#AABA99] animate-pulse"></div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4E5B47]">
                    Live Reading Nook Status
                  </span>
                </div>
                <span className="font-handwriting text-lg text-[#854556] font-bold">
                  updated today!
                </span>
              </div>

              {/* Status details */}
              <div className="space-y-4 pt-4">
                {/* Currently reading */}
                <div className="p-3.5 rounded-2xl bg-[#FFFCE0]/70 border border-[#E7DFBA]">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-[#AABA99]/30 text-[#2B3B22]">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wide text-[#6C7A63]">
                        Currently Devouring
                      </span>
                      <h4 className="font-serif-book font-bold text-sm text-[#232B1E]">
                        The Priory of the Orange Tree
                      </h4>
                      <p className="text-xs text-[#5D6B55]">by Samantha Shannon (Page 412 of 848)</p>
                      
                      {/* Mini progress bar */}
                      <div className="w-full bg-[#E8E1C2] h-2 rounded-full mt-2 overflow-hidden">
                        <div
                          className="bg-[#AABA99] h-full rounded-full transition-all"
                          style={{ width: '48%' }}
                        ></div>
                      </div>
                      <span className="text-[10px] text-[#78876F] font-semibold block mt-1">
                        48% complete • Dragons and court intrigue!
                      </span>
                    </div>
                  </div>
                </div>

                {/* Beverage & Vibe */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-2xl bg-[#FDD5DF]/40 border border-[#F8B3C4]">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#742436] mb-1">
                      <Coffee className="w-3.5 h-3.5" />
                      <span>Sipping On</span>
                    </div>
                    <p className="text-xs font-semibold text-[#4A1723]">
                      Iced Oat Matcha Latte with vanilla cold foam
                    </p>
                  </div>

                  <div className="p-3 rounded-2xl bg-[#AEC6CF]/35 border border-[#A1C3CE]">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#1C4656] mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Current Vibe</span>
                    </div>
                    <p className="text-xs font-semibold text-[#163744]">
                      Epic fantasy &amp; rainy window sounds
                    </p>
                  </div>
                </div>

                {/* 2025 Reading Challenge Badge */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-[#FFFDF2] border border-[#E7DFBA]">
                  <div className="flex items-center gap-2">
                    <BookmarkCheck className="w-4 h-4 text-[#AABA99]" />
                    <span className="text-xs font-bold text-[#3B4633]">2025 Reading Goal</span>
                  </div>
                  <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-[#AABA99]/25 text-[#2A3822]">
                    34 / 45 Books Read 📚
                  </span>
                </div>

                <div className="text-center pt-1">
                  <p className="font-handwriting text-base text-[#6C7B63]">
                    "A room without books is like a body without a soul." — Cicero
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
