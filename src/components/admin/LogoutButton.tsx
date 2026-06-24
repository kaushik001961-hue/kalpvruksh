"use client";

import { logout } from "@/actions/auth";

export default function LogoutButton() {
  return (
    <form action={logout}>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </form>
  );
}