import axios from "axios";

const ClientAxios = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
});
export default ClientAxios;
