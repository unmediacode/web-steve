import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import FilmsPage from './pages/FilmsPage';
import StevePage from './pages/StevePage';
import WorkingWithStevePage from './pages/WorkingWithStevePage';
import BriefPage from './pages/BriefPage';
import { ContactPage } from './pages/ContactPage';
import { QuickContactPage } from './pages/QuickContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Leer la URL hash inicial
    const hash = window.location.hash.slice(1) || 'home';
    setCurrentPage(hash);

    // Escuchar cambios en el hash
    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1) || 'home';
      setCurrentPage(newHash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'films' && <FilmsPage />}
      {currentPage === 'steve' && <StevePage />}
      {currentPage === 'testimonials' && <WorkingWithStevePage />}
      {currentPage === 'brief' && <BriefPage />}
      {currentPage === 'contact' && <ContactPage />}
      {currentPage === 'contact/quick' && <QuickContactPage />}
      {currentPage === 'contact/brief' && <BriefPage />}
    </>
  );
}