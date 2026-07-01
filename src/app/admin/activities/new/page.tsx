import { prisma } from "@/lib/prisma";
import ActivityForm from "@/components/activities/ActivityForm";

export default async function NewActivityPage() {
  const categories = await prisma.activityCategory.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <div className="mx-auto max-w-5xl space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          Add New Activity
        </h1>

        <p className="mt-2 text-gray-500">
          Create a new activity for Kalpvruksh Charitable Trust.
        </p>
      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm">

        <ActivityForm
          categories={categories}
        />

      </div>

    </div>
  );
}