import React, { useState, useEffect } from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import moment from "moment";
import axios from "axios";

const UserDetail = () => {
  const [addUserInfo, setAddUserInfo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/user/fetchAddUser", {
        headers: {
          accept: "application/json",
        },
      })
      .then(async (res) => {
        const response = await res.data;
        setAddUserInfo(response);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="table-responsive my-3">
          <h3 className="text-center text-info my-3"> ADD USER DETAILS</h3>
          <table className="table table-hover table-bordered table-pointer">
            <thead className="bg-secondary text-white">
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Occupation</th>
                <th>Email Address</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th className="text-center">Date</th>
              </tr>
            </thead>
            <tbody>
              {addUserInfo.map((item, i) => {
                return (
                  <tr key={i}>
                    <td className="userId"> # </td>
                    <td>{item.name}</td>
                    <td>{item.occupation}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      {item.address}, {item.city}, {item.state}, {item.country},{" "}
                      {item.postalCode}
                    </td>
                    <td className="text-center">
                      {moment(item.date).format("ll")}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-end my-2">
          <Link to="/add-user">
            <Icon.PlusCircleFill
              size={40}
              style={{
                cursor: "pointer",
              }}
              color="#33b5e5"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
