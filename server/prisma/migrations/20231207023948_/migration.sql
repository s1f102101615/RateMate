/*
  Warnings:

  - Added the required column `industry` to the `CompanyDetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CompanyDetail" ADD COLUMN     "industry" TEXT NOT NULL;
