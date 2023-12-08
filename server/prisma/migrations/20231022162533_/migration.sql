-- CreateTable
CREATE TABLE "CompanyDetail" (
    "id" SERIAL NOT NULL,
    "companyId" INTEGER NOT NULL,
    "companyName" TEXT NOT NULL,
    "annualincome" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "jobdescription" TEXT NOT NULL,
    "businesscontent" TEXT NOT NULL,
    "requiredability" TEXT NOT NULL,
    "publicationstartdate" TEXT NOT NULL,

    CONSTRAINT "CompanyDetail_pkey" PRIMARY KEY ("id")
);
