import axiosR from "axios";

const axios = axiosR.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});
export default axios;
