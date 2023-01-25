import axios from "axios";

export const ProfileAPI = async () => {
  const userAccessToken = localStorage.getItem("token");
  const response = await axios.get("http://localhost:5000/api/user/fetchUser", {
    headers: {
      "Content-Type": "application/json",
      Authorization: userAccessToken,
    },
  });
  const data = response;
  return data;
};
