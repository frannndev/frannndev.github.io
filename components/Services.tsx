import React, { useState, useEffect } from 'react';
import { Shirt, FileText, Utensils, Maximize, Coffee, Layers, ChevronRight } from 'lucide-react';
import { ServiceItem } from '../types';

// Enhanced service data with background images
const services: (ServiceItem & { image: string })[] = [
  {
    id: 'screen-printing',
    title: 'Serigrafía Premium',
    description: 'Impresión textil de alta durabilidad para marcas de moda, uniformes corporativos y eventos. Utilizamos tintas ecológicas y técnicas de separación de color avanzadas para acabados suaves y vibrantes.',
    icon: Shirt,
    color: 'cyan',
    image: 'https://images.unsplash.com/photo-1563282226-473d092e07eb?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'large-format',
    title: 'Gran Formato',
    description: 'Haz que te vean desde lejos. Lonas monumentales, viniles adhesivos para flotillas, murales decorativos y señalética arquitectónica. Calidad fotográfica en dimensiones gigantescas.',
    icon: Maximize,
    color: 'magenta',
    image: 'https://images.unsplash.com/photo-1550616788-2996924c5222?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'stationery',
    title: 'Papelería Corporativa',
    description: 'La primera impresión cuenta. Tarjetas de presentación con acabados foil, hojas membretadas, carpetas y sobres que transmiten el profesionalismo y la identidad de tu empresa.',
    icon: FileText,
    color: 'yellow',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'restaurant',
    title: 'Hospitalidad y Menús',
    description: 'Soluciones resistentes y elegantes para restaurantes. Menús impermeables, manteles individuales, habladores y packaging para llevar que elevan la experiencia gastronómica.',
    icon: Utensils,
    color: 'cyan',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 'merch',
    title: 'Merchandising',
    description: 'Artículos promocionales que la gente realmente quiere usar. Desde tazas y termos hasta tecnología y accesorios de oficina, todos personalizados con tu marca.',
    icon: Coffee,
    color: 'magenta',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=2070&auto=format&fit=crop'
  }
];

const Services: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 6000); // Rotate every 6 seconds

    return () => clearInterval(timer);
  }, []);

  const handleManualChange = (index: number) => {
    setCurrentIndex(index);
  };

  const currentService = services[currentIndex];

  return (
    <section id="services" className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-slate-900">
      
      {/* Background Images Slider */}
      {services.map((service, index) => (
        <div 
          key={service.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Image */}
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover"
          />
          
          {/* Horizontal Overlay - Text Readability (Darker on right) */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/40 to-slate-900/95 md:to-slate-900/90" />

          {/* Vertical Overlay - Top and Bottom Fading (Vignette effect) */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/60" />
        </div>
      ))}

      {/* Content Container */}
      <div className="absolute inset-0 z-20 flex flex-col justify-start items-end p-8 pt-32 md:p-20 lg:pt-32 max-w-7xl mx-auto w-full pointer-events-none">
        
        {/* Text Content - Top Right */}
        <div className="text-right max-w-2xl pointer-events-auto">
          
          {/* Service Counter/Label */}
          <div className="inline-flex items-center gap-2 mb-6 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
            <span className={`h-px w-12 bg-${currentService.color === 'cyan' ? 'cmyk-cyan' : currentService.color === 'magenta' ? 'cmyk-magenta' : 'cmyk-yellow'}`}></span>
            <span className="text-white/80 uppercase tracking-widest text-sm font-semibold">
              Servicio {currentIndex + 1} / {services.length}
            </span>
          </div>

          <h2 
            key={`title-${currentIndex}`}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight tracking-tight animate-[slideInRight_0.7s_ease-out_forwards]"
          >
            {currentService.title}
            <span className={`block h-3 w-32 ml-auto mt-2 rounded-full bg-${currentService.color === 'cyan' ? 'cmyk-cyan' : currentService.color === 'magenta' ? 'cmyk-magenta' : 'cmyk-yellow'}`} />
          </h2>

          <p 
            key={`desc-${currentIndex}`}
            className="text-lg md:text-2xl text-slate-300 leading-relaxed mb-10 font-light animate-[fadeIn_0.9s_ease-out_forwards]"
          >
            {currentService.description}
          </p>

          {/* Icon Display */}
          <div className="flex justify-end mb-12 animate-[fadeIn_1.1s_ease-out_forwards]">
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <currentService.icon size={48} className="text-white" />
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-end gap-3">
            {services.map((service, idx) => (
              <button
                key={idx}
                onClick={() => handleManualChange(idx)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  idx === currentIndex 
                    ? `w-12 bg-${service.color === 'cyan' ? 'cmyk-cyan' : service.color === 'magenta' ? 'cmyk-magenta' : 'cmyk-yellow'}` 
                    : 'w-2 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Ver servicio ${service.title}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Custom Animations defined here for simplicity, or could go in tailwind config */}
      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Services;