import type { CompanyModel } from '$/commonTypesWithClient/models';
import { prismaClient } from '$/service/prismaClient';

export const companyDetailRepository = {
  save: async (companyDetail: CompanyModel) => {
    await prismaClient.companyDetail.upsert({
      where: { id: companyDetail.id },
      update: {
        companyId: companyDetail.companyId,
        companyName: companyDetail.companyName,
        annualincome: companyDetail.annualincome,
        industry: companyDetail.industry,
        local: companyDetail.local,
        occupation: companyDetail.occupation,
        occupationdetail: companyDetail.occupationdetail,
        jobdescription: companyDetail.jobdescription,
        jobdescriptiondetail: companyDetail.jobdescriptiondetail,
        businesscontent: companyDetail.businesscontent,
        requiredability: companyDetail.requiredability,
        publicationstartdate: companyDetail.publicationstartdate,
      },
      create: {
        companyId: companyDetail.companyId,
        companyName: companyDetail.companyName,
        annualincome: companyDetail.annualincome,
        industry: companyDetail.industry,
        local: companyDetail.local,
        occupation: companyDetail.occupation,
        occupationdetail: companyDetail.occupationdetail,
        jobdescription: companyDetail.jobdescription,
        businesscontent: companyDetail.businesscontent,
        requiredability: companyDetail.requiredability,
        publicationstartdate: companyDetail.publicationstartdate,
      },
    });
  },

  fetchinfo: async (companyId: number): Promise<CompanyModel | null> => {
    console.log(companyId);
    const company = await prismaClient.companyDetail.findFirst({
      where: { companyId },
    });
    console.log(company);

    if (!company) {
      throw new Error('company not found');
    }

    return company;
  },
};
