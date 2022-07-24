import React, { useState } from "react";
import Register from "./Components/User/Register";
import Login from "./Components/User/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/HomePage/Home";
import Alert from "./Components/Alert";
import UserDetail from "./Components/User/UserDetail";
import Profile from "./Components/User/Profile";
import PrivateComponent from "./Components/PrivateComponent";

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
      <BrowserRouter>
        <Alert alert={alert} />
        <Routes>
          <Route>
            <Route path="/home" element={<Home />} />
            <Route
              path="/register"
              element={<Register showAlert={showAlert} />}
            />
            <Route path="/login" element={<Login showAlert={showAlert} />} />
            <Route element={<PrivateComponent />}>
              <Route path="/user" element={<UserDetail />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
