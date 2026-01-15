import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { toast } from "sonner@2.0.3";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function QuickContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error sending message: ${errorText}`);
      }

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(
        "Error submitting quick contact form:",
        error,
      );
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <Header />

      <div className="max-w-2xl mx-auto px-6 py-20 bg-[rgb(255,255,255)]">
        {/* Back Button */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[var(--fire-brick)] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to contact options
        </a>

        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4" style={{ color: "#001A28" }}>
            Quick Contact
          </h1>
          <p className="text-gray-600">
            Send us a quick message and we'll get back to you as
            soon as possible.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm"
              style={{ color: "#001A28" }}
            >
              Name *
            </label>
            <Input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              placeholder="Your name"
              className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              style={{ backgroundColor: "#FFFFFF" }}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm"
              style={{ color: "#001A28" }}
            >
              Email *
            </label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              placeholder="your@email.com"
              className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              style={{ backgroundColor: "#FFFFFF" }}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm"
              style={{ color: "#001A28" }}
            >
              Message *
            </label>
            <Textarea
              id="message"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
              placeholder="How can we help you?"
              rows={6}
              className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black resize-none"
              style={{ backgroundColor: "#FFFFFF" }}
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full"
            style={{
              backgroundColor: "var(--fire-brick)",
              color: "white",
            }}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>

      <Footer />
    </div>
  );
}