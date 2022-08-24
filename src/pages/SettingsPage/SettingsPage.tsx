import { IonPage } from "@ionic/react";
import "./SettingsPage.scss";
import { Button } from "../../ui";
import { useLogOut } from "../../utils/hooks/useLogOut";

export const SettingsPage = () => {
  const { onLogOut } = useLogOut();
  return (
    <IonPage>
      <h2>Settings</h2>
      <Button onClick={onLogOut} label={"Log out"} />
    </IonPage>
  );
};
