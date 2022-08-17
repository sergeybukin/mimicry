import React, { FC, ReactNode, useRef } from "react";
import "./Modal.scss";
import {
  IonButton,
  IonButtons,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/react";

export interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  onOk?: () => void;
  children?: ReactNode;
  title?: string;
  classList?: string;
}

export const Modal: FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  title,
  onOk,
  classList = "",
}) => {
  const modal = useRef<HTMLIonModalElement>(null);

  const onDismiss = () => {
    if (onClose) {
      onClose();
    }
    modal.current?.dismiss();
  };

  const onConfirm = () => {
    if (onOk) {
      onOk();
    }
    modal.current?.dismiss();
  };

  return (
    <>
      <IonModal
        className={classList}
        id="modal"
        ref={modal}
        isOpen={isOpen}
        onDidDismiss={onDismiss}
      >
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={onDismiss}>Cancel</IonButton>
            </IonButtons>
            <IonTitle>{title}</IonTitle>
            <IonButtons slot="end">
              <IonButton strong={true} onClick={onConfirm}>
                Confirm
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <div className="modal-content">{children}</div>
      </IonModal>
    </>
  );
};
