import { IonAvatar, IonIcon, IonPage } from "@ionic/react";
import { Button } from "ui";
import { personCircleOutline } from "ionicons/icons";
import { useLogOut } from "utils/hooks/useLogOut";
import "./SettingsPage.scss";
import { ButtonColors } from "ui/Button/types";

export const SettingsPage = () => {
  const { onLogOut } = useLogOut();
  return (
    <IonPage className={"settings-page"}>
      <div className={"user-info-block"}>
        <div className={"header"}>
          <IonAvatar>
            <IonIcon icon={personCircleOutline} />
          </IonAvatar>
          <div className={"user-general-info"}>
            <div className={"title"}>Bukin Sergey</div>
            <div className={"title"}>book-inc@mail.ru</div>
          </div>
        </div>
        <div className={"user-extra-info"}>
          <div className={"title"}>Additional info item</div>
          <div className={"title"}>Additional info item</div>
        </div>
      </div>
      <Button
        onClick={onLogOut}
        label={"Log out"}
        color={ButtonColors.TRANSPARENT}
      />
    </IonPage>
  );
};
