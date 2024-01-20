import React from "react";
import Register from "./Components/User/Register";
import Login from "./Components/User/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <ToastContainer />
        <BrowserRouter>
          <div className="NavbarShowStyle">
            <Navbar />
          </div>
          <div className="SideNavbarSwoStyle">
            <SideNavbar />
          </div>
          <Routes>
            <Route>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="*" element={<NoPage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forget/password" element={<ForgetPassword />} />
              <Route path="/translator" element={<Translate />} />
              <Route element={<PrivateComponent />}>
                <Route path="/user" element={<UserDetail />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<Products />} />
                <Route path="/add-user" element={<AddUser />} />
                <Route path="/update/user/:id" element={<UpdateUser />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
