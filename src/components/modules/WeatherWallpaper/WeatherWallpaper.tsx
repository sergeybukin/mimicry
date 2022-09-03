import { SunnyImg } from "assets/img";
import { FC } from "react";
import "./WeatherWallpaper.scss";

export const WeatherWallpaper: FC = () => {
  return (
    <div className={"weather-wallpaper"}>
      <SunnyImg />
    </div>
  );
};
