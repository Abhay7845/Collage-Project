import React, { useState } from "react";
import moment from "moment";
import Footer from "../HomePage/Footer";
import "../../Components/Style/Profile.css";

const Profile = () => {
  const [userInfo, setUserinfo] = useState("");
  let userAccessToken = localStorage.getItem("token");
  async function getUserInformation() {
    const response = await fetch("http://localhost:5000/api/user/fetchUser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": userAccessToken,
      },
    });
    const json = await response.json();
    setUserinfo(json);
  }
  getUserInformation();
  return (
    <>
      <div className="mx-0 userInfo">
        <div className="dataInfo">
          <h3 className="text-success text-center my-5">User Information</h3>
          <div className="mx-2">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">S. No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">{userInfo.name}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1.</th>
                  <td>Email Address</td>
                  <td>{userInfo.email}</td>
                </tr>
                <tr>
                  <th scope="row">2.</th>
                  <td>Phone Number</td>
                  <td>+91 {userInfo.phone}</td>
                </tr>
                <tr>
                  <th scope="row">3.</th>
                  <td>Registered Date</td>
                  <td>{moment(userInfo.date).format("llll")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="profileUser">
        <Footer />
      </div>
    </>
  );
};

export default Profile;
