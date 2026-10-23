import React from 'react';
import { ShieldCheck, PhoneCall, Mail, MapPin, Heart } from 'lucide-react';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
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

export default function Footer() {
  return (
    <footer className="bg-[#07080a] text-neutral-400 border-t border-neutral-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800/60">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-rose-600 flex items-center justify-center text-xl shadow-lg border border-amber-300/30">
                🍜
              </div>
              <div>
                <span className="text-2xl font-black text-white font-['Cinzel'] tracking-wider uppercase">
                  Rasayana
                </span>
                <span className="ml-2 text-xs px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-400 font-['Noto_Serif_JP']">
                  ラサヤナ
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              Artisan ramen halal pertama yang memadukan teknik pembuatan kuah kolagen 16 jam khas Jepang dengan 100% bahan halal berkualitas tinggi tanpa kompromi kelezatan otentik.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Sertifikasi Halal MUI & BPJPH Terjamin</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navigasi Cepat</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#menu" className="hover:text-amber-400 transition-colors">Katalog Menu</a></li>
              <li><a href="#filosofi" className="hover:text-amber-400 transition-colors">Filosofi Kaldu 16 Jam</a></li>
              <li><a href="#halal" className="hover:text-amber-400 transition-colors">Jaminan Kehalalan</a></li>
              <li><a href="#ulasan" className="hover:text-amber-400 transition-colors">Ulasan Pelanggan</a></li>
              <li><a href="#order-online" className="hover:text-amber-400 transition-colors">Lokasi & Pesan Antar</a></li>
            </ul>
          </div>

          {/* Pesan Antar Online */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Pesan Antar Online</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="https://gofood.co.id" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">GoFood — Rasayana Senopati</a></li>
              <li><a href="https://food.grab.com" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">GrabFood — Rasayana Senopati</a></li>
              <li><a href="https://shopee.co.id" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">ShopeeFood — Rasayana Senopati</a></li>
              <li><a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="hover:text-green-400 transition-colors">WhatsApp Direct Takeaway</a></li>
            </ul>
          </div>

          {/* Kontak & Social Media */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Kontak Kedai</h4>
            <div className="space-y-2 text-xs text-neutral-400">
              <p className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                <span>+62 812-3456-7890</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>halo@rasayanaramen.com</span>
              </p>
              <p className="flex items-center gap-2">
                <InstagramIcon className="w-3.5 h-3.5 text-rose-400" />
                <span>@rasayana.ramen</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© 2026 Kedai Rasayana Ramen. Hak Cipta Dilindungi Undang-Undang.</p>
          <p className="flex items-center gap-1">
            <span>Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>untuk pecinta ramen sejati</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
