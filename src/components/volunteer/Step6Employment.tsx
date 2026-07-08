"use client";

import { Dispatch, SetStateAction } from "react";

interface Step6EmploymentProps {
  formData: any;
  setFormData: Dispatch<SetStateAction<any>>;
}

export default function Step6Employment({
  formData,
  setFormData,
}: Step6EmploymentProps) {
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
          Employment Details
        </h2>

        <p className="text-slate-500 mt-2">
          Share your current employment information.
        </p>
      </div>

      {/* Employment Details */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="block mb-2 font-medium">
            Occupation
          </label>

          <input
            type="text"
            name="occupation"
            value={formData.occupation || ""}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Organization
          </label>

          <input
            type="text"
            name="organization"
            value={formData.organization || ""}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Designation
          </label>

          <input
            type="text"
            name="designation"
            value={formData.designation || ""}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Experience (Years)
          </label>

          <input
            type="number"
            name="experienceYears"
            value={formData.experienceYears || ""}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

      </div>

      {/* Work Description */}

      <div>
        <label className="block mb-2 font-medium">
          Work Description
        </label>

        <textarea
          rows={4}
          name="workDescription"
          value={formData.workDescription || ""}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 p-3"
          placeholder="Describe your current role and responsibilities..."
        />
      </div>

    </div>
  );
}