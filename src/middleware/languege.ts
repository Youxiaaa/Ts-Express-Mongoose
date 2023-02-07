import { Request, Response } from 'express';
const dertyWord = ['fuck', 'fuckyou', 'ass'];

export function filterLanguege(req: Request, res: Response, next: any) {
  const values: string[] = Object.values(req.body);

  values.forEach((str) => {
    // 過濾空白字元
    str = str.replace(/\s*/g, '');

    if (!str) {
      res.status(401).send({
        code: 401,
        message: '字串不可為空'
      });
      return;
    }

    if (dertyWord.includes(str)) {
      res.status(401).send({
        code: 401,
        message: '字串包含不雅文字'
      });
      return;
    }
    next();
  });
}
