import React, { FC, useEffect, useState } from "react";
import { IonIcon, IonInput, IonItem, IonList } from "@ionic/react";
import { trailSignOutline } from "ionicons/icons";
import { Modal } from "../ui";
import { useDebounce } from "../../utils/hooks/useDebounce";
import "./SelectCityPanel.scss";
import { useSelector } from "react-redux";
import {
  getPlacesData,
  selectUser,
  setPlacesData,
  setUserPlace,
} from "../../redux/slices/userSlice";
import { useAppDispatch } from "../../utils/hooks/useAppDispatch";
import { PlacesList } from "./PlacesList";
import { getCurrentWeatherData } from "../../redux/slices/weatherSlice";
import { IPlace } from "../../types/user";

export const SelectCityPanel: FC = () => {
  const dispatch = useAppDispatch();
  const { placesData, userPlace } = useSelector(selectUser);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [placeValue, setPlaceValue] = useState<string>("");
  const debouncedSearchTerm: string = useDebounce(placeValue, 500);

  const onInputChange = (e: any) => {
    setPlaceValue(e.detail.value);
  };

  const onPlaceClick = (place: IPlace) => {
    setPlaceValue(place.place_name);
    dispatch(setUserPlace(place));
  };

  const onSubmitPlace = () => {
    dispatch(getCurrentWeatherData(userPlace.center[1], userPlace.center[0]));
  };

  const onOpenModal = () => setShowModal(true);
  const onCloseModal = () => {
    setShowModal(false);
    dispatch(setPlacesData([]));
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(getPlacesData(placeValue));
    } else {
      dispatch(setPlacesData([]));
    }
  }, [debouncedSearchTerm]);

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
      >
        <IonInput
          className={"select-city-input"}
          type={"text"}
          placeholder={"City or place"}
          onIonChange={onInputChange}
          value={placeValue}
        />
        <PlacesList placesList={placesData} onClick={onPlaceClick} />
      </Modal>
    </div>
  );
};
