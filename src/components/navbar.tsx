import { cookies } from "next/headers";
import prisma from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";
import NavbarUI from "./layout/Navbar"; 

export default async function Navbar() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  let isLoggedIn = false;
  let role: string | undefined = undefined;

  if (token) {
    const decoded = await verifyToken(token);
    if (decoded && typeof decoded !== "string") {
      isLoggedIn = true;
      role = (decoded as { role?: string }).role;
    }
  }

  return (
    <NavbarUI 
      {...{ isLoggedIn, role } as any} 
    />
  );
}