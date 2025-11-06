import axios from "axios";

export const API_BASE_URL ="https://two7mern.onrender.com";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;
