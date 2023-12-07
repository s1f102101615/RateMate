
import type { CompanyDetailModel } from '$/commonTypesWithClient/models';

export type Methods = {
  post: {
    reqBody: { companyId: number };
    resBody: CompanyDetailModel
  };
};
