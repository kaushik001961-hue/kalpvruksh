import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { verifyToken } from "@/lib/auth"; // Verify this matches your auth helper file path
import { cookies } from "next/headers";

export default async function VolunteerProjectPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  // 1. Force decode token into an explicitly named independent variable
  const tokenData = verifyToken(token) as any;

  // 2. Extract the ID using a defensive fallback string
  const cleanUserId: string = 
    tokenData && typeof tokenData === "object" && "userId" in tokenData
      ? (tokenData.userId as string)
      : "";

  // 3. Clear out invalid or missing sessions immediately
  if (!cleanUserId) {
    redirect("/login");
  }

  // 4. Query Prisma using our verified clean string variable (completely safe from 'never')
  const userWithProfile = await prisma.user.findUnique({
    where: {
      id: cleanUserId,
    },
    include: {
      volunteer: true, 
    },
  });

  if (!userWithProfile) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-[#f7faf7] p-6 md:p-12">
      <div className="mx-auto max-w-4xl rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-green-900 mb-4">
          Volunteer Project Dashboard
        </h1>
        <p className="text-gray-600 mb-6">
          Welcome back, {userWithProfile.name || "Volunteer"}! Here are your active community trust initiatives.
        </p>
        
        {userWithProfile.volunteer ? (
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-xl border border-green-200">
              <span className="font-semibold text-green-800">Status:</span> Active Profile Verified
            </div>
            {/* Add your volunteer profile details layout grid here */}
          </div>
        ) : (
          <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-200 text-yellow-800">
            You haven't completed your volunteer profile yet.
          </div>
        )}
      </div>
    </main>
  );
}