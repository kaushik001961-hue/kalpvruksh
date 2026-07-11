"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User } from "lucide-react";

interface NavbarProps {
  isLoggedIn?: boolean;
  role?: string;
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Activities", href: "/activities" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Donate", href: "/donate" },
];

export default function Navbar({
  isLoggedIn = false,
  role,
}: NavbarProps) {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-1 left-0 right-0 z-[9999]">
        <div className="max-w-7xl mx-auto px-4">

          <div
            className={`
              flex items-center justify-between
              rounded-full
              px-8 lg:px-10
              py-4
              transition-all
              duration-300
              ${
                scrolled
                  ? "bg-white shadow-2xl border border-neutral-200"
                  : "bg-white/90 backdrop-blur-xl border border-white/40 shadow-xl"
              }
            `}
          >

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-4 shrink-0"
            >
              <img
                src="/logo.png"
                alt="Kalpvruksh"
                className="w-14 h-14 object-contain"
              />

              <div className="hidden sm:block">
                <h2 className="text-2xl font-extrabold text-neutral-900 leading-none">
                  Shree Kalpvruksh
                </h2>

                <p className="text-sm text-neutral-500 mt-1">
                  Charitable Trust
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-9">
              {navLinks.map((link) => {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`
                      relative
                      font-medium
                      text-[16px]
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

            {/* Right Side */}
            <div className="flex items-center gap-4">

              {/* Login */}
              <Link
                href={isLoggedIn ? "/admin" : "/login"}
                className="
                  hidden
                  lg:flex
                  items-center
                  justify-center
                  w-11
                  h-11
                  rounded-full
                  hover:bg-neutral-100
                  transition-all
                "
                title={isLoggedIn ? "Dashboard" : "Login"}
              >
                <User
                  size={20}
                  className="text-neutral-700"
                />
              </Link>

              {/* Volunteer Button */}
              <Link
                href="/volunteer/register"
                className="
                  hidden
                  lg:inline-flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-emerald-600
                  text-emerald-700
                  font-medium
                  px-6
                  py-3
                  hover:bg-emerald-50
                  transition-all
                  duration-300
                "
              >
                Become Volunteer
              </Link>

              {/* Hamburger Menu (Always Visible) */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
                className="
                  flex
                  lg:hidden
                  items-center
                  justify-center
                  w-12
                  h-12
                  rounded-2xl
                  border
                  border-neutral-200
                  bg-white
                  hover:bg-neutral-50
                  transition
                "
              >
                {isOpen ? (
                  <X
                    size={24}
                    className="text-neutral-700"
                  />
                ) : (
                  <Menu
                    size={24}
                    className="text-neutral-700"
                  />
                )}
              </button>

            </div>

          </div>

          {/* ============================
              Mobile / Desktop Drawer (Fixed Background Enclosure)
          ============================ */}
          {isOpen && (
            <div
              className="
                absolute
                top-[78px]
                left-0
                right-0
                animate-in
                fade-in
                slide-in-from-top-3
                duration-300
                px-3
              "
            >
              {/* 🟢 Re-nested the content inside the background card element wrapper correctly */}
              <div
                className="
                  rounded-[32px]
                  bg-white
                  shadow-2xl
                  border
                  border-neutral-200
                  overflow-hidden
                  flex flex-col p-6
                "
              >
                {navLinks.map((link) => {
                  const active = pathname === link.href;

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`
                        flex
                        items-center
                        justify-between
                        py-4
                        px-2
                        text-lg
                        font-medium
                        border-b
                        border-neutral-100
                        transition-all
                        duration-300
                        ${
                          active
                            ? "text-emerald-600"
                            : "text-neutral-700 hover:text-emerald-600"
                        }
                      `}
                    >
                      <span>{link.name}</span>

                      {active && (
                        <span className="w-2 h-2 rounded-full bg-emerald-600" />
                      )}
                    </Link>
                  );
                })}

                <div className="mt-6 space-y-3">
                  <Link
                    href="/volunteer/register"
                    onClick={() => setIsOpen(false)}
                    className="
                      flex
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-emerald-600
                      text-emerald-700
                      font-medium
                      py-3
                      hover:bg-emerald-50
                      transition-all
                    "
                  >
                    Become Volunteer
                  </Link>

                  <Link
                    href="/donate"
                    onClick={() => setIsOpen(false)}
                    className="
                      flex
                      items-center
                      justify-center
                      rounded-full
                      bg-emerald-600
                      hover:bg-emerald-700
                      text-white
                      font-medium
                      py-3
                      transition-all
                    "
                  >
                    Donate Now
                  </Link>

                  <Link
                    href={isLoggedIn ? "/admin" : "/login"}
                    onClick={() => setIsOpen(false)}
                    className="
                      flex
                      items-center
                      justify-center
                      rounded-full
                      bg-neutral-100
                      hover:bg-neutral-200
                      text-neutral-700
                      font-medium
                      py-3
                      transition-all
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

      {/* Spacer so page content starts below the fixed navbar */}
      <div className="h-14 lg:h-4" />
    </>
  );
}