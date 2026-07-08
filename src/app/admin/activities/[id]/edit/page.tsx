import React from "react";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ActivityForm from "@/components/activities/ActivityForm";
import { createActivity, updateActivity } from "@/app/admin/activities/actions"; 

interface EditPageProps {
  params: {
    id: string;
  };
}

export default async function EditActivityPage({ params }: EditPageProps) {
  const { id } = params;

  const activity = await prisma.activity.findUnique({
    where: { id },
  });

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
          categories={[]}
          createActivity={createActivity}
          updateActivity={updateActivity}
          initialData={{
            id: activity.id,
            title: activity.title,
            content: activity.description, 
            featuredImage: activity.image || "", 
            eventDate: activity.date ? new Date(activity.date).toISOString().split('T')[0] : "", 
            published: true, 
            featured: false,
          }}
        />
      </div>
    </div>
  );
}