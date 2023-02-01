import fileModel from '../models/fileModel'

export default {
  upload: async (req: any, res: any) => {
    try {
      const file = new fileModel(
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
            message: err._message
          })
        })
    } catch (err) {
      res.status(400).send({
        code: 400,
        message: req.file
      })
    }
  },
  get: async (req: any, res: any) => {
    console.log(req.params.filename)
    const file = fileModel.findOne({ filename: req.params.filename }, (err: any, file: any) => {
      console.log(file.path)
      if (err) {
        return res.status(400).send({
          code: 400,
          message: err
        })
      }
      if (!file) {
        return res.status(404).send({
          code: 404,
          message: '未找到檔案'
        })
      }
      return res.sendFile(file.path)
    })
  }
}