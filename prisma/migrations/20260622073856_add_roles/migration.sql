/*
  Warnings:

  - The values [EDITOR] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `email` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Volunteer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Volunteer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Volunteer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('SUPER_ADMIN', 'ADMIN', 'VOLUNTEER');
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "public"."Role_old";
COMMIT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'VOLUNTEER';

-- AlterTable
ALTER TABLE "Volunteer" DROP COLUMN "email",
DROP COLUMN "name",
ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Volunteer_userId_key" ON "Volunteer"("userId");

-- AddForeignKey
ALTER TABLE "Volunteer" ADD CONSTRAINT "Volunteer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
