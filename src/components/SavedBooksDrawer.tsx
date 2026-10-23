import React, { useState } from 'react';
import { X, Bookmark, Trash2, Copy, Check, BookOpen, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Book } from '../types';

interface SavedBooksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedBooks: Book[];
  onRemoveBook: (bookId: string) => void;
  onClearAll: () => void;
}

export const SavedBooksDrawer: React.FC<SavedBooksDrawerProps> = ({
  isOpen,
  onClose,
  savedBooks,
  onRemoveBook,
  onClearAll,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyList = () => {
    if (savedBooks.length === 0) return;

    const text = savedBooks
      .map((b, i) => `${i + 1}. ${b.title} by ${b.author} (${b.genre}) — Rating: ${b.rating}★`)
      .join('\n');

    navigator.clipboard.writeText(`📚 My TBR list from The Cozy Shelf:\n\n${text}`);
    setCopied(true);
    confetti({
      particleCount: 20,
      spread: 50,
      origin: { y: 0.6 },
      colors: ['#AEC6CF', '#FDD5DF'],
    });

    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-md bg-[#FFFCE0] h-full shadow-2xl border-l-2 border-[#D8CE9F] flex flex-col justify-between p-6 overflow-y-auto">
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#E7DFBA]">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-[#AEC6CF]/40 text-[#143B4C]">
                <Bookmark className="w-5 h-5 fill-[#143B4C]" />
              </div>
              <div>
                <h3 className="font-serif-book font-bold text-xl text-[#222B1E]">
                  Your TBR Bag
                </h3>
                <p className="text-xs text-[#5E6D56]">
                  {savedBooks.length} {savedBooks.length === 1 ? 'book' : 'books'} saved for your next read
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#42503B] font-bold flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* List */}
          <div className="py-5 space-y-3">
            {savedBooks.length === 0 ? (
              <div className="text-center py-12 px-4 space-y-3">
                <BookOpen className="w-10 h-10 text-[#AABA99] mx-auto opacity-70" />
                <h4 className="font-serif-book font-bold text-base text-[#2E3B27]">
                  Your reading bag is empty!
                </h4>
                <p className="text-xs text-[#5D6B55] max-w-xs mx-auto">
                  Click the "Add to TBR (+1)" button on any book card to collect your favorites here.
                </p>
              </div>
            ) : (
              savedBooks.map((book) => (
                <div
                  key={book.id}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/90 border border-[#E7DFBC] paper-shadow"
                >
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-12 h-16 rounded-lg object-cover shadow-xs shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="font-serif-book font-bold text-sm text-[#242D1F] truncate">
                      {book.title}
                    </h5>
                    <p className="text-xs text-[#5C6B54] truncate">by {book.author}</p>
                    <span className="inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#AABA99]/25 text-[#2C3B24]">
                      {book.genre}
                    </span>
                  </div>

                  <button
                    onClick={() => onRemoveBook(book.id)}
                    className="p-1.5 rounded-lg text-[#889980] hover:text-[#B3394E] hover:bg-red-50 transition-colors"
                    title="Remove from TBR"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Footer Actions */}
        {savedBooks.length > 0 && (
          <div className="pt-4 border-t border-[#E7DFBA] space-y-2">
            <button
              onClick={handleCopyList}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#AEC6CF] hover:bg-[#97B8C4] text-[#143949] font-bold text-sm shadow-xs transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy List for iMessage / Notes</span>
                </>
              )}
            </button>

            <button
              onClick={onClearAll}
              className="w-full py-2 text-xs font-bold text-[#7A8B72] hover:text-[#323E2A] text-center"
            >
              Clear all saved books
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
