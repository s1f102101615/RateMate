/* eslint-disable complexity */
import { prismaClient } from '$/service/prismaClient';

export const notificationRepository = {
  find: async (userId: string) => {
    const notification = await prismaClient.notification.findMany({
      where: { userId },
    });
    return notification;
  },
};
