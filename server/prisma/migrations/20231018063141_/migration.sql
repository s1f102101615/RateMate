-- CreateTable
CREATE TABLE "User" (
    "userId" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "address" TEXT NOT NULL,
    "education" TEXT NOT NULL,
    "schoolType" TEXT NOT NULL,
    "schoolName" TEXT NOT NULL,
    "acdemicDiscipline" TEXT NOT NULL,
    "favoriteGame" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);
