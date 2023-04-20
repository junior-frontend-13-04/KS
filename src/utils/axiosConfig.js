import axios from "axios";
axios.defaults.baseURL = "https://localhost:8000";
const API_URL = "/api/refresh";

export const API = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(async (req) => {
  req.headers["Authorization"] = "Bearer" + localStorage.getItem("token");
});

API.interceptors.response.use(async (res) => {
  res.headers["Authorization"] = "Bearer" + localStorage.getItem("token");
});

const login = async (userData) => {
  const response = await axios.post(API_URL + "refresh", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const axiosConfig = { login };
export default axiosConfig;
