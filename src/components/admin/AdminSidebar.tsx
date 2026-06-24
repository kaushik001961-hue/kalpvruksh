"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    name: "Dashboard",
    href: "/admin",
  },
  {
    name: "News",
    href: "/admin/news",
  },
  {
    name: "Projects",
    href: "/admin/projects",
  },
  {
    name: "Activities",
    href: "/admin/activities",
  },
  {
    name: "Gallery",
    href: "/admin/gallery",
  },
  {
    name: "Volunteers",
    href: "/admin/volunteers",
  },
  {
    name: "Donations",
    href: "/admin/donations",
  },
  {
    name: "Contact Messages",
    href: "/admin/contact-messages",
  },
  {
    name: "Settings",
    href: "/admin/settings",
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-8">
        Admin Panel
      </h2>

      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => {
          const active =
            pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-3 rounded-lg transition ${
                active
                  ? "bg-green-600 text-white"
                  : "hover:bg-slate-800"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}