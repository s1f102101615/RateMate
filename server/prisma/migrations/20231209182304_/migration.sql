-- CreateTable
CREATE TABLE "Preference" (
    "userid" TEXT NOT NULL,
    "companySelection" TEXT[],
    "companySelectionType" TEXT[],
    "preferredLocations" TEXT[],
    "preferredDetail" TEXT NOT NULL,

    CONSTRAINT "Preference_pkey" PRIMARY KEY ("userid")
);
