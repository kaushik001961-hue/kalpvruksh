"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
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

interface NavbarClientProps {
  isLoggedIn: boolean;
  role?: string;
}

export default function NavbarClient({
  isLoggedIn,
  role,
}: NavbarClientProps) {
  const [open, setOpen] = useState(false);

  const dashboardLink =
    role === "ADMIN" ? "/admin" : "/volunteer/dashboard";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-green-700 flex items-center gap-2"
          >
            🌿 Kalpvruksh
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium text-slate-700 hover:text-green-700 transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-3">
            {!isLoggedIn ? (
              <>
                <Link
                  href="/login"
                  className="px-5 py-2 border border-green-700 text-green-700 rounded-full font-medium hover:bg-green-50 transition"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="px-5 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link
                  href={dashboardLink}
                  className="px-5 py-2 border border-green-700 text-green-700 rounded-full font-medium hover:bg-green-50 transition"
                >
                  Dashboard
                </Link>

                <button
                  onClick={() => logout()}
                  className="px-5 py-2 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition"
                >
                  Logout
                </button>
              </>
            )}

            <Link
              href="/donate"
              className="bg-green-700 text-white px-6 py-2 rounded-full font-medium hover:bg-green-800 transition"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-green-700"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t bg-white shadow-md">
          <div className="px-6 py-5 flex flex-col gap-4">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-slate-700 hover:text-green-700 font-medium"
              >
                {item.name}
              </Link>
            ))}

            <hr />

            {!isLoggedIn ? (
              <>
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="text-slate-700 hover:text-green-700"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  onClick={() => setOpen(false)}
                  className="text-slate-700 hover:text-blue-700"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link
                  href={dashboardLink}
                  onClick={() => setOpen(false)}
                  className="text-green-700 font-medium"
                >
                  Dashboard
                </Link>

                <button
                  onClick={() => {
                    setOpen(false);
                    logout();
                  }}
                  className="text-left text-red-600"
                >
                  Logout
                </button>
              </>
            )}

            <Link
              href="/donate"
              onClick={() => setOpen(false)}
              className="bg-green-700 text-white py-3 rounded-full text-center font-medium hover:bg-green-800 transition"
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}