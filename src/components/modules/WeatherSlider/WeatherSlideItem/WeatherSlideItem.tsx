import { FC } from "react";
import { Icon } from "../../../../ui";
import { IonText } from "@ionic/react";
import { generateWeatherIconName } from "../../../../utils/generateWeatherIconName";
import { IMappedWeather } from "../../../../redux/mappers/mapWeatherResponse";
import "./WeatherSlideItem.scss";

export interface WeatherSlideItemProps {
  selected?: boolean;
  data: IMappedWeather;
}

export const WeatherSlideItem: FC<WeatherSlideItemProps> = ({
  selected,
  data,
}) => {
  const { icon, date, temperature, wind } = data;

  const thisHour = new Date(date.unix * 1000).getHours();

  return (
    <IonText className={`weather-slide-item ${selected ? "selected" : ""}`}>
      <div className={"text bold"}>{thisHour}:00</div>
      <div>{wind}m/s</div>
      <Icon
        style={{ width: "30%", height: "30%" }}
        name={generateWeatherIconName(icon)}
      />
      <div className={"text bold"}>{Math.round(temperature)}ºC</div>
    </IonText>
  );
};
