"use client";

import Link from "next/link";
import { Menu, X, Heart, User } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { logout } from "@/actions/auth";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Activities", href: "/activities" },
  { name: "Projects", href: "/projects" },
  { name: "News", href: "/news" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

interface NavbarClientProps {
  isLoggedIn: boolean;
  role?: string;
}

export default function NavbarClient({
  isLoggedIn,
  role,
}: NavbarClientProps) {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const dashboardLink =
    role === "ADMIN"
      ? "/admin"
      : "/volunteer/dashboard";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-sm">

      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between h-20 px-5">

          {/* ================= Logo ================= */}

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <img
              src="/logo.png"
              alt="Kalpvruksh"
              className="h-14 w-14 object-contain"
            />

            <div>

              <h1 className="text-xl font-extrabold text-green-700 leading-tight">
                Shree Kalpvruksh
              </h1>

              <p className="text-sm text-slate-500">
                Charitable Trust
              </p>

            </div>

          </Link>

          {/* ================= Desktop Menu ================= */}

          <nav className="hidden lg:flex items-center gap-8">

            {links.map((item) => {

              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-[15px] font-medium transition-all duration-300

                  ${
                    active
                      ? "text-green-700"
                      : "text-slate-700 hover:text-green-700"
                  }

                  after:absolute
                  after:left-0
                  after:-bottom-2
                  after:h-[2px]
                  after:bg-green-600
                  after:transition-all
                  ${
                    active
                      ? "after:w-full"
                      : "after:w-0 hover:after:w-full"
                  }
                  `}
                >
                  {item.name}
                </Link>
              );
            })}

          </nav>
                    {/* ================= Desktop Right ================= */}

          <div className="hidden lg:flex items-center gap-3">

            {!isLoggedIn ? (
              <>
                {/* Login */}

                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 rounded-full border border-green-600 px-5 py-2.5 text-sm font-semibold text-green-700 transition hover:bg-green-600 hover:text-white"
                >
                  <User size={16} />
                  Login
                </Link>

                {/* Register Volunteer */}

                <Link
                  href="/volunteer/register"
                  className="rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
                >
                  Volunteer Registeration
                </Link>
              </>
            ) : (
              <>
                {/* Dashboard */}

                <Link
                  href={dashboardLink}
                  className="rounded-full border border-green-600 px-5 py-2.5 text-sm font-semibold text-green-700 transition hover:bg-green-600 hover:text-white"
                >
                  Dashboard
                </Link>

                {/* Logout */}

                <button
                  onClick={() => logout()}
                  className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Logout
                </button>
              </>
            )}

            {/* Donate */}

            <Link
              href="/donate"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-orange-600 hover:shadow-lg"
            >
              <Heart size={16} fill="currentColor" />
              Donate Now
            </Link>

          </div>

          {/* ================= Mobile Menu Button ================= */}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden rounded-lg p-2 text-green-700 transition hover:bg-green-50"
            aria-label="Toggle Menu"
          >
            {open ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>

      </div>

      {/* ================= Mobile Menu ================= */}

      {open && (

        <div className="border-t border-slate-200 bg-white shadow-xl lg:hidden">

          <div className="space-y-1 px-6 py-6">
                        {links.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 font-medium transition

                  ${
                    active
                      ? "bg-green-50 text-green-700"
                      : "text-slate-700 hover:bg-slate-100 hover:text-green-700"
                  }
                  `}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="my-5 border-t border-slate-200" />

            {!isLoggedIn ? (
              <div className="space-y-3">

                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center rounded-full border border-green-600 px-5 py-3 font-semibold text-green-700 transition hover:bg-green-600 hover:text-white"
                >
                  Login
                </Link>

                <Link
                  href="/volunteer/register"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center rounded-full bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
                >
                  Register as Volunteer
                </Link>

              </div>
            ) : (
              <div className="space-y-3">

                <Link
                  href={dashboardLink}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center rounded-full border border-green-600 px-5 py-3 font-semibold text-green-700 transition hover:bg-green-600 hover:text-white"
                >
                  Dashboard
                </Link>

                <button
                  onClick={() => {
                    setOpen(false);
                    logout();
                  }}
                  className="w-full rounded-full bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
                >
                  Logout
                </button>

              </div>
            )}

            <Link
              href="/donate"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-orange-600 hover:shadow-lg"
            >
              <Heart size={18} fill="currentColor" />
              Donate Now
            </Link>

          </div>

        </div>

      )}

    </header>
  );
}