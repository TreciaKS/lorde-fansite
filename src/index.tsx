import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Router
import { BrowserRouter } from "react-router-dom";

// Auth0
// import { Auth0Provider } from "@auth0/auth0-react";

// this value will never be null or undefined. non-null assertions !
// const domain = process.env.REACT_APP_AUTH0_DOMAIN!;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID!;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
