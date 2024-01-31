import type { SkillPr } from '@prisma/client';
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    resBody: {
      userid: string;
      skill1: string;
      skill2: string;
      skill3: string;
      selfPr: string;
    } | null;
  };
  post: {
    reqBody: SkillPr;
    resBody: string;
  };
}>;
