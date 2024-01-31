import type { CompanyModel } from '$/commonTypesWithClient/models';

export type Methods = {
  post: {
    reqBody: { companyId: number };
    resBody: CompanyModel;
  };
};
