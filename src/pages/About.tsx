// src/pages/About.tsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "../components/layout/Header";
import { motion, Variants } from "framer-motion";

const About: React.FC = () => {
  const cardVariants: Variants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.3, duration: 0.8 },
    },
    hover: { scale: 1.05 },
  };

  // ✅ JSON-LD data
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Jhula House",
    "url": "https://jhulahouse.com",
    "logo": "https://jhulahouse.com/logo.png",
    "sameAs": [
      "https://instagram.com/jhulacraft",
      "https://youtube.com/@jhulacraft"
    ],
    "description":
      "Jhula House creates premium handcrafted swing jhulas with tradition, beauty, and comfort.",
  };

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>About Us | Jhula House - Premium Swing Jhulas</title>
        <meta
          name="description"
          content="Discover Jhula House's story, mission, and vision. We create handcrafted swing jhulas that bring comfort, beauty, and joy to your home."
        />
        <meta
          name="keywords"
          content="Jhula, Swing, JhulaCraft, Handcrafted Jhulas, Wooden Swings, Jhula House"
        />

        {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
        <meta
          property="og:title"
          content="About Jhula House - Premium Swing Jhulas"
        />
        <meta
          property="og:description"
          content="Learn about our journey, mission, and vision. Jhula House is your trusted destination for elegant handcrafted swing jhulas."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jhulahouse.com/about" />
        <meta
          property="og:image"
          content="https://jhulahouse.com/og-image.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Jhula House - Premium Swing Jhulas"
        />
        <meta
          name="twitter:description"
          content="Premium handcrafted swing jhulas designed with love and tradition. Learn about our mission and vision."
        />
        <meta
          name="twitter:image"
          content="https://jhulahouse.com/og-image.jpg"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://jhulahouse.com/about" />

        {/* ✅ JSON-LD Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </Helmet>

      {/* Header */}
      <Header />

      {/* About Section */}
      <section
        className="py-12 md:py-16 bg-gray-50 mt-10 md:mt-16"
        aria-label="About Jhula House"
      >
        <div className="container mx-auto px-6">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6 md:mb-8">
            About Jhula House
          </h2>

          {/* Intro Paragraph */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-10 md:mb-12">
            At <span className="font-semibold">Jhula House</span>, we are
            passionate about swings and dedicated to bringing you the best in
            swing designs and experiences. Whether you’re a swing enthusiast, a
            parent looking for the perfect backyard addition, or someone seeking
            relaxation and joy, we are your one-stop destination for all things
            swing-related.
          </p>

          {/* Our Story */}
          <div className="mb-10 md:mb-12">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Our Story
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The seeds of <span className="font-semibold">Jhula House</span>{" "}
              were sown when a group of like-minded individuals came together,
              bound by their shared appreciation for the simple pleasure of
              swinging. With backgrounds in design, wellness, craftsmanship, and
              outdoor living, we realized that swings have the power to
              transform spaces into havens of serenity and joy. United by this
              vision, we began our journey to curate a platform that celebrates
              swings and empowers others to experience their transformative
              magic.
            </p>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Mission Card */}
            <motion.div
              className="p-6 rounded-xl shadow-lg cursor-pointer bg-gradient-to-r from-pink-500 to-purple-500 text-white"
              initial="offscreen"
              whileInView="onscreen"
              whileHover="hover"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Our Mission
              </h3>
              <p className="leading-relaxed text-sm md:text-base">
                We are committed to showcasing a wide variety of swing styles,
                designs, and applications. By highlighting the versatility and
                beauty of swings, we inspire individuals to reimagine their
                living spaces and create retreats that reflect their unique
                lifestyle. Our goal is to provide accessible resources that
                empower our audience to make informed decisions about selecting,
                installing, and maintaining swings.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              className="p-6 rounded-xl shadow-lg cursor-pointer bg-gradient-to-r from-teal-400 to-blue-600 text-white"
              initial="offscreen"
              whileInView="onscreen"
              whileHover="hover"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Our Vision
              </h3>
              <p className="leading-relaxed text-sm md:text-base">
                Our vision at <span className="font-semibold">Jhula House</span>{" "}
                is to become the premier destination and global hub for swing
                enthusiasts, where imagination takes flight and swings embody
                comfort, creativity, and connection. We aspire to transform
                outdoor spaces into living works of art, inspiring a worldwide
                community to embrace the serenity and beauty of swings.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
