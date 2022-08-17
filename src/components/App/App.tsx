import { FC, useEffect } from "react";
import { IonApp, IonPopover } from "@ionic/react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { MainPage } from "../MainPage";
import { AuthPage } from "../AuthPage";
import { getCurrentWeatherData } from "../../redux/slices/weatherSlice";
import { useAppDispatch } from "../../utils/hooks/useAppDispatch";
import { useGetLocation } from "../../utils/hooks/useGetLocation";
import "./App.scss";

const App: FC = () => {
  const dispatch = useAppDispatch();
  const { position, error } = useGetLocation();

  useEffect(() => {
    if (!error.showError && position) {
      dispatch(getCurrentWeatherData(position?.latitude, position?.longitude));
    }
  }, [position]);

  return (
    <div className="App">
      <IonApp>
        <IonPopover isOpen={error.showError}>{error.message}</IonPopover>
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </IonApp>
    </div>
  );
};

export default App;
