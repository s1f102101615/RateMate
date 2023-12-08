import type {
  Competition,
  Experience,
  Research,
  WorkExperience,
} from '$/commonTypesWithClient/models';
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    resBody: {
      userid: string;
      research?: Research | undefined;
      competition?: Competition | undefined;
      workExperience?: WorkExperience | undefined;
    } | null;
  };
  post: {
    reqBody: Experience;
    resBody: string;
  };
}>;
