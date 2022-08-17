import "./WeatherBlock.scss";
import { FC } from "react";
import { WeatherWallpaper } from "../WeatherWallpaper";
import { TemperatureWidget } from "../TemperatureWidget";
import { WeatherOverview } from "../WeatherOverview";
import { WeatherWeekLine } from "../WeatherWeekLine";
import { useSelector } from "react-redux";
import { selectWeather } from "../../../redux/slices/weatherSlice";

export const WeatherBlock: FC = () => {
  const {
    weatherData: { humidity, temperature, wind },
  } = useSelector(selectWeather);

  return (
    <div className={"weather-block"}>
      <WeatherWallpaper />
      <TemperatureWidget temperature={temperature} />
      <WeatherOverview />
      <WeatherWeekLine />
    </div>
  );
};
