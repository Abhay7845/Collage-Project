import axios from "axios";
import { Headers } from "../../API/Host";
const { headers } = Headers;

export const ProfileAPI = async () => {
  const userAccessToken = localStorage.getItem("token");
  const response = await axios.get("http://localhost:5000/api/user/fetchUser", {
    headers: headers,
    Authorization: userAccessToken,
  });
  const data = response;
  return data;
};
