import { FC } from "react";
import { WeatherOverviewItem } from "./WeatherOverviewItem";
import { waterOutline, umbrellaOutline } from "ionicons/icons";
import { IPrecipitation } from "../../../../types/weatherResponse";
import "./WeatherOverview.scss";

export interface WeatherOverviewProps {
  humidity: number;
  wind: number;
  precipitation: IPrecipitation;
}

export const WeatherOverview: FC<WeatherOverviewProps> = ({
  humidity,
  wind,
  precipitation,
}) => {
  return (
    <div className={"weather-overview"}>
      <WeatherOverviewItem customIcon={"wind"} data={wind} units={"m/s"} />
      <WeatherOverviewItem icon={waterOutline} data={humidity} units={"%"} />
      <WeatherOverviewItem
        icon={umbrellaOutline}
        data={precipitation?.amount}
        units={"%"}
      />
    </div>
  );
};
