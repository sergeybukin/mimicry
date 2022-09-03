import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Button } from "../Button/Button";
import { ButtonColors } from "../Button/types";
import "./Modal.scss";

export interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onOk?: () => void;
  children?: ReactNode;
  title?: string;
  classList?: string;
  page?: any;
  [x: string]: any;
}

export const Modal: FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  title,
  onOk,
  page,
  classList = "",
  ...props
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
      presentingElement={presentingElement}
      {...props}
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
