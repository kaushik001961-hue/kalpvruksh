import { z } from "zod";

export const activitySchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters")
    .max(200),

  slug: z
    .string()
    .min(3)
    .max(220)
    .regex(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers and hyphens"),

  excerpt: z
    .string()
    .max(300)
    .optional()
    .or(z.literal("")),

  content: z
    .string()
    .min(20, "Content is required"),

  featuredImage: z
    .string()
    .optional()
    .or(z.literal("")),

  categoryId: z
    .string()
    .min(1, "Please select a category"),

  location: z
    .string()
    .max(150)
    .optional()
    .or(z.literal("")),

  eventDate: z
    .string()
    .optional()
    .or(z.literal("")),

  featured: z.boolean(),

  published: z.boolean(),

  metaTitle: z
    .string()
    .max(60)
    .optional()
    .or(z.literal("")),

  metaDescription: z
    .string()
    .max(160)
    .optional()
    .or(z.literal(""))
});

export type ActivityFormValues = z.infer<typeof activitySchema>;