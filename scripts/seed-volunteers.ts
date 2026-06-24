import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Generate a secure hashed password for your seed users
  const password = await bcrypt.hash("password123", 10);

  console.log("⏳ Seeding volunteer accounts into the database...");

  const volunteers = [
    {
      name: "Volunteer One",
      email: "volunteer1@example.com",
      password,
      role: "VOLUNTEER" as const, // Using a string literal matching your Prisma enum definition
    },
    {
      name: "Ravi Volunteer",
      email: "ravi@example.com",
      password,
      role: "VOLUNTEER" as const,
    },
  ];

  for (const volunteer of volunteers) {
    await prisma.user.upsert({
      where: { email: volunteer.email },
      update: {},
      create: {
        name: volunteer.name,
        email: volunteer.email,
        password: volunteer.password,
        role: volunteer.role,
      },
    });
  }

  console.log("✅ Volunteer accounts seeded successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding data:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });