import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import LogoutButton from "@/components/LogoutButton";

export default async function VolunteerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  const payload = verifyToken(token);

  if (!payload) {
    redirect("/login");
  }

  return (
    <div className="max-w-7xl mx-auto mt-10 flex gap-6">
      <aside className="w-64 bg-white rounded-xl shadow p-5">
        <h2 className="text-xl font-bold mb-6">
          Volunteer Portal
        </h2>

        <nav className="flex flex-col gap-3">
          <Link href="/volunteer/dashboard">
            Dashboard
          </Link>

          <Link href="/volunteer/profile">
            My Profile
          </Link>

          <Link href="/volunteer/activities">
            Activities
          </Link>

          <Link href="/volunteer/projects">
            Projects
          </Link>

          <LogoutButton />
        </nav>
      </aside>

      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}