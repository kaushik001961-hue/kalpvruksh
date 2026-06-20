import Link from "next/link";
import {
  Users,
  Newspaper,
  FolderKanban,
  Image as ImageIcon,
  IndianRupee,
} from "lucide-react";

const stats = [
  {
    title: "Volunteers",
    value: "120",
    icon: Users,
    href: "/admin/volunteers",
  },
  {
    title: "News Articles",
    value: "8",
    icon: Newspaper,
    href: "/admin/news",
  },
  {
    title: "Projects",
    value: "12",
    icon: FolderKanban,
    href: "/admin/projects",
  },
  {
    title: "Gallery Images",
    value: "50",
    icon: ImageIcon,
    href: "/admin/gallery",
  },
  {
    title: "Donations",
    value: "₹75,000",
    icon: IndianRupee,
    href: "/admin/donations",
  },
];

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-[#f7faf7]">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-5xl font-bold mb-4">
            Admin Dashboard
          </h1>

          <p className="text-green-100 text-lg">
            Manage volunteers, donations, projects,
            gallery and news content.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition"
              >
                <Icon className="w-10 h-10 text-green-700 mb-4" />

                <h2 className="text-3xl font-bold text-green-900">
                  {item.value}
                </h2>

                <p className="text-gray-600 mt-2">
                  {item.title}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Management Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-green-900 mb-10">
          Management
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link
            href="/admin/volunteers"
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl"
          >
            <Users className="w-10 h-10 text-green-700 mb-4" />

            <h3 className="text-2xl font-bold text-green-900">
              Volunteers
            </h3>

            <p className="text-gray-600 mt-3">
              View volunteer applications and manage registrations.
            </p>
          </Link>

          <Link
            href="/admin/news"
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl"
          >
            <Newspaper className="w-10 h-10 text-green-700 mb-4" />

            <h3 className="text-2xl font-bold text-green-900">
              News
            </h3>

            <p className="text-gray-600 mt-3">
              Create, edit and delete news articles.
            </p>
          </Link>

          <Link
            href="/admin/projects"
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl"
          >
            <FolderKanban className="w-10 h-10 text-green-700 mb-4" />

            <h3 className="text-2xl font-bold text-green-900">
              Projects
            </h3>

            <p className="text-gray-600 mt-3">
              Manage ongoing and completed projects.
            </p>
          </Link>

          <Link
            href="/admin/gallery"
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl"
          >
            <ImageIcon className="w-10 h-10 text-green-700 mb-4" />

            <h3 className="text-2xl font-bold text-green-900">
              Gallery
            </h3>

            <p className="text-gray-600 mt-3">
              Upload and organize gallery images.
            </p>
          </Link>

          <Link
            href="/admin/donations"
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl"
          >
            <IndianRupee className="w-10 h-10 text-green-700 mb-4" />

            <h3 className="text-2xl font-bold text-green-900">
              Donations
            </h3>

            <p className="text-gray-600 mt-3">
              Track donations and supporter contributions.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}