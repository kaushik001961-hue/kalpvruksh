"use client";

import { motion } from "framer-motion";
import {
  Trees,
  GraduationCap,
  HeartPulse,
  Users,
  HandHeart,
  Sprout,
} from "lucide-react";

const activities = [
  {
    title: "Environmental Conservation",
    description:
      "Tree plantation drives, awareness campaigns, and sustainable environmental initiatives.",
    icon: Trees,
  },
  {
    title: "Education Support",
    description:
      "Scholarships, educational kits, mentoring programs, and learning opportunities.",
    icon: GraduationCap,
  },
  {
    title: "Healthcare Camps",
    description:
      "Free medical camps, health screenings, awareness programs, and medicine distribution.",
    icon: HeartPulse,
  },
  {
    title: "Women Empowerment",
    description:
      "Skill development workshops, entrepreneurship training, and self-reliance initiatives.",
    icon: Users,
  },
  {
    title: "Community Welfare",
    description:
      "Relief efforts, social support programs, and initiatives improving quality of life.",
    icon: HandHeart,
  },
  {
    title: "Youth Development",
    description:
      "Leadership training, volunteering opportunities, and personal growth programs.",
    icon: Sprout,
  },
];

const stats = [
  {
    number: "5000+",
    label: "Trees Planted",
  },
  {
    number: "200+",
    label: "Students Supported",
  },
  {
    number: "50+",
    label: "Healthcare Camps",
  },
  {
    number: "10000+",
    label: "Lives Impacted",
  },
];

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen bg-[#f7faf7]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our Activities
          </motion.h1>

          <p className="max-w-3xl mx-auto text-lg text-green-100">
            Creating positive change through environmental conservation,
            education, healthcare, empowerment, and community development.
          </p>
        </div>
      </section>

      {/* Activities */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-900">
            Areas of Impact
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our initiatives focus on sustainable development and community
            empowerment across multiple sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;

            return (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-green-700" />
                </div>

                <h3 className="text-2xl font-bold text-green-900 mb-4">
                  {activity.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {activity.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-900">
              Our Impact
            </h2>

            <p className="text-gray-600 mt-4">
              Measurable change achieved through collective efforts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#f7faf7] rounded-3xl p-8 text-center shadow-md"
              >
                <h3 className="text-5xl font-bold text-green-700">
                  {stat.number}
                </h3>

                <p className="mt-3 text-gray-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Initiative */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="h-[400px]">
              <img
                src="/images/activity-featured.jpg"
                alt="Featured Activity"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-10 flex flex-col justify-center">
              <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium w-fit">
                Featured Initiative
              </span>

              <h2 className="text-4xl font-bold text-green-900 mt-6 mb-6">
                Building Stronger Communities Together
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                Through collaborative efforts, volunteer participation,
                and sustainable programs, Kalpvruksh Trust continues
                creating meaningful impact in education, healthcare,
                environmental conservation, and social welfare.
              </p>

              <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-xl w-fit transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Our Mission
          </h2>

          <p className="text-green-100 mb-8">
            Together we can create sustainable change and improve lives
            through meaningful community initiatives.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-green-900 px-8 py-4 rounded-full font-semibold"
            >
              Become Volunteer
            </a>

            <a
              href="/donate"
              className="border border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-900 transition"
            >
              Support Our Work
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}