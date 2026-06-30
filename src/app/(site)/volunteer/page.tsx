"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  HeartHandshake,
  Trees,
  GraduationCap,
  HeartPulse,
} from "lucide-react";

const opportunities = [
  {
    title: "Environmental Programs",
    description:
      "Join tree plantation drives, awareness campaigns, and sustainability initiatives.",
    icon: Trees,
  },
  {
    title: "Education Support",
    description:
      "Help mentor students, distribute educational kits, and support learning programs.",
    icon: GraduationCap,
  },
  {
    title: "Healthcare Activities",
    description:
      "Assist in health camps, community outreach, and awareness programs.",
    icon: HeartPulse,
  },
];

export default function VolunteerPage() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    interest: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch("/api/volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      alert("Volunteer application submitted successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        city: "",
        interest: "",
        message: "",
      });
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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
            Become A Volunteer
          </motion.h1>

          <p className="max-w-3xl mx-auto text-lg text-green-100">
            Join Kalpvruksh Trust and contribute your time, skills,
            and passion toward creating positive social impact.
          </p>
        </div>
      </section>

      {/* Opportunities */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-green-900">
            Why Volunteer With Us?
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Volunteers are the backbone of our initiatives. Together,
            we can transform communities through education,
            healthcare, environmental conservation, and social welfare.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {opportunities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-green-700" />
                </div>

                <h3 className="text-2xl font-bold text-green-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-10"
        >
          <div className="flex items-center gap-3 mb-8">
            <Users className="text-green-700" />
            <h2 className="text-3xl font-bold text-green-900">
              Volunteer Registration
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-6"
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Full Name"
              required
              className="border border-gray-300 rounded-xl px-4 py-3"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Email Address"
              required
              className="border border-gray-300 rounded-xl px-4 py-3"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Phone Number"
              required
              className="border border-gray-300 rounded-xl px-4 py-3"
            />

            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              type="text"
              placeholder="City"
              required
              className="border border-gray-300 rounded-xl px-4 py-3"
            />

            <select
              name="interest"
              value={form.interest}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-xl px-4 py-3 md:col-span-2"
            >
              <option value="">Select Area of Interest</option>
              <option>Environment</option>
              <option>Education</option>
              <option>Healthcare</option>
              <option>Community Welfare</option>
              <option>Women Empowerment</option>
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell us about yourself and how you'd like to help..."
              className="border border-gray-300 rounded-xl px-4 py-3 md:col-span-2"
            />

            <button
              type="submit"
              disabled={loading}
              className="md:col-span-2 bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl font-semibold transition"
            >
              {loading
                ? "Submitting..."
                : "Submit Application"}
            </button>
          </form>
        </motion.div>
      </section>

      {/* Impact Stats */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              ["500+", "Active Volunteers"],
              ["50+", "Events Organized"],
              ["10000+", "Lives Impacted"],
              ["25+", "Projects Completed"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="text-center bg-[#f7faf7] rounded-3xl p-8 shadow-md"
              >
                <h3 className="text-5xl font-bold text-green-700">
                  {number}
                </h3>

                <p className="mt-3 text-gray-600">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <HeartHandshake className="w-16 h-16 mx-auto mb-6 text-green-300" />

          <h2 className="text-4xl font-bold mb-6">
            Together We Can Create Change
          </h2>

          <p className="text-green-100 mb-8">
            Every volunteer contributes to building stronger,
            healthier, and more sustainable communities.
          </p>

          <a
            href="/donate"
            className="inline-block bg-white text-green-900 px-8 py-4 rounded-full font-semibold"
          >
            Support Our Mission
          </a>
        </div>
      </section>
    </main>
  );
}