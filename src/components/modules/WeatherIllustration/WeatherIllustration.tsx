import { FC } from "react";
import { WeatherWallpaper } from "../WeatherWallpaper";
import { TemperatureWidget } from "./TemperatureWidget";
import "./WeatherIllustration.scss";

export interface WeatherIllustrationProps {
  temperature: number;
}

export const WeatherIllustration: FC<WeatherIllustrationProps> = ({
  temperature,
}) => {
  return (
    <div className={"weather-illustration"}>
      <WeatherWallpaper />
      <TemperatureWidget temperature={temperature} />
    </div>
  );
};
