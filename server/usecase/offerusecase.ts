import type { OfferModel } from '$/commonTypesWithClient/models';
import { offerRepository } from '$/repository/offerRepositry';
import assert from 'assert';
export const offerUsecase = {
  fetchinfo: async (): Promise<OfferModel[]> => {
    const companyinfo = await offerRepository.fetchinfo();
    assert(companyinfo, 'infoなし');
    return companyinfo;
  },
};
