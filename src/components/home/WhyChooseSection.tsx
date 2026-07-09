"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeartHandshake,
  Users,
  Leaf,
  Award,
  Globe2,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "100% Transparent",
    description:
      "Every donation is tracked with complete transparency and accountability.",
  },
  {
    icon: HeartHandshake,
    title: "Community Driven",
    description:
      "Our volunteers work directly with local communities to create meaningful impact.",
  },
  {
    icon: Users,
    title: "Dedicated Volunteers",
    description:
      "A passionate team committed to serving society with compassion and integrity.",
  },
  {
    icon: Leaf,
    title: "Environmental Focus",
    description:
      "Tree plantation, sustainability and environmental awareness programs.",
  },
  {
    icon: Award,
    title: "Trusted NGO",
    description:
      "Years of successful initiatives supported by donors, volunteers and partners.",
  },
  {
    icon: Globe2,
    title: "Long-term Impact",
    description:
      "We create sustainable programs that continue benefiting communities for years.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            WHY CHOOSE US
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Why People Trust Kalpvruksh
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            We believe in transparency, compassion and sustainable development.
            Together with our volunteers and supporters, we create lasting
            positive change.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 transition group-hover:bg-green-700">
                  <Icon className="h-8 w-8 text-green-700 group-hover:text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

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