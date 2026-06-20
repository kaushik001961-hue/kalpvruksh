"use client";

import { motion } from "framer-motion";
import {
  HeartHandshake,
  IndianRupee,
  Landmark,
} from "lucide-react";

const donationOptions = [
  {
    amount: "₹100",
    impact: "Provides educational supplies for a child",
  },
  {
    amount: "₹500",
    impact: "Supports tree plantation activities",
  },
  {
    amount: "₹1000",
    impact: "Helps organize community welfare programs",
  },
  {
    amount: "₹5000+",
    impact: "Creates long-term social impact initiatives",
  },
];

export default function DonatePage() {
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
            Support Our Mission
          </motion.h1>

          <p className="max-w-3xl mx-auto text-lg text-green-100">
            Your contribution helps us empower communities,
            protect the environment, and create sustainable
            positive change.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["5000+", "Trees Planted"],
            ["200+", "Students Supported"],
            ["50+", "Health Camps"],
            ["10000+", "Lives Impacted"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="bg-white rounded-3xl p-8 text-center shadow-md"
            >
              <h3 className="text-4xl font-bold text-green-700">
                {number}
              </h3>
              <p className="mt-2 text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Donation Options */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-900">
            Choose Your Contribution
          </h2>

          <p className="text-gray-600 mt-4">
            Every donation creates meaningful impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {donationOptions.map((item, index) => (
            <motion.div
              key={item.amount}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition"
            >
              <IndianRupee className="w-10 h-10 text-green-700 mb-4" />

              <h3 className="text-3xl font-bold text-green-900">
                {item.amount}
              </h3>

              <p className="text-gray-600 mt-4">
                {item.impact}
              </p>

              <button
                onClick={() =>
                  document
                    .getElementById("payment-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="mt-6 w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl"
              >
                Donate
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Payment Section */}
      <section
        id="payment-section"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Bank Details */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Landmark className="text-green-700" />

              <h3 className="text-2xl font-bold text-green-900">
                Bank Details
              </h3>
            </div>

            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Account Name:</strong>{" "}
                Kalpvruksh Charitable Trust
              </p>

              <p>
                <strong>Bank Name:</strong>{" "}
                Your Bank Name
              </p>

              <p>
                <strong>Account Number:</strong>{" "}
                XXXXXXXXXXXX
              </p>

              <p>
                <strong>IFSC Code:</strong>{" "}
                XXXX0001234
              </p>

              <p>
                <strong>Branch:</strong>{" "}
                Gadhada, Gujarat
              </p>
            </div>
          </div>

          {/* UPI Donation */}
          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-green-900 mb-6">
              Donate via UPI
            </h3>

            <img
              src="/upi-qr.png"
              alt="UPI QR Code"
              className="w-64 h-64 mx-auto rounded-2xl border"
            />

            <p className="mt-6 text-gray-600">
              UPI ID: <strong>kalpvrukshtrust@paytm</strong>
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="upi://pay?pa=kalpvrukshtrust@paytm&pn=Kalpvruksh%20Trust&am=100"
                className="bg-green-700 text-white py-3 rounded-xl hover:bg-green-800"
              >
                Donate ₹100
              </a>

              <a
                href="upi://pay?pa=kalpvrukshtrust@paytm&pn=Kalpvruksh%20Trust&am=500"
                className="bg-green-700 text-white py-3 rounded-xl hover:bg-green-800"
              >
                Donate ₹500
              </a>

              <a
                href="upi://pay?pa=kalpvrukshtrust@paytm&pn=Kalpvruksh%20Trust&am=1000"
                className="bg-green-700 text-white py-3 rounded-xl hover:bg-green-800"
              >
                Donate ₹1000
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <HeartHandshake className="w-16 h-16 mx-auto mb-6 text-green-300" />

          <h2 className="text-4xl font-bold mb-6">
            Together We Can Make A Difference
          </h2>

          <p className="text-green-100 mb-8">
            Your generosity fuels our mission and helps transform
            lives across communities.
          </p>

          <button
            onClick={() =>
              window.open(
                "upi://pay?pa=kalpvrukshtrust@paytm&pn=Kalpvruksh%20Trust&am=500"
              )
            }
            className="bg-white text-green-900 font-semibold px-8 py-4 rounded-full hover:bg-green-100 transition"
          >
            Donate ₹500
          </button>
        </div>
      </section>
    </main>
  );
}