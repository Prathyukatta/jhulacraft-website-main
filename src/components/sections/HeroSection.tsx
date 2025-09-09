// src/components/sections/HeroSection.tsx
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  const navigate = useNavigate();

  const goToProducts = () => navigate("/products");
  const refreshHero = () => window.location.reload();

  // ✅ Structured Data (JSON-LD for SEO)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Outdoor Swing Jhula",
    "image": "https://www.jhulacraft.com/HERO.jpg", // replace with actual hosted image URL
    "description":
      "Premium outdoor swing jhula – trending new designs for homes, gardens, and modern interiors.",
    "brand": {
      "@type": "Brand",
      "name": "JhulaCraft",
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": "15999", // update with real price
      "availability": "https://schema.org/InStock",
    },
  };

  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden font-poppins">
      {/* ✅ JSON-LD script for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ✅ Hero Background Image (warning-free) */}
      <motion.img
        src="/HERO.jpg"
        alt="Premium Outdoor Swing Jhula – Trending New Designs"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/8" />

      {/* Left chevron */}
      <button
        onClick={refreshHero}
        aria-label="Previous Hero Banner"
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full border border-white/40 bg-white/10 text-white hover:bg-white/20 transition"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Right chevron */}
      <button
        onClick={refreshHero}
        aria-label="Next Hero Banner"
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/75 hover:bg-white p-2 rounded-full shadow-md transition"
      >
        <ChevronRight size={20} className="text-gray-800" />
      </button>

      {/* Text Content */}
      <div className="relative z-20 px-6 md:px-12 lg:px-20 w-full">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-xl text-left ml-10 md:ml-20 lg:ml-28"
        >
          {/* Badge */}
          <div className="mb-4">
            <span
              className="bg-white px-3 py-1 rounded-full text-xs md:text-sm font-medium inline-block shadow-sm"
              style={{ color: "#E00F44" }}
            >
              Classic & Latest
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[28px] md:text-[38px] lg:text-[46px] xl:text-[52px] font-extrabold leading-snug text-white drop-shadow-md mb-2">
            TRENDING
            <br />
            <span className="text-[32px] md:text-[42px] lg:text-[50px] xl:text-[58px] font-black">
              NEW DESIGNS
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] text-white/90 mb-4 drop-shadow-sm">
            Premium Outdoor Swing Jhula
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-block"
          >
            <Button
              onClick={goToProducts}
              className="text-white px-5 py-2 md:px-7 md:py-2.5 rounded-md shadow-lg text-sm md:text-base font-semibold"
              style={{
                backgroundImage: "linear-gradient(90deg, #B80735, #EC6788)",
                border: "none",
              }}
            >
              ORDER NOW
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
