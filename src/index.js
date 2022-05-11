import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Providers } from "./Providers";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
<BrowserRouter>
  <React.StrictMode>
    <Providers>
      <ToastContainer />
        <ToastContainer />
        <App />
    </Providers>
  </React.StrictMode>
</BrowserRouter>,
  document.getElementById("root")
);
