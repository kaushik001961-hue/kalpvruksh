"use client";

import { motion } from "framer-motion";
import {
  Trees,
  GraduationCap,
  HeartHandshake,
  Stethoscope,
  Droplets,
  PawPrint,
} from "lucide-react";

const projects = [
  {
    title: "Tree Plantation",
    description:
      "Creating greener communities through large-scale plantation drives and environmental awareness programs.",
    icon: Trees,
    stats: "5,000+ Trees Planted",
  },
  {
    title: "Education Support",
    description:
      "Providing educational resources, scholarships, and mentorship opportunities to underprivileged students.",
    icon: GraduationCap,
    stats: "200+ Students Supported",
  },
  {
    title: "Food Distribution",
    description:
      "Ensuring that families in need receive nutritious meals and essential food supplies.",
    icon: HeartHandshake,
    stats: "10,000+ Meals Served",
  },
  {
    title: "Health Camps",
    description:
      "Organizing medical checkups, awareness campaigns, and free healthcare services.",
    icon: Stethoscope,
    stats: "50+ Camps Conducted",
  },
  {
    title: "Water Conservation",
    description:
      "Promoting sustainable water usage and supporting community water conservation initiatives.",
    icon: Droplets,
    stats: "100+ Villages Impacted",
  },
  {
    title: "Animal Welfare",
    description:
      "Caring for animals through rescue, treatment, feeding, and awareness activities.",
    icon: PawPrint,
    stats: "1,000+ Animals Helped",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-[#f7faf7] min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white">
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')]" />

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Projects
            </h1>

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-green-100">
              Transforming lives and protecting nature through impactful
              community initiatives across education, environment, healthcare,
              and social welfare.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-green-900 mb-4">
            Making a Difference Every Day
          </h2>

          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full" />

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Every project reflects our commitment to sustainable development,
            community empowerment, and environmental conservation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-green-700 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-2xl font-bold text-green-900 mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="inline-block px-4 py-2 rounded-full bg-green-50 text-green-700 font-semibold text-sm">
                    {project.stats}
                  </div>

                  <button className="mt-6 block w-full rounded-xl bg-green-700 hover:bg-green-800 text-white py-3 font-medium transition">
                    Learn More
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-green-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <div>
              <h3 className="text-4xl font-bold">5000+</h3>
              <p className="mt-2 text-green-200">Trees Planted</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">200+</h3>
              <p className="mt-2 text-green-200">Students Supported</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">50+</h3>
              <p className="mt-2 text-green-200">Health Camps</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">10K+</h3>
              <p className="mt-2 text-green-200">Meals Distributed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-green-900 mb-6">
            Join Our Mission
          </h2>

          <p className="text-gray-600 mb-8 text-lg">
            Together we can create a greener, healthier, and more compassionate
            future for generations to come.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-xl bg-green-700 text-white hover:bg-green-800 transition">
              Become a Volunteer
            </button>

            <button className="px-8 py-4 rounded-xl border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white transition">
              Donate Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}