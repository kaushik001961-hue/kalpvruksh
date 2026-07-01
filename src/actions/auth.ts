"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createToken } from "@/lib/auth";

export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // 1. Basic Validation
  if (!email || !password) {
    return { error: "Please fill in all fields" };
  }

  let targetUrl = "";

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Security best practice: Use a generic error message
    if (!user) {
      return { error: "Invalid email or password" };
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return { error: "Invalid email or password" };
    }

    const token = createToken(user.id);
    const cookieStore = await cookies();

    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Secure in production
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    // Determine where the user goes next
    if (user.role === "ADMIN" || user.role === "SUPER_ADMIN") {
      targetUrl = "/admin";
    } else {
      targetUrl = "/volunteer/dashboard";
    }

  } catch (error) {
    console.error("Login unexpected error:", error);
    return { error: "Something went wrong. Please try again." };
  }

  // 2. Redirect MUST happen OUTSIDE the try/catch block
  if (targetUrl) {
    redirect(targetUrl);
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("token");
  redirect("/login");
}