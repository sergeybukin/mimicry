import { FC } from "react";
import { Icon } from "../../../ui";
import { IonText } from "@ionic/react";
import "./WeatherSlideItem.scss";
import { generateWeatherIconName } from "../../../../utils/generateWeatherIconName";
import { IMappedWeather } from "../../../../redux/mappers/mapWeatherResponse";

export interface WeatherSlideItemProps {
  selected?: boolean;
  data: IMappedWeather;
}

export const WeatherSlideItem: FC<WeatherSlideItemProps> = ({
  selected,
  data,
}) => {
  const { icon, date, temperature, wind } = data;

  const thisTime = new Date(date.local);
  const currTime = new Date();

  return (
    <IonText
      className={`weather-slide-item ${
        thisTime.getHours() === currTime.getHours() ? "selected" : ""
      }`}
    >
      <div className={"title small"}>{thisTime.getHours()}:00</div>
      <div>{wind}m/s</div>
      <Icon
        style={{ width: "60%", height: "60%" }}
        name={generateWeatherIconName(icon)}
      />
      <div className={"title small"}>{Math.round(temperature)}ºC</div>
    </IonText>
  );
};
