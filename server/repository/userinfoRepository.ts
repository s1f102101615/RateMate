/* eslint-disable complexity */
import type { Experience, UserInfo } from '$/commonTypesWithClient/models';
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
  ExperienceSave: async (userinfo: Experience) => {
    await prismaClient.experience.upsert({
      where: { userid: userinfo.userid },
      update: {
        research: userinfo.research
          ? {
              update: {
                theme: userinfo.research.theme ?? '',
                details: userinfo.research.details ?? '',
                achievements: userinfo.research.achievements ?? '',
                awards: userinfo.research.awards ?? '',
                paper: userinfo.research.paper ?? '',
                presentation: userinfo.research.presentation ?? '',
              },
            }
          : undefined,
        competition: userinfo.competition
          ? {
              update: {
                achievement: userinfo.competition.achievement ?? '',
                details: userinfo.competition.details ?? '',
              },
            }
          : undefined,
        experience: userinfo.workExperience
          ? {
              update: {
                internship: userinfo.workExperience.internship ?? false,
                partTimeJob: userinfo.workExperience.partTimeJob ?? false,
                details: userinfo.workExperience.details ?? '',
              },
            }
          : undefined,
      },
      create: {
        userid: userinfo.userid,
        research: userinfo.research
          ? {
              create: {
                theme: userinfo.research.theme ?? '',
                details: userinfo.research.details ?? '',
                achievements: userinfo.research.achievements ?? '',
                awards: userinfo.research.awards ?? '',
                paper: userinfo.research.paper ?? '',
                presentation: userinfo.research.presentation ?? '',
              },
            }
          : undefined,
        competition: userinfo.competition
          ? {
              create: {
                achievement: userinfo.competition.achievement ?? '',
                details: userinfo.competition.details ?? '',
              },
            }
          : undefined,
        experience: userinfo.workExperience
          ? {
              create: {
                internship: userinfo.workExperience.internship ?? false,
                partTimeJob: userinfo.workExperience.partTimeJob ?? false,
                details: userinfo.workExperience.details ?? '',
              },
            }
          : undefined,
      },
    });
  },
};
