import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ShieldCheck, 
  Flame, 
  ArrowRight, 
  Star, 
  Clock, 
  Heart,
  ChevronDown,
  Truck
} from 'lucide-react';

export default function Hero({ onExploreMenu }) {
  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-[#0b0c10]">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none animate-ambient-glow" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-rose-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-amber-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative Kanji in Background */}
      <div className="absolute right-6 top-1/4 select-none pointer-events-none hidden xl:block opacity-[0.03] text-white font-['Noto_Serif_JP'] text-[180px] font-black leading-none">
        拉麺
      </div>
      <div className="absolute left-6 bottom-1/4 select-none pointer-events-none hidden xl:block opacity-[0.03] text-white font-['Noto_Serif_JP'] text-[180px] font-black leading-none">
        極上
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Prop */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Top Pill: Halal & Craft */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-rose-500/10 to-amber-500/15 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Halal Bersertifikat • No Pork, No Lard, No Mirin</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] mb-6">
              Kemurnian Rasa,{' '}
              <span className="block mt-1 bg-gradient-to-r from-amber-400 via-amber-200 to-rose-400 bg-clip-text text-transparent drop-shadow-sm font-['Cinzel']">
                Kehangatan Otentik.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light mb-8">
              Kenikmatan semangkuk ramen khas Jepang dengan kuah kaldu kolagen ayam yang direbus perlahan selama <strong className="text-amber-400 font-semibold">16 jam</strong>. Dipadukan mie handmade harian dan topping ayam chashu smokey halal pilihan.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-rose-600 text-black font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Jelajahi Katalog Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#order-online"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 border border-neutral-700/80 hover:border-amber-500/50 font-bold text-sm sm:text-base tracking-wide transition-all duration-200 flex items-center justify-center gap-2 text-center"
              >
                <Truck className="w-4 h-4 text-amber-400" />
                <span>Pesan Shopee & GrabFood</span>
              </a>
            </div>

            {/* Proof Badges Metrics */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-neutral-800/80 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-amber-400 font-black text-xl sm:text-2xl">
                  <span>4.9</span>
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400 inline" />
                </div>
                <p className="text-xs text-neutral-400 mt-0.5">850+ Ulasan Google</p>
              </div>

              <div className="text-center lg:text-left border-x border-neutral-800/80 px-2 sm:px-4">
                <div className="text-amber-400 font-black text-xl sm:text-2xl">
                  16 Jam
                </div>
                <p className="text-xs text-neutral-400 mt-0.5">Slow-Simmered Broth</p>
              </div>

              <div className="text-center lg:text-left">
                <div className="text-emerald-400 font-black text-xl sm:text-2xl flex items-center justify-center lg:justify-start gap-1">
                  <span>100%</span>
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <p className="text-xs text-neutral-400 mt-0.5">Halal Terverifikasi</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Ramen Visual with Interactive Steaming Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Glowing Backdrop Ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-rose-500/10 to-transparent rounded-full filter blur-2xl transform scale-90 pointer-events-none" />

            {/* Steaming effect elements */}
            <div className="absolute -top-12 z-20 flex gap-4 pointer-events-none">
              <div className="w-12 h-20 bg-gradient-to-t from-white/25 via-white/10 to-transparent rounded-full blur-md animate-steam-1" />
              <div className="w-16 h-28 bg-gradient-to-t from-white/30 via-white/10 to-transparent rounded-full blur-lg animate-steam-2" />
              <div className="w-10 h-24 bg-gradient-to-t from-white/20 via-white/5 to-transparent rounded-full blur-md animate-steam-3" />
            </div>

            {/* Main Ramen Bowl Card */}
            <div className="relative group rounded-3xl p-3 bg-gradient-to-b from-neutral-800/60 to-neutral-900/90 border border-neutral-700/60 shadow-2xl backdrop-blur-sm max-w-md w-full">
              <div className="relative overflow-hidden rounded-2xl aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1000&q=80"
                  alt="Rasayana Signature Tori Paitan Ramen"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Special Tag on image */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                  <span className="px-3 py-1 rounded-full bg-rose-600/90 text-white font-black text-xs tracking-wider uppercase backdrop-blur-md shadow-lg flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 fill-white" />
                    Signature Dish
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/70 border border-amber-400/40 text-amber-300 font-semibold text-xs backdrop-blur-md">
                    Rp 58.000
                  </span>
                </div>

                {/* Bottom Card Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-amber-400 text-xs font-['Noto_Serif_JP']">極上 鶏白湯ラーメン</p>
                      <h3 className="text-lg font-bold tracking-wide">Rasayana Signature Tori Paitan</h3>
                    </div>
                    <span className="text-2xl">🍜</span>
                  </div>
                  <p className="text-xs text-neutral-300 mt-1 line-clamp-1">
                    Kaldu kolagen ayam kental murni 16 jam • Ajitsuke Tamago • Aburi Torichashu
                  </p>
                </div>
              </div>

              {/* Floating Interactive Micro-Badges */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-neutral-900/95 border border-amber-500/40 rounded-2xl p-3 shadow-xl backdrop-blur-md flex items-center gap-2.5 z-30"
              >
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg">
                  🍲
                </div>
                <div>
                  <p className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">Formula Rahasia</p>
                  <p className="text-xs font-bold text-neutral-100">16 Jam Kaldu Murni</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-neutral-900/95 border border-emerald-500/40 rounded-2xl p-3 shadow-xl backdrop-blur-md flex items-center gap-2.5 z-30"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">
                  🛡️
                </div>
                <div>
                  <p className="text-[10px] text-emerald-400 uppercase tracking-wider font-bold">100% Halal</p>
                  <p className="text-xs font-bold text-neutral-100">Bebas Mirin & Sake</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[11px] tracking-widest text-neutral-400 uppercase">Scroll untuk menu</span>
        <ChevronDown className="w-4 h-4 text-amber-400 animate-bounce" />
      </div>
    </section>
  );
}
