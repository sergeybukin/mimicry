import { FC, useEffect } from "react";
import { IonApp, IonToast, IonRouterOutlet, isPlatform } from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import { AuthPage } from "pages/AuthPage";
import { selectWeather } from "redux/slices/weatherSlice";
import { Tabs } from "components/modules/Tabs";

import { useSelector } from "react-redux";
import { StatusBar, Style } from "@capacitor/status-bar";
import { Loader } from "ui";
import { useLoading } from "utils/hooks/useLoading";
import "./App.scss";

const App: FC = () => {
  // const { isAuth, errorMessage } = useLoading();
  // const { weatherDataLoading } = useSelector(selectWeather);
  //
  // useEffect(() => {
  //   if (isPlatform("iphone")) {
  //     StatusBar.setStyle({ style: Style.Light });
  //   }
  // }, []);

  return (
    <IonApp className="App">
      <Tabs />

      {/*<IonReactRouter>*/}
      {/*  {weatherDataLoading && <Loader />}*/}
      {/*  {!isAuth ? (*/}
      {/*    <IonRouterOutlet>*/}
      {/*      <Route*/}
      {/*        exact*/}
      {/*        path="/"*/}
      {/*        render={() => <Redirect to="/auth/login" />}*/}
      {/*      />*/}
      {/*      <Route*/}
      {/*        exact*/}
      {/*        path="/auth/:authType"*/}
      {/*        render={(data) => <AuthPage {...data} />}*/}
      {/*      />*/}
      {/*    </IonRouterOutlet>*/}
      {/*  ) : (*/}
      {/*    <>*/}
      {/*      {!weatherDataLoading && (*/}
      {/*        <>*/}
      {/*          <Tabs />*/}
      {/*          <IonToast*/}
      {/*            cssClass={"text error-toast"}*/}
      {/*            isOpen={!!errorMessage}*/}
      {/*            message={"Geolocation error: " + errorMessage}*/}
      {/*            duration={1000}*/}
      {/*            position={"top"}*/}
      {/*          />*/}
      {/*        </>*/}
      {/*      )}*/}
      {/*    </>*/}
      {/*  )}*/}
      {/*</IonReactRouter>*/}
    </IonApp>
  );
};

export default App;
