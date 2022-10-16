import { IonPage, IonAvatar, IonLabel, IonIcon } from "@ionic/react";
import { Button } from "ui";
import { personCircleOutline } from "ionicons/icons";
import { useLogOut } from "utils/hooks/useLogOut";
import "./SettingsPage.scss";

export const SettingsPage = () => {
  const { onLogOut } = useLogOut();
  return (
    <IonPage className={"settings-page"}>
      <IonAvatar>
        <IonIcon icon={personCircleOutline} />
      </IonAvatar>
      <IonLabel>First name</IonLabel>
      <IonLabel>Second name</IonLabel>
      <IonLabel>E-mail</IonLabel>
      <Button onClick={onLogOut} label={"Log out"} />
    </IonPage>
  );
};
