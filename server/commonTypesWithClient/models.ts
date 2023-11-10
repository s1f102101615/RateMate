import { z } from 'zod';
import { taskIdParser } from '../service/idParsers';
import type { UserId } from './ids';

export type UserModel = {
  id: UserId;
  email: string;
  displayName: string | undefined;
  photoURL: string | undefined;
};


//会社の情報
export type CompanyModel = {
  id: number;
  companyId: number;
  companyName: string;
  annualincome: string;
  industry: string;
  local: string;
  occupation: string;
  occupationdetail: string[];
  jobdescription: string;
  jobdescriptiondetail: string[];
  businesscontent: string;
  requiredability: string;
  publicationstartdate: string;
};

export type CompanyDetailModel = {
  id: number;
  companyId: number;
  companyName: string;
  annualincome: string;
  industry: string;
  local: string;
  occupation: string;
  occupationdetail: string[];
  jobdescription: string;
  jobdescriptiondetail: string[];
  businesscontent: string;
  requiredability: string;
  publicationstartdate: string;

export type UserInfo = {
  userId: string;
  birthday: Date;
  address: string;
  education: string;
  schooltype: string;
  schoolname: string;
  acdemicdiscipline: string;
  favoritegame: string;
  createdAt: Date;
  firstname: string;
  lastname: string;

};

export const taskParser = z.object({
  id: taskIdParser,
  label: z.string(),
  done: z.boolean(),
  created: z.number(),
});

export type TaskModel = z.infer<typeof taskParser>;
