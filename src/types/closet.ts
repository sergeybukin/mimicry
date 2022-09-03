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
  article: string;
  clo: number;
  section: Section;
  gender: Gender;
  icon: string;
  clothingType: TypesOfClothing;
}

export interface IClosetSection {
  value: Section;
  label: string;
  gender: Gender;
}

export interface ILookData {
  head: Array<IClosetDataItem>;
  top: Array<IClosetDataItem>;
  bottom: Array<IClosetDataItem>;
  shoes: Array<IClosetDataItem>;
  under: Array<IClosetDataItem>;
  accs: Array<IClosetDataItem>;
}
