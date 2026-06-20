"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";



export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Activities", href: "/activities" },
    { name: "Projects", href: "/projects" },
    { name: "News", href: "/news" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
    { name: "Donate", href: "/donate" },
    { name: "Volunteer", href: "/volunteer" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#edf3ed] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-3xl font-bold text-green-700"
        >
          🌿 Kalpvruksh
        </Link>

        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition ${
                pathname === link.href
                  ? "text-green-700"
                  : "text-gray-700 hover:text-green-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

<Link
  href="/donate"
  className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full"
>
  Donate Now
</Link>
      </div>
    </header>
  );
}