/*
  Warnings:

  - You are about to drop the column `annualincome` on the `OfferDetail` table. All the data in the column will be lost.
  - You are about to drop the column `businesscontent` on the `OfferDetail` table. All the data in the column will be lost.
  - You are about to drop the column `industry` on the `OfferDetail` table. All the data in the column will be lost.
  - You are about to drop the column `jobdescription` on the `OfferDetail` table. All the data in the column will be lost.
  - You are about to drop the column `jobdescriptiondetail` on the `OfferDetail` table. All the data in the column will be lost.
  - You are about to drop the column `local` on the `OfferDetail` table. All the data in the column will be lost.
  - You are about to drop the column `occupation` on the `OfferDetail` table. All the data in the column will be lost.
  - You are about to drop the column `occupationdetail` on the `OfferDetail` table. All the data in the column will be lost.
  - You are about to drop the column `publicationstartdate` on the `OfferDetail` table. All the data in the column will be lost.
  - You are about to drop the column `requiredability` on the `OfferDetail` table. All the data in the column will be lost.
  - Added the required column `jobDetails` to the `OfferDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `offertitle` to the `OfferDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `otherFeatures` to the `OfferDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workLocationDetail` to the `OfferDetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OfferDetail" DROP COLUMN "annualincome",
DROP COLUMN "businesscontent",
DROP COLUMN "industry",
DROP COLUMN "jobdescription",
DROP COLUMN "jobdescriptiondetail",
DROP COLUMN "local",
DROP COLUMN "occupation",
DROP COLUMN "occupationdetail",
DROP COLUMN "publicationstartdate",
DROP COLUMN "requiredability",
ADD COLUMN     "imageUrls" TEXT[],
ADD COLUMN     "jobDetails" TEXT NOT NULL,
ADD COLUMN     "offertitle" TEXT NOT NULL,
ADD COLUMN     "otherFeatures" TEXT NOT NULL,
ADD COLUMN     "workLocationDetail" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "RecruitmentOverview" (
    "id" INTEGER NOT NULL,
    "occupation" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "salary" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "feature" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "ApplicationRequirements" (
    "id" INTEGER NOT NULL,
    "mandatoryRequirements" TEXT NOT NULL,
    "idealPerson" TEXT NOT NULL,
    "selectionFlow" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "TreatmentBenefits" (
    "id" INTEGER NOT NULL,
    "salarySystem" TEXT NOT NULL,
    "annualIncome" TEXT NOT NULL,
    "workingHours" TEXT NOT NULL,
    "holidayVacation" TEXT NOT NULL,
    "allowances" TEXT NOT NULL,
    "promotion" TEXT NOT NULL,
    "insurance" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "RecruitmentOverview_id_key" ON "RecruitmentOverview"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ApplicationRequirements_id_key" ON "ApplicationRequirements"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TreatmentBenefits_id_key" ON "TreatmentBenefits"("id");

-- AddForeignKey
ALTER TABLE "RecruitmentOverview" ADD CONSTRAINT "RecruitmentOverview_id_fkey" FOREIGN KEY ("id") REFERENCES "OfferDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApplicationRequirements" ADD CONSTRAINT "ApplicationRequirements_id_fkey" FOREIGN KEY ("id") REFERENCES "OfferDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TreatmentBenefits" ADD CONSTRAINT "TreatmentBenefits_id_fkey" FOREIGN KEY ("id") REFERENCES "OfferDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
