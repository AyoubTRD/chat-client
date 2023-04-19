import axios from "axios";

const userApi = axios.create({
  baseURL: "https://chat-api.ayoubtrd.com/users"
});

export default userApi;
