import Link from "next/link";
import { Plus, Activity, Star, FileText } from "lucide-react";

import { prisma } from "@/lib/prisma";
import ActivityTable from "@/components/activities/ActivityTable";

export default async function ActivitiesPage() {
  const activities = await prisma.activity.findMany({
    include: {
      category: true,
      gallery: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const totalActivities = activities.length;
  const publishedActivities = activities.filter(
    (item) => item.published
  ).length;
  const featuredActivities = activities.filter(
    (item) => item.featured
  ).length;

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Activities
          </h1>

          <p className="mt-1 text-gray-500">
            Manage all trust activities from one place.
          </p>
        </div>

        <Link
          href="/admin/activities/new"
          className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-medium text-white shadow hover:bg-green-700"
        >
          <Plus size={18} />
          Add Activity
        </Link>
      </div>

      {/* Statistics */}
      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-xl border bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-gray-500">
                Total Activities
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                {totalActivities}
              </h2>

            </div>

            <Activity className="text-green-600" size={34} />

          </div>

        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-gray-500">
                Published
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                {publishedActivities}
              </h2>

            </div>

            <FileText className="text-blue-600" size={34} />

          </div>

        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-gray-500">
                Featured
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                {featuredActivities}
              </h2>

            </div>

            <Star
              className="text-yellow-500"
              fill="currentColor"
              size={34}
            />

          </div>

        </div>

      </div>

      {/* Table */}
      <ActivityTable activities={activities} />

    </div>
  );
}