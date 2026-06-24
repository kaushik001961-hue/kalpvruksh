"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createNews(
  formData: FormData
) {
  await prisma.news.create({
    data: {
      title: formData.get("title") as string,
      slug: formData.get("slug") as string,
      image: formData.get("image") as string,
      content: formData.get("content") as string,
      featured: !!formData.get("featured"),
    },
  });

  redirect("/admin/news");
}