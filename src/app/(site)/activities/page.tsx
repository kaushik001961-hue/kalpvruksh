import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function ActivitiesPage() {
  const activities = await prisma.activity.findMany({
    orderBy: {
      date: "desc",
    },
  });

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-green-700">
          Our Activities
        </h1>

        <p className="mt-3 text-lg text-gray-600">
          Explore the activities conducted by Kalpvruksh Charitable Trust.
        </p>
      </div>

      {activities.length === 0 ? (
        <div className="rounded-xl border bg-white p-16 text-center shadow-sm">
          <h2 className="text-2xl font-semibold">
            No Activities Found
          </h2>

          <p className="mt-2 text-gray-500">
            Activities will appear here once they are added.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <Link
              key={activity.id}
              href={`/activities/${activity.id}`}
              className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              {activity.image ? (
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="h-56 w-full object-cover"
                />
              ) : (
                <div className="flex h-56 items-center justify-center bg-gray-100 text-gray-500">
                  No Image
                </div>
              )}

              <div className="p-6">
                <h2 className="text-xl font-semibold">
                  {activity.title}
                </h2>

                <p className="mt-3 line-clamp-3 text-gray-600">
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
    </main>
  );
}