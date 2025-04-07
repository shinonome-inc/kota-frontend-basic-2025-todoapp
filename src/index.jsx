import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./components/Pages/MainPage";
import { AlertHandlerProvider } from "./contexts/alert_handler";
import "./style.css";
import { AlertManager } from "./components/Organisms/AlertManager";

ReactDOM.render(
  <AlertHandlerProvider>
    <MainPage />
    <AlertManager />
  </AlertHandlerProvider>,
  document.getElementById("app")
);
