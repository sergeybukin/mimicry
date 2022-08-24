import { FC } from "react";
import { IonButton } from "@ionic/react";
import { ButtonColors } from "./types";
import "./Button.scss";

export interface ButtonProps {
  label?: string;
  className?: string;
  color?: ButtonColors;
  onClick?: () => void;
  btnType?: "submit" | "reset" | "button";
}

export const Button: FC<ButtonProps> = ({
  label = "Click",
  className,
  color = ButtonColors.LIGHT,
  onClick,
  btnType = "button",
}) => {
  return (
    <IonButton
      onClick={onClick}
      className={`text bold ${className} ${color}`}
      type={btnType}
    >
      {label}
    </IonButton>
  );
};
