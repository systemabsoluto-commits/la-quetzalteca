import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/2.png" 
          alt="Comida tradicional de La Quetzalteca"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30 text-sm font-semibold tracking-wider mb-4 backdrop-blur-sm">
            NUEVA ADMINISTRACIÓN, MISMO SABOR
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
            El Sabor <span className="text-brand-500">Auténtico</span> en Oklahoma City
          </h1>
          <p className="text-lg md:text-xl text-stone-200 mb-8 max-w-xl leading-relaxed">
            Descubre la frescura de nuestras tortillas hechas a mano, el aroma de nuestro pan recién horneado y refréscate con nuestros deliciosos snacks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#menu" 
              className="bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-brand-600/30"
            >
              Ver Nuestro Menú
              <ArrowRight size={20} />
            </a>
            <a 
              href="#location" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center"
            >
              Cómo Llegar
            </a>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave or fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-stone-50 to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
