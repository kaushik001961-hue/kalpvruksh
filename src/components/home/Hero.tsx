"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  HandHelping,
  PlayCircle,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* ========================= HERO ========================= */}

      <div className="relative h-[92vh] min-h-[760px] w-full">

       <Image
  src="/images/hero/hero.jpg"
  alt="Shree Kalpvruksh Charitable Trust"
  fill
  priority
  className="object-cover object-top"
/>

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/2" />

        {/* Decorative Overlay */}

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

        <div className="relative z-10 flex h-full items-center">

          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl text-white"
            >

            
              {/* CTA Buttons */}

              <div className="mt-10 flex flex-wrap gap-5">

                             

              </div>

              {/* Trust Badges */}

             
            </motion.div>

          </div>

        </div>

      </div>
            {/* =========================
          Floating Statistics Card
      ========================= */}

      <div className="relative z-20 -mt-16 lg:-mt-24 px-5 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            mx-auto
            max-w-7xl
            rounded-[32px]
            bg-white/95
            backdrop-blur-xl
            shadow-2xl
            border
            border-white/30
            overflow-hidden
          "
        >

          <div className="grid grid-cols-2 lg:grid-cols-4">

            <div className="p-8 text-center border-b lg:border-b-0 lg:border-r border-neutral-100">
              <h2 className="text-5xl font-bold text-emerald-600">
                5000+
              </h2>

              <p className="mt-3 text-neutral-600 font-medium">
                Lives Impacted
              </p>
            </div>

            <div className="p-8 text-center border-b lg:border-b-0 lg:border-r border-neutral-100">
              <h2 className="text-5xl font-bold text-emerald-600">
                200+
              </h2>

              <p className="mt-3 text-neutral-600 font-medium">
                Volunteers
              </p>
            </div>

            <div className="p-8 text-center lg:border-r border-neutral-100">
              <h2 className="text-5xl font-bold text-emerald-600">
                150+
              </h2>

              <p className="mt-3 text-neutral-600 font-medium">
                Projects Completed
              </p>
            </div>

            <div className="p-8 text-center">
              <h2 className="text-5xl font-bold text-emerald-600">
                12+
              </h2>

              <p className="mt-3 text-neutral-600 font-medium">
                Years of Service
              </p>
            </div>

          </div>

        </motion.div>

      </div>

      {/* =========================
          Why Choose Us Preview
      ========================= */}

      <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">

        <div className="grid gap-8 md:grid-cols-3">

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl bg-white p-8 shadow-xl border border-neutral-100"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100">
              🌱
            </div>

            <h3 className="text-2xl font-bold text-neutral-900">
              Environmental Care
            </h3>

            <p className="mt-4 text-neutral-600 leading-7">
              Plantation drives, clean environment campaigns and
              sustainable initiatives for a greener future.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl bg-white p-8 shadow-xl border border-neutral-100"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
              📚
            </div>

            <h3 className="text-2xl font-bold text-neutral-900">
              Education
            </h3>

            <p className="mt-4 text-neutral-600 leading-7">
              Supporting students with scholarships, educational
              programs and skill development opportunities.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl bg-white p-8 shadow-xl border border-neutral-100"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100">
              ❤️
            </div>

            <h3 className="text-2xl font-bold text-neutral-900">
              Healthcare
            </h3>

            <p className="mt-4 text-neutral-600 leading-7">
              Organizing health camps, blood donation drives and
              community wellness initiatives.
            </p>
          </motion.div>

        </div>

      </div>
            {/* =========================
          Call To Action
      ========================= */}

      <div className="relative mt-28 px-6 lg:px-8">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 shadow-2xl">

          <div className="relative px-8 py-16 text-center lg:px-20">

            <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10">

              <h2 className="text-4xl font-extrabold text-white lg:text-5xl">
                Together We Can Create Lasting Change
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-emerald-50">
                Your support helps us educate children, improve healthcare,
                protect nature and uplift communities. Every contribution,
                whether through volunteering or donating, makes a meaningful
                difference.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-5">

                <Link
                  href="/volunteer/register"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-emerald-700 transition hover:scale-105"
                >
                  <HandHelping size={20} />
                  Join as Volunteer
                </Link>

                <Link
                  href="/donate"
                  className="inline-flex items-center gap-3 rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-emerald-700"
                >
                  <Heart size={20} />
                  Donate Today
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Decorative Bottom Glow */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 overflow-hidden">
        <div className="mx-auto h-40 w-[90%] rounded-full bg-emerald-100 blur-3xl opacity-60" />
      </div>

    </section>
  );
}