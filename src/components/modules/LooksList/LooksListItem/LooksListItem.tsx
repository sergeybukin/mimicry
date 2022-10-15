import React, { FC, useRef } from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
} from "@ionic/react";
import { IconButton } from "ui";
import { createOutline } from "ionicons/icons";
import { LookCard } from "components/shared/LookCard";
import { setCurrLookData } from "redux/slices/closetSlice";
import { useHistory } from "react-router";
import { useAppDispatch } from "utils/hooks/useAppDispatch";
import { ILookData } from "types/closet";
import "./LooksListItem.scss";

export interface LooksListItemProps {
  data: ILookData;
}

export const LooksListItem: FC<LooksListItemProps> = ({ data }) => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const container = useRef(null);
  const onEdit = () => {
    history.push("/closet");
    dispatch(setCurrLookData(data));
  };

  return (
    <IonCard className={"looks-list-item"}>
      <IonCardHeader>
        <IonCardTitle className={"title small"}>{data.name}</IonCardTitle>
        <IconButton
          id={"open-look-panel-modal"}
          onClick={onEdit}
          className={"edit-btn"}
        >
          <IonIcon icon={createOutline} />
        </IconButton>
      </IonCardHeader>
      <IonCardContent>
        <div ref={container} key={data.id} className={"look-card-container"}>
          <LookCard data={data} containerRef={container} />
        </div>
      </IonCardContent>
    </IonCard>
  );
};
