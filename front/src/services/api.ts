import { Axios } from "axios";
import { api } from "./axios";

export const list = async (api: Axios, status: string) => {
  return await api.get("/tasks", { params: { status: status } });
};
