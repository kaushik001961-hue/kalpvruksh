
"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7faf7]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Contact Us
          </motion.h1>

          <p className="max-w-3xl mx-auto text-lg text-green-100">
            We'd love to hear from you. Reach out for volunteering,
            donations, partnerships, or any inquiries.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold text-green-900 mb-6">
              Send a Message
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl p-4"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl p-4"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-xl p-4"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full border rounded-xl p-4"
              />

              <button
                type="submit"
                className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-xl w-full"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-green-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <MapPin className="text-green-700" />
                  <span>
                    Kalpvruksh Charitable Trust,
                    Gadhada, Gujarat, India
                  </span>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-green-700" />
                  <span>+91 XXXXX XXXXX</span>
                </div>

                <div className="flex gap-4">
                  <Mail className="text-green-700" />
                  <span>info@kalpvrukshtrust.org</span>
                </div>

                <div className="flex gap-4">
                  <Clock className="text-green-700" />
                  <span>Mon - Sat : 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-4">
                Follow Us
              </h3>
            </div>

            {/* Map */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="h-72 bg-green-100 flex items-center justify-center text-green-800 font-semibold">
                Google Map Embed Here
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
