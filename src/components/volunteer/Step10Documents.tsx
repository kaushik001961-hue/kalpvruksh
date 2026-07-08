"use client";

import { Dispatch, SetStateAction } from "react";

interface Step10DocumentsProps {
  formData: any;
  setFormData: Dispatch<SetStateAction<any>>;
}

export default function Step10Documents({
  formData,
  setFormData,
}: Step10DocumentsProps) {
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, files, multiple } = e.target;

    setFormData((prev: any) => ({
      ...prev,
      [name]: multiple
        ? Array.from(files || [])
        : files?.[0] ?? null,
    }));
  };

  return (
    <div className="space-y-8">

      {/* Header */}

      <div>
        <h2 className="text-3xl font-bold text-slate-800">
          Upload Documents
        </h2>

        <p className="text-slate-500 mt-2">
          Upload the required supporting documents.
          Accepted formats: JPG, PNG and PDF
          (Maximum 5 MB per file).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Passport Photo */}

        <div>
          <label className="block mb-2 font-medium">
            Passport Size Photograph *
          </label>

          <input
            type="file"
            name="photo"
            accept=".jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

        {/* Resume */}

        <div>
          <label className="block mb-2 font-medium">
            Resume / CV
          </label>

          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

        {/* Aadhaar */}

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

        {/* PAN */}

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

        {/* Police Verification */}

        <div>
          <label className="block mb-2 font-medium">
            Police Verification
          </label>

          <input
            type="file"
            name="policeVerificationFile"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

        {/* Other Documents */}

        <div>
          <label className="block mb-2 font-medium">
            Other Supporting Documents
          </label>

          <input
            type="file"
            name="otherDocuments"
            multiple
            onChange={handleFileChange}
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

      </div>

      {/* Selected Files */}

      <div className="rounded-lg bg-gray-50 border p-4">

        <h3 className="font-semibold mb-3">
          Selected Files
        </h3>

        <div className="space-y-2 text-sm">

          {formData.photo && (
            <p>📷 {formData.photo.name}</p>
          )}

          {formData.resume && (
            <p>📄 {formData.resume.name}</p>
          )}

          {formData.aadhaarFile && (
            <p>🪪 {formData.aadhaarFile.name}</p>
          )}

          {formData.panFile && (
            <p>💳 {formData.panFile.name}</p>
          )}

          {formData.policeVerificationFile && (
            <p>👮 {formData.policeVerificationFile.name}</p>
          )}

          {formData.otherDocuments?.length > 0 && (
            <p>
              📁 {formData.otherDocuments.length} additional file(s)
            </p>
          )}

        </div>

      </div>

      {/* Instructions */}

      <div className="rounded-lg bg-blue-50 border border-blue-200 p-4 text-sm text-blue-800">

        <strong>Note:</strong>

        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Upload clear and readable documents.</li>
          <li>Maximum file size: 5 MB each.</li>
          <li>PDF, JPG, JPEG and PNG formats are accepted.</li>
        </ul>

      </div>

    </div>
  );
}