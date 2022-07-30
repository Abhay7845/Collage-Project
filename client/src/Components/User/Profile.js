import React from "react";
import Footer from "../HomePage/Footer";
import "../../Components/Style/Profile.css";

const Profile = () => {
  // let userInfo
  // function async userInformation() {
  //    userInfo = await fetch("http://localhost:5000/api/user/fetchUser", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  // }
  // userInformation();

  return (
    <>
      <div className="mx-0 userInfo">
        <div className="dataInfo">
          <h3 className="text-success text-center my-5">User Information</h3>
          <div className="row mx-0">
            <div className="col text-success">Name : </div>
            <b className="col">Abhay</b>
          </div>
          <div className="row mx-0 my-2">
            <div className="col text-success">Email : </div>
            <b className="col text-bold">abhay123@gmail.com</b>
          </div>
          <div className="row mx-0">
            <div className="col text-success">Phone Number : </div>
            <div className="col">
              +91 <b>9123437177</b>
            </div>
          </div>
          <div className="row mx-0 my-2">
            <div className="col text-success">Registered Date : </div>
            <b className="col">30 Jul 2022</b>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Profile;
