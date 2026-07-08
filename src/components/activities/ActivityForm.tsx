"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface ActivityFormProps {
  initialData?: {
    id?: string;
    title?: string;
    slug?: string;
    content?: string;
    categoryId?: string;
    featured?: boolean;
    published?: boolean;
    excerpt?: string;
    featuredImage?: string;
    location?: string;
    eventDate?: string;
    metaTitle?: string;
    metaDescription?: string;
  };
  createActivity: (data: { title: string; description: string; image?: string | null; date: Date }) => Promise<any>;
  updateActivity: (id: string, data: { title: string; description: string; image?: string | null; date: Date }) => Promise<any>;
}

export default function ActivityForm({ initialData, createActivity, updateActivity }: ActivityFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [values, setValues] = useState({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    content: initialData?.content || "",
    categoryId: initialData?.categoryId || "",
    featured: initialData?.featured || false,
    published: initialData?.published || false,
    excerpt: initialData?.excerpt || "",
    featuredImage: initialData?.featuredImage || "",
    location: initialData?.location || "",
    eventDate: initialData?.eventDate || "",
    metaTitle: initialData?.metaTitle || "",
    metaDescription: initialData?.metaDescription || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formattedValues = {
        title: values.title,
        description: values.content || values.excerpt || "", 
        image: values.featuredImage || null,                 
        date: values.eventDate ? new Date(values.eventDate) : new Date(), 
      };

      if (initialData?.id) {
        await updateActivity(initialData.id, formattedValues);
      } else {
        await createActivity(formattedValues);
      }

      router.push("/admin/activities");
      router.refresh();
    } catch (error) {
      console.error("An error occurred while saving activity data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
      <h2 className="text-xl font-bold text-neutral-800">
        {initialData?.id ? "Edit Activity Profile Layout" : "Create New Foundation Activity"}
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-neutral-700">Activity Title</label>
          <input
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange}
            required
            className="px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-emerald-600"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-neutral-700">Event Date</label>
          <input
            type="date"
            name="eventDate"
            value={values.eventDate}
            onChange={handleChange}
            className="px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-emerald-600"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-neutral-700">Featured Image URL</label>
        <input
          type="text"
          name="featuredImage"
          value={values.featuredImage}
          onChange={handleChange}
          className="px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-emerald-600"
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-neutral-700">Content Description</label>
        <textarea
          name="content"
          value={values.content}
          onChange={handleChange}
          rows={5}
          required
          className="px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-emerald-600"
          placeholder="Write comprehensive details about the charitable activity here..."
        />
      </div>

      <div className="flex items-center gap-6 pt-2">
        <label className="flex items-center gap-2 text-sm text-neutral-700 cursor-pointer">
          <input
            type="checkbox"
            name="published"
            checked={values.published}
            onChange={handleChange}
            className="w-4 h-4 accent-emerald-600"
          />
          Publish Publicly
        </label>

        <label className="flex items-center gap-2 text-sm text-neutral-700 cursor-pointer">
          <input
            type="checkbox"
            name="featured"
            checked={values.featured}
            onChange={handleChange}
            className="w-4 h-4 accent-emerald-600"
          />
          Feature on Homepage
        </label>
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-neutral-100">
        <button
          type="button"
          onClick={() => router.back()}
          className="px-4 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-5 py-2 text-sm font-medium bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg shadow-sm transition disabled:opacity-50"
        >
          {loading ? "Saving Records..." : "Save Activity Data"}
        </button>
      </div>
    </form>
  );
}