import { createNews } from "@/actions/news";

export default function NewNewsPage() {
  return (
    <form
      action={createNews}
      className="space-y-4 max-w-xl"
    >
      <input
        name="title"
        placeholder="Title"
        className="w-full border p-3"
      />

      <input
        name="slug"
        placeholder="Slug"
        className="w-full border p-3"
      />

      <input
        name="image"
        placeholder="Image URL"
        className="w-full border p-3"
      />

      <textarea
        name="content"
        placeholder="Content"
        rows={10}
        className="w-full border p-3"
      />

      <label className="flex gap-2">
        <input
          type="checkbox"
          name="featured"
        />
        Featured
      </label>

      <button
        className="bg-green-600 text-white px-6 py-3 rounded"
      >
        Save
      </button>
    </form>
  );
}