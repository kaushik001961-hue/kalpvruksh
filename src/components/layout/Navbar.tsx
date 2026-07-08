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
    { name: "News", href: "/news" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 w-full pt-8 pb-4 z-50 pointer-events-none bg-gradient-to-b from-white via-white/40 to-transparent">
      <header className="w-[92%] max-w-7xl mx-auto bg-white/95 backdrop-blur-md border border-neutral-200/80 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl pointer-events-auto">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-3 sm:py-4">
            
            {/* 1. BRAND LOGO AREA */}
            <Link href="/" className="flex items-center gap-4 shrink-0 group">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain group-hover:scale-105 transition duration-200" 
              />
              <div className="flex flex-col justify-center">
                <span className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight leading-none">
                  Shree Kalpvruksh
                </span>
                <span className="text-sm sm:text-base text-neutral-500 tracking-normal mt-1.5 font-normal">
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

              {/* 🚀 FIXED REDIRECT: Pushes volunteers cleanly straight to your active registration route */}
              <Link
                href="/volunteer/register"
                className="hidden md:inline-flex items-center text-[15px] font-normal border border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-5 py-2 rounded-full transition-all"
              >
                Become Volunteer
              </Link>

              <Link
                href="/donate"
                className="text-[15px] font-normal bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95"
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
          <div className="absolute top-[105%] left-0 w-full bg-white rounded-2xl border border-neutral-200 shadow-xl px-6 py-8 flex flex-col gap-5 lg:hidden animate-in fade-in slide-in-from-top-4 duration-200 z-40">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-normal text-neutral-700 hover:text-emerald-600 border-b border-neutral-100 pb-2 transition"
              >
                {link.name}
              </Link>
            ))}
            
            {/* 🚀 FIXED MOBILE REDIRECT */}
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