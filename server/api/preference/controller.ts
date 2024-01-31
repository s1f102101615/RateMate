import { userinfoUsecase } from '$/usecase/userinfoUsecase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ user }) => ({
    status: 200,
    body: await userinfoUsecase.PreferenceGet(user.id),
  }),
  post: async ({ body, user }) => ({
    status: 201,
    body: await userinfoUsecase.PreferenceCreate(user.id, body),
  }),
}));
