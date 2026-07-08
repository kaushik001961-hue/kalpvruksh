"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

interface DBProject {
  id: string;
  title: string;
  description: string;
  stats: string | null;
  image?: string | null;
}

export default function ProjectsGrid({ projects }: { projects: DBProject[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => {
        // Dynamically resolve icon names or fallback safely to standard layout icon
        const IconComponent = (LucideIcons as any)[project.title.replace(/\s+/g, "")] || LucideIcons.HeartHandshake;

        return (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="p-8">
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
                <IconComponent className="w-8 h-8 text-green-700 group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-2xl font-bold text-green-900 mb-4">
                {project.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {project.description}
              </p>

              {project.stats && (
                <div className="inline-block px-4 py-2 rounded-full bg-green-50 text-green-700 font-semibold text-sm">
                  {project.stats}
                </div>
              )}

              <button className="mt-6 block w-full rounded-xl bg-green-700 hover:bg-green-800 text-white py-3 font-medium transition">
                Learn More
              </button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}