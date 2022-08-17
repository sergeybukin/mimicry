import { FC } from "react";
import { Icon } from "../../../ui";
import { IonText } from "@ionic/react";
import { IconNamesType } from "../../../ui/Icon/types";
import "./WeatherWeekItem.scss";

export interface WeatherWeekItemProps {
  icon: IconNamesType;
  selected?: boolean;
}

export const WeatherWeekItem: FC<WeatherWeekItemProps> = ({
  icon,
  selected,
}) => {
  return (
    <IonText className={`weather-week-item ${selected ? "selected" : ""}`}>
      <div className={"title small"}>Tue</div>
      <div>12 May</div>
      <Icon style={{ width: "60%", height: "60%" }} name={icon} />
      <div className={"title small"}>24ºC</div>
    </IonText>
  );
};
