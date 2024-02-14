import { companyDetailUsecase } from '$/usecase/companyDetailUsecase';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ body }) => ({
    status: 201,
    body: await companyDetailUsecase.fetchinfo(body.companyId),
  }),
}));
