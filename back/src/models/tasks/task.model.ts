import { model } from "mongoose"
import taskSchema from "./task.schema"

export const taskModel = model("tasks", taskSchema)