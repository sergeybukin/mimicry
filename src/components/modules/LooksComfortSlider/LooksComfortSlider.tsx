import { FC, Dispatch, SetStateAction } from "react";
import { useHistory } from "react-router";
import { useDoubleTap } from "use-double-tap";
import { Slider } from "components/shared/Slider";
import { useSelector } from "react-redux";
import { selectCloset } from "redux/slices/closetSlice";
import { LooksComfortSliderItem } from "./LooksComfortSliderItem";
import { ILookData } from "types/closet";
import { Pagination } from "swiper";
import { IonText } from "@ionic/react";
import { Button } from "ui";
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
  const history = useHistory();

  const sliderItems = userLooks.map((look: ILookData) => {
    return {
      key: look.id,
      component: <LooksComfortSliderItem data={look} />,
    };
  });

  const onDoubleTap = useDoubleTap(() => {
    setIsLooksExpand((prev: boolean) => !prev);
  });

  const onAddLooks = () => history.push("/closet");

  return (
    <div
      {...onDoubleTap}
      className={`looks-comfort-slider  ${isLooksExpand ? "expand" : ""}`}
    >
      {userLooks.length === 0 ? (
        <>
          <IonText className={"title small"}>Your don't have any look</IonText>
          <Button
            label={"+ Add one"}
            styles={{ width: "50%" }}
            onClick={onAddLooks}
          />
        </>
      ) : (
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
      )}
    </div>
  );
};
