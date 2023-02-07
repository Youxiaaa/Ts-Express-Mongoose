import { Request, Response } from 'express';
import fileModel from '../models/fileModel';

export default {
  upload: async (req: Request | any, res: Response) => {
    try {
      const file = new fileModel(
        {
          filename: req.file.filename,
          filetype: req.file.mimetype,
          path: req.file.path
        }
      );
      file
        .save()
        .then((result: any) => {
          res.status(201).json({
            code: 201,
            message: '上傳檔案成功',
            result: result.path
          });
        })
        .catch((err: any) => {
          res.status(400).json({
            code: 400,
            message: err._message
          });
        });
    } catch (err) {
      if (req.uploadError) {
        res.status(400).send({
          code: 400,
          message: req.uploadError
        });
      } else {
        res.status(400).send({
          code: 400,
          message: err
        });
      }
    }
  }
};