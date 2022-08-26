import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import "./Modal.scss";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Button } from "../Button/Button";
import { ButtonColors } from "../Button/types";

export interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  onOk?: () => void;
  children?: ReactNode;
  title?: string;
  classList?: string;
  page?: any;
}

export const Modal: FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  title,
  onOk,
  page,
  classList = "",
}) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const [presentingElement, setPresentingElement] = useState<
    HTMLElement | undefined
  >(undefined);

  useEffect(() => {
    setPresentingElement(page?.current);
  }, []);

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
    <IonModal
      className={classList}
      id="modal"
      ref={modal}
      isOpen={isOpen}
      onDidDismiss={onDismiss}
      presentingElement={presentingElement}
    >
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <Button
              color={ButtonColors.DEFAULT}
              label={"Cancel"}
              onClick={onDismiss}
            />
          </IonButtons>
          <IonTitle>{title}</IonTitle>
          <IonButtons slot="end">
            <Button
              color={ButtonColors.DEFAULT}
              label={"Confirm"}
              onClick={onConfirm}
            />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="modal-content">{children}</IonContent>
    </IonModal>
  );
};
