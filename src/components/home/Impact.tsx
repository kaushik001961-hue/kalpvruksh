"use client";

import { Trees, Users, HandHeart, CalendarDays } from "lucide-react";
import CountUp from "react-countup";

const stats = [
  {
    icon: Trees,
    end: 5000,
    suffix: "+",
    title: "Trees Planted",
  },
  {
    icon: HandHeart,
    end: 2500,
    suffix: "+",
    title: "Families Supported",
  },
  {
    icon: Users,
    end: 700,
    suffix: "+",
    title: "Volunteers",
  },
  {
    icon: CalendarDays,
    end: 150,
    suffix: "+",
    title: "Community Events",
  },
];

export default function Impact() {
  return (
    <section className="relative overflow-hidden bg-green-800 py-24">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[length:30px_30px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-block rounded-full bg-white/20 px-5 py-2 text-white font-semibold backdrop-blur">
            🌿 Our Impact
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Together We Are Creating
            <br />
            A Better Tomorrow
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-green-100">
            Every tree planted, every family supported and every volunteer
            represents a step toward a healthier and happier society.
          </p>

        </div>

        {/* Counter Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 p-10 text-center transition duration-300 hover:-translate-y-2 hover:bg-white/20"
              >

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white">

                  <Icon className="h-10 w-10 text-green-700" />

                </div>

            <h3 className="mt-8 text-5xl font-bold text-white">
  <CountUp
    end={item.end}
    duration={3}
    separator=","
  />
  {item.suffix}
</h3>

                <p className="mt-4 text-lg text-green-100">

                  {item.title}

                </p>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
}