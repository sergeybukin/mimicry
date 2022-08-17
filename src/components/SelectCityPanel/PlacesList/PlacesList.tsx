import { IonList } from "@ionic/react";
import React, { FC } from "react";
import { IPlace } from "../../../types/user";
import { PlaceItem } from "./PlaceItem/PlaceItem";
import "./PlacesList.scss";

export interface PlacesListProps {
  placesList: Array<IPlace>;
  setPlaceValue: (value: string) => void;
}

export const PlacesList: FC<PlacesListProps> = ({
  placesList,
  setPlaceValue,
}) => {
  const onPlaceClick = (place: IPlace) => {
    placesList.filter((e) => e.id === place.id);
    setPlaceValue(place.place_name);
  };

  return (
    <IonList className={"places-list"}>
      {placesList.map((place: IPlace) => (
        <PlaceItem key={place.id} onClick={onPlaceClick} place={place} />
      ))}
    </IonList>
  );
};
