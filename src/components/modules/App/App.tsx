import { FC, useEffect } from "react";
import {
  IonApp,
  IonToast,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  isPlatform,
} from "@ionic/react";
import { Redirect, Route, withRouter } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";

import { MainPage } from "pages/MainPage";
import { AuthPage } from "pages/AuthPage";
import { ClosetPage } from "pages/ClosetPage";
import { SettingsPage } from "pages/SettingsPage";
import {
  getCurrentWeatherData,
  selectWeather,
} from "redux/slices/weatherSlice";
import { useAppDispatch } from "utils/hooks/useAppDispatch";
import { useGetLocation } from "utils/hooks/useGetLocation";
import { Tab } from "../Tab";
import { sunnyOutline, shirtOutline, settingsOutline } from "ionicons/icons";
import { useSelector } from "react-redux";
import { StatusBar, Style } from "@capacitor/status-bar";
import { Loader } from "ui";
import { useAuth } from "utils/hooks/useAuth";
import "./App.scss";

const App: FC = () => {
  const dispatch = useAppDispatch();
  const { position, error } = useGetLocation();
  const { weatherDataLoading } = useSelector(selectWeather);
  const { isAuth, authDataLoading } = useAuth();

  useEffect(() => {
    if (!error.showError && position) {
      dispatch(getCurrentWeatherData(position?.latitude, position?.longitude));
    }
  }, [position]);

  useEffect(() => {
    if (isPlatform("iphone")) {
      StatusBar.setStyle({ style: Style.Light });
    }
  }, []);

  return (
    <IonApp className="App">
      <IonReactRouter>
        {weatherDataLoading || (authDataLoading && <Loader />)}
        {!isAuth ? (
          <IonRouterOutlet>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/auth/login" />}
            />
            <Route
              exact
              path="/auth/:authType"
              render={(data) => <AuthPage {...data} />}
            />
          </IonRouterOutlet>
        ) : (
          <>
            {!weatherDataLoading && (
              <>
                <IonTabs className={"tabs-background-positive"}>
                  <IonRouterOutlet>
                    <Route
                      exact
                      path="/"
                      render={() => <Redirect to="/main" />}
                    />
                    <Route path="/main" exact children={<MainPage />} />
                    <Route path="/closet" exact children={<ClosetPage />} />
                    <Route path="/settings" exact children={<SettingsPage />} />
                  </IonRouterOutlet>
                  <IonTabBar slot="bottom">
                    <IonTabButton tab="main" href="/main">
                      <Tab icon={sunnyOutline} label={"Main"} />
                    </IonTabButton>
                    <IonTabButton tab="closet" href="/closet">
                      <Tab icon={shirtOutline} label={"Closet"} />
                    </IonTabButton>
                    <IonTabButton tab="settings" href="/settings">
                      <Tab icon={settingsOutline} label={"Settings"} />
                    </IonTabButton>
                  </IonTabBar>
                </IonTabs>
                <IonToast
                  cssClass={"text error-toast"}
                  isOpen={error.showError}
                  message={"Geolocation error: " + error.message}
                  duration={2000}
                  position={"top"}
                />
              </>
            )}
          </>
        )}
      </IonReactRouter>
    </IonApp>
  );
};

export default withRouter(App);
