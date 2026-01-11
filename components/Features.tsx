import React from 'react';

// Mock client data using placeholders
const clients = [
  { name: 'Restaurante El Puerto', url: 'https://placehold.co/300x100/1e293b/ffffff?text=El+Puerto&font=playfair-display' },
  { name: 'Tech Veracruz', url: 'https://placehold.co/300x100/1e293b/ffffff?text=Tech+Veracruz&font=roboto' },
  { name: 'Café La Parroquia', url: 'https://placehold.co/300x100/1e293b/ffffff?text=Cafe+Central&font=merriweather' },
  { name: 'Constructora Z', url: 'https://placehold.co/300x100/1e293b/ffffff?text=Constructora+Z&font=oswald' },
  { name: 'Boutique Marina', url: 'https://placehold.co/300x100/1e293b/ffffff?text=Marina+Moda&font=lato' },
  { name: 'Agencia Creativa', url: 'https://placehold.co/300x100/1e293b/ffffff?text=Agencia+Crea&font=montserrat' },
  { name: 'Hotel Vista', url: 'https://placehold.co/300x100/1e293b/ffffff?text=Hotel+Vista&font=raleway' },
  { name: 'Fitness Pro', url: 'https://placehold.co/300x100/1e293b/ffffff?text=Fitness+Pro&font=open-sans' },
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-brand-dark transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 tracking-tight text-slate-900 dark:text-white">
            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-cmyk-cyan via-cmyk-magenta to-cmyk-yellow">Clientes</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Marcas líderes y empresas locales que han confiado en Stampa para dar vida a sus proyectos con la mejor calidad.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {clients.map((client, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-6 flex items-center justify-center hover:shadow-lg dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 h-32"
            >
              <img 
                src={client.url} 
                alt={client.name}
                className="w-full h-full object-contain opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 filter dark:invert-0"
              />
              
              {/* Subtle gradient border effect on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-slate-200 dark:group-hover:border-white/10 pointer-events-none transition-colors duration-300" />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                Más de <span className="text-slate-900 dark:text-white font-bold">500+</span> proyectos entregados exitosamente en Veracruz y todo México.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Features;