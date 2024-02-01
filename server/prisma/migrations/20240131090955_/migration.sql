/*
  Warnings:

  - Changed the type of `annualincome` on the `CompanyDetail` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "CompanyDetail" DROP COLUMN "annualincome",
ADD COLUMN     "annualincome" INTEGER NOT NULL,
ALTER COLUMN "local" SET DATA TYPE TEXT;
