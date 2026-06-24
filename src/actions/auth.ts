"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createToken } from "@/lib/auth";

export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const valid = await bcrypt.compare(
    password,
    user.password
  );

  if (!valid) {
    throw new Error("Invalid password");
  }

  const token = createToken(user.id);

  const cookieStore = await cookies();

  cookieStore.set("token", token, {
    httpOnly: true,
    secure: false,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
if (
  user.role === "ADMIN" ||
  user.role === "SUPER_ADMIN"
) {
  redirect("/admin");
}

redirect("/volunteer/dashboard");
}

export async function logout() {
  const cookieStore = await cookies();

  cookieStore.delete("token");

  redirect("/login");
}
