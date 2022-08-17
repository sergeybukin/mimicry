import { FC, useMemo, useState } from "react";
import { IonHeader, IonTitle } from "@ionic/react";
import { Button, Input } from "../ui";
import { useAuth } from "../../utils/hooks/useAuth";
import { useForm } from "react-hook-form";
import { AuthEnum } from "../../types/auth";
import "./AuthPage.scss";

export const AuthPage: FC = () => {
  const { handleSubmit, setError, control } = useForm();
  const [authType, setAuthType] = useState<AuthEnum>(AuthEnum.LOG_IN);

  const { authAction } = useAuth();

  const onLogIn = async (data: any) => {
    const { email, password } = data;

    const newError = await authAction({ email, password }, authType);
    if (newError) {
      setError(newError.inputRef, {
        type: "custom",
        message: newError.message,
      });
    }
  };

  const onToggleAuthType = () => {
    if (authType === AuthEnum.LOG_IN) {
      setAuthType(AuthEnum.CREATE_ACCOUNT);
    }
    if (authType === AuthEnum.CREATE_ACCOUNT) {
      setAuthType(AuthEnum.LOG_IN);
    }
  };

  const toggleAuthTypeLabel = useMemo(
    () =>
      authType === AuthEnum.LOG_IN
        ? "Create an account"
        : "Already have an account?",
    [authType]
  );

  const authBtnLabel = useMemo(
    () => (authType === AuthEnum.LOG_IN ? "Log in" : "Sign in"),
    [authType]
  );

  return (
    <div className={"auth-form"}>
      <IonHeader>
        <IonTitle className={"title medium"}>Wear Weather</IonTitle>
      </IonHeader>
      <form onSubmit={handleSubmit(onLogIn)} className={"form-content"}>
        <Input
          inputType={"email"}
          placeholder={"E-mail"}
          name={"email"}
          rules={{ required: true }}
          control={control}
        />
        <Input
          inputType={"password"}
          label={authType === AuthEnum.LOG_IN ? "Forgot password?" : ""}
          placeholder={"Password"}
          name={"password"}
          rules={{ required: true, minLength: 6 }}
          control={control}
        />
        {authType === AuthEnum.CREATE_ACCOUNT && (
          <Input
            inputType={"password"}
            placeholder={"Confirm password"}
            name={"confirmPassword"}
            rules={{ required: true, minLength: 6 }}
            control={control}
          />
        )}
        <Button
          className={"btn"}
          color={"yellow"}
          label={authBtnLabel}
          btnType={"submit"}
        />
        <div onClick={onToggleAuthType} className={"toggle-auth-type"}>
          {toggleAuthTypeLabel}
        </div>
      </form>
    </div>
  );
};
