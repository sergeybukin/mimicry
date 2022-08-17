import exp from "constants";

type Celsius = number;

enum Cloudiness {
  "Clear" = 0,
  "Slightly Cloudy" = 1,
  "Cloudy" = 2,
  "Mainly cloudy" = 3,
  "Partly cloudy" = 101,
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

export interface ICloudiness {
  percent: number;
  type: Cloudiness;
}
