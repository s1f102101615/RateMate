import type { OfferModel } from '$/commonTypesWithClient/models';
import { prismaClient } from '$/service/prismaClient';

export const offerRepository = {
  save: async (company: OfferModel) => {
    await prismaClient.offerDetail.upsert({
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
  fetchinfo: async (): Promise<OfferModel[] | undefined> => {
    const companylist = await prismaClient.offerDetail.findMany();
    return companylist;
  },
};
