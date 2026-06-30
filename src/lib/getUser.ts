import { cookies } from "next/headers";
import prisma from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";

export async function getCurrentUser() {
  const cookieStore = await cookies();

  const token =
    cookieStore.get("token")?.value;

  if (!token) {
    return null;
  }

  const userId = verifyToken(token);

  if (!userId) {
    return null;
  }

  return await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
}