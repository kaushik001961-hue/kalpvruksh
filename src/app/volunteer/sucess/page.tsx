import React from "react";
import Link from "next/link";

export default function VolunteerSuccessPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4 shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>
      <h1 className="text-3xl font-black text-neutral-900 tracking-tight mb-2">
        Registration Successful!
      </h1>
      <p className="text-neutral-600 max-w-md mb-8 font-normal">
        Thank you for joining Shree Kalpvruksh Charitable Trust. We will review your details and reach out shortly.
      </p>
      <Link 
        href="/" 
        className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-normal rounded-full shadow-md transition-all text-sm"
      >
        Return Home
      </Link>
    </div>
  );
}