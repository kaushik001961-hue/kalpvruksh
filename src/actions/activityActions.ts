"use server";

import { prisma } from "@/lib/prisma";
import { activitySchema } from "@/lib/validations/activity";
import { revalidatePath } from "next/cache";
import slugify from "slugify";

export async function getActivities() {
  return prisma.activity.findMany({
    include: {
      category: true,
      gallery: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getPublishedActivities() {
  return prisma.activity.findMany({
    where: {
      published: true,
    },
    include: {
      category: true,
    },
    orderBy: {
      eventDate: "desc",
    },
  });
}

export async function getActivityById(id: string) {
  return prisma.activity.findUnique({
    where: { id },
    include: {
      category: true,
      gallery: true,
    },
  });
}

export async function getActivityBySlug(slug: string) {
  return prisma.activity.findUnique({
    where: { slug },
    include: {
      category: true,
      gallery: true,
    },
  });
}

export async function createActivity(data: unknown) {
  const validated = activitySchema.parse(data);

  let slug = validated.slug;

  if (!slug) {
    slug = slugify(validated.title, {
      lower: true,
      strict: true,
      trim: true,
    });
  }

  const exists = await prisma.activity.findUnique({
    where: { slug },
  });

  if (exists) {
    throw new Error("Activity slug already exists.");
  }

  const activity = await prisma.activity.create({
    data: {
      title: validated.title,
      slug,
      excerpt: validated.excerpt || null,
      content: validated.content,
      featuredImage: validated.featuredImage || null,
      categoryId: validated.categoryId,
      location: validated.location || null,
      eventDate: validated.eventDate
        ? new Date(validated.eventDate)
        : null,
      featured: validated.featured,
      published: validated.published,
      metaTitle: validated.metaTitle || null,
      metaDescription: validated.metaDescription || null,
    },
  });

  revalidatePath("/admin/activities");
  revalidatePath("/activities");

  return activity;
}

export async function updateActivity(
  id: string,
  data: unknown
) {
  const validated = activitySchema.parse(data);

  let slug = validated.slug;

  if (!slug) {
    slug = slugify(validated.title, {
      lower: true,
      strict: true,
      trim: true,
    });
  }

  const duplicate = await prisma.activity.findFirst({
    where: {
      slug,
      NOT: {
        id,
      },
    },
  });

  if (duplicate) {
    throw new Error("Slug already exists.");
  }

  const activity = await prisma.activity.update({
    where: { id },
    data: {
      title: validated.title,
      slug,
      excerpt: validated.excerpt || null,
      content: validated.content,
      featuredImage: validated.featuredImage || null,
      categoryId: validated.categoryId,
      location: validated.location || null,
      eventDate: validated.eventDate
        ? new Date(validated.eventDate)
        : null,
      featured: validated.featured,
      published: validated.published,
      metaTitle: validated.metaTitle || null,
      metaDescription: validated.metaDescription || null,
    },
  });

  revalidatePath("/admin/activities");
  revalidatePath("/activities");

  return activity;
}

export async function deleteActivity(id: string) {
  await prisma.activity.delete({
    where: { id },
  });

  revalidatePath("/admin/activities");
  revalidatePath("/activities");
}

export async function togglePublishActivity(id: string) {
  const activity = await prisma.activity.findUnique({
    where: { id },
  });

  if (!activity) {
    throw new Error("Activity not found.");
  }

  await prisma.activity.update({
    where: { id },
    data: {
      published: !activity.published,
    },
  });

  revalidatePath("/admin/activities");
  revalidatePath("/activities");
}

export async function toggleFeaturedActivity(id: string) {
  const activity = await prisma.activity.findUnique({
    where: { id },
  });

  if (!activity) {
    throw new Error("Activity not found.");
  }

  await prisma.activity.update({
    where: { id },
    data: {
      featured: !activity.featured,
    },
  });

  revalidatePath("/admin/activities");
  revalidatePath("/activities");
}