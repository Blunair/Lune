import React from 'react';
import { BookOpen, Heart, Coffee, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FFFCE0] border-t-2 border-[#E7DFBA] pt-12 pb-16 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#EAE3C5]">
          
          {/* Brand & Message */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#AABA99] flex items-center justify-center text-[#212C1B]">
                <BookOpen className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="font-serif-book font-bold text-lg text-[#252E20]">
                The Cozy Shelf
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#4E5E48] leading-relaxed max-w-sm">
              A cozy blog made for my friends to explore my favorite books, share honest opinions, and trade endless reading recommendations.
            </p>
            <p className="font-handwriting text-base text-[#75866E]">
              "Between the pages of a book is a lovely place to be."
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#35432E]">
              Quick Navigation
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => scrollTo('#home')}
                  className="text-[#596952] hover:text-[#212B1B] font-medium"
                >
                  Home / Reading Nook
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#books')}
                  className="text-[#596952] hover:text-[#212B1B] font-medium"
                >
                  Books &amp; Honest Takes
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#community-recs')}
                  className="text-[#596952] hover:text-[#212B1B] font-medium"
                >
                  Friend Recommendations
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#comments')}
                  className="text-[#596952] hover:text-[#212B1B] font-medium"
                >
                  Comments &amp; Guestbook
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#contact')}
                  className="text-[#596952] hover:text-[#212B1B] font-medium"
                >
                  Thank You &amp; Book Swap
                </button>
              </li>
            </ul>
          </div>

          {/* Palette Showcase */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#35432E]">
              Friendly Palette
            </h4>
            <div className="grid grid-cols-2 gap-2 text-[11px] font-semibold">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-[#E4DCB7]">
                <span className="w-4 h-4 rounded-full bg-[#FFFCE0] border border-[#DDD5A8]"></span>
                <span className="text-[#3F4D38]">#FFFCE0 (Cream)</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-[#E4DCB7]">
                <span className="w-4 h-4 rounded-full bg-[#AABA99]"></span>
                <span className="text-[#3F4D38]">#AABA99 (Sage)</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-[#E4DCB7]">
                <span className="w-4 h-4 rounded-full bg-[#FDD5DF]"></span>
                <span className="text-[#3F4D38]">#FDD5DF (Blush)</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-[#E4DCB7]">
                <span className="w-4 h-4 rounded-full bg-[#AEC6CF]"></span>
                <span className="text-[#3F4D38]">#AEC6CF (Sky)</span>
              </div>
            </div>
            <p className="text-[11px] text-[#697962]">
              Crafted with warm paper textures, washi tape strips, and unconditional book love.
            </p>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6C7D65]">
          <div className="flex items-center gap-1.5">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 fill-[#FDD5DF] text-[#C04963]" />
            <span>and lots of tea for my favorite friends</span>
          </div>
          <div>
            <span>No spoilers were harmed in the making of this blog.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
