import type { Experience } from '$/commonTypesWithClient/models';
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    resBody: {
      userid: string;
      experience: {
        userid: string;
        internship: boolean;
        partTimeJob: boolean;
        details: string;
      } | null;
      research: {
        userid: string;
        theme: string;
        details: string;
        achievements: boolean;
        awards: boolean;
        paper: boolean;
        presentation: string;
      } | null;
      competition: {
        userid: string;
        achievement: boolean;
        details: string;
      } | null;
    } | null;
  };
  post: {
    reqBody: Experience;
    resBody: string;
  };
}>;
