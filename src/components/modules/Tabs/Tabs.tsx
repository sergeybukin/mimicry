import { useState } from "react";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { Redirect, Route, withRouter } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { ClosetPage } from "pages/ClosetPage";
import { SettingsPage } from "pages/SettingsPage";
import { generateTabIcon } from "utils/generateTabIcon";
import "./Tabs.scss";

export const Tabs = withRouter((props) => {
  const [currentTab, setCurrentTab] = useState<string>(() =>
    props.location.pathname.includes("auth")
      ? "main"
      : props.location.pathname.slice(1)
  );

  const tabs = [
    { name: "main", label: "Main" },
    { name: "closet", label: "Closet" },
    { name: "settings", label: "Settings" },
  ];

  const onTabsChange = (ev: CustomEvent) => {
    setCurrentTab(ev.detail.tab);
  };

  return (
    <IonTabs className={"tabs-background-positive"}>
      <IonRouterOutlet>
        <Route exact path="/" render={() => <Redirect to="/closet" />} />
        <Route path="/main" exact children={<MainPage />} />
        <Route path="/closet" exact children={<ClosetPage />} />
        <Route path="/settings" exact children={<SettingsPage />} />
      </IonRouterOutlet>
      <IonTabBar onIonTabsDidChange={onTabsChange} slot="bottom">
        {tabs.map((tab) => (
          <IonTabButton
            className={tab.name}
            key={tab.name}
            tab={tab.name}
            href={`/${tab.name}`}
          >
            <IonIcon icon={generateTabIcon(currentTab, tab.name)} />
            <IonLabel className={"text small"}>{tab.label}</IonLabel>
          </IonTabButton>
        ))}
      </IonTabBar>
    </IonTabs>
  );
});
