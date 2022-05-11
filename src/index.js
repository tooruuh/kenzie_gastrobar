import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ModalProviders } from "./Providers/modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginProviders } from "./Providers/login";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ModalProviders>
        <LoginProviders>
          <ToastContainer />
          <ToastContainer />
          <App />
        </LoginProviders>
      </ModalProviders>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
