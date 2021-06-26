import axios from "axios";

const ClientAxios = axios.create({
  baseURL: "https://api-chatsocket.herokuapp.com",
});
export default ClientAxios;
