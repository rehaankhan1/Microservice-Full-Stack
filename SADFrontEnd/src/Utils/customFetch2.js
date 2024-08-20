import axios from "axios";

const customFetch2 = axios.create({
  baseURL: "http://localhost:5100/api/v1",
  withCredentials: true,
});

export default customFetch2;
