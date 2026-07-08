"use client";

import { Dispatch, SetStateAction } from "react";

interface Step2ContactProps {
  formData: any;
  setFormData: Dispatch<SetStateAction<any>>;
}

export default function Step2Contact({
  formData,
  setFormData,
}: Step2ContactProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="space-y-8">
      {/* Heading */}

      <div>
        <h2 className="text-3xl font-bold text-slate-800">
          Contact Information
        </h2>

        <p className="text-slate-500 mt-2">
          Please provide your contact details.
        </p>
      </div>

      {/* Contact Information */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-medium">
            Mobile Number <span className="text-red-500">*</span>
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="9876543210"
            className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-green-600 outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Alternate Mobile
          </label>

          <input
            type="tel"
            name="alternatePhone"
            value={formData.alternatePhone}
            onChange={handleChange}
            placeholder="9876543210"
            className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-green-600 outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            WhatsApp Number
          </label>

          <input
            type="tel"
            name="whatsappNumber"
            value={formData.whatsappNumber || ""}
            onChange={handleChange}
            placeholder="9876543210"
            className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-green-600 outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Email Address <span className="text-red-500">*</span>
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="volunteer@example.com"
            className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-green-600 outline-none"
          />
        </div>
      </div>

      {/* Communication Preference */}

      <div>
        <label className="block mb-2 font-medium">
          Preferred Communication
        </label>

        <select
          name="preferredCommunication"
          value={formData.preferredCommunication || ""}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-green-600 outline-none"
        >
          <option value="">Select</option>
          <option value="Email">Email</option>
          <option value="Phone Call">Phone Call</option>
          <option value="WhatsApp">WhatsApp</option>
          <option value="SMS">SMS</option>
        </select>
      </div>
    </div>
  );
}