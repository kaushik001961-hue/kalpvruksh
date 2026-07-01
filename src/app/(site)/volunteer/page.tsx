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
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",

    // Address
    address: "",
    city: "",
    state: "",
    country: "India",
    pincode: "",

    // Professional Information
    occupation: "",
    organization: "",
    education: "",

    // Volunteer Information
    interest: "",
    skills: "",
    languages: "",
    availability: "",

    // Emergency Contact
    emergencyName: "",
    emergencyPhone: "",

    // Additional Information
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      alert("Volunteer application submitted successfully!");

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        gender: "",
        dob: "",

        address: "",
        city: "",
        state: "",
        country: "India",
        pincode: "",

        occupation: "",
        organization: "",
        education: "",

        interest: "",
        skills: "",
        languages: "",
        availability: "",

        emergencyName: "",
        emergencyPhone: "",

        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to submit application.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f7faf7] p-6 md:p-12">
      {/* Hero and Opportunities Sections would render here */}

      <div className="mx-auto max-w-4xl">
        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Personal Information */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-green-900">
              👤 Personal Information
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-medium">First Name *</label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border px-4 py-3"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">Last Name *</label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border px-4 py-3"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border px-4 py-3"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">Mobile Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border px-4 py-3"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">Gender</label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  className="w-full rounded-xl border px-4 py-3"
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                  <option>Prefer not to say</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-medium">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={form.dob}
                  onChange={handleChange}
                  className="w-full rounded-xl border px-4 py-3"
                />
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-green-900">
              📍 Address Information
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="mb-2 block font-medium">Address</label>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  rows={3}
                  className="w-full rounded-xl border px-4 py-3"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">City *</label>
                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border px-4 py-3"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">State</label>
                <input
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  className="w-full rounded-xl border px-4 py-3"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">Country</label>
                <input
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className="w-full rounded-xl border px-4 py-3"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">Pincode</label>
                <input
                  name="pincode"
                  value={form.pincode}
                  onChange={handleChange}
                  className="w-full rounded-xl border px-4 py-3"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-green-700 px-8 py-4 font-semibold text-white transition hover:bg-green-800 disabled:bg-gray-400"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}