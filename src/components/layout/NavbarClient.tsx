"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react"; // Added X icon for a cleaner mobile toggle experience
import { useState } from "react";
import { logout } from "@/actions/auth";

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
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-green-700 hover:opacity-90 transition">
            🌿 Kalpvruksh
          </Link>

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

          {/* Right Side Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            {!isLoggedIn ? (
              <>
                <Link
                  href="/login"
                  className="px-5 py-2 border border-green-700 text-green-700 rounded-full font-medium text-sm hover:bg-green-50 transition"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="px-5 py-2 bg-blue-600 text-white rounded-full font-medium text-sm hover:bg-blue-700 transition"
                >
                  Register
                </Link>

                <Link
                  href="/donate"
                  className="bg-green-700 text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-green-800 transition"
                >
                  Donate Now
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/volunteer/dashboard"
                  className="bg-green-700 text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-green-800 transition"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => logout()}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-red-600 transition"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-green-700 focus:outline-none p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-gray-100 bg-white lg:hidden rounded-b-2xl shadow-inner">
          <div className="flex flex-col gap-4 px-6 py-5 text-sm font-medium">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-green-700 transition py-1"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <hr className="border-gray-100 my-1" />

            {!isLoggedIn ? (
              <>
                <Link
                  href="/login"
                  className="text-slate-700 hover:text-green-700 transition py-1"
                  onClick={() => setOpen(false)}
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="text-slate-700 hover:text-blue-600 transition py-1"
                  onClick={() => setOpen(false)}
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/volunteer/dashboard"
                  className="text-slate-700 hover:text-green-700 transition py-1"
                  onClick={() => setOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    setOpen(false);
                    logout();
                  }}
                  className="text-left text-slate-600 hover:text-red-600 transition py-1"
                >
                  Logout
                </button>
              </>
            )}

            <Link
              href="/donate"
              className="bg-green-700 text-white px-6 py-3 rounded-full text-center font-medium shadow-sm hover:bg-green-800 transition mt-2"
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