import type { OfferModel } from '$/commonTypesWithClient/models';
import { offerDetailRepository } from '$/repository/offerDetailRepositry';

import assert from 'assert';
export const offerDetailUsecase = {
  fetchinfo: async (companyId: number): Promise<OfferModel> => {
    const offerinfo = await offerDetailRepository.fetchinfo(companyId);
    assert(offerinfo, 'infoなし');
    return offerinfo;
  },
};
