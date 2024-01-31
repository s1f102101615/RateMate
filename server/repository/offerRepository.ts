/* eslint-disable complexity */
import { prismaClient } from '$/service/prismaClient';

export const offerRepository = {
  find: async (userId: string) => {
    const offerInfo = await prismaClient.offer.findMany({
      where: { userId },
    });
    return offerInfo;
  },
};
