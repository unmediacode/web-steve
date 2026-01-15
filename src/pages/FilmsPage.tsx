import { useState, useEffect, useRef } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { VideoCard } from '../components/VideoCard';
import nicolasEconomouThumbnail from 'figma:asset/541fe880cdb7b8618f0ba45c0974f6c95986e572.png';
import garyLinekerThumbnail from 'figma:asset/71ae328e6eb7af3e81fca580a4b69f420db87143.png';
import xpSchoolThumbnail from 'figma:asset/89369ff84615d66932f9f29f242669935f2f4dc3.png';
import redOilThumbnail from 'figma:asset/e66dffe74735c938a0d34723aa2b5d60dd43634f.png';
import workerThumbnail from 'figma:asset/fea342814a0457061ff7af1352e18ac10e5b117e.png';
import emmelineThumbnail from 'figma:asset/ee6979c8bbe3714fbf51c62778fb0770974e5861.png';
import daveLeeThumbnail from 'figma:asset/755eaf3e9f132a77e7ae876ce1c855b4826a8e09.png';
import daveLee3Thumbnail from 'figma:asset/bc3fef842eb17791f51ca10416690031c385cd1b.png';

export default function FilmsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [currentThumbnailIndex, setCurrentThumbnailIndex] = useState(0);
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const rotatingWords = ['Documentaries', 'Biographical Films', 'Music Portraits', 'Portraits'];
  
  const thumbnails = [
    nicolasEconomouThumbnail,
    xpSchoolThumbnail,
    redOilThumbnail,
    workerThumbnail
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

  // Films reales de Steve Sklair
  const films = [
    {
      id: 1,
      title: 'Red Oil',
      year: '2006',
      duration: '58 min',
      description: 'A unique look inside PDVSA, Venezuela\'s state oil company during the Chávez era. With dynamic narrative rhythm, the film examines the relationship between petroleum, political power and revolutionary ideology.',
      category: 'documentaries',
      videoUrl: undefined, // Sin enlace disponible
      thumbnailUrl: redOilThumbnail
    },
    {
      id: 3,
      title: 'Above All Compassion: The Story of XP School',
      year: '2020',
      duration: '38 min',
      description: 'A three–year observational study of XP School in Doncaster, whose expeditionary learning approach has reshaped student confidence and academic success. A close, human look at an educational project built on empathy and experience.',
      category: 'documentaries',
      videoUrl: 'https://www.youtube.com/embed/MwrtCFGGUaE',
      thumbnailUrl: xpSchoolThumbnail
    },
    {
      id: 4,
      title: 'A Worker of the 20th Century',
      year: '1998',
      duration: '32 min',
      description: 'Filmed in Galicia and in the Galician language. The film tells the life story of Manuel Barros, a shipyard worker with communist leanings during the Franco dictatorship. Drawing from his written memoir and family interviews, the documentary offers an evocative portrait of working–class life lived under repression.',
      category: 'documentaries',
      videoUrl: 'https://www.youtube.com/embed/qtfe9KxzuGk',
      thumbnailUrl: workerThumbnail
    },
    {
      id: 5,
      title: 'Nicolas Economou',
      year: '2014',
      duration: '1h 35min',
      description: 'An intimate portrait of Cypriot pianist and composer Nicolas Economou. From his early childhood improvisations to international recognition, the film explores his musical sensitivity, artistic depth, and cultural legacy.',
      category: 'biographical',
      videoUrl: 'https://www.youtube.com/embed/OF0t9Q0FgBg',
      thumbnailUrl: nicolasEconomouThumbnail
    },
    {
      id: 6,
      title: 'EMMELINE The Suffragette Movement',
      year: '',
      duration: '2h 20min',
      description: 'A production of Beatrice Hyde\'s play about Emmeline Pankhurst. I organised the shoot. Filmed the production on four cameras and then edited it for distribution.',
      category: 'documentaries',
      videoUrl: 'https://www.youtube.com/embed/Cgf6xcIVujE',
      thumbnailUrl: emmelineThumbnail
    },
    {
      id: 7,
      title: 'Dave Lee\'s Jazz Tales 10 "Being Cool"',
      year: '',
      duration: '5 min',
      description: 'Dave Lee\'s story of being cool as a jazz musician in Britain at the end of the 1950\'s, and how, whatever happens, you stay cool!',
      category: 'music',
      videoUrl: 'https://www.youtube.com/embed/ke3-F1QCHNw',
      thumbnailUrl: daveLeeThumbnail
    },
    {
      id: 8,
      title: 'Dave Lee\'s Jazz Tales 3 - Duke Ellington',
      year: '2021',
      duration: '4min 29s',
      description: 'Dave tells the tale of playing four handed piano with Duke Ellington while touring with Johnny Dankworth. He is playing \'Mood Indigo\' (one of the pieces he played with the Duke).',
      category: 'music',
      videoUrl: 'https://player.vimeo.com/video/645142961',
      thumbnailUrl: daveLee3Thumbnail
    },
    {
      id: 2,
      title: 'The Man Who Loves Gary Lineker',
      year: '1993',
      duration: '1h 03min',
      description: 'The personal video diary of Ylli Hasani, a rural doctor in Albania, filmed during a period of political transition and hope. His fluent English learned from BBC radio, his admiration for Gary Lineker, and his struggle to obtain a visa reveal a life marked by dignity, resilience and longing.',
      category: 'documentaries',
      videoUrl: 'https://player.vimeo.com/video/638659899?h=7ad1aa7fd5&byline=0&portrait=0',
      thumbnailUrl: garyLinekerThumbnail
    },
  ];

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
                className={`relative z-10 px-6 py-2.5 rounded-full transition-colors duration-300 ${
                  selectedCategory === category.id
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
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}