import type { UserId } from '$/commonTypesWithClient/ids';
import type { UserInfo } from '$/commonTypesWithClient/models';
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
};
