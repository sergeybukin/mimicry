import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "redux/store";
import App from "./components/modules/App/App";
import { setupIonicReact } from "@ionic/react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "utils";
import { IonReactRouter } from "@ionic/react-router";
import "./index.scss";
import "@ionic/react/css/core.css";

setupIonicReact();
initializeApp(firebaseConfig);

const container = document.getElementById("root")!;
ReactDOM.render(
  <Provider store={store}>
    <IonReactRouter>
      <App />
    </IonReactRouter>
  </Provider>,
  container
);
