import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { prisma } from "@/lib/prisma";

export default async function LatestNewsSection() {
  const news = await prisma.news.findMany({
    take: 3,
    orderBy: {
      createdAt: "desc",
    },
  });

  if (news.length === 0) return null;

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            LATEST NEWS
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Latest News
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Stay updated with the latest news and announcements from Kalpvruksh Charitable Trust.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {news.map((item) => (

            <article
              key={item.id}
              className="overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-xl transition"
            >
              <div className="relative h-64">

                <Image
                  src={item.image || "/images/news-placeholder.jpg"}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-6">

                <p className="text-sm text-green-700">
                  {new Date(item.createdAt).toLocaleDateString()}
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 line-clamp-3 text-gray-600">
                  {item.content}
                </p>

                <Link
                  href={`/news/${item.slug}`}
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-green-700"
                >
                  Read More
                  <ArrowRight size={18} />
                </Link>

              </div>

            </article>

          ))}

        </div>

        <div className="mt-12 text-center">

          <Link
            href="/news"
            className="rounded-full bg-green-700 px-8 py-4 text-white font-semibold hover:bg-green-800"
          >
            View All News
          </Link>

        </div>

      </div>
    </section>
  );
}