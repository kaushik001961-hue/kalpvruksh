"use client";

import { motion } from "framer-motion";
import {
  Trees,
  GraduationCap,
  HeartPulse,
} from "lucide-react";

const opportunities = [
  {
    title: "Environmental Programs",
    description:
      "Participate in tree plantation drives, clean-up campaigns, and sustainability initiatives.",
    icon: Trees,
  },
  {
    title: "Education Support",
    description:
      "Mentor students, distribute educational kits, and assist in learning programs.",
    icon: GraduationCap,
  },
  {
    title: "Healthcare Activities",
    description:
      "Support health camps, awareness drives, and community outreach programs.",
    icon: HeartPulse,
  },
];

export default function VolunteerOpportunities() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-14 text-center">
        <h2 className="text-4xl font-bold text-green-900">
          Why Volunteer With Us?
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-gray-600">
          Volunteers are the backbone of our initiatives. Together,
          we can create meaningful change through education,
          healthcare, environmental conservation, and community
          development.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {opportunities.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-3xl bg-white p-8 shadow-lg transition hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
                <Icon className="h-8 w-8 text-green-700" />
              </div>

              <h3 className="mb-4 text-2xl font-bold text-green-900">
                {item.title}
              </h3>

              <p className="leading-relaxed text-gray-600">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}