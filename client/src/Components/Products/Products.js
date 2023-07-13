import React, { useState, useEffect } from "react";
import Footer from "../HomePage/Footer";
import Pagination from "./Pagination";
import AppLoader from "../Common/AppLoader";

const Products = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPerPage, setShowPerPage] = useState(16);

  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPagination = (startValue, endValue) => {
    setPagination({ start: startValue, end: endValue });
  };

  useEffect(() => {
    async function productsData() {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const imageList = await response.json();
      setProductList(imageList);
      setLoading(false);
    }
    productsData();
  }, [setShowPerPage]);

  return (
    <>
      {loading === true && <AppLoader />}
      {productList.length > 0 && (
        <div className="container">
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center my-3">
            <h3 className="fw-bold text-info">Our Products</h3>
            <p className="fs-5 ">
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
                  const { title, url, id } = item;
                  return (
                    <div key={i}>
                      <div className="border p-3 rounded">
                        <div className="card-body">
                          <h6 className="card-title">
                            {id}.
                            {title.charAt(0).toUpperCase() + title.slice(1)}
                          </h6>
                          <div className="my-2">
                            <img
                              src={url}
                              className="rounded"
                              alt=""
                              width="100%"
                              height="150px"
                            />
                          </div>
                          <p className="card-text">
                            With supporting text below as a natural lead-in to
                            additional content.
                          </p>
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
      )}
      {productList.length > 0 && <Footer />}
    </>
  );
};

export default Products;
