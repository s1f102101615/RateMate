
import type { CompanyModel } from '$/commonTypesWithClient/models';
import { companyRepository } from '$/repository/companyRepositry';
import assert from 'assert';
export const companyUsecase = {
  fetchinfo: async (): Promise<CompanyModel[]> => {
    console.log('usecase');
    const companyinfo= await companyRepository.fetchinfo();
    console.log(companyinfo);
    assert(companyinfo, 'infoなし');
    return companyinfo;
  },
};
