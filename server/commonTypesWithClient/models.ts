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
  skill1: string;
  skill2: string;
  skill3: string;
  selfPr: string;
};

//

export type Research = {
  userid: string;
  theme: string | undefined;
  details: string | undefined;
  achievements: boolean | undefined;
  awards: boolean | undefined;
  paper: boolean | undefined;
  presentation: string | undefined;
  experience?: Experience; // Experience型がオプション
};

export type Competition = {
  userid: string;
  achievement: boolean | undefined;
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

// Preference
export type Preference = {
  userid: string;
  companySelection: string[];
  companySelectionType: string[];
  preferredLocations: string[];
  preferredDetail: string;
};

export const taskParser = z.object({
  id: taskIdParser,
  label: z.string(),
  done: z.boolean(),
  created: z.number(),
});

export type OfferStatus = 'PENDING' | 'ACCEPTED' | 'REJECTED';

export type TaskModel = z.infer<typeof taskParser>;
