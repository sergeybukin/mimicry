import { FC } from "react";
import { IonInput, IonLabel } from "@ionic/react";
import { TextFieldTypes } from "@ionic/core";
import { useController } from "react-hook-form";
import "./Input.scss";

export interface InputProps {
  label?: string;
  placeholder?: string;
  inputType?: TextFieldTypes;
  control: any;
  name: string;
  rules: any;
}

export const Input: FC<InputProps> = ({
  label,
  placeholder,
  inputType,
  control,
  name,
  rules,
}) => {
  const { field, fieldState } = useController({
    control,
    name,
    rules,
  });

  const requiredError =
    fieldState.error?.type === "required" ? "Required field" : "";

  return (
    <div className={"input-wrapper"}>
      <IonInput
        {...field}
        onIonChange={field.onChange}
        type={inputType}
        placeholder={placeholder}
      />
      <span className={"input-errors"}>
        {requiredError || fieldState.error?.message}
      </span>
      {label && <IonLabel>{label}</IonLabel>}
    </div>
  );
};
