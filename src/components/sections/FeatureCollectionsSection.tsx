import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import acrylicSwing from "@/assets/acrylic-swing.jpg";
import carvedSwing from "@/assets/carved-swing.jpg";
import outdoorSwing from "@/assets/outdoor-swing.jpg";
import singleSwing from "@/assets/single-swing.jpg";
import { useMemo } from "react";

const collections = [
  {
    name: "Acrylic Teak Wood Swing",
    image: acrylicSwing,
    badge: "NEW",
    description: "Elegant acrylic teak wood swing, perfect for modern homes.",
  },
  {
    name: "Carved Wooden Swing",
    image: carvedSwing,
    badge: "NEW",
    description: "Premium carved swing with timeless traditional design.",
  },
  {
    name: "Outdoor Patio Swing",
    image: outdoorSwing,
    badge: "NEW",
    description: "Durable outdoor patio swing for gardens and balconies.",
  },
  {
    name: "Single Seater Swing",
    image: singleSwing,
    badge: "NEW",
    description: "Compact single seater swing for cozy spaces.",
  },
];

const FeatureCollectionsSection = () => {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate("/products");
  };

  // ✅ SEO Structured Data
  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "JhulaCraft Feature Collections",
      itemListElement: collections.map((item, index) => ({
        "@type": "Product",
        position: index + 1,
        name: item.name,
        description: item.description,
        image: `https://www.jhulacraft.com${item.image}`,
        url: `https://www.jhulacraft.com/products/${encodeURIComponent(
          item.name
        )}`,
      })),
    }),
    []
  );

  return (
    <section
      className="py-16 bg-gray-50"
      itemScope
      itemType="https://schema.org/CollectionPage"
    >
      <meta itemProp="name" content="JhulaCraft Feature Collections" />
      <meta
        itemProp="description"
        content="Explore JhulaCraft's featured swing collections including acrylic, carved, outdoor, and single-seater swings."
      />

      {/* ✅ SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="container-custom">
        <h2 className="section-title">Feature Collections</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="product-card group relative"
              itemScope
              itemType="https://schema.org/ProductCollection"
            >
              <meta itemProp="name" content={collection.name} />
              <meta
                itemProp="image"
                content={`https://www.jhulacraft.com${collection.image}`}
              />
              <meta itemProp="description" content={collection.description} />

              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={collection.image}
                  alt={collection.name}
                  width="400"
                  height="300"
                  loading="lazy"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                    {collection.badge}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    aria-label={`View ${collection.name} Collection`}
                    className="bg-gradient-to-r from-[#B80735] to-[#EC6788] hover:opacity-90 text-white"
                    onClick={goToProducts}
                  >
                    View Collection
                  </Button>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 text-center">
                  {collection.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button
            aria-label="Shop all collections"
            className="bg-gradient-to-r from-[#B80735] to-[#EC6788] hover:opacity-90 text-white px-8 py-3"
            onClick={goToProducts}
          >
            SHOP NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureCollectionsSection;
