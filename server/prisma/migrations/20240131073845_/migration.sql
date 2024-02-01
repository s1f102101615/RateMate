/*
  Warnings:

  - The `industry` column on the `Company` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `location` column on the `Offer` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "occupation" TEXT[],
DROP COLUMN "industry",
ADD COLUMN     "industry" TEXT[];

-- AlterTable
ALTER TABLE "Offer" DROP COLUMN "location",
ADD COLUMN     "location" TEXT[];
