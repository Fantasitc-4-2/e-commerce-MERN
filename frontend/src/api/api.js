// src/api/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // adjust if needed
  withCredentials: true,               // send cookies with every request
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: intercept errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
