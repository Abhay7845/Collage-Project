import React, { useState, useEffect } from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import { HOST_URL } from "../../API/Host";
import AppLoader from "../Common/AppLoader";
import { toast } from "react-toastify";

const UserDetail = () => {
  const [addUserInfo, setAddUserInfo] = useState([]);
  const [userId, setUserID] = useState("");
  const [loading, setLoading] = useState("");
  const userAccessToken = localStorage.getItem("token");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${HOST_URL}/fetchAddUser`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: userAccessToken,
        },
      })
      .then((res) => res)
      .then((response) => {
        if (response.data.success === true) {
          setAddUserInfo(response.data.addUserData);
        }
        setLoading(false);
      })
      .catch((error) => {
        setAddUserInfo([]);
        setLoading(false);
      });
  }, [userAccessToken, userId, addUserInfo.length]);

  const DeleteUser = (id) => {
    setLoading(true);
    setUserID(id);
    axios
      .delete(`${HOST_URL}/delete/user/${id}`)
      .then((res) => res)
      .then((result) => {
        if (result.data.success === true) {
          toast.success("Data has been Deleted", {
            theme: "colored",
            autoClose: 1000,
          });
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return (
    <div>
      {loading === true && <AppLoader />}
      <div className="container">
        <div className="table-responsive my-3">
          <h3 className="text-center text-info my-3">ADD USER DETAILS</h3>
          <table className="table table-hover table-bordered">
            <thead className="bg-secondary text-white">
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Occupation</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th className="text-center">Date</th>
                <th className="text-center">Edit/Delete</th>
              </tr>
            </thead>
            {addUserInfo.length > 0 && (
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
                        {item.address}, {item.city}, {item.state},{" "}
                        {item.country}, {item.postalCode}
                      </td>
                      <td className="text-center">
                        {moment(item.date).format("ll")}
                      </td>
                      <td className="text-center">
                        <Link to={`/update/user/${item._id}`}>
                          <Icon.PencilSquare className="EditIcon" size={19} />
                        </Link>
                        <Icon.Trash
                          className="DeleteIcon"
                          size={20}
                          onClick={() => DeleteUser(item._id)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            )}
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
    </div>
  );
};

export default UserDetail;
