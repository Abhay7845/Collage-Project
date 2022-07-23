import React, { useState } from "react";
import Register from "./Components/User/Register";
import Login from "./Components/User/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/HomePage/Home";
import Alert from "./Components/Alert";

const App = () => {
  const [alert, setAlert] = useState(null);
  const showAlert = (massage, type) => {
    setAlert({ msg: massage, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };
  return (
    <>
      <Alert alert={alert} />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/register"
            element={<Register showAlert={showAlert} />}
          />
          <Route path="/login" element={<Login showAlert={showAlert} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
