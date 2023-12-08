import type { SkillPr } from '@prisma/client';
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    resBody: string;
  };
  post: {
    reqBody: SkillPr;
    resBody: string;
  };
}>;
