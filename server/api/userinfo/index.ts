import type { DefineMethods } from 'aspida';
import type { UserInfo } from 'commonTypesWithClient/models';

export type Methods = DefineMethods<{
  get: {
    resBody: {
      userId: string;
      birthday: Date;
      address: string;
      education: string;
      schoolType: string;
      gender: string;
      schoolName: string;
      academicDiscipline: string;
      favoriteGame: string;
      createdAt: Date;
      firstName: string;
      lastName: string;
      desiredIndustry: string[];
    } | null;
  };
  post: {
    reqBody: UserInfo;
    resBody: string;
  };
}>;
