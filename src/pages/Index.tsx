// src/pages/Index.tsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection"; 
import CategoriesSection from "@/components/sections/CategoriesSection"; 
import BestSellersSection from "@/components/sections/BestSellersSection";
import { PromoSection } from "@/components/sections/PromoSection";
import { SpecificationsSection } from "@/components/sections/SpecificationsSection";
import { OnDemandSection } from "@/components/sections/OnDemandSection";
import FeatureCollectionsSection from "@/components/sections/FeatureCollectionsSection";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Helmet>
        {/* Basic SEO */}
        <title>Premium Swings | JhulaCraft</title>
        <meta
          name="description"
          content="Shop premium acrylic, wooden, wicker, and stainless steel swings. Stylish, durable, and customizable."
        />
        <meta
          name="keywords"
          content="JhulaCraft, swings, premium swings, acrylic swings, wooden swings, wicker swings, stainless steel swings, handcrafted swings"
        />
        <link rel="canonical" href="https://jhulacraft.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Premium Swings | JhulaCraft" />
        <meta
          property="og:description"
          content="Shop premium handcrafted swings made of wood, wicker, acrylic, and stainless steel. Customizable and durable."
        />
        <meta property="og:url" content="https://jhulacraft.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://jhulacraft.com/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Swings | JhulaCraft" />
        <meta
          name="twitter:description"
          content="Discover handcrafted premium swings – wooden, acrylic, wicker & stainless steel."
        />
        <meta name="twitter:image" content="https://jhulacraft.com/og-image.jpg" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "JhulaCraft",
            "url": "https://jhulacraft.com",
            "logo": "https://jhulacraft.com/logo.png",
            "sameAs": [
              "https://facebook.com/jhulacraft",
              "https://instagram.com/jhulacraft",
              "https://twitter.com/jhulacraft"
            ],
          })}
        </script>
      </Helmet>

      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="pt-[80px]">
        <HeroSection />
        <CategoriesSection />
        <BestSellersSection />
        <PromoSection />
        <SpecificationsSection />
        <OnDemandSection />
        <FeatureCollectionsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
