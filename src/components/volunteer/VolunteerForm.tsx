"use client";

import { useState } from "react";

type VolunteerFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  dob: string;

  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;

  occupation: string;
  organization: string;
  education: string;

  interest: string;
  skills: string;
  languages: string;
  availability: string;

  emergencyName: string;
  emergencyPhone: string;

  message: string;
};

export default function VolunteerForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<VolunteerFormData>({
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

  const resetForm = () => {
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

      const result = await response.json();

      if (!response.ok) {
        alert(result.error || "Submission failed.");
        return;
      }

      alert("Volunteer registration submitted successfully.");

      resetForm();
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
    >
            {/* Personal Information */}
      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-green-900">
          👤 Personal Information
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-medium">
              First Name <span className="text-red-500">*</span>
            </label>

            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Last Name <span className="text-red-500">*</span>
            </label>

            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Email Address <span className="text-red-500">*</span>
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Phone Number <span className="text-red-500">*</span>
            </label>

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Gender
            </label>

            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
              <option>Prefer not to say</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Date of Birth
            </label>

            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Address Information */}
      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-green-900">
          📍 Address Information
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="md:col-span-2">
            <label className="mb-2 block font-medium">
              Address
            </label>

            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              rows={3}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              City <span className="text-red-500">*</span>
            </label>

            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              State
            </label>

            <input
              name="state"
              value={form.state}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Country
            </label>

            <input
              name="country"
              value={form.country}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Pincode
            </label>

            <input
              name="pincode"
              value={form.pincode}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
            />
          </div>
        </div>
      </div>

            {/* Professional Information */}
      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-green-900">
          💼 Professional Information
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-medium">
              Occupation
            </label>

            <input
              name="occupation"
              value={form.occupation}
              onChange={handleChange}
              placeholder="Software Engineer, Teacher, Student..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Organization / Company
            </label>

            <input
              name="organization"
              value={form.organization}
              onChange={handleChange}
              placeholder="Company, College, NGO..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block font-medium">
              Highest Education
            </label>

            <select
              name="education"
              value={form.education}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
            >
              <option value="">Select Education</option>
              <option>High School</option>
              <option>Diploma</option>
              <option>Graduate</option>
              <option>Post Graduate</option>
              <option>Doctorate</option>
              <option>Other</option>
            </select>
          </div>
        </div>
      </div>

      {/* Volunteer Information */}
      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-green-900">
          ❤️ Volunteer Information
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="md:col-span-2">
            <label className="mb-2 block font-medium">
              Area of Interest <span className="text-red-500">*</span>
            </label>

            <select
              name="interest"
              value={form.interest}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
            >
              <option value="">Select Area of Interest</option>
              <option>Education</option>
              <option>Healthcare</option>
              <option>Environment</option>
              <option>Women Empowerment</option>
              <option>Child Welfare</option>
              <option>Community Development</option>
              <option>Disaster Relief</option>
              <option>Fundraising</option>
              <option>Administration</option>
              <option>Event Management</option>
              <option>Social Media</option>
              <option>Photography</option>
              <option>Technology</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Skills
            </label>

            <input
              name="skills"
              value={form.skills}
              onChange={handleChange}
              placeholder="Teaching, Design, Accounting..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Languages Known
            </label>

            <input
              name="languages"
              value={form.languages}
              onChange={handleChange}
              placeholder="English, Hindi, Gujarati..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block font-medium">
              Availability
            </label>

            <select
              name="availability"
              value={form.availability}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
            >
              <option value="">Select Availability</option>
              <option>Weekdays</option>
              <option>Weekends</option>
              <option>Evenings</option>
              <option>Flexible</option>
              <option>Full Time</option>
              <option>Part Time</option>
            </select>
          </div>

        </div>
      </div>

            {/* Emergency Contact */}
      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-green-900">
          🚨 Emergency Contact
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-medium">
              Emergency Contact Name
            </label>

            <input
              name="emergencyName"
              value={form.emergencyName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Emergency Contact Phone
            </label>

            <input
              type="tel"
              name="emergencyPhone"
              value={form.emergencyPhone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-green-900">
          📝 Additional Information
        </h2>

        <div>
          <label className="mb-2 block font-medium">
            Why do you want to volunteer with Kalpvruksh Charitable Trust?
          </label>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={6}
            placeholder="Tell us about yourself, your experience, and how you would like to contribute..."
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-600 focus:outline-none"
          />
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-xl bg-green-50 p-4">
          <input
            id="agreement"
            type="checkbox"
            required
            className="mt-1 h-4 w-4"
          />

          <label
            htmlFor="agreement"
            className="text-sm text-gray-700"
          >
            I confirm that the information provided is accurate.
            I understand that Kalpvruksh Charitable Trust may
            contact me regarding volunteer opportunities.
          </label>
        </div>

        <div className="mt-10 text-center">
          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-green-700 px-10 py-4 text-lg font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? "Submitting..."
              : "Submit Volunteer Application"}
          </button>
        </div>
      </div>
    </form>
  );
}