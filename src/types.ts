export interface BookComment {
  id: string;
  bookId: string;
  author: string;
  rating?: number;
  content: string;
  timestamp: string;
  likes: number;
  badge?: string; // e.g., "Bestie", "Book Club", "First time reader"
  tagColor?: 'sage' | 'rose' | 'sky';
}

export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  genre: string;
  rating: number; // e.g. 5.0
  vibeBadge: string;
  tagline: string;
  myOpinion: {
    summary: string;
    deepDive: string;
    whyILovedIt: string[];
    friendWarning?: string;
    favoriteQuote: string;
    quoteAttribution?: string;
    bestReadWhen: string;
    recommendedFor: string;
    audiobookRating?: string;
    pageCount: number;
    tearFactor?: string; // e.g., "Full box of tissues"
  };
  wantToReadCount: number;
  hasReadCount: number;
  comments: BookComment[];
}

export interface VisitorRecommendation {
  id: string;
  title: string;
  author: string;
  recommendedBy: string;
  relationship?: string; // "Friend from college", "Work bestie", "Book club pal"
  genre: string;
  vibe: string;
  rating: number;
  opinion: string;
  favoriteLine?: string;
  upvotes: number;
  timestamp: string;
  tagColor: 'sage' | 'rose' | 'sky';
}

export interface GuestbookComment {
  id: string;
  name: string;
  mood: string;
  currentBook?: string;
  message: string;
  timestamp: string;
  likes: number;
  tagColor: 'sage' | 'rose' | 'sky';
}

export interface ContactMessage {
  id: string;
  name: string;
  emailOrHandle: string;
  purpose: 'borrow' | 'recommendation' | 'say-hi' | 'book-club';
  message: string;
  favoriteTeaOrCoffee?: string;
  timestamp: string;
}
