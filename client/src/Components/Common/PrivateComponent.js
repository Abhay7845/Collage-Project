/** @format */

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateComponent = () => {
  return (
    <div>
      {localStorage.getItem("token") ? <Outlet /> : <Navigate to='/register' />}
    </div>
  );
};

export default PrivateComponent;
