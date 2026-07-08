import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
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

  // Query your activity record from the DB
  const activity = await prisma.activity.findUnique({
    where: { id },
  });

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
          categories={[]} // Matches the category array requirement safely
          initialData={{
            id: activity.id,
            title: activity.title,
            slug: activity.id, // Using fallback identifier safely for mandatory form slugs
            content: activity.description, // Maps schema description to form content
            featuredImage: activity.image ?? "", // Maps schema image to form featuredImage
            categoryId: "",
            location: "",
            eventDate: activity.date
              ? activity.date.toISOString().split("T")[0]
              : "", // Maps schema date to form eventDate
            featured: false,
            published: true,
            excerpt: "",
            metaTitle: "",
            metaDescription: "",
          }}
        />
      </div>
    </div>
  );
}