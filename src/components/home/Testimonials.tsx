"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amit Patel",
    role: "Volunteer",
    image: "/images/testimonials/person1.jpg",
    quote:
      "Working with Kalpvruksh Trust has been one of the most rewarding experiences of my life. Every activity creates a real impact in the community.",
  },
  {
    name: "Neha Shah",
    role: "Donor",
    image: "/images/testimonials/person2.jpg",
    quote:
      "I appreciate the transparency and dedication of the team. Every donation is used effectively for social welfare and community development.",
  },
  {
    name: "Rakesh Mehta",
    role: "Beneficiary",
    image: "/images/testimonials/person3.jpg",
    quote:
      "The education support provided by the Trust changed my child's future. We are truly grateful for their continuous support.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            TESTIMONIALS
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Voices of Hope & Impact
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Hear from our volunteers, donors, and beneficiaries whose lives
            have been touched by our mission.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={70}
                  height={70}
                  className="rounded-full object-cover"
                />

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.name}
                  </h3>

                  <p className="text-green-700">
                    {item.role}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="mt-6 leading-8 text-gray-600 italic">
                "{item.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}