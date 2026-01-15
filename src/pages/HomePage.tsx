import { VideoCard } from '../components/VideoCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const fullText = "Honest documentaries, told with a human gaze.";
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="https://sklairfilms.com/wp-content/uploads/2023/05/Home-Intro.mp4" type="video/mp4" />
        </video>

        {/* Red Overlay */}
        <div className="absolute inset-0 animate-gradient" style={{
          background: 'linear-gradient(135deg, var(--fire-brick) 0%, var(--barn-red) 50%, var(--fire-brick) 100%)',
          backgroundSize: '200% 200%',
          opacity: 0.85
        }}></div>
        <style>{`
          @keyframes gradient {
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
          .animate-gradient {
            animation: gradient 8s ease infinite;
          }
        `}</style>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="mb-6 text-[64px] leading-[70px] tracking-[-2px] text-[rgb(255,255,255)] font-bold">
            Camera, editor<br />and director.
          </h1>
          <p className="text-gray-100 mb-8 text-lg min-h-[2rem]">
            {displayedText}
            <span className="animate-blink">|</span>
          </p>
          <style>{`
            @keyframes blink {
              0%, 50% { opacity: 1; }
              51%, 100% { opacity: 0; }
            }
            .animate-blink {
              animation: blink 1s infinite;
            }
          `}</style>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#films"
              className="bg-white text-black px-8 py-3 rounded hover:bg-gray-100 transition-colors inline-block shadow-lg"
            >
              View work
            </a>
            <a
              href="#steve"
              className="bg-transparent text-white px-8 py-3 rounded border-2 border-white hover:bg-white/10 transition-colors inline-block"
            >
              About me
            </a>
          </div>
        </div>
      </section>

      {/* Video Grid Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <VideoCard
              title="A Worker of the 20th Century"
              year="1998"
              duration="32 min"
              description="Filmed in Galicia and in the Galician language. The film tells the life story of Manuel Barros, a shipyard worker with communist leanings during the Franco dictatorship."
              videoUrl="https://www.youtube.com/embed/qtfe9KxzuGk"
              thumbnailUrl="/images/films/worker.png"
            />
            <VideoCard
              title="Nicolas Economou"
              year="2014"
              duration="1h 35min"
              description="An intimate portrait of Cypriot pianist and composer Nicolas Economou, exploring his musical sensitivity and cultural legacy."
              videoUrl="https://www.youtube.com/embed/OF0t9Q0FgBg"
              thumbnailUrl="/images/films/nicolas-economou.png"
            />
            <VideoCard
              title="Above All Compassion: The Story of XP School"
              year="2020"
              duration="38 min"
              description="A three-year observational study of XP School in Doncaster and its expeditionary learning approach."
              videoUrl="https://www.youtube.com/embed/MwrtCFGGUaE"
              thumbnailUrl="/images/films/xp-school.png"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="steve"
        className="py-16 md:py-24 bg-black"
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="mb-6 text-[56px] leading-[84px] tracking-[-3px] text-[#f2f1f1] font-bold p-[0px]">
            Steve Sklair
          </h2>
          <p className="text-white mb-8 leading-[26px]">
            Steve is an all round film maker who has worked<br className="hidden md:block" />
            with all the major UK broadcasters.
          </p>
          <a href="#steve" className="text-white px-8 py-3 rounded hover:bg-opacity-90 transition-colors inline-block" style={{ backgroundColor: 'var(--fire-brick)' }}>
            Learn More
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-20 bg-[#fdf0d5] bg-[rgb(255,255,255)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <TestimonialCard
              name="Yaba Badoe"
              role="Documentary Filmmaker and Author"
              quote="Steve is a pleasure to work with. A consummate professional, he has great ideas and knows how to implement them. Since we worked together Steve has become an experienced, camera operator, director and producer. Most important of all he knows how to engage with different kinds of people and get the best out of them. I strongly recommend him."
            />
            <TestimonialCard
              name="Bob Long"
              role="Executive Producer BBC"
              quote="In all my time in TV I never met a more all-round talented programme maker. When I got the job at the BBC the first thing I did was to get Steve on board. He started as an AP (Assistant Producer), within a year he was a Producer and a year later a Series Producer. He became my troubleshooter – any commission that was extremely difficult I gave it to him, like working with impossibly difficult presenters or huge series that were logistical nightmares. He never failed to deliver…often more than I hoped for."
            />
            <TestimonialCard
              name="Madeleine Holt"
              role="Producer / Reporter"
              quote="Steve Sklair is an exceptionally talented filmmaker, and a real joy to work with. Steve has an unerring feel for the story in factual and documentary programmes, and a great way of getting the best out of contributors. I have booked Steve as director, as camera, as editor. He wears his experience and knowledge lightly, but you can always trust him to frame an arresting shot, to cut a captivating sequence, to lead a happy team. Steve delivers."
            />
          </div>
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