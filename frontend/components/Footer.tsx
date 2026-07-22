import React from 'react';
import { BUSINESS_INFO } from '../data/content';
import { useLang } from '../context/LangContext';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLang();

  return (
    <footer className="bg-stone-900 text-stone-300 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
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
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-brand-500 transition-colors">{t.footer.home}</a></li>
              <li><a href="#menu" className="hover:text-brand-500 transition-colors">{t.footer.menu}</a></li>
              <li><a href="#about" className="hover:text-brand-500 transition-colors">{t.footer.about}</a></li>
              <li><a href="#location" className="hover:text-brand-500 transition-colors">{t.footer.location}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>{BUSINESS_INFO.address}</li>
              <li>{BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}</li>
              <li className="pt-2 text-brand-500 font-medium">{BUSINESS_INFO.phone}</li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-stone-800 text-sm text-center text-stone-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} {BUSINESS_INFO.name}. {t.footer.rights}</p>
          <p>{t.footer.designed}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
