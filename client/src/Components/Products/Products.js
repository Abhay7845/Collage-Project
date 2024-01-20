import React, { useState, useEffect } from "react";
import Footer from "../HomePage/Footer";
import Pagination from "./Pagination";
import AppLoader from "../Common/AppLoader";
import axios from "axios";

const Products = () => {
  const [productList, setProductList] = useState([]);
  const [showPerPage, setShowPerPage] = useState(8);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPagination = (startValue, endValue) => {
    setPagination({ start: startValue, end: endValue });
  };

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/codebuds-fk/chat/chats")
      .then((res) => res)
      .then((response) => setProductList(response.data))
      .catch((error) => {});
  }, [setShowPerPage]);

  return (
    <div>
      {productList.length > 0 ? (
        <div className="container">
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center my-3">
            <h3 className="fw-bold text-info">Our Products</h3>
            <p className="fs-5">
              Quickly build an effective pricing table for your potential
              customers with this Bootstrap example. It’s built with default
              Bootstrap components and utilities with little customization.
            </p>
          </div>
          <div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
              {productList
                .slice(pagination.start, pagination.end)
                .map((item, i) => {
                  const { title, imageURL, id, orderId } = item;
                  return (
                    <div key={i}>
                      <div className="border p-3 rounded">
                        <div className="card-body">
                          <h6 className="card-title">
                            {id}.
                            {title.charAt(0).toUpperCase() + title.slice(1)}
                          </h6>
                          <img
                            src={imageURL}
                            className="img-thumbnail my-2 w-100"
                            alt="product"
                          />
                          <p className="card-text">Product ID -{orderId}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <Pagination
              showPerPage={showPerPage}
              onPagination={onPagination}
              setShowPerPage
            />
          </div>
        </div>
      ) : (
        <AppLoader />
      )}
      {productList.length > 0 && <Footer />}
    </div>
  );
};

export default Products;
