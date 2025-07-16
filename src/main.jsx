import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "sonner";
import {Provider} from "react-redux";
import { store } from "./redux/store.js";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>

    <Toaster richColors position="top-right" />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </StrictMode>
);
