type Celsius = number;

export enum Cloudiness {
  "Clear" = 0,
  "Slightly Cloudy" = 1,
  "Cloudy" = 2,
  "Mainly cloudy" = 3,
  "Partly cloudy" = 101,
}

export enum Precipitation {
  "No precipitation" = 0,
  "Rain" = 1,
  "Snow" = 2,
  "Mixed" = 3,
}

enum PrecipitationIntensity {
  "No precipitation" = 0,
  "Small" = 1,
  "Medium" = 2,
  "Hard" = 3,
}

export interface ITemperature {
  air: {
    C: Celsius;
  };
  comfort: {
    C: Celsius;
  };
  water: {
    C: Celsius;
  };
}

export interface IDescription {
  full: string;
}

export interface IHumidity {
  percent: number;
}

export interface IDate {
  UTC: string;
  local: string;
  time_zone_offset: number;
  unix: number;
}

export interface IPrecipitation {
  type: Precipitation;
  amount: number;
  intensity: PrecipitationIntensity;
}

export interface ICloudiness {
  percent: number;
  type: Cloudiness;
}

export interface IPressure {
  h_pa: number;
  mm_hg_atm: number;
  in_hg: number;
}

export interface IRadiation {
  uvb_index: number;
  UVB: number;
}

export interface IWind {
  direction: { degree: number; scale_8: number };
  speed: { km_h: number; m_s: number; mi_h: number };
}

export interface IWeather {
  city: number;
  cloudiness: ICloudiness;
  date: IDate;
  description: { full: string };
  gm: number;
  humidity: IHumidity;
  icon: string;
  kind: string;
  precipitation: IPrecipitation;
  pressure: IPressure;
  radiation: IRadiation;
  storm: boolean;
  temperature: ITemperature;
  wind: IWind;
}

export interface ICurrWeatherResponse {
  response: IWeather;
  meta: {
    code: string;
    message: string;
  };
}

export interface IForecastWeatherResponse {
  response: Array<IWeather>;
  meta: {
    code: string;
    message: string;
  };
}
