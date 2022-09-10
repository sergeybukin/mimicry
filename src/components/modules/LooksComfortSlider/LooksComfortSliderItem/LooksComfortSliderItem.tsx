import React, { FC, ReactNode, useMemo } from "react";
import { calculateFontSize } from "../../LookPanel/utils/lookItemStylesUtils";
import {
  IonCard,
  IonCardSubtitle,
  IonCardHeader,
  IonCardContent,
  IonIcon,
} from "@ionic/react";
import { thumbsDownSharp, thumbsUpSharp } from "ionicons/icons";
import { calcUTCI } from "utils/utciCalculator";
import { useSelector } from "react-redux";
import { selectWeather } from "redux/slices/weatherSlice";
import { IUTCIscaleItem, utciScale } from "utils/utciScale";
import { IClosetDataItem, ILookDataItem } from "types/closet";
import "./LooksComfortSliderItem.scss";

export interface ILooksComfortSliderItemProps {
  data: ILookDataItem;
  name: string;
}

export const LooksComfortSliderItem: FC<ILooksComfortSliderItemProps> = ({
  data,
  name,
}) => {
  const { currentWeatherData } = useSelector(selectWeather);
  const lookItems = useMemo(() => {
    let cloVal = 0;
    const res: Array<ReactNode> = [];
    let key: keyof ILookDataItem;
    for (key in data) {
      data[key].forEach((item: IClosetDataItem, i: number) => {
        cloVal = cloVal + item.clo;
        res.push(
          <span
            key={item.id}
            style={{
              fontSize: calculateFontSize(item.clothingType) / 2,
              transform: `translate(-${i * 15}px`,
            }}
            className={`icon-${item.icon} ${item.clothingType}`}
          />
        );
      });
    }
    const top = { color: "rgb(28,28,28)", part: 0.45 };
    const bottom = { color: "rgb(23,70,103)", part: 0.45 };
    const head = { color: "rgb(79,79,79)", part: 0.05 };
    const { temperature, wind, humidity, cloudiness } = currentWeatherData;
    const utci = calcUTCI(
      temperature,
      temperature,
      wind,
      humidity,
      cloVal,
      top,
      bottom,
      head,
      cloudiness
    );
    return { components: res, utci: Math.round(utci) };
  }, [data]);

  const currRange: IUTCIscaleItem = utciScale.filter(
    (e) => e.range[0] < lookItems.utci && e.range[1] >= lookItems.utci
  )[0];

  const iconColor = {
    color: currRange.color,
  };
  const rangeIcon = currRange.icon === "good" ? thumbsUpSharp : thumbsDownSharp;

  return (
    <IonCard className={"looks-comfort-slider-item"}>
      <IonCardHeader>
        <IonCardSubtitle className={"text bold small"}>{name}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <div className={"look-grid-wrapper"}>{lookItems.components}</div>
        <div className={"comfort-block"}>
          <div className={"title large"}>{lookItems.utci}</div>
          <IonIcon style={iconColor} icon={rangeIcon} />
        </div>
      </IonCardContent>
      <div className={"title small thermal-description"}>
        {currRange.description}
      </div>
    </IonCard>
  );
};
