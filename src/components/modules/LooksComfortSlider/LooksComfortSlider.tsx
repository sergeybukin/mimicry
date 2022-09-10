import { FC, Dispatch, SetStateAction } from "react";
import { useDoubleTap } from "use-double-tap";
import { Slider } from "components/shared/Slider";
import { useSelector } from "react-redux";
import { selectCloset } from "redux/slices/closetSlice";
import { LooksComfortSliderItem } from "./LooksComfortSliderItem";
import { ILookData } from "types/closet";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "./LooksComfortSlider.scss";

export interface LooksComfortSliderProps {
  isLooksExpand: boolean;
  setIsLooksExpand: Dispatch<SetStateAction<boolean>>;
}

export const LooksComfortSlider: FC<LooksComfortSliderProps> = ({
  setIsLooksExpand,
  isLooksExpand,
}) => {
  const { userLooks } = useSelector(selectCloset);

  const sliderItems = userLooks.map((look: ILookData) => {
    return {
      key: look.id,
      component: <LooksComfortSliderItem name={look.name} data={look.data} />,
    };
  });

  const onDoubleTap = useDoubleTap(() => {
    setIsLooksExpand((prev: boolean) => !prev);
  });

  return (
    <div
      {...onDoubleTap}
      className={`looks-comfort-slider  ${isLooksExpand ? "expand" : ""}`}
    >
      <Slider
        initialSlide={0}
        direction={"vertical"}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        sliderItems={sliderItems}
      />
    </div>
  );
};
