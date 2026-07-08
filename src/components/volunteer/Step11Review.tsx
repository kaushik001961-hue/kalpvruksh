"use client";

import { Dispatch, SetStateAction } from "react";

interface Step11ReviewProps {
  formData: any;
  setFormData: Dispatch<SetStateAction<any>>;
}

export default function Step11Review({
  formData,
  setFormData,
}: Step11ReviewProps) {
  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h2 className="text-3xl font-bold text-slate-800">
          Review & Submit
        </h2>

        <p className="mt-2 text-slate-500">
          Please review your information before submitting your volunteer
          registration.
        </p>
      </div>

      {/* Personal Information */}

      <div className="rounded-xl border bg-white p-6">
        <h3 className="mb-4 text-xl font-semibold">
          Personal Information
        </h3>

        <div className="grid gap-4 md:grid-cols-2">
          <p>
            <strong>Name:</strong>{" "}
            {formData.firstName} {formData.middleName}{" "}
            {formData.lastName}
          </p>

          <p>
            <strong>Date of Birth:</strong>{" "}
            {formData.dob || "-"}
          </p>

          <p>
            <strong>Gender:</strong>{" "}
            {formData.gender || "-"}
          </p>

          <p>
            <strong>Blood Group:</strong>{" "}
            {formData.bloodGroup || "-"}
          </p>

          <p>
            <strong>Marital Status:</strong>{" "}
            {formData.maritalStatus || "-"}
          </p>

          <p>
            <strong>Nationality:</strong>{" "}
            {formData.nationality || "-"}
          </p>
        </div>
      </div>

      {/* Contact */}

      <div className="rounded-xl border bg-white p-6">
        <h3 className="mb-4 text-xl font-semibold">
          Contact Information
        </h3>

        <div className="grid gap-4 md:grid-cols-2">
          <p>
            <strong>Email:</strong>{" "}
            {formData.email || "-"}
          </p>

          <p>
            <strong>Mobile:</strong>{" "}
            {formData.phone || "-"}
          </p>

          <p>
            <strong>Alternate Mobile:</strong>{" "}
            {formData.alternatePhone || "-"}
          </p>

          <p>
            <strong>WhatsApp:</strong>{" "}
            {formData.whatsappNumber || "-"}
          </p>

          <p>
            <strong>Preferred Communication:</strong>{" "}
            {formData.preferredCommunication || "-"}
          </p>
        </div>
      </div>

      {/* Address */}

      <div className="rounded-xl border bg-white p-6">
        <h3 className="mb-4 text-xl font-semibold">
          Address Information
        </h3>

        <div className="space-y-2">
          <p>
            <strong>Address:</strong>{" "}
            {formData.address || "-"}
          </p>

          <p>
            <strong>City:</strong>{" "}
            {formData.city || "-"}
          </p>

          <p>
            <strong>District:</strong>{" "}
            {formData.district || "-"}
          </p>

          <p>
            <strong>State:</strong>{" "}
            {formData.state || "-"}
          </p>

          <p>
            <strong>Country:</strong>{" "}
            {formData.country || "-"}
          </p>

          <p>
            <strong>PIN Code:</strong>{" "}
            {formData.pincode || "-"}
          </p>
        </div>
      </div>

      {/* Volunteer */}

      <div className="rounded-xl border bg-white p-6">
        <h3 className="mb-4 text-xl font-semibold">
          Volunteer Information
        </h3>

        <div className="space-y-3">

          <p>
            <strong>Areas of Interest:</strong>{" "}
            {(formData.interests || []).join(", ") || "-"}
          </p>

          <p>
            <strong>Skills:</strong>{" "}
            {(formData.skills || []).join(", ") || "-"}
          </p>

          <p>
            <strong>Languages:</strong>{" "}
            {(formData.languages || []).join(", ") || "-"}
          </p>

          <p>
            <strong>Availability:</strong>{" "}
            {(formData.availability || []).join(", ") || "-"}
          </p>

          <p>
            <strong>Preferred Location:</strong>{" "}
            {formData.preferredLocation || "-"}
          </p>

          <p>
            <strong>Previous Experience:</strong>
          </p>

          <div className="rounded-lg bg-slate-50 p-3">
            {formData.previousExperience || "-"}
          </div>

          <p>
            <strong>Why Join?</strong>
          </p>

          <div className="rounded-lg bg-slate-50 p-3">
            {formData.message || "-"}
          </div>

        </div>
      </div>

      {/* Emergency */}

      <div className="rounded-xl border bg-white p-6">
        <h3 className="mb-4 text-xl font-semibold">
          Emergency Contact
        </h3>

        <div className="grid gap-4 md:grid-cols-2">
          <p>
            <strong>Name:</strong>{" "}
            {formData.emergencyName || "-"}
          </p>

          <p>
            <strong>Relationship:</strong>{" "}
            {formData.emergencyRelation || "-"}
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            {formData.emergencyPhone || "-"}
          </p>

          <p>
            <strong>Alternate Phone:</strong>{" "}
            {formData.emergencyAlternatePhone || "-"}
          </p>

          <p className="md:col-span-2">
            <strong>Address:</strong>{" "}
            {formData.emergencyAddress || "-"}
          </p>
        </div>
      </div>

      {/* Documents */}

      <div className="rounded-xl border bg-white p-6">
        <h3 className="mb-4 text-xl font-semibold">
          Uploaded Documents
        </h3>

        <div className="space-y-2">

          <p>
            📷 Passport Photo :
            {formData.photo?.name || " Not Uploaded"}
          </p>

          <p>
            📄 Resume :
            {formData.resume?.name || " Not Uploaded"}
          </p>

          <p>
            🪪 Aadhaar :
            {formData.aadhaarFile?.name || " Not Uploaded"}
          </p>

          <p>
            💳 PAN :
            {formData.panFile?.name || " Not Uploaded"}
          </p>

          <p>
            👮 Police Verification :
            {formData.policeVerificationFile?.name || " Not Uploaded"}
          </p>

        </div>
      </div>

      {/* Declaration */}

      <div className="rounded-xl border bg-gray-50 p-6">

        <h3 className="mb-4 text-xl font-semibold">
          Declaration
        </h3>

        <label className="flex items-start gap-3">

          <input
            type="checkbox"
            checked={formData.agree}
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
                agree: e.target.checked,
              }))
            }
            required
            className="mt-1"
          />

          <span>
            I declare that all information provided by me is true and
            correct to the best of my knowledge. I agree to abide by
            the rules, regulations and code of conduct of
            Kalpvruksh Charitable Trust.
          </span>

        </label>

      </div>

      {/* Before Submit */}

      <div className="rounded-xl border border-green-200 bg-green-50 p-5">

        <h4 className="font-semibold text-green-800">
          Before You Submit
        </h4>

        <ul className="mt-3 ml-6 list-disc space-y-2 text-green-700">
          <li>Verify all personal information.</li>
          <li>Check contact details.</li>
          <li>Verify emergency contact.</li>
          <li>Ensure required documents are uploaded.</li>
          <li>Accept the declaration.</li>
        </ul>

      </div>

      {/* Next Process */}

      <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-5">

        <h4 className="font-semibold text-yellow-800">
          What Happens Next?
        </h4>

        <ol className="mt-3 ml-6 list-decimal space-y-2 text-yellow-700">
          <li>Your application will be reviewed.</li>
          <li>Our team may contact you for verification.</li>
          <li>Approved volunteers will receive an Email/SMS.</li>
          <li>You will then be able to access your Volunteer Dashboard.</li>
        </ol>

      </div>
    </div>
  );
}