import { useMemo } from "react";
import { WeatherSlideItem } from "./WeatherSlideItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { selectWeather } from "../../../redux/slices/weatherSlice";
import { IMappedWeather } from "../../../redux/mappers/mapWeatherResponse";
import { findClosestTime } from "../../../utils/findClosestTime";
import "./WeatherSlider.scss";
import "swiper/scss";

export const WeatherSlider = () => {
  const { forecastWeatherData } = useSelector(selectWeather);
  const { closestItem, index } = findClosestTime(forecastWeatherData);

  const sliderItems = useMemo(() => {
    return forecastWeatherData.map((item: IMappedWeather) => {
      return (
        <SwiperSlide key={item.date.unix}>
          <WeatherSlideItem
            data={item}
            selected={closestItem?.date.unix === item.date.unix}
          />
        </SwiperSlide>
      );
    });
  }, [closestItem, forecastWeatherData]);

  return (
    <div className={"weather-slider"}>
      <Swiper
        initialSlide={index}
        spaceBetween={10}
        slidesPerView={4}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {sliderItems}
      </Swiper>
    </div>
  );
};
