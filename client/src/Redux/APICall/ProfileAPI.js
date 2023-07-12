import axios from "axios";
import { HOST_URL } from "../../API/Host";

export const ProfileAPI = async () => {
  const userAccessToken = localStorage.getItem("token");
  const response = await axios.get(`${HOST_URL}/fetchUser`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: userAccessToken,
    },
  });
  const data = response;
  return data;
};
