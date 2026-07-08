"use client";

import { Dispatch, SetStateAction } from "react";

interface Step4IdentityProps {
  formData: any;
  setFormData: Dispatch<SetStateAction<any>>;
}

export default function Step4Identity({
  formData,
  setFormData,
}: Step4IdentityProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, files } = e.target;

    setFormData((prev: any) => ({
      ...prev,
      [name]: files?.[0] ?? null,
    }));
  };

  return (
    <div className="space-y-8">

      {/* Heading */}

      <div>
        <h2 className="text-3xl font-bold text-slate-800">
          Identity Information
        </h2>

        <p className="text-slate-500 mt-2">
          Please provide your government identity details.
        </p>
      </div>

      {/* Identity Numbers */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="block mb-2 font-medium">
            Aadhaar Number
          </label>

          <input
            type="text"
            name="aadhaarNumber"
            maxLength={12}
            value={formData.aadhaarNumber}
            onChange={handleChange}
            placeholder="1234 5678 9012"
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            PAN Number
          </label>

          <input
            type="text"
            name="panNumber"
            value={formData.panNumber}
            onChange={handleChange}
            placeholder="ABCDE1234F"
            className="w-full rounded-lg border border-gray-300 p-3 uppercase"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Voter ID
          </label>

          <input
            type="text"
            name="voterId"
            value={formData.voterId || ""}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Driving Licence
          </label>

          <input
            type="text"
            name="drivingLicense"
            value={formData.drivingLicense || ""}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-2 font-medium">
            Passport Number
          </label>

          <input
            type="text"
            name="passportNumber"
            value={formData.passportNumber || ""}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

      </div>

      {/* Upload Documents */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div>
          <label className="block mb-2 font-medium">
            Aadhaar Card
          </label>

          <input
            type="file"
            name="aadhaarFile"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            PAN Card
          </label>

          <input
            type="file"
            name="panFile"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Police Verification (Optional)
          </label>

          <input
            type="file"
            name="policeVerificationFile"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

      </div>

    </div>
  );
}