import { useRef, useState } from "react";
import {
  Star,
  StarHalf,
  Heart,
  Volume2,
  VolumeX,
  Play,
  Pause,
} from "lucide-react";
import acrylicSwing from "@/assets/acrylic-swing.jpg";
import carvedSwing from "@/assets/carved-swing.jpg";
import outdoorSwing from "@/assets/outdoor-swing.jpg";

// ✅ Videos
import sample4 from "@/assets/sample-4.mp4";
import sample5 from "@/assets/sample-5.mp4";

// ⭐ Product Data
const products = [
  {
    id: 1,
    name: "Acrylic Teak Wood Swing",
    image: acrylicSwing,
    video: sample4,
    rating: 4.5,
    description:
      "Handcrafted acrylic teak wood swing with durable finish and elegant style, perfect for modern interiors.",
  },
  {
    id: 2,
    name: "Carved Wooden Swing",
    image: carvedSwing,
    video: sample5,
    rating: 4.2,
    description:
      "Beautifully carved swing with premium polish and long-lasting comfort. Adds luxury to any living space.",
  },
  {
    id: 3,
    name: "Outdoor Patio Swing",
    image: outdoorSwing,
    video: sample4,
    rating: 4.7,
    description:
      "Weather-resistant outdoor swing designed for gardens and balconies. Strong, stylish, and easy to maintain.",
  },
];

// ⭐ Rating Component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => {
        if (star <= Math.floor(rating)) {
          return (
            <Star
              key={star}
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />
          );
        } else if (star - rating < 1) {
          return (
            <StarHalf
              key={star}
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />
          );
        } else {
          return <Star key={star} size={16} className="text-gray-300" />;
        }
      })}
      <span className="text-sm text-gray-600 ml-2">{rating}</span>
    </div>
  );
};

// 📦 Best Sellers Section
const BestSellersSection = () => {
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const [isPlaying, setIsPlaying] = useState<{ [key: number]: boolean }>({});
  const [isMuted, setIsMuted] = useState<{ [key: number]: boolean }>({});
  const [likes, setLikes] = useState<{ [key: number]: boolean }>({});

  // 🎥 Play / Pause toggle
  const togglePlay = (id: number) => {
    const videoEl = videoRefs.current[id];
    if (videoEl) {
      if (isPlaying[id]) {
        videoEl.pause();
      } else {
        videoEl.play();
      }
      setIsPlaying((prev) => ({ ...prev, [id]: !prev[id] }));
    }
  };

  // 🔇 Mute / Unmute toggle
  const toggleMute = (id: number) => {
    const videoEl = videoRefs.current[id];
    if (videoEl) {
      videoEl.muted = !videoEl.muted;
      setIsMuted((prev) => ({ ...prev, [id]: videoEl.muted }));
    }
  };

  // ❤️ Like toggle
  const toggleLike = (id: number) => {
    setLikes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // ✅ Structured Data (JSON-LD for SEO)
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "Product",
      name: product.name,
      image: product.image,
      description: product.description,
      position: index + 1,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: product.rating,
        reviewCount: Math.floor(product.rating * 20), // fake reviews
      },
    })),
  };

  return (
    <section className="py-16 bg-gray-50">
      {/* Inject JSON-LD for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <div className="container-custom">
        <h2 className="section-title text-center">
          ⭐ Best-Sellers of the Season
        </h2>

        {/* Grid Layout */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card rounded-2xl shadow-lg overflow-hidden bg-white flex flex-col"
              itemScope
              itemType="https://schema.org/Product"
            >
              {/* Structured Data */}
              <meta itemProp="name" content={product.name} />
              <meta itemProp="description" content={product.description} />
              <meta itemProp="image" content={product.image} />

              {/* Video Section */}
              <div className="relative group w-full h-64">
                <video
                  ref={(el) => (videoRefs.current[product.id] = el)}
                  src={product.video}
                  poster={product.image}
                  className="w-full h-full object-cover"
                  muted={isMuted[product.id] ?? false}
                  playsInline
                  aria-label={`Product video for ${product.name}`}
                />

                {/* Action Buttons */}
                <div className="absolute top-3 right-3 flex space-x-2">
                  {/* Mute/Unmute */}
                  <button
                    onClick={() => toggleMute(product.id)}
                    className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
                    aria-label={
                      isMuted[product.id] ? "Unmute Video" : "Mute Video"
                    }
                  >
                    {isMuted[product.id] ? (
                      <VolumeX size={18} className="text-gray-500" />
                    ) : (
                      <Volume2 size={18} className="text-green-600" />
                    )}
                  </button>

                  {/* Play/Pause */}
                  <button
                    onClick={() => togglePlay(product.id)}
                    className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
                    aria-label={
                      isPlaying[product.id] ? "Pause Video" : "Play Video"
                    }
                  >
                    {isPlaying[product.id] ? (
                      <Pause size={18} className="text-blue-600" />
                    ) : (
                      <Play size={18} className="text-gray-500" />
                    )}
                  </button>

                  {/* Like */}
                  <button
                    onClick={() => toggleLike(product.id)}
                    className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
                    aria-label={
                      likes[product.id] ? "Unlike Product" : "Like Product"
                    }
                  >
                    <Heart
                      size={18}
                      className={
                        likes[product.id]
                          ? "fill-red-500 text-red-500"
                          : "text-gray-500"
                      }
                    />
                  </button>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <StarRating rating={product.rating} />
                <h3
                  className="text-lg font-bold text-gray-800 mt-3 mb-2"
                  itemProp="name"
                >
                  {product.name}
                </h3>
                <p
                  className="text-gray-600 text-sm mb-4 line-clamp-3"
                  itemProp="description"
                >
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellersSection;
