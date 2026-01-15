import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Camera, Award, Film, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function StevePage() {
  const fullText = "An all-round filmmaker with decades of experience working with all the major UK broadcasters, crafting honest documentaries told with a human gaze.";
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Header />

      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-50"
          style={{ backgroundImage: 'url(https://sklairfilms.com/wp-content/uploads/2023/01/NSOP6212.jpg)' }}
        ></div>

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-gray-900/80 to-gray-800/75 animate-gradient-steve"></div>
        
        <style>{`
          @keyframes gradient-steve {
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
          .animate-gradient-steve {
            background-size: 200% 200%;
            animation: gradient-steve 10s ease infinite;
          }
        `}</style>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="mb-6 text-[56px] md:text-[64px] font-bold leading-tight drop-shadow-2xl">
            Steve Sklair
          </h1>
          <p className="text-gray-100 text-xl mb-4 drop-shadow-lg">
            Camera, Editor and Director
          </p>
          <p className="text-gray-200 text-lg max-w-2xl drop-shadow-lg min-h-[4rem]">
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
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="mb-8">About Steve</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Steve started his professional television work in editing and he graduated to Production and camerawork. 
              He had two long spells at the BBC and while there one of his films he directed, a Video Diary, 
              'The Man Who Loves Gary Lineker' won a BAFTA for Best Single Documentary. He also won a UNICEF award 
              for a film 'furthering the rights of the child' (Child Slave Rescue). He has worked as Series Producer 
              on many factual series, often creating the style and feel of first run series.
            </p>
            <p>
              Before working for the BBC his first film as director was 'The Black and White Pirate Show' – 
              a one hour documentary about pirate radio for Channel 4.
            </p>
            <p>
              He has worked on a lot of long form documentaries, cutting his teeth on Video Diaries where most 
              diaries were one hour or longer. His particular skill is in keeping people's interest and enthusiasm 
              over the span of a longer film. Video Diaries very much needed the guiding hand and sense of a story 
              that Steve as Producer had.
            </p>
            <p>
              He directed and produced two films in the Channel 4 series 'No Going Back' – each programme looking 
              at the highs and lows of families who try to make a new life away from England. (a one hour Channel 4 slot). 
              Steve structured the programmes and wrote the narration.
            </p>
            <p>
              He shot and edited the one hour documentary 'Red Oil' for True Stories on More 4.
            </p>
            <p>
              More recently he directed, wrote, shot and edited a 90 minute feature documentary about the 
              Cypriot classical pianist Nicolas Economou.
            </p>
            <p>
              He also made 'A Worker of the 20th Century' for TVG (Galicia TV) in Galician about a communist 
              living under the Franco dictatorship.
            </p>
            <p>
              Steve has also been working in videos about education for the last 4 years in conjunction with 
              the National Education Union and campaign groups More Than a Score and Rescue our Schools. 
              Recently he has made web documentaries about expeditionary learning for the Edge Foundation, 
              and has filmed and edited a 38 minute documentary about XP Secondary School in Doncaster. 
              He has a real eye for capturing the most important moments with children in schools and he gets 
              on with everyone, helping to put interviewees at ease with the camera, as well as a strong 
              editorial sense and what makes a good story. He is currently working with Schools on Screen 
              making 40 films for The Next Big 10, promoting progressive initiatives in education in England.
            </p>
            <p>
              Recently he's filmed and edited a series of films for the Stroke Association helping stroke 
              survivors get back to cooking and also a theatre performance of Emmeline – The Suffragette 
              Movement for Theatre Lab.
            </p>
            <p>
              He loves music and has shot and edited several music pieces with the renowned jazz pianist, Dave Lee.
            </p>
            <p>
              He also directs, films and edits corporate films for companies like Microsoft, The French Chamber 
              of Commerce, the Hackett group and SAP.
            </p>
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg text-center shadow-lg">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3">Cinematography</h3>
              <p className="text-gray-600 text-sm">
                Expert camera operation across multiple formats and situations, from intimate interviews to dynamic action sequences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg text-center shadow-lg">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Film className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3">Editing</h3>
              <p className="text-gray-600 text-sm">
                Skilled in Final Cut Studio Pro, crafting compelling narratives through thoughtful post-production.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg text-center shadow-lg">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3">Directing</h3>
              <p className="text-gray-600 text-sm">
                Leading productions from concept to completion with creative vision and practical expertise.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg text-center shadow-lg">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3">Production</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive production management skills honed through years of broadcast television work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="mb-12 text-center">Awards & Recognition</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-black pl-6 py-2">
              <h3 className="mb-2">BAFTA Award</h3>
              <p className="text-gray-600 mb-2">Best Single Documentary</p>
              <p className="text-gray-700">
                Won for directing the Video Diary 'The Man Who Loves Gary Lineker' during his time at the BBC.
              </p>
            </div>

            <div className="border-l-4 border-black pl-6 py-2">
              <h3 className="mb-2">UNICEF Award</h3>
              <p className="text-gray-600 mb-2">Furthering the Rights of the Child</p>
              <p className="text-gray-700">
                Awarded for the impactful documentary 'Child Slave Rescue'.
              </p>
            </div>

            <div className="border-l-4 border-black pl-6 py-2">
              <h3 className="mb-2">Series Producer</h3>
              <p className="text-gray-600 mb-2">BBC & Major UK Broadcasters</p>
              <p className="text-gray-700">
                Created the style and feel of first run factual series, establishing production standards 
                for long-form documentary work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notable Works Section */}
      <section className="py-16 md:py-20 bg-[rgb(253,240,213)] bg-[rgb(255,255,255)]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="mb-12 text-center">Notable Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg shadow-md bg-white">
              <h3 className="mb-3">The Black and White Pirate Show</h3>
              <p className="text-gray-600 text-sm mb-2">Channel 4</p>
              <p className="text-gray-700">
                One hour documentary about pirate radio. Steve's first film as director.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-md bg-white">
              <h3 className="mb-3">The Man Who Loves Gary Lineker</h3>
              <p className="text-gray-600 text-sm mb-2">BBC Video Diary - BAFTA Winner</p>
              <p className="text-gray-700">
                Award-winning Video Diary that secured the BAFTA for Best Single Documentary.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-md bg-white">
              <h3 className="mb-3">No Going Back</h3>
              <p className="text-gray-600 text-sm mb-2">Channel 4 Series</p>
              <p className="text-gray-700">
                Directed and produced two films examining families making new lives abroad.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-md bg-white">
              <h3 className="mb-3">Red Oil</h3>
              <p className="text-gray-600 text-sm mb-2">More 4 - True Stories</p>
              <p className="text-gray-700">
                One hour documentary shot and edited by Steve for the True Stories strand.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-md bg-white">
              <h3 className="mb-3">Nicolas Economou Documentary</h3>
              <p className="text-gray-600 text-sm mb-2">90 Minute Feature</p>
              <p className="text-gray-700">
                Directed, wrote, shot and edited feature documentary about the Cypriot classical pianist.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-md bg-white">
              <h3 className="mb-3">A Worker of the 20th Century</h3>
              <p className="text-gray-600 text-sm mb-2">TVG (Galicia TV)</p>
              <p className="text-gray-700">
                Film in Galician about a communist living under the Franco dictatorship.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-md bg-white">
              <h3 className="mb-3">Education Documentaries</h3>
              <p className="text-gray-600 text-sm mb-2">National Education Union & Edge Foundation</p>
              <p className="text-gray-700">
                Web documentaries about expeditionary learning and a 38-minute film about XP Secondary School in Doncaster.
              </p>
            </div>

            <div className="p-6 rounded-lg shadow-md bg-white">
              <h3 className="mb-3">The Next Big 10</h3>
              <p className="text-gray-600 text-sm mb-2">Schools on Screen - 40 Films</p>
              <p className="text-gray-700">
                Currently producing 40 films promoting progressive initiatives in education in England.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 md:py-20 bg-[#fdf0d5]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center mb-12">Professional Equipment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 rounded-lg shadow-md bg-[#fdf0d5]">
              <h3 className="mb-6">Cameras</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <span className="text-gray-900">Sony Z90</span>
                    <p className="text-gray-600 text-sm">Professional 4K camcorder for broadcast quality</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <span className="text-gray-900">Panasonic GH5</span>
                    <p className="text-gray-600 text-sm">Versatile mirrorless camera for cinematic footage</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <span className="text-gray-900">OSMO Pocket Gimbal</span>
                    <p className="text-gray-600 text-sm">Compact stabilization for dynamic shots</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <span className="text-gray-900">DJI Mini 3</span>
                    <p className="text-gray-600 text-sm">Aerial cinematography and establishing shots</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-lg shadow-md bg-[#fdf0d5]">
              <h3 className="mb-6">Post-Production</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <span className="text-gray-900">Final Cut Studio Pro</span>
                    <p className="text-gray-600 text-sm">Professional editing software for all projects</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <span className="text-gray-900">Color Grading</span>
                    <p className="text-gray-600 text-sm">Professional color correction and grading</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <span className="text-gray-900">Audio Post</span>
                    <p className="text-gray-600 text-sm">Sound design and audio mixing capabilities</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="mb-6 text-white">Let's Work Together</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Interested in collaborating on your next project? Get in touch to discuss how we can 
            bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:steve_sklair@yahoo.co.uk" 
              className="bg-white text-black px-8 py-3 rounded hover:bg-gray-200 transition-colors inline-block"
            >
              Email Steve
            </a>
            <a 
              href="tel:+447743671868" 
              className="bg-transparent text-white border-2 border-white px-8 py-3 rounded hover:bg-white hover:text-black transition-colors inline-block"
            >
              Call Now
            </a>
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
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}