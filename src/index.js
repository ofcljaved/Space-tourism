import React from "react";
import ReactDOM from "react-dom/client";
import "material-symbols";
import App from "./App";
import { SpaceProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <SpaceProvider>
    <App />
  </SpaceProvider>
  // </React.StrictMode>
);
