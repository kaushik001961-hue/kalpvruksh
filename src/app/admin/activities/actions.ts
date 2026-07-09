"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createActivity(formData: FormData) {
  const title = formData.get("title")?.toString() || "";
  const description = formData.get("description")?.toString() || "";

 await prisma.activity.create({
  data: {
    title,
    description,
    date: new Date(),
  },
});
  revalidatePath("/admin/activities");
}

export async function updateActivity(id: string, formData: FormData) {
  const title = formData.get("title")?.toString() || "";
  const description = formData.get("description")?.toString() || "";

  await prisma.activity.update({
    where: { id },
    data: {
      title,
      description,
    },
  });

  revalidatePath("/admin/activities");
}

export async function deleteActivity(id: string) {
  await prisma.activity.delete({
    where: { id },
  });

  revalidatePath("/admin/activities");
}