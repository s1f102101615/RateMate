/*
  Warnings:

  - You are about to drop the `CompanyDetail` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "CompanyDetail";

-- CreateTable
CREATE TABLE "OfferDetail" (
    "id" SERIAL NOT NULL,
    "companyId" INTEGER NOT NULL,
    "companyName" TEXT NOT NULL,
    "annualincome" INTEGER NOT NULL,
    "industry" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "occupationdetail" TEXT[],
    "jobdescription" TEXT NOT NULL,
    "jobdescriptiondetail" TEXT[],
    "businesscontent" TEXT NOT NULL,
    "requiredability" TEXT NOT NULL,
    "publicationstartdate" TEXT NOT NULL,

    CONSTRAINT "OfferDetail_pkey" PRIMARY KEY ("id")
);
