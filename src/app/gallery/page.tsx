
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const categories = [
  "All",
  "Tree Plantation",
  "Health Camps",
  "Education",
  "Food Distribution",
  "Events",
];

const galleryItems = [
  {
    id: 1,
    title: "Tree Plantation Drive",
    category: "Tree Plantation",
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1200",
  },
  {
    id: 2,
    title: "Medical Camp",
    category: "Health Camps",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1200",
  },
  {
    id: 3,
    title: "Education Program",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200",
  },
  {
    id: 4,
    title: "Food Distribution",
    category: "Food Distribution",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200",
  },
  {
    id: 5,
    title: "Community Event",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200",
  },
  {
    id: 6,
    title: "Green Initiative",
    category: "Tree Plantation",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200",
  },
  {
    id: 7,
    title: "Volunteer Activity",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1200",
  },
  {
    id: 8,
    title: "Student Workshop",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <main className="min-h-screen bg-[#f7faf7]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our Gallery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mx-auto text-lg text-green-100"
          >
            Capturing moments of service, impact, and community
            transformation through our initiatives.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-green-700 text-white"
                  : "bg-white text-gray-700 hover:bg-green-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5"
        >
          {filteredImages.map((item) => (
            <motion.div
              key={item.id}
              layout
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-3xl bg-white shadow-lg break-inside-avoid cursor-pointer group"
              onClick={() => setSelectedImage(item.image)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white">
                <ZoomIn className="w-10 h-10 mb-2" />
                <p className="font-semibold">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-green-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold">500+</h3>
              <p className="text-green-200 mt-2">Photos</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">50+</h3>
              <p className="text-green-200 mt-2">Events</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">100+</h3>
              <p className="text-green-200 mt-2">Volunteers</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">10K+</h3>
              <p className="text-green-200 mt-2">
                Lives Impacted
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            <motion.img
              src={selectedImage}
              alt="Gallery"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-h-[90vh] max-w-[90vw] rounded-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
