import axios from "axios";

const userApi = axios.create({
  baseURL: "https://social-media.ayoubtrd.com:5000/users"
});

export default userApi;
