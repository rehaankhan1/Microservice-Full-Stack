import axios from "axios";

const customFetch3 = axios.create({
  baseURL: "http://localhost:5300/",
  withCredentials: true,
});

export default customFetch3;
