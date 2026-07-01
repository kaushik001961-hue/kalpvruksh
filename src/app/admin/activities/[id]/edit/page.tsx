import { notFound } from "next/navigation";

import { prisma } from "@/lib/prisma";
import ActivityForm from "@/components/activities/ActivityForm";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditActivityPage({
  params,
}: Props) {
  const { id } = await params;

  const [activity, categories] = await Promise.all([
    prisma.activity.findUnique({
      where: { id },
    }),
    prisma.activityCategory.findMany({
      orderBy: {
        name: "asc",
      },
    }),
  ]);

  if (!activity) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6">

      <div>

        <h1 className="text-3xl font-bold">
          Edit Activity
        </h1>

        <p className="mt-2 text-gray-500">
          Update activity information.
        </p>

      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm">

        <ActivityForm
          categories={categories}
          initialData={{
            id: activity.id,
            title: activity.title,
            slug: activity.slug,
            excerpt: activity.excerpt ?? "",
            content: activity.content,
            featuredImage: activity.featuredImage ?? "",
            categoryId: activity.categoryId,
            location: activity.location ?? "",
            eventDate: activity.eventDate
              ? activity.eventDate.toISOString().split("T")[0]
              : "",
            featured: activity.featured,
            published: activity.published,
            metaTitle: activity.metaTitle ?? "",
            metaDescription: activity.metaDescription ?? "",
          }}
        />

      </div>

    </div>
  );
}