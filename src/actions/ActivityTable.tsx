"use client";

import Link from "next/link";
import {
  Pencil,
  Trash2,
  Eye,
  Star,
  StarOff,
  CheckCircle,
  XCircle,
  Calendar,
  MapPin,
  Plus,
} from "lucide-react";

import {
  deleteActivity,
  toggleFeaturedActivity,
  togglePublishActivity,
} from "@/actions/activityActions";

interface Activity {
  id: string;
  title: string;
  slug: string;
  location: string | null;
  featured: boolean;
  published: boolean;
  eventDate: Date | null;
  createdAt: Date;
  category: {
    id: string;
    name: string;
  };
}

interface Props {
  activities: Activity[];
}

export default function ActivityTable({ activities }: Props) {
  async function remove(id: string) {
    if (!confirm("Delete this activity?")) return;

    await deleteActivity(id);
  }

  async function publish(id: string) {
    await togglePublishActivity(id);
  }

  async function featured(id: string) {
    await toggleFeaturedActivity(id);
  }

  if (activities.length === 0) {
    return (
      <div className="rounded-xl border bg-white p-12 text-center">
        <h2 className="text-xl font-semibold">
          No Activities Found
        </h2>

        <p className="mt-2 text-gray-500">
          Start by creating your first activity.
        </p>

        <Link
          href="/admin/activities/new"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-white hover:bg-green-700"
        >
          <Plus size={18} />
          Add Activity
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full">

          <thead className="bg-gray-100">

            <tr className="text-left text-sm">

              <th className="px-5 py-4">Title</th>

              <th className="px-5 py-4">Category</th>

              <th className="px-5 py-4">Location</th>

              <th className="px-5 py-4">Date</th>

              <th className="px-5 py-4">Status</th>

              <th className="px-5 py-4">Featured</th>

              <th className="px-5 py-4 text-right">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {activities.map((activity) => (

              <tr
                key={activity.id}
                className="border-t hover:bg-gray-50"
              >

                <td className="px-5 py-4">

                  <div className="font-medium">
                    {activity.title}
                  </div>

                  <div className="text-xs text-gray-500">
                    {activity.slug}
                  </div>

                </td>

                <td className="px-5 py-4">
                  {activity.category.name}
                </td>

                <td className="px-5 py-4">

                  <div className="flex items-center gap-2">

                    <MapPin size={15} />

                    {activity.location || "-"}

                  </div>

                </td>

                <td className="px-5 py-4">

                  {activity.eventDate ? (

                    <div className="flex items-center gap-2">

                      <Calendar size={15} />

                      {new Date(
                        activity.eventDate
                      ).toLocaleDateString()}

                    </div>

                  ) : (
                    "-"
                  )}

                </td>

                <td className="px-5 py-4">

                  <button
                    onClick={() => publish(activity.id)}
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
                      activity.published
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {activity.published ? (
                      <>
                        <CheckCircle size={15} />
                        Published
                      </>
                    ) : (
                      <>
                        <XCircle size={15} />
                        Draft
                      </>
                    )}
                  </button>

                </td>

                <td className="px-5 py-4">

                  <button
                    onClick={() => featured(activity.id)}
                  >
                    {activity.featured ? (
                      <Star
                        className="text-yellow-500"
                        fill="currentColor"
                      />
                    ) : (
                      <StarOff className="text-gray-400" />
                    )}
                  </button>

                </td>

                <td className="px-5 py-4">

                  <div className="flex justify-end gap-2">

                    <Link
                      href={`/activities/${activity.slug}`}
                      target="_blank"
                      className="rounded-lg border p-2 hover:bg-gray-100"
                    >
                      <Eye size={18} />
                    </Link>

                    <Link
                      href={`/admin/activities/${activity.id}/edit`}
                      className="rounded-lg border p-2 hover:bg-blue-50"
                    >
                      <Pencil size={18} />
                    </Link>

                    <button
                      onClick={() => remove(activity.id)}
                      className="rounded-lg border p-2 hover:bg-red-50"
                    >
                      <Trash2
                        size={18}
                        className="text-red-600"
                      />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>
      </div>
    </div>
  );
}