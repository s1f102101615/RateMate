import type { Preference } from '@prisma/client';
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    resBody: {
      userid: string;
      companySelection: string[];
      companySelectionType: string[];
      preferredLocations: string[];
      preferredDetail: string;
    } | null;
  };
  post: {
    reqBody: Preference;
    resBody: string;
  };
}>;
