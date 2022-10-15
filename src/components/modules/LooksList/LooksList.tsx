import React, { FC, useMemo } from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Button } from "ui";
import { useSelector } from "react-redux";
import { selectCloset } from "redux/slices/closetSlice";
import { ILookData } from "types/closet";
import "./LooksList.scss";
import { LooksListItem } from "components/modules/LooksList/LooksListItem";

export interface LooksListProps {}

export const LooksList: FC<LooksListProps> = ({}) => {
  const { userLooks } = useSelector(selectCloset);

  const looksItems = useMemo(() => {
    return userLooks.map((item: ILookData) => (
      <LooksListItem key={item.id} data={item} />
    ));
  }, [userLooks]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot={"start"}>
            <Button />
          </IonButtons>
          <IonTitle>Your looks here</IonTitle>
          <IonButtons slot={"end"}>
            <Button />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>{looksItems}</IonContent>
    </IonPage>
  );
};
