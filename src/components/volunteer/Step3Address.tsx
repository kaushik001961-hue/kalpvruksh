"use client";

import { Dispatch, SetStateAction } from "react";

interface Step3AddressProps {
  formData: any;
  setFormData: Dispatch<SetStateAction<any>>;
}

export default function Step3Address({
  formData,
  setFormData,
}: Step3AddressProps) {
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
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
          Address Information
        </h2>

        <p className="text-slate-500 mt-2">
          Enter your current and permanent address.
        </p>
      </div>

      {/* Current Address */}

      <div className="rounded-xl border p-6">
        <h3 className="text-xl font-semibold mb-6">
          Current Address
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">
              Address
            </label>

            <textarea
              rows={3}
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-3"
              placeholder="Enter your address"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              City
            </label>

            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              District
            </label>

            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              State
            </label>

            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Country
            </label>

            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              PIN Code
            </label>

            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-3"
            />
          </div>
        </div>
      </div>

      {/* Same Address */}

      <div className="flex items-center gap-3">
        <input
          id="sameAddress"
          type="checkbox"
          checked={formData.sameAddress}
          onChange={(e) =>
            setFormData((prev: any) => ({
              ...prev,
              sameAddress: e.target.checked,
            }))
          }
        />

        <label htmlFor="sameAddress">
          Permanent address is same as current address
        </label>
      </div>

      {/* Permanent Address */}

      {!formData.sameAddress && (
        <div className="rounded-xl border p-6">
          <h3 className="text-xl font-semibold mb-6">
            Permanent Address
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block mb-2 font-medium">
                Address
              </label>

              <textarea
                rows={3}
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 p-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                City
              </label>

              <input
                type="text"
                name="permanentCity"
                value={formData.permanentCity}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 p-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                District
              </label>

              <input
                type="text"
                name="permanentDistrict"
                value={formData.permanentDistrict}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 p-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                State
              </label>

              <input
                type="text"
                name="permanentState"
                value={formData.permanentState}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 p-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Country
              </label>

              <input
                type="text"
                name="permanentCountry"
                value={formData.permanentCountry}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 p-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                PIN Code
              </label>

              <input
                type="text"
                name="permanentPincode"
                value={formData.permanentPincode}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 p-3"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}