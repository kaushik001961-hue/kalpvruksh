"use client";

import { Dispatch, SetStateAction } from "react";

interface Step9MedicalProps {
  formData: any;
  setFormData: Dispatch<SetStateAction<any>>;
}

const BLOOD_GROUPS = [
  "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-",
  "O+",
  "O-",
];

export default function Step9Medical({
  formData,
  setFormData,
}: Step9MedicalProps) {
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev: any) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  return (
    <div className="space-y-8">

      {/* Header */}

      <div>
        <h2 className="text-3xl font-bold text-slate-800">
          Medical Information
        </h2>

        <p className="text-slate-500 mt-2">
          This information helps us ensure your safety during volunteer
          activities.
        </p>
      </div>

      {/* Basic Medical */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="block mb-2 font-medium">
            Blood Group
          </label>

          <select
            name="bloodGroup"
            value={formData.bloodGroup || ""}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3"
          >
            <option value="">Select Blood Group</option>

            {BLOOD_GROUPS.map((group) => (
              <option key={group} value={group}>
                {group}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Disability (if any)
          </label>

          <input
            type="text"
            name="disability"
            value={formData.disability || ""}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3"
            placeholder="Optional"
          />
        </div>

      </div>

      {/* Allergies */}

      <div>
        <label className="block mb-2 font-medium">
          Allergies
        </label>

        <textarea
          rows={3}
          name="allergies"
          value={formData.allergies || ""}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 p-3"
          placeholder="Mention any allergies..."
        />
      </div>

      {/* Medical Conditions */}

      <div>
        <label className="block mb-2 font-medium">
          Existing Medical Conditions
        </label>

        <textarea
          rows={3}
          name="medicalConditions"
          value={formData.medicalConditions || ""}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 p-3"
          placeholder="Diabetes, Asthma, etc."
        />
      </div>

      {/* Medications */}

      <div>
        <label className="block mb-2 font-medium">
          Regular Medications
        </label>

        <textarea
          rows={3}
          name="medications"
          value={formData.medications || ""}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 p-3"
          placeholder="List any regular medications..."
        />
      </div>

      {/* Declaration */}

      <div>
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            name="medicalDeclaration"
            checked={formData.medicalDeclaration || false}
            onChange={handleChange}
          />

          <span>
            I confirm that the above medical information is correct.
          </span>
        </label>
      </div>

    </div>
  );
}