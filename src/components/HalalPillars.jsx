import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Flame, Sparkles, HeartHandshake, CheckCircle2 } from 'lucide-react';

const pillars = [
  {
    icon: ShieldCheck,
    title: '100% Terverifikasi Halal',
    badge: 'MUI & BPJPH Standard',
    desc: 'Bebas 100% dari babi, lemak babi (lard), mirin, dan sake. Menggunakan shoyu fermentasi halal bersertifikat dan ayam potong berstandar ASUH (Aman, Sehat, Utuh, Halal).',
    color: 'emerald',
    kanji: '純真',
  },
  {
    icon: Flame,
    title: 'Kaldu Kolagen 16 Jam',
    badge: 'Slow Simmered',
    desc: 'Tulang ayam utuh dan rempah aromatik diekstrak perlahan tanpa jalan pintas. Menghasilkan kuah kental gurih alami kaya kolagen yang lembut di tenggorokan tanpa rasa enek.',
    color: 'amber',
    kanji: '濃厚',
  },
  {
    icon: Sparkles,
    title: 'Mie Segar Handmade Harian',
    badge: 'Fresh Daily 06.00 WIB',
    desc: 'Dibuat setiap pagi menggunakan tepung gandum premium. Disesuaikan dengan ketebalan dan elastisitas sempurna khas Hakata agar kuah ramen melekat di setiap suapan.',
    color: 'rose',
    kanji: '生麺',
  },
  {
    icon: HeartHandshake,
    title: 'Otentik Ramah Nusantara',
    badge: 'Authentic Soul',
    desc: 'Teknik memasak langsung diwariskan dari tradisi ramen Jepang, namun disempurnakan agar sesuai dengan lidah keluarga Indonesia yang mengutamakan cita rasa kaya bumbu.',
    color: 'amber',
    kanji: '調和',
  },
];

export default function HalalPillars() {
  return (
    <section id="halal" className="py-20 bg-[#0d0e14] relative border-y border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Dedikasi Kualitas & Kehalalan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kelezatan Jepang Tanpa Keraguan,{' '}
            <span className="bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent">
              100% Halal
            </span>
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Di Rasayana, kami meyakini bahwa hidangan istimewa lahir dari bahan murni, proses jujur, dan ketulusan hati dalam melayani setiap mangkuk.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-2xl p-6 bg-neutral-900/70 border border-neutral-800 hover:border-amber-500/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
              >
                {/* Kanji watermarked in card */}
                <div className="absolute top-4 right-4 text-2xl font-bold font-['Noto_Serif_JP'] text-neutral-700/40 select-none group-hover:text-amber-500/20 transition-colors">
                  {item.kanji}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-amber-400 group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-rose-600 group-hover:text-black transition-all duration-300 mb-5 shadow-inner">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-neutral-800 text-amber-400 border border-neutral-700/80 mb-2">
                  {item.badge}
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
