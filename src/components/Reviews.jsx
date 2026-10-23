import React from 'react';
import { motion } from 'framer-motion';
import { reviews } from '../data/menuData';
import { Star, MessageSquareQuote, CheckCircle, Camera } from 'lucide-react';

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Reviews() {
  return (
    <section id="ulasan" className="py-24 bg-[#0b0c10] relative border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>Suara Pelanggan Setia</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Cerita Dari{' '}
              <span className="bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent font-['Cinzel']">
                Meja Makan
              </span>
            </h2>
          </div>

          {/* Rating Summary Card */}
          <div className="flex items-center gap-4 bg-neutral-900/90 border border-neutral-800 p-4 rounded-2xl shadow-xl">
            <div className="text-center pr-4 border-r border-neutral-800">
              <p className="text-3xl font-black text-amber-400">4.9</p>
              <div className="flex items-center gap-0.5 justify-center mt-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-white">Google Maps Review</p>
              <p className="text-[11px] text-neutral-400 mt-0.5">Berdasarkan 850+ ulasan nyata</p>
              <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-medium mt-1">
                <CheckCircle className="w-3 h-3" />
                98% Rekomendasi Positif
              </span>
            </div>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="p-6 rounded-3xl bg-neutral-900/60 border border-neutral-800/90 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] text-neutral-400 font-medium">{rev.date}</span>
                </div>

                {/* Comment quote */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-800/80">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-11 h-11 rounded-full object-cover border border-amber-500/30"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                  <p className="text-[11px] text-neutral-400">{rev.role}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Social Instagram Tag Invitation */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-rose-600 flex items-center justify-center text-white">
              <InstagramIcon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Bagikan Momen Hangatmu di Rasayana</h4>
              <p className="text-xs text-neutral-400">Tag <strong>@rasayana.ramen</strong> & hashtag <strong>#RasayanaHalalRamen</strong> untuk kesempatan voucher semangkuk ramen gratis tiap minggu!</p>
            </div>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-bold text-neutral-200 hover:text-white transition-colors shrink-0"
          >
            Ikuti di Instagram
          </a>
        </div>

      </div>
    </section>
  );
}
