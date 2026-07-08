import prisma from "@/lib/prisma";
import ActivityForm from "@/components/activities/ActivityForm";

export default async function NewActivityPage() {
  // Removed the prisma.activityCategory query entirely since it doesn't exist in your schema

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Create New Activity
        </h1>
        <p className="mt-2 text-gray-500">
          Add a new activity to the system.
        </p>
      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        {/* Pass an empty array to satisfy the form component's categories prop */}
        <ActivityForm categories={[]} />
      </div>
    </div>
  );
}