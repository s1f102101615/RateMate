import type { CompanyModel } from '$/commonTypesWithClient/models';
import { prismaClient } from '$/service/prismaClient';

export const companyRepository = {
  save: async (company: CompanyModel) => {
    await prismaClient.companyDetail.upsert({
      where: { id: company.id },
      update: {
        companyId: company.companyId,
        companyName: company.companyName,
        annualincome: company.annualincome,
        industry: company.industry,
        local: company.local,
        occupation: company.occupation,
        jobdescription: company.jobdescription,
        businesscontent: company.businesscontent,
        requiredability: company.requiredability,
        publicationstartdate: company.publicationstartdate,
      },
      create: {
        companyId: company.companyId,
        companyName: company.companyName,
        annualincome: company.annualincome,
        industry: company.industry,
        local: company.local,
        occupation: company.occupation,
        jobdescription: company.jobdescription,
        businesscontent: company.businesscontent,
        requiredability: company.requiredability,
        publicationstartdate: company.publicationstartdate,
      },
    });
  },
  fetchinfo: async (): Promise<CompanyModel[] | undefined> => {
    const companylist = await prismaClient.companyDetail.findMany();
    console.log(companylist);
    return companylist;
  },
};
