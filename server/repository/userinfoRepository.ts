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
        schoolType: userinfo.schoolType,
        schoolName: userinfo.schoolName,
        academicDiscipline: userinfo.academicDiscipline,
        gender: userinfo.gender,
        favoriteGame: userinfo.favoriteGame,
        createdAt: userinfo.createdAt,
        firstName: userinfo.firstName,
        lastName: userinfo.lastName,
      },
      create: {
        userId: userinfo.userId,
        birthday: userinfo.birthday,
        address: userinfo.address,
        education: userinfo.education,
        gender: userinfo.gender,
        schoolType: userinfo.schoolType,
        schoolName: userinfo.schoolName,
        academicDiscipline: userinfo.academicDiscipline,
        favoriteGame: userinfo.favoriteGame,
        createdAt: userinfo.createdAt,
        firstName: userinfo.firstName,
        lastName: userinfo.lastName,
      },
    });
  },
};
