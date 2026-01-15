import { Menu, X } from 'lucide-react';
import LogoSklair from '../imports/LogoSklair';
import { useState, useEffect } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setActiveSection(hash);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <header className="text-white sticky top-0 z-40" style={{ backgroundColor: '#001A28' }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#home" className="w-32 h-10 block">
            <LogoSklair />
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#home" 
            className="hover:text-gray-300 transition-colors relative pb-1"
          >
            Home
            {activeSection === 'home' && (
              <span 
                className="absolute bottom-0 left-0 w-full h-[2px]" 
                style={{ backgroundColor: 'var(--fire-brick)' }}
              />
            )}
          </a>
          <a 
            href="#films" 
            className="hover:text-gray-300 transition-colors relative pb-1"
          >
            Films
            {activeSection === 'films' && (
              <span 
                className="absolute bottom-0 left-0 w-full h-[2px]" 
                style={{ backgroundColor: 'var(--fire-brick)' }}
              />
            )}
          </a>
          <a 
            href="#steve" 
            className="hover:text-gray-300 transition-colors relative pb-1"
          >
            Steve
            {activeSection === 'steve' && (
              <span 
                className="absolute bottom-0 left-0 w-full h-[2px]" 
                style={{ backgroundColor: 'var(--fire-brick)' }}
              />
            )}
          </a>
          <a 
            href="#testimonials" 
            className="hover:text-gray-300 transition-colors relative pb-1"
          >
            Working With Steve
            {activeSection === 'testimonials' && (
              <span 
                className="absolute bottom-0 left-0 w-full h-[2px]" 
                style={{ backgroundColor: 'var(--fire-brick)' }}
              />
            )}
          </a>
          <a 
            href="#contact" 
            className="hover:text-gray-300 transition-colors relative pb-1"
          >
            Contact
            {(activeSection === 'contact' || activeSection === 'brief') && (
              <span 
                className="absolute bottom-0 left-0 w-full h-[2px]" 
                style={{ backgroundColor: 'var(--fire-brick)' }}
              />
            )}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:bg-gray-800 rounded transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t" style={{ backgroundColor: '#001A28', borderColor: 'rgba(255,255,255,0.2)' }}>
          <div className="px-6 py-4 flex flex-col gap-4">
            <a 
              href="#home" 
              className="hover:text-gray-300 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#films" 
              className="hover:text-gray-300 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Films
            </a>
            <a 
              href="#steve" 
              className="hover:text-gray-300 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Steve
            </a>
            <a 
              href="#testimonials" 
              className="hover:text-gray-300 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Working With Steve
            </a>
            <a 
              href="#contact" 
              className="hover:text-gray-300 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}