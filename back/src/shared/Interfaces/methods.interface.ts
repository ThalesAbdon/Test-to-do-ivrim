/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
export interface IMethods {
  create: (req: Request, res: Response) => Promise<any>;
  read: (
    req: Request<{}, {}, {}, { status: string }>,
    res: Response
  ) => Promise<any>;
  update: (req: Request<{ id: string }>, res: Response) => Promise<any>;
  delete: (req: Request<{ id: string }>, res: Response) => Promise<any>;
}
