import React, { Dispatch, FC, SetStateAction } from "react";
import { Clothes } from "../types";
import { Modal } from "../../../../ui";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
} from "@ionic/react";
import img from "../../../../ui/Icon/icons/assets/main/clouds-fill.svg";

export interface ClosetItemSettingsProps {
  showLookItemSettings: boolean;
  setShowLookItemSettings: Dispatch<SetStateAction<boolean>>;
  selectedItem: Clothes;
  page: any;
}

export const ClosetItemSettings: FC<ClosetItemSettingsProps> = ({
  showLookItemSettings,
  setShowLookItemSettings,
  selectedItem,
  page,
}) => {
  const onCloseModal = () => {
    setShowLookItemSettings(false);
  };

  return (
    <div className={"closet-item-settings"}>
      <Modal
        isOpen={showLookItemSettings}
        onClose={onCloseModal}
        title={selectedItem}
        page={page}
        classList={"closet-item-settings"}
      >
        <Swiper>
          <SwiperSlide>
            <IonCard>
              <img src={img} />
              <IonCardHeader>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                <IonCardTitle>Card Title</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                Keep close to Nature's heart... and break clear away, once in
                awhile, and climb a mountain or spend a week in the woods. Wash
                your spirit clean.
              </IonCardContent>
            </IonCard>
          </SwiperSlide>
          <SwiperSlide>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>Card ds`fsa</IonCardSubtitle>
                <IonCardTitle>Card Title</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                Keep close to Nature's heart... and break clear away, once in
                awhile, and climb a mountain or spend a week in the woods. Wash
                your spirit clean.
              </IonCardContent>
            </IonCard>
          </SwiperSlide>
          <SwiperSlide>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>Card 12</IonCardSubtitle>
                <IonCardTitle>Card Title</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                Keep close to Nature's heart... and break clear away, once in
                awhile, and climb a mountain or spend a week in the woods. Wash
                your spirit clean.
              </IonCardContent>
            </IonCard>
          </SwiperSlide>
        </Swiper>
      </Modal>
    </div>
  );
};
