import axios from "axios";

const userApi = axios.create({
  baseURL: "https://trd-chat.herokuapp.com/users"
});

export default userApi;
