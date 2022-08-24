import { FC } from "react";
import "./TemperatureWidget.scss";
import { IonText } from "@ionic/react";
import { useSelector } from "react-redux";
import { selectWeather } from "../../../../redux/slices/weatherSlice";

export interface TemperatureWidgetProps {
  temperature: number;
}
export const TemperatureWidget: FC<TemperatureWidgetProps> = ({
  temperature,
}) => {
  const { forecastWeatherData, weatherDataLoading } =
    useSelector(selectWeather);

  let min = 0,
    max = 0;
  if (!weatherDataLoading) {
    const sortedArr = forecastWeatherData.map(
      (el: { temperature: number }) => el.temperature
    );
    min = Math.round(Math.min.apply(null, sortedArr));
    max = Math.round(Math.max.apply(null, sortedArr));
  }

  return (
    <div className={"temperature-widget"}>
      <IonText className={"title extra"}>{Math.round(temperature)}ºC</IonText>
      <IonText className={"text large"}>
        <span>{max}º</span>
        <span>{min}º</span>
      </IonText>
    </div>
  );
};
