import type { UserId } from '$/commonTypesWithClient/ids';
import { notificationRepository } from '$/repository/notificationRepository';

export const notificationUsecase = {
  get: async (user: UserId) => {
    const notification = await notificationRepository.find(user);
    return notification;
  },
};
