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
      schooltype: label.schooltype,
      schoolname: label.schoolname,
      acdemicdiscipline: label.acdemicdiscipline,
      favoritegame: label.favoritegame,
      createdAt: label.createdAt,
      firstname: label.firstname,
      lastname: label.lastname,
    };
    await userinfoRepository.save(newUser);
    return 'ok';
  },
};
