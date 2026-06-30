"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Leaf,
  Users,
  Target,
  Eye,
  Award,
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description:
        "Serving communities with empathy, care, and dedication.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "Creating long-term environmental and social impact.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Working together to build stronger and healthier societies.",
    },
  ];

const trustees = [
  {
    name: "Kaushik Bhatt",
    role: "Founder & Managing Trustee",
  },
  {
    name: "Sandip Bhatt",
    role: "Trustee",
  },
  {
    name: "Meera Shah",
    role: "Trustee",
  },
];

  return (
    <main className="bg-[#f7faf7] min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            About Kalpvruksh Trust
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="max-w-3xl mx-auto text-lg text-green-100"
          >
            Empowering communities, protecting nature, and creating
            sustainable change through meaningful social initiatives.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-700 font-semibold uppercase tracking-wider">
              Our Story
            </span>

            <h2 className="text-4xl font-bold text-green-900 mt-3 mb-6">
              Growing Hope, Creating Impact
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Kalpvruksh Charitable Trust was founded with a vision of
              creating positive social and environmental change.
              Through community engagement, education, healthcare,
              environmental conservation, and humanitarian support,
              we strive to improve lives and build a better future.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our mission is rooted in service, compassion, and
              sustainability, ensuring that every initiative leaves
              a lasting impact on society.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl shadow-xl p-10 border border-green-100">
              <h3 className="text-2xl font-bold text-green-800 mb-6">
                Impact Highlights
              </h3>

              <div className="space-y-5">
                <div>
                  <h4 className="text-3xl font-bold text-green-700">
                    5000+
                  </h4>
                  <p className="text-gray-600">Trees Planted</p>
                </div>

                <div>
                  <h4 className="text-3xl font-bold text-green-700">
                    200+
                  </h4>
                  <p className="text-gray-600">
                    Students Supported
                  </p>
                </div>

                <div>
                  <h4 className="text-3xl font-bold text-green-700">
                    50+
                  </h4>
                  <p className="text-gray-600">
                    Health Camps Organized
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-green-50 rounded-3xl p-10"
            >
              <Target className="w-12 h-12 text-green-700 mb-4" />

              <h3 className="text-3xl font-bold text-green-900 mb-4">
                Our Mission
              </h3>

              <p className="text-gray-700 leading-relaxed">
                To empower communities through sustainable
                development, education, healthcare, environmental
                conservation, and social welfare initiatives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-green-50 rounded-3xl p-10"
            >
              <Eye className="w-12 h-12 text-green-700 mb-4" />

              <h3 className="text-3xl font-bold text-green-900 mb-4">
                Our Vision
              </h3>

              <p className="text-gray-700 leading-relaxed">
                To create a world where every individual has access
                to opportunities, dignity, and a healthy environment
                to thrive.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-green-900">
              Our Core Values
            </h2>

            <p className="mt-4 text-gray-600">
              Principles that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-green-700" />
                  </div>

                  <h3 className="text-2xl font-bold text-green-900 mb-3">
                    {value.title}
                  </h3>

                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

   {/* Leadership */}

<section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold text-green-900">
        Leadership Team
      </h2>

```
  <p className="text-gray-600 mt-4">
    Dedicated individuals leading our mission and community initiatives.
  </p>
</div>

<div className="grid md:grid-cols-3 gap-8">
  {trustees.map((trustee, index) => (
    <motion.div
      key={trustee.name}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-green-50 rounded-3xl p-8 text-center shadow-md hover:shadow-xl transition"
    >
      <div className="w-28 h-28 mx-auto rounded-full bg-green-200 mb-6 flex items-center justify-center text-3xl font-bold text-green-800">
        {trustee.name
          .split(" ")
          .map((n) => n[0])
          .join("")}
      </div>

      <h3 className="text-xl font-bold text-green-900">
        {trustee.name}
      </h3>

      <p className="text-green-700 mt-2 font-medium">
        {trustee.role}
      </p>
    </motion.div>
  ))}
</div>
  </div>
</section>

      {/* CTA */}
      <section className="bg-green-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Award className="w-16 h-16 mx-auto mb-6 text-green-300" />

          <h2 className="text-4xl font-bold mb-6">
            Join Us in Making a Difference
          </h2>

          <p className="text-green-100 mb-8">
            Together we can build stronger communities, protect our
            environment, and create opportunities for future generations.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-green-900 px-8 py-4 rounded-xl font-semibold hover:bg-green-100 transition">
              Become a Volunteer
            </button>

          </div>
        </div>
      </section>
    </main>
  );
}