import { taskStatus } from "../Enums/task-status.enum";

export interface ITaskInterface {
    id: string
    title: string,
    description: string,
    status: taskStatus,
    dateInit: Date,
}