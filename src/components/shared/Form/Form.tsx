import { Button, Input } from "ui";
import { ButtonColors } from "ui/Button/types";
import { FieldValues, useForm } from "react-hook-form";
import { FC, useEffect } from "react";
import { IField, Error } from "./types";
import "./Form.scss";

export interface FormProps {
  submitBtnLabel?: string;
  fields: Array<IField>;
  onSubmit: (data: FieldValues) => void;
  errors?: Array<Error>;
}

export const Form: FC<FormProps> = ({
  submitBtnLabel = "Submit",
  fields,
  onSubmit,
  errors,
}) => {
  const { handleSubmit, setError, control } = useForm();

  useEffect(() => {
    if (errors) {
      errors.forEach((err) => setError(err.path, err.error));
    }
  }, [errors]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={"form-content"}>
      {fields.map((field) => (
        <Input
          inputType={field.inputType}
          placeholder={field.placeholder}
          name={field.name}
          rules={field.rules}
          control={control}
          key={field.name}
        />
      ))}
      <Button
        className={"btn title medium"}
        color={ButtonColors.YELLOW}
        label={submitBtnLabel}
        btnType={"submit"}
      />
    </form>
  );
};
