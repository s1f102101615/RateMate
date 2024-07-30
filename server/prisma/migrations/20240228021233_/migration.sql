/*
  Warnings:

  - You are about to drop the column `createdAt` on the `ApplicationRequirements` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `ApplicationRequirements` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `RecruitmentOverview` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `RecruitmentOverview` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `TreatmentBenefits` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `TreatmentBenefits` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ApplicationRequirements" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "RecruitmentOverview" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "TreatmentBenefits" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";
