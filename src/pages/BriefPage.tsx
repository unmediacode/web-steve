import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FileText, Send, ArrowLeft } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export default function BriefPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    projectTitle: '',
    description: '',
    objectives: '',
    targetAudience: '',
    budget: '',
    timeline: '',
    deliverables: '',
    references: '',
    additionalInfo: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-39720f7e/brief/submit`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit brief');
      }

      console.log('Brief submitted successfully:', data.briefId);
      setIsSubmitted(true);
      
      // Scroll to top
      window.scrollTo(0, 0);
      
    } catch (err) {
      console.error('Error submitting brief:', err);
      setError(err.message || 'Failed to submit brief. Please try again.');
      window.scrollTo(0, 0);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
        <Header />
        <section className="py-20 md:py-32">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="mb-6">Brief Submitted Successfully</h1>
            <p className="text-gray-700 text-lg mb-8">
              Thank you for submitting your project brief. Steve will review your information and 
              get back to you within 24-48 hours to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#home" 
                className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors inline-block"
              >
                Back to Home
              </a>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="bg-white text-black border-2 border-black px-8 py-3 rounded hover:bg-gray-100 transition-colors"
              >
                Submit Another Brief
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Header />

      {/* Hero Section */}
      <section className="text-white py-20 md:py-24" style={{ background: 'linear-gradient(135deg, var(--prussian-blue), #001829)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to contact options
          </a>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="mb-6 text-[56px] md:text-[64px] font-bold leading-tight">
              Project Brief
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Tell us about your project. The more detail you provide, the better we can 
              understand your vision and deliver the perfect solution.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Error Message */}
          {error && (
            <div className="mb-8 bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg">
              <p className="font-semibold">Error</p>
              <p>{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="+44 7743 671868"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block mb-2 text-gray-700">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Your Company Ltd"
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="mb-6">Project Details</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="projectType" className="block mb-2 text-gray-700">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="">Select a project type</option>
                    <option value="documentary">Documentary</option>
                    <option value="corporate">Corporate Film</option>
                    <option value="commercial">Commercial / Advertisement</option>
                    <option value="training">Training Video</option>
                    <option value="event">Event Coverage</option>
                    <option value="interview">Interview / Testimonial</option>
                    <option value="social">Social Media Content</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="projectTitle" className="block mb-2 text-gray-700">
                    Project Title / Working Title *
                  </label>
                  <input
                    type="text"
                    id="projectTitle"
                    name="projectTitle"
                    required
                    value={formData.projectTitle}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Project name or working title"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block mb-2 text-gray-700">
                    Project Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={5}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black resize-none"
                    placeholder="Describe your project in detail. What is the story you want to tell?"
                  />
                </div>

                <div>
                  <label htmlFor="objectives" className="block mb-2 text-gray-700">
                    Project Objectives *
                  </label>
                  <textarea
                    id="objectives"
                    name="objectives"
                    required
                    rows={4}
                    value={formData.objectives}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black resize-none"
                    placeholder="What do you want to achieve with this project? What message do you want to convey?"
                  />
                </div>

                <div>
                  <label htmlFor="targetAudience" className="block mb-2 text-gray-700">
                    Target Audience *
                  </label>
                  <input
                    type="text"
                    id="targetAudience"
                    name="targetAudience"
                    required
                    value={formData.targetAudience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Who is this project for? (e.g., corporate clients, general public, employees)"
                  />
                </div>
              </div>
            </div>

            {/* Budget & Timeline */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="mb-6">Budget & Timeline</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block mb-2 text-gray-700">
                    Estimated Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5k">Under £5,000</option>
                    <option value="5k-10k">£5,000 - £10,000</option>
                    <option value="10k-25k">£10,000 - £25,000</option>
                    <option value="25k-50k">£25,000 - £50,000</option>
                    <option value="over-50k">Over £50,000</option>
                    <option value="flexible">Flexible / TBD</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block mb-2 text-gray-700">
                    Desired Timeline
                  </label>
                  <input
                    type="text"
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="e.g., 2 months, by March 2025, ASAP"
                  />
                </div>
              </div>
            </div>

            {/* Deliverables & Additional Info */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="mb-6">Additional Information</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="deliverables" className="block mb-2 text-gray-700">
                    Expected Deliverables
                  </label>
                  <textarea
                    id="deliverables"
                    name="deliverables"
                    rows={3}
                    value={formData.deliverables}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black resize-none"
                    placeholder="What formats do you need? (e.g., 5-minute video, social media edits, full documentary)"
                  />
                </div>

                <div>
                  <label htmlFor="references" className="block mb-2 text-gray-700">
                    References / Inspiration
                  </label>
                  <textarea
                    id="references"
                    name="references"
                    rows={3}
                    value={formData.references}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black resize-none"
                    placeholder="Links to similar projects or styles you like"
                  />
                </div>

                <div>
                  <label htmlFor="additionalInfo" className="block mb-2 text-gray-700">
                    Additional Comments
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    rows={4}
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black resize-none"
                    placeholder="Any other information you think would be helpful"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-black text-white px-12 py-4 rounded hover:bg-gray-800 transition-colors flex items-center gap-3 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Brief
                  </>
                )}
              </button>
            </div>

            <p className="text-center text-gray-600 text-sm">
              * Required fields. Your information will be kept confidential.
            </p>
          </form>
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