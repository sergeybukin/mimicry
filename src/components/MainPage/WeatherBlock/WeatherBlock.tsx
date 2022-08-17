import "./WeatherBlock.scss";
import { FC } from "react";
import { WeatherWallpaper } from "../WeatherWallpaper";
import { TemperatureWidget } from "../TemperatureWidget";
import { WeatherOverview } from "../WeatherOverview";
import { WeatherSlider } from "../WeatherSlider";
import { useSelector } from "react-redux";
import { selectWeather } from "../../../redux/slices/weatherSlice";

export const WeatherBlock: FC = () => {
  const {
    currentWeatherData: { humidity, temperature, wind, precipitation },
  } = useSelector(selectWeather);

  return (
    <div className={"weather-block"}>
      <WeatherWallpaper />
      <TemperatureWidget temperature={temperature} />
      <WeatherOverview
        humidity={humidity}
        wind={wind}
        precipitation={precipitation}
      />
      <WeatherSlider />
    </div>
  );
};
