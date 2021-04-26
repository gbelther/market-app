import axios from "axios";
// require("dotenv").config();

// import { config } from "dotenv";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
