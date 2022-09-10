import { FC, ReactNode } from "react";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import "swiper/scss";
import "./Slider.scss";

export interface ISlideProps {
  key: number | string;
  component: ReactNode;
}
export interface SliderProps extends SwiperProps {
  sliderItems: Array<ISlideProps>;
}
export const Slider: FC<SliderProps> = ({ sliderItems, ...props }) => {
  return (
    <Swiper {...props}>
      {sliderItems.map((item) => (
        <SwiperSlide key={item.key}>{item.component}</SwiperSlide>
      ))}
    </Swiper>
  );
};
