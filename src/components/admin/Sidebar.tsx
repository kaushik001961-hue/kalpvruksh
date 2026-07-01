"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "./LogoutButton";

const links = [
  { name: "Dashboard", href: "/admin" },
  { name: "News", href: "/admin/news" },
  { name: "Projects", href: "/admin/projects" },
  { name: "Gallery", href: "/admin/gallery" },
  { name: "Volunteers", href: "/admin/volunteers" },
  { name: "Donations", href: "/admin/donations" },
  { name: "Settings", href: "/admin/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-green-400 mb-8">
          Kalpvruksh Admin
        </h1>

        <nav className="space-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block p-3 rounded-lg transition ${
                pathname === link.href
                  ? "bg-green-600"
                  : "hover:bg-slate-800"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Logout Button */}
          <div className="border-t border-slate-700 mt-6 pt-6">
            <LogoutButton />
          </div>
        </nav>
      </div>
    </aside>
  );
}