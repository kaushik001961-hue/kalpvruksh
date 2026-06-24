import { prisma } from "@/lib/prisma";
export const dynamic = "force-dynamic";

// CRITICAL: The function MUST have "export default"
export default function AdminReportsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">System Reports</h1>
        <p className="text-gray-500 text-sm mt-1">
          Review article analytics, reporter engagement, and platform growth.
        </p>
      </div>

      <div className="border border-dashed border-gray-300 rounded-2xl bg-white p-12 text-center">
        <p className="text-gray-400 font-medium">Report compilation metrics coming soon.</p>
      </div>
    </div>
  );
}