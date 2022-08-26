import React, { useState } from "react";

const SearchEngine = () => {
  const [search, setSearch] = useState("");

  const searchData = async () => {
    console.log("search==>", search);
    let BusinessList = await fetch(
      `https://jsonplaceholder.typicode.com/comments?q=${search}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    const response = await BusinessList.json();
    console.log("response==>", response);
  };

  return (
    <>
      <div className="row mx-0">
        <div className="col HomeTextStyle">
          <h4 className="text-center textH4Style">
            Find The Perfect Freelance Service <br />
            For Your Business
          </h4>
          <div className="col searchField">
            <input
              type="search"
              className="searchStyle"
              placeholder="Search here"
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="searchButton" onClick={searchData}>
              Search
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchEngine;
