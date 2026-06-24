import { cookies } from "next/headers";
import prisma from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";

export async function getCurrentUser() {
  const token = (await cookies()).get("token")?.value;

  if (!token) return null;

  const payload = verifyToken(token) as {
    userId: string;
  } | null;

  if (!payload) return null;

  return prisma.user.findUnique({
    where: {
      id: payload.userId,
    },
  });
}