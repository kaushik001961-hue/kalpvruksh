"use client";

import React from "react";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import AuthButtons from "./AuthButtons";

interface NavbarClientProps {
  isLoggedIn: boolean;
  role?: string;
}

export default function NavbarClient({ isLoggedIn, role }: NavbarClientProps) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b bg-white">
      {/* Brand Logo */}
      <div className="font-bold text-xl tracking-tight">
        <Link href="/">Kalpvruksh Trust</Link>
      </div>

      {/* Center Links */}
      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-600">
        <Link href="/about" className="hover:text-black">About</Link>
        <Link href="/activities" className="hover:text-black">Activities</Link>
        <Link href="/projects" className="hover:text-black">Projects</Link>
        <Link href="/volunteer" className="hover:text-black">Volunteer</Link>
        
        {/* If the user is an admin or editor, show a quick link to dashboard */}
        {isLoggedIn && (role === "ADMIN" || role === "EDITOR" || role === "REPORTER") && (
          <Link href="/admin" className="text-blue-600 font-semibold hover:underline">
            Admin Panel ({role.toLowerCase()})
          </Link>
        )}
      </div>

      {/* Right Side Auth Management Buttons */}
      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <LogoutButton />
        ) : (
          <AuthButtons />
        )}
      </div>
    </nav>
  );
}