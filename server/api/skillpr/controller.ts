import { userinfoUsecase } from '$/usecase/userinfoUsecase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ user }) => ({
    status: 200,
    body: await userinfoUsecase.SkillPrGet(user.id),
  }),
  post: async ({ body, user }) => ({
    status: 201,
    body: await userinfoUsecase.SkillPrCreate(user.id, body),
  }),
}));
