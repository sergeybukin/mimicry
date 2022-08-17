import React, { Dispatch, FC, SetStateAction } from "react";
import { IonContent, IonToolbar, IonTitle, IonPage } from "@ionic/react";
import "./LookItemSettings.scss";
import { Clothes } from "../types";
import { Modal } from "../../../ui";

export interface LookItemSettingsProps {
  showLookItemSettings: boolean;
  setShowLookItemSettings: Dispatch<SetStateAction<boolean>>;
  selectedItem: Clothes;
}

export const LookItemSettings: FC<LookItemSettingsProps> = ({
  showLookItemSettings,
  setShowLookItemSettings,
  selectedItem,
}) => {
  const onCloseModal = () => {
    setShowLookItemSettings(false);
  };

  return (
    <IonPage className={"look-item-settings"}>
      <Modal
        isOpen={showLookItemSettings}
        onClose={onCloseModal}
        title={selectedItem}
      />
    </IonPage>
  );
};
