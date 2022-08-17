import { FC } from "react";
import { IonButton } from "@ionic/react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
  className: string;
  color: string;
  onClick?: () => void;
  btnType?: "submit" | "reset" | "button";
}

export const Button: FC<ButtonProps> = ({
  label,
  className,
  color,
  onClick,
  btnType,
}) => {
  return (
    <IonButton
      onClick={onClick}
      className={`title medium ${className} ${color}`}
      type={btnType}
    >
      {label}
    </IonButton>
  );
};
