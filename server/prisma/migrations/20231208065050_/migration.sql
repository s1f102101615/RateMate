-- CreateEnum
CREATE TYPE "OfferStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED');

-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "companyId" INTEGER NOT NULL,
    "companyName" TEXT NOT NULL,
    "annualincome" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "occupationdetail" TEXT[],
    "jobdescription" TEXT NOT NULL,
    "jobdescriptiondetail" TEXT[],
    "businesscontent" TEXT NOT NULL,
    "requiredability" TEXT NOT NULL,
    "publicationstartdate" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanyDetail" (
    "id" SERIAL NOT NULL,
    "companyId" INTEGER NOT NULL,
    "companyName" TEXT NOT NULL,
    "annualincome" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "occupationdetail" TEXT[],
    "jobdescription" TEXT NOT NULL,
    "jobdescriptiondetail" TEXT[],
    "businesscontent" TEXT NOT NULL,
    "requiredability" TEXT NOT NULL,
    "publicationstartdate" TEXT NOT NULL,

    CONSTRAINT "CompanyDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "userId" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "address" TEXT NOT NULL,
    "education" TEXT NOT NULL,
    "schoolType" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "schoolName" TEXT NOT NULL,
    "academicDiscipline" TEXT NOT NULL,
    "favoriteGame" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

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
