import React, { useState, useEffect } from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import { HOST_URL } from "../../API/Host";
import AppLoader from "../Common/AppLoader";
import { toast } from "react-toastify";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

const UserDetail = () => {
  const [addUserInfo, setAddUserInfo] = useState([]);
  const [loading, setLoading] = useState("");
  const userAccessToken = localStorage.getItem("token");

  const GetUserDetails = (userAccessToken) => {
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
  };

  useEffect(() => {
    GetUserDetails(userAccessToken);
  }, [userAccessToken]);

  const DeleteUser = (id) => {
    setLoading(true);
    axios
      .delete(`${HOST_URL}/delete/user/${id}`)
      .then((res) => res)
      .then((result) => {
        if (result.data.success === true) {
          toast.success("Data has been Deleted", {
            theme: "colored",
            autoClose: 1000,
          });
          GetUserDetails(userAccessToken);
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
          <Table className="table table-hover table-bordered">
            <Thead className="bg-secondary text-white">
              <Tr>
                <Th>S.No.</Th>
                <Th>Name</Th>
                <Th>Occupation</Th>
                <Th>Email</Th>
                <Th>Phone</Th>
                <Th>Address</Th>
                <Th className="text-center">Date</Th>
                <Th className="text-center">Edit/Delete</Th>
              </Tr>
            </Thead>
            {addUserInfo.length > 0 && (
              <Tbody>
                {addUserInfo.map((item, i) => {
                  return (
                    <Tr key={i}>
                      <Td className="userId"> {i + 1}. </Td>
                      <Td>{item.name}</Td>
                      <Td>{item.occupation}</Td>
                      <Td>{item.email}</Td>
                      <Td>{item.phone}</Td>
                      <Td>
                        {item.address}, {item.city}, {item.state},{" "}
                        {item.country}, {item.postalCode}
                      </Td>
                      <Td className="text-center">
                        {moment(item.date).format("ll")}
                      </Td>
                      <Td className="text-center">
                        <Link to={`/update/user/${item._id}`}>
                          <Icon.PencilSquare className="EditIcon" size={19} />
                        </Link>
                        <Icon.Trash
                          className="DeleteIcon"
                          size={20}
                          onClick={() => DeleteUser(item._id)}
                        />
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            )}
          </Table>
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
