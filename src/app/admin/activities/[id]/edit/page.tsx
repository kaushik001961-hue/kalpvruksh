import React from "react";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ActivityForm from "@/components/activities/ActivityForm";

// 🚀 Imports the required backend server actions to pass as props
import { createActivity, updateActivity } from "@/app/admin/activities/actions"; // 👈 Double check this import path matches where your actions file lives!

interface EditPageProps {
  params: {
    id: string;
  };
}

export default async function EditActivityPage({ params }: EditPageProps) {
  // Await the routing params safely
  const { id } = params;

  // Fetch the current record values from your Prisma DB instance
  const activity = await prisma.activity.findUnique({
    where: { id },
  });

  // If the record doesn't exist, gracefully trigger a 404 page error
  if (!activity) {
    notFound();
  }

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-neutral-900 tracking-tight">Modify Activity Settings</h1>
        <p className="text-sm text-neutral-500 mt-1">Update information guidelines or display parameters for this event.</p>
      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <ActivityForm
          categories={[]} // Matches structural prop configurations safely
          
          {/* 🚀 FIXED: Passed the required server actions down to clear the compiler mismatch error */}
          createActivity={createActivity}
          updateActivity={updateActivity}
          
          initialData={{
            id: activity.id,
            title: activity.title,
            content: activity.description, // Maps description column to your form's content view field
            featuredImage: activity.image || "", // Maps image column safely to featuredImage
            eventDate: activity.date ? new Date(activity.date).toISOString().split('T')[0] : "", // Formats date string safely for HTML input elements
            published: true, // Standard default fallbacks
            featured: false,
          }}
        />
      </div>
    </div>
  );
}