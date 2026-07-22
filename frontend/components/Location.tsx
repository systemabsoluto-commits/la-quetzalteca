import React from 'react';
import { MapPin, Clock, Phone, Store } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Info Side */}
          <div id="about">
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-2">Visítanos</h2>
            <h3 className="text-4xl font-display font-bold text-stone-900 mb-6">
              Tu Tienda Hispana de Confianza en OKC
            </h3>
            <p className="text-stone-600 text-lg mb-8 leading-relaxed">
              En La Quetzalteca nos enorgullece ofrecer los productos más frescos a nuestra comunidad. 
              Desde nuestras tortillas calientitas hasta nuestra variedad de carnes y antojitos, 
              trabajamos todos los días para brindarte calidad y un servicio amable.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-brand-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-lg">Dirección</h4>
                  <p className="text-stone-600 mt-1">
                    {BUSINESS_INFO.address}<br />
                    {BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-brand-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-lg">Horario</h4>
                  <p className="text-stone-600 mt-1">
                    Lunes - Viernes: {BUSINESS_INFO.hours.weekdays}<br />
                    Sábado - Domingo: {BUSINESS_INFO.hours.weekends}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-brand-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-lg">Contacto</h4>
                  <p className="text-stone-600 mt-1">
                    {BUSINESS_INFO.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Map Side */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            {/* Using a placeholder image for the storefront/map area */}
            <img 
              src="/la-quetzalteca/images/3.png" 
              alt="Fachada de La Quetzalteca" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 w-full p-8">
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg flex items-center gap-4">
                <Store className="text-brand-600 w-10 h-10" />
                <div>
                  <h4 className="font-bold text-stone-900 text-xl">{BUSINESS_INFO.name}</h4>
                  <p className="text-stone-600 text-sm">¡Te esperamos con los brazos abiertos!</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
