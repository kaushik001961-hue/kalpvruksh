import Image from "next/image";
import Link from "next/link";

const news = [
  {
    slug: "tree-plantation-drive",
    title: "Tree Plantation Drive Successfully Completed",
    image: "/images/news1.jpg",
    date: "June 2026",
    description:
      "Over 1,000 trees were planted with the support of volunteers and local communities.",
  },
  {
    slug: "healthcare-camp",
    title: "Free Health Check-up Camp",
    image: "/images/news2.jpg",
    date: "May 2026",
    description:
      "Medical professionals provided free health check-ups and medicines to hundreds of beneficiaries.",
  },
  {
    slug: "education-support-program",
    title: "Educational Kit Distribution",
    image: "/images/news3.jpg",
    date: "April 2026",
    description:
      "School bags, books and stationery were distributed to underprivileged children.",
  },
];

export default function LatestNews() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block rounded-full bg-green-100 px-5 py-2 font-semibold text-green-700">
            📰 Latest News
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-800">
            Recent
            <span className="text-green-700"> Updates</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Stay updated with our latest activities, campaigns and
            community initiatives.
          </p>
        </div>

        {/* News Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <div
              key={item.slug}
              className="overflow-hidden rounded-3xl bg-[#F7F9F4] shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="h-60 w-full object-cover"
              />

              <div className="p-8">
                <span className="text-sm font-semibold text-green-700">
                  {item.date}
                </span>

                <h3 className="mt-3 text-2xl font-bold text-slate-800">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>

                <Link
  href={`/news/${item.slug}`}
  className="text-green-700 font-semibold flex items-center gap-2"
>
  Read More →
</Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-16 text-center">
          <Link
            href="/news"
            className="inline-block rounded-full border-2 border-green-700 px-8 py-4 font-semibold text-green-700 transition hover:bg-green-700 hover:text-white"
          >
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
}