import { TaskServices } from "../../services/tasks/task.service";
import { Request, Response } from "express";
import { ITaskInterface } from "../../shared/Interfaces/task.interface";
import { IMethods } from "../../shared/Interfaces/methods.interface";

export class TaskControllers implements IMethods {
  constructor(private _taskService: TaskServices) {}

  async create(req: Request<{}, { body: ITaskInterface }>, res: Response) {
    try {
      req.body.dateInit = new Date();
      const data = await this._taskService.create(req.body);
      return res.status(201).json(data);
    } catch (error) {
      return res.status(400).json({ message: "Error ao criar Task!" });
    }
  }

  async read(req: Request<{}, {}, {}, { status: string }>, res: Response) {
    try {
      const data = await this._taskService.read(req.query.status);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json({ message: "Error ao listar!" });
    }
  }

  async update(
    req: Request<{ id: string }, { body: ITaskInterface }>,
    res: Response
  ) {
    try {
      await this._taskService.update(req.params.id, req.body);
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ message: "Error ao Atualizar!" });
    }
  }

  async delete(req: Request<{ id: string }>, res: Response) {
    try {
      await this._taskService.delete(req.params.id);
      return res.status(200).send();
    } catch (error) {
      return res.status(400).json({ message: "Error ao Deletar!" });
    }
  }
}
