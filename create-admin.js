require("dotenv").config();

const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const existing = await prisma.user.findUnique({
    where: {
      email: "admin@kalpvruksh.org",
    },
  });

  if (existing) {
    console.log("Admin already exists");
    return;
  }

  const password = await bcrypt.hash("Admin@123", 10);

  const user = await prisma.user.create({
    data: {
      name: "Admin",
      email: "admin@kalpvruksh.org",
      password,
      role: "SUPER_ADMIN",
    },
  });

  console.log("Admin created:", user.email);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });