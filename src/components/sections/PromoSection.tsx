import { Button } from "@/components/ui/button";
import heroSwing from "@/assets/hero-swing.jpg";
import { Link } from "react-router-dom";

export const PromoSection = () => {
  // ✅ JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": "JhulaCraft Premium Wooden Swing Offer",
    "image": "https://www.jhulacraft.com/hero-swing.jpg",
    "priceCurrency": "INR",
    "price": "14999", // update with real offer price
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "JhulaCraft",
    },
  };

  return (
    <section
      className="py-6 bg-white font-poppins"
      aria-label="Promotional Offer Section"
      itemScope
      itemType="https://schema.org/Offer"
    >
      {/* ✅ JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="container-custom">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[220px] md:h-[280px]">
          {/* Background Image */}
          <img
            src={heroSwing}
            alt="JhulaCraft Premium Wooden Swing Offer"
            className="absolute inset-0 w-full h-full object-cover"
            itemProp="image"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-start justify-center h-full p-5 md:p-10 text-white">
            <h2
              className="text-xl md:text-3xl lg:text-4xl font-bold leading-snug mb-3"
              itemProp="name"
            >
              DEALS THAT MAKE <br />
              <span className="text-white text-2xl md:text-4xl lg:text-5xl font-extrabold">
                YOU DROOL!
              </span>
            </h2>

            {/* Offer Schema Props */}
            <meta itemProp="priceCurrency" content="INR" />
            <meta itemProp="price" content="14999" />
            <meta itemProp="availability" content="https://schema.org/InStock" />
            <meta itemProp="seller" content="JhulaCraft" />

            <Link to="/products" itemProp="url">
              <Button
                className="px-5 py-2 text-sm md:text-lg font-bold rounded-lg text-white shadow-md transition-transform transform hover:scale-105"
                style={{
                  backgroundImage: "linear-gradient(90deg, #B80735, #EC6788)",
                }}
              >
                SHOP NOW
              </Button>
            </Link>
          </div>

          {/* Logo/Brand */}
          <div className="absolute top-4 right-4 md:top-6 md:right-6 text-white z-10 hidden md:flex">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-[#B80735] to-[#EC6788] rounded transform rotate-45 shadow-sm"></div>
              <span className="text-lg md:text-xl font-bold">JhulaCraft</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
