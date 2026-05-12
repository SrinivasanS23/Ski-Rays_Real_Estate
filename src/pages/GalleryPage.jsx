import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';

const allImages = [
  { src: "/images/gallery_1.png", category: "exterior" },
  { src: "/images/gallery_2.png", category: "exterior" },
  { src: "/images/gallery_3.png", category: "amenities" },
  { src: "/images/gallery_4.png", category: "exterior" },
  { src: "/images/gallery_5.png", category: "exterior" },
  { src: "/images/gallery_6.png", category: "exterior" },
  { src: "/images/gallery_7.png", category: "exterior" },
  { src: "/images/gallery_8.png", category: "amenities" },
  { src: "/images/gallery_9.png", category: "exterior" },
];

const categories = ["All", "Exterior", "Interior", "Amenities"];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? allImages 
    : allImages.filter(img => img.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero 
        title="Gallery" 
        subtitle="Take a visual tour of Heaven City"
        image="/images/hero_1.png"
        height="h-[60vh]"
      />

      <section className="py-24 min-h-screen">
        <div className="container mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category 
                    ? 'bg-brand-green text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]' 
                    : 'glass hover:bg-white/20 text-gray-300 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Gallery images={filteredImages} />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default GalleryPage;
