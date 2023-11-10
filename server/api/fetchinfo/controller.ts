import { companyUsecase } from '$/usecase/companyusecase';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async () => ({
    status: 201,
    body: await companyUsecase.fetchinfo(),
  }),
}));
