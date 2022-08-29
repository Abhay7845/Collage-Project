import React from "react";
import { Link } from "react-router-dom";
import { ProductsList } from "./ProductsList";

const RProducts = () => {
  return (
    <>
      <div className="container">
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center my-4">
          <h3 className="fw-bold text-info">Available Retail Products</h3>
          <p className="fs-5 ">
            We have all Available Pro in bellow on this website. and here is all
            Good and Fresh products is Available for every one. so if there is
            any one interested with that you can order or products.
          </p>
        </div>
        <div className="row mx-0">
          {ProductsList.map((item, i) => {
            const {
              productName,
              ProductImage,
              navigator,
              availableItem,
              price,
              description,
            } = item;

            return (
              <div key={i} className="col-md-4 my-2">
                <div className="card">
                  <div className="card-body">
                    <h6 className="card-title">{productName}</h6>
                    <div className="my-2">
                      <img
                        src={ProductImage}
                        alt=""
                        width="100%"
                        height="200px"
                      />
                    </div>
                    <p className="card-text">{description}</p>
                    <div className="d-flex justify-content-between">
                      <b
                        className={
                          availableItem > 5 ? "text-success" : "text-danger"
                        }
                      >
                        {availableItem < 1
                          ? "Available Item- "
                          : "Available Items- "}
                        {availableItem}
                      </b>
                      <b className="text-success">Price : {price}/Kg Only</b>
                    </div>
                    <div className="d-flex justify-content-end my-3 mx-2">
                      <Link to={navigator} class="btn btn-info btn-sm">
                        ORDER NOW
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}{" "}
        </div>
      </div>
    </>
  );
};

export default RProducts;
