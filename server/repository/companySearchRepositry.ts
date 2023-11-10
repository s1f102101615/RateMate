import type { CompanyModel } from '$/commonTypesWithClient/models';
import { prismaClient } from '$/service/prismaClient';
import type { Company } from '@prisma/client';

const toCompanyModel = (prismaCompany: Company): CompanyModel => ({
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
export const companySearchRepository = {
  fetchinfo: async (params: {
    category1?: string[];
    minSalary?: string;
    maxSalary?: string;
    label?: string;
  }): Promise<CompanyModel[]> => {
    const whereClause: any = {};

    // category1が与えられている場合、ORクエリでそのいずれかが含まれるレコードを取得する
    if (params.category1 && params.category1.length > 0) {
      whereClause.OR = params.category1.map(cat => ({
        industry: cat
      }));
    }

    // 以下、minSalary、maxSalary、labelに関する処理は前述のコードを参照してください。

    console.log(whereClause);

    // Prismaクライアントを使って条件に一致する会社を取得する
    const companies = await prismaClient.company.findMany({
      where: whereClause,
    });
    console.log(companies);

    return companies.map(toCompanyModel);
  },
};
