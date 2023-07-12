import React, { useState, useEffect } from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import moment from "moment";
import axios from "axios";

const UserDetail = (props) => {
  const [addUserInfo, setAddUserInfo] = useState([]);
  const userAccessToken = localStorage.getItem("token");
  const { showAlert } = props;

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/user/fetchAddUser", {
        headers: {
          "Content-Type": "application/json",
          Authorization: userAccessToken,
        },
      })
      .then(async (res) => {
        const response = await res.data.addUserData;
        setAddUserInfo(response);
      });
  }, [userAccessToken]);
  console.log(addUserInfo.length < 0 ? "" : "");
  const DeleteUer = (id) => {
    axios
      .delete(`http://localhost:5000/api/user/delete/user/${id}`)
      .then((res) => res)
      .then((result) => {
        if (result.data.success === true) {
          showAlert("Data has been deleted successfully", "success");
          window.location.reload(true);
        }
      });
  };

  return (
    <>
      <div className="container">
        <div className="table-responsive my-3">
          <h3 className="text-center text-info my-3">ADD USER DETAILS</h3>
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
                <th className="text-center">Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              {addUserInfo.map((item, i) => {
                return (
                  <tr key={i}>
                    <td className="userId"> {i + 1}. </td>
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
                    <td className="text-center">
                      <Link to={`/theAryan/group/update/user/${item._id}`}>
                        <Icon.PencilSquare className="EditIcon" size={19} />
                      </Link>
                      <Icon.Trash
                        className="DeleteIcon"
                        size={20}
                        onClick={() => DeleteUer(item._id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-end my-2">
          <Link to="/theAryan/group/add-user">
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
