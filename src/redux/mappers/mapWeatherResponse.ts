import { IDate, IPrecipitation, IWeather } from "../../types/weatherResponse";

export interface IMappedWeather {
  temperature: number;
  wind: number;
  cloudiness: number;
  humidity: number;
  precipitation: IPrecipitation;
  date: IDate;
  description: string;
  icon: string;
}

export const mapWeatherResponse: (data: IWeather) => IMappedWeather = (
  data
) => {
  const {
    temperature,
    wind,
    cloudiness,
    humidity,
    precipitation,
    date,
    description,
    icon,
  } = data;
  return {
    temperature: temperature.air.C,
    wind: wind.speed.m_s,
    cloudiness: cloudiness.type,
    humidity: humidity.percent,
    precipitation: precipitation,
    date: date,
    description: description.full,
    icon,
  };
};
