import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  categories, 
  menuItems 
} from '../data/menuData';
import { 
  Search, 
  Flame, 
  Star, 
  Sparkles, 
  SlidersHorizontal, 
  Plus, 
  Eye, 
  X, 
  Check, 
  ShieldCheck,
  Soup,
  Utensils
} from 'lucide-react';

export default function MenuCatalog({ onSelectDish }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilterTag, setActiveFilterTag] = useState('all'); // 'all', 'bestseller', 'chef', 'spicy'
  const [sortBy, setSortBy] = useState('recommended'); // 'recommended', 'price-low', 'price-high'

  // Filter & Search Logic
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesBroth = item.brothType.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesBroth) return false;
      }
      // Filter tag
      if (activeFilterTag === 'bestseller' && !item.isBestSeller) return false;
      if (activeFilterTag === 'chef' && !item.isChefPick) return false;
      if (activeFilterTag === 'spicy' && item.spicyLevel === 0) return false;
      if (activeFilterTag === 'under50k' && item.price >= 50000) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'spicy-high') return b.spicyLevel - a.spicyLevel;
      return 0; // recommended retains original curation
    });
  }, [selectedCategory, searchQuery, activeFilterTag, sortBy]);

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(number);
  };

  return (
    <section id="menu" className="py-24 bg-[#0b0c10] relative min-h-screen">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-rose-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Soup className="w-3.5 h-3.5" />
            <span>Katalog Kuliner Rasayana</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Pilihan Menu{' '}
            <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-rose-400 bg-clip-text text-transparent font-['Cinzel']">
              Artisan Halal
            </span>
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Dibuat segar dengan teknik autentik Jepang, kuah rebusan kolagen 16 jam, serta 100% bahan halal terjamin.
          </p>
        </div>

        {/* Search & Sort Controls Bar */}
        <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-4 mb-8 backdrop-blur-md shadow-xl flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Live Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari ramen, kaldu truffle, gyoza, mentai..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-neutral-950/90 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Filter Badges */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setActiveFilterTag('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeFilterTag === 'all'
                  ? 'bg-amber-500 text-black shadow-md'
                  : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
            >
              Semua
            </button>
            <button
              onClick={() => setActiveFilterTag('bestseller')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeFilterTag === 'bestseller'
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
            >
              <Star className="w-3 h-3 fill-current" />
              <span>Best Seller</span>
            </button>
            <button
              onClick={() => setActiveFilterTag('chef')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeFilterTag === 'chef'
                  ? 'bg-amber-400 text-black shadow-md'
                  : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>Chef's Pick</span>
            </button>
            <button
              onClick={() => setActiveFilterTag('spicy')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeFilterTag === 'spicy'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
            >
              <Flame className="w-3 h-3 fill-current" />
              <span>Pedas 🌶️</span>
            </button>
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            <SlidersHorizontal className="w-4 h-4 text-neutral-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-xs font-medium text-neutral-200 focus:outline-none focus:border-amber-500"
            >
              <option value="recommended">Urutan: Rekomendasi</option>
              <option value="price-low">Harga: Terendah ke Tertinggi</option>
              <option value="price-high">Harga: Tertinggi ke Terendah</option>
              <option value="spicy-high">Tingkat Pedas</option>
            </select>
          </div>
        </div>

        {/* Category Filter Tabs with Smooth Indicator */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'text-black font-extrabold'
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/60'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl shadow-lg shadow-amber-500/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((dish) => (
              <motion.div
                layout
                key={dish.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl bg-neutral-900/90 border border-neutral-800/90 hover:border-amber-500/50 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-500/10"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-950">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-black/40" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                    {dish.isBestSeller && (
                      <span className="px-2.5 py-1 rounded-full bg-rose-600 text-white text-[11px] font-black tracking-wider uppercase flex items-center gap-1 shadow-md">
                        <Star className="w-3 h-3 fill-current" />
                        Best Seller
                      </span>
                    )}
                    {dish.isChefPick && (
                      <span className="px-2.5 py-1 rounded-full bg-amber-500 text-black text-[11px] font-black tracking-wider uppercase flex items-center gap-1 shadow-md">
                        <Sparkles className="w-3 h-3" />
                        Chef's Choice
                      </span>
                    )}
                  </div>

                  {/* Spicy Level Badge */}
                  {dish.spicyLevel > 0 && (
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-black/75 border border-red-500/40 text-red-400 text-xs font-bold backdrop-blur-md flex items-center gap-1">
                      <span>{'🌶️'.repeat(dish.spicyLevel)}</span>
                    </div>
                  )}

                  {/* Halal Guarantee Badge */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-[11px] font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>100% Halal</span>
                  </div>

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-xl bg-amber-500 text-black font-extrabold text-sm shadow-lg">
                    {formatRupiah(dish.price)}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-amber-400/90 font-['Noto_Serif_JP'] mb-1">
                      <span>{dish.japaneseName}</span>
                      <span className="text-[11px] text-neutral-400">{dish.calories}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1 mb-2">
                      {dish.name}
                    </h3>

                    <p className="text-neutral-400 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                      {dish.description}
                    </p>

                    {/* Broth info tag */}
                    <div className="p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800/80 mb-4">
                      <p className="text-[10px] text-amber-400 uppercase tracking-wider font-bold">Karakter Rasa:</p>
                      <p className="text-xs text-neutral-300 font-medium line-clamp-1">{dish.brothType}</p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-2 border-t border-neutral-800/80">
                    <button
                      onClick={() => onSelectDish(dish)}
                      className="w-full py-2.5 rounded-xl bg-neutral-800 hover:bg-gradient-to-r hover:from-amber-500 hover:to-rose-600 hover:text-black text-neutral-200 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md group/btn"
                    >
                      <Eye className="w-3.5 h-3.5 text-amber-400 group-hover/btn:text-black transition-colors" />
                      <span>Lihat Detail & Komposisi Rasa</span>
                    </button>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 px-4">
            <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 text-amber-400 text-3xl flex items-center justify-center mx-auto mb-4">
              🔍
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Menu Tidak Ditemukan</h3>
            <p className="text-sm text-neutral-400 max-w-sm mx-auto mb-6">
              Tidak ada menu yang cocok dengan kata kunci "{searchQuery}". Coba gunakan kata kunci lain seperti "tori", "pedas", atau "gyoza".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setActiveFilterTag('all');
              }}
              className="px-5 py-2.5 rounded-xl bg-amber-500 text-black font-bold text-xs uppercase tracking-wider"
            >
              Reset Semua Filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
