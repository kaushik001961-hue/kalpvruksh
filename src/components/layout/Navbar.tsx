import NavbarClient from "./NavbarClient";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import prisma from "@/lib/prisma";

export default async function Navbar() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  let isLoggedIn = false;
  let role: string | undefined;

  if (token) {
    const userId = verifyToken(token);

    if (userId) {
      const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
        select: {
          role: true,
        },
      });

      if (user) {
        isLoggedIn = true;
        role = user.role;
      }
    }
  }

  return (
    <NavbarClient
      isLoggedIn={isLoggedIn}
      role={role}
    />
  );
}