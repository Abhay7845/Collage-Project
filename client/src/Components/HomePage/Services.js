/** @format */

import React from "react";
import img from "../../Asset/img/skill_developer.jpg";
import img1 from "../../Asset/img/skill_developer1.jpg";
import img2 from "../../Asset/img/skill_developer2.webp";
import img3 from "../../Asset/img/skill_developer3.jpg";
import img4 from "../../Asset/img/skill_developer4.jpg";
import owner from "../../Asset/img/Owner.jpg";

const Services = () => {
  return (
    <div>
      <div className='container my-5'>
        <h4 className='my-3 text-info text-center'>
          <b>OUR SERVICES</b>
        </h4>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
          <div className='col'>
            <div className=''>
              <img src={img} className='img-fluid rounded' alt='...' />
            </div>
          </div>
          <div className='col'>
            <img src={img1} className='img-fluid rounded' alt='...' />
          </div>
          <div className='col'>
            <img src={img2} className='img-fluid rounded' alt='...' />
          </div>
          <div className='col'>
            <img src={img3} className='img-fluid rounded' alt='...' />
          </div>
          <div className='col'>
            <img src={img4} className='img-fluid rounded' alt='...' />
          </div>
          <div className='col'>
            <img src={owner} className='img-fluid rounded' alt='...' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
