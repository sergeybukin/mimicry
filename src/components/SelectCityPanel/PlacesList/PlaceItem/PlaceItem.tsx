import { IonItem } from "@ionic/react";
import React, { FC } from "react";
import { IPlace } from "../../../../types/user";

export interface PlaceItemProps {
  onClick: (place: IPlace) => void;
  place: IPlace;
}
export const PlaceItem: FC<PlaceItemProps> = ({ onClick, place }) => {
  return (
    <IonItem button onClick={() => onClick(place)}>
      {place.place_name}
    </IonItem>
  );
};
