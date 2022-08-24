import { FieldValues } from "react-hook-form";
import { IUser } from "../types/user";

export const authHandler = (
  data: FieldValues,
  action: (user: IUser) => Promise<void>,
  setErrors: (data: any) => any
) => {
  const { password, confirmPassword } = data;
  let status = true;
  if (confirmPassword) {
    if (confirmPassword !== password) {
      const newError = {
        path: "confirmPassword",
        error: {
          type: "custom",
          message: "Passwords do not match",
        },
      };
      setErrors((prev: any) => [...prev, newError]);
      status = false;
    }
  }

  if (status) {
    action(data as IUser).catch((err) => {
      setErrors((prev: any) => {
        const newError = {
          path: err.inputRef,
          error: {
            type: "custom",
            message: err.message,
          },
        };
        return [...prev, newError];
      });
    });
  }
};
