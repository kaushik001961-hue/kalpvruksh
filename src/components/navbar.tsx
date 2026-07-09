import Link from "next/link";
import { getCurrentUser } from "@/lib/getUser";
import { logout } from "@/actions/auth";

export default async function Navbar() {
  const user = await getCurrentUser();

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-700">
          🌳 Kalpvruksh Trust
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/" className="hover:text-green-700">
            Home
          </Link>
          <Link href="/about" className="hover:text-green-700">
            About
          </Link>
          <Link href="/projects" className="hover:text-green-700">
            Projects
          </Link>
          <Link href="/activities" className="hover:text-green-700">
            Activities
          </Link>
          <Link href="/news" className="hover:text-green-700">
            News
          </Link>
          <Link href="/gallery" className="hover:text-green-700">
            Gallery
          </Link>
          <Link href="/contact" className="hover:text-green-700">
            Contact
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Link
                href={
                  user.role === "ADMIN" || user.role === "SUPER_ADMIN"
                    ? "/admin"
                    : "/volunteer/dashboard"
                }
                className="rounded-full border border-green-600 px-5 py-2 font-medium text-green-700 transition hover:bg-green-50"
              >
                Dashboard
              </Link>

              <form action={logout}>
                <button
                  type="submit"
                  className="rounded-full bg-red-600 px-5 py-2 font-medium text-white transition hover:bg-red-700"
                >
                  Logout
                </button>
              </form>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-full border border-green-600 px-5 py-2 font-medium text-green-700 transition hover:bg-green-50"
              >
                Login
              </Link>

              <Link
                href="/volunteer/register"
                className="rounded-full bg-green-600 px-5 py-2 font-medium text-white transition hover:bg-green-700"
              >
                Register as Volunteer
              </Link>

              <Link
                href="/donate"
                className="rounded-full bg-orange-500 px-5 py-2 font-medium text-white transition hover:bg-orange-600"
              >
                Donate Now
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}