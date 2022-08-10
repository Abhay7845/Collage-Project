import React from "react";
import { UserDetails } from "./UserListData";
import Footer from "../HomePage/Footer";

const UserDetail = () => {
  return (
    <>
      <div className="container table-responsive my-3">
        <h3 className="text-center text-info">USER'S</h3>
        <table className="table table-hover table-bordered table-pointer">
          <thead className="bg-secondary text-white">
            <tr>
              <th>S. No.</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
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
                    {item.address.city}, {item.address.suite}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default UserDetail;
