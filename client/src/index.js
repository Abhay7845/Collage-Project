import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "react-toastify/dist/ReactToastify.css";
import "tippy.js/dist/tippy.css";
import "leaflet/dist/leaflet.css";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

document.addEventListener("blockInspect", function (e) {
  e.preventDefault();
});

document.onkeydown = function (e) {
  if (e.keyCode === 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode === "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode === "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode === "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode === "U".charCodeAt(0)) {
    return false;
  }
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
