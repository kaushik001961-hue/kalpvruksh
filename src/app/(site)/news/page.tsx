"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  ArrowRight,
  Newspaper,
  Trees,
  GraduationCap,
  HeartPulse,
} from "lucide-react";

const categories = [
  "All",
  "Environment",
  "Education",
  "Healthcare",
  "Community",
];

const newsItems = [
  {
    slug: "tree-plantation-drive",
    title: "Mass Tree Plantation Drive Successfully Completed",
    category: "Environment",
    date: "June 2026",
    image: "/images/news1.jpg",
    description:
      "Over 2,000 saplings were planted across villages with support from volunteers and local communities.",
    icon: Trees,
  },
  {
    slug: "education-support-program",
    title: "Educational Support Program Reaches 200 Students",
    category: "Education",
    date: "May 2026",
    image: "/images/news2.jpg",
    description:
      "Scholarships, books, and learning materials distributed to deserving students.",
    icon: GraduationCap,
  },
  {
    slug: "healthcare-camp",
    title: "Free Healthcare Camp Benefits Hundreds",
    category: "Healthcare",
    date: "April 2026",
    image: "/images/news3.jpg",
    description:
      "Doctors and healthcare professionals provided free consultations and medicines.",
    icon: HeartPulse,
  },
  {
    slug: "women-empowerment-workshop",
    title: "Women Empowerment Workshop Conducted",
    category: "Community",
    date: "March 2026",
    image: "/images/news4.jpg",
    description:
      "Skill development and entrepreneurship training organized for women.",
    icon: Newspaper,
  },
{
  slug: "village-cleanliness-awareness-campaign",
  title: "Village Cleanliness Awareness Campaign",
  category: "Environment",
  date: "February 2026",
  image: "/images/news5.jpg",
  description:
    "Community volunteers joined hands to promote cleanliness and sustainability.",
  icon: Trees,
},

{
  slug: "youth-leadership-development-initiative",
  title: "Youth Leadership Development Initiative",
  category: "Community",
  date: "January 2026",
  image: "/images/news6.jpg",
  description:
    "Young leaders trained to contribute positively to society and local development.",
  icon: Newspaper,
},

];

export default function NewsPage() {
  return (
    <main className="bg-[#f7faf7] min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Latest News & Updates
          </motion.h1>

          <p className="max-w-3xl mx-auto text-lg text-green-100">
            Stay informed about our latest initiatives, community impact,
            environmental projects, healthcare programs, and educational
            activities.
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl overflow-hidden shadow-xl"
        >
          <div className="grid lg:grid-cols-2">
            <div className="h-[350px] lg:h-auto">
              <img
                src="/images/news-featured.jpg"
                alt="Featured News"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-10 flex flex-col justify-center">
              <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium w-fit">
                Featured Story
              </span>

              <h2 className="text-4xl font-bold text-green-900 mt-6 mb-4">
                Transforming Communities Through Sustainable Development
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                Kalpvruksh Trust continues creating meaningful impact through
                education, environmental conservation, healthcare services,
                and community empowerment initiatives across multiple regions.
              </p>

              <Link
                href="/news/tree-plantation-drive"
                className="w-fit bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition"
              >
                Read Full Story
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-5 py-3 rounded-full bg-white border border-green-200 text-green-800 hover:bg-green-700 hover:text-white transition"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* News Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      {item.category}
                    </span>

                    <Icon className="w-5 h-5 text-green-700" />
                  </div>

                  <h3 className="text-xl font-bold text-green-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar size={16} />
                      {item.date}
                    </div>

                    <Link
                      href={`/news/${item.slug}`}
                      className="text-green-700 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      Read More
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Follow Our Journey
          </h2>

          <p className="text-green-100 mb-8">
            Stay connected with Kalpvruksh Trust and witness how collective
            efforts create lasting positive impact.
          </p>

          <Link
            href="/contact"
            className="bg-white text-green-900 px-8 py-4 rounded-full font-semibold hover:bg-green-100 transition inline-block"
          >
            Join Our Community
          </Link>
        </div>
      </section>
    </main>
  );
}
