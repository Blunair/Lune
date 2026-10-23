import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BooksSection } from './components/BooksSection';
import { FriendRecommendations } from './components/FriendRecommendations';
import { CommentsSection } from './components/CommentsSection';
import { ContactSection } from './components/ContactSection';
import { SavedBooksDrawer } from './components/SavedBooksDrawer';
import { Footer } from './components/Footer';
import { 
  initialBooks, 
  initialVisitorRecs, 
  initialGuestbookComments 
} from './data/initialData';
import { Book, VisitorRecommendation, GuestbookComment, ContactMessage, BookComment } from './types';

export default function App() {
  // Books state with localStorage persistence
  const [books, setBooks] = useState<Book[]>(() => {
    try {
      const saved = localStorage.getItem('cozy_shelf_books');
      return saved ? JSON.parse(saved) : initialBooks;
    } catch {
      return initialBooks;
    }
  });

  // Visitor/Friend recommendations with localStorage persistence
  const [visitorRecs, setVisitorRecs] = useState<VisitorRecommendation[]>(() => {
    try {
      const saved = localStorage.getItem('cozy_shelf_visitor_recs');
      return saved ? JSON.parse(saved) : initialVisitorRecs;
    } catch {
      return initialVisitorRecs;
    }
  });

  // Guestbook comments with localStorage persistence
  const [guestbookComments, setGuestbookComments] = useState<GuestbookComment[]>(() => {
    try {
      const saved = localStorage.getItem('cozy_shelf_guestbook');
      return saved ? JSON.parse(saved) : initialGuestbookComments;
    } catch {
      return initialGuestbookComments;
    }
  });

  // TBR Saved Book IDs
  const [savedBookIds, setSavedBookIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('cozy_shelf_saved_books');
      return saved ? JSON.parse(saved) : ['house-cerulean-sea', 'project-hail-mary'];
    } catch {
      return ['house-cerulean-sea', 'project-hail-mary'];
    }
  });

  // Contact messages
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>(() => {
    try {
      const saved = localStorage.getItem('cozy_shelf_contact_messages');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Drawers and modals
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);
  const [isRecommendModalOpen, setIsRecommendModalOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('cozy_shelf_books', JSON.stringify(books));
    } catch (e) {
      console.error(e);
    }
  }, [books]);

  useEffect(() => {
    try {
      localStorage.setItem('cozy_shelf_visitor_recs', JSON.stringify(visitorRecs));
    } catch (e) {
      console.error(e);
    }
  }, [visitorRecs]);

  useEffect(() => {
    try {
      localStorage.setItem('cozy_shelf_guestbook', JSON.stringify(guestbookComments));
    } catch (e) {
      console.error(e);
    }
  }, [guestbookComments]);

  useEffect(() => {
    try {
      localStorage.setItem('cozy_shelf_saved_books', JSON.stringify(savedBookIds));
    } catch (e) {
      console.error(e);
    }
  }, [savedBookIds]);

  useEffect(() => {
    try {
      localStorage.setItem('cozy_shelf_contact_messages', JSON.stringify(contactMessages));
    } catch (e) {
      console.error(e);
    }
  }, [contactMessages]);

  // Handler: Add comment to a specific book
  const handleAddBookComment = (
    bookId: string,
    commentData: Omit<BookComment, 'id' | 'bookId' | 'timestamp' | 'likes'>
  ) => {
    const newComment: BookComment = {
      id: `bc-${Date.now()}`,
      bookId,
      ...commentData,
      timestamp: 'Just now',
      likes: 1,
    };

    setBooks((prev) =>
      prev.map((b) => {
        if (b.id === bookId) {
          return {
            ...b,
            comments: [newComment, ...b.comments],
          };
        }
        return b;
      })
    );
  };

  // Handler: Like a comment on a specific book
  const handleLikeBookComment = (bookId: string, commentId: string) => {
    setBooks((prev) =>
      prev.map((b) => {
        if (b.id === bookId) {
          return {
            ...b,
            comments: b.comments.map((c) =>
              c.id === commentId ? { ...c, likes: c.likes + 1 } : c
            ),
          };
        }
        return b;
      })
    );
  };

  // Handler: Increment has read count
  const handleIncrementHasRead = (bookId: string) => {
    setBooks((prev) =>
      prev.map((b) => {
        if (b.id === bookId) {
          return {
            ...b,
            hasReadCount: b.hasReadCount + 1,
          };
        }
        return b;
      })
    );
  };

  // Handler: Toggle TBR
  const handleToggleTBR = (bookId: string) => {
    setSavedBookIds((prev) => {
      const exists = prev.includes(bookId);
      const updated = exists ? prev.filter((id) => id !== bookId) : [...prev, bookId];
      
      // Also update book wantToReadCount
      setBooks((prevBooks) =>
        prevBooks.map((b) => {
          if (b.id === bookId) {
            return {
              ...b,
              wantToReadCount: exists ? Math.max(0, b.wantToReadCount - 1) : b.wantToReadCount + 1,
            };
          }
          return b;
        })
      );

      return updated;
    });
  };

  // Handler: Remove book from TBR in drawer
  const handleRemoveSavedBook = (bookId: string) => {
    handleToggleTBR(bookId);
  };

  // Handler: Clear all saved books
  const handleClearAllSaved = () => {
    setSavedBookIds([]);
  };

  // Handler: Add visitor recommendation
  const handleAddVisitorRecommendation = (
    recData: Omit<VisitorRecommendation, 'id' | 'timestamp' | 'upvotes'>
  ) => {
    const newRec: VisitorRecommendation = {
      id: `vr-${Date.now()}`,
      ...recData,
      upvotes: 1,
      timestamp: 'Just now',
    };

    setVisitorRecs((prev) => [newRec, ...prev]);
  };

  // Handler: Upvote a visitor recommendation
  const handleUpvoteRecommendation = (id: string) => {
    setVisitorRecs((prev) =>
      prev.map((r) => (r.id === id ? { ...r, upvotes: r.upvotes + 1 } : r))
    );
  };

  // Handler: Add guestbook comment
  const handleAddGuestbookComment = (
    commentData: Omit<GuestbookComment, 'id' | 'timestamp' | 'likes'>
  ) => {
    const newEntry: GuestbookComment = {
      id: `gb-${Date.now()}`,
      ...commentData,
      likes: 1,
      timestamp: 'Just now',
    };

    setGuestbookComments((prev) => [newEntry, ...prev]);
  };

  // Handler: Like a guestbook comment
  const handleLikeGuestbookComment = (id: string) => {
    setGuestbookComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, likes: c.likes + 1 } : c))
    );
  };

  // Handler: Send contact message
  const handleSendContactMessage = (msg: ContactMessage) => {
    setContactMessages((prev) => [msg, ...prev]);
  };

  const savedBooks = books.filter((b) => savedBookIds.includes(b.id));

  return (
    <div className="min-h-screen bg-[#FFFCE0] text-[#2B3326] flex flex-col selection:bg-[#FDD5DF] selection:text-[#2B3326]">
      {/* Navbar with sticky position & quick controls */}
      <Navbar
        savedCount={savedBookIds.length}
        onOpenSavedDrawer={() => setIsSavedDrawerOpen(true)}
        onOpenRecommendModal={() => setIsRecommendModalOpen(true)}
      />

      <main className="flex-1">
        {/* Home / Hero Section */}
        <Hero
          onOpenRecommendModal={() => setIsRecommendModalOpen(true)}
          totalRecsCount={books.length + visitorRecs.length}
        />

        {/* Books & Honest Opinions Section */}
        <BooksSection
          books={books}
          savedBookIds={savedBookIds}
          onToggleTBR={handleToggleTBR}
          onAddComment={handleAddBookComment}
          onLikeComment={handleLikeBookComment}
          onIncrementHasRead={handleIncrementHasRead}
        />

        {/* Friend & Community Recommendations Shelf */}
        <FriendRecommendations
          recommendations={visitorRecs}
          onAddRecommendation={handleAddVisitorRecommendation}
          onUpvoteRecommendation={handleUpvoteRecommendation}
          isModalOpen={isRecommendModalOpen}
          setIsModalOpen={setIsRecommendModalOpen}
        />

        {/* General Comments & Lounge Guestbook */}
        <CommentsSection
          comments={guestbookComments}
          onAddComment={handleAddGuestbookComment}
          onLikeComment={handleLikeGuestbookComment}
        />

        {/* Contact & Thank You Section */}
        <ContactSection onSendMessage={handleSendContactMessage} />
      </main>

      {/* TBR Saved Books Drawer */}
      <SavedBooksDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedBooks={savedBooks}
        onRemoveBook={handleRemoveSavedBook}
        onClearAll={handleClearAllSaved}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
