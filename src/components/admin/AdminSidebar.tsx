"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "./LogoutButton";

const menu = [
  { title: "Dashboard", href: "/admin" },
  { title: "News", href: "/admin/news" },
  { title: "Projects", href: "/admin/projects" },
  { title: "Activities", href: "/admin/activities" },
  { title: "Gallery", href: "/admin/gallery" },
  { title: "Volunteers", href: "/admin/volunteers" },
  { title: "Donations", href: "/admin/donations" },
  { title: "Contact Messages", href: "/admin/contacts" },
  { title: "Settings", href: "/admin/settings" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-5">
      <h2 className="text-2xl font-bold mb-8 text-green-400">
        Admin Panel
      </h2>

      <nav className="flex flex-col gap-2">
        {menu.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-3 rounded-lg font-medium transition ${
                active
                  ? "bg-green-600 text-white"
                  : "hover:bg-slate-800"
              }`}
            >
              {item.title}
            </Link>
          );
        })}

        {/* Logout directly below Settings */}
        <div className="border-t border-slate-700 mt-4 pt-4">
          <LogoutButton />
        </div>
      </nav>
    </aside>
  );
}