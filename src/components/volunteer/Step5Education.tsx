"use client";

import { Dispatch, SetStateAction } from "react";

interface Step5EducationProps {
  formData: any;
  setFormData: Dispatch<SetStateAction<any>>;
}

export default function Step5Education({
  formData,
  setFormData,
}: Step5EducationProps) {

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
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

      {/* Header */}

      <div>
        <h2 className="text-3xl font-bold text-slate-800">
          Educational Information
        </h2>

        <p className="text-slate-500 mt-2">
          Tell us about your educational background.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="block mb-2 font-medium">
            Highest Qualification
          </label>

          <select
            name="education"
            value={formData.education || ""}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3"
          >
            <option value="">Select Qualification</option>
            <option value="SSC">SSC</option>
            <option value="HSC">HSC</option>
            <option value="Diploma">Diploma</option>
            <option value="Graduate">Graduate</option>
            <option value="Post Graduate">Post Graduate</option>
            <option value="Doctorate">Doctorate</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Course / Degree
          </label>

          <input
            type="text"
            name="course"
            value={formData.course || ""}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3"
            placeholder="B.Com / BCA / MBA"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            School / College
          </label>

          <input
            type="text"
            name="college"
            value={formData.college || ""}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            University
          </label>

          <input
            type="text"
            name="university"
            value={formData.university || ""}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Passing Year
          </label>

          <input
            type="number"
            name="passingYear"
            min={1950}
            max={2100}
            value={formData.passingYear || ""}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Percentage / CGPA
          </label>

          <input
            type="text"
            name="percentage"
            value={formData.percentage || ""}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

      </div>

      <div>
        <label className="block mb-2 font-medium">
          Professional Certifications
        </label>

        <textarea
          rows={4}
          name="certifications"
          value={formData.certifications || ""}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 p-3"
          placeholder="Mention any certifications, training, workshops, etc."
        />
      </div>

    </div>
  );
}