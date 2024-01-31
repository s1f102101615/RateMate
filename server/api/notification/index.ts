import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    resBody: {
      id: number;
      userId: string;
      title: string;
      content: string;
      url: string;
      isRead: boolean;
      createdAt: Date;
    }[];
  };
}>;
