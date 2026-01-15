import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { TestimonialCard } from "../components/TestimonialCard";

export default function WorkingWithStevePage() {
  const testimonials = [
    {
      id: 1,
      name: "Yaba Badoe",
      role: "Documentary Filmmaker and Author",
      quote:
        "Steve is a pleasure to work with. A consummate professional, he has great ideas and knows how to implement them. Since we worked together Steve has become an experienced, camera operator, director and producer. Most important of all he knows how to engage with different kinds of people and get the best out of them. I strongly recommend him.",
    },
    {
      id: 2,
      name: "Fardi Mohamed",
      role: "Director SYS Visual (Marketing)",
      quote:
        "I have worked with Steve for the past 6 years on multiple video projects for large and medium companies and he has been extremely reliable. Steve is a talented Videographer and Director with a vast technical expertise. He is a great person to work with and I definitely fully recommend him.",
    },
    {
      id: 3,
      name: "Bob Long",
      role: "Executive Producer BBC",
      quote:
        "In all my time in TV I never met a more all-round talented programme maker. When I got the job at the BBC the first thing I did was to get Steve on board. He started as an AP (Assistant Producer), within a year he was a Producer and a year later a Series Producer. He became my troubleshooter – any commission that was extremely difficult I gave it to him, like working with impossibly difficult presenters or huge series that were logistical nightmares. He never failed to deliver…often more than I hoped for. A few years later we shared a BAFTA. Despite his considerable experience and talent he is modest to a fault and works well with absolutely everybody.",
    },
    {
      id: 4,
      name: "Madeleine Holt",
      role: "Producer / Reporter",
      quote:
        "Steve Sklair is an exceptionally talented filmmaker, and a real joy to work with. Steve has an unerring feel for the story in factual and documentary programmes, and a great way of getting the best out of contributors. I have booked Steve as director, as camera, as editor. He wears his experience and knowledge lightly, but you can always trust him to frame an arresting shot, to cut a captivating sequence, to lead a happy team. Steve delivers. A gifted and creative guy with a generous spirit – you want Steve on your production.",
    },
    {
      id: 5,
      name: "Paul Laverty",
      role: "Screen Writer",
      quote:
        "Steve Sklair worked with me as a very hands-on script editor on a 6-part TV series which is now in development. It's a very delicate and quirky skill; it is not just a question of trying to figure out where the holes are, but to have a clear sense of story, of how to seek the source of the problem. It's like trying to find a leak; the obvious point of damage is sometimes not where the real defect is. Steve was terrific at unraveling the complexity of a story of this length. In addition to having a great sense of narrative he has a wealth of experience behind him; very quickly you can see he has had a lifetime of editing. Another massive advantage is that he lived many lives; he has great insight and breathes a broad hinterland. His comments often inspired me to pursue possibilities I would never have thought of by myself. In addition, he's a terrific collaborator and lively company; he knows when to stick in the boot, but also, to encourage. I would highly recommend him to any other writer or team involved in development.",
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <Header />

      {/* Hero Section */}
      <section
        className="text-white py-20 md:py-32"
        style={{
          background:
            "linear-gradient(135deg, var(--prussian-blue), #001829)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="mb-6 text-[56px] md:text-[64px] font-bold leading-tight">
            Working With Steve
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Hear from the producers, directors, clients, and
            collaborators who have worked with Steve Sklair on
            projects across documentaries, corporate films, and
            commercials.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="mb-6">What People Say</h2>
          <p className="text-gray-700 leading-relaxed">
            Throughout his career, Steve has built lasting
            relationships with clients, collaborators, and
            subjects. His professional approach, creative
            vision, and human-centered storytelling have earned
            him the trust and respect of those he works with.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                quote={testimonial.quote}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="mb-6">Want to Work Together?</h2>
          <p className="text-gray-700 mb-8 text-lg">
            Whether you are a broadcaster, brand, or individual
            with a story to tell, Steve would love to hear from
            you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:steve_sklair@yahoo.co.uk"
              className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors inline-block"
            >
              Get In Touch
            </a>
            <a
              href="#films"
              className="bg-white text-black border-2 border-black px-8 py-3 rounded hover:bg-gray-100 transition-colors inline-block"
            >
              View Films
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
        style={{ backgroundColor: "#00c950" }}
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