import { Book, VisitorRecommendation, GuestbookComment } from '../types';

export const initialBooks: Book[] = [
  {
    id: 'house-cerulean-sea',
    title: 'The House in the Cerulean Sea',
    author: 'TJ Klune',
    coverImage: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBmYW50YXN5JTIwbm92ZWwlMjBjb3ZlcnxlbnwxfHx8fDE3OTI3MTQ1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    genre: 'Cozy Fantasy',
    rating: 5.0,
    vibeBadge: 'Warm Cup of Chamomile Tea',
    tagline: 'The literary equivalent of a warm hug when everything in life feels too heavy.',
    myOpinion: {
      summary: 'Linus Baker is a by-the-book bureaucrat who gets sent to an island orphanage housing six classified "dangerous" magical youths and their enigmatic caretaker. What follows is pure joy.',
      deepDive: 'I started this on a gloomy Thursday after a brutal week, expecting a cute little fairytale. Instead, I stayed up until 3:30 AM grinning like an absolute fool and softly sobbing into my pillow. Klune writes found family like nobody else on earth. Arthur Parnassus and the children—especially Lucy, the tiny polite Antichrist who loves vinyl records—will take residence in your heart forever.',
      whyILovedIt: [
        'The banter between the kids is genuinely hilarious and unforced',
        'Watching Linus unlearn decades of rigid conditioning is so satisfying',
        'Arthur Parnassus is the calm, loving authority figure everyone deserved',
        'Zero stressful romance tropes—just pure wholesome mutual respect'
      ],
      friendWarning: 'You WILL want to adopt a garden gnome and buy 50 colorful vinyl records after finishing this.',
      favoriteQuote: '"You’re too precious to starve. The world needs people like you. Sometimes you just have to be reminded of it."',
      quoteAttribution: 'Arthur Parnassus to Linus',
      bestReadWhen: 'On a rainy Sunday afternoon wrapped in a chunky knit blanket with a hot matcha latte.',
      recommendedFor: 'Maya (for the soft romance) and anyone needing restoration of faith in humanity.',
      audiobookRating: '10/10 — Narrator Daniel Henning gives each child an iconic distinct accent!',
      pageCount: 396,
      tearFactor: 'Happy bittersweet sniffles at chapter 18'
    },
    wantToReadCount: 42,
    hasReadCount: 19,
    comments: [
      {
        id: 'c-cerulean-1',
        bookId: 'house-cerulean-sea',
        author: 'Maya K.',
        badge: 'Bestie',
        rating: 5,
        content: 'You literally bullied me into reading this for three weeks straight and you were 1000% right. Lucy is my favorite fictional child ever created.',
        timestamp: '2 days ago',
        likes: 12,
        tagColor: 'rose'
      },
      {
        id: 'c-cerulean-2',
        bookId: 'house-cerulean-sea',
        author: 'Julian W.',
        badge: 'Fantasy Skeptic',
        rating: 4.8,
        content: 'I usually only read hard sci-fi, but this softened my cold cynical heart. The island descriptions made me want to move to the coast tomorrow.',
        timestamp: '1 week ago',
        likes: 8,
        tagColor: 'sage'
      }
    ]
  },
  {
    id: 'project-hail-mary',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    coverImage: 'https://images.unsplash.com/photo-1529521818954-c76995518833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhZXN0aGV0aWMlMjBmYW50YXN5JTIwbm92ZWwlMjBjb3ZlcnxlbnwxfHx8fDE3OTI3MTQ1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    genre: 'Sci-Fi & Space Adventure',
    rating: 5.0,
    vibeBadge: 'Late Night Page-Turner',
    tagline: 'Fist-pumping excitement, clever problem-solving, and the most wholesome alien friendship ever written.',
    myOpinion: {
      summary: 'Ryland Grace wakes up from a coma with total amnesia on a spaceship, discovering his crewmates are dead and Earth’s sun is dying. He has to science his way out of extinction.',
      deepDive: 'I cannot say too much without spoiling the biggest joy of this book, but halfway through you meet a character named Rocky and your life changes. It has all the high-stakes problem-solving of The Martian, but with about five times more emotional resonance. Even if you think you "don’t like science fiction," trust me on this one.',
      whyILovedIt: [
        'Rocky! Amaaaaze! Fist-my-bump! (You will understand soon)',
        'Celebrates human ingenuity, scientific optimism, and curiosity',
        'Pacing is electric—every chapter ends on a cliffhanger you can’t put down',
        'Genuine laugh-out-loud moments mixed with existential dread'
      ],
      friendWarning: 'DO NOT GOOGLE ANYTHING ABOUT THIS BOOK BEFORE READING. Go in completely blind!',
      favoriteQuote: '"I am scary space monster. You are leaky space blob. We be friends."',
      quoteAttribution: 'Rocky',
      bestReadWhen: 'On a weekend when you don’t have early morning plans, because you will not sleep.',
      recommendedFor: 'Alex & Jordan who love clever puzzles, and anyone who loved The Martian.',
      audiobookRating: '11/10 MASTERPIECE — Ray Porter uses audio synths for Rocky’s chords that will blow your mind.',
      pageCount: 496,
      tearFactor: 'Unexpected heavy sob during the climax sacrifice'
    },
    wantToReadCount: 68,
    hasReadCount: 31,
    comments: [
      {
        id: 'c-phm-1',
        bookId: 'project-hail-mary',
        author: 'Jordan P.',
        badge: 'Sci-Fi Club',
        rating: 5,
        content: 'FIST MY BUMP! 🎶 The audio version is easily the best audiobook performance in the history of sound.',
        timestamp: '3 days ago',
        likes: 18,
        tagColor: 'sky'
      },
      {
        id: 'c-phm-2',
        bookId: 'project-hail-mary',
        author: 'Elena R.',
        badge: 'Casual Reader',
        rating: 5,
        content: 'Finished it in 48 hours. I had actual heart palpitations on a subway platform. Thank you for this rec!',
        timestamp: '5 days ago',
        likes: 9,
        tagColor: 'sage'
      }
    ]
  },
  {
    id: 'book-lovers',
    title: 'Book Lovers',
    author: 'Emily Henry',
    coverImage: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyZWFkaW5nJTIwbm92ZWwlMjB0ZWElMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzkyNzE0NTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    genre: 'Contemporary Romance',
    rating: 4.9,
    vibeBadge: 'Snappy Banter & Iced Coffee',
    tagline: 'Subverts every single Hallmark movie trope with wit, sisterly devotion, and irresistible chemistry.',
    myOpinion: {
      summary: 'Nora Stephens is an ambitious literary agent in NYC who is always the "ice queen girlfriend" that men dump to go marry a baker in a small town. When she visits Sunshine Falls with her sister, she bumps into her rival editor Charlie Lastra.',
      deepDive: 'Emily Henry proved she is in a league of her own here. Nora isn’t punished for being ambitious, career-driven, or sharp-tongued—in fact, Charlie loves her precisely because she wears designer heels and commands a boardroom. Beyond the fiery banter, the real love story is between Nora and her sister Libby, which made me call my sister at midnight.',
      whyILovedIt: [
        'The banter is razor sharp—zero dumb miscommunication tropes',
        'Honors women who love their careers and aren’t ashamed of it',
        'Charlie Lastra is top-tier book boyfriend material: respectful, perceptive, and witty',
        'Inside jokes about publishing, tropes, and manuscript drafts'
      ],
      friendWarning: 'Side effects include craving iced black coffee and wanting to move into a tiny bookstore.',
      favoriteQuote: '"You’re in the city and you’re in a bookstore and you’re carrying a cup of iced coffee. That’s who you are."',
      quoteAttribution: 'Charlie to Nora',
      bestReadWhen: 'Poolside or on the porch on a warm summer evening with an iced latte.',
      recommendedFor: 'Chloe (fellow corporate girlie) and anyone who loves enemies-to-lovers with real brains.',
      audiobookRating: '9.5/10 — Julia Whelan could read the phonebook and make it sexy.',
      pageCount: 384,
      tearFactor: 'A few teary smiles during the sister conversations'
    },
    wantToReadCount: 53,
    hasReadCount: 27,
    comments: [
      {
        id: 'c-bl-1',
        bookId: 'book-lovers',
        author: 'Chloe M.',
        badge: 'Work Bestie',
        rating: 5,
        content: 'Nora Stephens is literally you and Charlie is the dream. The dialogue had me kicking my feet in bed.',
        timestamp: '4 days ago',
        likes: 14,
        tagColor: 'rose'
      }
    ]
  },
  {
    id: 'seven-husbands-evelyn-hugo',
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid',
    coverImage: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxzdGFjayUyMG9mJTIwYm9va3MlMjByZWFkaW5nJTIwYWVzdGhldGljfGVufDF8fHx8MTc5MjcxNDUzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    genre: 'Historical Fiction & Drama',
    rating: 5.0,
    vibeBadge: 'Old Hollywood Glamour',
    tagline: 'I went in skeptical because of all the TikTok hype, and came out emotionally reconstructed.',
    myOpinion: {
      summary: 'Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous, scandalous life—and chooses an unknown magazine reporter, Monique Grant, to write her biography.',
      deepDive: 'I resisted reading this for months because everyone and their mother was shouting about it. Big mistake. Evelyn Hugo is one of the most mesmerizing, unapologetic, morally grey women ever penned. She tells Monique about her seven marriages, but the true central love of her life is an entirely different story. The final plot twist made me gasp out loud.',
      whyILovedIt: [
        'Evelyn never apologizes for doing whatever it took to protect the people she loved',
        'Captures 1950s–1980s Hollywood prestige, closeted romance, and sacrifice',
        'Harry Cameron is the best fictional friend ever written',
        'The emerald green dress scenes live rent-free in my mind'
      ],
      friendWarning: 'Have a box of tissues ready for the last 50 pages. I am serious.',
      favoriteQuote: '"They are just husbands. I’m Evelyn Hugo. And anyway, I think once people know the truth, they’ll be much more interested in my wife."',
      quoteAttribution: 'Evelyn Hugo',
      bestReadWhen: 'Curled up in a comfy armchair on a Friday night with a glass of pinot noir or sparkling elderflower.',
      recommendedFor: 'Elena and Sam who love complex women and cinematic drama.',
      audiobookRating: '10/10 — Full cast production with Alma Cuervo voicing Evelyn like royalty.',
      pageCount: 400,
      tearFactor: '10/10 emotional devastation and reverence'
    },
    wantToReadCount: 75,
    hasReadCount: 44,
    comments: [
      {
        id: 'c-eh-1',
        bookId: 'seven-husbands-evelyn-hugo',
        author: 'Sam T.',
        badge: 'Drama Lover',
        rating: 5,
        content: 'Harry Cameron broke me in half. I will never recover from this book and I thank you for forcing it into my hands.',
        timestamp: '6 days ago',
        likes: 19,
        tagColor: 'rose'
      }
    ]
  },
  {
    id: 'psalm-wild-built',
    title: 'A Psalm for the Wild-Built',
    author: 'Becky Chambers',
    coverImage: 'https://images.unsplash.com/photo-1614722264662-5dfcd0f5d356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxvcGVuJTIwYm9vayUyMGZsb3dlcnMlMjBjb2ZmZWUlMjBkZXNrfGVufDF8fHx8MTc5MjcxNDUzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    genre: 'Cozy Solarpunk & Hope',
    rating: 4.9,
    vibeBadge: 'Gentle Rest for the Weary Soul',
    tagline: 'Only 160 pages, but permanently rewired how I view burnout, purpose, and doing nothing.',
    myOpinion: {
      summary: 'Centuries after robots gained consciousness and peacefully walked into the wilderness, Dex, a weary tea monk who travels bicycle-carting custom herbal infusions, unexpectedly encounters a wild robot named Mosscap asking one simple question: "What do humans need?"',
      deepDive: 'Whenever my anxiety starts humming like a broken refrigerator, this is the book I pick up. It is gentle, philosophical, and intensely kind. There is no evil overlord, no villain, no ticking clock. Just two very different creatures talking about moss, tea leaves, crickets, and why feeling aimless does not mean you are broken.',
      whyILovedIt: [
        'Mosscap the robot has the charming curiosity of a golden retriever',
        'Dex’s tea blending descriptions make you want to brew loose-leaf herbs instantly',
        'Validates that you do not need to justify your existence with endless productivity',
        'Beautiful worldbuilding of a sustainable, compassionate future'
      ],
      friendWarning: 'You may end up buying three bags of peppermint chamomile tea and crying over lichen.',
      favoriteQuote: '"You do not have to have a reason for being, Dex. You are a human animal, and you are allowed to just exist."',
      quoteAttribution: 'Mosscap to Dex',
      bestReadWhen: 'Early morning out on a balcony or park bench with birds singing and steam rising from your mug.',
      recommendedFor: 'Anyone in our friend group experiencing burnout or questioning their path.',
      audiobookRating: '10/10 — Em Grosland’s voice is like silk and honey.',
      pageCount: 160,
      tearFactor: 'Gentle, cleansing tears of profound relief'
    },
    wantToReadCount: 38,
    hasReadCount: 16,
    comments: [
      {
        id: 'c-psalm-1',
        bookId: 'psalm-wild-built',
        author: 'Leo R.',
        badge: 'Tea Monk in Training',
        rating: 5,
        content: 'I read this in one sitting under an oak tree. I think it cured my Sunday scaries for the foreseeable future.',
        timestamp: '1 week ago',
        likes: 11,
        tagColor: 'sage'
      }
    ]
  },
  {
    id: 'glad-my-mom-died',
    title: "I'm Glad My Mom Died",
    author: 'Jennette McCurdy',
    coverImage: 'https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyZWFkaW5nJTIwbm92ZWwlMjB0ZWElMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzkyNzE0NTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    genre: 'Memoir & Non-Fiction',
    rating: 4.8,
    vibeBadge: 'Raw, Darkly Funny & Triumphant',
    tagline: 'One of the most razor-sharp, courageous, and unexpectedly hilarious memoirs of our generation.',
    myOpinion: {
      summary: 'Former child star Jennette McCurdy details her upbringing by an overbearing, narcissistic mother who pushed her into acting, enforced calorie restriction, and tied their identities together until her death.',
      deepDive: 'The title sounds provocative, but within three chapters you completely understand why she chose it. What amazed me most is Jennette’s literary voice—she writes in the immediate present tense of each age, so you feel the exact confusion and loyalty of a 7-year-old child who loves her mom desperately despite everything. It is heartbreaking, honest, and ultimately triumphant.',
      whyILovedIt: [
        'Jennette’s writing is surprisingly brilliant—lean, wry, and punchy',
        'Nuanced portrayal of complex grief where relief and sadness coexist',
        'Deeply insightful look at eating disorder recovery and setting boundaries',
        'Not a celebrity cash-grab; a genuine piece of brave literature'
      ],
      friendWarning: 'Content warnings for eating disorders, emotional abuse, and cancer loss.',
      favoriteQuote: '"Why do we romanticize the dead? Why can’t we be honest about who they were?"',
      quoteAttribution: 'Jennette McCurdy',
      bestReadWhen: 'On a quiet afternoon when you want an authentic, unvarnished human story.',
      recommendedFor: 'Anyone who grew up watching Nickelodeon or has ever had to untangle their sense of self from their family.',
      audiobookRating: '10/10 — Jennette reads it herself with impeccable comic timing and vulnerability.',
      pageCount: 320,
      tearFactor: 'Quiet aching lump in the throat followed by big sighs of pride for her'
    },
    wantToReadCount: 49,
    hasReadCount: 22,
    comments: [
      {
        id: 'c-gmmd-1',
        bookId: 'glad-my-mom-died',
        author: 'Rachel S.',
        badge: 'Memoir Fanatic',
        rating: 5,
        content: 'Listening to her read this on audio made me respect her so much. Truly one of the best memoirs in decades.',
        timestamp: '3 days ago',
        likes: 15,
        tagColor: 'sky'
      }
    ]
  }
];

export const initialVisitorRecs: VisitorRecommendation[] = [
  {
    id: 'vr-1',
    title: 'Tomorrow, and Tomorrow, and Tomorrow',
    author: 'Gabrielle Zevin',
    recommendedBy: 'Maya K.',
    relationship: 'College Bestie',
    genre: 'Literary & Creative Friendship',
    vibe: 'Bittersweet Creative Partnership',
    rating: 5,
    opinion: 'You guys NEED to read this! It spans 30 years of two friends designing video games together. It’s not about gaming—it’s about the intimacy of creating something with another person and all the messy ways we hurt the people we love most.',
    favoriteLine: '"To allow yourself to play with another person is no small risk. It means allowing yourself to be open, to be exposed, to be hurt."',
    upvotes: 24,
    timestamp: 'Yesterday',
    tagColor: 'rose'
  },
  {
    id: 'vr-2',
    title: 'Piranesi',
    author: 'Susanna Clarke',
    recommendedBy: 'Julian W.',
    relationship: 'Book Club Debate Partner',
    genre: 'Haunting Mystery / Fantasy',
    vibe: 'Sunlight Shining on Marble Statues',
    rating: 5,
    opinion: 'The purest, most gentle and haunting mystery. It feels like stepping into a sunlit labyrinth with ocean tides washing through ancient halls. Piranesi’s kindness and reverence for the world is something I think about every week.',
    favoriteLine: '"The Beauty of the House is immeasurable; its Kindness infinite."',
    upvotes: 19,
    timestamp: '3 days ago',
    tagColor: 'sage'
  },
  {
    id: 'vr-3',
    title: 'The Secret History',
    author: 'Donna Tartt',
    recommendedBy: 'Sophie L.',
    relationship: 'Study Buddy',
    genre: 'Dark Academia / Psychological Thriller',
    vibe: 'Fall Foliage, Wool Sweaters & Ancient Greek Drama',
    rating: 4.8,
    opinion: 'The blueprint for Dark Academia! You find out who dies in the very first sentence, yet you cannot stop turning pages to see how six pretentious classics students unraveled their own lives. Peak autumn read.',
    favoriteLine: '"Beauty is terror. Whatever we call beautiful, we quiver before it."',
    upvotes: 31,
    timestamp: '5 days ago',
    tagColor: 'sky'
  },
  {
    id: 'vr-4',
    title: 'Before the Coffee Gets Cold',
    author: 'Toshikazu Kawaguchi',
    recommendedBy: 'Sam T.',
    relationship: 'Tea & Thrift Partner',
    genre: 'Cozy Magical Realism',
    vibe: 'Nostalgic Tokyo Cafe Time Travel',
    rating: 4.7,
    opinion: 'In a small back alley in Tokyo, there is a cafe that allows customers to travel back in time, but only while their coffee is warm. Short, poignant, and makes you appreciate every second you spend with friends.',
    favoriteLine: '"Water flows from high places to low places. That is the nature of gravity. Emotions, too, seem to follow this law."',
    upvotes: 17,
    timestamp: '1 week ago',
    tagColor: 'sage'
  }
];

export const initialGuestbookComments: GuestbookComment[] = [
  {
    id: 'gb-1',
    name: 'Maya K.',
    mood: 'Crying over fictional people',
    currentBook: 'The Song of Achilles',
    message: 'Finally! A dedicated website so I don’t have to scroll up 6 months of chaotic group chat voice memos just to find the title of that sci-fi book you promised me! Bookmark added to my home screen immediately.',
    timestamp: 'Yesterday at 4:15 PM',
    likes: 16,
    tagColor: 'rose'
  },
  {
    id: 'gb-2',
    name: 'Julian W.',
    mood: 'Over-caffeinated',
    currentBook: 'Children of Time',
    message: 'The color scheme on this site is so soothing. Also, I see you gave Project Hail Mary 5 stars—Rocky supremacy forever! We need to schedule our monthly book swap meetup soon.',
    timestamp: '2 days ago',
    likes: 11,
    tagColor: 'sage'
  },
  {
    id: 'gb-3',
    name: 'Elena R.',
    mood: 'Searching for cozy vibes',
    currentBook: 'Legends & Lattes',
    message: 'Your opinion on Evelyn Hugo is so spot on. I bought my copy after you showed me your annotated pages and now it is on my sacred shelf. Keep the reviews coming!',
    timestamp: '4 days ago',
    likes: 9,
    tagColor: 'sky'
  },
  {
    id: 'gb-4',
    name: 'Sam T.',
    mood: 'In a peaceful reading trance',
    currentBook: 'A Psalm for the Wild-Built',
    message: 'Leaving a thank you for making this space! It feels like sitting in your living room with tea and books stacked everywhere.',
    timestamp: '1 week ago',
    likes: 14,
    tagColor: 'rose'
  }
];
