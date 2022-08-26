import React from "react";
import Footer from "../HomePage/Footer";
// import Loading from "react-fullscreen-loading";
import { ProductsLists } from "./ProductList";

const Products = () => {
  // const [image, setImage] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   async function productsData() {
  //     setLoading(true);
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/photos",
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       },
  //     );
  //     const imageList = await response.json();
  //     setImage(imageList);
  //     setLoading(false);
  //   }
  //   productsData();
  // }, []);

  return (
    <>
      {/* {loading && (
        <Loading loading={true} background="#fff" loaderColor="#1890ff" />
      )} */}
      <div className="container">
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center my-4">
          <h3 className="fw-normal">Our Products</h3>
          <p className="fs-5 text-muted">
            Quickly build an effective pricing table for your potential
            customers with this Bootstrap example. It’s built with default
            Bootstrap components and utilities with little customization.
          </p>
        </div>
        <div className="row mx-0">
          {ProductsLists.map((item, i) => {
            const { title, url } = item;
            return (
              <div key={i} className="col-md-3 my-2">
                <div className="card">
                  <div className="card-body">
                    <h6 className="card-title">
                      {title.charAt(0).toUpperCase() + title.slice(1)}
                    </h6>
                    <div className="my-2">
                      <img src={url} alt="" width="100%" height="150px" />
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
        <div className="d-flex justify-content-between mx-3 my-3">
          <button className="btn btn-outline-secondary btn-sm ">
            Previous
          </button>
          <button className="btn btn-outline-secondary btn-sm ">Next</button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Products;
