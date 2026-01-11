import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const CallToAction: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-white dark:bg-brand-dark transition-colors duration-300" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 transition-colors">
                ¿Listo para hacerlo <span className="text-transparent bg-clip-text bg-gradient-to-r from-cmyk-cyan via-cmyk-magenta to-cmyk-yellow">realidad?</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto transition-colors">
                Ya sean 50 camisetas o 5,000 volantes, cuidamos cada detalle. Comencemos tu proyecto hoy mismo.
            </p>
            <div className="cmyk-shadow inline-block rounded-2xl transition-transform duration-300">
                <Button className="shadow-none" onClick={() => navigate('/contact')}>
                    Obtén una Cotización Gratis
                </Button>
            </div>
        </div>
    </section>
  );
};

export default CallToAction;