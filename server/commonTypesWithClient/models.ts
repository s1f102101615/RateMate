import { z } from 'zod';
import { taskIdParser } from '../service/idParsers';
import type { UserId } from './ids';

export type UserModel = {
  id: UserId;
  email: string;
  displayName: string | undefined;
  photoURL: string | undefined;
};

export type UserInfo = {
  userId: string;
  birthday: Date;
  address: string;
  gender: string;
  education: string;
  schoolType: string;
  schoolName: string;
  academicDiscipline: string;
  favoriteGame: string;
  createdAt: Date;
  firstName: string;
  lastName: string;
};

export const taskParser = z.object({
  id: taskIdParser,
  label: z.string(),
  done: z.boolean(),
  created: z.number(),
});

export type TaskModel = z.infer<typeof taskParser>;
