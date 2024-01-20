import React, { useState } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import Pagination from "../Products/Pagination";
import { toast } from "react-toastify";

const SearchEngine = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState([]);
  const [showPerPage, setShowPerPage] = useState(50);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
  const searchData = async (search) => {
    if (!search) {
      toast.error("Please enter your text", {
        theme: "colored",
        autoClose: 3000,
      });
    } else {
      setLoading(true);
      let BusinessList = await fetch(
        `https://jsonplaceholder.typicode.com/comments?q=${search}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const response = await BusinessList.json();
      if (response.length === 0) {
        toast.warn("Data Not Found", { theme: "colored", autoClose: 2000 });
      } else {
        setResponseData(response);
        setShowPerPage(50);
      }
      setLoading(false);
    }
  };
  const OnPressKerEnter = (event) => {
    if (event.key.toUpperCase() === "ENTER") {
      searchData(search);
    }
  };
  for (let i = 0; i < responseData.length; i++);

  const onPagination = (startValue, endValue) => {
    setPagination({ start: startValue, end: endValue });
  };
  return (
    <div>
      <div className="row mx-0" style={{ marginTop: "-10px" }}>
        <div className="col HomeTextStyle">
          <h5 className="text-center textH4Style">
            Find The Perfect Freelance Service <br />
            For Your Business
          </h5>
          <div className="col searchField my-3">
            <input
              type="text"
              className="searchStyle"
              placeholder="Search"
              onKeyDown={OnPressKerEnter}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="searchButton" onClick={() => searchData(search)}>
              {loading ? (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                />
              ) : (
                <span className="sr-only">Search</span>
              )}
            </span>
          </div>
        </div>
      </div>
      {responseData.length > 0 && (
        <div className="container my-3">
          <div className="d-flex justify-content-end my-2">
            <b className="mx-2 my-1">DOWNLOAD YOUR LIST :-</b>
            <ReactHTMLTableToExcel
              id="test-table-xls-button"
              className="downloadexcel"
              table="table-to-xls"
              filename="Freelancing List"
              sheet="tablexls"
              buttonText="DOWNLOAD"
            />
          </div>
          <div className="table-responsive">
            <table
              id="table-to-xls"
              className="table table-hover table-bordered table-pointer"
            >
              <thead>
                <tr>
                  <th>No.</th>
                  <th className="text-center">Description</th>
                </tr>
              </thead>
              <tbody>
                {responseData
                  .slice(pagination.start, pagination.end)
                  .map((item, i) => {
                    return (
                      <tr key={i} className="textJustify">
                        <td>{i + 1}</td>
                        <td>{item.body}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <Pagination
              showPerPage={showPerPage}
              onPagination={onPagination}
              setShowPerPage
            />
          </div>
        </div>
      )}
      {!responseData === null && <p>Data Not Found</p>}
    </div>
  );
};

export default SearchEngine;
