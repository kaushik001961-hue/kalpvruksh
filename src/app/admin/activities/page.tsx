import React from "react";
import { prisma } from "@/lib/prisma"; // Adjust this import statement path depending on your project setup

export default async function ActivitiesPage() {
  // 🚀 FIXED: Removed the invalid include relation block to prevent the TypeScript 'never' compilation crash
  const activities = await prisma.activity.findMany();

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-neutral-900">Admin Activities Panel</h1>
      </div>

      {activities.length === 0 ? (
        <div className="text-center py-12 text-neutral-500 border border-dashed rounded-xl bg-neutral-50">
          No activities found. Create your first activity!
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <div key={activity.id} className="p-5 border border-neutral-200 rounded-xl bg-white shadow-sm">
              <h2 className="text-lg font-bold text-neutral-800 mb-2">{activity.title}</h2>
              <p className="text-sm text-neutral-600 line-clamp-3">{activity.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}