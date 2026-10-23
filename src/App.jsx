import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HalalPillars from './components/HalalPillars';
import MenuCatalog from './components/MenuCatalog';
import DishDetailModal from './components/DishDetailModal';
import Philosophy from './components/Philosophy';
import Reviews from './components/Reviews';
import LocationDelivery from './components/LocationDelivery';
import Footer from './components/Footer';

export default function App() {
  const [selectedDish, setSelectedDish] = useState(null);

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#f3f4f6] relative selection:bg-amber-500 selection:text-black">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero onExploreMenu={scrollToMenu} />
        <HalalPillars />
        <MenuCatalog 
          onSelectDish={(dish) => setSelectedDish(dish)} 
        />
        <Philosophy />
        <Reviews />
        <LocationDelivery />
      </main>

      {/* Footer */}
      <Footer />

      {/* Dish Detail & Ingredients Modal */}
      <DishDetailModal 
        dish={selectedDish} 
        onClose={() => setSelectedDish(null)} 
      />
    </div>
  );
}
