/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { IMethods } from "../shared/Interfaces/methods.interface";

export const adapRouterExpress = (methods: IMethods, method: string) => {
  return async (req: Request<any, any, any, any>, res: Response) => {
    return methods[method as keyof IMethods](req, res);
  };
};
