import { Link } from "react-router-dom";
import acrylicSwing from "@/assets/acrylic-swing.jpg";
import carvedSwing from "@/assets/carved-swing.jpg";
import outdoorSwing from "@/assets/outdoor-swing.jpg";
import singleSwing from "@/assets/single-swing.jpg";

const categories = [
  { name: "ACRYLIC SWING", image: acrylicSwing },
  { name: "CARVING SWING", image: carvedSwing },
  { name: "OUTDOOR SWING", image: outdoorSwing },
  { name: "SINGLE SEATER SWING", image: singleSwing },
  { name: "SINGLE SWING", image: acrylicSwing },
  { name: "STAINLESS STEEL SWING", image: carvedSwing },
  { name: "SWING WITH STAND", image: outdoorSwing },
  { name: "WICKER SWING", image: singleSwing },
];

const CategoriesSection = () => {
  // ✅ JSON-LD Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: categories.map((cat, index) => ({
      "@type": "CategoryCode",
      name: cat.name,
      image: `https://www.jhulacraft.com${cat.image}`,
      position: index + 1,
      url: `https://www.jhulacraft.com/products?category=${encodeURIComponent(
        cat.name
      )}`,
    })),
  };

  return (
    <section
      className="py-16 bg-white font-poppins"
      itemScope
      itemType="https://schema.org/CollectionPage"
    >
      {/* ✅ Inject JSON-LD for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <meta itemProp="name" content="Swing Categories - JhulaCraft" />
      <meta
        itemProp="description"
        content="Explore handcrafted swing categories like acrylic, carved, outdoor, single seater, and more from JhulaCraft."
      />

      <div className="container-custom">
        <h2 className="section-title text-3xl font-bold mb-8">
          Our Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/products?category=${encodeURIComponent(category.name)}`}
              aria-label={`View products in ${category.name}`}
              className="category-card group cursor-pointer"
              itemProp="hasPart"
              itemScope
              itemType="https://schema.org/CategoryCode"
            >
              <meta itemProp="name" content={category.name} />
              <meta
                itemProp="image"
                content={`https://www.jhulacraft.com${category.image}`}
              />

              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={category.image}
                  alt={`${category.name} collection`}
                  width="400"
                  height="300"
                  loading="lazy"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3
                    className="text-white px-3 py-1 rounded text-sm font-bold text-center shadow-md"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #B80735, #EC6788)",
                    }}
                  >
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
