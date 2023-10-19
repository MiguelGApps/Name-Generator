import { Gender } from "./Gender";

export type NameStats = {
  year: number;
  gender: Gender;
  ethnicity: string;
  name: string;
  number: number;
  rank: number;
};

export type NameInfo = {
  name: string;
  number: number;
};
