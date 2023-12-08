import type { UserId } from '$/commonTypesWithClient/ids';
import type { Experience, SkillPr, UserInfo } from '$/commonTypesWithClient/models';
import { userinfoRepository } from '$/repository/userinfoRepository';

export const userinfoUsecase = {
  create: async (user: UserId, label: UserInfo) => {
    const newUser: UserInfo = {
      userId: user,
      birthday: label.birthday,
      address: label.address,
      education: label.education,
      gender: label.gender,
      schoolType: label.schoolType,
      schoolName: label.schoolName,
      academicDiscipline: label.academicDiscipline,
      favoriteGame: label.favoriteGame,
      createdAt: label.createdAt,
      firstName: label.firstName,
      lastName: label.lastName,
    };
    await userinfoRepository.save(newUser);
    return 'ok';
  },
  get: async (user: UserId) => {
    const userInfo = await userinfoRepository.find(user);
    return userInfo;
  },
  ExperienceCreate: async (user: UserId, label: Experience) => {
    const newUser: Experience = {
      userid: user,
      research: {
        userid: user, // research 内の userid も user に設定
        theme: label.research?.theme,
        details: label.research?.details,
        achievements: label.research?.achievements,
        awards: label.research?.awards,
        paper: label.research?.paper,
        presentation: label.research?.presentation,
      },
      competition: {
        userid: user,
        achievement: label.competition?.achievement,
        details: label.competition?.details,
      },
      workExperience: {
        userid: user,
        internship: label.workExperience?.internship,
        partTimeJob: label.workExperience?.partTimeJob,
        details: label.workExperience?.details,
      },
    };
    await userinfoRepository.ExperienceSave(newUser);
    return 'ok';
  },
  ExperienceGet: async (user: UserId) => {
    const experience = await userinfoRepository.ExperienceFind(user);
    return experience;
  },
  SkillPrCreate: async (user: UserId, label: SkillPr) => {
    const newUsers: SkillPr = {
      userid: user,
      skill1: label?.skill1,
      skill2: label?.skill2,
      skill3: label?.skill3,
      selfPr: label?.selfPr,
    };
    await userinfoRepository.SkillPrSave(newUsers);
    return 'ok';
  },
  SkillPrGet: async (user: UserId) => {
    const skillPr = await userinfoRepository.SkillPrFind(user);
    return skillPr;
  },
};
