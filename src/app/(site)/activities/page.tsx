import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function ActivitiesPage() {
  const activities = await prisma.activity.findMany({
    orderBy: {
      date: "desc",
    },
  });

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold">Our Activities</h1>
        <p className="mt-4 text-gray-600">
          Explore the activities conducted by Kalpvruksh Charitable Trust.
        </p>
      </div>

      {activities.length === 0 ? (
        <div className="rounded-xl border bg-white p-16 text-center">
          <h2 className="text-2xl font-semibold">No Activities Found</h2>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <Link
              key={activity.id}
              href={`/activities/${activity.id}`}
              className="overflow-hidden rounded-xl border bg-white shadow-sm"
            >
              {activity.image ? (
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="h-56 w-full object-cover"
                />
              ) : (
                <div className="h-56 flex items-center justify-center bg-gray-100">
                  No Image
                </div>
              )}

              <div className="p-6">
                <h2 className="text-xl font-semibold">
                  {activity.title}
                </h2>

                <p className="mt-3 text-gray-600">
                  {activity.description}
                </p>

                <div className="mt-4 text-sm text-gray-500">
                  {new Date(activity.date).toLocaleDateString()}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}