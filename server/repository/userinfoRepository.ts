import type { UserInfo } from '$/commonTypesWithClient/models';
import { prismaClient } from '$/service/prismaClient';

export const userinfoRepository = {
  save: async (userinfo: UserInfo) => {
    await prismaClient.user.upsert({
      where: { userId: userinfo.userId },
      update: {
        userId: userinfo.userId,
        birthday: userinfo.birthday,
        address: userinfo.address,
        education: userinfo.education,
        schooltype: userinfo.schooltype,
        schoolname: userinfo.schoolname,
        acdemicdiscipline: userinfo.acdemicdiscipline,
        favoritegame: userinfo.favoritegame,
        createdAt: userinfo.createdAt,
        firstname: userinfo.firstname,
        lastname: userinfo.lastname,
      },
      create: {
        userId: userinfo.userId,
        birthday: userinfo.birthday,
        address: userinfo.address,
        education: userinfo.education,
        schooltype: userinfo.schooltype,
        schoolname: userinfo.schoolname,
        acdemicdiscipline: userinfo.acdemicdiscipline,
        favoritegame: userinfo.favoritegame,
        createdAt: userinfo.createdAt,
        firstname: userinfo.firstname,
        lastname: userinfo.lastname,
      },
    });
  },
};
