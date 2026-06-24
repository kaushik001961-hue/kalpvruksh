import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash("password123", 10);

  await prisma.user.createMany({
    data: [
      {
        name: "Jatin Volunteer",
        email: "volunteer1@example.com",
        password,
        role: Role.VOLUNTEER,
      },
      {
        name: "Ravi Volunteer",
        email: "volunteer2@example.com",
        password,
        role: Role.VOLUNTEER,
      },
      {
        name: "Priya Volunteer",
        email: "volunteer3@example.com",
        password,
        role: Role.VOLUNTEER,
      },
    ],
    skipDuplicates: true,
  });

  console.log("✅ Volunteers seeded successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });