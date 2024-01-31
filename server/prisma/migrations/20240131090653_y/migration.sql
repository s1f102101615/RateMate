/*
  Warnings:

  - Changed the type of `local` on the `CompanyDetail` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "CompanyDetail" DROP COLUMN "local",
ADD COLUMN     "local" INTEGER NOT NULL;
