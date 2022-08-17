import { Geolocation, Coordinates } from "@awesome-cordova-plugins/geolocation";
import { useEffect, useState } from "react";

export interface LocationError {
  showError: boolean;
  message?: string;
}

export const useGetLocation = () => {
  const [position, setPosition] = useState<Coordinates>();
  const [error, setError] = useState<LocationError>({ showError: false });
  const getLocation = async () => await Geolocation.getCurrentPosition();

  useEffect(() => {
    getLocation()
      .then((res) => {
        setPosition(res.coords);
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
