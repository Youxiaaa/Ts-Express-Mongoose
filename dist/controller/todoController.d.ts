import { Request, Response } from 'express';
declare const _default: {
    add: (req: Request, res: Response) => Promise<void>;
    get: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
export default _default;
