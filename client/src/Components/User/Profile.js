/** @format */

import React, { useState, useEffect } from "react";
import moment from "moment";
import Footer from "../HomePage/Footer";
import "../../Components/Style/Profile.css";
import { ProfileAPI } from "../../Redux/APICall/ProfileAPI";

const Profile = () => {
  const [userInfo, setUserinfo] = useState([]);
  const userAccessToken = localStorage.getItem("token");
  useEffect(() => {
    if (userAccessToken) {
      ProfileAPI().then((res) => setUserinfo(res.data.data));
    }
  }, [userAccessToken]);

  return (
    <div>
      <div className="mx-0 userInfo">
        <div className="table-responsive dataInfo">
          <h3 className="text-info text-center my-5">Your Profile</h3>
          <div className="mx-1">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>Name</th>
                  <th>{userInfo.name}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1.</th>
                  <td>Email Address</td>
                  <td>{userInfo.email}</td>
                </tr>
                <tr>
                  <th>2.</th>
                  <td>Phone Number</td>
                  <td>+91 {userInfo.phone}</td>
                </tr>
                <tr>
                  <th>3.</th>
                  <td>Registered Date</td>
                  <td>{moment(userInfo.date).format("llll")}</td>
                </tr>
                <tr>
                  <th>4.</th>
                  <td>Profile Status</td>
                  <td
                    style={
                      userAccessToken
                        ? { color: "#65ef08", fontWeight: "bold" }
                        : { color: "#ff0000", fontWeight: "bold" }
                    }
                  >
                    {userAccessToken !== undefined ? "Active" : "Inactive"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="profileUser">
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
