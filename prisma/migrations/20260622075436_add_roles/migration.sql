/*
  Warnings:

  - The `status` column on the `Donation` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `Project` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `userId` on the `Volunteer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Volunteer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Volunteer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Volunteer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Volunteer" DROP CONSTRAINT "Volunteer_userId_fkey";

-- DropIndex
DROP INDEX "Volunteer_userId_key";

-- AlterTable
ALTER TABLE "Donation" DROP COLUMN "status",
ADD COLUMN     "status" "DonationStatus" NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "status",
ADD COLUMN     "status" "ProjectStatus" NOT NULL DEFAULT 'PLANNED';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'VOLUNTEER';

-- AlterTable
ALTER TABLE "Volunteer" DROP COLUMN "userId",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Volunteer_email_key" ON "Volunteer"("email");
