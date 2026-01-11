import React, { useState, useEffect } from 'react';
import { Send, MessageSquare } from 'lucide-react';
import Button from './Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Nueva Cotización: ${formData.service || 'General'} - ${formData.name}`;
    const body = `Nombre: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ATeléfono: ${formData.phone}%0D%0AServicio de interés: ${formData.service}%0D%0A%0D%0AMensaje:%0D%0A${formData.message}`;
    
    window.location.href = `mailto:stampademexico@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <section className="pt-32 pb-24 bg-white dark:bg-brand-dark relative transition-colors duration-300 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
            Hablemos de tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-cmyk-cyan via-cmyk-magenta to-cmyk-yellow">Proyecto</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Cuéntanos qué tienes en mente y nosotros nos encargamos de imprimirlo con la mejor calidad.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Form */}
          <div className="bg-white dark:bg-brand-dark rounded-3xl shadow-xl border border-gray-100 dark:border-white/10 p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cmyk-cyan/20 to-cmyk-magenta/20 blur-3xl rounded-full -mr-10 -mt-10 pointer-events-none"></div>
            
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 relative z-10 flex items-center gap-2">
              <MessageSquare className="text-cmyk-cyan" />
              Solicitar Cotización
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Nombre Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-white/5 text-slate-900 dark:text-white focus:ring-2 focus:ring-cmyk-cyan focus:border-transparent outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-white/5 text-slate-900 dark:text-white focus:ring-2 focus:ring-cmyk-cyan focus:border-transparent outline-none transition-all"
                    placeholder="+52 229..."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-white/5 text-slate-900 dark:text-white focus:ring-2 focus:ring-cmyk-cyan focus:border-transparent outline-none transition-all"
                  placeholder="ejemplo@correo.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Servicio de Interés</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-white/5 text-slate-900 dark:text-white focus:ring-2 focus:ring-cmyk-cyan focus:border-transparent outline-none transition-all"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="Serigrafía">Serigrafía</option>
                  <option value="Papelería Corporativa">Papelería Corporativa</option>
                  <option value="Gran Formato">Gran Formato (Lonas/Viniles)</option>
                  <option value="Merchandising">Merchandising (Tazas/Promocionales)</option>
                  <option value="Restaurantes">Material para Restaurantes</option>
                  <option value="Otro">Otro Proyecto Personalizado</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Detalles del Proyecto</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-white/5 text-slate-900 dark:text-white focus:ring-2 focus:ring-cmyk-cyan focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Cuéntanos sobre las cantidades, materiales, tamaños o cualquier duda que tengas..."
                ></textarea>
              </div>

              <div className="pt-2">
                <Button type="submit" className="w-full justify-center py-4 text-base">
                  Enviar Mensaje <Send className="ml-2 w-5 h-5" />
                </Button>
                <p className="text-center text-xs text-slate-400 mt-4">
                  Al enviar este formulario, se abrirá tu cliente de correo predeterminado.
                </p>
              </div>
            </form>
          </div>

          {/* Map */}
          <div className="relative overflow-hidden rounded-3xl h-96 shadow-lg border border-gray-100 dark:border-white/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.455242691583!2d-96.1337929253456!3d19.17529454884784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c34149666060ad%3A0xc3c9472314545598!2sGeneral%20Miguel%20Negrete%20509%2C%20Ignacio%20Zaragoza%2C%2091910%20Veracruz%2C%20Ver.!5e0!3m2!1ses!2smx!4v1710000000000!5m2!1ses!2smx" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;