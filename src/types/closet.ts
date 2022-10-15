import { Gender } from "./user";

export enum Section {
  ACCESSORIES = "accessories",
  SOCKS = "socks",
  SHOES = "shoes",
  UNDERWEAR = "underwear",
  DRESS = "dress",
  SHORTS = "shorts",
  T_SHIRT = "t-shirt",
  SHIRT = "shirt",
  TOP = "top",
  SKIRT = "skirt",
  SPECIAL = "special",
  TROUSERS = "trousers",
  SPORT = "sport",
  VEST = "vest",
  OUTERWEAR = "outerwear",
  HAT = "hat",
  ALL = "all",
}

export enum TypesOfClothing {
  HEAD = "head",
  TOP = "top",
  BOTTOM = "bottom",
  SHOES = "shoes",
  UNDERWEAR = "under",
  ACCESSORIES = "accs",
}

export interface IClosetDataItem {
  id: string;
  article: string;
  clo: number;
  section: Section;
  gender: Gender;
  icon: string;
  clothingType: TypesOfClothing;
}

export interface ILookDataSection extends IClosetDataItem {
  looksId: string;
  position: Array<number>;
  color: string;
}

export interface IClosetSection {
  value: Section;
  label: string;
  gender: Gender;
}

export interface ILookDataItem {
  head: Array<ILookDataSection>;
  top: Array<ILookDataSection>;
  bottom: Array<ILookDataSection>;
  shoes: Array<ILookDataSection>;
  under: Array<ILookDataSection>;
  accs: Array<ILookDataSection>;
}

export interface ILookData {
  id: string;
  name: string;
  data: ILookDataItem;
}
