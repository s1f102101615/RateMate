import type { CompanyModel } from '$/commonTypesWithClient/models';
import { companyDetailRepository } from '$/repository/companyDetailRepositry';

import assert from 'assert';
export const companyDetailUsecase = {
  fetchinfo: async (companyId: number): Promise<CompanyModel> => {
    console.log('detailusecase');
    console.log(companyId);
    const companyinfo = await companyDetailRepository.fetchinfo(companyId);
    console.log(companyinfo);
    assert(companyinfo, 'infoなし');
    return companyinfo;
  },
};
