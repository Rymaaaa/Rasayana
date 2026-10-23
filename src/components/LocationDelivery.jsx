import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  ExternalLink, 
  Copy, 
  Check, 
  ShieldCheck, 
  Flame, 
  Truck, 
  PackageCheck, 
  Sparkles,
  ShoppingBag,
  Star
} from 'lucide-react';

// Custom ShopeeFood Icon
const ShopeeIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.5 7.5h-2.25c-.28-2.52-2.38-4.5-4.97-4.5s-4.69 1.98-4.97 4.5H5.06c-.86 0-1.56.7-1.56 1.56v11.38c0 .86.7 1.56 1.56 1.56h14.44c.86 0 1.56-.7 1.56-1.56V9.06c0-.86-.7-1.56-1.56-1.56zm-7.22-3c1.74 0 3.16 1.3 3.44 3H9.84c.28-1.7 1.7-3 3.44-3zm7.22 14.5H5.06V9.06h2.25v1.5c0 .41.34.75.75.75s.75-.34.75-.75v-1.5h6.88v1.5c0 .41.34.75.75.75s.75-.34.75-.75v-1.5h2.25v9.94z"/>
    <path d="M12.28 12.19c-.94 0-1.47.45-1.47 1.05 0 1.13 2.5.83 2.5 2.45 0 .97-.84 1.56-1.97 1.56-.88 0-1.63-.33-1.95-.73l.63-.82c.28.34.8.59 1.34.59.57 0 .94-.27.94-.65 0-1.12-2.5-.78-2.5-2.45 0-.96.8-1.58 1.93-1.58.78 0 1.44.27 1.76.6l-.61.8c-.28-.27-.66-.42-1.08-.42z"/>
  </svg>
);

// Custom GrabFood Icon
const GrabIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93V18h-2v-1.07c-2.83-.48-5-2.94-5-5.93h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.99-2.17 5.45-5 5.93zM8.5 11C7.67 11 7 10.33 7 9.5S7.67 8 8.5 8s1.5.67 1.5 1.5S9.33 11 8.5 11zm7 0c-.83 0-1.5-.67-1.5-1.5S14.67 8 15.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
  </svg>
);

export default function LocationDelivery() {
  const [copied, setCopied] = useState(false);
  const address = 'Jl. Senopati Raya No. 45, Kebayoran Baru, Jakarta Selatan 12190';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="order-online" className="py-24 bg-[#0d0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Truck className="w-3.5 h-3.5" />
            <span>Pesan Antar Online & Kunjungan Kedai</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Hangat Sampai di Rumah,{' '}
            <span className="bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent font-['Cinzel']">
              Pesan Antar Mudah
            </span>
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Tidak sempat datang langsung ke kedai? Rasayana hadir di <strong>ShopeeFood</strong> dan <strong>GrabFood</strong> dengan jaminan kemasan kuah & mie terpisah agar tetap hangat dan kenyal sempurna.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Jam Buka & Lokasi Dine-In */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Operational Hours Card */}
            <div className="p-6 rounded-3xl bg-neutral-900/90 border border-neutral-800 shadow-xl space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-400" />
                <span>Jam Buka & Operasional Kedai</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-2xl bg-neutral-950 border border-neutral-800/80 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white">Sesi Makan Siang (Lunch)</p>
                    <p className="text-[11px] text-neutral-400 mt-0.5">Senin – Minggu</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold text-xs">
                    11:00 – 15:00 WIB
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-neutral-950 border border-neutral-800/80 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white">Sesi Makan Malam (Dinner)</p>
                    <p className="text-[11px] text-neutral-400 mt-0.5">Senin – Jumat</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold text-xs">
                    17:00 – 22:00 WIB
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-neutral-950 border border-neutral-800/80 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white">Akhir Pekan (Weekend Special)</p>
                    <p className="text-[11px] text-neutral-400 mt-0.5">Sabtu & Minggu Non-Stop</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-rose-600/20 border border-rose-500/30 text-rose-300 font-bold text-xs">
                    11:00 – 22:30 WIB
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-neutral-500 italic">
                *Pesanan online GrabFood & ShopeeFood buka setiap hari mengikuti jam dapur.
              </p>
            </div>

            {/* Address & Navigation Card */}
            <div className="p-6 rounded-3xl bg-neutral-900/90 border border-neutral-800 shadow-xl space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-rose-500" />
                <span>Alamat Kedai (Dine-In)</span>
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {address}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="px-3.5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-neutral-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Tersalin!' : 'Salin Alamat'}</span>
                </button>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                </a>

                <a
                  href="https://waze.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span>Waze</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct ShopeeFood & GrabFood Ordering Platforms */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* GrabFood Official Card */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#00381e]/90 via-neutral-900/95 to-neutral-900 border border-emerald-500/40 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-[#00B14F] text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <GrabIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-black text-white">GrabFood</h3>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold uppercase tracking-wider border border-emerald-500/40">
                        Super Partner
                      </span>
                    </div>
                    <p className="text-xs text-neutral-300 font-medium mt-0.5">Rasayana Artisan Ramen — Senopati</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-black/60 border border-emerald-500/30 text-emerald-400 text-xs font-bold w-fit">
                  <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
                  <span>4.9 / 5.0 (2.5k+ Terjual)</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6 text-xs">
                <div className="p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-neutral-300 flex items-center gap-2">
                  <Flame className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Diskon s/d 35%</span>
                </div>
                <div className="p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-neutral-300 flex items-center gap-2">
                  <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Gratis Ongkir GrabUnlimited</span>
                </div>
                <div className="p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-neutral-300 flex items-center gap-2 col-span-2 sm:col-span-1">
                  <PackageCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Pengantaran Prioritas</span>
                </div>
              </div>

              <a
                href="https://food.grab.com"
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 rounded-2xl bg-[#00B14F] hover:bg-[#009e45] text-white font-extrabold text-sm tracking-wider uppercase shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 group-hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Pesan Sekarang di GrabFood</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>

            {/* ShopeeFood Official Card */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#42170d]/90 via-neutral-900/95 to-neutral-900 border border-orange-500/40 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-44 h-44 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-[#EE4D2D] text-white flex items-center justify-center shadow-lg shadow-orange-500/30">
                    <ShopeeIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-black text-white">ShopeeFood</h3>
                      <span className="px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 text-[10px] font-extrabold uppercase tracking-wider border border-orange-500/40">
                        Official Store
                      </span>
                    </div>
                    <p className="text-xs text-neutral-300 font-medium mt-0.5">Rasayana Artisan Ramen — Senopati</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-black/60 border border-orange-500/30 text-orange-400 text-xs font-bold w-fit">
                  <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
                  <span>4.9 / 5.0 (1.8k+ Terjual)</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6 text-xs">
                <div className="p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-neutral-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Voucher Diskon 40%</span>
                </div>
                <div className="p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-neutral-300 flex items-center gap-2">
                  <Truck className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Gratis Ongkir Xtra</span>
                </div>
                <div className="p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-neutral-300 flex items-center gap-2 col-span-2 sm:col-span-1">
                  <PackageCheck className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Cashback ShopeePay</span>
                </div>
              </div>

              <a
                href="https://shopee.co.id/m/shopeefood"
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 rounded-2xl bg-[#EE4D2D] hover:bg-[#d83f20] text-white font-extrabold text-sm tracking-wider uppercase shadow-xl shadow-orange-500/25 transition-all flex items-center justify-center gap-2 group-hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Pesan Sekarang di ShopeeFood</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Packaging & Halal Hygiene Delivery Guarantee */}
            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col sm:flex-row items-center gap-4 text-neutral-300 text-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0 text-lg">
                🍲
              </div>
              <div className="text-center sm:text-left">
                <h4 className="font-bold text-white text-xs mb-0.5">Standar Pengemasan Delivery Rasayana:</h4>
                <p className="text-[11px] text-neutral-400">
                  Kuah kaldu kolagen, mie gandum, dan topping dikemas dalam wadah terpisah anti-tumpah (*thermal heat seal*). Dijamin tetap panas, higienis, dan mie tetap bertekstur *al dente*.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
