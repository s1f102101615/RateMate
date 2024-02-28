import { offerUsecase } from '$/usecase/offerusecase';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async () => ({
    status: 201,
    body: await offerUsecase.fetchinfo(),
  }),
}));
