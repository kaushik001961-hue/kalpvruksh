"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const gallery = [
  "/images/gallery/gallery1.jpg",
  "/images/gallery/gallery2.jpg",
  "/images/gallery/gallery3.jpg",
  "/images/gallery/gallery4.jpg",
  "/images/gallery/gallery5.jpg",
  "/images/gallery/gallery6.jpg",
];

export default function GallerySection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            OUR GALLERY
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Moments That Inspire
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Every picture reflects our commitment to serving communities,
            protecting nature and improving lives.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-3">

          {gallery.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, scale: .95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: .5,
                delay: index * .08,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-[4/3]">

                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/30" />

              </div>
            </motion.div>
          ))}

        </div>

        <div className="mt-14 text-center">

          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 rounded-full bg-green-700 px-8 py-4 font-semibold text-white transition hover:bg-green-800"
          >
            View Full Gallery

            <ArrowRight size={18} />
          </Link>

        </div>

      </div>
    </section>
  );
}