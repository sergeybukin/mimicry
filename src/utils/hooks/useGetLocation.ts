import { useEffect, useState } from "react";
import { getPlaceByCoordinates } from "../../redux/slices/userSlice";
import { useAppDispatch } from "./useAppDispatch";
import { Geolocation, Coordinates } from "@ionic-native/geolocation";

export interface LocationError {
  showError: boolean;
  message?: string;
}

export const useGetLocation = () => {
  const dispatch = useAppDispatch();
  const [position, setPosition] = useState<Coordinates>({
    accuracy: 27134.590981552607,
    altitude: 0,
    altitudeAccuracy: 0,
    heading: 0,
    latitude: 43.6358219,
    longitude: 39.7189014,
    speed: 0,
  });
  const [error, setError] = useState<LocationError>({ showError: false });
  const [geolocationLoading, setGeolocationLoading] = useState<boolean>(true);
  const getLocation = async () => await Geolocation.getCurrentPosition();

  useEffect(() => {
    getLocation()
      .then((res) => {
        setPosition(res.coords);
        dispatch(
          getPlaceByCoordinates([res.coords?.latitude, res.coords?.longitude])
        );
        setError({ showError: false });
        setGeolocationLoading(false);
      })
      .catch((err) => {
        dispatch(
          getPlaceByCoordinates([position.latitude, position.longitude])
        );
        const message =
          err.message.length > 0 ? err.message : "Cannot get user location";
        setError({ showError: true, message });
        setGeolocationLoading(false);
      });
  }, []);

  return { position, error, geolocationLoading };
};
