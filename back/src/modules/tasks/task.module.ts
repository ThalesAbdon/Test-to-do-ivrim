import { TaskControllers } from "../../controllers/tasks/task.controller";
import { taskModel } from "../../models/tasks/task.model";
import { TaskServices } from "../../services/tasks/task.service";

const taskServices = new TaskServices(taskModel)
export const taskModule = new TaskControllers(taskServices)