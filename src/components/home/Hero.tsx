"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, HandHelping } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Image */}

      <div className="relative h-[85vh] min-h-[650px] w-full">

        <Image
          src="/images/hero/hero.jpg"
          alt="Kalpvruksh Charitable Trust"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}

    <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/25 to-transparent" />

        {/* Content */}

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
           className="max-w-2xl text-white"
          >
          </motion.div>

        </div>

      </div>

      {/* Statistics */}

      <div className="relative z-20 -mt-20 px-6">

        <div className="mx-auto grid max-w-7xl gap-6 rounded-3xl bg-white p-8 shadow-2xl md:grid-cols-4">

          <div className="text-center">
            <h3 className="text-4xl font-bold text-green-700">
              5,000+
            </h3>

            <p className="mt-2 text-gray-600">
              Lives Impacted
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-green-700">
              200+
            </h3>

            <p className="mt-2 text-gray-600">
              Volunteers
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-green-700">
              150+
            </h3>

            <p className="mt-2 text-gray-600">
              Projects Completed
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-green-700">
              12+
            </h3>

            <p className="mt-2 text-gray-600">
              Years of Service
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}