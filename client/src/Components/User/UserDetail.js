import React from "react";
import { UserDetails } from "./UserListData";
import Footer from "../HomePage/Footer";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const UserDetail = () => {
  return (
    <>
      <div className="container">
        <div className="table-responsive my-3">
          <h3 className="text-center text-info my-3">AAD USER'S DETAILS</h3>
          <table className="table table-hover table-bordered table-pointer">
            <thead className="bg-secondary text-white">
              <tr>
                <th>S. No.</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email Address</th>
                <th>Phone Number</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {UserDetails.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      {item.address.country}, {item.address.state},{" "}
                      {item.address.city}, {item.address.postalCode}
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
