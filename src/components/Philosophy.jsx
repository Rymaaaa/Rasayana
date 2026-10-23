import React from 'react';
import { motion } from 'framer-motion';
import { chefPhilosophy } from '../data/menuData';
import { Flame, Sparkles, Heart, Award } from 'lucide-react';

export default function Philosophy() {
  return (
    <section id="filosofi" className="py-24 bg-[#090a0d] relative overflow-hidden">
      {/* Decorative Kanji */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.02] text-white font-['Noto_Serif_JP'] text-[240px] font-black leading-none hidden lg:block">
        職人
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Dedikasi Sang Shokunin (Artisan)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Filosofi Dapur Kami:{' '}
            <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-rose-400 bg-clip-text text-transparent font-['Cinzel']">
              Harmoni Rasa & Ketulusan
            </span>
          </h2>
          <p className="mt-4 text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
            Nama <strong>"Rasayana"</strong> berasal dari perpaduan makna <em>Rasa</em> dan <em>Ayana</em> (perjalanan). Bagi kami, semangkuk ramen bukan sekadar makanan pengganjal lapar, melainkan perjumpaan hangat antara ketelitian teknik tradisional Jepang dengan bahan-bahan murni halal yang menyehatkan raga.
          </p>
        </div>

        {/* 2-Column Story: Photo + Craft Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Atmospheric Images */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] border border-neutral-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&w=800&q=80"
                alt="Chef preparing broth"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[11px] font-bold uppercase tracking-wider mb-2 inline-block">
                  Simmering 16 Jam Setiap Hari
                </span>
                <h3 className="text-xl font-bold">Rahasia Kuah Putih Kolagen</h3>
                <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                  Tidak ada jalan pintas dalam menghasilkan kuah ramen yang kaya dan gurih alami. Kesabaran adalah bumbu utama kami.
                </p>
              </div>
            </div>

            {/* Floating Quote Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-neutral-900/95 border border-amber-500/40 rounded-2xl p-4 shadow-2xl max-w-xs backdrop-blur-md">
              <p className="text-xs text-amber-300 italic">
                "Kami membuktikan bahwa kuah ramen tanpa mirin dan sake dapat memiliki kedalaman umami yang sama otentiknya."
              </p>
              <p className="text-[10px] text-neutral-400 mt-2 font-semibold uppercase tracking-wider">
                — Head Chef Rasayana
              </p>
            </div>
          </div>

          {/* Right Column: 3 Core Philosophies */}
          <div className="lg:col-span-7 space-y-6">
            {chefPhilosophy.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-6 rounded-3xl bg-neutral-900/60 border border-neutral-800/80 hover:border-amber-500/40 transition-all duration-300 flex items-start gap-5 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center shrink-0 text-xl font-black font-['Noto_Serif_JP'] text-amber-400 group-hover:scale-105 group-hover:border-amber-500/50 transition-all">
                  {item.kanji}
                </div>

                <div className="flex-1">
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-[10px] font-bold uppercase tracking-wider mb-1.5 border border-amber-500/20">
                    {item.highlight}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
