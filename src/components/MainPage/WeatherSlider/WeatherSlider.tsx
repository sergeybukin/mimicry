import { WeatherSlideItem } from "./WeatherSlideItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { selectWeather } from "../../../redux/slices/weatherSlice";
import "./WeatherSlider.scss";
import "swiper/scss";

export const WeatherSlider = () => {
  const { forecastWeatherData } = useSelector(selectWeather);

  return (
    <div className={"weather-slider"}>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {forecastWeatherData.map((item: any) => {
          return (
            <SwiperSlide>
              <WeatherSlideItem data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
