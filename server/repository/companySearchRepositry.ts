
/* eslint-disable max-depth */

/* eslint-disable complexity */
import type { CompanyModel } from '$/commonTypesWithClient/models';
import { prismaClient } from '$/service/prismaClient';



export const companySearchRepository = {
  fetchinfo: async (params: {
    category1?: string[];
    category2?: string[];
    category3?: string;
    minSalary?: string;
    maxSalary?: string;
    label?: string[];
  }): Promise<CompanyModel[]> => {
    console.log(params);
    console.log('awwawds');
    const whereClause: any = { AND: [] }; // whereClause.AND を配列として初期化

    // category1が与えられている場合、ANDクエリでそのいずれかが含まれるレコードを取得する
    if (params.category1 && params.category1.length > 0) {

      whereClause.AND.push({
        industry: { in: params.category1 },
      });
    }

    console.log('d');

    // category3が与えられている場合（null、undefined、空文字列を除く）、ANDクエリで一致するレコードを取得する
    if (params.category3 !== null) {
      whereClause.AND.push({
        local: params.category3,
      });
    }

    try {
      let minSalaryValue;
      let maxSalaryValue;

      if (params.minSalary !== null && params.minSalary !== undefined) {
        minSalaryValue = parseInt(params.minSalary.replace(/\D/g, ''));
        if (isNaN(minSalaryValue)) {
          minSalaryValue = undefined;
        }
      }

      if (params.maxSalary !== null && params.maxSalary !== undefined) {
        maxSalaryValue = parseInt(params.maxSalary.replace(/\D/g, ''));
        if (isNaN(maxSalaryValue)) {
          maxSalaryValue = undefined;
        }
      }

      if (minSalaryValue !== undefined || maxSalaryValue !== undefined) {
        const incomeCondition: { gte?: number; lte?: number } = {};
        if (minSalaryValue !== undefined) {
          incomeCondition.gte = minSalaryValue;
        }
        if (maxSalaryValue !== undefined) {
          incomeCondition.lte = maxSalaryValue;
        }
        whereClause.AND.push({
          annualincome: incomeCondition,
        });
      }

      console.log(JSON.stringify(whereClause, null, 2));
    } catch (error) {
      console.error('Error caught:', error);

    }
    console.log('aw');
    // 以下、minSalary、maxSalary、labelに関する処理は前述のコードを参照してください。

    console.log(JSON.stringify(whereClause, null, 2));

    // Prismaクライアントを使って条件に一致する会社を取得する
    const companies = await prismaClient.companyDetail.findMany({
      where: whereClause,
    });

    console.log('daw');

    return companies;
  },
};
