import { offerUsecase } from '$/usecase/offerUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ user }) => ({
    status: 200,
    body: await offerUsecase.get(user.id),
  }),
}));
