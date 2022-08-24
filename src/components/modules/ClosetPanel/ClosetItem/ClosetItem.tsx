import { IonChip, IonAvatar, IonLabel } from "@ionic/react";
import { FC } from "react";
import { Clothes } from "../types";
import "../../../../assets/icomoon/style.css";
import "./ClosetItem.scss";

export interface ClosetItemProps {
  title: Clothes;
  onClick: (val: Clothes) => void;
  icon: string;
}

export const ClosetItem: FC<ClosetItemProps> = ({ title, onClick, icon }) => {
  return (
    <IonChip onClick={() => onClick(title)} className={"closet-item"}>
      <IonLabel className={"title small"}>{title}</IonLabel>
      <IonAvatar>
        <span className={`icon-${icon}`} />
      </IonAvatar>
    </IonChip>
  );
};
