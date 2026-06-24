import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  const payload = verifyToken(token) as {
    userId: string;
  };

  const userWithProfile = await prisma.user.findUnique({
  where: {
    id: payload.userId,
  },
  include: {
    volunteer: true, // This matches the lower-case property name on your User model!
  },
});

  const user = await prisma.user.findUnique({
    where: {
      id: payload.userId,
    },
    include: {
      volunteer: true,
    },
  });

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h1 className="text-3xl font-bold mb-6">
        My Profile
      </h1>

      <div className="space-y-4">
        <p>
          <strong>Name:</strong> {user.name}
        </p>

        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <p>
          <strong>Phone:</strong>{" "}
          {user.volunteer?.phone}
        </p>

        <p>
          <strong>City:</strong>{" "}
          {user.volunteer?.city}
        </p>

        <p>
          <strong>Interest:</strong>{" "}
          {user.volunteer?.interest}
        </p>

        <p>
          <strong>Message:</strong>{" "}
          {user.volunteer?.message}
        </p>
      </div>
    </div>
  );
}