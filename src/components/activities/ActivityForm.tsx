"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import slugify from "slugify";

import {
  ActivityFormValues,
  activitySchema,
} from "@/lib/validations/activity";

import {
  createActivity,
  updateActivity,
} from "@/actions/activityActions";

interface Category {
  id: string;
  name: string;
}

interface Props {
  categories: Category[];
  initialData?: Partial<ActivityFormValues> & {
    id?: string;
  };
}

export default function ActivityForm({
  categories,
  initialData,
}: Props) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ActivityFormValues>({
    resolver: zodResolver(activitySchema),
    defaultValues: {
      title: initialData?.title || "",
      slug: initialData?.slug || "",
      excerpt: initialData?.excerpt || "",
      content: initialData?.content || "",
      featuredImage: initialData?.featuredImage || "",
      categoryId: initialData?.categoryId || "",
      location: initialData?.location || "",
      eventDate: initialData?.eventDate || "",
      featured: initialData?.featured || false,
      published: initialData?.published || false,
      metaTitle: initialData?.metaTitle || "",
      metaDescription: initialData?.metaDescription || "",
    },
  });

  const title = watch("title");

  function generateSlug() {
    setValue(
      "slug",
      slugify(title || "", {
        lower: true,
        strict: true,
      })
    );
  }

  async function onSubmit(values: ActivityFormValues) {
    try {
      setLoading(true);

      if (initialData?.id) {
        await updateActivity(initialData.id, values);
      } else {
        await createActivity(values);
      }

      router.push("/admin/activities");
      router.refresh();
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* Title */}

      <div>
        <label className="font-medium">
          Activity Title
        </label>

        <input
          {...register("title")}
          className="mt-2 w-full rounded-lg border p-3"
        />

        <p className="text-red-500 text-sm">
          {errors.title?.message}
        </p>
      </div>

      {/* Slug */}

      <div>
        <label className="font-medium">
          Slug
        </label>

        <div className="mt-2 flex gap-2">
          <input
            {...register("slug")}
            className="flex-1 rounded-lg border p-3"
          />

          <button
            type="button"
            onClick={generateSlug}
            className="rounded-lg bg-gray-800 px-4 text-white"
          >
            Generate
          </button>
        </div>
      </div>

      {/* Category */}

      <div>
        <label className="font-medium">
          Category
        </label>

        <select
          {...register("categoryId")}
          className="mt-2 w-full rounded-lg border p-3"
        >
          <option value="">
            Select Category
          </option>

          {categories.map((category) => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>

        <p className="text-red-500 text-sm">
          {errors.categoryId?.message}
        </p>
      </div>

      {/* Excerpt */}

      <div>
        <label className="font-medium">
          Excerpt
        </label>

        <textarea
          rows={3}
          {...register("excerpt")}
          className="mt-2 w-full rounded-lg border p-3"
        />
      </div>

      {/* Content */}

      <div>
        <label className="font-medium">
          Content
        </label>

        <textarea
          rows={10}
          {...register("content")}
          className="mt-2 w-full rounded-lg border p-3"
        />

        <p className="text-red-500 text-sm">
          {errors.content?.message}
        </p>
      </div>

      {/* Location */}

      <div>
        <label className="font-medium">
          Location
        </label>

        <input
          {...register("location")}
          className="mt-2 w-full rounded-lg border p-3"
        />
      </div>

      {/* Event Date */}

      <div>
        <label className="font-medium">
          Event Date
        </label>

        <input
          type="date"
          {...register("eventDate")}
          className="mt-2 w-full rounded-lg border p-3"
        />
      </div>

      {/* Featured Image */}

      <div>
        <label className="font-medium">
          Featured Image URL
        </label>

        <input
          {...register("featuredImage")}
          className="mt-2 w-full rounded-lg border p-3"
        />
      </div>

      {/* Featured */}

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          {...register("featured")}
        />

        Featured Activity
      </label>

      {/* Published */}

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          {...register("published")}
        />

        Publish Activity
      </label>

      {/* SEO */}

      <div>
        <label className="font-medium">
          Meta Title
        </label>

        <input
          {...register("metaTitle")}
          className="mt-2 w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label className="font-medium">
          Meta Description
        </label>

        <textarea
          rows={3}
          {...register("metaDescription")}
          className="mt-2 w-full rounded-lg border p-3"
        />
      </div>

      <button
        disabled={loading}
        className="rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700 disabled:opacity-50"
      >
        {loading
          ? "Saving..."
          : initialData?.id
          ? "Update Activity"
          : "Create Activity"}
      </button>
    </form>
  );
}