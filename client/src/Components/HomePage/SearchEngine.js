import React, { useState } from "react";
import TablePagination from "@mui/material/TablePagination";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const SearchEngine = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const searchData = async () => {
    if (!search) {
      alert("Please enter Your Text");
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
        alert("Data Not Found");
      } else {
        setResponseData(response);
      }
      setLoading(false);
    }
  };
  for (let i = 0; i < responseData.length; i++);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
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
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
            <TablePagination
              component="div"
              count={responseData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
        </div>
      )}
      {!responseData === null && <p>Data Not Found</p>}
    </>
  );
};

export default SearchEngine;
