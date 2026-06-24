import Link from "next/link";
import { cookies } from "next/headers";

export default async function AuthButtons() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  if (!token) {
    return (
      <div className="flex gap-3">
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
      </div>
    );
  }

  return (
    <div className="flex gap-3">
      <Link
        href="/admin"
        className="px-4 py-2 bg-green-600 text-white rounded-lg"
      >
        Dashboard
      </Link>
    </div>
  );
}