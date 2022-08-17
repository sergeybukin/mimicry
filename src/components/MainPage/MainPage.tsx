import { FC } from "react";
import { IonContent, IonLoading, IonText } from "@ionic/react";
import { WeatherBlock } from "./WeatherBlock";
import { LookPanel } from "./LookPanel";
import { selectWeather } from "../../redux/slices/weatherSlice";
import { useSelector } from "react-redux";
import { SelectCityPanel } from "../SelectCityPanel";
import "./MainPage.scss";

export const MainPage: FC = () => {
  const { weatherDataLoading } = useSelector(selectWeather);

  return (
    <IonContent className={"main-page"}>
      <IonLoading
        cssClass={"text large"}
        isOpen={weatherDataLoading}
        message={"Loading data..."}
      />
      {!weatherDataLoading && (
        <>
          <SelectCityPanel />
          <div className={"header"}>
            <IonText className={"title medium"}>Moscow</IonText>
            <IonText className={"text large"}>Sunny</IonText>
          </div>
          <div>
            <WeatherBlock />
            <LookPanel />
          </div>
        </>
      )}
    </IonContent>
  );
};
