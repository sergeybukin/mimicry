export interface IUser {
  email: string;
  password: string;
  name?: string | "";
}

export enum Gender {
  MEN = "men",
  WOMEN = "women",
  UNISEX = "unisex",
}

export interface IPostUser {
  id: string;
  token: string;
  name: string;
  email: string;
  age: number | null;
  gender: "m" | "f" | "";
  weight: number | null;
  height: number | null;
  location: Array<any>;
  placesHistory: Array<string>;
}

export interface IPlaceContext {
  id: string;
  short_code: string;
  text: string;
  wikidata: string;
}

export interface IPlace {
  bbox: Array<number>;
  center: Array<number>;
  context: Array<IPlaceContext>;
  geometry: { type: string; coordinates: Array<number> };
  id: string;
  matching_place_name: string;
  matching_text: string;
  place_name: string;
  place_type: Array<string>;
  properties: { wikidata: string };
  relevance: number;
  text: string;
  type: string;
}
