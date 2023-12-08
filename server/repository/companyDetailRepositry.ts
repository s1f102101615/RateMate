import type { CompanyDetailModel } from '$/commonTypesWithClient/models';
import { prismaClient } from '$/service/prismaClient';
import type { CompanyDetail } from '@prisma/client';

const toCompanyModel = (prismaCompany: CompanyDetail): CompanyDetailModel => ({
  id: prismaCompany.id,
  companyId: prismaCompany.companyId,
  companyName: prismaCompany.companyName,
  annualincome: prismaCompany.annualincome,
  industry: prismaCompany.industry, 
  local: prismaCompany.local,
  occupation: prismaCompany.occupation,
  occupationdetail: prismaCompany.occupationdetail,
  jobdescription: prismaCompany.jobdescription,
  jobdescriptiondetail: prismaCompany.jobdescriptiondetail,
  businesscontent:prismaCompany.businesscontent,
  requiredability: prismaCompany.requiredability,
  publicationstartdate : prismaCompany.publicationstartdate
});

export const companyDetailRepository = {
  save: async (companyDetail: CompanyDetailModel) => {
    await prismaClient.company.upsert({
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
        businesscontent:companyDetail.businesscontent,
        requiredability: companyDetail.requiredability,
        publicationstartdate : companyDetail.publicationstartdate
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
        businesscontent:companyDetail.businesscontent,
        requiredability: companyDetail.requiredability,
        publicationstartdate : companyDetail.publicationstartdate,
      },
    });
  },

  fetchinfo: async (companyId: number): Promise<CompanyDetailModel|null> => {
    console.log(companyId)
    const company = await prismaClient.companyDetail.findFirst({
      where: { companyId }
    });
    console.log(company);
  
    if (!company) {
      throw new Error('company not found');
    }
  
    return toCompanyModel(company);
  },
};
