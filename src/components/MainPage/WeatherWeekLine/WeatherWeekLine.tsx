import { WeatherWeekItem } from "./WeatherWeekItem";
import { IonSlides, IonSlide } from "@ionic/react";
import "./WeatherWeekLine.scss";

export const WeatherWeekLine = () => {
  const slideOpts = {
    speed: 400,
    spaceBetween: "8%",
  };

  return (
    <div className={"weather-week-line"}>
      <IonSlides pager={true} options={slideOpts}>
        <IonSlide>
          <WeatherWeekItem selected={true} icon={"clouds-fill"} />
          <WeatherWeekItem icon={"sun"} />
          <WeatherWeekItem icon={"clouds-sun-fill"} />
        </IonSlide>
        <IonSlide>
          <WeatherWeekItem icon={"clouds-fill"} />
          <WeatherWeekItem icon={"sun"} />
          <WeatherWeekItem icon={"clouds-sun-fill"} />
        </IonSlide>
      </IonSlides>
    </div>
  );
};
