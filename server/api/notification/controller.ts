import { notificationUsecase } from '$/usecase/notificationUsecase';
import { defineController } from './$relay';
export default defineController(() => ({
  get: async ({ user }) => ({
    status: 200,
    body: await notificationUsecase.get(user.id),
  }),
}));
