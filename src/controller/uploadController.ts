import fileModel from '../models/fileModel'

export default {
  upload: async (req: any, res: any) => {
    console.log(req.file.path)
    const file: any = new fileModel(
      {
        filename: req.file.filename,
        filetype: req.file.mimetype,
        path: req.file.path
      }
    )
    file
      .save()
      .then((result: any) => {
        res.status(201).json({
          code: 201,
          message: "上傳檔案成功",
          result: result.path
        })
      })
      .catch((err: any) => {
        res.status(400).json({
          code: 400,
          message: '發生錯誤',
          errorMessage: err
        })
      })
  }
}