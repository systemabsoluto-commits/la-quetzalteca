import React from 'react';
import { BUSINESS_INFO } from '../data/content';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-600 rounded-full flex items-center justify-center text-white font-display font-bold text-sm">
                LQ
              </div>
              <span className="font-display font-bold text-xl text-white">
                {BUSINESS_INFO.name}
              </span>
            </div>
            <p className="text-sm text-stone-400 max-w-xs">
              Tu destino para tortillas frescas, panadería tradicional, carnicería y los mejores snacks en Oklahoma City.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-brand-500 transition-colors">Inicio</a></li>
              <li><a href="#menu" className="hover:text-brand-500 transition-colors">Nuestro Menú</a></li>
              <li><a href="#about" className="hover:text-brand-500 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#location" className="hover:text-brand-500 transition-colors">Ubicación y Horarios</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>{BUSINESS_INFO.address}</li>
              <li>{BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}</li>
              <li className="pt-2 text-brand-500 font-medium">{BUSINESS_INFO.phone}</li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-stone-800 text-sm text-center text-stone-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} {BUSINESS_INFO.name}. Todos los derechos reservados.</p>
          <p>Diseñado para la comunidad de OKC.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
