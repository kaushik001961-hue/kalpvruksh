import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function NewsPage() {
  const news = await prisma.news.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">
          News
        </h1>

        <Link
          href="/admin/news/new"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add News
        </Link>
      </div>

      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr>
            <th className="p-4 text-left">Title</th>
            <th className="p-4">Featured</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {news.map((item) => (
            <tr key={item.id}>
              <td className="p-4">{item.title}</td>

              <td className="text-center">
                {item.featured ? "Yes" : "No"}
              </td>

              <td className="text-center">
                <Link
                  href={`/admin/news/${item.id}/edit`}
                  className="text-blue-600"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}