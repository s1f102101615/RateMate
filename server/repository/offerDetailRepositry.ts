/* eslint-disable complexity */
import type { OfferModel } from '$/commonTypesWithClient/models';
import { prismaClient } from '$/service/prismaClient';

export const offerDetailRepository = {
  save: async (offerDetail: OfferModel) => {
    await prismaClient.offerDetail.upsert({
      where: { id: offerDetail.id },
      update: {
        companyId: offerDetail.companyId,
        companyName: offerDetail.companyName,
        offertitle: offerDetail.offertitle,
        recruitmentOverview: {
          update: {
            occupation: offerDetail.recruitmentOverview?.occupation,
            industry: offerDetail.recruitmentOverview?.industry,
            salary: offerDetail.recruitmentOverview?.salary,
            location: offerDetail.recruitmentOverview?.location,
            feature: offerDetail.recruitmentOverview?.feature,
          },
        },
        applicationRequirements: {
          update: {
            mandatoryRequirements: offerDetail.applicationRequirements?.mandatoryRequirements,
            idealPerson: offerDetail.applicationRequirements?.idealPerson,
            selectionFlow: offerDetail.applicationRequirements?.selectionFlow,
          },
        },
        jobDetails: offerDetail.jobDetails,
        workLocationDetail: offerDetail.workLocationDetail,
        treatmentBenefits: {
          update: {
            salarySystem: offerDetail.treatmentBenefits?.salarySystem,
            annualIncome: offerDetail.treatmentBenefits?.annualIncome,
            workingHours: offerDetail.treatmentBenefits?.workingHours,
            holidayVacation: offerDetail.treatmentBenefits?.holidayVacation,
            allowances: offerDetail.treatmentBenefits?.allowances,
            promotion: offerDetail.treatmentBenefits?.promotion,
            insurance: offerDetail.treatmentBenefits?.insurance,
          },
        },
        otherFeatures: offerDetail.otherFeatures,
        imageUrls: offerDetail.imageUrls,
      },
      create: {
        companyId: offerDetail.companyId,
        companyName: offerDetail.companyName,
        offertitle: offerDetail.offertitle,
        recruitmentOverview: {
          create: {
            occupation: offerDetail.recruitmentOverview?.occupation ?? '',
            industry: offerDetail.recruitmentOverview?.industry ?? '',
            salary: offerDetail.recruitmentOverview?.salary ?? '',
            location: offerDetail.recruitmentOverview?.location ?? '',
            feature: offerDetail.recruitmentOverview?.feature ?? '',
          },
        },
        applicationRequirements: {
          create: {
            mandatoryRequirements: offerDetail.applicationRequirements?.mandatoryRequirements ?? '',
            idealPerson: offerDetail.applicationRequirements?.idealPerson ?? '',
            selectionFlow: offerDetail.applicationRequirements?.selectionFlow ?? '',
          },
        },
        jobDetails: offerDetail.jobDetails,
        workLocationDetail: offerDetail.workLocationDetail,
        treatmentBenefits: {
          create: {
            salarySystem: offerDetail.treatmentBenefits?.salarySystem ?? '',
            annualIncome: offerDetail.treatmentBenefits?.annualIncome ?? '',
            workingHours: offerDetail.treatmentBenefits?.workingHours ?? '',
            holidayVacation: offerDetail.treatmentBenefits?.holidayVacation ?? '',
            allowances: offerDetail.treatmentBenefits?.allowances ?? '',
            promotion: offerDetail.treatmentBenefits?.promotion ?? '',
            insurance: offerDetail.treatmentBenefits?.insurance ?? '',
          },
        },
        otherFeatures: offerDetail.otherFeatures,
        imageUrls: offerDetail.imageUrls,
      },
    });
  },

  fetchinfo: async (companyId: number): Promise<OfferModel | null> => {
    console.log(companyId);
    const offer = await prismaClient.offerDetail.findFirst({
      where: { companyId },
      include: {
        recruitmentOverview: true,
        applicationRequirements: true,
        treatmentBenefits: true,
      },
    });
    console.log(offer);

    if (!offer) {
      throw new Error('company not found');
    }

    return offer;
  },
};
