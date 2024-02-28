import type { UserId } from '$/commonTypesWithClient/ids';
import { offerRepository } from '$/repository/offerRepository';

export const offerUsecase = {
  get: async (user: UserId) => {
    const offer = await offerRepository.find(user);
    return offer;
  },
};
