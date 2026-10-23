import React, { useState } from 'react';
import { Heart, Mail, Sparkles, Send, Coffee, Check, BookOpen, Gift } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ContactMessage } from '../types';

interface ContactSectionProps {
  onSendMessage: (msg: ContactMessage) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onSendMessage }) => {
  const [name, setName] = useState('');
  const [emailOrHandle, setEmailOrHandle] = useState('');
  const [purpose, setPurpose] = useState<'borrow' | 'recommendation' | 'say-hi' | 'book-club'>('borrow');
  const [beverage, setBeverage] = useState('');
  const [message, setMessage] = useState('');
  const [hasSent, setHasSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    onSendMessage({
      id: `msg-${Date.now()}`,
      name: name.trim(),
      emailOrHandle: emailOrHandle.trim(),
      purpose,
      message: message.trim(),
      favoriteTeaOrCoffee: beverage.trim() || undefined,
      timestamp: 'Just now',
    });

    confetti({
      particleCount: 40,
      spread: 70,
      origin: { y: 0.75 },
      colors: ['#FDD5DF', '#AABA99', '#AEC6CF'],
    });

    setHasSent(true);
    setName('');
    setEmailOrHandle('');
    setBeverage('');
    setMessage('');

    setTimeout(() => {
      setHasSent(false);
    }, 6000);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Heartfelt Thank You Note */}
        <div className="relative bg-[#FFFDF2] rounded-3xl p-7 sm:p-10 border-2 border-[#E5DEBD] paper-shadow mb-12">
          {/* Corner Washi Tapes */}
          <div className="washi-tape washi-tape-pink -top-3 left-10"></div>
          <div className="washi-tape washi-tape-sage -top-3 right-10"></div>

          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDD5DF] text-[#78233C] text-xs font-black uppercase tracking-wider border border-[#F8B3C3]">
              <Heart className="w-3.5 h-3.5 fill-[#78233C]" />
              <span>To My Favorite Humans</span>
            </div>

            <h2 className="font-serif-book text-3xl sm:text-4xl font-extrabold text-[#242D1E] tracking-tight">
              A Love Letter &amp; Massive Thank You
            </h2>

            <p className="text-base sm:text-lg text-[#3E4C38] leading-relaxed">
              To everyone who has ever traded dog-eared paperbacks with me, tolerated my breathless midnight voice memos when a plot twist landed, or listened to me ramble about fictional people like they were our mutual friends: <strong>thank you from the bottom of my heart.</strong>
            </p>

            <p className="text-sm sm:text-base text-[#57684E] leading-relaxed">
              Reading together has turned solitary pages into shared adventures. This little website is my way of giving back all the cozy warmth and laughter you’ve given me.
            </p>

            {/* Personalized Friend Shoutout Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-4 text-left">
              <div className="p-3.5 rounded-2xl bg-[#FDD5DF]/50 border border-[#F8B3C3] space-y-1">
                <span className="text-xs font-black text-[#6F1B2F] flex items-center gap-1.5">
                  <span>☕</span> To Maya
                </span>
                <p className="text-xs text-[#521724]">
                  For introducing me to romance books and celebrating every fictional wedding.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#AABA99]/30 border border-[#ABC19B] space-y-1">
                <span className="text-xs font-black text-[#2A3F21] flex items-center gap-1.5">
                  <span>🪐</span> To Julian
                </span>
                <p className="text-xs text-[#304826]">
                  For testing wild sci-fi theories with me and never making fun of my cry-breaks.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#AEC6CF]/35 border border-[#9DC0CE] space-y-1">
                <span className="text-xs font-black text-[#173F51] flex items-center gap-1.5">
                  <span>🌿</span> To Sam
                </span>
                <p className="text-xs text-[#194558]">
                  For returning borrowed books with pressed wildflowers as temporary bookmarks.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FFFCE0] border border-[#E4DCAE] space-y-1">
                <span className="text-xs font-black text-[#4B5A42] flex items-center gap-1.5">
                  <span>✨</span> To Every Visitor
                </span>
                <p className="text-xs text-[#4F5F45]">
                  For spending five minutes here in my happy corner. May your next book be a 5-star read!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact and Book Swap Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#AABA99]/25 text-[#2C3B24] text-xs font-bold uppercase tracking-wider">
              <Mail className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>

            <h3 className="font-serif-book text-2xl sm:text-3xl font-bold text-[#232B1E] leading-snug">
              Borrow a Book, Request a Rec, or Plan a Reading Picnic
            </h3>

            <p className="text-sm sm:text-base text-[#4C5B45] leading-relaxed">
              My physical bookshelf is always open to friends! If you see a book on here you want to borrow, or if you need a hyper-specific recommendation for your upcoming vacation, send me a ping right here.
            </p>

            <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-[#485842]">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#AABA99]" />
                <span>Physical book loans come with a fresh tea bag &amp; cute sticky tabs</span>
              </div>
              <div className="flex items-center gap-2">
                <Coffee className="w-4 h-4 text-[#FDD5DF]" />
                <span>Always down for iced coffee + park reading sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#AEC6CF]" />
                <span>Quick replies guaranteed via our group chat or email</span>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white/95 rounded-3xl p-6 sm:p-8 border-2 border-[#E5DEBD] paper-shadow">
              
              {hasSent ? (
                <div className="p-8 text-center space-y-3 bg-[#FFFCE0]/70 rounded-2xl border border-[#DFD6AF] animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-[#AABA99] text-[#24331E] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h4 className="font-serif-book font-bold text-xl text-[#232B1E]">
                    Note Received! Thank you friend! 💌
                  </h4>
                  <p className="text-sm text-[#50604A]">
                    I just saved your message and will text/reply back with your book or rec as soon as I finish my current chapter!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-[#313E2B] mb-1">Your Name *</label>
                      <input
                        type="text"
                        placeholder="e.g. Maya"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-3 py-2.5 rounded-xl bg-[#FFFCE0]/60 border border-[#DDD4B0] text-[#222B1D] focus:outline-none focus:ring-2 focus:ring-[#AABA99]"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[#313E2B] mb-1">Email or Phone / Handle *</label>
                      <input
                        type="text"
                        placeholder="e.g. maya@email.com or @maya"
                        value={emailOrHandle}
                        onChange={(e) => setEmailOrHandle(e.target.value)}
                        required
                        className="w-full px-3 py-2.5 rounded-xl bg-[#FFFCE0]/60 border border-[#DDD4B0] text-[#222B1D] focus:outline-none focus:ring-2 focus:ring-[#AABA99]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-[#313E2B] mb-1">What’s this about?</label>
                      <select
                        value={purpose}
                        onChange={(e) => setPurpose(e.target.value as any)}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#FFFCE0]/60 border border-[#DDD4B0] text-[#222B1D] focus:outline-none focus:ring-2 focus:ring-[#AABA99]"
                      >
                        <option value="borrow">Can I borrow a physical copy?</option>
                        <option value="recommendation">I need a personalized book rec!</option>
                        <option value="book-club">Let's plan a park reading picnic</option>
                        <option value="say-hi">Just saying hi &amp; sending love</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-[#313E2B] mb-1">Your drink order (just in case!)</label>
                      <input
                        type="text"
                        placeholder="e.g. Iced oat vanilla latte"
                        value={beverage}
                        onChange={(e) => setBeverage(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#FFFCE0]/60 border border-[#DDD4B0] text-[#222B1D] focus:outline-none focus:ring-2 focus:ring-[#AABA99]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-[#313E2B] mb-1">Your Message *</label>
                    <textarea
                      rows={3}
                      placeholder="Which book do you want to borrow, or what genre/vibe are you looking for?..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="w-full px-3 py-2.5 rounded-xl bg-[#FFFCE0]/60 border border-[#DDD4B0] text-[#222B1D] focus:outline-none focus:ring-2 focus:ring-[#AABA99] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#AABA99] hover:bg-[#97A984] text-[#1E2B19] font-bold text-sm sm:text-base shadow-xs hover:shadow transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send to My Shelf Inbox</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
