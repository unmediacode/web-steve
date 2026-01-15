import { useState, useEffect, useRef } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { VideoCard } from '../components/VideoCard';
import filmData from '../data/films.json';

export default function FilmsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [currentThumbnailIndex, setCurrentThumbnailIndex] = useState(0);
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const rotatingWords = ['Documentaries', 'Biographical Films', 'Music Portraits', 'Portraits'];

  const thumbnails = [
    '/images/films/nicolas-economou.png',
    '/images/films/xp-school.jpg',
    '/images/films/red-oil.jpg',
    '/images/films/worker.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setFade(true);
      }, 800);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentThumbnailIndex((prev) => (prev + 1) % thumbnails.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const categories = [
    { id: 'all', label: 'All Films' },
    { id: 'documentaries', label: 'Documentaries' },
    { id: 'biographical', label: 'Biographical' },
    { id: 'music', label: 'Music & Portraits' },
  ];

  // Map JSON data to expected format (ensure videoUrl is string | undefined)
  const films = filmData.map(film => ({
    ...film,
    videoUrl: film.videoUrl || undefined
  }));

  const filteredFilms = selectedCategory === 'all'
    ? films
    : films.filter(film => film.category === selectedCategory);

  // Update slider position when component mounts or selectedCategory changes
  useEffect(() => {
    const buttonRef = buttonRefs.current[selectedCategory];
    if (buttonRef) {
      const containerRect = buttonRef.parentElement?.getBoundingClientRect();
      const buttonRect = buttonRef.getBoundingClientRect();
      if (containerRect) {
        setSliderStyle({
          left: buttonRect.left - containerRect.left,
          width: buttonRect.width
        });
      }
    }
  }, [selectedCategory]);

  const handleCategoryClick = (id: string) => {
    setSelectedCategory(id);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-32 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0">
          {thumbnails.map((thumbnail, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: currentThumbnailIndex === index ? 1 : 0,
                backgroundImage: `url(${thumbnail})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/75 to-[#ee1111]/70"></div>
        </div>

        <style>{`
          @keyframes gradient-films {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          .animate-gradient-films {
            background-size: 200% 200%;
            animation: gradient-films 10s ease infinite;
          }
          .word-fade {
            transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
            display: inline-block;
          }
          .word-fade.hidden {
            opacity: 0;
            transform: translateY(-10px);
          }
          .word-fade.visible {
            opacity: 1;
            transform: translateY(0);
          }
        `}</style>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="mb-6 text-[56px] md:text-[64px] font-bold leading-tight drop-shadow-2xl">
            Films & <span className={`word-fade ${fade ? 'visible' : 'hidden'}`}>{rotatingWords[currentWordIndex]}</span>
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto drop-shadow-lg">
            A collection of documentaries, commercials, and corporate films crafted with
            attention to detail and a commitment to authentic storytelling.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 sticky top-[72px] z-30 border-b border-gray-200 bg-[rgb(255,255,255)]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <div className="relative inline-flex gap-1 p-1.5 rounded-full" style={{ backgroundColor: '#e8e8e8' }}>
            <div
              className="absolute rounded-full bg-black transition-all duration-300 ease-out"
              style={{
                transform: `translateX(${sliderStyle.left}px)`,
                width: `${sliderStyle.width}px`,
                height: 'calc(100% - 12px)',
                top: '6px',
                left: '0',
              }}
            />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`relative z-10 px-6 py-2.5 rounded-full transition-colors duration-300 ${selectedCategory === category.id
                    ? 'text-white'
                    : 'text-gray-700 hover:text-gray-900'
                  }`}
                ref={(ref) => (buttonRefs.current[category.id] = ref)}
              >
                {category.label}
              </button>
            ))}
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-600 text-sm">
              Showing {filteredFilms.length} {filteredFilms.length === 1 ? 'film' : 'films'}
            </p>
          </div>
        </div>
      </section>

      {/* Films Grid */}
      <section className="py-16 md:py-20 flex-1 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredFilms.map((film) => (
              <VideoCard
                key={film.id}
                title={film.title}
                year={film.year}
                duration={film.duration}
                description={film.description}
                videoUrl={film.videoUrl}
                thumbnailUrl={film.thumbnailUrl}
              />
            ))}
          </div>

          {filteredFilms.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No films found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/447743671868"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-colors z-50"
        style={{ backgroundColor: '#00c950' }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="white"
          className="w-8 h-8"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
}