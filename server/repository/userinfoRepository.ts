/* eslint-disable complexity */
import type { Experience, UserInfo } from '$/commonTypesWithClient/models';
import { prismaClient } from '$/service/prismaClient';
import type { Preference, SkillPr } from '@prisma/client';

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
        desiredIndustry: userinfo.desiredIndustry,
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
        desiredIndustry: userinfo.desiredIndustry,
      },
    });
  },
  find: async (userId: string) => {
    const userInfo = await prismaClient.user.findUnique({
      where: { userId },
    });
    return userInfo;
  },
  SkillPrSave: async (userinfo: SkillPr) => {
    await prismaClient.skillPr.upsert({
      where: { userid: userinfo.userid },
      update: {
        skill1: userinfo.skill1 ?? '',
        skill2: userinfo.skill2 ?? '',
        skill3: userinfo.skill3 ?? '',
        selfPr: userinfo.selfPr ?? '',
      },
      create: {
        userid: userinfo.userid,
        skill1: userinfo.skill1 ?? '',
        skill2: userinfo.skill2 ?? '',
        skill3: userinfo.skill3 ?? '',
        selfPr: userinfo.selfPr ?? '',
      },
    });
  },
  SkillPrFind: async (userId: string) => {
    const skillPr = await prismaClient.skillPr.findUnique({
      where: { userid: userId },
    });
    return skillPr;
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
                achievements: userinfo.research.achievements ?? false,
                awards: userinfo.research.awards ?? false,
                paper: userinfo.research.paper ?? false,
                presentation: userinfo.research.presentation ?? '',
              },
            }
          : undefined,
        competition: userinfo.competition
          ? {
              update: {
                achievement: userinfo.competition.achievement ?? false,
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
                achievements: userinfo.research.achievements ?? false,
                awards: userinfo.research.awards ?? false,
                paper: userinfo.research.paper ?? false,
                presentation: userinfo.research.presentation ?? '',
              },
            }
          : undefined,
        competition: userinfo.competition
          ? {
              create: {
                achievement: userinfo.competition.achievement ?? false,
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
  ExperienceFind: async (userId: string) => {
    const experience = await prismaClient.experience.findUnique({
      where: { userid: userId },
      include: {
        research: true,
        competition: true,
        experience: true,
      },
    });
    return experience;
  },
  PreferenceSave: async (userId: string, userinfo: Preference) => {
    await prismaClient.preference.upsert({
      where: { userid: userId },
      update: {
        companySelection: userinfo.companySelection,
        companySelectionType: userinfo.companySelectionType,
        preferredLocations: userinfo.preferredLocations,
        preferredDetail: userinfo.preferredDetail,
      },
      create: {
        userid: userId,
        companySelection: userinfo.companySelection,
        companySelectionType: userinfo.companySelectionType,
        preferredLocations: userinfo.preferredLocations,
        preferredDetail: userinfo.preferredDetail,
      },
    });
  },
  PreferenceFind: async (userId: string) => {
    const preference = await prismaClient.preference.findUnique({
      where: { userid: userId },
    });
    return preference;
  },
};
