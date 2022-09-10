import { getLocation, IGetLocation } from "../getLocation";
import { useAppDispatch } from "./useAppDispatch";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { getPlaceByCoordinates, getUserData } from "redux/slices/userSlice";
import { getCurrentWeatherData } from "redux/slices/weatherSlice";
import { getUserLooksData } from "redux/slices/closetSlice";

export const useLoading = () => {
  const dispatch = useAppDispatch();
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");

  useEffect(() => {
    getLocation().then(({ position, showError, message }: IGetLocation) => {
      if (showError) {
        setErrorMessage(message);
      }
      getAuth().onAuthStateChanged((user) => {
        if (user?.email) {
          dispatch(getUserData(user.uid));
          dispatch(getUserLooksData(user.uid));
          setIsAuth(true);
        }
      });
      dispatch(getPlaceByCoordinates([position.latitude, position.longitude]));

      if (position) {
        dispatch(
          getCurrentWeatherData(position?.latitude, position?.longitude)
        );
      }
    });
  }, []);

  return { isAuth, errorMessage };
};
