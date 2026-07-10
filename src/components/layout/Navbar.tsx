"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User, Heart } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Activities", href: "/activities" },
  { name: "Projects", href: "/projects" },
  { name: "Donate", href: "/donate" },
];

interface NavbarProps {
  isLoggedIn?: boolean;
  role?: string;
}

export default function Navbar({
  isLoggedIn = false,
  role,
}: NavbarProps) {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <header className="fixed top-2 left-0 right-0 z-[9999]">
        <div className="max-w-7xl mx-auto px-4">

          <div
            className={`
              flex items-center justify-between
              rounded-full
              transition-all duration-300
              border
              ${
                scrolled
                  ? "bg-white shadow-2xl border-neutral-200"
                  : "bg-white/85 backdrop-blur-xl border-white/40"
              }
              px-6 lg:px-8
              py-3
            `}
          >

            {/* LOGO */}

            <Link
              href="/"
              className="flex items-center gap-3 shrink-0"
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="w-12 h-12 object-contain"
              />

              <div className="hidden sm:block">
                <h2 className="text-lg font-extrabold leading-none text-neutral-900">
                  Shree Kalpvruksh
                </h2>

                <p className="text-sm text-neutral-500">
                  Charitable Trust
                </p>
              </div>
            </Link>

            {/* DESKTOP MENU */}

            <nav className="hidden lg:flex items-center gap-8">

              {navLinks.map((link) => {

                const active = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`
                      relative
                      font-medium
                      transition-all
                      duration-300
                      ${
                        active
                          ? "text-emerald-600"
                          : "text-neutral-700 hover:text-emerald-600"
                      }

                      after:absolute
                      after:left-0
                      after:-bottom-2
                      after:h-[2px]
                      after:bg-emerald-600
                      after:transition-all
                      ${
                        active
                          ? "after:w-full"
                          : "after:w-0 hover:after:w-full"
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                );
              })}

            </nav>

            {/* RIGHT BUTTONS */}

            <div className="flex items-center gap-3">

              <Link
                href="/admin"
                className="hidden lg:flex items-center justify-center
                w-11 h-11 rounded-full
                hover:bg-neutral-100 transition"
              >
                <User size={20} />
              </Link>

              <Link
                href="/volunteer/register"
                className="hidden md:flex
                px-5 py-2.5
                rounded-full
                border
                border-emerald-600
                text-emerald-700
                hover:bg-emerald-50
                transition"
              >
                Become Volunteer
              </Link>

              <Link
                href="/donate"
                className="
                hidden sm:flex
                items-center
                gap-2
                rounded-full
                bg-emerald-600
                hover:bg-emerald-700
                text-white
                px-6
                py-2.5
                shadow-lg
                transition
                "
              >
                <Heart size={18} />
                Donate
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-11 h-11 rounded-full hover:bg-neutral-100 flex items-center justify-center"
              >
                {isOpen ? <X /> : <Menu />}
              </button>

            </div>

          </div>
                    {/* MOBILE MENU */}

          {isOpen && (
            <div
              className="
              absolute
              left-0
              right-0
              top-[90px]
              lg:hidden
              animate-in
              fade-in
              slide-in-from-top-3
              duration-300
              "
            >
              <div
                className="
                mx-3
                rounded-3xl
                bg-white
                shadow-2xl
                border
                border-neutral-200
                p-6
                "
              >
                <nav className="flex flex-col">

                  {navLinks.map((link) => {

                    const active = pathname === link.href;

                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`
                          py-4
                          text-lg
                          font-medium
                          border-b
                          border-neutral-100
                          transition
                          ${
                            active
                              ? "text-emerald-600"
                              : "text-neutral-700 hover:text-emerald-600"
                          }
                        `}
                      >
                        {link.name}
                      </Link>
                    );

                  })}

                </nav>

                <div className="mt-6 flex flex-col gap-3">

                  <Link
                    href="/volunteer/register"
                    onClick={() => setIsOpen(false)}
                    className="
                    w-full
                    rounded-full
                    border
                    border-emerald-600
                    text-emerald-700
                    text-center
                    py-3
                    hover:bg-emerald-50
                    transition
                    "
                  >
                    Become Volunteer
                  </Link>

                  <Link
                    href="/donate"
                    onClick={() => setIsOpen(false)}
                    className="
                    w-full
                    rounded-full
                    bg-emerald-600
                    hover:bg-emerald-700
                    text-white
                    text-center
                    py-3
                    transition
                    "
                  >
                    Donate Now
                  </Link>

                  <Link
                    href="/admin"
                    onClick={() => setIsOpen(false)}
                    className="
                    w-full
                    rounded-full
                    bg-neutral-100
                    hover:bg-neutral-200
                    text-neutral-700
                    text-center
                    py-3
                    transition
                    "
                  >
                    {isLoggedIn
                      ? role === "ADMIN"
                        ? "Admin Dashboard"
                        : "Dashboard"
                      : "Login"}
                  </Link>

                </div>

              </div>
            </div>
          )}

        </div>
      </header>

      {/* Spacer to prevent content hiding behind fixed navbar */}
    <div className="h-15 lg:h-1" />
    </>
  );
}