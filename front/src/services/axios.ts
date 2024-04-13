import axios from "axios";
const envs = import.meta as any;
export const api = axios.create({
  baseURL: "http://localhost:3000",
});
