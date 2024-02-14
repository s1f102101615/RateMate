import type { $Enums } from '@prisma/client';
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    resBody:
      | {
          id: number;
          companyId: number;
          userId: string;
          title: string;
          salary: string;
          location: string[];
          description: string;
          status: $Enums.OfferStatus;
          createdAt: Date;
          updatedAt: Date;
        }[]
      | null;
  };
}>;
