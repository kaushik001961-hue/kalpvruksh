"use client";

import React, { useState } from "react";
import Link from "next/link";
import { User, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Activities", href: "/activities" },
    { name: "Projects", href: "/projects" },
    { name: "Donate", href: "/donate" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 w-full pt-8 pb-4 z-50 pointer-events-none bg-gradient-to-b from-white via-white/40 to-transparent">
   <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-neutral-200"> <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-3 sm:py-4">
            
            {/* 1. BRAND LOGO AREA */}
            <Link href="/" className="flex items-center gap-4 shrink-0 group">
             <img
  src="/logo.png"
  className="w-10 h-10 sm:w-14 sm:h-14 object-contain"
/>
              <div className="flex flex-col">
                <span className="text-base sm:text-xl lg:text-2xl font-black text-neutral-900 tracking-tight leading-none">
                  Shree Kalpvruksh
                </span>
                <span className="hidden sm:block text-sm text-neutral-500">
  Charitable Trust
</span>
              </div>
            </Link>

            {/* 2. DESKTOP NAVIGATION */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7 mx-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[16px] font-normal text-neutral-600 hover:text-emerald-600 transition-colors tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* 3. ACTION BUTTONS AREA */}
            <div className="flex items-center gap-3 lg:gap-4 shrink-0">
              <Link
                href="/admin"
                className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors"
                title="Login"
              >
                <User size={22} />
              </Link>

              <Link
                href="/volunteer/register"
                className="hidden md:inline-flex items-center text-[15px] font-normal border border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-5 py-2.5 rounded-full transition-colors"
              >
                Become Volunteer
              </Link>

              <Link
  href="/donate"
  className="hidden sm:inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full shadow-md transition-all"
>
  Donate
</Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-neutral-600 hover:text-neutral-900 transition-colors lg:hidden focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>

          </div>
        </div>

        {/* --- MOBILE FULLSCREEN OVERLAY PANEL --- */}
        {isOpen && (
          <div className="fixed left-0 right-0 top-[80px] z-50 bg-white shadow-2xl border-t border-neutral-200 lg:hidden">  {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-normal text-neutral-700 hover:text-emerald-600 border-b border-neutral-100 pb-2 transition"
              >
                {link.name}
              </Link>
            ))}
            
            <Link
              href="/volunteer/register"
              onClick={() => setIsOpen(false)}
              className="mt-4 text-center text-base font-normal bg-neutral-100 text-neutral-800 py-3.5 rounded-full hover:bg-neutral-200 transition"
            >
              Become Volunteer
            </Link>
          </div>
        )}
      </header>
    </div>
  );
}