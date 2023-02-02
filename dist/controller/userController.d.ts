import { Request, Response } from 'express';
declare const _default: {
    register: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    login: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    refreshToken: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
};
export default _default;
