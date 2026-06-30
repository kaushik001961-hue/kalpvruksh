import Link from "next/link";
import { getCurrentUser } from "@/lib/getUser";
import LogoutButton from "@/components/LogoutButton";
import { logout } from "@/actions/auth";


export default async function Navbar() {
  const user = await getCurrentUser();

  console.log("========== NAVBAR ==========");
  console.log(user);

  return (
     );
}

export default async function Navbar() {
  const user = await getCurrentUser();

  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <div className="font-bold text-xl">
        Kalpvruksh Trust
      </div>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/activities">Activities</Link>
        <Link href="/news">News</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className="flex gap-3">
  {user ? (
    <>
      <Link
        href={
          user.role === "ADMIN" ||
          user.role === "SUPER_ADMIN"
            ? "/admin"
            : "/volunteer/dashboard"
        }
        className="px-4 py-2 border rounded-lg"
      >
        Dashboard
      </Link>

      <form action={logout}>
        <button
          type="submit"
          className="px-4 py-2 bg-red-600 text-white rounded-lg"
        >
          Logout
        </button>
      </form>
    </>
  ) : (
    <>
      <Link
        href="/login"
        className="px-4 py-2 border rounded-lg"
      >
        Login
      </Link>

      <Link
        href="/register"
        className="px-4 py-2 bg-green-600 text-white rounded-lg"
      >
        Register
      </Link>
    </>
  )}
</div>
    </nav>
  );
}