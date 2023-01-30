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

      if (!user) return res.status(401).send({
        code: 401,
        message: '帳號或密碼錯誤'
      })
      
      const isValid = await bcrypt.compare(password, user.password)
      if (!isValid) return res.status(401).send({
        code: 401,
        message: '帳號或密碼錯誤'
      })
      const accessToken = jwt.sign({ userId: user._id, type: 'accessToken' }, 'secret', { expiresIn: '10m' })
      const refreshToken = jwt.sign({ userId: user._id, type: 'refreshToken' }, 'refreshSecret', { expiresIn: '1d' })

      return res.status(200).send({
        code: 200,
        message: '登入成功',
        accessToken,
        refreshToken
      })
    } catch (err) {
      return res.status(422).send({
        code: 422,
        message: err
      })
    }
  },
  refreshToken: async (req: any, res: any) => {
    const { refreshToken } = req.body

    if (!refreshToken) {
      return res.status(401).send({
        code: 401,
        message: '拒絕訪問'
      })
    } else {
      const isValid = await verifyToken(refreshToken)
      if (isValid) {
        const refreshDecoded = await jwt.verify(refreshToken, 'refreshSecret')
        const access_token = jwt.sign({ userId: refreshDecoded.userId, type: 'accessToken' }, 'secret', { expiresIn: '10m' })
        const refresh_token = jwt.sign({ userId: refreshDecoded.userId, type: 'refreshToken' }, 'refreshSecret', { expiresIn: '1d' })

        return res.status(200).send({
          code: 200,
          message: '刷新Token成功',
          access_token,
          refresh_token
        })
      } else {
        return res.status(401).send({
          code: 401,
          message: '刷新Token失敗'
        })
      }
    }
  }
}

async function verifyToken (refreshToken: string) {
  try {
    const refreshDecoded = await jwt.verify(refreshToken, 'refreshSecret')
  
    if (refreshDecoded) return true
    return false
  } catch (err) {
    return false
  }
}