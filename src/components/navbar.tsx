"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Activities", href: "/activities" },
  { name: "Volunteer", href: "/volunteer/dashboard" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <div className="font-bold text-xl">
        Kalpvruksh Trust
      </div>

      <div className="flex gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              pathname === link.href
                ? "text-green-600 font-semibold"
                : ""
            }
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex gap-3">
        <Link
          href="/login"
          className="px-4 py-2 border rounded-lg"
        >
          Login
        </Link>


        <Link
          href="/register"
          className="px-4 py-2 bg-green-600 text-white rounded-lg"
        >
          Register
        </Link>

        <Link
  href="/volunteer/dashboard"
  className="px-4 py-2 border rounded-lg"
>
  Dashboard
</Link>
      </div>
    </nav>
  );
}