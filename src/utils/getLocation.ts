import { Geolocation } from "@ionic-native/geolocation";
import { Coordinates } from "@ionic-native/geolocation";

export interface IGetLocation {
  showError: boolean;
  position: Coordinates;
  message: string;
}

export const getLocation: () => Promise<IGetLocation> = () => {
  const defaultPosition: Coordinates = {
    accuracy: 27134.590981552607,
    altitude: 0,
    altitudeAccuracy: 0,
    heading: 0,
    latitude: 43.6358219,
    longitude: 39.7189014,
    speed: 0,
  };

  const getLocation = async () => await Geolocation.getCurrentPosition();

  return getLocation()
    .then((res) => {
      return { showError: false, position: res.coords, message: "" };
    })
    .catch((err) => {
      const message =
        err.message.length > 0 ? err.message : "Cannot get user location";
      return { showError: true, position: defaultPosition, message };
    });
};
