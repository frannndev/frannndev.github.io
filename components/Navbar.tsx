import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from './Button';
import { NavLink } from '../types';

const links: NavLink[] = [
  { label: 'Servicios', href: '#services' },
  { label: 'Portafolio', href: '/portfolio' },
  { label: 'Nosotros', href: '#about' }, // Assuming Features section serves as About/Clients
  { label: 'Contacto', href: '#contact' },
];

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    // Handle Route links (starting with /) vs Hash links (starting with #)
    if (href.startsWith('/')) {
        navigate(href);
        return;
    }
    
    // Extract the target ID (e.g., "services" from "#services")
    const targetId = href.replace('#', '');

    if (location.pathname !== '/') {
      // If we are not on the home page, navigate to home first
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If we are already on the home page, just scroll
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const goHome = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuoteClick = () => {
    setIsOpen(false);
    navigate('/contact');
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-white/80 dark:bg-[#262626]/95 backdrop-blur-md border-slate-200/50 dark:border-white/5 py-2' 
          : 'bg-transparent border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={goHome}>
            <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Stampa<span className="text-cmyk-cyan">.</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-cmyk-magenta after:left-0 after:-bottom-1 after:transition-all hover:after:w-full cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <Button onClick={handleQuoteClick}>Cotizar</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 dark:text-white hover:text-slate-600 focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-[#262626] shadow-lg border-t border-gray-100 dark:border-white/10 p-4 flex flex-col space-y-4 animate-in slide-in-from-top-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium py-2 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <Button className="w-full justify-center" onClick={handleQuoteClick}>Cotizar</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;