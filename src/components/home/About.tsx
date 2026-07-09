"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Images */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="/images/about/about1.jpg"
              alt="About"
              width={650}
              height={700}
              className="rounded-3xl shadow-2xl object-cover"
            />

            <div className="absolute -bottom-8 -right-8 rounded-3xl bg-green-700 p-8 text-white shadow-xl">

              <h3 className="text-5xl font-bold">
                12+
              </h3>

              <p className="mt-2 text-green-100">
                Years of Service
              </p>

            </div>
          </motion.div>

          {/* Right Content */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              ABOUT US
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
              Building Strong Communities Through
              <span className="text-green-700">
                {" "}Compassion
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Shree Kalpvruksh Charitable Trust is committed to
              uplifting society through education, healthcare,
              environmental conservation, youth empowerment,
              women development and humanitarian services.
            </p>

            <div className="mt-8 space-y-5">

              {[
                "Education Support Programs",
                "Medical & Health Camps",
                "Tree Plantation Drives",
                "Women Empowerment",
                "Disaster Relief Activities",
                "Community Development",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <CheckCircle className="text-green-600" />

                  <span className="text-gray-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-green-700 px-7 py-4 font-semibold text-white hover:bg-green-800 transition"
            >
              Learn More

              <ArrowRight size={18} />

            </Link>

          </motion.div>

        </div>

      </div>
    </section>
  );
}