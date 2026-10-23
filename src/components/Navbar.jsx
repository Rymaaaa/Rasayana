import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Soup, 
  Menu as MenuIcon, 
  X, 
  ShieldCheck, 
  Clock, 
  MapPin,
  Sparkles
} from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Katalog Menu', href: '#menu' },
    { name: 'Filosofi Rasa', href: '#filosofi' },
    { name: 'Jaminan Halal', href: '#halal' },
    { name: 'Ulasan', href: '#ulasan' },
    { name: 'Lokasi & Pesan Antar', href: '#order-online' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0b0c10]/90 backdrop-blur-md border-b border-neutral-800/80 shadow-2xl py-3.5' 
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-rose-600 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300 border border-amber-300/30">
              <span className="text-xl">🍜</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-wider text-white font-['Cinzel'] uppercase">
                  Rasayana
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 font-['Noto_Serif_JP'] font-bold">
                  ラサヤナ
                </span>
              </div>
              <p className="text-[10px] tracking-widest text-amber-400/90 font-medium uppercase">
                Artisan Ramen • 100% Halal
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-300 hover:text-amber-400 transition-colors duration-200 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-rose-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Halal Badge */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-semibold shadow-inner">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Halal Resmi</span>
            </div>

            {/* Direct Delivery CTA */}
            <a
              href="#order-online"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-rose-600 text-black font-bold text-xs tracking-wider uppercase hover:shadow-lg hover:shadow-amber-500/25 hover:brightness-110 active:scale-95 transition-all duration-200"
            >
              <span>Pesan Antar Online</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-neutral-900 text-neutral-300 border border-neutral-800 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#0e0f14]/98 border-b border-neutral-800 px-5 pt-4 pb-6 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800/80">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Terverifikasi Halal • No Pork No Lard</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-neutral-200 hover:text-amber-400 py-2 border-b border-neutral-800/40"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-5 pt-3 flex flex-col gap-3">
              <a
                href="#order-online"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-amber-500 to-rose-600 text-black font-bold text-sm tracking-wider uppercase shadow-lg shadow-amber-500/20"
              >
                Pesan di Shopee & GrabFood
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
