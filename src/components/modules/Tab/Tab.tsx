import { IonIcon, IonLabel } from "@ionic/react";
import { FC } from "react";
import "./Tab.scss";

export interface TabProps {
  label: string;
  icon: string;
}

export const Tab: FC<TabProps> = ({ label, icon }) => {
  return (
    <>
      <IonIcon className={"title middle"} icon={icon} />
      <IonLabel className={"text small"}>{label}</IonLabel>
    </>
  );
};
