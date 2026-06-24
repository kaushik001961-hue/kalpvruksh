"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { logout } from "@/actions/auth";

"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Activities", href: "/activities" },
  { name: "Projects", href: "/projects" },
  { name: "News", href: "/news" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
  { name: "Volunteer", href: "/volunteer" },
];

export default function NavbarClient({
  isLoggedIn,
}: {
  isLoggedIn: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    // your navbar JSX
  );
}
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl bg-white/90 backdrop-blur-md rounded-2xl shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-green-700">
            🌿 Kalpvruksh
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium text-slate-700 transition hover:text-green-700"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Buttons */}
         <div className="hidden lg:flex items-center gap-3">
  {!isLoggedIn ? (
    <>
      <Link
        href="/login"
        className="px-4 py-2 border border-green-700 text-green-700 rounded-full"
      >
        Login
      </Link>

      <Link
        href="/register"
        className="px-4 py-2 bg-blue-600 text-white rounded-full"
      >
        Register
      </Link>

      <Link
        href="/donate"
        className="bg-green-700 text-white px-6 py-2 rounded-full"
      >
        Donate Now
      </Link>
    </>
  ) : (
    <Link
      href="/volunteer/dashboard"
      className="bg-green-700 text-white px-6 py-2 rounded-full"
    >
      Dashboard
    </Link>
  )}
</div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-green-700"
            onClick={() => setOpen(!open)}
          >
            <Menu />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t bg-[#E8F5E9] lg:hidden">
          <div className="flex flex-col gap-4 px-6 py-5">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-700"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/login"
              className="text-slate-700"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>

            <Link
              href="/register"
              className="text-slate-700"
              onClick={() => setOpen(false)}
            >
              Register
            </Link>

         
            <Link
              href="/donate"
              className="bg-green-700 text-white px-6 py-3 rounded-full text-center"
              onClick={() => setOpen(false)}
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}