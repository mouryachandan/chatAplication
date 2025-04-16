import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chataplication.onrender.com/api", // Direct URL
  withCredentials: true,
});
