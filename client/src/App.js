/** @format */

import React, { useState } from "react";
import Register from "./Components/User/Register";
import Login from "./Components/User/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alert from "./Components/Common/Alert";
import UserDetail from "./Components/User/UserDetail";
import Profile from "./Components/User/Profile";
import PrivateComponent from "./Components/Common/PrivateComponent";
import Home from "./Components/HomePage/Home";
import Navbar from "./Components/HomePage/Navbar";
import SideNavbar from "./Components/HomePage/SideNavbar";
import About from "./Components/Common/About";
import AddUser from "./Components/User/AddUser";
import NoPage from "./Components/HomePage/NoPage";
import ForgetPassword from "./Components/User/ForgetPassword";
import Products from "./Components/Products/Products";
import Translate from "./Components/Translate/Translate";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import UpdateUser from "./Components/User/UpdateUser";
import "tippy.js/dist/tippy.css";

const App = () => {
  const [alert, setAlert] = useState(null);
  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  };

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <div className='NavbarShowStyle'>
            <Navbar />
          </div>
          <div className='SideNavbarSwoStyle'>
            <SideNavbar />
          </div>
          <Alert alert={alert} />
          <Routes>
            <Route>
              <Route index element={<Home />} />
              <Route
                path='https://thearyangroup.netlify.app/'
                element={<Home />}
              />
              <Route path='*' element={<NoPage />} />
              <Route
                path='/theAryan/group/register'
                element={<Register showAlert={showAlert} />}
              />
              <Route
                path='/theAryan/group/login'
                element={<Login showAlert={showAlert} />}
              />
              <Route
                path='/theAryan/group/forget/password'
                element={<ForgetPassword />}
              />
              <Route path='/theAryan/group/translate' element={<Translate />} />
              <Route element={<PrivateComponent />}>
                <Route
                  path='/theAryan/group/user'
                  element={<UserDetail showAlert={showAlert} />}
                />
                <Route path='/theAryan/group/profile' element={<Profile />} />
                <Route
                  path='/theAryan/group/about'
                  element={<About showAlert={showAlert} />}
                />
                <Route path='/theAryan/group/product' element={<Products />} />
                <Route
                  path='/theAryan/group/add-user'
                  element={<AddUser showAlert={showAlert} />}
                />
                <Route
                  path='/theAryan/group/update/user/:id'
                  element={<UpdateUser showAlert={showAlert} />}
                />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
