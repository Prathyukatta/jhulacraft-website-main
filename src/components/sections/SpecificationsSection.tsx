import swing from "@/assets/acrylic-swing.jpg";
import swingHardware from "@/assets/swing-hardware.jpg";
import outdoorSwing from "@/assets/outdoor-swing.jpg";

export const SpecificationsSection = () => {
  // ✅ JSON-LD Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Premium Handcrafted Wooden Swing",
    "image": [
      "https://www.jhulacraft.com/acrylic-swing.jpg",
      "https://www.jhulacraft.com/swing-hardware.jpg",
      "https://www.jhulacraft.com/outdoor-swing.jpg"
    ],
    "description":
      "Premium handcrafted swing made with teak wood and stainless steel hardware, designed for outdoor and indoor comfort with weatherproof coating.",
    "brand": {
      "@type": "Brand",
      "name": "JhulaCraft"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": "15999", // update with real price
      "availability": "https://schema.org/InStock",
      "url": "https://www.jhulacraft.com/products"
    }
  };

  return (
    <section
      className="py-12 bg-gray-100 font-poppins"
      aria-label="Product Specifications"
      itemScope
      itemType="https://schema.org/Product"
    >
      {/* ✅ Inject JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="container-custom max-w-6xl">
        {/* Section Title */}
        <h2
          className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800"
          itemProp="name"
        >
          The Specifications
        </h2>

        {/* Layout */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch">
          {/* Left: Large Showcase Image */}
          <div className="flex-1">
            <img
              src={swing}
              alt="Premium handcrafted swing with teak wood finish"
              className="w-full h-[280px] md:h-[320px] object-cover rounded-lg shadow-md"
              itemProp="image"
            />
          </div>

          {/* Right: Grid of Details */}
          <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-3 md:gap-4">
            <img
              src={swingHardware}
              alt="Durable stainless steel swing hardware"
              className="w-full h-36 md:h-40 object-cover rounded-lg shadow-md"
              itemProp="image"
            />
            <img
              src={outdoorSwing}
              alt="Outdoor-friendly swing with weatherproof coating"
              className="w-full h-36 md:h-40 object-cover rounded-lg shadow-md"
              itemProp="image"
            />
            <img
              src={swingHardware}
              alt="Heavy-duty suspension chains for safety"
              className="w-full h-36 md:h-40 object-cover rounded-lg shadow-md"
              itemProp="image"
            />
            <img
              src={outdoorSwing}
              alt="Ergonomic design for comfort and durability"
              className="w-full h-36 md:h-40 object-cover rounded-lg shadow-md"
              itemProp="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
