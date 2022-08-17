import { FC } from "react";
import "./TemperatureWidget.scss";
import { IonText } from "@ionic/react";

export interface TemperatureWidgetProps {
  temperature: number;
}
export const TemperatureWidget: FC<TemperatureWidgetProps> = ({
  temperature,
}) => {
  return (
    <div className={"temperature-widget"}>
      <IonText className={"title extra"}>{Math.round(temperature)}ºC</IonText>
      <IonText className={"text large"}>
        <span>24º</span>
        <span>12º</span>
      </IonText>
    </div>
  );
};
