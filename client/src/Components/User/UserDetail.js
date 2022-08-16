import React, { useState } from "react";
import Footer from "../HomePage/Footer";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const UserDetail = () => {
  const [addUserInfo, setaDDUserinfo] = useState([]);

  async function getAddUsersInfo() {
    const response = await fetch(
      "http://localhost:5000/api/user/fetchAddUser",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    const json = await response.json();
    setaDDUserinfo(json);
  }
  getAddUsersInfo();
  console.log("addUserInfo==>", addUserInfo);
  return (
    <>
      <div className="container">
        <div className="table-responsive my-3">
          <h3 className="text-center text-info my-3">ADD USER</h3>
          <table className="table table-hover table-bordered table-pointer">
            <thead className="bg-secondary text-white">
              <tr>
                <th>Name</th>
                <th>Occupation</th>
                <th>Email Address</th>
                <th>Phone Number</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {addUserInfo.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.occupation}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      {item.country}, {item.state}, {item.city},{" "}
                      {item.postalCode}
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
              style={{ cursor: "pointer" }}
              color="#33b5e5"
            />
          </Link>
        </div>
      </div>

      <div className="UserDetailsFooter">
        <Footer />
      </div>
    </>
  );
};

export default UserDetail;
