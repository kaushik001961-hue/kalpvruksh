import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("Admin@123", 10);

  await prisma.user.update({
    where: {
      email: "admin@kalpvruksh.org", // Change if your admin email is different
    },
    data: {
      password: hashedPassword,
    },
  });

  console.log("✅ Password reset successfully");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });