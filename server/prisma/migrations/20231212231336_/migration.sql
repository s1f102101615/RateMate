/*
  Warnings:

  - Changed the type of `awards` on the `Research` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `paper` on the `Research` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `presentation` on the `Research` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Research" DROP COLUMN "awards",
ADD COLUMN     "awards" BOOLEAN NOT NULL,
DROP COLUMN "paper",
ADD COLUMN     "paper" BOOLEAN NOT NULL,
DROP COLUMN "presentation",
ADD COLUMN     "presentation" BOOLEAN NOT NULL;
