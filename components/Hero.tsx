import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
              cRea, imaGina, ComuniCa<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cmyk-cyan via-cmyk-magenta to-cmyk-yellow">
                Stampa(lo)
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Desde serigrafía de alta calidad hasta merchandising personalizado y señalización de gran formato. Si puedes imaginarlo, Stampa puede imprimirlo con precisión.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="whitespace-nowrap bg-gradient-to-r from-cmyk-cyan via-cmyk-magenta to-cmyk-yellow text-white border-0 bg-[length:200%_auto] animate-gradient-slow" 
                onClick={() => navigate('/contact')}
              >
                Iniciar Proyecto <ArrowRight className="ml-2 w-4 h-4 flex-shrink-0" />
              </Button>
              <Button 
                variant="outline" 
                className="border-2"
                onClick={() => navigate('/portfolio')}
              >
                Ver Portafolio
              </Button>
            </div>
          </div>

          {/* Visual Element: CMYK Abstract Art */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-square rounded-3xl bg-white dark:bg-white/5 shadow-2xl p-6 rotate-3 hover:rotate-0 transition-transform duration-500 ease-out border border-gray-100 dark:border-white/10">
               {/* Mockup Composition */}
               <div className="absolute inset-0 bg-gray-50 dark:bg-neutral-800 rounded-3xl overflow-hidden">
                  <img 
                    src="https://picsum.photos/800/800?random=1" 
                    alt="Trabajo creativo de impresión" 
                    className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                  />
               </div>

               {/* Floating Elements */}
               <div className="absolute -top-6 -right-6 bg-white dark:bg-neutral-800 p-4 rounded-2xl shadow-xl animate-bounce">
                  <div className="flex gap-2">
                    <div className="w-4 h-4 rounded-full bg-cmyk-cyan" />
                    <div className="w-4 h-4 rounded-full bg-cmyk-magenta" />
                    <div className="w-4 h-4 rounded-full bg-cmyk-yellow" />
                    <div className="w-4 h-4 rounded-full bg-slate-900 dark:bg-white" />
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;