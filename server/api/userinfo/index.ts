import type { DefineMethods } from 'aspida';
import type { UserInfo } from 'commonTypesWithClient/models';

export type Methods = DefineMethods<{
  get: {
    resBody: string;
  };
  post: {
    reqBody: UserInfo;
    resBody: string;
  };
}>;
