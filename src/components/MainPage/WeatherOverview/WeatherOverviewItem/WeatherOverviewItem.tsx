import { FC } from "react";
import { IonIcon, IonText } from "@ionic/react";
import { Icon } from "../../../ui";
import "./WeatherOverviewItem.scss";
import { IconNamesType } from "../../../ui/Icon/types";

export interface WeatherOverviewItemProps {
  icon?: string;
  customIcon?: IconNamesType;
  data: number;
  units?: string;
}

export const WeatherOverviewItem: FC<WeatherOverviewItemProps> = ({
  data,
  icon,
  customIcon, units
}) => {
  return (
    <IonText className={"weather-overview-item"}>
      {icon && (
        <IonIcon style={{ width: "20px", height: "20px" }} icon={icon} />
      )}
      {customIcon && (
        <Icon style={{ width: "20px", height: "20px" }} name={customIcon} />
      )}
      <div className={"data"}>{data}{units || ''}</div>
    </IonText>
  );
};
