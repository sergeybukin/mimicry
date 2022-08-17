export interface User {
  email: string;
  password: string;
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
