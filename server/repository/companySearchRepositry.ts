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

    try {
      // category1が与えられている場合、ANDクエリでそのいずれかが含まれるレコードを取得する
      if (params.category1 && params.category1.length > 0) {
        // whereClause.AND は既に配列として初期化されているので、そのまま push を使用する
        whereClause.AND.push({
          industry: { in: params.category1 },
        });
      }
      console.log('d');
    } catch (error) {
      console.log(error);
    }

    if (params.category2 && params.category2.length > 0) {
      whereClause.AND = Boolean(whereClause.AND) || [];
      whereClause.AND.push({
        occupation: { in: params.category2 },
      });
    }

    // category3が与えられている場合（null、undefined、空文字列を除く）、ANDクエリで一致するレコードを取得する
    if (params.category3 !== null) {
      whereClause.AND.push({
        local: params.category3,
      });
    }

    try {
      console.log("DA22WD")
      let minSalaryValue;
      let maxSalaryValue;
      console.log(params.minSalary,"dd555")
      console.log(params.maxSalary)

      // eslint-disable-next-line eqeqeq
      if (params.minSalary !== null && params.minSalary !== undefined && params.minSalary !== "") { 
        console.log("DA33322WD")
        minSalaryValue = parseInt(params.minSalary.replace(/\D/g, ''));
        if (!isNaN(minSalaryValue)) {
          console.log("DAWD")
          whereClause.AND.push({
            annualincome: {
              gte: minSalaryValue,
            },
          });
        }
      }

      // eslint-disable-next-line eqeqeq
      if (params.maxSalary !== null && params.maxSalary !== undefined && params.maxSalary !== "") {
        console.log("DA2222332WD")
        maxSalaryValue = parseInt(params.maxSalary.replace(/\D/g, ''));
        if (!isNaN(maxSalaryValue)) {
          console.log("DA22666WD")
          whereClause.AND.push({
            annualincome: {
              lte: maxSalaryValue,
            },
          });
        }
      }
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
    console.log(companies);

    return companies;
  },
};
