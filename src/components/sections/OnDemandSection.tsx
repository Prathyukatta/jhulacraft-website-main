import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import acrylicSwing from "@/assets/acrylic-swing.jpg";
import carvedSwing from "@/assets/carved-swing.jpg";
import outdoorSwing from "@/assets/outdoor-swing.jpg";
import singleSwing from "@/assets/single-swing.jpg";

const products = [
  {
    name: "Machhu Teak Wood Premium",
    image: acrylicSwing,
    badge: "ON DEMAND",
    description: "Premium teak wood swing with elegant finish.",
  },
  {
    name: "Carved Swing Classic",
    image: carvedSwing,
    badge: "ON DEMAND",
    description: "Classic hand-carved swing with timeless design.",
  },
  {
    name: "Outdoor Swing Modern",
    image: outdoorSwing,
    badge: "ON DEMAND",
    description: "Durable outdoor swing perfect for gardens and balconies.",
  },
  {
    name: "Single Seater Swing",
    image: singleSwing,
    badge: "ON DEMAND",
    description: "Compact single seater swing for small spaces.",
  },
  {
    name: "Machhu Teak Royal",
    image: acrylicSwing,
    badge: "ON DEMAND",
    description: "Royal design teak swing for luxury interiors.",
  },
  {
    name: "Carved Swing Luxury",
    image: carvedSwing,
    badge: "ON DEMAND",
    description: "Luxury carved swing with premium polish.",
  },
];

export const OnDemandSection = () => {
  const navigate = useNavigate();
  const goToProducts = () => navigate("/products");

  // ✅ JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "Product",
      name: product.name,
      image: product.image,
      description: product.description,
      position: index + 1,
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: "0.00", // placeholder, update with real prices
        availability: "https://schema.org/PreOrder",
      },
    })),
  };

  return (
    <section className="py-16 bg-white font-poppins">
      {/* ✅ Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="container-custom">
        <h2 className="section-title mb-10 text-center">
          On Demand Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="product-card group relative cursor-pointer"
              role="button"
              tabIndex={0}
              onClick={goToProducts}
              onKeyDown={(e) => e.key === "Enter" && goToProducts()}
              itemScope
              itemType="https://schema.org/Product"
            >
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  itemProp="image"
                  loading="lazy"
                />

                {/* On Demand Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-[#B80735] to-[#EC6788] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    {product.badge}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-gray-800" itemProp="name">
                  {product.name}
                </h3>
                <meta itemProp="description" content={product.description} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            className="bg-gradient-to-r from-[#B80735] to-[#EC6788] hover:opacity-90 text-white px-10 py-3 rounded-lg font-semibold shadow-md"
            onClick={goToProducts}
          >
            Show All
          </Button>
        </div>
      </div>
    </section>
  );
};
