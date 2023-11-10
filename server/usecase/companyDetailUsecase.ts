
import type { CompanyDetailModel } from '$/commonTypesWithClient/models';
import { companyDetailRepository } from '$/repository/companyDetailRepositry';

import assert from 'assert';
export const companyDetailUsecase = {
  fetchinfo: async (companyId:number): Promise<CompanyDetailModel> => {
    console.log('detailusecase');
    console.log(companyId);
    const companyinfo= await companyDetailRepository.fetchinfo(companyId);
    console.log(companyinfo);
    assert(companyinfo, 'infoなし');
    return companyinfo;
  },
};
