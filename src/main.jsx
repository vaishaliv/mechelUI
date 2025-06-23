import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";

import { GoogleOAuthProvider } from "@react-oauth/google";
const CLIENT_KEY = import.meta.env.VITE_CLIENT_ID;

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={CLIENT_KEY}>
    <StrictMode>
      <App />
    </StrictMode>
    ,
  </GoogleOAuthProvider>
);
