import Link from "next/link";
import { login } from "@/actions/auth";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center relative px-4">
      {/* Back to Home */}
      <Link
        href="/"
        className="absolute top-6 left-6 text-green-700 hover:text-green-800 font-semibold transition"
      >
        ← Back to Home Page
      </Link>

      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-5">
          <img
            src="/logo.png"
            alt="Kalpvruksh Charitable Trust"
            className="h-16 w-auto"
          />
        </div>

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Admin Login
        </h1>

        <form action={login} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold p-3 rounded-lg transition"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm text-gray-600 hover:text-green-700"
          >
            ← Return to Home Page
          </Link>
        </div>

        <div className="mt-6 border-t pt-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Shree Kalpvruksh Charitable Trust. All Rights
          Reserved.
        </div>
      </div>
    </div>
  );
}