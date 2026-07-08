"use client";

import { Dispatch, SetStateAction } from "react";

interface Step8EmergencyProps {
  formData: any;
  setFormData: Dispatch<SetStateAction<any>>;
}

export default function Step8Emergency({
  formData,
  setFormData,
}: Step8EmergencyProps) {
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
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
          Emergency Contact
        </h2>

        <p className="text-slate-500 mt-2">
          Please provide a contact person in case of emergency.
        </p>
      </div>

      {/* Emergency Contact */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="block mb-2 font-medium">
            Contact Person Name
          </label>

          <input
            type="text"
            name="emergencyName"
            value={formData.emergencyName || ""}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Relationship
          </label>

          <input
            type="text"
            name="emergencyRelation"
            value={formData.emergencyRelation || ""}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Mobile Number
          </label>

          <input
            type="tel"
            name="emergencyPhone"
            value={formData.emergencyPhone || ""}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Alternate Number
          </label>

          <input
            type="tel"
            name="emergencyAlternatePhone"
            value={formData.emergencyAlternatePhone || ""}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

      </div>

      {/* Address */}

      <div>
        <label className="block mb-2 font-medium">
          Emergency Contact Address
        </label>

        <textarea
          rows={4}
          name="emergencyAddress"
          value={formData.emergencyAddress || ""}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 p-3"
          placeholder="Enter emergency contact address"
        />
      </div>

    </div>
  );
}