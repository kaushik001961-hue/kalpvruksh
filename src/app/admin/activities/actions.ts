"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

interface ActivityInput {
  title: string;
  description: string;
  image?: string | null;
  date: Date;
}

// Create Activity
export async function createActivity(data: ActivityInput) {
  await prisma.activity.create({
    data: {
      title: data.title,
      description: data.description,
      image: data.image ?? null,
      date: data.date,
    },
  });

  revalidatePath("/admin/activities");
}

// Update Activity
export async function updateActivity(
  id: string,
  data: ActivityInput
) {
  await prisma.activity.update({
    where: {
      id,
    },
    data: {
      title: data.title,
      description: data.description,
      image: data.image ?? null,
      date: data.date,
    },
  });

  revalidatePath("/admin/activities");
}

// Delete Activity
export async function deleteActivity(id: string) {
  await prisma.activity.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/activities");
}