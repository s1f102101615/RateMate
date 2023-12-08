/*
  Warnings:

  - You are about to drop the `CompanyModel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "CompanyModel";

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "companyId" INTEGER NOT NULL,
    "companyName" TEXT NOT NULL,
    "annualincome" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "jobdescription" TEXT NOT NULL,
    "businesscontent" TEXT NOT NULL,
    "requiredability" TEXT NOT NULL,
    "publicationstartdate" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);
