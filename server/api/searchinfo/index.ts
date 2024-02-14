import type { CompanyModel } from 'commonTypesWithClient/models';

export type Methods = {
  post: {
    reqBody: {
      category?: string[];
      category2?: string[];
      category3?: string;
      minSalary?: string;
      maxSalary?: string;
      label?: string[];
    };
    resBody: CompanyModel[]; // 結果はCompanyModelの配列として返されると仮定しています。
  };
};
