import { Request, Response } from 'express'
export interface IMethods {
    //[]: (req: Request<{}, {}, {}, { status: string }>, res: Response) => Promise<any>
    create: (req: Request, res: Response) => Promise<any>
    read: (req: Request<{}, {}, {}, { status: string }>, res: Response) => Promise<any>
    update: (req: Request<{ id: string }>, res: Response) => Promise<any>
    delete: (req: Request<{ id: string }>, res: Response) => Promise<any>
}
