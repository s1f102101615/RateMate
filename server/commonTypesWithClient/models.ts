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

//

export type SkillPr = {
  userid: string;
  skill1?: string | undefined;
  skill2?: string | undefined;
  skill3?: string | undefined;
  selfPr?: string | undefined;
};

//

export type Research = {
  userid: string;
  theme: string | undefined;
  details: string | undefined;
  achievements: string | undefined;
  awards: string | undefined;
  paper: string | undefined;
  presentation: string | undefined;
  experience?: Experience; // Experience型がオプション
};

export type Competition = {
  userid: string;
  achievement: string | undefined;
  details: string | undefined;
  experience?: Experience;
};

export type WorkExperience = {
  userid: string;
  internship: boolean | undefined;
  partTimeJob: boolean | undefined;
  details: string | undefined;
  experience?: Experience;
};

export type Experience = {
  userid: string;
  research?: Research;
  competition?: Competition;
  workExperience?: WorkExperience;
};

export const taskParser = z.object({
  id: taskIdParser,
  label: z.string(),
  done: z.boolean(),
  created: z.number(),
});

export type TaskModel = z.infer<typeof taskParser>;
