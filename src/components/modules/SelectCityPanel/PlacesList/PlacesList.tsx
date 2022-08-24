import { IonList } from "@ionic/react";
import React, { FC } from "react";
import { IPlace } from "../../../../types/user";
import { PlaceItem } from "./PlaceItem/PlaceItem";
import "./PlacesList.scss";

export interface PlacesListProps {
  placesList: Array<IPlace>;
  onClick: (place: IPlace) => void;
}

export const PlacesList: FC<PlacesListProps> = ({ placesList, onClick }) => {
  return (
    <IonList className={"places-list"}>
      {placesList.map((place: IPlace) => (
        <PlaceItem
          key={place.id}
          onClick={() => onClick(place)}
          place={place}
        />
      ))}
    </IonList>
  );
};
