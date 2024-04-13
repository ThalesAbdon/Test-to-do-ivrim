import { taskModel } from "../../models/tasks/task.model";
import { ITaskInterface } from "../../shared/Interfaces/task.interface";

export class TaskServices {
    constructor(private readonly _taskModel: typeof taskModel) { }

    async create(input: Partial<ITaskInterface>): Promise<any> {
        return await this._taskModel.create(input)
    }

    async read(status: string): Promise<ITaskInterface[]> {
        return await this._taskModel.find({ status: status })
    }

    async update(id: string, input: Partial<ITaskInterface>): Promise<void> {
        await this._taskModel.updateOne({ _id: id }, { $set: input })
    }

    async delete(id: string): Promise<void> {
        await this._taskModel.findByIdAndDelete({ _id: id })
    }
}