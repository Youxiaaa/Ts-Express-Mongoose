import userModel from '../models/userModal'
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

export default {
  register: async (req: any, res: any) => {
    try {
      const { username, password } = req.body
      const user = await userModel.findOne({ username })

      if (user) {
        return res.status(401).send({
          code: 401,
          message: '已有此使用者名稱'
        })
      }

      const newUser = new userModel({ username, password })
      newUser.password = await bcrypt.hash(password, 10)
      await newUser.save()

      return res.status(201).send({
        code: 201,
        message: '建立會員成功'
      })
    } catch (err) {
      return res.status(422).send({
        code: 422,
        message: err
      })
    }
  },
  login: async (req: any, res: any) => {
    try {
      const { username, password } = req.body
      const user = await userModel.findOne({ username })

      if (!user) return res.status(404).send({
        code: 401,
        message: '帳號或密碼錯誤'
      })
      
      const isValid = await bcrypt.compare(password, user.password)
      if (!isValid) return res.status(401).send({
        code: 401,
        message: '帳號或密碼錯誤'
      })
      // 設定 token 過期時間
      const expiresIn = '1d'
      const token = jwt.sign({ userId: user._id }, 'secret', { expiresIn })
      return res.status(200).send({
        code: 200,
        message: '登入成功',
        token
      })
    } catch (err) {
      return res.status(422).send({
        code: 422,
        message: err
      })
    }
  }
}