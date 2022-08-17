import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./components/App/App";
import "./index.scss";
import "@ionic/react/css/core.css";
import { setupIonicReact } from "@ionic/react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./utils/firebaseConfig";

setupIonicReact();
initializeApp(firebaseConfig);

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
