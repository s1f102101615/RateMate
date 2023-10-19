-- CreateTable
CREATE TABLE "User" (
    "userId" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "address" TEXT NOT NULL,
    "education" TEXT NOT NULL,
    "schooltype" TEXT NOT NULL,
    "schoolname" TEXT NOT NULL,
    "acdemicdiscipline" TEXT NOT NULL,
    "favoritegame" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);
