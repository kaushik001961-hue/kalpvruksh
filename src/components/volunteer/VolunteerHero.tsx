"use client";

import { motion } from "framer-motion";

export default function VolunteerHero() {
  return (
    <section className="bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-5xl font-bold md:text-6xl"
        >
          Become a Volunteer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mx-auto max-w-3xl text-lg text-green-100"
        >
          Join Kalpvruksh Charitable Trust and dedicate your time,
          skills, and compassion to building healthier, greener,
          and stronger communities.
        </motion.p>
      </div>
    </section>
  );
}