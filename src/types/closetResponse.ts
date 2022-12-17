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
  look_id: string;
  name: string;
  clothes_position: Array<number>;
  color: string;
}
