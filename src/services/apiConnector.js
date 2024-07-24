import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
console.log("Base URL:", BASE_URL);  // Add this line to check the base URL
console.log("Environment Variable:", process.env.REACT_APP_BASE_URL);
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const apiConnector = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method: method,
    url: url,
    data: bodyData || null,
    headers: headers || null,
    params: params || null,
  });
};
