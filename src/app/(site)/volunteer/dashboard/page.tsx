import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";

export default function VolunteerDashboard() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h1 className="text-3xl font-bold mb-4">
        Volunteer Dashboard
      </h1>

      <p className="text-slate-600">
        Welcome to Kalpvruksh Volunteer Portal.
      </p>
    </div>
  );
}