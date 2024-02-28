import type { OfferModel } from 'commonTypesWithClient/models';

export type Methods = {
  post: {
    reqBody: { companyId: number };
    resBody: OfferModel;
  };
};
