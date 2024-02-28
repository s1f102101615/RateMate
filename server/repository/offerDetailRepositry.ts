import type { OfferModel } from '$/commonTypesWithClient/models';
import { prismaClient } from '$/service/prismaClient';

export const offerDetailRepository = {
  save: async (offerDetail: OfferModel) => {
    await prismaClient.offerDetail.upsert({
      where: { id: offerDetail.id },
      update: {
        companyId: offerDetail.companyId,
        companyName: offerDetail.companyName,
        annualincome: offerDetail.annualincome,
        industry: offerDetail.industry,
        local: offerDetail.local,
        occupation: offerDetail.occupation,
        occupationdetail: offerDetail.occupationdetail,
        jobdescription: offerDetail.jobdescription,
        jobdescriptiondetail: offerDetail.jobdescriptiondetail,
        businesscontent: offerDetail.businesscontent,
        requiredability: offerDetail.requiredability,
        publicationstartdate: offerDetail.publicationstartdate,
      },
      create: {
        companyId: offerDetail.companyId,
        companyName: offerDetail.companyName,
        annualincome: offerDetail.annualincome,
        industry: offerDetail.industry,
        local: offerDetail.local,
        occupation: offerDetail.occupation,
        occupationdetail: offerDetail.occupationdetail,
        jobdescription: offerDetail.jobdescription,
        businesscontent: offerDetail.businesscontent,
        requiredability: offerDetail.requiredability,
        publicationstartdate: offerDetail.publicationstartdate,
      },
    });
  },

  fetchinfo: async (companyId: number): Promise<OfferModel | null> => {
    console.log(companyId);
    const offer = await prismaClient.offerDetail.findFirst({
      where: { companyId },
    });
    console.log(offer);

    if (!offer) {
      throw new Error('company not found');
    }

    return offer;
  },
};
