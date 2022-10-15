import { FC } from "react";
import { Icon } from "ui";
import { IonText } from "@ionic/react";
import { generateWeatherIconName } from "utils";
import { IMappedWeather } from "redux/mappers/mapWeatherResponse";
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

  const thisDate = new Date(date.unix * 1000);
  const thisHour = thisDate.getHours();

  let nextDay = false;

  if (thisHour === 0) {
    nextDay = true;
  }

  return (
    <IonText
      className={`weather-slide-item ${selected ? "selected" : ""} ${
        nextDay ? "new-day" : ""
      }`}
    >
      <div className={"text bold"}>{thisHour}:00</div>
      <div className={"weather-slide-wind"}>{wind}m/s</div>
      <Icon
        classList={"weather-slide-icon"}
        style={{ width: "30%", height: "30%" }}
        name={generateWeatherIconName(icon)}
      />
      <div className={"text bold"}>{Math.round(temperature)}ºC</div>
    </IonText>
  );
};
