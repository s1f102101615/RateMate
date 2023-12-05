import type { UserId } from '$/commonTypesWithClient/ids';
import type { Experience, UserInfo } from '$/commonTypesWithClient/models';
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
};
