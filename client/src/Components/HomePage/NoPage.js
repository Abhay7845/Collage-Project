/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { FaLaptop } from "react-icons/fa";

const NoPage = () => {
  return (
    <div>
      <div className='container noPageFound'>
        <div>
          <FaLaptop size={150} color='gray' />
        </div>
        <h1 className='text-danger'>404</h1>
        <p>Page Not Found</p>
        <div className='my-3'>
          <Link to='/theAryan/group/home'>
            <button className='CButton'>Go Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoPage;
