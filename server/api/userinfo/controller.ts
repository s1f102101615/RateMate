import { userinfoUsecase } from '$/usecase/userinfoUsecase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: () => ({ status: 200, body: 'Hello' }),
  post: async ({ body, user }) => ({
    status: 201,
    body: await userinfoUsecase.create(user.id, body),
  }),
}));
