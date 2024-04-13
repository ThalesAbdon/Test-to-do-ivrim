import { taskStatus } from "../../../shared/Enums/task-status.enum";
import { ITaskInterface } from "../../../shared/Interfaces/task.interface";
import { TaskServices } from "../task.service";

describe("TaskServices", () => {
  let taskServices: TaskServices;

  const mockTaskModel = {
    create: jest.fn(),
    find: jest.fn(),
    updateOne: jest.fn(),
    findByIdAndDelete: jest.fn(),
  };

  beforeEach(() => {
    taskServices = new TaskServices(mockTaskModel as any);
  });

  it("should create a task", async () => {
    const createSpyOn = jest.spyOn(mockTaskModel, "create");
    const input: Partial<ITaskInterface> = {
      id: "string",
      title: "string",
      description: "string",
      status: taskStatus.InProgress,
    };
    await taskServices.create(input);
    expect(createSpyOn).toHaveBeenCalledTimes(1);
  });

  it("should read tasks by status", async () => {
    const getSpyOn = jest.spyOn(mockTaskModel, "find");
    const status = "A Fazer";
    await taskServices.read(status);
    expect(getSpyOn).toHaveBeenCalledWith({ status });
  });

  it("should update a task", async () => {
    const updateSpyOn = jest.spyOn(mockTaskModel, "updateOne");
    const id = "some-id";
    const input: Partial<ITaskInterface> = {
      id: "string",
      title: "string",
      description: "string",
      status: taskStatus.ToDo,
    };
    await taskServices.update(id, input);
    expect(updateSpyOn).toHaveBeenCalledWith({ _id: id }, { $set: input });
  });

  it("should delete a task", async () => {
    const deleteSpyOn = jest.spyOn(mockTaskModel, "findByIdAndDelete");
    const id = "1";
    await taskServices.delete(id);
    expect(deleteSpyOn).toHaveBeenCalledTimes(1);
  });
});
