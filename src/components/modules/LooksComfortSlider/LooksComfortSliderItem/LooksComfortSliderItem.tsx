import React, { FC, useMemo, useRef } from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonIcon,
} from "@ionic/react";
import { thumbsDownSharp, thumbsUpSharp } from "ionicons/icons";
import { calcUTCI } from "utils/utciCalculator";
import { useSelector } from "react-redux";
import { selectWeather } from "redux/slices/weatherSlice";
import { IUTCIscaleItem, utciScale } from "utils/utciScale";
import { ILookData, Section, TypesOfClothing } from "types/closet";
import {
  IMappedLookDataSection,
  mapLookObjectToArray,
} from "redux/mappers/mapLookObjectToArray";
import { LookCard } from "components/shared/LookCard";
import "./LooksComfortSliderItem.scss";

export interface ILooksComfortSliderItemProps {
  data: ILookData;
}

export const LooksComfortSliderItem: FC<ILooksComfortSliderItemProps> = ({
  data,
}) => {
  const { currentWeatherData } = useSelector(selectWeather);
  const container = useRef(null);
  const lookItems = useMemo(() => {
    // TODO: make option to use clothingType for part calculation
    const top = { color: "rgb(28,28,28)", part: 0.45 };
    const bottom = { color: "rgb(23,70,103)", part: 0.45 };
    const head = { color: "rgb(79,79,79)", part: 0.05 };

    const mappedData = mapLookObjectToArray(data.data);
    let cloVal = 0;
    mappedData.forEach((item: IMappedLookDataSection) => {
      switch (item.clothingType) {
        case TypesOfClothing.HEAD:
          head.color = item.color;
          break;

        case TypesOfClothing.TOP:
          top.color = item.color;
          break;

        case TypesOfClothing.BOTTOM:
          bottom.color = item.color;
          break;

        default:
          break;
      }

      if (item.section === Section.OUTERWEAR) {
        top.color = item.color;
      }

      cloVal = cloVal + item.clo;
    });

    console.log(top, bottom, head);

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
    return { utci: Math.round(utci) };
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
        <IonCardSubtitle className={"text bold small"}>
          {data.name}
        </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <div ref={container} className={"look-grid-wrapper"}>
          <LookCard data={data} containerRef={container} />
        </div>
        <div className={"comfort-block"}>
          <div className={"title large"}>{lookItems.utci}</div>
          <IonIcon style={iconColor} icon={rangeIcon} />
        </div>
        <div className={"title small thermal-description"}>
          {currRange.description}
        </div>
      </IonCardContent>
    </IonCard>
  );
};
