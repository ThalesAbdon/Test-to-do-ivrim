import { Request, Response } from "express";
import { TaskControllers } from "../task.controller";
import { TaskServices } from "../../../services/tasks/task.service";
import { taskStatus } from "../../../shared/Enums/task-status.enum";

describe("TaskControllers", () => {
  let taskControllers: TaskControllers;
  let mockTaskService: TaskServices;
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    mockTaskService = {
      create: jest.fn(),
      read: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    } as any;

    taskControllers = new TaskControllers(mockTaskService);

    mockRequest = {
      body: {},
      params: {},
      query: {},
    };

    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it("should create a task", async () => {
    mockRequest.body = {
      id: "string",
      title: "string",
      description: "string",
      status: taskStatus.InProgress,
    };
    await taskControllers.create(
      mockRequest as Request,
      mockResponse as Response
    );
    expect(mockTaskService.create).toHaveBeenCalledWith(mockRequest.body);
    expect(mockResponse.status).toHaveBeenCalledWith(201);
    expect(mockResponse.json).toHaveBeenCalled();
  });

  it("should throw an error when creating a task", async () => {
    mockRequest.body = {
      id: "string",
      title: "string",
      description: "string",
      status: taskStatus.InProgress,
    };
    const controller = new TaskControllers(null as any);
    const response = await controller.create(
      mockRequest as Request,
      mockResponse as Response
    );
    expect(mockResponse.json).toHaveBeenCalledTimes(1);
  });

  it("should read tasks by status", async () => {
    mockRequest.query = { status: "in progress" };
    await taskControllers.read(
      mockRequest as Request<{}, {}, {}, { status: string }>,
      mockResponse as Response
    );
    expect(mockTaskService.read).toHaveBeenCalledWith("in progress");
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalled();
  });

  it("should throw an error when reading a task", async () => {
    mockRequest.query = { status: "in progress" };
    const controller = new TaskControllers(null as any);
    const response = await controller.read(
      mockRequest as Request<{}, {}, {}, { status: string }>,
      mockResponse as Response
    );
    expect(mockResponse.json).toHaveBeenCalledTimes(1);
  });

  it("should update a task", async () => {
    const updateSpyOn = jest.spyOn(mockTaskService, "update");
    const taskId = "some-id";
    mockRequest.params = { id: taskId };
    mockRequest.body = {
      id: "string",
      title: "string",
      description: "string",
      status: taskStatus.InProgress,
    };
    await taskControllers.update(
      mockRequest as Request<{ id: string }>,
      mockResponse as Response
    );
    expect(updateSpyOn).toHaveBeenCalled();
  });

  it("should delete a task", async () => {
    const deleteSpyOn = jest.spyOn(mockTaskService, "delete");
    const taskId = "some-id";
    mockRequest.params = { id: taskId };
    await taskControllers.delete(
      mockRequest as Request<{ id: string }>,
      mockResponse as Response
    );
    expect(deleteSpyOn).toHaveBeenCalled();
  });
});
