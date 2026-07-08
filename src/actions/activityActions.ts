"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// 1. Get all activities
export async function getActivities() {
  try {
    return await prisma.activity.findMany({
      orderBy: { date: "desc" },
    });
  } catch (error) {
    console.error("Failed to fetch activities:", error);
    return [];
  }
}

// 2. Create a new activity
export async function createActivity(data: {
  title: string;
  description: string;
  image?: string | null;
  date: Date;
}) {
  try {
    const activity = await prisma.activity.create({
      data: {
        title: data.title,
        description: data.description,
        image: data.image,
        date: data.date,
      },
    });

    revalidatePath("/admin/activities");
    return { success: true, activity };
  } catch (error) {
    console.error("Failed to create activity:", error);
    return { error: "Failed to create activity record." };
  }
}

// 3. Update an existing activity
export async function updateActivity(
  id: string,
  data: {
    title: string;
    description: string;
    image?: string | null;
    date: Date;
  }
) {
  try {
    const updated = await prisma.activity.update({
      where: { id },
      data: {
        title: data.title,
        description: data.description,
        image: data.image,
        date: data.date,
      },
    });

    revalidatePath("/admin/activities");
    return { success: true, activity: updated };
  } catch (error) {
    console.error("Failed to update activity:", error);
    return { error: "Failed to update activity record." };
  }
}

// 4. Delete an activity
export async function deleteActivity(id: string) {
  try {
    await prisma.activity.delete({
      where: { id },
    });

    revalidatePath("/admin/activities");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete activity:", error);
    return { error: "Failed to safely remove the activity record." };
  }
}

// 5. Toggle Featured Status (Placeholder fallback)
export async function toggleFeaturedActivity(id: string) {
  try {
    revalidatePath("/admin/activities");
    return { success: true };
  } catch (error) {
    console.error("Failed to toggle featured state:", error);
    return { error: "Failed to update featured status." };
  }
}

// 6. Toggle Publish Status (Placeholder fallback)
export async function togglePublishActivity(id: string) {
  try {
    revalidatePath("/admin/activities");
    return { success: true };
  } catch (error) {
    console.error("Failed to toggle publish state:", error);
    return { error: "Failed to update publish status." };
  }
}