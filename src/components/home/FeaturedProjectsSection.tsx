"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Educate Every Child",
    image: "/images/projects/education.jpg",
    description:
      "Providing quality education, school supplies and scholarships for underprivileged children.",
    raised: 750000,
    goal: 1000000,
    beneficiaries: "850+ Children",
  },
  {
    title: "Healthy Communities",
    image: "/images/projects/healthcare.jpg",
    description:
      "Medical camps, free medicines, health awareness and preventive healthcare programs.",
    raised: 520000,
    goal: 700000,
    beneficiaries: "2,500+ People",
  },
  {
    title: "Green Gujarat Mission",
    image: "/images/projects/environment.jpg",
    description:
      "Large-scale tree plantation, environmental education and water conservation initiatives.",
    raised: 320000,
    goal: 500000,
    beneficiaries: "15,000 Trees",
  },
];

export default function FeaturedProjectsSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            FEATURED PROJECTS
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Support Our Ongoing Projects
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Your contribution directly supports impactful initiatives that
            improve education, healthcare, environmental sustainability and
            community development.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {projects.map((project, index) => {
            const progress = Math.round(
              (project.raised / project.goal) * 100
            );

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 hover:scale-110"
                  />
                </div>

                <div className="p-7">

                  <h3 className="text-2xl font-bold text-slate-900">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {project.description}
                  </p>

                  <div className="mt-6">
                    <div className="mb-2 flex justify-between text-sm font-medium">
                      <span>₹{project.raised.toLocaleString()}</span>
                      <span>{progress}%</span>
                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-gray-200">
                      <div
                        className="h-full rounded-full bg-green-600"
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    <div className="mt-3 flex justify-between text-sm text-gray-500">
                      <span>Goal: ₹{project.goal.toLocaleString()}</span>
                      <span>{project.beneficiaries}</span>
                    </div>
                  </div>

                  <div className="mt-8 flex gap-3">

                    <Link
                      href="/donate"
                      className="flex-1 rounded-xl bg-green-600 py-3 text-center font-semibold text-white transition hover:bg-green-700"
                    >
                      <span className="inline-flex items-center gap-2">
                        <Heart size={18} />
                        Donate
                      </span>
                    </Link>

                    <Link
                      href="/projects"
                      className="rounded-xl border border-green-600 px-5 py-3 font-semibold text-green-700 transition hover:bg-green-50"
                    >
                      <ArrowRight />
                    </Link>

                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>

        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 rounded-full bg-green-700 px-8 py-4 font-semibold text-white transition hover:bg-green-800"
          >
            View All Projects
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}