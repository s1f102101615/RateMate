
import type { CompanyModel } from '$/commonTypesWithClient/models';
import { companySearchRepository } from '$/repository/companySearchRepositry';
import assert from 'assert';
export const companySearchUsecase = {
  fetchinfo: async (params: {
    category?: string[];
    category2?: string[];
    category3?: string;
    minSalary?: string;
    maxSalary?: string;
    label?: string;
  }): Promise<CompanyModel[]> => {
    console.log('usecase22');
    const companyinfo= await companySearchRepository.fetchinfo(params);
    console.log(companyinfo, 'usecase[]');
    console.log( 'usecaseppkpkp');
    assert(companyinfo, 'infoなし');
    return companyinfo;
  },
};