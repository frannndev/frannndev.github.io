import React, { useState, useEffect } from 'react';
import { Tag, ArrowUpRight, Camera, PenTool, Layout } from 'lucide-react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const portfolioItems = [
  {
    id: 1,
    client: 'Café La Parroquia',
    project: 'Rebranding & Menús',
    description: 'Rediseño completo de la identidad visual aplicada a menús de alta resistencia, señalética interior y uniformes del personal. Un clásico veracruzano renovado.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop',
    tags: ['Impresión Offset', 'Textil', 'Diseño'],
    color: 'cyan'
  },
  {
    id: 2,
    client: 'Festival de la Salsa',
    project: 'Merch Oficial & Lonas',
    description: 'Producción masiva de camisetas conmemorativas y gigantografías para el escenario principal. Colores vibrantes que resisten el sol y la energía del evento.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop',
    tags: ['Gran Formato', 'Serigrafía', 'Eventos'],
    color: 'magenta'
  },
  {
    id: 3,
    client: 'Constructora Horizonte',
    project: 'Rotulación de Flotilla',
    description: 'Instalación de vinil automotriz de alta gama para 50 vehículos utilitarios. Diseño corporativo que convierte cada camión en una valla publicitaria móvil.',
    image: 'https://images.unsplash.com/photo-1625218414966-135cf7169122?q=80&w=1974&auto=format&fit=crop',
    tags: ['Vinil', 'Automotriz', 'Branding'],
    color: 'yellow'
  },
  {
    id: 4,
    client: 'Boutique Marina',
    project: 'Packaging Premium',
    description: 'Bolsas de papel con acabado foil, etiquetas textiles y cajas rígidas personalizadas. Elevando la experiencia de unboxing para una marca de lujo local.',
    image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=2070&auto=format&fit=crop',
    tags: ['Packaging', 'Foil', 'Retail'],
    color: 'cyan'
  }
];

const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
    }, 6000); 

    return () => clearInterval(timer);
  }, []);

  const handleManualChange = (index: number) => {
    setCurrentIndex(index);
  };

  const currentItem = portfolioItems[currentIndex];

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-slate-900">
      
      {/* Background Images Slider */}
      {portfolioItems.map((item, index) => (
        <div 
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img 
            src={item.image} 
            alt={item.project}
            className="w-full h-full object-cover"
          />
          
          {/* Horizontal Overlay - Darker on right for text */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/50 to-slate-900/95 md:to-slate-900/90" />

          {/* Vertical Overlay - Vignette effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/60" />
        </div>
      ))}

      {/* Content Container */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-end p-8 pt-32 md:p-20 lg:pt-32 max-w-7xl mx-auto w-full pointer-events-none">
        
        {/* Text Content - Top Right Style */}
        <div className="text-right max-w-2xl pointer-events-auto mt-12 md:mt-0">
          
          {/* Client Label */}
          <div className="inline-flex items-center gap-2 mb-4 justify-end opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
            <span className="text-white/80 uppercase tracking-widest text-sm font-semibold">
              {currentItem.client}
            </span>
            <span className={`h-px w-12 bg-${currentItem.color === 'cyan' ? 'cmyk-cyan' : currentItem.color === 'magenta' ? 'cmyk-magenta' : 'cmyk-yellow'}`}></span>
          </div>

          <h1 
            key={`title-${currentIndex}`}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight animate-[slideInRight_0.7s_ease-out_forwards]"
          >
            {currentItem.project}
            <span className={`block h-3 w-32 ml-auto mt-4 rounded-full bg-${currentItem.color === 'cyan' ? 'cmyk-cyan' : currentItem.color === 'magenta' ? 'cmyk-magenta' : 'cmyk-yellow'}`} />
          </h1>

          <p 
            key={`desc-${currentIndex}`}
            className="text-lg md:text-2xl text-slate-300 leading-relaxed mb-8 font-light animate-[fadeIn_0.9s_ease-out_forwards]"
          >
            {currentItem.description}
          </p>

          {/* Tags */}
          <div className="flex justify-end gap-3 mb-10 flex-wrap animate-[fadeIn_1.0s_ease-out_forwards]">
            {currentItem.tags.map((tag, i) => (
               <span key={i} className="px-4 py-2 rounded-full border border-white/20 text-white/90 text-sm backdrop-blur-sm bg-white/5">
                 {tag}
               </span>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-end mb-12 animate-[fadeIn_1.1s_ease-out_forwards]">
            <Button onClick={() => navigate('/contact')} className="!bg-white !text-slate-900 hover:!bg-gray-200 border-none">
                Cotizar algo similar <ArrowUpRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-end gap-3">
            {portfolioItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleManualChange(idx)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  idx === currentIndex 
                    ? `w-12 bg-${item.color === 'cyan' ? 'cmyk-cyan' : item.color === 'magenta' ? 'cmyk-magenta' : 'cmyk-yellow'}` 
                    : 'w-2 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Ver proyecto ${item.project}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Styles for animations */}
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

export default Portfolio;