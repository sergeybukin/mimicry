import { FC } from "react";
import "./WeatherOverview.scss";
import { WeatherOverviewItem } from "./WeatherOverviewItem";
import { waterOutline, umbrellaOutline } from "ionicons/icons";

export const WeatherOverview: FC = () => {
  return (
    <div className={"weather-overview"}>
      <WeatherOverviewItem customIcon={"wind"} data={"2m/s"} />
      <WeatherOverviewItem icon={waterOutline} data={"40%"} />
      <WeatherOverviewItem icon={umbrellaOutline} data={"10%"} />
    </div>
  );
};
