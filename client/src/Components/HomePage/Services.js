import React from "react";
import img from "../../Asset/img/skill_developer.jpg";
import img1 from "../../Asset/img/skill_developer1.jpg";
import img2 from "../../Asset/img/skill_developer2.webp";
import img3 from "../../Asset/img/skill_developer3.jpg";
import img4 from "../../Asset/img/skill_developer4.jpg";
import img5 from "../../Asset/img/skill_developer5.jpg";

const Services = () => {
  return (
    <>
      <div className="container my-5">
        <h4 className="my-3 text-info text-center">
          <b>OUR SERVICES</b>
        </h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col">
            <div className="card shadow">
              <img src={img} className="img-fluid" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="shadow-sm">
              <img src={img1} className="img-fluid rounded" alt="..." />
            </div>
          </div>
          <div className="col">
            <div className="shadow-sm">
              <img src={img2} className="img-fluid rounded" alt="..." />
            </div>
          </div>

          <div className="col">
            <div className="shadow-sm">
              <img src={img3} className="img-fluid rounded" alt="..." />
            </div>
          </div>
          <div className="col">
            <div className="shadow-sm">
              <img src={img4} className="img-fluid rounded" alt="..." />
            </div>
          </div>
          <div className="col">
            <div className="shadow-sm">
              <img src={img5} className="img-fluid rounded" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
