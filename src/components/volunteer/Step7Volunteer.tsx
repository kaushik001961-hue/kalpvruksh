"use client";

import { Dispatch, SetStateAction } from "react";
import {
  INTERESTS,
  SKILLS,
  LANGUAGES,
  AVAILABILITY,
} from "./constants";

interface Step7VolunteerProps {
  formData: any;
  setFormData: Dispatch<SetStateAction<any>>;
}

export default function Step7Volunteer({
  formData,
  setFormData,
}: Step7VolunteerProps) {

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxArray = (
    field: string,
    value: string,
    checked: boolean
  ) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: checked
        ? [...(prev[field] || []), value]
        : (prev[field] || []).filter((item: string) => item !== value),
    }));
  };

  return (
    <div className="space-y-8">

      {/* Heading */}

      <div>
        <h2 className="text-3xl font-bold text-slate-800">
          Volunteer Information
        </h2>

        <p className="text-slate-500 mt-2">
          Tell us how you would like to contribute.
        </p>
      </div>

      {/* Areas of Interest */}

      <div>
        <label className="block mb-4 font-semibold">
          Areas of Interest
        </label>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {INTERESTS.map((item) => (
            <label
              key={item}
              className="flex items-center gap-2"
            >
              <input
                type="checkbox"
                checked={(formData.interests || []).includes(item)}
                onChange={(e) =>
                  handleCheckboxArray(
                    "interests",
                    item,
                    e.target.checked
                  )
                }
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* Skills */}

      <div>
        <label className="block mb-4 font-semibold">
          Skills
        </label>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {SKILLS.map((item) => (
            <label
              key={item}
              className="flex items-center gap-2"
            >
              <input
                type="checkbox"
                checked={(formData.skills || []).includes(item)}
                onChange={(e) =>
                  handleCheckboxArray(
                    "skills",
                    item,
                    e.target.checked
                  )
                }
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* Languages */}

      <div>
        <label className="block mb-4 font-semibold">
          Languages Known
        </label>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {LANGUAGES.map((item) => (
            <label
              key={item}
              className="flex items-center gap-2"
            >
              <input
                type="checkbox"
                checked={(formData.languages || []).includes(item)}
                onChange={(e) =>
                  handleCheckboxArray(
                    "languages",
                    item,
                    e.target.checked
                  )
                }
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* Availability */}

      <div>
        <label className="block mb-4 font-semibold">
          Availability
        </label>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {AVAILABILITY.map((item) => (
            <label
              key={item}
              className="flex items-center gap-2"
            >
              <input
                type="checkbox"
                checked={(formData.availability || []).includes(item)}
                onChange={(e) =>
                  handleCheckboxArray(
                    "availability",
                    item,
                    e.target.checked
                  )
                }
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* Preferred Location */}

      <div>
        <label className="block mb-2 font-medium">
          Preferred Working Location
        </label>

        <input
          type="text"
          name="preferredLocation"
          value={formData.preferredLocation || ""}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 p-3"
          placeholder="Rajkot, Ahmedabad, Gujarat..."
        />
      </div>

      {/* Previous Experience */}

      <div>
        <label className="block mb-2 font-medium">
          Previous Volunteer Experience
        </label>

        <textarea
          rows={5}
          name="previousExperience"
          value={formData.previousExperience || ""}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 p-3"
          placeholder="Describe your volunteer experience..."
        />
      </div>

      {/* Motivation */}

      <div>
        <label className="block mb-2 font-medium">
          Why do you want to join Kalpvruksh Charitable Trust?
        </label>

        <textarea
          rows={5}
          name="message"
          value={formData.message || ""}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 p-3"
        />
      </div>

    </div>
  );
}