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
      {/* Hero & Program Impact Header */}
      <div className="mx-auto max-w-4xl text-center mb-12">
        <h1 className="text-4xl font-extrabold text-green-950 md:text-5xl">
          Join Us as a Volunteer
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Make a meaningful difference. Give your time, skills, and energy to support communities in need.
        </p>
      </div>

      {/* Program Tracks Display Grid */}
      <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-3 mb-16">
        {opportunities.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={index} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="mb-4 inline-block rounded-xl bg-green-50 p-3 text-green-700">
                <IconComponent className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-green-950">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          );
        })}
      </div>

      {/* Application Registration Form Blocks Container */}
      <div className="mx-auto max-w-4xl">
        <form onSubmit={handleSubmit} className="space-y-10">
          
          {/* Section 1: Personal Information */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-green-900">
              👤 Personal Information
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-medium text-gray-700">First Name *</label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">Last Name *</label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">Mobile Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">Gender</label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                  <option>Prefer not to say</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={form.dob}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Address Information */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-green-900">
              📍 Address Information
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="mb-2 block font-medium text-gray-700">Street Address</label>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  rows={2}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">City *</label>
                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">State</label>
                <input
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">Country</label>
                <input
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">Pincode</label>
                <input
                  name="pincode"
                  value={form.pincode}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Professional Background */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-green-900">
              💼 Professional & Education Details
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-medium text-gray-700">Current Occupation</label>
                <input
                  name="occupation"
                  value={form.occupation}
                  onChange={handleChange}
                  placeholder="e.g., Student, Software Engineer"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">Organization / Institution</label>
                <input
                  name="organization"
                  value={form.organization}
                  onChange={handleChange}
                  placeholder="e.g., University name or Company"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block font-medium text-gray-700">Highest Educational Qualification</label>
                <input
                  name="education"
                  value={form.education}
                  onChange={handleChange}
                  placeholder="e.g., Bachelor's in Science, High School Diploma"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                />
              </div>
            </div>
          </div>

          {/* Section 4: Volunteer Preferences Mapping */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-green-900">
              🤝 Volunteer Interests
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-medium text-gray-700">Primary Area of Interest *</label>
                <select
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                >
                  <option value="">Select an Option</option>
                  <option value="Environmental">Environmental Programs & Tree Plantation</option>
                  <option value="Education">Education & Classroom Mentoring</option>
                  <option value="Healthcare">Healthcare Camps & Support Outreach</option>
                  <option value="Administrative">Administrative & Management Support</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">Time Availability</label>
                <input
                  name="availability"
                  value={form.availability}
                  onChange={handleChange}
                  placeholder="e.g., Weekends, 4 hours/week"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">Skills / Areas of Expertise</label>
                <input
                  name="skills"
                  value={form.skills}
                  onChange={handleChange}
                  placeholder="e.g., Teaching, Photography, Content Writing"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">Languages Spoken</label>
                <input
                  name="languages"
                  value={form.languages}
                  onChange={handleChange}
                  placeholder="e.g., English, Hindi, Marathi"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                />
              </div>
            </div>
          </div>

          {/* Section 5: Emergency Contacts */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-green-900">
              🚨 Emergency Contact
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-medium text-gray-700">Contact Person Name</label>
                <input
                  name="emergencyName"
                  value={form.emergencyName}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">Contact Number</label>
                <input
                  type="tel"
                  name="emergencyPhone"
                  value={form.emergencyPhone}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                />
              </div>
            </div>
          </div>

          {/* Section 6: Additional Text Cover Message */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-green-900">
              📝 Additional Information
            </h2>
            <div>
              <label className="mb-2 block font-medium text-gray-700">Why do you want to join our trust?</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us a little bit about yourself and your drive to volunteer..."
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
              />
            </div>
          </div>

          {/* Form Action Submissions Block */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-green-700 px-10 py-4 font-semibold text-white transition hover:bg-green-800 disabled:bg-gray-400 shadow-md"
            >
              {loading ? "Submitting Application..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}