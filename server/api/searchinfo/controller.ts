
import { companySearchUsecase } from '$/usecase/companySerchUsecase';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ body }) => ({
    status: 201,
    body: await companySearchUsecase.fetchinfo(body),
  }),
}));
