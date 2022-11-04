import React, { useState } from "react";

const SearchEngine = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const searchData = async () => {
    setLoading(true);
    console.log("search==>", search);
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
    console.log("response==>", response);
    setLoading(false);
  };

  return (
    <>
      <div className="row mx-0">
        <div className="col HomeTextStyle">
          <h5 className="text-center textH4Style">
            Find The Perfect Freelance Service <br />
            For Your Business
          </h5>
          <div className="col searchField my-3">
            <input
              type="search"
              className="searchStyle"
              placeholder="Search here"
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="searchButton" onClick={searchData}>
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
    </>
  );
};

export default SearchEngine;
