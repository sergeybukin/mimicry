import { FC, useRef } from "react";
import { IonPage, IonText } from "@ionic/react";
import { WeatherIllustration } from "components/modules/WeatherIllustration";
import { ClosetPanel } from "components/modules/ClosetPanel";
import { selectWeather } from "redux/slices/weatherSlice";
import { useSelector } from "react-redux";
import { SelectCityPanel } from "components/modules/SelectCityPanel";
import { selectUser } from "redux/slices/userSlice";
import { WeatherOverview } from "components/modules/WeatherIllustration/WeatherOverview";
import { WeatherSlider } from "components/modules/WeatherSlider";
import "./MainPage.scss";

export const MainPage: FC = () => {
  const page = useRef(undefined);
  const {
    currentWeatherData: {
      description,
      humidity,
      temperature,
      wind,
      precipitation,
    },
  } = useSelector(selectWeather);

  const { currPosition } = useSelector(selectUser);

  return (
    <IonPage ref={page} className={"main-page"}>
      <SelectCityPanel page={page} />
      <IonText className={"header"}>
        <IonText className={"title medium"}>{currPosition.text}</IonText>
        <IonText className={"text large"}>{description}</IonText>
      </IonText>
      <WeatherIllustration temperature={temperature} />
      <WeatherOverview
        humidity={humidity}
        wind={wind}
        precipitation={precipitation}
      />
      <WeatherSlider />
      <ClosetPanel page={page} />
    </IonPage>
  );
};
