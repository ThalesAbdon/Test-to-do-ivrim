import { Axios } from "axios";

export const list = async (api: Axios, status: string) => {
  return await api.get("/tasks", { params: { status: status } });
};

export const update = async (api: Axios, id: string, data: Object) => {
  return await api.put(`/tasks/${id}`, { ...data });
};

export const deleteTask = async (api: Axios, id: string) => {
  return await api.delete(`/tasks/${id}`);
};

export const create = async (api: Axios, data: Object) => {
  return await api.post(`/tasks`, { ...data });
};
