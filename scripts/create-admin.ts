import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("admin123", 10);

  const user = await prisma.user.create({
    data: {
      name: "Admin",
      email: "admin@kalpvruksh.org",
      password: hashedPassword,
      role: "ADMIN",
    },
  });

  console.log("Admin created:", user.email);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });