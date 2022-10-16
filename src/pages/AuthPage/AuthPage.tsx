import { FC, useState, useMemo } from "react";
import {
  IonContent,
  IonItem,
  IonLabel,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
  IonHeader,
} from "@ionic/react";
import { RouteComponentProps } from "react-router";
import { Error, IField } from "components/shared/Form/types";
import { useRegister } from "utils/hooks/useRegister";
import { FieldValues } from "react-hook-form";
import { Form } from "components/shared/Form";
import { useLogin } from "utils/hooks/useLogin";
import { authHandler } from "utils/handleAuth";
import "./AuthPage.scss";

export interface AuthPageProps
  extends RouteComponentProps<{
    authType: string;
  }> {}

export const AuthPage: FC<AuthPageProps> = ({ match }) => {
  const generalFields: Array<IField> = [
    {
      inputType: "text",
      placeholder: "Name",
      name: "name",
      rules: { required: true },
    },
    {
      inputType: "email",
      placeholder: "E-mail",
      name: "email",
      rules: { required: true },
    },
    {
      inputType: "password",
      placeholder: "Password",
      name: "password",
      rules: { required: true },
    },
    {
      inputType: "password",
      placeholder: "Confirm password",
      name: "confirmPassword",
      rules: { required: true },
    },
  ];
  const { onRegister } = useRegister();
  const { onLogin } = useLogin();
  const [errors, setErrors] = useState<Array<Error>>([]);

  const onAuth = (data: FieldValues) => {
    if (match.params.authType === "login") {
      authHandler(data, onLogin, setErrors);
    } else {
      authHandler(data, onRegister, setErrors);
    }
  };

  const { changeAuthTypeLabel, changeAuthTypePath, btnLabel, currFields } =
    useMemo(() => {
      if (match.params.authType === "login") {
        return {
          changeAuthTypeLabel: "Create an account",
          changeAuthTypePath: "/auth/register",
          btnLabel: "Log in",
          currFields: generalFields.slice(1, 3),
        };
      } else {
        return {
          changeAuthTypeLabel: "Already have an account?",
          changeAuthTypePath: "/auth/login",
          btnLabel: "Sign in",
          currFields: generalFields,
        };
      }
    }, [match.params.authType]);

  return (
    <IonPage className={"auth-form"}>
      <IonHeader>
        <IonToolbar>
          <IonTitle className={"title medium"}>Mimicry</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonText>
          <h1 className={"title small"}>
            The smart weather app to manage your closet
          </h1>
        </IonText>
        <IonItem lines={"none"} detail={false}>
          <Form
            fields={currFields}
            onSubmit={onAuth}
            submitBtnLabel={btnLabel}
            errors={errors}
          />
        </IonItem>
        <IonItem lines={"none"} detail={false} routerLink={changeAuthTypePath}>
          <IonLabel className={"title small"}>{changeAuthTypeLabel}</IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};
