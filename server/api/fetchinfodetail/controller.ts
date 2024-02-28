import { offerDetailUsecase } from '$/usecase/offerDetailUsecase';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ body }) => ({
    status: 201,
    body: await offerDetailUsecase.fetchinfo(body.companyId),
  }),
}));
