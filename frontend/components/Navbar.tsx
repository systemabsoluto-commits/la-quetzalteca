import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Globe } from 'lucide-react';
import { useLang } from '../context/LangContext';
import { BUSINESS_INFO } from '../data/content';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, toggle, t } = useLang();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.menu, href: '#menu' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.location, href: '#location' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-black/40 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2 group">
            <img src="/images/1.png" alt="La Quetzalteca Logo" className="w-10 h-10 rounded-full object-cover" />
            <span className={`font-display font-bold text-2xl tracking-tight ${isScrolled ? 'text-brand-900' : 'text-white'}`}>
              La Quetzalteca
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium hover:text-brand-500 transition-colors ${
                  isScrolled ? 'text-stone-600' : 'text-stone-200'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggle}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-all border ${
                isScrolled
                  ? 'border-stone-300 text-stone-600 hover:bg-stone-100'
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              <Globe size={16} />
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
            <a 
              href="#location"
              className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-full font-medium transition-colors flex items-center gap-2"
            >
              <MapPin size={18} />
              {t.nav.visit}
            </a>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggle}
              className={`p-2 rounded-md ${isScrolled ? 'text-stone-900' : 'text-white'}`}
            >
              <Globe size={20} />
            </button>
            <button 
              className={`p-2 rounded-md ${isScrolled ? 'text-stone-900' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-stone-100">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-4 text-base font-medium text-stone-800 hover:bg-brand-50 hover:text-brand-600 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-stone-100 flex flex-col gap-3 px-3">
              <div className="flex items-center gap-2 text-stone-600">
                <MapPin size={18} className="text-brand-600" />
                <span className="text-sm">{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 text-stone-600">
                <Phone size={18} className="text-brand-600" />
                <span className="text-sm">{BUSINESS_INFO.phone}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
