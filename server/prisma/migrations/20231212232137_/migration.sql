/*
  Warnings:

  - Changed the type of `achievements` on the `Research` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Research" DROP COLUMN "achievements",
ADD COLUMN     "achievements" BOOLEAN NOT NULL,
ALTER COLUMN "presentation" SET DATA TYPE TEXT;
