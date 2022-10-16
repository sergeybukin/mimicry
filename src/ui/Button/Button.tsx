import { FC } from "react";
import { IonButton } from "@ionic/react";
import { ButtonColors } from "./types";
import CSS from "csstype";
import "./Button.scss";

export interface ButtonProps {
  label?: string;
  className?: string;
  color?: ButtonColors;
  onClick?: () => void;
  btnType?: "submit" | "reset" | "button";
  styles?: CSS.Properties;
  id?: string;
}

export const Button: FC<ButtonProps> = ({
  label,
  className,
  color = ButtonColors.LIGHT,
  onClick,
  btnType = "button",
  styles = {},
  children,
  id,
}) => {
  return (
    <IonButton
      onClick={onClick}
      className={`text bold btn ${className} ${color}`}
      type={btnType}
      style={styles}
      id={id}
    >
      {label}
      {children}
    </IonButton>
  );
};
