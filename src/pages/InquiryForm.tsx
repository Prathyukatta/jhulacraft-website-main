import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet-async";

const SERVICE_ID = "service_74wn06o";
const TEMPLATE_ID = "template_wy47a6o";
const PUBLIC_KEY = "Fkb-s6DgwS9g6QAIV";

const InquiryForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setPopup({ message: "❌ Please fill in all fields!", type: "error" });
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
          to_email_1: "prathyushakatta810@gmail.com",
          to_email_2: "anandtumma01@gmail.com",
        },
        PUBLIC_KEY
      );

      setPopup({ message: "✅ Inquiry sent successfully!", type: "success" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setPopup({
        message: "❌ Failed to send inquiry. Check your network.",
        type: "error",
      });
    } finally {
      setLoading(false);
      setTimeout(() => setPopup(null), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* ✅ SEO Optimized Helmet */}
      <Helmet>
        {/* Basic SEO */}
        <title>Contact Us | JhulaCraft</title>
        <meta
          name="description"
          content="Contact JhulaCraft for product inquiries, custom swing designs, and order details. We’re here to help!"
        />
        <meta
          name="keywords"
          content="JhulaCraft contact, swing inquiries, handcrafted swings, wooden swings, product inquiry"
        />
        <link rel="canonical" href="https://jhulacraft.com/contact" />

        {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
        <meta property="og:title" content="Contact JhulaCraft - Handcrafted Swings" />
        <meta
          property="og:description"
          content="Get in touch with JhulaCraft for product inquiries, custom swing designs, and support."
        />
        <meta property="og:url" content="https://jhulacraft.com/contact" />
        <meta property="og:image" content="https://jhulacraft.com/og-contact.jpg" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact JhulaCraft - Handcrafted Swings" />
        <meta
          name="twitter:description"
          content="Have questions? Contact JhulaCraft for product details, custom orders, and more."
        />
        <meta name="twitter:image" content="https://jhulacraft.com/og-contact.jpg" />

        {/* ✅ JSON-LD Schema for SEO */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Us - JhulaCraft",
            "url": "https://jhulacraft.com/contact",
            "description": "Contact JhulaCraft for product inquiries, custom swing designs, and support.",
            "publisher": {
              "@type": "Organization",
              "name": "JhulaCraft",
              "url": "https://jhulacraft.com",
              "logo": "https://jhulacraft.com/logo.png"
            }
          }
          `}
        </script>
      </Helmet>

      {/* Header */}
      <Header />

      {/* Popup Notification */}
      {popup && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded shadow-lg z-50 ${
            popup.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
          }`}
        >
          {popup.message}
        </div>
      )}

      {/* Inquiry Section */}
      <main className="flex-grow">
        <div className="max-w-2xl mx-auto px-4 pt-28 pb-16">
          {/* pt-28 pushes content below fixed header */}
          <h1 className="text-3xl font-bold mb-8 text-center">Product Inquiry</h1>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-6 space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md h-28"
              required
            />

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#B80735] to-[#EC6788]"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit Inquiry"}
            </Button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default InquiryForm;
