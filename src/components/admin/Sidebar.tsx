"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Dashboard", href: "/admin" },
  { name: "News", href: "/admin/news" },
  { name: "Projects", href: "/admin/projects" },
  { name: "Gallery", href: "/admin/gallery" },
  { name: "Volunteers", href: "/admin/volunteers" },
  { name: "Donations", href: "/admin/donations" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-green-800 text-white min-h-screen">
      <div className="p-6 text-2xl font-bold">
        Kalpvruksh Admin
      </div>

      <nav className="space-y-2 px-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block p-3 rounded ${
              pathname === link.href
                ? "bg-green-600"
                : "hover:bg-green-700"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}