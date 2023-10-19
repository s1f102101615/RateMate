import { userinfoRepository } from '$/repository/userinfoRepository';

export const userinfoUsecase = {
  create: async (user: userId, label: UserInfo) => {
    const newUser: UserInfo = {
      userId: user,
      birthday: label.birthday,
      address: label.address,
      education: label.education,
      schooltype: label.schooltype,
      schoolname: label.schoolname,
      acdemicdiscipline: label.acdemicdiscipline,
      favoritegame: label.favoritegame,
      createAt: label.createAt,
      firstname: label.firstname,
      lastname: label.lastname,
    };
    await userinfoRepository.save(newUser);
  },
};
