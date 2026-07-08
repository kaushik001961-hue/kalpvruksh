"use client";

import { Dispatch, SetStateAction } from "react";
import {
  GENDERS,
  BLOOD_GROUPS,
  MARITAL_STATUS,
} from "./constants";

interface Step1PersonalProps {
  formData: any;
  setFormData: Dispatch<SetStateAction<any>>;
}

export default function Step1Personal({
  formData,
  setFormData,
}: Step1PersonalProps) {
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
          Personal Information
        </h2>

        <p className="text-slate-500 mt-2">
          Please provide your personal details.
        </p>
      </div>

      {/* Photo */}

      <div>
        <label className="block font-medium mb-2">
          Passport Size Photo
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setFormData((prev: any) => ({
              ...prev,
              photo: e.target.files?.[0] ?? null,
            }))
          }
          className="block w-full rounded-lg border p-3"
        />
      </div>

      {/* Name */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div>
          <label className="block mb-2 font-medium">
            First Name *
          </label>

          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
            placeholder="First Name"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Middle Name
          </label>

          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
            placeholder="Middle Name"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Last Name *
          </label>

          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
            placeholder="Last Name"
          />
        </div>

      </div>

      {/* DOB + Gender */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="block mb-2 font-medium">
            Date of Birth
          </label>

          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Gender
          </label>

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          >
            <option value="">Select Gender</option>

            {GENDERS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

      </div>

      {/* Blood + Marital */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="block mb-2 font-medium">
            Blood Group
          </label>

          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          >
            <option value="">
              Select Blood Group
            </option>

            {BLOOD_GROUPS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Marital Status
          </label>

          <select
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          >
            <option value="">
              Select Status
            </option>

            {MARITAL_STATUS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

      </div>

      {/* Nationality */}

      <div>
        <label className="block mb-2 font-medium">
          Nationality
        </label>

        <input
          type="text"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
          className="w-full rounded-lg border p-3"
        />
      </div>

    </div>
  );
}