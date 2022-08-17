import { Geolocation, Coordinates } from "@awesome-cordova-plugins/geolocation";
import { useEffect, useState } from "react";
import { getPlaceByCoordinates } from "../../redux/slices/userSlice";
import { useAppDispatch } from "./useAppDispatch";

export interface LocationError {
  showError: boolean;
  message?: string;
}

export const useGetLocation = () => {
  const dispatch = useAppDispatch();
  const [position, setPosition] = useState<Coordinates>();
  const [error, setError] = useState<LocationError>({ showError: false });
  const getLocation = async () => await Geolocation.getCurrentPosition();

  useEffect(() => {
    getLocation()
      .then((res) => {
        setPosition(res.coords);
        dispatch(
          getPlaceByCoordinates([res.coords?.latitude, res.coords?.longitude])
        );
        setError({ showError: false });
      })
      .catch((err) => {
        const message =
          err.message.length > 0 ? err.message : "Cannot get user location";
        setError({ showError: true, message });
      });
  }, []);

  return { position, error };
};
