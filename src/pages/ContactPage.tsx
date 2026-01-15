import { ArrowRight } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function ContactPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Header />
      
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="mb-6" style={{ color: '#001A28' }}>
            How would you like to get in touch?
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the option that best suits your needs
          </p>
        </div>

        {/* Options */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Quick Contact */}
          <a
            href="#contact/quick"
            className="group block p-8 border-2 border-gray-200 rounded-lg hover:border-[var(--fire-brick)] transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-2xl" style={{ color: '#001A28' }}>
                Quick Contact
              </h2>
              <ArrowRight 
                className="w-6 h-6 text-gray-400 group-hover:text-[var(--fire-brick)] group-hover:translate-x-2 transition-all duration-300" 
              />
            </div>
            <p className="text-gray-600 mb-4">
              A short form for general inquiries or first contact.
            </p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>• Quick response time</li>
              <li>• General questions</li>
              <li>• Initial consultation</li>
            </ul>
          </a>

          {/* Project Brief */}
          <a
            href="#contact/brief"
            className="group block p-8 border-2 border-gray-200 rounded-lg hover:border-[var(--fire-brick)] transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-2xl" style={{ color: '#001A28' }}>
                Project Brief
              </h2>
              <ArrowRight 
                className="w-6 h-6 text-gray-400 group-hover:text-[var(--fire-brick)] group-hover:translate-x-2 transition-all duration-300" 
              />
            </div>
            <p className="text-gray-600 mb-4">
              For detailed project requests and quotes.
            </p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>• Detailed project information</li>
              <li>• Budget and timeline discussion</li>
              <li>• Comprehensive quote</li>
            </ul>
          </a>
        </div>
        
        {/* Removed direct contact section */}
      </div>
      
      <Footer />
    </div>
  );
}