"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import ProgressBar from "./ProgressBar";
import StepNavigation from "./StepNavigation";

import Step1Personal from "./Step1Personal";
import Step2Contact from "./Step2Contact";
import Step3Address from "./Step3Address";
import Step4Identity from "./Step4Identity";
import Step5Education from "./Step5Education";
import Step6Employment from "./Step6Employment";
import Step7Volunteer from "./Step7Volunteer";
import Step8Emergency from "./Step8Emergency";
import Step9Medical from "./Step9Medical";
import Step10Documents from "./Step10Documents";
import Step11Review from "./Step11Review";

const TOTAL_STEPS = 11;

export default function VolunteerForm() {
  const router = useRouter();

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    /* ===========================
       PERSONAL
    ============================ */

    photo: null,

    firstName: "",
    middleName: "",
    lastName: "",

    dob: "",
    gender: "",
    bloodGroup: "",
    maritalStatus: "",
    nationality: "Indian",

    /* ===========================
       CONTACT
    ============================ */

    phone: "",
    alternatePhone: "",
    whatsappNumber: "",

    email: "",

    preferredCommunication: "",

    /* ===========================
       ADDRESS
    ============================ */

    address: "",
    city: "",
    district: "",
    state: "Gujarat",
    country: "India",
    pincode: "",

    permanentAddress: "",
    permanentCity: "",
    permanentDistrict: "",
    permanentState: "",
    permanentCountry: "",
    permanentPincode: "",

    /* ===========================
       IDENTITY
    ============================ */

    aadhaarNumber: "",
    panNumber: "",
    voterId: "",
    drivingLicense: "",
    passportNumber: "",

    /* ===========================
       EDUCATION
    ============================ */

    education: "",
    course: "",
    college: "",
    university: "",
    passingYear: "",
    percentage: "",
    certifications: "",

    /* ===========================
       EMPLOYMENT
    ============================ */

    occupation: "",
    organization: "",
    designation: "",
    experienceYears: "",
    workDescription: "",

    /* ===========================
       VOLUNTEER
    ============================ */

    interests: [] as string[],
    skills: [] as string[],
    languages: [] as string[],
    availability: [] as string[],

    preferredLocation: "",

    previousExperience: "",

    message: "",

    /* ===========================
       EMERGENCY
    ============================ */

    emergencyName: "",
    emergencyRelation: "",
    emergencyPhone: "",
    emergencyAlternatePhone: "",
    emergencyAddress: "",

    /* ===========================
       MEDICAL
    ============================ */

    disability: "",
    allergies: "",

    medicalConditions: "",
    medications: "",

    medicalDeclaration: false,

    /* ===========================
       DOCUMENTS
    ============================ */

    resume: null,

    aadhaarFile: null,

    panFile: null,

    policeVerificationFile: null,

    otherDocuments: [] as File[],

    /* ===========================
       FINAL DECLARATION
    ============================ */

    agree: false,
  });

  const next = () => {
    if (step < TOTAL_STEPS) {
      setStep((prev) => prev + 1);
    }
  };

  const previous = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  async function submitForm(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    console.log(formData);

    /*
      TODO

      await registerVolunteer(formData)

    */

    alert("Volunteer Registration Submitted Successfully.");

    router.push("/volunteer/success");
  }

    return (
    <form
      onSubmit={submitForm}
      className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 space-y-10"
    >
      {/* Progress Bar */}

      <ProgressBar
        step={step}
        totalSteps={TOTAL_STEPS}
      />

      {/* ==========================
          STEP 1
      ========================== */}

      {step === 1 && (
        <Step1Personal
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {/* ==========================
          STEP 2
      ========================== */}

      {step === 2 && (
        <Step2Contact
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {/* ==========================
          STEP 3
      ========================== */}

      {step === 3 && (
        <Step3Address
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {/* ==========================
          STEP 4
      ========================== */}

      {step === 4 && (
        <Step4Identity
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {/* ==========================
          STEP 5
      ========================== */}

      {step === 5 && (
        <Step5Education
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {/* ==========================
          STEP 6
      ========================== */}

      {step === 6 && (
        <Step6Employment
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {/* ==========================
          STEP 7
      ========================== */}

      {step === 7 && (
        <Step7Volunteer
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {/* ==========================
          STEP 8
      ========================== */}

      {step === 8 && (
        <Step8Emergency
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {/* ==========================
          STEP 9
      ========================== */}

      {step === 9 && (
        <Step9Medical
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {/* ==========================
          STEP 10
      ========================== */}

      {step === 10 && (
        <Step10Documents
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {/* ==========================
          STEP 11
      ========================== */}

      {step === 11 && (
        <Step11Review
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {/* ==========================
          Navigation
      ========================== */}

      <StepNavigation
        step={step}
        totalSteps={TOTAL_STEPS}
        next={next}
        previous={previous}
      />
            {/* Submit Button on Final Step */}

      {step === TOTAL_STEPS && (
        <div className="flex justify-end pt-6 border-t">
          <button
            type="submit"
            disabled={!formData.agree}
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
              formData.agree
                ? "bg-green-600 hover:bg-green-700 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Submit Volunteer Registration
          </button>
        </div>
      )}
    </form>
  );
}