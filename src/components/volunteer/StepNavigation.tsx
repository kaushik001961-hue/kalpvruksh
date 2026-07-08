"use client";

interface Props {
  step: number;
  totalSteps: number;
  next: () => void;
  previous: () => void;
}

export default function StepNavigation({
  step,
  totalSteps,
  next,
  previous,
}: Props) {
  return (
    <div className="flex justify-between mt-8">
      <button
        type="button"
        disabled={step === 1}
        onClick={previous}
        className="px-6 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
      >
        Previous
      </button>

      {step < totalSteps ? (
        <button
          type="button"
          onClick={next}
          className="px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
        >
          Next
        </button>
      ) : (
        <button
          type="submit"
          className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          Submit Registration
        </button>
      )}
    </div>
  );
}