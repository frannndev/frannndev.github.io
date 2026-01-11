import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-brand-dark border-t border-gray-100 dark:border-white/10 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white block mb-4 transition-colors">
              Stampa<span className="text-cmyk-cyan">.</span>
            </span>
            <p className="text-slate-500 dark:text-slate-400 mb-6">
              Dando vida a tus ideas con color, precisión y pasión.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/stampademexico/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:bg-cmyk-cyan hover:text-white dark:hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:bg-cmyk-magenta hover:text-white dark:hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:bg-cmyk-yellow hover:text-white dark:hover:text-white transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links - Services (Static Text) */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4 transition-colors">Servicios</h4>
            <ul className="space-y-2">
              {['Serigrafía', 'Papelería', 'Gran Formato', 'Merchandising'].map(item => (
                <li key={item} className="text-slate-500 dark:text-slate-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Company - (Static Text) */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4 transition-colors">Compañía</h4>
            <ul className="space-y-2">
              {['Nosotros', 'Portafolio', 'Carreras', 'Contacto'].map(item => (
                <li key={item} className="text-slate-500 dark:text-slate-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4 transition-colors">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-slate-900 dark:text-white mr-3 mt-1 shrink-0" />
                <span className="text-slate-500 dark:text-slate-400">General Miguel Negrete 509, Ignacio Zaragoza,<br />91910 Veracruz, Ver.</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-slate-900 dark:text-white mr-3 shrink-0" />
                <span className="text-slate-500 dark:text-slate-400">+52 229 937 8584</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-slate-900 dark:text-white mr-3 shrink-0" />
                <span className="text-slate-500 dark:text-slate-400">stampademexico@hotmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-100 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 dark:text-slate-500">
          <p>&copy; 2026 Stampa. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-slate-900 dark:hover:text-white">Privacidad</Link>
            <Link to="/terms" className="hover:text-slate-900 dark:hover:text-white">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;