import axios from "axios";

const instance = axios.create({
  baseURL: process.env.BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.AUTHORISATION_TOKEN}`,
  },
  maxBodyLength: Infinity,
});

export default instance;
