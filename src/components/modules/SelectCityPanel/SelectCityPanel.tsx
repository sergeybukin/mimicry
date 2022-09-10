import React, { FC, useEffect, useState } from "react";
import { IonIcon, IonSearchbar } from "@ionic/react";
import { trailSignOutline } from "ionicons/icons";
import { Modal } from "ui";
import { useSelector } from "react-redux";
import {
  getPlacesData,
  selectUser,
  setCurrPosition,
  setPlacesData,
  setPlacesHistory,
  setUserLocation,
  updateUserData,
} from "redux/slices/userSlice";
import { useAppDispatch } from "utils/hooks/useAppDispatch";
import { PlacesList } from "./PlacesList";
import { getCurrentWeatherData } from "redux/slices/weatherSlice";
import { IPlace } from "types/user";
import "./SelectCityPanel.scss";

export interface SelectCityPanelProps {
  page: any;
}
export const SelectCityPanel: FC<SelectCityPanelProps> = ({ page }) => {
  const dispatch = useAppDispatch();
  const { placesData, currPosition, placesHistory, id } =
    useSelector(selectUser);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [placeValue, setPlaceValue] = useState<string>("");

  const onInputChange = (e: any) => {
    setPlaceValue(e.detail.value);
  };

  const onPlaceClick = (place: IPlace) => {
    setPlaceValue(place.place_name);
    dispatch(setUserLocation(place));
    dispatch(setCurrPosition(place));
    if (!placesHistory.some((e: IPlace) => e.id === place.id)) {
      const newPlaces = [...placesHistory];
      newPlaces.unshift(place);
      if (placesHistory.length > 5) {
        newPlaces.pop();
      }
      dispatch(
        updateUserData(id, {
          placesHistory: newPlaces,
        })
      );
      dispatch(setPlacesHistory(newPlaces));
    }
  };

  const onSubmitPlace = () => {
    dispatch(
      getCurrentWeatherData(currPosition.center[1], currPosition.center[0])
    );
    setShowModal(false);
  };

  const onOpenModal = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    dispatch(setPlacesData([]));
    setShowModal(false);
  };

  useEffect(() => {
    dispatch(getPlacesData(placeValue));
  }, [placeValue]);

  return (
    <div className={"select-city-panel"}>
      <IonIcon
        onClick={onOpenModal}
        className={"icon-btn"}
        icon={trailSignOutline}
      />
      <Modal
        classList={"select-city-modal"}
        isOpen={showModal}
        onClose={onCloseModal}
        onOk={onSubmitPlace}
        page={page}
      >
        <IonSearchbar
          debounce={500}
          value={placeValue}
          onIonChange={onInputChange}
        />
        <PlacesList
          placesList={placesData.length > 0 ? placesData : placesHistory}
          onClick={onPlaceClick}
        />
      </Modal>
    </div>
  );
};
