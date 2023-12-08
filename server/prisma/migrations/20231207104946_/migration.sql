/*
  Warnings:

  - You are about to drop the column `acdemicDiscipline` on the `User` table. All the data in the column will be lost.
  - Added the required column `academicDiscipline` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OfferStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "acdemicDiscipline",
ADD COLUMN     "academicDiscipline" TEXT NOT NULL,
ADD COLUMN     "gender" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Offer" (
    "id" SERIAL NOT NULL,
    "companyId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "salary" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "OfferStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Offer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "level" TEXT NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "companyId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameRank" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "gameId" INTEGER NOT NULL,
    "season" TEXT NOT NULL,
    "rank" TEXT NOT NULL,

    CONSTRAINT "GameRank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillPr" (
    "userid" TEXT NOT NULL,
    "skill1" TEXT NOT NULL,
    "skill2" TEXT NOT NULL,
    "skill3" TEXT NOT NULL,
    "selfPr" TEXT NOT NULL,

    CONSTRAINT "SkillPr_pkey" PRIMARY KEY ("userid")
);

-- CreateTable
CREATE TABLE "Research" (
    "userid" TEXT NOT NULL,
    "theme" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "achievements" TEXT NOT NULL,
    "awards" TEXT NOT NULL,
    "paper" TEXT NOT NULL,
    "presentation" TEXT NOT NULL,

    CONSTRAINT "Research_pkey" PRIMARY KEY ("userid")
);

-- CreateTable
CREATE TABLE "Competition" (
    "userid" TEXT NOT NULL,
    "achievement" TEXT NOT NULL,
    "details" TEXT NOT NULL,

    CONSTRAINT "Competition_pkey" PRIMARY KEY ("userid")
);

-- CreateTable
CREATE TABLE "WorkExperience" (
    "userid" TEXT NOT NULL,
    "internship" BOOLEAN NOT NULL,
    "partTimeJob" BOOLEAN NOT NULL,
    "details" TEXT NOT NULL,

    CONSTRAINT "WorkExperience_pkey" PRIMARY KEY ("userid")
);

-- CreateTable
CREATE TABLE "Experience" (
    "userid" TEXT NOT NULL,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("userid")
);

-- AddForeignKey
ALTER TABLE "Research" ADD CONSTRAINT "Research_userid_fkey" FOREIGN KEY ("userid") REFERENCES "Experience"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Competition" ADD CONSTRAINT "Competition_userid_fkey" FOREIGN KEY ("userid") REFERENCES "Experience"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkExperience" ADD CONSTRAINT "WorkExperience_userid_fkey" FOREIGN KEY ("userid") REFERENCES "Experience"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;
