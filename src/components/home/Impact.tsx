"use client";

import { motion } from "framer-motion";
import {
  Users,
  HeartHandshake,
  Trees,
  GraduationCap,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "5,000+",
    title: "People Helped",
    description:
      "Families supported through our social welfare initiatives.",
  },
  {
    icon: HeartHandshake,
    number: "250+",
    title: "Active Volunteers",
    description:
      "Dedicated volunteers working across Gujarat.",
  },
  {
    icon: Trees,
    number: "15,000+",
    title: "Trees Planted",
    description:
      "Helping create a greener and healthier environment.",
  },
  {
    icon: GraduationCap,
    number: "700+",
    title: "Students Supported",
    description:
      "Scholarships, education kits and learning programs.",
  },
];

export default function ImpactSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            OUR IMPACT
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Creating Positive Change
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Every donation, volunteer, and project helps us improve
            lives and build stronger communities.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .5,
                  delay: index * .1,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 transition group-hover:bg-green-700">
                  <Icon className="h-8 w-8 text-green-700 group-hover:text-white" />
                </div>

                <h3 className="text-4xl font-bold text-green-700">
                  {item.number}
                </h3>

                <h4 className="mt-3 text-xl font-semibold text-slate-900">
                  {item.title}
                </h4>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}