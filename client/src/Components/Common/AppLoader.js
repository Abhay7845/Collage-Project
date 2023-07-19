/** @format */

import React from "react";
import gifLoading from "../../Asset/img/Loading.svg";

const AppLoader = () => {
  return (
    <div className='loaderStyle'>
      <img src={gifLoading} alt='loading' height='100px' width='100%' />
    </div>
  );
};

export default AppLoader;
