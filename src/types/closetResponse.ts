import { Section, TypesOfClothing } from "./closet";
import { Gender } from "./user";

export interface IClosetResponse {
  id: string;
  article: string;
  clo: number;
  section: Section;
  gender: Gender;
  icon: string;
  clothing_type: TypesOfClothing;
}

export interface ILooksResponse extends IClosetResponse {
  looks_id: string;
  name: string;
}
