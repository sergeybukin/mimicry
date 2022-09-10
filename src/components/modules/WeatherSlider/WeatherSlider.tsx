import { FC, useMemo } from "react";
import { WeatherSlideItem } from "./WeatherSlideItem";
import { useSelector } from "react-redux";
import { selectWeather } from "redux/slices/weatherSlice";
import { IMappedWeather } from "redux/mappers/mapWeatherResponse";
import { findClosestTime } from "utils/findClosestTime";
import { Slider } from "components/shared/Slider";
import "./WeatherSlider.scss";

export interface WeatherSliderProps {
  isLooksExpand: boolean;
}

export const WeatherSlider: FC<WeatherSliderProps> = ({ isLooksExpand }) => {
  const { forecastWeatherData } = useSelector(selectWeather);
  const { closestItem, index } = findClosestTime(forecastWeatherData);

  const sliderItems = useMemo(() => {
    return forecastWeatherData.map((item: IMappedWeather) => {
      return {
        key: item.date.unix,
        component: (
          <WeatherSlideItem
            data={item}
            selected={closestItem?.date.unix === item.date.unix}
          />
        ),
      };
    });
  }, [closestItem, forecastWeatherData]);

  return (
    <div className={`weather-slider ${isLooksExpand ? "contract" : ""}`}>
      <Slider
        initialSlide={index}
        spaceBetween={10}
        slidesPerView={4}
        sliderItems={sliderItems}
      />
    </div>
  );
};
