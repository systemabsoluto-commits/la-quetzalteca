import React, { useState } from 'react';
import { CATEGORIES, MENU_ITEMS } from '../data/content';
import { Circle, Croissant, Beef, IceCream } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Circle,
  Croissant,
  Beef,
  IceCream
};

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(CATEGORIES[0].id);

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-2">Lo Que Ofrecemos</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-4">Nuestras Especialidades</h3>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Productos frescos elaborados diariamente con ingredientes de la más alta calidad para llevar el mejor sabor a tu mesa.
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map((category) => {
            const Icon = iconMap[category.icon];
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  isActive 
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20 scale-105' 
                    : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {Icon && <Icon size={20} className={isActive ? 'text-white' : 'text-brand-600'} />}
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Active Category Description */}
        <div className="text-center mb-10 animate-fade-in">
          <p className="text-xl text-stone-700 italic">
            "{CATEGORIES.find(c => c.id === activeCategory)?.description}"
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group border border-stone-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-stone-900 font-display">{item.name}</h4>
                  {item.price && (
                    <span className="text-brand-600 font-semibold">{item.price}</span>
                  )}
                </div>
                <p className="text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MenuSection;
