import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status;

      if (status === 401) {
        toast.error("Session expired. Please log in again.");
      } else if (status >= 500) {
        toast.error("Server error. Please try again later.");
      } else {
        // other client-side errors (like validation)
        toast.error(error.response.data?.error || "Something went wrong.");
      }
    } else {
      // if no response, it's likely a network error
      toast.error("Network error. Check your internet connection.");
    }

    return Promise.reject(error);
  }
);

export default api;
