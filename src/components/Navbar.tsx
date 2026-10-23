import React, { useState } from 'react';
import { BookOpen, Heart, MessageSquare, Bookmark, PlusCircle, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  savedCount: number;
  onOpenSavedDrawer: () => void;
  onOpenRecommendModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  savedCount,
  onOpenSavedDrawer,
  onOpenRecommendModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Books & Opinions', href: '#books' },
    { label: 'Friend Recs', href: '#community-recs' },
    { label: 'Comments', href: '#comments' },
    { label: 'Thank You & Contact', href: '#contact' },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFFCE0]/95 backdrop-blur-md border-b border-[#E6E0BD] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group text-decoration-none"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#home');
            }}
          >
            <div className="w-10 h-10 rounded-xl bg-[#AABA99] flex items-center justify-center text-[#232F1E] shadow-sm group-hover:rotate-3 transition-transform">
              <BookOpen className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif-book font-bold text-lg sm:text-xl text-[#2B3326] tracking-tight">
                  The Cozy Shelf
                </span>
                <span className="w-2 h-2 rounded-full bg-[#FDD5DF] border border-[#E9AAB8] inline-block animate-pulse"></span>
              </div>
              <p className="text-xs text-[#687560] font-medium hidden sm:block">
                Curated book opinions for my favorite humans
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="px-3 py-1.5 rounded-full text-sm font-semibold text-[#4A5741] hover:text-[#21291C] hover:bg-[#AABA99]/20 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs & TBR Bag */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Color Palette Pill preview */}
            <div className="hidden lg:flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/70 border border-[#E6E0BD] text-xs text-[#55634D]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#AABA99]" title="#AABA99 (Sage)" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FDD5DF]" title="#FDD5DF (Rose)" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#AEC6CF]" title="#AEC6CF (Sky)" />
              <span className="ml-1 text-[11px] font-medium text-[#7A8772]">friend palette</span>
            </div>

            {/* TBR / Saved Books Drawer Trigger */}
            <button
              onClick={onOpenSavedDrawer}
              className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#AEC6CF]/30 hover:bg-[#AEC6CF]/50 text-[#1B3F4F] border border-[#9EBFCA] text-xs sm:text-sm font-bold transition-all shadow-xs"
              title="View your saved books"
            >
              <Bookmark className="w-4 h-4 fill-[#1B3F4F]" />
              <span className="hidden sm:inline">My TBR</span>
              {savedCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#FDD5DF] border border-[#DE93A5] text-[#69182C] text-xs font-black flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Add Book Recommendation CTA */}
            <button
              onClick={onOpenRecommendModal}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FDD5DF] hover:bg-[#F9BFCD] text-[#5C1625] border border-[#F3A5B8] text-xs sm:text-sm font-bold shadow-xs hover:shadow-sm transition-all transform active:scale-95"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Recommend a Book</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-[#3D4734] hover:bg-[#AABA99]/20"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#E6E0BD] space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="block px-3 py-2 rounded-lg text-base font-semibold text-[#3D4734] hover:bg-[#AABA99]/20 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
