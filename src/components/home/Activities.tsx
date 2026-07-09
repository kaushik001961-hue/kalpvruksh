"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const activities = [
  {
    title: "Education Support",
    image: "/images/activities/education.jpg",
    description:
      "Providing scholarships, school kits, digital education and career guidance.",
  },
  {
    title: "Healthcare Camps",
    image: "/images/activities/health.jpg",
    description:
      "Free medical checkups, blood donation camps and health awareness programs.",
  },
  {
    title: "Tree Plantation",
    image: "/images/activities/tree.jpg",
    description:
      "Building a greener future through plantation drives and environmental campaigns.",
  },
  {
    title: "Women Empowerment",
    image: "/images/activities/women.jpg",
    description:
      "Skill development, self-employment training and women welfare initiatives.",
  },
  {
    title: "Food Distribution",
    image: "/images/activities/food.jpg",
    description:
      "Providing nutritious meals and grocery support to underprivileged families.",
  },
  {
    title: "Disaster Relief",
    image: "/images/activities/relief.jpg",
    description:
      "Emergency support, rehabilitation and relief activities during natural disasters.",
  },
];

export default function ActivitiesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            OUR ACTIVITIES
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-slate-900">
            Transforming Lives Through Service
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Every initiative is designed to create a lasting positive impact
            in the lives of individuals and communities.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .1,
              }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">

                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold text-slate-900">
                  {activity.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {activity.description}
                </p>

                <Link
                  href="/activities"
                  className="mt-6 inline-flex items-center gap-2 text-green-700 font-semibold hover:gap-3 transition-all"
                >
                  Learn More

                  <ArrowRight size={18} />
                </Link>

              </div>

            </motion.div>
          ))}

        </div>

        <div className="mt-16 text-center">

          <Link
            href="/activities"
            className="inline-flex items-center gap-3 rounded-full bg-green-700 px-8 py-4 text-white font-semibold hover:bg-green-800 transition"
          >
            View All Activities

            <ArrowRight size={18} />
          </Link>

        </div>

      </div>
    </section>
  );
}