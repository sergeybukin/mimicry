import { IonChip, IonAvatar, IonLabel } from "@ionic/react";
import { FC } from "react";
import "../../../../assets/icomoon/style.css";
import "./LookItem.scss";
import { Clothes } from "../types";

export interface LookItemProps {
  title: Clothes;
  onClick: (val: Clothes) => void;
  icon: string;
}

export const LookItem: FC<LookItemProps> = ({ title, onClick, icon }) => {
  return (
    <IonChip onClick={() => onClick(title)} className={"look-item"}>
      <IonLabel className={"title small"}>{title}</IonLabel>
      <IonAvatar>
        <span className={`icon-${icon}`} />
      </IonAvatar>
    </IonChip>
  );
};
