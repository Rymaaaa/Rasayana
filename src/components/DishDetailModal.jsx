import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Flame, 
  Check, 
  ShieldCheck, 
  Sparkles, 
  Utensils,
  Soup,
  Truck
} from 'lucide-react';
import { extraToppings } from '../data/menuData';

export default function DishDetailModal({ dish, onClose }) {
  if (!dish) return null;

  const [selectedFirmness, setSelectedFirmness] = useState('Katame (Kenyal Tegas)');

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(number);
  };

  const handleOrderOnline = () => {
    onClose();
    const el = document.getElementById('order-online');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Dialog Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-700/80 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 text-neutral-100 flex flex-col max-h-[90vh]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-neutral-800 text-neutral-200 hover:text-white flex items-center justify-center border border-neutral-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Scrollable Container */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
            
            {/* Header with Photo */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-neutral-950 border border-neutral-800">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-amber-400 font-['Noto_Serif_JP'] text-xs font-semibold">
                  {dish.japaneseName}
                </span>
                <h2 className="text-2xl font-bold text-white drop-shadow">
                  {dish.name}
                </h2>
                <div className="flex items-center gap-3 mt-1 text-xs text-neutral-300">
                  <span className="flex items-center gap-1 text-emerald-400 font-medium">
                    <ShieldCheck className="w-4 h-4" />
                    {dish.halalInfo}
                  </span>
                  <span>•</span>
                  <span>{dish.calories}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-300 leading-relaxed">
              {dish.description}
            </p>

            {/* Broth & Noodle Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-neutral-950 border border-neutral-800 text-xs">
              <div>
                <p className="text-amber-400 font-bold uppercase tracking-wider text-[10px] flex items-center gap-1 mb-1">
                  <Soup className="w-3.5 h-3.5" />
                  Racikan Kuah Kaldu
                </p>
                <p className="text-neutral-300">{dish.brothType}</p>
              </div>
              <div>
                <p className="text-amber-400 font-bold uppercase tracking-wider text-[10px] flex items-center gap-1 mb-1">
                  <Utensils className="w-3.5 h-3.5" />
                  Karakter Mie
                </p>
                <p className="text-neutral-300">{dish.noodleType}</p>
              </div>
            </div>

            {/* Default Included Toppings */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" />
                Topping Bawaan (Sudah Termasuk):
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {dish.toppings.map((top, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 rounded-xl bg-neutral-800/60 border border-neutral-700/60 text-xs text-neutral-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>{top}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Noodle Firmness Choice (if dish has noodles) */}
            {dish.category !== 'donburi' && dish.category !== 'sides' && dish.category !== 'beverages' && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Tingkat Kematangan Mie (Hakata Style):
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {['Katame (Kenyal Tegas)', 'Futsuu (Normal)', 'Yawarakame (Lembut)'].map((firm) => (
                    <button
                      key={firm}
                      type="button"
                      onClick={() => setSelectedFirmness(firm)}
                      className={`p-2.5 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer ${
                        selectedFirmness === firm
                          ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                          : 'bg-neutral-800/70 border-neutral-700 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {firm}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Available Extra Toppings list */}
            {dish.category !== 'beverages' && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Pilihan Topping Tambahan (Dapat Dipesan di Aplikasi):
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {extraToppings.map((top) => (
                    <div
                      key={top.name}
                      className="flex items-center justify-between p-2.5 rounded-xl border border-neutral-800 bg-neutral-950/80 text-xs text-neutral-300"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span>{top.name}</span>
                      </div>
                      <span className="text-amber-400 font-semibold">+{formatRupiah(top.price)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pairing recommendation */}
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-3 text-xs text-amber-200">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span><strong>Pasangan Terbaik:</strong> {dish.pairing}</span>
            </div>

          </div>

          {/* Sticky Bottom Bar with Direct Delivery Option */}
          <div className="p-4 sm:p-6 bg-neutral-950 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">Harga Menu</p>
              <p className="text-xl font-black text-amber-400">{formatRupiah(dish.price)}</p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-bold transition-all cursor-pointer"
              >
                Tutup
              </button>

              <button
                onClick={handleOrderOnline}
                className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-rose-600 hover:brightness-110 active:scale-95 text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Truck className="w-4 h-4" />
                <span>Pesan di Shopee & Grab</span>
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
